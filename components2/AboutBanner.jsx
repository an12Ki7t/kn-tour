import React from "react";
import "./AboutBanner.css";
import bannerImg from "../assets/about-banner.webp";

const AboutBanner = () => {
  return (
    <section
      className="about-banner"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="about-banner-overlay"></div>

      <div className="about-banner-content">
        <h1 className="fade-slide delay-1">KN Tours & Travel</h1>
        <p className="fade-slide delay-2">
          KN Tours & Travel is a trusted travel company with years of experience,
          specializing in curated domestic and international tour experiences,
          known for transparent pricing, personalized service, and
          customer-first planning.
        </p>
      </div>
    </section>
  );
};

export default AboutBanner;
