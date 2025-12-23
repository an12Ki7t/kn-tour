import React from "react";
import "./LeadershipTeam.css";

// Replace these images with real photos when available
import founderImg from "../assets/founder.jpg";
import teamImg from "../assets/team.jpg";
import localImg from "../assets/local-experts.jpg";

const teamData = [
  {
    image: founderImg,
    name: "Mr. Nitin Kulkarni",
    role: "Founder & Managing Director",
    desc: "With years of experience in the travel industry, Mr. Nitin Kulkarni leads KN Tours & Travel with a strong focus on trust, service quality, and customer satisfaction."
  },
  {
    image: teamImg,
    name: "Saanvi Deshmukh",
    role: "Tour Planning & Coordination",
    desc: "A dedicated team of travel professionals ensuring seamless tour planning, accurate execution, and dependable customer support."
  },
  {
    image: localImg,
    name: "Nikhil Joshi ",
    role: "On-Ground Support Specialists",
    desc: "Experienced local travel experts providing destination knowledge, logistics coordination, and real-time assistance during tours."
  }
];

const LeadershipTeam = () => {
  return (
    <section className="leadership-team">
      <div className="container">
        <h2 className="section-title">Leadership & Team</h2>
        <p className="section-subtitle">
          Our people are the foundation of the trust our customers place in us.
        </p>

        <div className="team-grid">
          {teamData.map((item, index) => (
            <div key={index} className="team-card">
              <div className="team-image">
                <img
                  src={item.image}
                  alt={`${item.name} - ${item.role}`}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <h3>{item.name}</h3>
              <span className="team-role">{item.role}</span>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
