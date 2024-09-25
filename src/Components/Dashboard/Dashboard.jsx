import React from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb'; // Import the Breadcrumb component
import './dashboard.css';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaTachometerAlt } from 'react-icons/fa';
const Dashboard = () => {
  const navigate = useNavigate();
  const breadcrumbPaths = [
    { name: 'Home', link: '/', icon: <FaHome /> },
    { name: 'Dashboard', link: '/dashboard', icon: <FaTachometerAlt /> },
  ];
  // Handlers for button clicks
  const handleViewMilkRecords = () => {
    navigate("/milk-records");
  };

  const handleViewFarmRecords = () => {
    navigate("/farm-records");
  };

  return (
    <>
      <Breadcrumb paths={breadcrumbPaths} />
      <header className="dashboard-header">
        <h1 className='dashboard-heading'>Farm Records Dashboard</h1> 
      </header>

      <div className="dashboard-buttons">
        <button onClick={handleViewMilkRecords} className="dashboard-button">
          View and Manage Milk Records
        </button>
        <button onClick={handleViewFarmRecords} className="dashboard-button">
          View and Manage Farm Records
        </button>
      </div>

    </>
  );
};

export default Dashboard;
