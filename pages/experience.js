
// Experience content
import Head from 'next/head';

function Page() {
  return (
    <div className="container mx-auto px-4 py-6">
      <Head>
        <title>Experience</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">Professional Experience</h1>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Hybr Ltd - Senior Full-stack Web Developer</h2>
        <p className="text-gray-600">June 2023 - May 2024</p>
        <ul className="list-disc ml-5">
          <li>Developed and maintained the Hybr product and platform.</li>
          <li>Introduced semantic web concepts.</li>
          <li>Led the effort to build a design system.</li>
        </ul>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Contxt - Contract ML Architect and Senior Developer</h2>
        <p className="text-gray-600">August 2022 - February 2023</p>
        <ul className="list-disc ml-5">
          <li>Conducted initial investigations and consultations on model and architecture options.</li>
          <li>Developed a proprietary synthetic data generator to train models without sensitive customer data.</li>
        </ul>
      </div>
      {/* Additional experiences can be added here in a similar format */}
    </div>
  );
}
export default Page;
