// Home Page content
import Head from 'next/head';

function Page() {
  return (
    <div className="mx-auto p-4">
      <Head>
        <title>Home</title>
      </Head>
      <div className="bg-gradient-to-r from-gradient-start to-gradient-end p-4 rounded-md shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-accent-white">Welcome to My Professional Portfolio</h1>
      </div>
      <div className="bg-primary-darkBlue p-4 rounded-md shadow-md mt-4">
        <img src="/profile.webp" alt="Professional Photo" className="w-32 h-32 rounded-full mb-4" />
        <p className="mb-4 text-accent-white">Seasoned software architect and developer with over 20 years of experience in building large-scale, innovative software solutions. Adept at data platform development, web systems, and enhancing team performance.</p>
        <p className="text-accent-white">Regularly engages with academic research and industry trends to stay at the cutting edge of technology. Committed to promoting neurodiversity in the workplace.</p>
      </div>
    </div>
  );
}

export default Page;
