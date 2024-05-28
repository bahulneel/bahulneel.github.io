#!/bin/bash

# Convert cv.json to cv.adoc using Node.js and Mustache
node scripts/convert_cv.js || exit 1

# Convert cv.adoc to cv.pdf using asciidoctor-pdf with a sans-serif font
asciidoctor-pdf --theme themes/cv-theme.yml -a pdf-fontsdir=fonts public/cv.adoc -o public/cv.pdf || exit 1
