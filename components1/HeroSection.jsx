import React from "react";
import "./HeroSection.css";

// Replace these with your 4 images
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpeg";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpg";

const slides = [banner1, banner2, banner3, banner4];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide})` }}
        >
          <div className="overlay">
            
            </div>
          </div>
        
      ))}
    </section>
  );
};

export default HeroSection;
