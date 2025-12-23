import React from "react";
import { motion } from "framer-motion";
import "./SpecialInterestTours.css";

// Replace these paths with your actual images
import honeymoonImg from "../assets/himachal.jpg";
import seniorImg from "../assets/senior.jpg";
import studentImg from "../assets/student.jpg";
import pilgrimageImg from "../assets/pilgrimage.jpg";
import adventureImg from "../assets/adventure.webp";
import culinaryImg from "../assets/culinary.jpg";
import wellnessImg from "../assets/wellness.jpeg";
import photographyImg from "../assets/photography.jpeg";

const specialTours = [
  {
    image: honeymoonImg,
    title: "Honeymoon Packages",
    description: "Romantic getaways with tailor-made experiences for couples.",
  },
  {
    image: seniorImg,
    title: "Senior Citizen Tours",
    description: "Comfort-focused trips designed for seniors with easy itineraries.",
  },
  {
    image: studentImg,
    title: "Educational & Student Tours",
    description: "Learning-focused travel programs for students and schools.",
  },
  {
    image: pilgrimageImg,
    title: "Pilgrimage & Spiritual Journeys",
    description: "Spiritual trips to India’s sacred and historical sites.",
  },
  {
    image: adventureImg,
    title: "Adventure & Wildlife Tours",
    description: "Exciting experiences in nature, wildlife, trekking, and safaris.",
  },
  {
    image: culinaryImg,
    title: "Culinary & Food Tours",
    description: "Experience local flavors and cooking traditions around the world.",
  },
  {
    image: wellnessImg,
    title: "Wellness & Spa Retreats",
    description: "Rejuvenating travel experiences for mind, body, and soul.",
  },
  {
    image: photographyImg,
    title: "Photography & Nature Tours",
    description: "Capture stunning landscapes, wildlife, and cultural moments.",
  },
];

const SpecialInterestTours = () => {
  return (
    <section className="special-tours-section">
      <motion.div
        className="special-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>Specialized Travel Experiences</h2>
        <p>
          Explore travel programs crafted for unique interests and life stages.
          From romance to adventure, culinary delights to wellness retreats, we
          cater to every traveler’s needs.
        </p>
      </motion.div>

      <div className="special-container">
        {specialTours.map((tour, index) => (
          <motion.div
            className="special-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className="special-image-wrapper">
              <img src={tour.image} alt={tour.title} />
            </div>
            <h3>{tour.title}</h3>
            <p>{tour.description}</p>
            <button className="special-btn">Explore Now</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SpecialInterestTours;
