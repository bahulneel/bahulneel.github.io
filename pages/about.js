// About Me content
import Head from 'next/head';
import Person from '../components/Person';

function Page() {
  return (
    <div className="mx-auto p-4 bg-secondary-lightGray" itemscope itemType="http://schema.org/Person" itemID={`${cv.basics.name}`}>
      <Head>
        <title>About Me</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <Person />
    </div>
  );
}

export default Page;
