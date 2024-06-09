import React from 'react';

const ProjectEntry = ({ title, description, repoLink, status, type, link, highlights }) => {
  return (
    <div className="bg-primary-darkBlue px-8 py-6 rounded-lg shadow-lg mb-8 text-accent-white flex flex-col" itemscope itemtype="http://schema.org/CreativeWork">
      <a href={type === 'Commercial' ? link : repoLink} className="no-underline hover:underline" itemprop="url">
        <h2 className="text-accent-lightBlue text-lg mb-2 mt-0" itemprop="name">{title}</h2>
      </a>
      <p className="text-sm my-0"><strong>Status:</strong> <span itemprop="creativeWorkStatus">{status}</span></p>
      <p className="text-sm my-0"><strong>Type:</strong> <span itemprop="genre">{type}</span></p>
      <p className="text-base my-0" itemprop="description">{description}</p>
      {highlights && highlights.length > 0 && (
        <ul className="list-disc list-inside">
          {highlights.map((highlight, index) => (
            <li key={index} className="text-base">{highlight}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProjectEntry;

