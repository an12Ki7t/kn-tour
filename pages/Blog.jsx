import React from "react";
import BlogHero from "../components4/BlogHero";
import BlogCategories from "../components4/BlogCategories";
import FeaturedBlogs from "../components4/FeaturedBlogs";
import LatestArticles from "../components4/LatestArticles";
import RelatedTours from "../components4/RelatedTours";
import BlogSEO from "../components4/BlogSEO";
import Newsletter from "../components4/Newsletter";

const Blog = () => {
  // Example: set blog category for RelatedTours dynamically
  const blogCategory = "Pilgrimage"; // can be dynamic per article

  return (
    <div>
      {/* Hero Section */}
      <BlogHero />

      {/* Categories */}
      <BlogCategories />

      {/* Featured Blogs */}
      <FeaturedBlogs />

      {/* Latest Articles */}
      <LatestArticles />

      {/* Related Tours */}
      <RelatedTours blogCategory={blogCategory} />

      {/* Blog SEO & Performance */}
      <BlogSEO />

      {/* Newsletter / Lead Capture */}
      <Newsletter />
    </div>
  );
};

export default Blog;
