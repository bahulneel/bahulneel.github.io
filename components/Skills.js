import React from 'react';
import Card from './Card';
import cv from '../public/cv.json';

const Skills = () => {
  return (
    <ul className="list-disc list-inside space-y-4" itemScope itemType="https://schema.org/ItemList">
      {cv.skills.map((skill, index) => (
        <li key={index} className="list-none">
          <Card
            title={skill.name}
            content={<p className="text-base" itemProp="description">{skill.keywords.sort().join(', ')}.</p>}
            itemScope
            itemType="https://schema.org/ListItem"
            itemProp={{ title: 'name', content: 'description' }}
          />
        </li>
      ))}
    </ul>
  );
};

export default Skills;
