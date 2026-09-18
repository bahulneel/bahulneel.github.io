import React from 'react';
import cv from '../public/cv.json';
import ProfileLinks from './ProfileLinks';
import {
  InlineText,
  RichText,
  cvSummaryFromSite,
  homePageWork,
  websiteWork,
  workAbstract,
  workHighlights,
} from '../lib/siteContent';

const Person = () => {
  const homePage = homePageWork(cv);
  const website = websiteWork(cv);
  const summary = cvSummaryFromSite(cv);
  const abstract = workAbstract(homePage);
  const highlights = workHighlights(homePage);

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
      {summary && <meta itemProp="description" content={summary} />}
      <img
        src={cv.basics.image}
        alt={`${cv.basics.name}'s profile`}
        className="w-24 h-24 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full mb-4 lg:mb-0 lg:ml-8"
        itemProp="image"
      />
      <div className="flex flex-col">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold !mb-2" itemProp="name">
          {cv.basics.name}
        </h1>
        {homePage?.headline && (
          <p className="text-primary-teal font-semibold !mt-0 !mb-3">{homePage.headline}</p>
        )}
        {abstract && <p className="text-sm md:text-base lg:text-lg !mt-0">{abstract}</p>}
        {highlights && (
          <>
            {highlights.name && (
              <h2 className="text-sm md:text-base uppercase tracking-wide text-secondary-gray !mb-2">
                {highlights.name}
              </h2>
            )}
            <ul className="text-sm md:text-base lg:text-lg !mt-0">
              {highlights.items.map((item) => (
                <li key={item.id}>
                  <strong>{item.name}</strong>
                  {item.description && (
                    <>
                      {' — '}
                      <InlineText text={item.description} keyPrefix={item.id} />
                    </>
                  )}
                </li>
              ))}
            </ul>
          </>
        )}
        <div className="text-sm md:text-base">
          <RichText work={homePage} />
        </div>
        <ProfileLinks className="mt-4 not-prose text-sm" />
      </div>
    </div>
  );
};

export default Person;
