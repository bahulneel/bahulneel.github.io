import React from 'react';
import cv from '../public/cv.json';

const Skills = () => {
  return (
    <ul className="list-disc list-inside space-y-4" itemscope itemType="https://schema.org/ItemList">
      {cv.skills.map((skill, index) => (
        <li key={index} className="bg-primary-darkBlue px-8 py-4 rounded-lg shadow-lg mb-8 text-accent-white flex flex-col" itemProp="itemListElement" itemscope itemType="https://schema.org/ListItem">
          <meta itemProp="position" content={index + 1} />
          <h3 className="text-accent-lightBlue text-lg mb-1 mt-0" itemProp="name">{skill.name}</h3>
          <span className="text-base" itemProp="description">{skill.keywords.sort().join(', ')}.</span>
        </li>
      ))}
    </ul>
  );
};

export default Skills;


