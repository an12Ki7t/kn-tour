import React from "react";
import "./TrustBadges.css";

// Trust & Partner Logos (replace with real logos if available)
import googleLogo from "../assets/google.png";
import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner 2.jpg";
import partner3 from "../assets/partner3.jpg";
import partner4 from "../assets/partner4.png";
import partner5 from "../assets/partner5.png";
import partner6 from "../assets/partner6.jpg";

const trustMetrics = [
  {
    highlight: "5,000+",
    title: "Happy Travelers",
    desc: "Trusted by families, groups, and corporate travelers across India."
  },
  {
    highlight: "4.8★",
    title: "Google Reviews",
    desc: "Highly rated for reliability, service quality, and transparent pricing."
  }
];

const TrustBadges = () => {
  return (
    <section className="trust-badges">
      <div className="container">
        <h2 className="section-title">Trusted by Thousands of Travelers</h2>
        <p className="section-subtitle">
          Our reputation is built on consistent service, genuine care, and long-term partnerships.
        </p>

        {/* Trust Metrics */}
        <div className="trust-metrics">
          {trustMetrics.map((item, index) => (
            <div className="trust-card" key={index}>
              <div className="trust-highlight">{item.highlight}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Partner Logos */}
        <div className="trust-logos">
          <img src={googleLogo} alt="Google Reviews" loading="lazy" />
          <img src={partner1} alt="Hotel Partner" loading="lazy" />
          <img src={partner2} alt="Transport Partner" loading="lazy" />
          <img src={partner3} alt="Airline Partner" loading="lazy" />
          <img src={partner4} alt="Resort Partner" loading="lazy" />
          <img src={partner5} alt="Tourism Partner" loading="lazy" />
          <img src={partner6} alt="Corporate Partner" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
