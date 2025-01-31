import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        {/* Contact Information Section */}
        <div className="contact-info">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-description">
            If you have any questions, inquiries, or collaboration ideas, feel free to reach out through the form below. I'll do my best to respond as soon as possible.
          </p>
          
          {/* Lottie Animation Section */}
          <div className="illustration">
          <Player
              src="https://lottie.host/b34c206f-060e-4f5f-a1b1-d51e4c2c4385/vf3uCh75ay.json"
              className="player"
              loop
              autoplay
              style={{ maxHeight: '450px', maxWidth: '450px' }}
            />
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