import React from "react";
import { motion } from "framer-motion";
import { FaHotel, FaPassport, FaShieldAlt } from "react-icons/fa";
import "./TravelSupport.css";

const supportServices = [
  {
    icon: <FaHotel />,
    title: "Hotel Bookings",
    tag: "Budget to Luxury",
    points: [
      "Wide range of accommodations from budget to luxury",
      "Negotiated corporate & seasonal rates",
      "Verified properties with quality assurance",
    ],
  },
  {
    icon: <FaPassport />,
    title: "Visa & Passport Assistance",
    tag: "Documentation Made Easy",
    points: [
      "Tourist & business visa guidance",
      "Step-by-step documentation checklist support",
      "Smooth processing with minimal hassle",
    ],
  },
  {
    icon: <FaShieldAlt />,
    title: "Travel Insurance",
    tag: "Safe & Secure",
    points: [
      "Medical coverage during travel",
      "Trip cancellation & delays protection",
      "Baggage & personal belongings coverage",
    ],
  },
];

const TravelSupport = () => {
  return (
    <section className="support-section">
      <motion.div
        className="support-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>Travel Support Services</h2>
        <p>
          We handle every detail so you can travel with peace of mind. From
          hotel bookings to visas and travel insurance, our support ensures a
          worry-free experience.
        </p>
      </motion.div>

      <div className="support-container">
        {supportServices.map((service, index) => (
          <motion.div
            className="support-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className="card-header">
              <div className="service-icon">{service.icon}</div>
              <span className="service-tag">{service.tag}</span>
            </div>

            <h3>{service.title}</h3>

            <ul>
              {service.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <button className="service-btn">Enquire Now</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TravelSupport;
