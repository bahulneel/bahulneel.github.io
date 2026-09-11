import React from 'react';

function typesOf(work) {
  const type = work?.['@type'];
  if (!type) return [];
  return Array.isArray(type) ? type : [type];
}

export function siteWorks(cv) {
  return cv?.basics?.subjectOf ?? [];
}

export function workOfType(cv, type) {
  return siteWorks(cv).find((work) => typesOf(work).includes(type));
}

export function workWithUrl(cv, url) {
  return siteWorks(cv).find((work) => work.url === url);
}

export function textParagraphs(work) {
  if (!work?.text) return [];
  return work.text
    .split(/\n\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

function renderInline(text, keyPrefix) {
  const nodes = [];
  const pattern = /\[([^\]]+)\]\(([^)]+)\)|\*([^*]+)\*/g;
  let lastIndex = 0;
  let match;
  let part = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    if (match[1] != null) {
      nodes.push(
        <a key={`${keyPrefix}-link-${part}`} href={match[2]}>
          {match[1]}
        </a>,
      );
    } else {
      nodes.push(<em key={`${keyPrefix}-em-${part}`}>{match[3]}</em>);
    }
    part += 1;
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

export function RichText({ work, paragraphClassName }) {
  return textParagraphs(work).map((paragraph, index) => (
    <p key={index} className={paragraphClassName}>
      {renderInline(paragraph, index)}
    </p>
  ));
}
