import React from "react";
import { motion } from "framer-motion";
import { 
  FaClipboardList, 
  FaFileInvoiceDollar, 
  FaCheckCircle, 
  FaPlaneDeparture, 
  FaCommentDots,
  FaLightbulb,
  FaBell,
  FaGift 
} from "react-icons/fa";
import "./HowWeWork.css";

const steps = [
  {
    icon: <FaClipboardList />,
    title: "Requirement Understanding",
    description: "We listen to your travel needs and preferences to craft the perfect plan.",
  },
  {
    icon: <FaFileInvoiceDollar />,
    title: "Customized Itinerary & Quotation",
    description: "Receive a detailed plan with options tailored to your budget and interests.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Booking Confirmation",
    description: "Confirm your itinerary, accommodations, and travel arrangements with ease.",
  },
  {
    icon: <FaPlaneDeparture />,
    title: "Travel Execution & Live Support",
    description: "We ensure smooth travel and provide support at every step.",
  },
  {
    icon: <FaCommentDots />,
    title: "Post-Trip Feedback",
    description: "Share your experience to help us improve and serve you better.",
  },
  {
    icon: <FaLightbulb />,
    title: "Continuous Improvement & Follow-up",
    description: "We use your feedback to enhance our services and stay connected for future trips.",
  },
  {
    icon: <FaBell />,
    title: "Proactive Travel Updates",
    description: "Real-time alerts on itinerary changes, weather, and travel tips.",
  },
  {
    icon: <FaGift />,
    title: "Loyalty & Rewards",
    description: "Special deals, loyalty benefits, and personalized recommendations for returning travelers.",
  },
];

const HowWeWork = () => {
  return (
    <section className="how-we-work-section">
      <motion.div
        className="how-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>How We Work</h2>
        <p>
          Our structured process ensures transparency, professionalism, and a seamless travel experience from start to finish.
        </p>
      </motion.div>

      <div className="steps-container">
        {steps.map((step, index) => (
          <motion.div
            className="step-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className="step-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowWeWork;
