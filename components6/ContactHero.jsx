import React from "react";
import "./ContactHero.css";
import heroImg from "../assets/contact-hero.png";

const ContactHero = () => {
  return (
    <section className="contact-hero">
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${heroImg})` }}
      ></div>

      <div className="hero-overlay"></div>

      {/* FULL CENTER WRAPPER */}
      <div className="hero-center-wrapper">
        <div className="hero-center-content">
          <h1>
            Contact K N Tours & Travel
          </h1>

          <p>
            Planning your next journey? Our travel experts are just a call away.
          </p>

          <div className="hero-buttons">
            <button className="btn primary-btn">
              Request a Callback
            </button>

            <a
              href="https://wa.me/91XXXXXXXXXX"
              className="btn whatsapp-btn"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
