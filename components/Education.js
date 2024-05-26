import React from 'react';
import cv from '../public/cv.json';

const EducationComponent = () => {
  return (
    <div className="bg-secondary-lightGray p-4 rounded-md shadow-md">
      <h2 className="text-primary-darkBlue font-bold text-2xl mb-4">Education</h2>
      {cv.education.map((education, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-primary-darkBlue font-semibold text-lg">{education.institution}</h3>
          <p className="text-secondary-gray">{education.degree}</p>
          <p className="text-secondary-gray">{education.startDate} - {education.endDate}</p>
          <p className="text-secondary-gray">{education.description}</p>
        </div>
      ))}
    </div>
  );
};

export default EducationComponent;

