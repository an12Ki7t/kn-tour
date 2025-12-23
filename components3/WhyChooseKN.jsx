import React from "react";
import { motion } from "framer-motion";
import { 
  FaStar, 
  FaUsers, 
  FaHotel, 
  FaHeadset, 
  FaMoneyBillWave, 
  FaShieldAlt, 
  FaHandshake, 
  FaRoute 
} from "react-icons/fa";
import "./WhyChooseKN.css";

const reasons = [
  {
    icon: <FaStar />,
    title: "10+ Years of Experience",
    description: "Delivering seamless travel experiences with expert knowledge.",
  },
  {
    icon: <FaUsers />,
    title: "5,000+ Happy Travelers",
    description: "Thousands of satisfied customers who trust our services.",
  },
  {
    icon: <FaHotel />,
    title: "Verified Partners & Hotels",
    description: "Carefully selected hotels and travel partners for quality trips.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Customer Support",
    description: "Assistance during travel, anytime, anywhere.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Transparent Pricing",
    description: "Ethical practices with no hidden charges.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Safety & Insurance",
    description: "Travel with peace of mind thanks to safety protocols and insurance options.",
  },
  {
    icon: <FaHandshake />,
    title: "Trusted Industry Partners",
    description: "Collaborations with verified service providers across destinations.",
  },
  {
    icon: <FaRoute />,
    title: "Customizable Itineraries",
    description: "Tailor-made trips to fit your preferences, budget, and pace.",
  },
];

const WhyChooseKN = () => {
  return (
    <section className="why-choose-kn">
      <motion.div
        className="why-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>Why Choose KN Tours & Travel</h2>
        <p>
          Trusted by thousands of travelers, our experience, verified partners, and customer-centric approach make us the preferred choice for every journey.
        </p>
      </motion.div>

      <div className="reasons-container">
        {reasons.map((reason, index) => (
          <motion.div
            className="reason-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className="reason-icon">{reason.icon}</div>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseKN;
