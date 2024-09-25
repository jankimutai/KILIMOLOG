import React,{ useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/LandingPage/Landing';
import Dashboard from './Components/Dashboard/Dashboard';
import FarmRecords from './Components/FarmRecords/FarmRecords';
import MilkRecords from './Components/MilkRecords/MilkRecords';
import Settings from './Components/Settings/Settings';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.css"
const App = () => {
  const userName = "Jan Kimutai"; 
  
  return (
    <Router>
      <div className="app-container">
        <Navbar userName={userName}  />
        <div className="main-content">
          <Routes>
          <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/farm-records" element={<FarmRecords />} />
            <Route path="/milk-records" element={<MilkRecords />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
