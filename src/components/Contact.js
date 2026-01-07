import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="title">Contact Me</h2>
      <div className="contact-wrapper">
        <div className="contact-info">
          <div className="info-item">
            <FaEnvelope className="info-icon" /> 
            <span>aneela.bashir.se@gmail.com</span>
          </div>
          <div className="info-item">
            <FaLinkedin className="info-icon" /> 
            <span>https://www.linkedin.com/</span>
          </div>
          <div className="info-item">
            <FaGithub className="info-icon" /> 
            <span>https://github.com</span>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Message" required></textarea>
          </div>
          <button type="submit" className="btn">Send</button>
        </form>
      </div>
    </section>
  );
}
