import React from 'react';
import cv from '../public/cv.json';

const SkillsComponent = () => {
  return (
    <div className="bg-primary-darkBlue px-8 py-4 rounded-lg shadow-lg mb-8 text-accent-white">
      <ul className="list-disc list-inside space-y-4">
        {cv.skills.map((skill, index) => (
          <li key={index} className="flex flex-col">
            <strong className="text-accent-orange text-lg mb-1">{skill.name}:</strong>
            <span className="text-base">{skill.keywords.join(', ')}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsComponent;

