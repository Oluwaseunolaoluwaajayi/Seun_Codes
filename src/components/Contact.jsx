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
                <FiMail className="icon" /> ajayiolaoluwa88@yahoo.com
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
            action="https://formsubmit.co/ajayiolaoluwa88@yahoo.com"
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://yourdomain.com/thanks" /> {/* optional */}

            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
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