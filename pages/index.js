// Home Page content
import Head from 'next/head';
import HomeComponent from '../components/Home';
import cv from '../public/cv.json';

function Page() {
  const cvData = cv.basics;

  return (
    <div className="mx-auto p-4 bg-secondary-lightGray">
      <HomeComponent />
    </div>
  );
}

export default Page;
