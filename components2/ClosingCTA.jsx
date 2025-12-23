import React from "react";
import "./ClosingCTA.css";

const ClosingCTA = () => {
  return (
    <section className="closing-cta">
      <div className="cta-box">
        <h2>Plan Your Next Journey with KN Tours & Travel</h2>

        {/* Supporting text AFTER heading */}
        <p className="cta-description">
          Whether you are planning a family holiday, honeymoon, group tour, or corporate travel,
          our experienced team ensures smooth planning, transparent pricing, and reliable execution
          from start to finish.
        </p>

        <div className="cta-buttons">
          <a href="/tours" className="btn btn-primary">
            Explore Tour Packages
          </a>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClosingCTA;
