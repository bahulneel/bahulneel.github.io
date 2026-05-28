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
 * Slot constants below control how the summary mode compresses experience.
 * Work entries are sorted by effective end date desc (ongoing roles count as
 * ending "today"), then sliced into three tiers:
 *   SUMMARY_FULL_SLOTS      top N: position, company, dates, summary, bullets
 *   SUMMARY_BULLETS_SLOTS   next N: position, company, dates, bullets only
 *   everything after        one-line entry: dates — position, company
 *
 * REFERENCE_DATE defaults to "now" (build time). For reproducible builds, set
 * the BUILD_REFERENCE_DATE env var to an ISO date, e.g. 2026-05-15. It is
 * only used to give ongoing engagements (no endDate) a sortable end date.
 */

const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');
const { parseISO, format } = require('date-fns');

// ---------------------------------------------------------------------------
// Tunable constants (top-of-file by design — easy to dial in/out)
// ---------------------------------------------------------------------------
const SUMMARY_FULL_SLOTS = 2;
const SUMMARY_BULLETS_SLOTS = 3;
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

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
console.log(`[convert_cv] mode=${mode} -> ${outPath}`);

const cvData = JSON.parse(fs.readFileSync('public/cv.json', 'utf8'));

let renderData = cvData;
if (mode === 'summary') {
  // Sort work entries by effective end date desc (ongoing roles end "today")
  // and slice into three slot-based tiers. Sort is intentionally simple — no
  // special-casing — so the natural recency order does the work.
  const annotatedWork = cvData.work
    .map((entry) => ({
      ...entry,
      _effectiveEnd: effectiveEndDate(entry),
    }))
    .sort((a, b) => b._effectiveEnd - a._effectiveEnd);

  const fullEnd = SUMMARY_FULL_SLOTS;
  const bulletsEnd = SUMMARY_FULL_SLOTS + SUMMARY_BULLETS_SLOTS;
  const workFull = annotatedWork.slice(0, fullEnd);
  const workBullets = annotatedWork.slice(fullEnd, bulletsEnd);
  const workOneLiner = annotatedWork.slice(bulletsEnd);

  renderData = {
    ...cvData,
    workFull,
    workBullets,
    workOneLiner,
    _meta: {
      mode,
      referenceDate: REFERENCE_DATE.toISOString().slice(0, 10),
      summaryFullSlots: SUMMARY_FULL_SLOTS,
      summaryBulletsSlots: SUMMARY_BULLETS_SLOTS,
      counts: {
        full: workFull.length,
        bullets: workBullets.length,
        oneLiner: workOneLiner.length,
      },
    },
  };

  console.log(
    `[convert_cv] slot tiers as of ${renderData._meta.referenceDate}: ` +
      `full=${workFull.length} (cap ${SUMMARY_FULL_SLOTS}), ` +
      `bullets=${workBullets.length} (cap ${SUMMARY_BULLETS_SLOTS}), ` +
      `one-liner=${workOneLiner.length}`,
  );
}

const template = fs.readFileSync(templatePath, 'utf8');
const compiled = Handlebars.compile(template);
const output = compiled(renderData);

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, output);
