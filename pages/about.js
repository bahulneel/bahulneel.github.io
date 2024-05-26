// About Me content
import Head from 'next/head';

function Page() {
  return (
    <div className="mx-auto p-4">
      <Head>
        <title>About Me</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4 text-primary-darkBlue">About Me</h1>
      <p className="mb-4 text-secondary-gray">I am a seasoned software architect and developer with a deep passion for building innovative software solutions that enhance user experiences and business outcomes. With over 20 years of experience, my expertise spans across data platform development, web systems, and team leadership.</p>
      <p className="mb-4 text-secondary-gray">I am committed to staying at the forefront of technology through continuous learning and application of new technologies. My career goals include leading large-scale projects that leverage cutting-edge technologies to solve complex problems.</p>
      <p className="text-secondary-gray">Outside of work, I enjoy contributing to open source projects, writing technical articles, and sharing my knowledge through speaking engagements at industry conferences.</p>
    </div>
  );
}

export default Page;
