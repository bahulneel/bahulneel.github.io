import React from 'react';
import Card from './Card';
import cv from '../public/cv.json';

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long' };
  const newDate = new Date(date);
  return newDate.toLocaleDateString('en-US', options);
};

const WorkExperience = () => {
  return (
    <>
      {cv.work.map((job, index) => (
        <Card
          key={index}
          title={`${job.position} at ${job.company}`}
          subtitle={`${formatDate(job.startDate)} - ${job.endDate ? formatDate(job.endDate) : 'Present'}`}
          content={<p itemProp="description">{job.summary}</p>}
          itemScope
          itemType="http://schema.org/EmployeeRole"
          itemProp={{ title: 'roleName', subtitle: 'startDate', content: 'description' }}
        />
      ))}
    </>
  );
};

export default WorkExperience;
