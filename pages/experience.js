// Experience content
import Head from 'next/head';

function Page() {
  return (
    <div className="container mx-auto bg-primary-darkBlue text-accent-white">
      <Head>
        <title>Experience</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">Professional Experience</h1>
      <div className="grid grid-cols-1 gap-6">
        <div className="card bg-secondary-gray p-4 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold">Contxt - Contract ML Architect and Senior Developer</h2>
          <p className="text-accent-white">Conducted initial investigations and consultations on model and architecture options. Developed a proprietary synthetic data generator to train models without sensitive customer data.</p>
          <a href="https://github.com/bahulneel/synthetic-data-generator" className="text-accent-orange hover:underline">View Project</a>
        </div>
        <div className="card bg-secondary-gray p-4 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold">Hybr Ltd - Senior Full-stack Web Developer</h2>
          <p className="text-accent-white">Developed and maintained the Hybr product and platform. Introduced semantic web concepts. Led the effort to build a design system.</p>
          <a href="https://github.com/bahulneel/hybr-platform" className="text-accent-orange hover:underline">View Project</a>
        </div>
        {/* Additional experiences can be added here in a similar format */}
      </div>
    </div>
  );
}
export default Page;
