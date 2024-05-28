#!/bin/bash

# Convert cv.json to cv.adoc using Node.js and Mustache
node scripts/convert_cv.js || exit 1

# Convert cv.adoc to cv.pdf using asciidoctor-pdf
asciidoctor-pdf -a pdf-stylesdir=themes -a pdf-style=cv-theme.yml public/cv.adoc -o public/cv.pdf
