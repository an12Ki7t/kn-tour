import React from "react";
import "./CustomerCommitment.css";
import {
  FaHeadset,
  FaExclamationTriangle,
  FaCheckCircle,
  FaComments
} from "react-icons/fa";

const commitments = [
  {
    icon: <FaHeadset />,
    title: "Dedicated Travel Support",
    desc: "A single point of contact to assist customers before and throughout their journey."
  },
  {
    icon: <FaExclamationTriangle />,
    title: "Emergency Assistance During Tours",
    desc: "Immediate support and resolution in case of unexpected situations while traveling."
  },
  {
    icon: <FaCheckCircle />,
    title: "Quality-Checked Hotels & Vehicles",
    desc: "Only verified hotels and well-maintained transport partners are selected for tours."
  },
  {
    icon: <FaComments />,
    title: "Clear & Timely Communication",
    desc: "Transparent communication before, during, and after travel for complete peace of mind."
  }
];

const CustomerCommitment = () => {
  return (
    <section className="customer-commitment">
      <div className="container">
        <h2 className="section-title">Customer Commitment</h2>
        <p className="section-subtitle">
          Our responsibility does not end with booking — it continues throughout your journey.
        </p>

        <div className="commitment-grid">
          {commitments.map((item, index) => (
            <div key={index} className="commitment-card">
              <div className="commitment-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerCommitment;
