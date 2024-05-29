// Experience content
import Head from 'next/head';
import WorkExperience from '../components/WorkExperience';
import Education from '../components/Education';
import cv from '../public/cv.json';

function Page() {
  return (
    <div className="mx-auto p-4 bg-secondary-lightGray" itemscope itemType="http://schema.org/Person" itemID={`${cv.basics.name}`}>
      <Head>
        <title>Experience</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">Professional Experience</h1>
      <WorkExperience />
      <h2 className="text-2xl font-bold mt-6 mb-4">Educational Experience</h2>
      <Education />
    </div>
  );
}
export default Page;
