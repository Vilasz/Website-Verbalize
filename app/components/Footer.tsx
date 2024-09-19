import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from 'react-icons/fa';  // Font Awesome icons
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="footer-container">
      <div className="footer-content">
        <div className="contact-info">
          <h3 className="footer-title">Get in Touch</h3>
          <div className="contact-item">
            <FaEnvelope className="footer-icon" />
            <a href="mailto:joaofe2501@hotmail.com">joaofe2501@hotmail.com</a>
          </div>
          <div className="contact-item">
            <FaEnvelope className="footer-icon" />
            <a href="mailto:gustavotironi100@gmail.com">gustavotironi100@gmail.com</a>
          </div>
          <div className="contact-item">
            <FaPhoneAlt className="footer-icon" />
            <a href="https://wa.me/5585981289439">+55 85 98128-9439 (WhatsApp)</a>
          </div>
          <div className="contact-item">
            <FaPhoneAlt className="footer-icon" />
            <a href="https://wa.me/5547991225298">+55 47 99122-5298 (WhatsApp)</a>
          </div>
          <div className="contact-item">
            <FaLinkedin className="footer-icon" />
            <a href="https://www.linkedin.com/in/joao-felipe-vilas" target="_blank" rel="noopener noreferrer">
              João Felipe Vilas
            </a>
          </div>
          <div className="contact-item">
            <FaLinkedin className="footer-icon" />
            <a href="https://www.linkedin.com/in/gustavotironi" target="_blank" rel="noopener noreferrer">
              Gustavo Tironi
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Verbalizæ. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
