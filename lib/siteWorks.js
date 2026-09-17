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

function workAbstract(work) {
  return work?.abstract || '';
}

// A work's scannable highlights: the first ItemList among its parts.
function workHighlights(work) {
  const parts = work?.hasPart;
  const candidates = Array.isArray(parts) ? parts : [parts].filter(Boolean);
  const list = candidates.find((part) => typesOf(part).includes('ItemList'));
  if (!list) return null;

  return {
    name: list.name || '',
    items: (list.itemListElement || []).map((item) => ({
      id: item['@id'] || `${item.position ?? ''}-${item.name}`,
      name: item.name,
      description: item.description,
    })),
  };
}

// CV district summary is taken from the site CreativeWorks, not from Person.summary.
function cvSummaryFromSite(cv) {
  return workCopy(websiteWork(cv)) || workCopy(homePageWork(cv));
}

function paragraphs(text) {
  if (!text) return [];
  return text
    .split(/\n\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

function textParagraphs(work) {
  return paragraphs(workCopy(work));
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
  workAbstract,
  workHighlights,
  cvSummaryFromSite,
  paragraphs,
  textParagraphs,
};
