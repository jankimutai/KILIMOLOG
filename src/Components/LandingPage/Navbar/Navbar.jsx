// NavBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="landing-navbar">
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
          <Link to="/" className="top-nav-link">Home</Link>
        </li>
        <li>
          <Link to="/about" className="top-nav-link">About</Link>
        </li>
        <li>
          <Link to="/contact" className="top-nav-link">Contact</Link>
        </li>
        <li>
          <Link to="/dashboard" className="top-nav-link get-started">Get Started</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
