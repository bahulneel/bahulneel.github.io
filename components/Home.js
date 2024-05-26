import React from 'react';
import cv from '../public/cv.json';

const HomeComponent = () => {
  return (
    <div className="flex flex-col items-center">
      <img src={cv.basics.picture} alt={`${cv.basics.name}'s profile`} className="w-36 h-36 rounded-full" />
      <h1 className="text-2xl font-bold mt-4">{cv.basics.name}</h1>
      <p className="mt-2">{cv.basics.summary}</p>
      <h2 className="mt-4">Contact</h2>
      <ul className="list-disc list-inside">
        <li className="mt-2">Email: {cv.basics.email}</li>
        <li className="mt-2">Phone: {cv.basics.phone}</li>
        <li className="mt-2">LinkedIn: {cv.basics.profiles.find(profile => profile.network === "LinkedIn").url}</li>
      </ul>
    </div>
  );
};

export default HomeComponent;

