import React from 'react';
import "./LandingPage.css"
import dryWheat from '../../Assets/dry-wheat.webp';
import tractor from '../../Assets/tractor.webp';
import wheat from '../../Assets/wheat.webp';
import avatar1 from '../../Assets/avatar1.webp';
const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className='hero-container'>
      <div className="hero-section">
        <div className="hero-content">
        <h1 className="hero-title">KilimoLog</h1>
        <p className="hero-paragraph">A comprehensive farm management application designed to simplify the process of recording and managing farm activities, offering intuitive tools for crop cultivation, livestock management, and agricultural operations.</p>
          <div className="quote-box">
            <img src={avatar1} alt="Andrew Flux" className="profile-image" />
            <div className="quote-content">
              <p className="quote">"We must invest in agriculture to ensure food security and create jobs for our youth."</p>
              <p className="author">Dr. John Karanja</p>
              <p className="author-title">Agricultural Scientist</p>
            </div>
          </div>
        </div>
        <button>Get Started</button>
      </div>
      
      </div>
      <div className="feature-section">
        <div className="feature-card">
          <img src={dryWheat} alt="Dry Wheat" className="feature-image" />
          <h3 className="feature-title">Wheat Farm</h3>
          <p className="feature-description">This image shows a close-up view of a dry wheat field</p>
        </div>
        <div className="feature-card">
        <img src={tractor} alt="tractor" className="feature-image" />
          <h3 className="feature-title">Tractor</h3>
          <p className="feature-description">This image shows a close-up view of a tractor</p>
        </div>
        <div className="feature-card">
        <img src={wheat} alt="green wheat" className="feature-image" />
          <h3 className="feature-title">Wheat Farm </h3>
          <p className="feature-description">Boundless fields of wheat in the east of Ukraine</p>
        </div>
        
      </div>
    </div>
  );
};

export default LandingPage;