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
        <div key={index} className="bg-primary-darkBlue px-8 py-6 rounded-lg shadow-lg mb-8 text-accent-white flex flex-col">
          <h2 className="text-accent-lightBlue text-lg mb-2 mt-0">{job.position} at {job.company}</h2>
          <p className="text-base mb-2">{formatDate(job.startDate)} - {job.endDate ? formatDate(job.endDate) : 'Present'}</p>
          <p className="text-base mb-0">{job.summary}</p>
        </div>
      ))}
    </>
  );
};

export default WorkExperienceComponent;
