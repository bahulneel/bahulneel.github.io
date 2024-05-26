
// Projects content
import Head from 'next/head';

function Page() {
  return (
    <div className="container mx-auto px-4 py-6">
      <Head>
        <title>Projects</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">Projects Portfolio</h1>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Hybr Product Platform</h2>
        <p className="mb-2">A comprehensive platform for managing digital assets and workflows.</p>
        <a href="https://github.com/bahulneel/hybr-platform" className="text-blue-500 hover:underline">View Repository</a>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Synthetic Data Generator</h2>
        <p className="mb-2">A tool developed for generating synthetic data to train machine learning models without compromising sensitive information.</p>
        <a href="https://github.com/bahulneel/synthetic-data-generator" className="text-blue-500 hover:underline">View Repository</a>
      </div>
      {/* Additional projects can be added here in a similar format */}
    </div>
  );
}
export default Page;
