// Skills content
import Head from 'next/head';
import Skills from '../components/Skills';

function Page() {
  return (
    <div className="mx-auto p-4 bg-secondary-lightGray">
      <Head>
        <title>Skills</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">Professional Skills</h1>
      <Skills />
    </div>
  );
}

export default Page;
