import React from "react";
import "./MissionVision.css";
import { FaSmile, FaGlobe } from "react-icons/fa";

const MissionVision = () => {
  return (
    <section className="mission-vision">
      <div className="container">
        <h2 className="section-title">Our Mission & Vision</h2>
        <p className="section-subtitle">
          We plan every journey with long-term vision and customer satisfaction in mind.
        </p>

        <div className="mv-grid">
          {/* Mission Card */}
          <div className="mv-card">
            <div className="mv-icon"><FaSmile /></div>
            <h3>Our Mission</h3>
            <ul>
              <li>Customer satisfaction at every step</li>
              <li>Safe, affordable, and memorable travel experiences</li>
              <li>Hassle-free planning and support</li>
            </ul>
          </div>

          {/* Vision Card */}
          <div className="mv-card">
            <div className="mv-icon"><FaGlobe /></div>
            <h3>Our Vision</h3>
            <ul>
              <li>Become a trusted travel brand regionally and nationally</li>
              <li>Expand destinations and digital booking capabilities</li>
              <li>Build long-term relationships with customers</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
