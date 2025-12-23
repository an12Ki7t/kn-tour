import React from "react";
import "./BusinessHours.css";

const BusinessHours = () => {
  return (
    <section className="business-hours-section">
      <div className="hours-container">
        {/* Office Hours */}
        <div className="hours-card">
          <h3>Office Hours</h3>
          <p className="main-text">
            Monday – Saturday
          </p>
          <span>10:00 AM – 7:00 PM</span>
        </div>

        {/* Support Commitment */}
        <div className="hours-card highlight">
          <h3>Emergency Support</h3>
          <p className="main-text">
            Available for Travelers on Tour
          </p>
          <span>Dedicated assistance when you need it</span>
        </div>
      </div>
    </section>
  );
};

export default BusinessHours;
