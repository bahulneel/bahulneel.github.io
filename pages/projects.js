// Projects content
import Head from 'next/head';

function Page() {
  return (
    <div className="mx-auto p-4">
      <Head>
        <title>Projects</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4 text-accent-white">Projects Portfolio</h1>
      <div className="mb-6 bg-gradient-to-r from-gradient-start to-gradient-end p-4 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-accent-white">Hybr Product Platform</h2>
        <p className="mb-2 text-accent-white">A comprehensive platform for managing digital assets and workflows.</p>
        <a href="https://github.com/bahulneel/hybr-platform" className="text-accent-orange hover:underline">View Repository</a>
      </div>
      <div className="mb-6 bg-gradient-to-r from-gradient-start to-gradient-end p-4 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-accent-white">Synthetic Data Generator</h2>
        <p className="mb-2 text-accent-white">A tool developed for generating synthetic data to train machine learning models without compromising sensitive information.</p>
        <a href="https://github.com/bahulneel/synthetic-data-generator" className="text-accent-orange hover:underline">View Repository</a>
      </div>
      {/* Additional projects can be added here in a similar format */}
    </div>
  );
}
export default Page;
