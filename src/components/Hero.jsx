// src/components/Hero.jsx
import React from "react";
import profile from "../assets/mobile-profile.png";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1>
            Hi, I'm <span>Oluwaseun Olaoluwa Ajayi</span>
          </h1>
          <h2>Backend Engineer • API Specialist</h2>
          <p>
            I design and build fast, secure, and scalable backend systems using{" "}
            <strong>Python (FastAPI)</strong>, <strong>Node.js (Express)</strong>,
            PostgreSQL, and MongoDB. Passionate about clean code, RESTful APIs,
            and authentication that just works.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="primary-btn">
              Get In Touch
            </a>
            <a
              href="/Oluwaseun-Ajayi-Resume.pdf"
              download
              className="outline-btn"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={profile} alt="Oluwaseun Ajayi" />
        </div>
      </div>
    </section>
  );
}