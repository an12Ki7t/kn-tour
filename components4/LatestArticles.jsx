import React from "react";
import { motion } from "framer-motion";
import "./LatestArticles.css";

import article1 from "../assets/article1.jpg";
import article2 from "../assets/article2.jpg";
import article3 from "../assets/article3.avif";
import article4 from "../assets/article4.jpg";

const articles = [
  {
    id: 1,
    title: "Top 10 Must-Visit Places in Kerala",
    summary: "Discover the serene backwaters, lush hill stations, and cultural hotspots of Kerala.",
    author: "Sneha Kulkarni",
    date: "Dec 18, 2025",
    readTime: "5 min read",
    image: article1
  },
  {
    id: 2,
    title: "Budget-Friendly Travel Tips for India",
    summary: "Learn how to travel India without breaking the bank with these expert tips.",
    author: "Rohan Verma",
    date: "Dec 12, 2025",
    readTime: "4 min read",
    image: article2
  },
  {
    id: 3,
    title: "Festive Travel Ideas: Diwali & Navratri",
    summary: "Explore unique destinations during the festive season and celebrate like a local.",
    author: "Neha Sharma",
    date: "Nov 30, 2025",
    readTime: "6 min read",
    image: article3
  },
  {
    id: 4,
    title: "Char Dham Yatra: Planning Essentials",
    summary: "Everything you need to know for a safe and memorable Char Dham pilgrimage.",
    author: "Amit Patel",
    date: "Nov 25, 2025",
    readTime: "7 min read",
    image: article4
  }
];

const LatestArticles = () => {
  return (
    <section className="latest-articles">
      {/* SECTION HEADER */}
      <motion.div
        className="articles-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>Latest Articles & Insights</h2>
        <p>High-quality travel content curated to inspire, inform, and guide your journeys.</p>
      </motion.div>

      {/* ARTICLES GRID */}
      <div className="articles-grid">
        {articles.map((article, index) => (
          <motion.div
            key={article.id}
            className="article-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
          >
            <div className="article-image">
              <img src={article.image} alt={article.title} />
            </div>

            <div className="article-content">
              <h3>{article.title}</h3>
              <p>{article.summary}</p>

              <div className="article-meta">
                <span className="author">{article.author}</span>
                <span className="date">{article.date}</span>
                <span className="read-time">{article.readTime}</span>
              </div>

              <button className="read-btn">Read Full Article →</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LatestArticles;
