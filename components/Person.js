import React from 'react';
import cv from '../public/cv.json';
import ProfileLinks from './ProfileLinks';
import { RichText, workOfType } from '../lib/siteContent';

const Person = () => {
  const homePage = workOfType(cv, 'ProfilePage');
  const website = workOfType(cv, 'WebSite');

  return (
    <div
      className="flex flex-col lg:flex-row-reverse items-center prose prose-sm sm:prose-lg lg:prose-xl p-4 sm:p-6 lg:p-8"
      itemScope
      itemType="https://schema.org/Person"
      itemID={cv.basics['@id']}
    >
      {website?.['@id'] && (
        <a itemProp="subjectOf" href={website['@id']} hidden>
          {website.name}
        </a>
      )}
      {homePage?.['@id'] && (
        <a itemProp="subjectOf" href={homePage['@id']} hidden>
          {homePage.name}
        </a>
      )}
      <meta itemProp="description" content={cv.basics.summary} />
      <img
        src={cv.basics.image}
        alt={`${cv.basics.name}'s profile`}
        className="w-24 h-24 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full mb-4 lg:mb-0 lg:ml-8"
        itemProp="image"
      />
      <div className="flex flex-col">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold" itemProp="name">{cv.basics.name}</h1>
        <div className="text-sm md:text-base lg:text-lg">
          <RichText work={homePage} />
        </div>
        <ProfileLinks className="mt-4 not-prose text-sm" />
      </div>
    </div>
  );
};

export default Person;
