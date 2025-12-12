// src/components/Skills.jsx
import React from "react";
import "./Skills.css";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container-skills">
        <h2 className="section-title">My Skills</h2>

        <div className="skills-grid">
          {/* Backend */}
          <div className="skill-category">
            <h3>Backend Development</h3>
            <div className="skills-list">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">FastAPI</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express.js</span>
              <span className="skill-tag">REST APIs</span>
              <span className="skill-tag">JWT Auth</span>
              <span className="skill-tag">OAuth2</span>
            </div>
          </div>

          {/* Databases */}
          <div className="skill-category">
            <h3>Databases</h3>
            <div className="skills-list">
              <span className="skill-tag">PostgreSQL</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">Redis (Basics)</span>
            </div>
          </div>

          {/* Frontend */}
          <div className="skill-category">
            <h3>Frontend & Tools</h3>
            <div className="skills-list">
              <span className="skill-tag">React</span>
              <span className="skill-tag">JavaScript (ES6+)</span>
              <span className="skill-tag">HTML5 / CSS3</span>
              <span className="skill-tag">Tailwind CSS</span>
              <span className="skill-tag">Git & GitHub</span>
              <span className="skill-tag">Postman</span>
            </div>
          </div>

          {/* Others */}
          <div className="skill-category">
            <h3>Other Skills</h3>
            <div className="skills-list">
              <span className="skill-tag">Linux/Command Line</span>
              <span className="skill-tag">Docker Basics</span>
              <span className="skill-tag">CI/CD Awareness</span>
              <span className="skill-tag">Agile/Scrum</span>
              <span className="skill-tag">Problem Solving</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}