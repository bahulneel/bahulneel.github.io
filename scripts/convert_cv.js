// Import required modules
const fs = require('fs');
const Handlebars = require('handlebars');
console.log('Writing to cv.adoc');

// Read the CV JSON data
const cvData = JSON.parse(fs.readFileSync('public/cv.json', 'utf8'));

// Helper to format date
function formatDate() {
  return function (dateStr, render) {

    if (!dateStr) {
      return 'Present';
    }
    const date = format(parseISO(render(dateStr)), 'MMMM yyyy');
    return date;
  }
}

// Load the Handlebars template from cv_template.mustache
const template = fs.readFileSync('scripts/cv_template.mustache', 'utf8');
const handlebarsTemplate = Handlebars.compile(template);

// Render the template with the CV data and custom formatting for dates
const output = handlebarsTemplate({
  ...cvData,
  formatDate
});

// Write the output to cv.adoc
fs.writeFileSync('public/cv.adoc', output);

