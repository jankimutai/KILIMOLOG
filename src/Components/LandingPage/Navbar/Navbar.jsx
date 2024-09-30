import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'; // Import ScrollLink from react-scroll
import './navbar.css';
import logo from "../../../Assets/logo.webp"
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="landing-navbar">
      <div className='top-nav-logo'>
      <img src={logo} alt="logo" className='top-nav-logo-image' />
      <span className="top-nav-logo-heading">KilimoLog</span>
      </div>
      <button
        className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <ul className={`topnav-list ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <ScrollLink
            to="home-section" // The id of the Home section
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={200}
            className="top-nav-link"
            onClick={() => setIsMenuOpen(false)} // Close the menu on click
          >
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="about-section" // The id of the About section
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={200}
            className="top-nav-link"
            onClick={() => setIsMenuOpen(false)} // Close the menu on click
          >
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="contact-section" // The id of the Contact section
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={200}
            className="top-nav-link"
            onClick={() => setIsMenuOpen(false)} // Close the menu on click
          >
            Contact
          </ScrollLink>
        </li>
        <li>
          <Link
            to="/dashboard"
            className="top-nav-link get-started"
            onClick={() => setIsMenuOpen(false)} // Close the menu on click
          >
            Get Started
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
