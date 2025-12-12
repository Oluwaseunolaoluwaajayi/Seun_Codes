// src/components/About.jsx
import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-wrapper">
        <h2 className="section-title">About Me</h2>

        <div className="about-card">
          <p>
            Hi, I'm <strong>Oluwaseun Olaoluwa Ajayi</strong> — a passionate Backend Engineer from Lagos, Nigeria.
          </p>

          <p>
            I specialize in building fast, secure, and scalable backend systems using{" "}
            <strong>Python (FastAPI)</strong>, <strong>Node.js (Express)</strong>, PostgreSQL, and MongoDB. 
            My focus is on clean architecture, RESTful API design, robust authentication (JWT/OAuth2), and writing maintainable, production-ready code.
          </p>

          <p>
            Currently advancing my skills through the <strong>AltSchool Africa Diploma in Backend Engineering</strong> 
            while actively shipping real-world applications. I thrive on solving complex problems and delivering solutions that work — beautifully.
          </p>

          <p>When I'm not coding, I'm learning, teaching, or planning the next big thing.</p>
        </div>
      </div>
    </section>
  );
}