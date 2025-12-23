import React from "react";
import "./PerksCulture.css";
import {
  FaPlaneDeparture,
  FaClock,
  FaChalkboardTeacher,
  FaGlassCheers,
} from "react-icons/fa";

const perks = [
  {
    icon: <FaPlaneDeparture />,
    title: "Travel Allowances & Tour Perks",
    description:
      "Exclusive travel benefits and allowances for employees to explore destinations.",
  },
  {
    icon: <FaClock />,
    title: "Flexible Work Environment",
    description:
      "Balanced work culture with flexible schedules and supportive management.",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Training & Mentorship",
    description:
      "Structured learning programs guided by experienced travel professionals.",
  },
  {
    icon: <FaGlassCheers />,
    title: "Team Outings & Celebrations",
    description:
      "Regular team trips, festivals, and celebrations that strengthen bonding.",
  },
];

const PerksCulture = () => {
  return (
    <section className="perks-section">
      <h2 className="section-heading">Perks & Culture</h2>
      <p className="section-subheading">
        We believe great journeys start with a great workplace.
      </p>

      <div className="perks-grid">
        {perks.map((perk, index) => (
          <div className="perk-card" key={index}>
            <div className="perk-icon">{perk.icon}</div>
            <h3>{perk.title}</h3>
            <p>{perk.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PerksCulture;
