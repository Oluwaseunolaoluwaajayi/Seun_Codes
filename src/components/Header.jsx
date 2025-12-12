// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { FaFeatherAlt } from "react-icons/fa"; // Cleaner feather icon
import { HiMenu, HiX } from "react-icons/hi";
import "./Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add shadow + background when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="logo">
          <FaFeatherAlt className="logo-icon" />
          <span>Seun Codes</span>
        </div>

        {/* Desktop Nav */}
        <nav className="nav-desktop">
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} onClick={() => setIsOpen(false)}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`mobile-nav ${isOpen ? "open" : ""}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}