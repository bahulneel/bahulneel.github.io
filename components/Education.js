import React from 'react';
import cv from '../public/cv.json';

const Education = () => {
  return (
    <>
      {cv.education.map((education, index) => (
        <div key={index} className="bg-primary-darkBlue px-8 py-6 rounded-lg shadow-lg mb-8 text-accent-white flex flex-col" itemscope itemType="https://schema.org/EducationalOrganization">
          <h2 className="text-accent-lightBlue text-lg mb-2 mt-0" itemProp="name">{education.institution}</h2>
          <p className="text-base mb-0" itemProp="educationCredentialAwarded">{education.studyType ? `${education.studyType} in ${education.area}` : 'Degree not specified'}</p>
        </div>
      ))}
    </>
  );
};

export default Education;
