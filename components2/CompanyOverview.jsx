import React, { useState } from "react";
import "./CompanyOverview.css";
import { FaRegCalendarAlt, FaPlane, FaUsers, FaCertificate } from "react-icons/fa";

const CompanyOverview = () => {
  const [yearsHovered, setYearsHovered] = useState(false);

  const startYearsCounter = () => {
    setYearsHovered(true);
  };

  return (
    <section className="company-overview">
      <div className="container">
        <h2 className="section-title">Company Overview</h2>
        <p className="section-subtitle">
          A trusted travel partner delivering reliable and well-planned travel experiences.
        </p>

        <div className="overview-grid">
          {/* Card 1 */}
          <div
            className="overview-card"
            onMouseEnter={startYearsCounter}
          >
            <div className="card-icon"><FaRegCalendarAlt /></div>
            <h3>Established</h3>
            <p>KN Tours & Travel was founded to provide dependable travel solutions.</p>
            
          </div>

          {/* Card 2 */}
          <div className="overview-card">
            <div className="card-icon"><FaPlane /></div>
            <h3>Our Services</h3>
            <p>
              Domestic & international tours, honeymoon packages, group tours, corporate travel, and custom itineraries.
            </p>
          </div>

          {/* Card 3 */}
          <div className="overview-card">
            <div className="card-icon"><FaUsers /></div>
            <h3>Our Customers</h3>
            <p>
              Families, honeymoon couples, corporate clients, groups, and individual travelers.
            </p>
          </div>

          {/* Card 4 */}
          <div className="overview-card">
            <div className="card-icon"><FaCertificate /></div>
            <h3>Credibility & Network</h3>
            <p>
              Registered business with strong tie-ups with hotels, transport providers, and local partners for seamless travel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Animated Year Counter Component
const YearsCounter = ({ target }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const increment = target / 50;
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 20);
    return () => clearInterval(interval);
  }, [target]);

  return <>{count}+ Years Experience</>;
};

export default CompanyOverview;
