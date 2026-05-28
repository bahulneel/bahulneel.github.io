#!/bin/bash
#
# Build CV artifacts from public/cv.json (source of truth) via
# scripts/cv_template.mustache and scripts/cv_summary_template.mustache:
#   - public/cv.adoc / public/cv-summary.adoc
#   - public/cv.pdf / public/cv-summary.pdf
# All four outputs are generated-only (gitignored); do not commit them.
#
# Edit public/cv.json (or templates), then run:  npm run build:cv
# Commit only cv.json and script/template sources. CI (.github/workflows/nextjs.yml)
# runs this script before next build on every deploy, so /cv.pdf and /cv-summary.pdf
# are served from public/ without checking in the PDFs.
#
# The two asciidoctor-pdf invocations run in parallel because they are the
# slow steps; the upstream .adoc generation is cheap and runs sequentially.
#
# Prereqs:
#   - node (for the converter)
#   - asciidoctor-pdf available on PATH (gem install asciidoctor-pdf)
#
# Env:
#   BUILD_REFERENCE_DATE  ISO date (YYYY-MM-DD) — passed through to the
#                         converter for reproducible bucketing of experience.

set -u

# 1. Generate both .adoc files.
node scripts/convert_cv.js --mode=full    --out=public/cv.adoc         || exit 1
node scripts/convert_cv.js --mode=summary --out=public/cv-summary.adoc || exit 1

THEME_ARGS=(--theme themes/cv-theme.yml -a pdf-fontsdir=fonts)

# 2. Build the two PDFs concurrently. Capture each background job's exit code
#    explicitly via `wait <pid>` so a failure in either propagates.
asciidoctor-pdf "${THEME_ARGS[@]}" public/cv.adoc         -o public/cv.pdf         &
PID_FULL=$!
asciidoctor-pdf "${THEME_ARGS[@]}" public/cv-summary.adoc -o public/cv-summary.pdf &
PID_SUMMARY=$!

wait "$PID_FULL";    STATUS_FULL=$?
wait "$PID_SUMMARY"; STATUS_SUMMARY=$?

if [ "$STATUS_FULL" -ne 0 ] || [ "$STATUS_SUMMARY" -ne 0 ]; then
  echo "PDF build failed: full=$STATUS_FULL summary=$STATUS_SUMMARY" >&2
  exit 1
fi

echo "Built public/cv.pdf and public/cv-summary.pdf"
