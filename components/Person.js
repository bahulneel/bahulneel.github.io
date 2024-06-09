import React from 'react';
import cv from '../public/cv.json';

const Person = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse items-center prose prose-sm sm:prose-lg lg:prose-xl p-4 sm:p-6 lg:p-8" itemScope itemType="https://schema.org/Person" itemID={`${cv.basics.name}`}>
      <img src={cv.basics.image} alt={`${cv.basics.name}'s profile`} className="w-24 h-24 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full mb-4 lg:mb-0 lg:ml-8" itemProp="image" />
      <div className="flex flex-col">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold" itemProp="name">{cv.basics.name}</h1>
        <p className="text-sm md:text-base lg:text-lg" itemProp="description">{cv.basics.summary}</p>
      </div>
    </div>
  );
};

export default Person;
