import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";


export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Oluwaseun Olaoluwa Ajayi — All Rights Reserved</p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#about">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">
          <a href="https://github.com/Oluwaseunolaoluwaajayi" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/ajayi-oluwaseun-olaoluwa-98436b11a/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://x.com/ojogbonn" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="mailto:ajayiolaoluwa88@yahoo.com"><FaEnvelope /></a>
        </div>

        <button className="scroll-top" onClick={scrollToTop}>↑ Back to Top</button>
      </div>
    </footer>
  );
}
