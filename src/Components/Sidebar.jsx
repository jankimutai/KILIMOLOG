import React from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaTractor, FaGlassWhiskey, FaCog } from 'react-icons/fa';
import '../Style/sidebar.css';

const Sidebar = ({ isVisible, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isVisible ? 'visible' : ''}`}>
      <div className="sidebar-links">
        <ul>
          <li onClick={toggleSidebar}>
            <Link to="/dashboard">
              <FaTachometerAlt className="icon" /> Dashboard
            </Link>
          </li>
          <li onClick={toggleSidebar}>
            <Link to="/farm-records">
              <FaTractor className="icon" /> Farm Records
            </Link>
          </li>
          <li onClick={toggleSidebar}>
            <Link to="/milk-records">
              <FaGlassWhiskey className="icon" /> Milk Records
            </Link>
          </li>
          <li onClick={toggleSidebar}>
            <Link to="/settings">
              <FaCog className="icon" /> Settings
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
