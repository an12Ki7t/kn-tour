import React from "react";
import "./EmployeeTestimonials.css";

import emp1 from "../assets/emp1.jpg";
import emp2 from "../assets/emp2.jpg";
import emp3 from "../assets/emp3.jpg";

const testimonials = [
  {
    name: "Anita Sharma",
    role: "Tour Operations Manager",
    quote:
      "Working at KN Tours gave me the opportunity to travel extensively while growing professionally.",
    photo: emp1,
  },
  {
    name: "Rahul Mehta",
    role: "Senior Travel Consultant",
    quote:
      "The work culture here is collaborative, supportive, and truly travel-driven.",
    photo: emp2,
  },
  {
    name: "Sneha Kulkarni",
    role: "Marketing Executive",
    quote:
      "KN Tours encourages creativity, learning, and continuous career growth.",
    photo: emp3,
  },
];

const EmployeeTestimonials = () => {
  return (
    <section className="testimonials-section">
      <h2 className="section-heading">Employee Stories</h2>
      <p className="section-subheading">
        Hear from our team members who are part of the journey.
      </p>

      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="photo-wrapper">
              <img src={item.photo} alt={item.name} />
            </div>
            <p className="quote">“{item.quote}”</p>
            <h4>{item.name}</h4>
            <span>{item.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EmployeeTestimonials;
