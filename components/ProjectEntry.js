import React from 'react';
import Card from './Card';

const ProjectEntry = ({ title, description, repoLink, status, type, link, highlights }) => {
  return (
    <Card
      title={title}
      subtitle={`Status: ${status} | Type: ${type}`}
      content={
        <>
          <p itemProp="description">{description}</p>
          {highlights && highlights.length > 0 && (
            <ul className="list-disc list-inside">
              {highlights.map((highlight, index) => (
                <li key={index} className="text-base">{highlight}</li>
              ))}
            </ul>
          )}
        </>
      }
      itemScope
      itemType="http://schema.org/CreativeWork"
      itemProp={{ title: 'name', subtitle: 'creativeWorkStatus', content: 'description' }}
    />
  );
};

export default ProjectEntry;
