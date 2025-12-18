import { useNavigate } from "react-router-dom";
import "./FeaturedPackages.css";

import dubai from "../assets/dubai.avif";
import kashmir from "../assets/kashmir.jpeg";
import europe from "../assets/europe.jpg";
import thailand from "../assets/thailand.jpg";
import singapore from "../assets/singapore.png";
import bali from "../assets/bali.jpeg";

const packages = [
  {
    title: "Dubai",
    duration: "5D / 4N",
    price: "₹45,999",
    image: dubai,
    path: "/packages/dubai",
  },
  {
    title: "Kashmir",
    duration: "6D / 5N",
    price: "₹28,999",
    image: kashmir,
    path: "/packages/kashmir",
  },
  {
    title: "Europe",
    duration: "10D / 9N",
    price: "₹1,49,999",
    image: europe,
    path: "/packages/europe",
  },
  {
    title: "Thailand",
    duration: "5D / 4N",
    price: "₹39,999",
    image: thailand,
    path: "/packages/thailand",
  },
  {
    title: "Singapore",
    duration: "4D / 3N",
    price: "₹42,999",
    image: singapore,
    path: "/packages/singapore",
  },
  {
    title: "Bali",
    duration: "6D / 5N",
    price: "₹55,999",
    image: bali,
    path: "/packages/bali",
  },
];

export default function FeaturedPackages() {
  const navigate = useNavigate();

  return (
    <section className="featured-packages">
      <div className="container">
        <h2 className="section-title">Featured / Best-Selling Packages</h2>
        <p className="section-subtitle">
          Our most popular tours chosen by thousands of happy travelers
        </p>

        <div className="packages-grid">
          {packages.map((item, index) => (
            <div className="package-card" key={index}>
              <div className="package-image">
                <img src={item.image} alt={item.title} />
                <span className="duration">{item.duration}</span>
              </div>

              <div className="package-content">
                <h3>{item.title}</h3>
                <p className="price">
                  Starting from <span>{item.price}</span>
                </p>

                <div className="actions">
                  <button
                    className="enquire-btn"
                    onClick={() => navigate(item.path)}
                  >
                    Enquire
                  </button>
                  <button
                    className="book-btn"
                    onClick={() => navigate(item.path)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
