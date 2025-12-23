import React from "react";
import "./WhyChoose.css";
import { 
  FaMoneyBillWave, 
  FaRegGem, 
  FaUsers, 
  FaHeadset, 
  FaHandshake, 
  FaClock 
} from "react-icons/fa";

const features = [
  {
    icon: <FaMoneyBillWave />,
    title: "Transparent Pricing",
    desc: "No hidden charges; clear cost breakdown for every tour."
  },
  {
    icon: <FaRegGem />,
    title: "Customized Packages",
    desc: "Tailor-made itineraries to match your preferences."
  },
  {
    icon: <FaUsers />,
    title: "Experienced Coordinators",
    desc: "Our team ensures smooth planning and expert guidance."
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Customer Support",
    desc: "Always available for queries and travel assistance."
  },
 
];

const WhyChoose = () => {
  return (
    <section className="why-choose">
      <div className="container">
        <h2 className="section-title">Why Choose KN Tours & Travel</h2>
        <p className="section-subtitle">
          We deliver exceptional travel experiences with professionalism, safety, and reliability.
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
