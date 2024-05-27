// Header component
import Link from 'next/link';

function Header() {
  return (
    <header className="bg-gradient-to-r from-gradient-start to-gradient-end p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold text-white">Bahul Upadhyaya</div>
        <div>
          <Link href="/" legacyBehavior><a className="mr-5 hover:underline text-accent-orange">Home</a></Link>
          <Link href="/about" legacyBehavior><a className="mr-5 hover:underline text-accent-orange">About</a></Link>
          <Link href="/experience" legacyBehavior><a className="mr-5 hover:underline text-accent-orange">Experience</a></Link>
          {/* <Link href="/projects" legacyBehavior><a className="mr-5 hover:underline text-accent-orange">Projects</a></Link> */}
          <Link href="/skills" legacyBehavior><a className="mr-5 hover:underline text-accent-orange">Skills</a></Link>
          <Link href="/contact" legacyBehavior><a className="mr-5 hover:underline text-accent-orange">Contact</a></Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
