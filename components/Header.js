// Header component
import Link from 'next/link';

function Header() {
  return (
    <header className="bg-secondary-lightGray text-secondary-gray p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Bahul Upadhyaya</div>
        <div>
          <Link href="/" legacyBehavior><a className="mr-5 hover:underline text-primary-teal hover:text-primary-darkBlue">Home</a></Link>
          <Link href="/about" legacyBehavior><a className="mr-5 hover:underline text-primary-teal hover:text-primary-darkBlue">About</a></Link>
          <Link href="/experience" legacyBehavior><a className="mr-5 hover:underline text-primary-teal hover:text-primary-darkBlue">Experience</a></Link>
          <Link href="/projects" legacyBehavior><a className="mr-5 hover:underline text-primary-teal hover:text-primary-darkBlue">Projects</a></Link>
          <Link href="/skills" legacyBehavior><a className="mr-5 hover:underline text-primary-teal hover:text-primary-darkBlue">Skills</a></Link>
          <Link href="/contact" legacyBehavior><a className="mr-5 hover:underline text-primary-teal hover:text-primary-darkBlue">Contact</a></Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
