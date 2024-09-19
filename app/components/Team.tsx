import React from 'react';
import '../styles/Team.css';

const Team: React.FC = () => {
  return (
    <section id="about" className="team">  {/* Added ID for navigation */}
      <div className="container">
        <h2 className="section-title">About Verbalizæ</h2>
        <p className="startup-description">
          Verbalizæ is revolutionizing the way Brazilians learn English by providing an AI-powered chatbot that offers real-time feedback and immersive language practice. Our mission is to remove the fear of mistakes, ensuring learners gain fluency faster and with confidence.
        </p>
        <div className="team-members">
          <div className="team-member">
            <img src="/assets/Founder1.png" alt="Gustavo Tironi" className="founder-img" />
            <h3>Gustavo Tironi</h3>
            <p>Co-founder, CEO</p>
            <p>Data Science & AI student at FGV, with 2 years of experience in entrepreneurship and management.</p>
            <a href="mailto:gustavotironi100@gmail.com" className="contact-link">gustavotironi100@gmail.com</a>
          </div>
          <div className="team-member">
            <img src="/assets/Founder2.jpg" alt="João Felipe Vilas" className="founder-img" />
            <h3>João Felipe Vilas</h3>
            <p>Co-founder, CTO & COO</p>
            <p>Data Science & AI student at FGV with 1.5 years of experience in software development and management.</p>
            <a href="mailto:joaofelipevilas@gmail.com" className="contact-link">joaofelipevilas@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
