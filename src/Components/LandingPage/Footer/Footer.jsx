import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'; // Import ScrollLink from react-scroll
import "./footer.css";

const Footer = () => {
 

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
        <h4 className='footer-header'>Quick Links</h4>
          <ul className="footer-link-list">
            <li>
              <ScrollLink
                to="home-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
                className="footer-link"
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
                className="footer-link"
              >
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
                className="footer-link"
              >
                Contact
              </ScrollLink>
            </li>
            <li>
              <Link to="/dashboard" className="footer-link get-started-footer">
                Get Started
              </Link>
            </li>
          </ul>
        </div>
        
      </div>
 

      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} KilimoLog. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
