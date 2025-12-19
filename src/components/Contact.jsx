// src/components/Contact.jsx
import React from "react";
import {
  FiMail,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-center">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-wrapper">
          {/* Left: Contact Info */}
          <div className="contact-info">
            <h3>Let's work together!</h3>
            <p>
              I'm open to new backend engineering opportunities, API projects,
              and collaborations. Feel free to reach out anytime.
            </p>

            <div className="contact-details">
              <p>
                <FiMail className="icon" /> ajayiolaoluwa8@gmail.com
              </p>
              <p>
                <FiPhone className="icon" /> +234 805 626 6468
              </p>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/Oluwaseunolaoluwaajayi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FiGithub size={26} />
              </a>
              <a
                href="https://www.linkedin.com/in/ajayi-oluwaseun-olaoluwa-98436b11a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={26} />
              </a>
              <a
                href="https://x.com/ojogbonn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FiTwitter size={26} />
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <form
            className="contact-form"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            {/* 🔑 Web3Forms Access Key */}
            <input
              type="hidden"
              name="access_key"
              value="a910d809-1b19-4f32-a626-bac60254d55e"
            />

            {/* Optional Settings */}
            <input type="hidden" name="subject" value="New Portfolio Message" />
            <input type="hidden" name="from_name" value="Seun Codes Portfolio" />
            <input type="hidden" name="redirect" value="https://yourdomain.com/thanks" />
            <input type="hidden" name="botcheck" />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
