// src/components/Education.jsx
import React from "react";
import "./Education.css";

export default function Education() {
  return (
    <section className="education" id="education">
      <div className="container-edu">
        <h2 className="section-title">Educational Background</h2>

        <div className="education-list">
          {/* AltSchool Africa */}
          <div className="education-item">
            <h3>Diploma in Backend Engineering (Python)</h3>
            <h4>AltSchool Africa</h4>
            <span className="date">2025 – Present</span>
            <p>
              Currently enrolled in an intensive backend engineering program focusing on Python, FastAPI, 
              software architecture, databases, authentication systems, and deployment of production-ready APIs.
            </p>
          </div>

          {/* 3MTT Nigeria */}
          <div className="education-item">
            <h3>Fellowship in Software Development</h3>
            <h4>3MTT Nigeria (Federal Ministry of Communications & Digital Economy)</h4>
            <span className="date">Certified Fellow</span>
            <p>
              Hands-on full-stack training covering React, Node.js, Express.js, PostgreSQL, MongoDB, Git, 
              and collaborative project development with real-world deliverables.
            </p>
          </div>

          {/* Torilo Academy */}
          <div className="education-item">
            <h3>Frontend Development Certification</h3>
            <h4>Torilo Academy</h4>
            <p>
              Professional training in modern frontend technologies, responsive design, semantic HTML, 
              advanced CSS layouts, and interactive JavaScript.
            </p>
          </div>

          {/* Cybersecurity */}
          <div className="education-item">
            <h3>Cybersecurity Analyst Certification</h3>
            <p>
              Practical experience in threat detection, vulnerability assessment, system hardening, 
              and security monitoring using industry-standard tools.
            </p>
          </div>

          {/* LASU */}
          <div className="education-item">
            <h3>Bachelor of Science in Computer Science</h3>
            <h4>Lagos State University (LASU)</h4>
            <p>
              Solid foundation in algorithms, data structures, operating systems, database systems, 
              software engineering principles, and computer networks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}