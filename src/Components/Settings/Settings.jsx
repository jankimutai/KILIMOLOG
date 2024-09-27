import React from 'react';
import './settings.css';

const Settings = () => {

  const handleChangePassword = () => {
    // Handle change password logic here
    console.log('Changing password...');
  };

  const handleDeleteAccount = () => {
    // Handle delete account logic here
    console.log('Deleting account...');
  };

  return (
    <div className="settings">
      <div className="settings-header">
        <h2 className="settings-title">Settings</h2>
      </div>
      <div className='settings-container'>
        <h3 className="section-title">Account Settings</h3>
        <div className="setting-item">
          <label className="setting-label">Change Password:</label>
          <input type="password" className="setting-input" placeholder="Enter new password" />
          <br></br>
          <button className="setting-button" onClick={handleChangePassword}>Change Password</button>
        </div>
        <div className="setting-item">
          <label className="setting-label">Delete Account:</label>
          <button className="delete-account" onClick={handleDeleteAccount}>Delete Account</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
