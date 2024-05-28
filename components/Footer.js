// Footer component
function Footer() {
  return (
    <footer className="bg-primary-darkBlue py-8 text-accent-white">
      <div className="mx-auto text-center">
        <a href="https://github.com/bahulneel" className="text-accent-lightBlue hover:underline">GitHub</a>
        <span className="mx-2">|</span>
        <a href="https://linkedin.com/in/bahulneel" className="text-accent-lightBlue hover:underline">LinkedIn</a>
        <span className="mx-2">|</span>
        <a href="https://medium.com/@bahulneel" className="text-accent-lightBlue hover:underline">Blog</a>
        <span className="mx-2">|</span>
        <a href="/cv.json" className="text-accent-lightBlue hover:underline">CV (JSON)</a>
        <span className="mx-2">|</span>
        <a href="/cv.adoc" className="text-accent-lightBlue hover:underline">CV (ADOC)</a>
        <span className="mx-2">|</span>
        <a href="/cv.pdf" className="text-accent-lightBlue hover:underline">CV (PDF)</a>
      </div>
    </footer>
  );
}

export default Footer;
