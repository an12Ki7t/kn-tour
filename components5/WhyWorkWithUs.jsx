import React from "react";
import "./WhyWorkWithUs.css";
import {
  FaGlobeAsia,
  FaUsers,
  FaBriefcase,
  FaChartLine,
} from "react-icons/fa";

const highlights = [
  {
    icon: <FaBriefcase />,
    title: "20+ Years of Expertise",
    description:
      "Established experience in travel and tourism with a strong industry reputation.",
  },
  {
    icon: <FaGlobeAsia />,
    title: "Diverse Tours",
    description:
      "Wide range of domestic and international travel experiences.",
  },
  {
    icon: <FaUsers />,
    title: "Dynamic Team Culture",
    description:
      "Collaborative, passionate, and travel-driven professionals.",
  },
  {
    icon: <FaChartLine />,
    title: "Career Growth",
    description:
      "Structured growth opportunities across operations, sales, marketing, and management.",
  },
];

const WhyWorkWithUs = () => {
  return (
    <section className="why-work-section">
      <h2 className="section-heading">Why Work With Us</h2>
      <p className="section-subheading">
        Build a rewarding career with a trusted name in travel.
      </p>

      <div className="cards-container">
        {highlights.map((item, index) => (
          <div className="highlight-card" key={index}>
            <div className="icon-wrapper">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
