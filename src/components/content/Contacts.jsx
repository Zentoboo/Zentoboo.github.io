import React from "react";
import "./Contacts.css";
import { FaGithub, FaEnvelope, FaPhone, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

function Contacts() {
  return (
    <div className="container">
      <h1 className="contacts-title">Contact Me</h1>

      <div className="contacts-grid">

        {/* Location */}
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <span className="contact-text">Selangor, Malaysia</span>
        </div>

        {/* Email */}
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:c.bertrandtjo@gmail.com" className="contact-link">
            c.bertrandtjo@gmail.com
          </a>
        </div>

        {/* GitHub */}
        <div className="contact-item">
          <FaGithub className="contact-icon" />
          <a
            href="https://github.com/Zentoboo"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            github.com/Zentoboo
          </a>
        </div>

        {/* Instagram */}
        <div className="contact-item">
          <FaInstagram className="contact-icon" />
          <a
            href="https://instagram.com/bertrand.zentoboo"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            @bertrand.zentoboo
          </a>
        </div>
      </div>

      <p className="contacts-note">
        feel free to reach out! I usually reply within 24 hours.
      </p>
    </div>
  );
}

export default Contacts;