import React from 'react';
import { FaHome, FaTint, FaSeedling, FaCog } from 'react-icons/fa';
import './sidebar.css';

const Sidebar = ({ setActivePage, isOpen, closeSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <nav className="sidebar-nav">
        <ul>
          <li className="sidebar-item" onClick={() => setActivePage('dashboard')}>
            <FaHome className="sidebar-icon" /> Dashboard
          </li>
          <li className="sidebar-item" onClick={() => setActivePage('milk-records')}>
            <FaTint className="sidebar-icon" /> Milk Records
          </li>
          <li className="sidebar-item" onClick={() => setActivePage('farm-records')}>
            <FaSeedling className="sidebar-icon" /> Farm Records
          </li>
          <li className="sidebar-item" onClick={() => setActivePage('settings')}>
            <FaCog className="sidebar-icon" /> Settings
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;