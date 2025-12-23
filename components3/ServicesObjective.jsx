import React from "react";
import { motion } from "framer-motion";
import { FaRoute, FaHandsHelping, FaUsers } from "react-icons/fa";
import "./ServicesObjective.css";

const ServicesObjective = () => {
  return (
    <section className="services-objective">
      <motion.div
        className="objective-card"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="objective-title">
          End-to-End Travel Solutions Crafted for Comfort, Safety, and Experience
        </h1>

        <p className="objective-subtext">
          From customized holidays to corporate travel management, KN Tours &
          Travel delivers reliable, experience-driven journeys.
        </p>

        <div className="objective-highlights">
          <motion.div
            className="highlight-card"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
          >
            <FaRoute className="highlight-icon" />
            <h4>End-to-End Travel Management</h4>
            <p>Planning, bookings, logistics, and on-trip support handled seamlessly.</p>
          </motion.div>

          <motion.div
            className="highlight-card"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
          >
            <FaHandsHelping className="highlight-icon" />
            <h4>Structured Processes & Support</h4>
            <p>Defined workflows, verified partners, and 24/7 assistance.</p>
          </motion.div>

          <motion.div
            className="highlight-card"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
          >
            <FaUsers className="highlight-icon" />
            <h4>Customer-First Approach</h4>
            <p>Trips designed around comfort, safety, and personal preferences.</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesObjective;
