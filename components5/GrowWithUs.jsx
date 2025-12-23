import React, { useEffect, useRef, useState } from "react";
import "./GrowWithUs.css";
import {
  FaChalkboardTeacher,
  FaUsers,
  FaArrowUp,
  FaCertificate,
  FaUserTie,
  FaSyncAlt,
} from "react-icons/fa";

const growthData = [
  {
    icon: <FaChalkboardTeacher />,
    title: "Training Programs",
    description: "Structured onboarding and continuous learning programs.",
  },
  {
    icon: <FaUsers />,
    title: "Workshops & Skill Development",
    description: "Regular internal and external skill-building workshops.",
  },
  {
    icon: <FaArrowUp />,
    title: "Internal Promotions",
    description: "Transparent promotion paths based on performance.",
  },
  {
    icon: <FaCertificate />,
    title: "Travel Certifications",
    description: "Support for industry-recognized certifications.",
  },
  
];

const counters = [
  { label: "Workshops Conducted", value: 10 },
  { label: "Employees Promoted", value: 50 },
  { label: "Training Hours", value: 500 },
];

const GrowWithUs = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState([0, 0, 0]);

  /* Scroll reveal */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);
  }, []);

  /* Counter animation */
  useEffect(() => {
    if (!visible) return;

    counters.forEach((item, index) => {
      let start = 0;
      const end = item.value;
      const interval = setInterval(() => {
        start += Math.ceil(end / 40);
        if (start >= end) {
          start = end;
          clearInterval(interval);
        }
        setCount((prev) => {
          const updated = [...prev];
          updated[index] = start;
          return updated;
        });
      }, 40);
    });
  }, [visible]);

  return (
    <section className="growth-section" ref={sectionRef}>
      <h2 className="section-heading">Grow with Us</h2>
      <p className="section-subheading">
        Your career evolves as our journey expands.
      </p>

      {/* Counters */}
      <div className="counter-grid">
        {counters.map((item, i) => (
          <div key={i} className="counter-box">
            <h3>{count[i]}+</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>

      {/* Cards */}
      <div className={`growth-grid ${visible ? "show" : ""}`}>
        {growthData.map((item, index) => (
          <div className="growth-card" key={index}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="timeline">
        <div className="timeline-item">Join as Executive</div>
        <div className="timeline-item">Senior Role</div>
        <div className="timeline-item">Team Lead</div>
        <div className="timeline-item">Manager / Leadership</div>
      </div>
    </section>
  );
};

export default GrowWithUs;
