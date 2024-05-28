import React from 'react';
import cv from '../public/cv.json';

const SkillsComponent = () => {
  return (
    <ul className="list-disc list-inside space-y-4">
      {cv.skills.map((skill, index) => (
        <li key={index} className="bg-primary-darkBlue px-8 py-4 rounded-lg shadow-lg mb-8 text-accent-white flex flex-col">
          <h3 className="text-accent-lightBlue text-lg mb-1 mt-0">{skill.name}</h3>
          <span className="text-base">{skill.keywords.join(', ')}</span>
        </li>
      ))}
    </ul>
  );
};

export default SkillsComponent;

