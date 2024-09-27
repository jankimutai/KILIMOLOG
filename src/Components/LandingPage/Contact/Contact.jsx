import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        {/* Contact Information Section */}
        <div className="contact-info">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-description">
            If you have any questions, inquiries, or collaboration ideas, feel free to reach out through the form below. I’ll do my best to respond as soon as possible.
          </p>

          {/* Illustration Section */}
          <div className="illustration">
            <svg className="contact-svg" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="none">
              <rect width="100%" height="100%" fill="#1a202c" />
              <g>
                <rect x="64" y="128" width="384" height="256" rx="16" fill="#fff" stroke="#4A5568" strokeWidth="4" />
                <path d="M80 144h352v32H80v-32z" fill="#CBD5E0" />
                <circle cx="112" cy="160" r="12" fill="#4299E1" />
                <circle cx="160" cy="160" r="12" fill="#48BB78" />
                <circle cx="208" cy="160" r="12" fill="#F56565" />
                <path d="M80 192h352v176H80V192z" fill="#EDF2F7" />
                <path d="M150 230l106 70c4 3 9 3 13 0l106-70" fill="none" stroke="#A0AEC0" strokeWidth="8" />
              </g>
            </svg>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form">
          <form className="form">
            <input className="form-input" type="text" placeholder="Your name" />
            <input className="form-input" type="email" placeholder="Email" />
            <input className="form-input" type="text" placeholder="Subject" />
            <textarea className="form-textarea" placeholder="Write your message"></textarea>
            <button className="contact-button" type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
