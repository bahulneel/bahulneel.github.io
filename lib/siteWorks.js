function typesOf(work) {
  const type = work?.['@type'];
  if (!type) return [];
  return Array.isArray(type) ? type : [type];
}

function siteWorks(cv) {
  return cv?.basics?.subjectOf ?? [];
}

function workOfType(cv, type) {
  return siteWorks(cv).find((work) => typesOf(work).includes(type));
}

function workWithUrl(cv, url) {
  return siteWorks(cv).find((work) => work.url === url);
}

function homePageWork(cv) {
  return (
    workOfType(cv, 'ProfilePage')
    || siteWorks(cv).find((work) => (
      typesOf(work).includes('WebPage') && !typesOf(work).includes('AboutPage')
    ))
  );
}

function websiteWork(cv) {
  return workOfType(cv, 'WebSite');
}

function aboutPageWork(cv) {
  return workOfType(cv, 'AboutPage');
}

function workCopy(work) {
  if (!work) return '';
  return work.text || work.description || '';
}

// CV district summary is taken from the site CreativeWorks, not from Person.summary.
function cvSummaryFromSite(cv) {
  return workCopy(websiteWork(cv)) || workCopy(homePageWork(cv));
}

function textParagraphs(work) {
  const text = workCopy(work);
  if (!text) return [];
  return text
    .split(/\n\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

module.exports = {
  typesOf,
  siteWorks,
  workOfType,
  workWithUrl,
  homePageWork,
  websiteWork,
  aboutPageWork,
  workCopy,
  cvSummaryFromSite,
  textParagraphs,
};
