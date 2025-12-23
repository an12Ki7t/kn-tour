import React, { useState } from "react";
import { motion } from "framer-motion";
import "./BlogHero.css";

const categories = [
  "Destinations",
  "Travel Tips",
  "Seasonal Trips",
  "Pilgrimage",
  "Budget Travel",
  "Luxury Travel"
];

const suggestions = [
  "Best places to visit in Rajasthan",
  "Kerala monsoon travel tips",
  "Char Dham Yatra guide",
  "Budget trips in India",
  "Luxury honeymoon destinations",
  "Winter travel packing checklist"
];

const BlogHeroAdvanced = () => {
  const [query, setQuery] = useState("");
  const filteredSuggestions = suggestions.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {/* HERO SECTION */}
      <section className="blog-hero-adv">
        <video
    className="hero-video"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="/videos/travel-bg.mp4" type="video/mp4" />
  </video>

        <div className="hero-overlay"></div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <h1>Travel Stories, Guides & Expert Tips</h1>

          <p>
            In-depth destination insights, travel hacks, seasonal guides,
            and insider knowledge from industry experts.
          </p>

          {/* SEARCH */}
          <div className="hero-search-box">
            <input
              type="text"
              placeholder="Search destinations, tips, or guides"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            {query && (
              <div className="search-suggestions">
                {filteredSuggestions.length > 0 ? (
                  filteredSuggestions.map((item, index) => (
                    <div key={index} className="suggestion-item">
                      {item}
                    </div>
                  ))
                ) : (
                  <div className="suggestion-item muted">
                    No results found
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </section>

      {/* STICKY CATEGORY TABS */}
      <div className="sticky-categories">
        {categories.map((cat, index) => (
          <span key={index} className="category-tab">
            {cat}
          </span>
        ))}
      </div>
    </>
  );
};

export default BlogHeroAdvanced;
