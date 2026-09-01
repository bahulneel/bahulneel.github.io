// Footer component
import ProfileLinks from './ProfileLinks';

function Footer() {
  return (
    <footer className="bg-primary-darkBlue py-8 text-accent-white">
      <div className="mx-auto text-center space-y-4 px-4">
        <ProfileLinks className="block" />
        <div>
          <a href="/cv.json" className="text-accent-lightBlue hover:underline">CV (JSON)</a>
          <span className="mx-2">|</span>
          <a href="/cv.adoc" className="text-accent-lightBlue hover:underline">CV (ADOC)</a>
          <span className="mx-2">|</span>
          <a href="/cv.pdf" className="text-accent-lightBlue hover:underline">CV (Full PDF)</a>
          <span className="mx-2">|</span>
          <a href="/cv-summary.pdf" className="text-accent-lightBlue hover:underline">CV (Summary PDF)</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
