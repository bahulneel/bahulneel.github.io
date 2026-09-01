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

const LEADING_LINKS = [
  { href: '/about', label: 'About', icon: faUser },
  { href: '/experience', label: 'Experience', icon: faBriefcase },
  { href: '/skills', label: 'Skills', icon: faCode },
];

const PORTFOLIO_LINKS = [
  { href: '/projects', label: 'Projects', icon: faProjectDiagram },
  { href: '/research-design', label: 'Research & Design', icon: faLightbulb },
  { href: '/writing', label: 'Writing', icon: faPenNib },
];

const TRAILING_LINKS = [{ href: '/contact', label: 'Contact', icon: faEnvelope }];

function NavLink({ href, label, icon, onClick }) {
  return (
    <Link href={href} legacyBehavior>
      <a
        className="hover:text-accent-white text-accent-lightBlue inline-flex items-center no-underline text-sm lg:text-base whitespace-nowrap py-2 md:py-1"
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
  const { name, label } = cv.basics;

  const closeMenus = () => {
    setIsMenuOpen(false);
    setIsPortfolioOpen(false);
  };

  return (
    <header
      className="bg-gradient-to-r from-gradient-start to-gradient-end px-4 py-3 text-accent-white md:pr-24 not-prose"
      itemScope
      itemType="http://schema.org/WPHeader"
    >
      <nav className="container mx-auto" itemProp="navigation">
        <div className="flex items-start justify-between gap-4">
          <Link href="/" legacyBehavior>
            <a className="no-underline hover:opacity-90 min-w-0" itemProp="name">
              <span className="block md:inline text-xl lg:text-2xl font-bold text-accent-white">
                {name}
              </span>
              <span className="hidden md:inline text-accent-lightBlue font-normal text-base lg:text-lg">
                {' '}
                &mdash;{' '}
              </span>
              <span
                className="block md:inline text-accent-lightBlue font-normal text-sm md:text-base lg:text-lg md:ml-0 mt-0.5 md:mt-0"
                itemProp="jobTitle"
              >
                {label}
              </span>
            </a>
          </Link>

          <button
            className={`text-accent-lightBlue shrink-0 pt-1 md:hidden ${isMenuOpen ? 'hidden' : 'block'}`}
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open Menu"
            type="button"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        <div className={`relative ${isMenuOpen ? 'block' : 'hidden'} md:block mt-3 md:mt-2`} itemProp="menu">
          <button
            className="absolute top-0 right-0 text-accent-lightBlue md:hidden"
            onClick={closeMenus}
            aria-label="Close Menu"
            type="button"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>

          <div className="flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-x-3 pt-8 md:pt-0">
            {LEADING_LINKS.map((link) => (
              <NavLink key={link.href} {...link} onClick={closeMenus} />
            ))}

            <div
              className="relative"
              onMouseEnter={() => setIsPortfolioOpen(true)}
              onMouseLeave={() => setIsPortfolioOpen(false)}
            >
              <button
                type="button"
                className="hover:text-accent-white text-accent-lightBlue inline-flex items-center no-underline text-sm lg:text-base whitespace-nowrap py-2 md:py-1"
                aria-expanded={isPortfolioOpen}
                aria-haspopup="true"
                onClick={() => setIsPortfolioOpen((open) => !open)}
              >
                <FontAwesomeIcon icon={faProjectDiagram} className="mr-2 w-4" />
                Portfolio
                <FontAwesomeIcon icon={faChevronDown} className="ml-2 w-3 hidden md:inline" />
              </button>

              <div
                className={`${isPortfolioOpen ? 'block' : 'hidden'
                  } md:absolute md:left-0 md:top-full md:min-w-[12rem] md:pt-2`}
              >
                <div className="md:bg-primary-darkBlue md:rounded md:border md:border-accent-lightBlue/20 md:py-2 pl-6 md:pl-0">
                  {PORTFOLIO_LINKS.map((link) => (
                    <div key={link.href} className="md:px-3 md:hover:bg-primary-teal/20 md:rounded-sm">
                      <NavLink {...link} onClick={closeMenus} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {TRAILING_LINKS.map((link) => (
              <NavLink key={link.href} {...link} onClick={closeMenus} />
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
