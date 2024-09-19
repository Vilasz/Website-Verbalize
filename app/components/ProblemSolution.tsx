import React from 'react';
import { FaExclamationTriangle, FaLightbulb } from 'react-icons/fa';
import '../styles/ProblemSolution.css';

const ProblemSolution: React.FC = () => {
  return (
    <section id="problem-solution" className="problem-solution">  {/* Added ID for navigation */}
      <div className="container">
        <div className="section-heading">
          <h2>The Problem & Our Solution</h2>
        </div>
        <div className="content">
          <div className="problem card">
            <div className="icon">
              <FaExclamationTriangle />
            </div>
            <h3>The Problem</h3>
            <p>
              Brazil has the largest number of English schools in the world, but only 1% of Brazilians are fluent. 
              The lack of immersion and fear of making mistakes holds learners back.
            </p>
          </div>
          <div className="solution card">
            <div className="icon">
              <FaLightbulb />
            </div>
            <h3>The Solution</h3>
            <p>
              Verbalizæ offers real-time feedback and immersive language practice through AI-powered conversations, 
              allowing learners to improve without fear of judgment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
