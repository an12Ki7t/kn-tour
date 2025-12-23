import React, { useState } from "react";
import "./OpenPositions.css";
import { FaMapMarkerAlt, FaBriefcase, FaUpload } from "react-icons/fa";

const jobsData = {
  Operations: [
    {
      title: "Tour Operations Executive",
      location: "Mumbai",
      experience: "2–4 Years",
    },
  ],
  Sales: [
    {
      title: "Travel Sales Consultant",
      location: "Pune",
      experience: "1–3 Years",
    },
  ],
  Marketing: [
    {
      title: "Digital Marketing Executive",
      location: "Remote",
      experience: "2+ Years",
    },
  ],
  "Customer Support": [
    {
      title: "Customer Support Executive",
      location: "Mumbai",
      experience: "1–2 Years",
    },
  ],
  IT: [
    {
      title: "Frontend React Developer",
      location: "Remote",
      experience: "2–5 Years",
    },
  ],
};

const OpenPositions = () => {
  const [activeTab, setActiveTab] = useState("Operations");

  return (
    <section className="open-positions">
      <h2 className="section-heading">Open Positions</h2>
      <p className="section-subheading">
        Find the role that matches your passion and skills.
      </p>

      {/* Category Tabs */}
      <div className="tabs">
        {Object.keys(jobsData).map((category) => (
          <button
            key={category}
            className={`tab-btn ${
              activeTab === category ? "active" : ""
            }`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Job Cards */}
      <div className="jobs-grid">
        {jobsData[activeTab].map((job, index) => (
          <div className="job-card" key={index}>
            <h3>{job.title}</h3>

            <div className="job-info">
              <p>
                <FaMapMarkerAlt /> {job.location}
              </p>
              <p>
                <FaBriefcase /> {job.experience}
              </p>
            </div>

            <div className="job-actions">
              <button className="apply-btn">Apply Now</button>

              <label className="upload-btn">
                <FaUpload /> Upload CV
                <input type="file" hidden />
              </label>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OpenPositions;
