import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <section className="newsletter-section">
      <motion.div
        className="newsletter-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Get Travel Inspiration in Your Inbox</h2>
        <p>
          Exclusive itineraries, festive offers & expert travel tips—no spam.
        </p>

        <form className="newsletter-form" onSubmit={handleSubscribe}>
          <motion.input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            whileFocus={{ scale: 1.02, borderColor: "#795548" }}
            required
          />

          <motion.button
            type="submit"
            className="subscribe-btn"
            whileHover={{ scale: 1.05, backgroundColor: "#5d4037" }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe Now
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Newsletter;
