import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage/Landing';
import Dashboard from './Components/Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
const App = () => {
  const userName = "Jan Kimutai";
 

  console.log(userName)
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/*" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
