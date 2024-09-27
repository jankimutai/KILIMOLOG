import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Homepage from "../Homepage/Homepage";
import MilkRecords from "../MilkRecords/MilkRecords";
import FarmRecords from '../FarmRecords/FarmRecords';
import Settings from "../Settings/Settings";
import './Dashboard.css';
import { Link } from 'react-router-dom';
import logo from "../../Assets/logo.webp";
import { FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
const Dashboard = ({userName}) => {
  const [activePage, setActivePage] = useState('homepage');
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const renderActivePage = () => {
    switch (activePage) {
      case 'milk-records':
        return <MilkRecords />;
      case 'farm-records':
        return <FarmRecords />;
      case 'settings':
        return <Settings />;
      default:
        return <Homepage />;
    }
  };
  const handleLogoClick = () => {
    window.location.href = '/';
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const handleSetActivePage = (page) => {
    setActivePage(page);
    closeSidebar();
  };

  return (
    <div className="dashboard-container">
      <nav className="top-navbar">
      <div className="sidebar-header">
        <Link to="/" className="logo-link" onClick={handleLogoClick}>
          <img src={logo} alt="logo" className='logo' />
          <span className="sidebar-heading">KilimoLog</span>
        </Link>
        
      </div>
        <div className="user-menu">
          <div className="avatar" onClick={toggleDropdown}>
            <FaUser />
          </div>
          <span className="user-name">{userName}</span>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <button className="dropdown-item">
                <FaUser /> Profile
              </button>
              <button className="dropdown-item">
                <FaCog /> Account Settings
              </button>
              <button className="dropdown-item">
                <FaSignOutAlt /> Logout
              </button>
            </div>
          )}
      </div>
    </nav>
    <div className="dashboard-content">
        <Sidebar 
          setActivePage={handleSetActivePage} 
          isOpen={isOpen}
          closeSidebar={closeSidebar}
        />
        <main className={`main-dashboard ${isOpen ? 'sidebar-open' : ''}`}>
          <div className="hamburger-container">
            <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}>
              <span className="bar top-bar"></span>
              <span className="bar middle-bar"></span>
              <span className="bar bottom-bar"></span>
            </div>
          </div>
          <section className='active-page'>
            {renderActivePage()}
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;