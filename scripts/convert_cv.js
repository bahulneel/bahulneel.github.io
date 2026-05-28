/*
 * Convert public/cv.json into AsciiDoc, in either:
 *   - "full":    the long-form CV (legacy behaviour; default)
 *   - "summary": a recruiter-friendly CV compressed by time-horizon
 *
 * Usage:
 *   node scripts/convert_cv.js                                # full → public/cv.adoc
 *   node scripts/convert_cv.js --mode=full   --out=public/cv.adoc
 *   node scripts/convert_cv.js --mode=summary --out=public/cv-summary.adoc
 *
 * Horizon constants below control how the summary mode compresses experience:
 *   RECENT_HORIZON_YEARS   work that ended within this window is rendered in full
 *   SUMMARY_HORIZON_YEARS  work that ended within this window (but outside the
 *                          recent one) is rendered as a one-paragraph summary
 *   anything older         rendered as a single-line entry
 *
 * REFERENCE_DATE defaults to "now" (build time). For reproducible builds, set
 * the BUILD_REFERENCE_DATE env var to an ISO date, e.g. 2026-05-15.
 */

const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');
const { parseISO, format } = require('date-fns');

// ---------------------------------------------------------------------------
// Tunable constants (top-of-file by design — easy to dial in/out)
// ---------------------------------------------------------------------------
const RECENT_HORIZON_YEARS = 5;
const SUMMARY_HORIZON_YEARS = 12;
const REFERENCE_DATE = process.env.BUILD_REFERENCE_DATE
  ? new Date(process.env.BUILD_REFERENCE_DATE)
  : new Date();

// ---------------------------------------------------------------------------
// CLI parsing
// ---------------------------------------------------------------------------
const args = process.argv.slice(2).reduce((acc, arg) => {
  const m = arg.match(/^--([\w-]+)=(.*)$/);
  if (m) acc[m[1]] = m[2];
  return acc;
}, {});
const mode = args.mode || 'full';
if (mode !== 'full' && mode !== 'summary') {
  console.error(`Unknown mode "${mode}". Expected full|summary.`);
  process.exit(1);
}
const defaultOut = mode === 'summary' ? 'public/cv-summary.adoc' : 'public/cv.adoc';
const defaultTemplate = mode === 'summary'
  ? 'scripts/cv_summary_template.mustache'
  : 'scripts/cv_template.mustache';
const outPath = args.out || defaultOut;
const templatePath = args.template || defaultTemplate;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
Handlebars.registerHelper('formatDate', function (dateStr) {
  if (!dateStr) return 'Present';
  return format(parseISO(dateStr), 'MMMM yyyy');
});

function effectiveEndDate(entry) {
  return entry.endDate ? new Date(entry.endDate + '-01') : REFERENCE_DATE;
}

function yearsBetween(later, earlier) {
  return (later - earlier) / (1000 * 60 * 60 * 24 * 365.25);
}

function bucketForEntry(entry) {
  const y = yearsBetween(REFERENCE_DATE, effectiveEndDate(entry));
  if (y <= RECENT_HORIZON_YEARS) return 'recent';
  if (y <= SUMMARY_HORIZON_YEARS) return 'medium';
  return 'old';
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
console.log(`[convert_cv] mode=${mode} -> ${outPath}`);

const cvData = JSON.parse(fs.readFileSync('public/cv.json', 'utf8'));

let renderData = cvData;
if (mode === 'summary') {
  // Annotate work entries with their bucket and sort by effective end date desc
  // so each bucket renders in reverse-chronological order.
  const annotatedWork = cvData.work
    .map((entry) => ({
      ...entry,
      _bucket: bucketForEntry(entry),
      _effectiveEnd: effectiveEndDate(entry),
    }))
    .sort((a, b) => b._effectiveEnd - a._effectiveEnd);

  const workRecent = annotatedWork.filter((w) => w._bucket === 'recent');
  const workMedium = annotatedWork.filter((w) => w._bucket === 'medium');
  const workOld = annotatedWork.filter((w) => w._bucket === 'old');

  // Project compression: keep Active/WIP in their normal shape; collapse the rest.
  const isCurrent = (p) => p.status === 'Active' || p.status === 'Work in Progress';
  const projectsCurrent = (cvData.projects || []).filter(isCurrent);
  const projectsOlder = (cvData.projects || []).filter((p) => !isCurrent(p));

  renderData = {
    ...cvData,
    workRecent,
    workMedium,
    workOld,
    projectsCurrent,
    projectsOlder,
    _meta: {
      mode,
      referenceDate: REFERENCE_DATE.toISOString().slice(0, 10),
      recentHorizonYears: RECENT_HORIZON_YEARS,
      summaryHorizonYears: SUMMARY_HORIZON_YEARS,
      counts: {
        recent: workRecent.length,
        medium: workMedium.length,
        old: workOld.length,
      },
    },
  };

  console.log(
    `[convert_cv] bucketing as of ${renderData._meta.referenceDate}: ` +
      `recent=${workRecent.length} (≤${RECENT_HORIZON_YEARS}y), ` +
      `medium=${workMedium.length} (≤${SUMMARY_HORIZON_YEARS}y), ` +
      `old=${workOld.length}`,
  );
}

const template = fs.readFileSync(templatePath, 'utf8');
const compiled = Handlebars.compile(template);
const output = compiled(renderData);

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, output);
