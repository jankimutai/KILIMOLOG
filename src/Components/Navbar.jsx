import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import defaultAvatar from '../Assets/Excited boy with kinky hair flat vector avatar icon with green dot_ Editable default per.jpeg'; 
import '../Style/navbar.css';

function Navbar({ userName, isVisible, toggleSidebar }) {
  return (
    <nav className="navbar">
      <div className="navbar-menu">
        <button className="menu-btn" onClick={toggleSidebar}>
          {isVisible ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div className="navbar-brand">
        <Link to="/" style={{ textDecoration: 'none' }}>
          Sing'oei AgroLog
        </Link>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item user-info">
          <img src={defaultAvatar} alt="User Avatar" className="user-avatar" />
          <span className='user'>{userName}</span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
