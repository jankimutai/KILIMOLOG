import React,{ useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import MilkRecords from './Pages/MilkRecords';
import Dashboard from './Pages/Dashboard';
import Navbar from './Components/Navbar';
import Settings from "./Pages/Settings"
import FarmRecords from './Pages/FarmRecords';
import "./app.css"
const App = () => {
  const userName = "Jan Kimutai"; 
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  return (
    <Router>
      <div className="app-container">
        <Navbar userName={userName} toggleSidebar={toggleSidebar} />
        <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
        <div className="main-content">
          <Routes>
          <Route path="/" element={<Dashboard />} />
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
