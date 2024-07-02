// Import required modules
const fs = require('fs');
const Handlebars = require('handlebars');
const { parseISO, format } = require('date-fns');
console.log('Writing to cv.adoc');

// Read the CV JSON data
const cvData = JSON.parse(fs.readFileSync('public/cv.json', 'utf8'));

// Register a helper to format date
Handlebars.registerHelper('formatDate', function (dateStr) {
  if (!dateStr) {
    return 'Present';
  }
  const date = format(parseISO(dateStr), 'MMMM yyyy');
  return date;
});

// Load the Handlebars template from cv_template.mustache
const template = fs.readFileSync('scripts/cv_template.mustache', 'utf8');
const handlebarsTemplate = Handlebars.compile(template);

// Render the template with the CV data
const output = handlebarsTemplate(cvData);

// Write the output to cv.adoc
fs.writeFileSync('public/cv.adoc', output);

