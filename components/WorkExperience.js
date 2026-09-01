import React from 'react';
import Card from './Card';
import cv from '../public/cv.json';

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long' };
  const newDate = new Date(date);
  return newDate.toLocaleDateString('en-US', options);
};

// Entries are appended to cv.json as roles happen, so order there is arbitrary.
// Ongoing roles sort ahead of everything with a recorded end date.
const effectiveEnd = (job) =>
  job.endDate ? new Date(`${job.endDate}-01`).getTime() : Number.POSITIVE_INFINITY;

const workByRecency = [...cv.work].sort((a, b) => effectiveEnd(b) - effectiveEnd(a));

const WorkExperience = () => {
  return (
    <>
      {workByRecency.map((job, index) => (
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
