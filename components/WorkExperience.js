import React from 'react';
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
        <div key={index} className="bg-primary-darkBlue px-8 py-6 rounded-lg shadow-lg mb-8 text-accent-white flex flex-col" itemscope itemType="http://schema.org/EmployeeRole">
          <h2 className="text-accent-lightBlue text-lg mb-2 mt-0" itemProp="roleName">{job.position} at <span itemProp="worksFor" itemscope itemType="http://schema.org/Organization"><span itemProp="name">{job.company}</span></span></h2>
          <p className="text-base mb-2" itemProp="startDate" content={job.startDate}>{formatDate(job.startDate)} - <span itemProp="endDate" content={job.endDate ? job.endDate : ''}>{job.endDate ? formatDate(job.endDate) : 'Present'}</span></p>
          <p className="text-base mb-0" itemProp="description">{job.summary}</p>
        </div>
      ))}
    </>
  );
};

export default WorkExperience;
