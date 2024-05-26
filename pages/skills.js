
// Skills content
import Head from 'next/head';

function Page() {
  return (
    <div className="container mx-auto px-4 py-6">
      <Head>
        <title>Skills</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">Professional Skills</h1>
      <h2 className="text-2xl font-semibold mb-3">Technical Skills</h2>
      <ul className="list-disc ml-5 mb-6">
        <li>Advanced knowledge in JavaScript, TypeScript, and Node.js</li>
        <li>Proficient in data architecture and management with MySQL, Postgres, and MongoDB</li>
        <li>Experienced in building and maintaining web applications using React, Vue, and Next.js</li>
        <li>Skilled in machine learning and AI technologies, including TensorFlow and custom GPT models</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-3">Soft Skills</h2>
      <ul className="list-disc ml-5">
        <li>Strong leadership and team management abilities</li>
        <li>Excellent communication and interpersonal skills</li>
        <li>Proven problem-solving and analytical capabilities</li>
        <li>Commitment to continuous learning and professional development</li>
      </ul>
    </div>
  );
}

export default Page;
