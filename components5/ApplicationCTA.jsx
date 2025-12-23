import React from "react";
import "./ApplicationCTA.css";

const ApplicationCTA = () => {
  return (
    <section className="apply-section">
      <div className="apply-container">
        <h2>Submit & Start Your Journey</h2>
        <p>
          Take the next step in your career with KN Tours & Travel.
        </p>

        <form className="apply-form">
          <div className="form-group">
            <input type="text" placeholder="Full Name" required />
          </div>

          <div className="form-group">
            <input type="email" placeholder="Email Address" required />
          </div>

          <div className="form-group">
            <select required>
              <option value="">Position Applying For</option>
              <option>Operations Executive</option>
              <option>Sales Consultant</option>
              <option>Marketing Executive</option>
              <option>Customer Support</option>
              <option>IT / Tech Support</option>
            </select>
          </div>

          <div className="form-group">
            <input type="file" accept=".pdf,.doc,.docx" required />
          </div>

          <div className="checkbox-group">
            <input type="checkbox" id="newsletter" />
            <label htmlFor="newsletter">
              Notify me about future job openings
            </label>
          </div>

          <button type="submit" className="submit-btn">
            Submit & Start Your Journey
          </button>
        </form>
      </div>
    </section>
  );
};

export default ApplicationCTA;
