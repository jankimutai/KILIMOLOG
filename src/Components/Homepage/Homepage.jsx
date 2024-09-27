import React from 'react';

import { FaSeedling, FaTractor, FaChartLine } from 'react-icons/fa';
import "./homepage.css"
const Homepage = () => (
  <>
  <div className="homepage-container">
  <main className="homepage-content">
    <section className="homepage-header">
      <h1 className='homepage-heading'>Overview</h1>
      <p className='homepage-paragraph'>Get insights on your farm operations.</p>
    </section>
    <section className="homepage-cards">
      <div className="card">
        <FaSeedling className="icon" />
        <h3>Crops</h3>
        <p>12 Active Crops</p>
      </div>
      <div className="card">
        <FaTractor className="icon" />
        <h3>Equipment</h3>
        <p>5 Tractors Available</p>
      </div>
      <div className="card">
        <FaChartLine className="icon" />
        <h3>Growth Trends</h3>
        <p>75% Growth this month</p>
      </div>
    </section>
    <section className="recent-activities">
      <h2>Recent Activities</h2>
      <ul>
        <li>Added new crop: Maize</li>
        <li>Updated Livestock records</li>
        <li>Generated a farm report</li>
      </ul>
    </section>
  </main>
</div>
</>
);

export default Homepage;
