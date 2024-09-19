import React from 'react';
import '../styles/QRCode.css';

const QRCodeSection: React.FC = () => {
  return (
    <section id="features" className="qr-container">  {/* Added ID for navigation */}
      <div className="qr-content">
        <div className="qr-text">
          <h2 className="qr-title">Revolutionize Your English Learning!</h2>
          <p className="qr-description">
            Experience real-time, AI-powered language immersion. Scan the code or click the button to join us on WhatsApp and explore our platform.
          </p>
        </div>

        <div className="qr-interactive">
          <div className="qr-image-wrapper">
            <img src="/assets/qr-code.png" alt="QR Code" className="qr-image" />
            <div className="qr-animation-circle"></div>
          </div>

          <a
            href="http://wa.me/+14155238886?text=join%20complex-across"
            className="qr-button"
          >
            Try it on WhatsApp
          </a>
        </div>
      </div>

      <div className="features-section">
        <div className="features-grid">
          <div className="feature-card">
            <h3 className="feature-title">Real-Time Feedback</h3>
            <p className="feature-description">Instant AI-powered corrections for your English, helping you learn as you converse in real-time.</p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">Memory Chats</h3>
            <p className="feature-description">Your conversations are saved and revisited to enhance retention and learning progress.</p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">Voice & Calls <span className="coming-soon">Coming Soon</span></h3>
            <p className="feature-description">Interact with the AI tutor using voice commands and real-time calls, coming soon to enhance the learning experience.</p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">Speech Recognition <span className="coming-soon">Coming Soon</span></h3>
            <p className="feature-description">Advanced speech recognition to refine your pronunciation and fluency, available in the near future.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRCodeSection;
