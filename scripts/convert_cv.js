// Import required modules
const fs = require('fs');
const Mustache = require('mustache');
const { format, parseISO } = require('date-fns');
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

// Define the Mustache template with corrected date formatting
const template = `
= {{{basics.name}}}
Email: {{{basics.email}}} | GitHub: {{#basics.profiles}}{{#github}}{{{url}}}{{/github}}{{/basics.profiles}} | LinkedIn: {{#basics.profiles}}{{#linkedin}}{{{url}}}{{/linkedin}}{{/basics.profiles}} | Location: {{{basics.location.city}}}, {{{basics.location.country}}}
Phone: {{{basics.phone}}}

== Professional Summary

{{{basics.summary}}}

== Professional Experience

{{#work}}
=== {{{company}}}
*{{{position}}}*
_{{#formatDate}}{{startDate}}{{/formatDate}} - {{#formatDate}}{{endDate}}{{/formatDate}}_

{{#highlights}}
- {{{.}}}
{{/highlights}}

{{/work}}

== Technical Skills

{{#skills}}
**{{{name}}}:** {{#keywords}}{{{.}}}, {{/keywords}}

{{/skills}}

== Education

{{#education}}
**{{{studyType}}} in {{{area}}}**
{{{institution}}}
{{/education}}
`;

// Render the template with the CV data and custom formatting for dates
const output = Mustache.render(template, {
  ...cvData,
  formatDate
});

// Write the output to cv.adoc
fs.writeFileSync('public/cv.adoc', output);
