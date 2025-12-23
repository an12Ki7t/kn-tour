import React, { useEffect, useState } from "react";
import "./ExperienceAchievements.css";
import { FaSmile, FaMapMarkedAlt, FaRedoAlt, FaRegCalendarAlt } from "react-icons/fa";

const achievements = [
  { icon: <FaRegCalendarAlt />, label: "Years of Experience", value: 10, type: "plus" },
  { icon: <FaSmile />, label: "Happy Customers", value: 5000, type: "plus" },
  { icon: <FaMapMarkedAlt />, label: "Destinations Covered", value: 50, type: "plus" },
  { icon: <FaRedoAlt />, label: "Repeat Customers", value: 80, type: "percent" }
];

const ExperienceAchievements = () => {
  const [animatedValues, setAnimatedValues] = useState(achievements.map(() => 0));

  useEffect(() => {
    const intervals = achievements.map((ach, index) => {
      const increment = ach.value / 100;
      return setInterval(() => {
        setAnimatedValues(prev => {
          const newVals = [...prev];
          if (newVals[index] < ach.value) {
            newVals[index] = Math.min(newVals[index] + increment, ach.value);
          }
          return newVals;
        });
      }, 15);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="experience-achievements">
      <div className="container">
        <h2 className="section-title">Experience & Achievements</h2>
        <p className="section-subtitle">
          Our milestones reflect the trust and satisfaction of our travelers.
        </p>

        <div className="achievements-grid">
          {achievements.map((item, index) => {
            const progress = (animatedValues[index] / item.value) * 100;
            return (
              <div key={index} className="achievement-card">
                <div className="achievement-icon">{item.icon}</div>
                <div className="achievement-circle">
                  <svg viewBox="0 0 36 36">
                    <path
                      className="circle-bg"
                      d="M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="circle"
                      strokeDasharray={`${progress}, 100`}
                      d="M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <span className="circle-text">
                    {Math.floor(animatedValues[index])}{item.type === "percent" ? "%" : "+"}
                  </span>
                </div>
                <h3>{item.label}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceAchievements;
