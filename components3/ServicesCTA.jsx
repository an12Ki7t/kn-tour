import React from "react";
import { motion } from "framer-motion";
import "./ServicesCTA.css";

const ServicesCTA = () => {
  return (
    <section className="services-cta">
      <motion.div
        className="cta-box"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>Plan Your Journey with KN Tours & Travel</h2>
        <p>Talk to our travel experts today and start your unforgettable experience.</p>

        <div className="cta-buttons">
          <button className="cta-btn">Request a Callback</button>
          <button className="cta-btn">Get Custom Quote</button>
          <button className="cta-btn">WhatsApp Us</button>
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesCTA;
