import React from 'react';
import cv from '../public/cv.json';

const SkillsComponent = () => {
  return (
    <div className="bg-secondary-lightGray p-4 rounded-md shadow-md">
      <h2 className="font-bold text-2xl mb-4">Skills</h2>
      <ul className="list-disc list-inside">
        {cv.skills.map((skill, index) => (
          <li key={index} className="mb-2">
            <strong>{skill.name}:</strong> {skill.keywords.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsComponent;

