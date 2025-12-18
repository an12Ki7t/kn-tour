import { useNavigate } from "react-router-dom";
import "./TourCategories.css";
import domastic from "../assets/domastic.jpg";
import international from "../assets/international.jpg";
import himachal from "../assets/himachal.jpg";
import week from "../assets/week.jpg";
import corporate from "../assets/corporate.jpeg";
import groups from "../assets/groups.jpg";
import family from "../assets/family.avif";
import solo from "../assets/solo.webp";


const categories = [
  {
    title: "Domestic Tours",
    image: domastic,
    path: "/tours/domestic",
  },
  {
    title: "International Tours",
    image: international,
    path: "/tours/international",
  },
  {
    title: "Weekend Getaways",
    image: week,
    path: "/tours/weekend",
  },
  {
    title: "Honeymoon Packages",
    image: himachal,
    path: "/tours/honeymoon",
  },
  {
    title: "Corporate Tours",
    image: corporate,
    path: "/tours/corporate",
  },
  {
    title: "Family Tours",
    image: family,
    path: "/tours/corporate",
  },
  {
    title: "Groups Tours",
    image: groups,
    path: "/tours/corporate",
  },
  {
    title: "Solo Tours",
    image: solo,
    path: "/tours/corporate",
  },
];

export default function TourCategoriesSection() {
  const navigate = useNavigate();

  return (
    <section className="tour-categories">
      <div className="container">
        <h2 className="section-title">Popular Tour Categories</h2>
        <p className="section-subtitle">
          Carefully curated travel experiences designed for every kind of traveler
        </p>

        <div className="card-grid">
          {categories.map((item, index) => (
            <div className="tour-card" key={index}>
              <div className="image-wrapper">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <button
                  className="view-btn"
                  onClick={() => navigate(item.path)}
                >
                  View Packages
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
