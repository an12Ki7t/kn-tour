import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkedAlt,
  FaGlobeAsia,
  FaRegCompass,
  FaBuilding,
  FaBusAlt,
  FaFileAlt,
} from "react-icons/fa";
import "./CoreServices.css";

const services = [
  {
    icon: <FaMapMarkedAlt />,
    title: "Domestic Tour Packages",
    tag: "All-India Coverage",
    points: [
      "North, South, East & West India tours",
      "Pilgrimage, leisure, family & honeymoon trips",
      "Fixed departures & customizable itineraries",
      "Verified hotels & transport partners",
      "Transparent pricing, no hidden charges",
    ],
  },
  {
    icon: <FaGlobeAsia />,
    title: "International Tour Packages",
    tag: "Global Destinations",
    points: [
      "Europe, Southeast Asia, Middle East & Australia",
      "Group tours & tailor-made trips",
      "Visa & documentation support",
      "International travel insurance",
      "Indian tour manager (select tours)",
    ],
  },
  {
    icon: <FaRegCompass />,
    title: "Customized Holiday Planning",
    tag: "Premium Service",
    points: [
      "One-on-one itinerary consultation",
      "Budget-optimized planning",
      "Personalized hotels & sightseeing",
      "Custom transport & experiences",
      "Flexible travel pacing",
    ],
  },
  {
    icon: <FaBuilding />,
    title: "Corporate Travel Management",
    tag: "Business & MICE",
    points: [
      "Business travel solutions",
      "MICE events & offsite planning",
      "Corporate bookings & GST invoicing",
      "Group conferences & meetings",
      "Priority support & account manager",
    ],
  },
  {
    icon: <FaBusAlt />,
    title: "Transport & Fleet Services",
    tag: "Operational Strength",
    points: [
      "Sedan, SUV, Tempo Traveller & Coaches",
      "Professional drivers",
      "Local & outstation services",
      "Group & corporate transport",
      "Regular vehicle maintenance",
    ],
  },
  {
    icon: <FaFileAlt />,
    title: "Travel Support & Documentation",
    tag: "Compliance Ready",
    points: [
      "Hotel bookings (budget to luxury)",
      "Visa & passport assistance",
      "Travel insurance coordination",
      "Emergency travel support",
      "End-to-end documentation guidance",
    ],
  },
];

const CoreServices = () => {
  return (
    <section className="core-services">
      {/* Heading Section */}
      <motion.div
        className="services-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>Our Core Services</h2>
        <p>
          Discover how KN Tours & Travel delivers end-to-end travel solutions
          for domestic, international, corporate, and customized experiences.
        </p>
      </motion.div>

      {/* Service Cards */}
      <div className="services-container">
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            viewport={{ once: true }}
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

export default CoreServices;
