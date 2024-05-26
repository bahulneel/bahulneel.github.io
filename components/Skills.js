import React from 'react';
import cv from '../public/cv.json';

const SkillsComponent = () => {
  return (
    <div>
      <ul>
        {cv.skills.map((skill, index) => (
          <li key={index}>
            <strong>{skill.name}:</strong> {skill.keywords.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsComponent;

