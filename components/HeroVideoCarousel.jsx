import { useEffect, useState } from "react";
import "./HeroVideoCarousel.css";
import singaporeVideo from "/videos/singapore.mp4";
import rajasthanVideo from "/videos/rajasthan.mp4";
import disneylandVideo from "/videos/disneyland.mp4";

const slides = [
  {
    video: singaporeVideo,
    
  },
  {
    video: rajasthanVideo,
    
  },
  {
    video: disneylandVideo,
    
  },
];

const categories = [
  "International",
  "Domestic",
  "Honeymoon",
  "Weekend",
  "Group Tours",
];

export default function HeroVideoCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-video-carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`video-slide ${index === active ? "active" : ""}`}
        >
          {console.log(index, active)}
          <video
            src={slide.video}
            autoPlay={true}
            muted
            loop
            playsInline
            preload="metadata" // Video preload optimization
            loading="lazy" // Lazy loading
          />
          <div className="video-overlay">
            <h1>{slide.title}</h1>
            <h3>{slide.subtitle}</h3>
            <p>{slide.desc}</p>

           
          </div>
        </div>
      ))}

      {/* SCROLL INDICATOR */}
      <div className="scroll-indicator">
        <span></span>
      </div>
    </section>
  );
}
