import React from 'react';
import cv from '../public/cv.json';

const EducationComponent = () => {
  return (
    <div>
      <h2>Education</h2>
      {cv.education.map((education, index) => (
        <div key={index}>
          <h3>{education.institution}</h3>
          <p>{education.degree}</p>
          <p>{education.startDate} - {education.endDate}</p>
          <p>{education.description}</p>
        </div>
      ))}
    </div>
  );
};

export default EducationComponent;

