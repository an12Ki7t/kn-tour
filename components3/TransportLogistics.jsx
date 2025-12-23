import React from "react";
import { motion } from "framer-motion";
import { FaCarSide, FaPlane, FaTrain, FaMapMarkedAlt } from "react-icons/fa";
import "./TransportLogistics.css";

const transportServices = [
  {
    icon: <FaCarSide />,
    title: "Vehicle & Coach Rentals",
    tag: "Fleet Coverage",
    points: [
      "Sedan, SUV, Tempo Traveller & Luxury Coaches",
      "Professional drivers",
      "Regular vehicle maintenance",
      "GPS-enabled & insured vehicles",
    ],
  },
  {
    icon: <FaPlane />,
    title: "Airport, Railway & Local Transfers",
    tag: "On-Time & Reliable",
    points: [
      "Punctual pickups & drops",
      "City sightseeing transfers",
      "Outstation travel support",
      "Seamless coordination with tours",
    ],
  },
];

const TransportLogistics = () => {
  return (
    <section className="transport-section">
      <motion.div
        className="transport-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>Transport & Logistics Services</h2>
        <p>
          Ensuring smooth, safe, and timely travel with our professional fleet
          and reliable transfer services.
        </p>
      </motion.div>

      <div className="transport-container">
        {transportServices.map((service, index) => (
          <motion.div
            className="transport-card"
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

export default TransportLogistics;
