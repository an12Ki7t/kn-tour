import React from "react";
import { motion } from "framer-motion";
import "./BlogSEO.css";

const seoPoints = [
  "SEO-friendly URLs",
  "Schema markup for articles",
  "Fast image loading (WebP)",
  "Mobile-first layout",
  "Long-term SEO growth & lead nurturing"
];

const BlogSEO = () => {
  return (
    <section className="blog-seo-section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Blog SEO & Performance
      </motion.h2>
      <p>Even if not visible, these points matter:</p>

      <div className="seo-points-grid">
        {seoPoints.map((point, index) => (
          <motion.div
            key={index}
            className="seo-point-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(62,39,35,0.15)" }}
          >
            {point}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogSEO;
