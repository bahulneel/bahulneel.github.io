import React from 'react';
import Card from './Card';
import cv from '../public/cv.json';

const Education = () => {
  return (
    <>
      {cv.education.map((education, index) => (
        <Card
          key={index}
          title={education.institution}
          subtitle={education.studyType ? `${education.studyType} in ${education.area}` : 'Degree not specified'}
          content={null}
          itemScope
          itemType="http://schema.org/EducationalOrganization"
          itemProp={{ title: 'name', subtitle: 'educationCredentialAwarded', content: null }}
        />
      ))}
    </>
  );
};

export default Education;
