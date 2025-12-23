import React from "react";
import "./SmartContactForm.css";

const SmartContactForm = () => {
  return (
    <section className="contact-form-section">
      <div className="form-container">
        <h2>Get Expert Travel Assistance</h2>
        <p className="form-subtitle">
          Share your travel requirements and our experts will assist you.
        </p>

        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Full Name *" required />
            <input type="tel" placeholder="Mobile Number *" required />
          </div>

          <div className="form-row">
            <input type="email" placeholder="Email Address *" required />
            <select required>
              <option value="">Travel Type *</option>
              <option>Domestic Tour</option>
              <option>International Tour</option>
              <option>Pilgrimage</option>
              <option>Corporate Travel</option>
              <option>Customized Package</option>
            </select>
          </div>

          <div className="form-row">
            <input type="month" />
          </div>

          <textarea
            placeholder="Message / Travel Requirements"
            rows="4"
          ></textarea>

          <button type="submit" className="submit-btn">
            Get Expert Travel Assistance
          </button>

          <p className="trust-line">
            Our travel experts will contact you within 24 hours.
          </p>
        </form>
      </div>
    </section>
  );
};

export default SmartContactForm;
