import React, { useEffect, useState } from "react";
import "./HeroSection.css";

// Images
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpeg";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpg";

const slides = [
  {
    image: banner1,
     title: "International Holiday Experiences",
    subtitle: "Europe, Asia & luxury worldwide destinations",
  },
  {
    image: banner2,
   title: "Discover India & Beyond",
    subtitle: "Curated premium tours with expert planning",
  },
  {
    image: banner3,
    title: "Adventure & Nature Escapes",
    subtitle: "Mountains, beaches and unforgettable journeys",
  },
  {
    image: banner4,
    title: "Weekend & Family Getaways",
    subtitle: "Short trips. Big memories.",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="overlay">
            <div className="hero-content">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>

              <div className="hero-buttons">
                <button className="primary-btn">View Tours</button>
                <button className="secondary-btn">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HeroSection;
