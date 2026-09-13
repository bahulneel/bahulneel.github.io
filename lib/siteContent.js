import React from 'react';
import {
  aboutPageWork,
  cvSummaryFromSite,
  homePageWork,
  siteWorks,
  textParagraphs,
  websiteWork,
  workOfType,
  workWithUrl,
} from './siteWorks';

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

export {
  aboutPageWork,
  cvSummaryFromSite,
  homePageWork,
  siteWorks,
  textParagraphs,
  websiteWork,
  workOfType,
  workWithUrl,
};
