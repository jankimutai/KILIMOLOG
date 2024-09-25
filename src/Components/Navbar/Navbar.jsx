import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaTractor, FaGlassWhiskey } from 'react-icons/fa';
import { FaHome } from "react-icons/fa";
import logo from "../../Assets/logo.webp"
import './navbar.css';

function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(false);


  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  
 

  return (
    <nav className="navbar">
      <div className='logo'>
        <img src={logo} alt="logo" className='logo' />
        <span className="navbar-heading">KilimoLog</span>
      </div>
      <div className={`hamburger ${isNavVisible ? 'active' : ''}`} onClick={toggleNav}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`navbar-links ${isNavVisible ? 'visible' : ''}`}>
        <ul className="nav-container">
          <li className="nav-item">
            <Link to="/">
              <FaHome className="icon" /> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard">
              <FaTachometerAlt className="icon" /> Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/farm-records">
              <FaTractor className="icon" /> Farm Records
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/milk-records">
              <FaGlassWhiskey className="icon" /> Milk Records
            </Link>
          </li>
        </ul>
      </div>
    
    </nav>
  );
}

export default Navbar;