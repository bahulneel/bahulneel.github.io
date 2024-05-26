
// Home Page content
import Head from 'next/head';

function Page() {
  return (
    <div className="container mx-auto px-4 py-6">
      <Head>
        <title>Home</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">Welcome to My Professional Portfolio</h1>
      <img src="/profile.webp" alt="Professional Photo" className="w-32 h-32 rounded-full mb-4"/>
      <p className="mb-4">Seasoned software architect and developer with over 20 years of experience in building large-scale, innovative software solutions. Adept at data platform development, web systems, and enhancing team performance.</p>
      <p>Regularly engages with academic research and industry trends to stay at the cutting edge of technology. Committed to promoting neurodiversity in the workplace.</p>
    </div>
  );
}

export default Page;
