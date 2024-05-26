// Contact content
import Head from 'next/head';

function Page() {
  return (
    <div className="container mx-auto px-4 py-6">
      <Head>
        <title>Contact</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <p className="mb-4">If you have any questions or would like to get in touch, please feel free to contact me using the form below or through my social media profiles.</p>
      <form className="mt-4">
        <label htmlFor="name" className="block mb-2">Name:</label>
        <input type="text" id="name" className="border border-gray-300 p-2 w-full mb-4" placeholder="Your Name" />

        <label htmlFor="email" className="block mb-2">Email:</label>
        <input type="email" id="email" className="border border-gray-300 p-2 w-full mb-4" placeholder="Your Email" />

        <label htmlFor="message" className="block mb-2">Message:</label>
        <textarea id="message" className="border border-gray-300 p-2 w-full mb-4" placeholder="Your Message" rows="4"></textarea>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Send</button>
      </form>
      <div className="mt-6">
        <a href="https://github.com/bahulneel" className="text-blue-500 hover:underline mr-4">GitHub</a>
        <a href="https://linkedin.com/in/bahulneel" className="text-blue-500 hover:underline">LinkedIn</a>
      </div>
    </div>
  );
}

export default Page;
