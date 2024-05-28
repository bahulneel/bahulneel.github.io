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
        <div key={index} className="bg-primary-darkBlue px-8 py-6 rounded-lg shadow-lg mb-8 text-accent-white flex flex-col">
          <h2 className="text-accent-lightBlue text-lg mb-2 mt-0">{education.institution}</h2>
          <p className="text-base mb-2">
            {education.startDate && formatDate(education.startDate)}{education.startDate && education.endDate ? ' - ' : ''}{education.endDate ? formatDate(education.endDate) : 'Present'}
          </p>
          <p className="text-base mb-0">{education.studyType ? `${education.studyType} in ${education.area}` : 'Degree not specified'}</p>
        </div>
      ))}
    </>
  );
};

export default EducationComponent;
