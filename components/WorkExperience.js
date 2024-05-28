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
        <div key={index} className="bg-primary-darkBlue px-8 py-6 rounded-lg shadow-lg mb-8 text-accent-white flex flex-col" itemscope itemtype="http://schema.org/EmployeeRole">
          <h2 className="text-accent-lightBlue text-lg mb-2 mt-0" itemprop="roleName">{job.position} at <span itemprop="worksFor" itemscope itemtype="http://schema.org/Organization"><span itemprop="name">{job.company}</span></span></h2>
          <p className="text-base mb-2" itemprop="startDate" content={job.startDate}>{formatDate(job.startDate)} - <span itemprop="endDate" content={job.endDate ? job.endDate : ''}>{job.endDate ? formatDate(job.endDate) : 'Present'}</span></p>
          <p className="text-base mb-0" itemprop="description">{job.summary}</p>
        </div>
      ))}
    </>
  );
};

export default WorkExperience;
