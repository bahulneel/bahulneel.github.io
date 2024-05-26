import React from 'react';
import cv from '../public/cv.json';

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long' };
  const newDate = new Date(date);
  return newDate.toLocaleDateString('en-US', options);
};

const WorkExperienceComponent = () => {
  return (
    <>
      {cv.work.map((job, index) => (
        <div key={index} className="bg-secondary-gray p-4 rounded-md shadow-md mb-4">
          <h2 className="text-2xl font-semibold">{job.position} at {job.company}</h2>
          <p className="text-accent-white">{formatDate(job.startDate)} - {job.endDate ? formatDate(job.endDate) : 'Present'}</p>
          <p className="text-accent-white">{job.summary}</p>
        </div>
      ))}
    </>
  );
};

export default WorkExperienceComponent;
