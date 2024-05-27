import React from 'react';
import cv from '../public/cv.json';

const HomeComponent = () => {
  return (
    <div className="flex flex-row items-center prose prose-sm sm:prose-lg lg:prose-xl p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col mr-4 sm:mr-6 lg:mr-8">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">{cv.basics.name}</h1>
        <p className="text-sm md:text-base lg:text-lg">{cv.basics.summary}</p>
      </div>
      <img src={cv.basics.picture} alt={`${cv.basics.name}'s profile`} className="w-24 h-24 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full" />
    </div>
  );
};

export default HomeComponent;

