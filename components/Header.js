// Header component
import Link from 'next/link';

function Header() {
  return (
    <header className="bg-[#1A1D23] text-[#FFFFFF] p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Bahul Upadhyaya</div>
        <div>
          <Link href="/" legacyBehavior><a className="mr-5 hover:underline text-[#34C759] hover:text-[#FF8E0D]">Home</a></Link>
          <Link href="/about" legacyBehavior><a className="mr-5 hover:underline text-[#34C759] hover:text-[#FF8E0D]">About</a></Link>
          <Link href="/experience" legacyBehavior><a className="mr-5 hover:underline text-[#34C759] hover:text-[#FF8E0D]">Experience</a></Link>
          <Link href="/projects" legacyBehavior><a className="mr-5 hover:underline text-[#34C759] hover:text-[#FF8E0D]">Projects</a></Link>
          <Link href="/skills" legacyBehavior><a className="mr-5 hover:underline text-[#34C759] hover:text-[#FF8E0D]">Skills</a></Link>
          <Link href="/contact" legacyBehavior><a className="mr-5 hover:underline text-[#34C759] hover:text-[#FF8E0D]">Contact</a></Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
