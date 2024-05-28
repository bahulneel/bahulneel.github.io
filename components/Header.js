// Header component
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faCode, faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import cv from '../public/cv.json'; // Import cv.json to access data

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { name } = cv.basics; // Destructure name from cv.json basics

  return (
    <header className="bg-gradient-to-r from-gradient-start to-gradient-end p-4 text-accent-white">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">{name}</div> {/* Use name from cv.json */}
        <div className={`relative ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <button className="absolute top-0 right-0 text-accent-lightBlue md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <div className="flex-col md:flex-row md:flex space-x-0 md:space-x-4">
            <Link href="/" legacyBehavior><a className="hover:text-accent-white text-accent-lightBlue block md:inline flex items-center"><FontAwesomeIcon icon={faHome} className="mr-2" />Home</a></Link>
            <Link href="/about" legacyBehavior><a className="hover:text-accent-white text-accent-lightBlue block md:inline flex items-center"><FontAwesomeIcon icon={faUser} className="mr-2" />About</a></Link>
            <Link href="/experience" legacyBehavior><a className="hover:text-accent-white text-accent-lightBlue block md:inline flex items-center"><FontAwesomeIcon icon={faBriefcase} className="mr-2" />Experience</a></Link>
            <Link href="/skills" legacyBehavior><a className="hover:text-accent-white text-accent-lightBlue block md:inline flex items-center"><FontAwesomeIcon icon={faCode} className="mr-2" />Skills</a></Link>
            <Link href="/contact" legacyBehavior><a className="hover:text-accent-white text-accent-lightBlue block md:inline flex items-center"><FontAwesomeIcon icon={faEnvelope} className="mr-2" />Contact</a></Link>
          </div>
        </div>
        <button className={`text-accent-lightBlue md:hidden ${isMenuOpen ? 'hidden' : 'block'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>
    </header>
  );
}

export default Header;

