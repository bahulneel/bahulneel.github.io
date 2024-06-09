// Home Page content
import Person from '../components/Person';
import cv from '../public/cv.json';

function Page() {
  const cvData = cv.basics;

  return (
    <div className="mx-auto p-4 bg-secondary-lightGray">
      <Person />
    </div>
  );
}

export default Page;
