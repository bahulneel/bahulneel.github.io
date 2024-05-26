import React from 'react';
import cv from '../public/cv.json';

const HomeComponent = () => {
  return (
    <div>
      <img src={cv.basics.picture} alt={`${cv.basics.name}'s profile`} style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
      <h1>{cv.basics.name}</h1>
      <p>{cv.basics.summary}</p>
      <h2>Contact</h2>
      <ul>
        <li>Email: {cv.basics.email}</li>
        <li>Phone: {cv.basics.phone}</li>
        <li>LinkedIn: {cv.basics.profiles.find(profile => profile.network === "LinkedIn").url}</li>
      </ul>
    </div>
  );
};

export default HomeComponent;

