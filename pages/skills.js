// Skills content
import Head from 'next/head';

function Page() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Skills</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4 text-primary-darkBlue">Professional Skills</h1>
      <h2 className="text-2xl font-semibold mb-3 text-primary-darkBlue">Technical Skills</h2>
      <ul className="list-disc ml-5 mb-6">
        <li className="text-secondary-gray">Advanced knowledge in JavaScript, TypeScript, and Node.js</li>
        <li className="text-secondary-gray">Proficient in data architecture and management with MySQL, Postgres, and MongoDB</li>
        <li className="text-secondary-gray">Experienced in building and maintaining web applications using React, Vue, and Next.js</li>
        <li className="text-secondary-gray">Skilled in machine learning and AI technologies, including TensorFlow and custom GPT models</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-3 text-primary-darkBlue">Soft Skills</h2>
      <ul className="list-disc ml-5">
        <li className="text-secondary-gray">Strong leadership and team management abilities</li>
        <li className="text-secondary-gray">Excellent communication and interpersonal skills</li>
        <li className="text-secondary-gray">Proven problem-solving and analytical capabilities</li>
        <li className="text-secondary-gray">Commitment to continuous learning and professional development</li>
      </ul>
    </div>
  );
}

export default Page;
