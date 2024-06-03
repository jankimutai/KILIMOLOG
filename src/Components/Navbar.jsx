import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser,FaBars } from 'react-icons/fa';
import { FaUserTie } from "react-icons/fa6";
import '../Style/navbar.css';

function Navbar({ userName, toggleSidebar }) {
  return (
    <nav className="navbar">
        <div className="navbar-menu">
        <FaBars className="hamburger" onClick={toggleSidebar} />
      </div>
      <div className="navbar-brand">
      <Link to="/">Sing'oei AgroLog</Link>
      </div>
      <ul className="navbar-nav">
        
        <li className="nav-item user-info">
          <FaUserTie /> {userName}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
