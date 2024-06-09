import React from 'react';

const ProjectEntry = ({ title, description, repoLink, status, type }) => {
  return (
    <div className="bg-primary-darkBlue px-8 py-6 rounded-lg shadow-lg mb-8 text-accent-white flex flex-col" itemscope itemtype="http://schema.org/CreativeWork">
      <h2 className="text-accent-lightBlue text-lg mb-2 mt-0" itemprop="name">{title}</h2>
      <p className="text-base mb-2" itemprop="description">{description}</p>
      <p className="text-sm mb-2"><strong>Status:</strong> <span itemprop="creativeWorkStatus">{status}</span></p>
      <p className="text-sm mb-2"><strong>Type:</strong> <span itemprop="genre">{type}</span></p>
      <a href={repoLink} className="hover:underline" itemprop="url">{type === 'Commercial' ? 'View Site' : 'View Repository'}</a>
    </div>
  );
};

export default ProjectEntry;
