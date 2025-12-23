import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import "./CallToAction.css";

const CallToAction = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // STOP page refresh
    setSubmitted(true);

    // optional auto reset after 4 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section className="cta-section">
      <motion.div
        className="cta-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* TEXT */}
        <div className="cta-text">
          <h2>Book Your Tour Today</h2>
          <p>
            Personalized itineraries, premium hotels, and seamless travel
            experiences — all handled by experts.
          </p>
        </div>

        {/* FORM / SUCCESS */}
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              className="cta-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Email Address" required />
              <select required>
                <option value="">Tour Interest</option>
                <option>Domestic Tours</option>
                <option>International Tours</option>
                <option>Adventure Tours</option>
                <option>Weekend Getaways</option>
              </select>

              <motion.button
                type="submit"
                className="cta-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Enquire Now
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              className="cta-success"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            >
              <FaCheckCircle className="success-icon" />
              <h3>Thank You!</h3>
              <p>Our travel expert will contact you shortly.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default CallToAction;
