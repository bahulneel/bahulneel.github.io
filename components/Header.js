// Header component
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faBriefcase,
  faEnvelope,
  faBars,
  faTimes,
  faProjectDiagram,
  faPenNib,
  faLightbulb,
  faCode,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import cv from '../public/cv.json';

const MAIN_LINKS = [
  { href: '/about', label: 'About', icon: faUser },
  { href: '/experience', label: 'Experience', icon: faBriefcase },
  { href: '/writing', label: 'Writing', icon: faPenNib },
  { href: '/contact', label: 'Contact', icon: faEnvelope },
];

const PORTFOLIO_LINKS = [
  { href: '/skills', label: 'Skills', icon: faCode },
  { href: '/projects', label: 'Projects', icon: faProjectDiagram },
  { href: '/research-design', label: 'Research & Design', icon: faLightbulb },
];

function NavLink({ href, label, icon, onClick }) {
  return (
    <Link href={href} legacyBehavior>
      <a
        className="hover:text-accent-white text-accent-lightBlue inline-flex items-center no-underline text-sm lg:text-base whitespace-nowrap py-2 md:py-0"
        itemProp="url"
        onClick={onClick}
      >
        <FontAwesomeIcon icon={icon} className="mr-2 w-4" />
        {label}
      </a>
    </Link>
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const { name } = cv.basics;

  const closeMenus = () => {
    setIsMenuOpen(false);
    setIsPortfolioOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-gradient-start to-gradient-end p-4 text-accent-white md:pr-24" itemScope itemType="http://schema.org/WPHeader">
      <nav className="container mx-auto flex justify-between items-center gap-4" itemProp="navigation">
        <Link href="/" legacyBehavior>
          <a className="text-xl lg:text-2xl font-bold shrink-0 hover:text-accent-white no-underline" itemProp="name">
            {name}
          </a>
        </Link>

        <div className={`relative ${isMenuOpen ? 'block' : 'hidden'} md:block`} itemProp="menu">
          <button
            className="absolute top-0 right-0 text-accent-lightBlue md:hidden"
            onClick={closeMenus}
            aria-label="Close Menu"
            type="button"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>

          <div className="flex flex-col md:flex-row md:items-center md:gap-3 lg:gap-4 pt-8 md:pt-0">
            {MAIN_LINKS.slice(0, 2).map((link) => (
              <NavLink key={link.href} {...link} onClick={closeMenus} />
            ))}

            <div
              className="relative"
              onMouseEnter={() => setIsPortfolioOpen(true)}
              onMouseLeave={() => setIsPortfolioOpen(false)}
            >
              <button
                type="button"
                className="hover:text-accent-white text-accent-lightBlue inline-flex items-center no-underline text-sm lg:text-base whitespace-nowrap py-2 md:py-0"
                aria-expanded={isPortfolioOpen}
                aria-haspopup="true"
                onClick={() => setIsPortfolioOpen((open) => !open)}
              >
                <FontAwesomeIcon icon={faProjectDiagram} className="mr-2 w-4" />
                Portfolio
                <FontAwesomeIcon icon={faChevronDown} className="ml-2 w-3 hidden md:inline" />
              </button>

              <div
                className={`${
                  isPortfolioOpen ? 'block' : 'hidden'
                } md:absolute md:left-0 md:top-full md:min-w-[12rem] md:pt-2`}
              >
                <div className="md:bg-primary-darkBlue md:rounded md:shadow-lg md:border md:border-accent-lightBlue/20 md:py-2 md:pl-0 pl-6">
                  {PORTFOLIO_LINKS.map((link) => (
                    <div key={link.href} className="md:px-3 md:hover:bg-primary-teal/20 md:rounded-sm">
                      <NavLink {...link} onClick={closeMenus} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {MAIN_LINKS.slice(2).map((link) => (
              <NavLink key={link.href} {...link} onClick={closeMenus} />
            ))}
          </div>
        </div>

        <button
          className={`text-accent-lightBlue md:hidden shrink-0 ${isMenuOpen ? 'hidden' : 'block'}`}
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open Menu"
          type="button"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>
    </header>
  );
}

export default Header;
