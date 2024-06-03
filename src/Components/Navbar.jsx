import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import defaultAvatar from '../Assets/Excited boy with kinky hair flat vector avatar icon with green dot_ Editable default per.jpeg'; 
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
          <img src={defaultAvatar} alt="User Avatar" className="user-avatar" />
          {userName}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
