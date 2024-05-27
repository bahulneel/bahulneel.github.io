import React from 'react';
import cv from '../public/cv.json';

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long' };
  const newDate = new Date(date);
  return newDate.toLocaleDateString('en-US', options);
};

const EducationComponent = () => {
  return (
    <>
      {cv.education.map((education, index) => (
        <div key={index} className="bg-primary-darkBlue px-6 pt-1 pb-4 rounded-md shadow-md mb-6 text-accent-white">
          <h2 className="text-2xl font-semibold text-accent-orange">{education.institution}</h2>
          <p className="text-accent-white mb-1">
            {education.startDate ? formatDate(education.startDate) : 'Date not available'} -
            {education.endDate ? formatDate(education.endDate) : 'Present'}
          </p>
          <p className="text-accent-white">{education.studyType ? `${education.studyType} in ${education.area}` : 'Degree not specified'}</p>
        </div>
      ))}
    </>
  );
};

export default EducationComponent;
