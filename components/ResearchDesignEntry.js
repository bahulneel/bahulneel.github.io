import React from 'react';
import Card from './Card';

const REFERENCE_LABELS = {
  spec: 'Specification',
  repo: 'Repository',
  docs: 'Documentation',
  article: 'Article',
};

function ReferenceLinks({ references }) {
  if (!references) return null;

  const entries = Object.entries(references).filter(([, url]) => url);
  if (entries.length === 0) return null;

  return (
    <p className="text-sm mt-2">
      {entries.map(([key, url], index) => (
        <span key={key}>
          {index > 0 && ' · '}
          <a href={url} className="text-accent-lightBlue hover:underline">
            {REFERENCE_LABELS[key] || key}
          </a>
        </span>
      ))}
    </p>
  );
}

const ResearchDesignEntry = ({ name, summary, kind, status, references, relatedProject, muted = false }) => {
  const card = (
    <Card
      title={name}
      subtitle={`${kind} · ${status}${relatedProject ? ` · see ${relatedProject}` : ''}`}
      content={
        <>
          <p itemProp="description">{summary}</p>
          <ReferenceLinks references={references} />
        </>
      }
      itemScope
      itemType="http://schema.org/CreativeWork"
      itemProp={{ title: 'name', subtitle: 'creativeWorkStatus', content: 'description' }}
    />
  );

  if (muted) return <div className="opacity-70">{card}</div>;
  return card;
};

export default ResearchDesignEntry;
