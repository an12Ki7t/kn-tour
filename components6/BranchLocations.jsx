import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./BranchLocations.css";

const branches = [
  {
    id: "mumbai",
    label: "Head Office",
    city: "Mumbai, Maharashtra",
    address:
      "Office No. 12, Business Park, Andheri East, Mumbai – 400069",
    phone: "+91 8803236148",
    map: "https://www.google.com/maps?q=Andheri+East+Mumbai&output=embed",
  },
  {
    id: "pune",
    label: "Pune Branch",
    city: "Pune, Maharashtra",
    address:
      "2nd Floor, City Center, Shivajinagar, Pune – 411005",
    phone: "+91 98765 43210",
    map: "https://www.google.com/maps?q=Shivajinagar+Pune&output=embed",
  },
];

const BranchLocations = () => {
  const [active, setActive] = useState(branches[0]);

  return (
    <section className="branch-section">
      <h2>Our Offices</h2>
      <p className="section-subtitle">
        Connect with our offices for personalized travel support
      </p>

      {/* Tabs */}
      <div className="branch-tabs">
        {branches.map((branch) => (
          <button
            key={branch.id}
            className={active.id === branch.id ? "active" : ""}
            onClick={() => setActive(branch)}
          >
            {branch.label}
          </button>
        ))}
      </div>

      {/* Animated Content */}
      <div className="branch-content-wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            className="branch-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
          >
            {/* Info Card */}
            <div className="branch-card">
              <h3>{active.label}</h3>
              <p className="city">{active.city}</p>
              <p className="address">{active.address}</p>
              <p className="phone">📞 {active.phone}</p>
            </div>

            {/* Map */}
            <div className="branch-map">
              <iframe
                src={active.map}
                title={active.label}
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BranchLocations;
