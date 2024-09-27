import React from 'react';
import './about.css'; // Link to your CSS for styling
import corn from '../../../Assets/corn.webp';
import wheat3 from '../../../Assets/wheat3.webp';
import sunflower from '../../../Assets/sunflower.webp';
const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h1 className="about-title">About KilimoLog</h1>
          <p className="about-text">
          Welcome to KilimoLog, the ultimate farm records management system designed to streamline farming processes for small and large-scale farmers. 
          Our platform provides a powerful toolset to help you manage your farm’s daily operations, including livestock, crops, and milk production, with ease and efficiency. 
          KilimoLog allows you to track farm records for livestock, crops, and milk production, generate real-time performance reports, efficiently manage farm activities and schedules, access your records from anywhere with cloud support, receive automated reminders for important events, and is designed to cater to both small-scale and commercial farmers.
          </p>
          <div className="feature-section">
        <div className="feature-card">
          <img src={wheat3} alt="Dry Wheat" className="feature-image" />
          <h3 className="feature-title">Wheat Farm</h3>
          <p className="feature-description">This image shows a close-up view of a dry wheat field</p>
        </div>
        <div className="feature-card">
        <img src={sunflower} alt="tractor" className="feature-image" />
          <h3 className="feature-title">Sunflower</h3>
          <p className="feature-description">A close-up of a sunflower, showcasing its intricate details and textures.</p>
        </div>
        <div className="feature-card">
        <img src={corn} alt="green wheat" className="feature-image" />
          <h3 className="feature-title">Maize Farm </h3>
          <p className="feature-description">Maize, a staple crop in many parts of the world.</p>
        </div>
        <div className="feature-card">
        <img src={corn} alt="green wheat" className="feature-image" />
          <h3 className="feature-title">Maize Farm </h3>
          <p className="feature-description">Maize, a staple crop in many parts of the world.</p>
        </div>
        
      </div>

          {/* Mission Section */}
          <div className="about-mission">
            <h2 className="about-subtitle">Our Mission</h2>
            <p className="about-text">
              At KilimoLog, our mission is to empower farmers by giving them the tools to make informed decisions. By providing a simple yet comprehensive farm management system, we aim to improve farm productivity, reduce inefficiencies, and promote sustainable farming practices.
            </p>
          </div>

          {/* Vision Section */}
          <div className="about-vision">
            <h2 className="about-subtitle">Our Vision</h2>
            <p className="about-text">
              We envision a future where technology and farming coexist seamlessly. Our goal is to make farming more accessible, organized, and data-driven, ensuring that every farmer, regardless of the farm size, can harness the power of modern solutions.
            </p>
          </div>

          {/* Testimonials Section */}
          <div className="about-testimonials">
            <h2 className="about-subtitle">What Our Users Say</h2>
            <div className="testimonial">
              <p className="testimonial-text">
                "KilimoLog has completely transformed the way I manage my farm. I can track all my livestock and crops in one place, and the reporting feature has helped me make better decisions."
              </p>
              <span className="testimonial-author">— Silas Bore, Dairy Farmer</span>
            </div>
            <div className="testimonial">
              <p className="testimonial-text">
                "The user interface is simple, but powerful. KilimoLog has saved me hours of paperwork, and I can access my records from my phone when I'm on the field."
              </p>
              <span className="testimonial-author">— Reuben Cheruiyot, Crop Farmer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
