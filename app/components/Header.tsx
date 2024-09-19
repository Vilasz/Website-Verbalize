import React from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <header className="header-container">
      <nav className="navbar">
        <div className="logo-container">
          <img src="/assets/logo.png" alt="Verbalizæ Logo" className="logo-image" />
          <div className="logo-text">
            <h1>Verbalizæ</h1>
            <p className="tagline">Your Gateway to Fluent English</p>
          </div>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#about" className="nav-link">
              Meet the Team
            </a>
          </li>
          <li>
            <a href="#features" className="nav-link">
              Explore Features
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link">
              Contact Us
            </a>
          </li>
        </ul>
        <a href="http://wa.me/+14155238886?text=join%20complex-across" className="cta-button">
          Start Learning Now!
        </a>
      </nav>
    </header>
  );
};

export default Header;
