import React, { useState } from 'react';
import './about.css'; // Link to your CSS for styling
import sunflower from '../../../Assets/aaron-burden-2IzoIHBgYAo-unsplash.jpg';
import corn from '../../../Assets/christophe-maertens-v9r31Dxg0X0-unsplash.jpg';
import wheat3 from '../../../Assets/polina-rytova-1dGMs4hhcVA-unsplash.jpg';
import canola from '../../../Assets/michael-milverton-n0GvTPlvY4w-unsplash.jpg';

const About = () => {
  // State for loading status of images
  const [wheatLoaded, setWheatLoaded] = useState(false);
  const [sunflowerLoaded, setSunflowerLoaded] = useState(false);
  const [cornLoaded, setCornLoaded] = useState(false);
  const [canolaLoaded, setCanolaLoaded] = useState(false);

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h1 className="about-title">About KilimoLog</h1>
          <p className="about-text">
            Welcome to KilimoLog, the ultimate farm records management system designed to streamline farming processes for small and large-scale farmers.
            Our platform provides a powerful toolset to help you manage your farm’s daily operations, including livestock, crops, and milk production, with ease and efficiency.
          </p>

          <div className="feature-section">
            <div className="feature-card">
              {/* Wheat Image with Skeleton */}
              {!wheatLoaded && <div className="skeleton skeleton-image"></div>}
              <img
                src={wheat3}
                alt="Dry Wheat"
                className={`feature-image ${wheatLoaded ? '' : 'hidden'}`}
                onLoad={() => setWheatLoaded(true)}
                loading="lazy"
              />
              <h3 className="feature-title">Wheat Farm</h3>
              <p className="feature-description">A close-up of a dry wheat field, showcasing golden stalks under a bright sky.</p>
            </div>

            <div className="feature-card">
              {/* Sunflower Image with Skeleton */}
              {!sunflowerLoaded && <div className="skeleton skeleton-image"></div>}
              <img
                src={sunflower}
                alt="Sunflower"
                className={`feature-image ${sunflowerLoaded ? '' : 'hidden'}`}
                onLoad={() => setSunflowerLoaded(true)}
                loading="lazy"
              />
              <h3 className="feature-title">Sunflower</h3>
              <p className="feature-description">A vibrant sunflower in full bloom, highlighting its bright petals and dark center.</p>
            </div>

            <div className="feature-card">
              {/* Corn Image with Skeleton */}
              {!cornLoaded && <div className="skeleton skeleton-image"></div>}
              <img
                src={corn}
                alt="Maize Farm"
                className={`feature-image ${cornLoaded ? '' : 'hidden'}`}
                onLoad={() => setCornLoaded(true)}
                loading="lazy"
              />
              <h3 className="feature-title">Maize Farm</h3>
              <p className="feature-description">A detailed view of maize, showing its ripe kernels on the cob, ready for harvest.</p>
            </div>

            <div className="feature-card">
              {/* Canola Image with Skeleton */}
              {!canolaLoaded && <div className="skeleton skeleton-image"></div>}
              <img
                src={canola}
                alt="Canola Farm"
                className={`feature-image ${canolaLoaded ? '' : 'hidden'}`}
                onLoad={() => setCanolaLoaded(true)}
                loading="lazy"
              />
              <h3 className="feature-title">Canola Farm</h3>
              <p className="feature-description">A lush canola field with yellow blossoms, known for producing heart-healthy oil.</p>
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
            <div className="testimonial">
              <p className="testimonial-text">
                "KilimoLog has transformed the way I manage my farm. The analytics features are incredibly helpful, allowing me to make data-driven decisions that boost my yield."
              </p>
              <span className="testimonial-author">— Jackson Sing'oei, Crop Farmer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
