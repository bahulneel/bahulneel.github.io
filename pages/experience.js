// Experience content
import Head from 'next/head';
import WorkExperienceComponent from '../components/WorkExperience';
import EducationComponent from '../components/Education';

function Page() {
  return (
    <div className="mx-auto p-4 bg-secondary-lightGray">
      <Head>
        <title>Experience</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">Professional Experience</h1>
      <WorkExperienceComponent />
      <h2 className="text-2xl font-bold mt-6 mb-4">Educational Experience</h2>
      <EducationComponent />
    </div>
  );
}
export default Page;
