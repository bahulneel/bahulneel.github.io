// Experience content
import Head from 'next/head';
import WorkExperienceComponent from '../components/WorkExperience';

function Page() {
  return (
    <div className="mx-auto p-4 bg-primary-darkBlue text-accent-white">
      <Head>
        <title>Experience</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">Professional Experience</h1>
      <WorkExperienceComponent />
    </div>
  );
}
export default Page;

