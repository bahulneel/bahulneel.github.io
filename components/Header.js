// Header component
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faCode, faEnvelope, faBars, faTimes, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import cv from '../public/cv.json'; // Import cv.json to access data

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { name } = cv.basics; // Destructure name from cv.json basics

  return (
    <header className="bg-gradient-to-r from-gradient-start to-gradient-end p-4 text-accent-white" itemscope itemType="http://schema.org/WPHeader">
      <nav className="container mx-auto flex justify-between items-center" itemProp="navigation">
        <div className="text-2xl font-bold" itemProp="name">{name}</div> {/* Use name from cv.json */}
        <div className={`relative ${isMenuOpen ? 'block' : 'hidden'} md:block`} itemProp="menu">
          <button className="absolute top-0 right-0 text-accent-lightBlue md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Close Menu">
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <div className="flex-col md:flex-row md:flex space-x-0 md:space-x-4">
            <Link href="/" legacyBehavior><a className="hover:text-accent-white text-accent-lightBlue md:inline flex items-center no-underline" itemProp="url"><FontAwesomeIcon icon={faHome} className="mr-2" />Home</a></Link>
            <Link href="/about" legacyBehavior><a className="hover:text-accent-white text-accent-lightBlue md:inline flex items-center no-underline" itemProp="url"><FontAwesomeIcon icon={faUser} className="mr-2" />About</a></Link>
            <Link href="/experience" legacyBehavior><a className="hover:text-accent-white text-accent-lightBlue md:inline flex items-center no-underline" itemProp="url"><FontAwesomeIcon icon={faBriefcase} className="mr-2" />Experience</a></Link>
            <Link href="/skills" legacyBehavior><a className="hover:text-accent-white text-accent-lightBlue md:inline flex items-center no-underline" itemProp="url"><FontAwesomeIcon icon={faCode} className="mr-2" />Skills</a></Link>
            <Link href="/projects" legacyBehavior><a className="hover:text-accent-white text-accent-lightBlue md:inline flex items-center no-underline" itemProp="url"><FontAwesomeIcon icon={faProjectDiagram} className="mr-2" />Projects</a></Link>
            <Link href="/contact" legacyBehavior><a className="hover:text-accent-white text-accent-lightBlue md:inline flex items-center no-underline" itemProp="url"><FontAwesomeIcon icon={faEnvelope} className="mr-2" />Contact</a></Link>
          </div>
        </div>
        <button className={`text-accent-lightBlue md:hidden ${isMenuOpen ? 'hidden' : 'block'}`} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open Menu">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>
    </header>
  );
}

export default Header;
