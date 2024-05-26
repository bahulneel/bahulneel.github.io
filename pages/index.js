// Home Page content
import Head from 'next/head';
import HomeComponent from '../components/Home';

function Page() {
  return (
    <div className="mx-auto p-4">
      <Head>
        <title>Home</title>
      </Head>
      <HomeComponent />
    </div>
  );
}

export default Page;
