import React from 'react';
import { FaTachometerAlt, FaTractor, FaGlassWhiskey } from 'react-icons/fa';
import '../Style/dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <FaTachometerAlt className="dashboard-icon" />
          <h2 className="dashboard-card-title">Overview</h2>
          <p className="dashboard-card-description">Get an overview of your farm's performance.</p>
        </div>
        <div className="dashboard-card">
          <FaTractor className="dashboard-icon" />
          <h2 className="dashboard-card-title">Farm Records</h2>
          <p className="dashboard-card-description">View and manage all farm records.</p>
        </div>
        <div className="dashboard-card">
          <FaGlassWhiskey className="dashboard-icon" />
          <h2 className="dashboard-card-title">Milk Records</h2>
          <p className="dashboard-card-description">Track milk production and sales.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
