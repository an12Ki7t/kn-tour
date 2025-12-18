import { useEffect, useState } from "react";
import "./Testimonials.css";
import { FaCheckCircle } from "react-icons/fa";

const reviews = [
  {
    name: "Rahul Sharma",
    city: "Mumbai",
    rating: 5,
    review:
      "Excellent service, smooth travel, and perfect coordination. Highly recommended!",
  },
  {
    name: "Anjali Verma",
    city: "Delhi",
    rating: 5,
    review:
      "Transparent pricing and very professional team. Our trip was stress-free.",
  },
  {
    name: "Suresh Iyer",
    city: "Bangalore",
    rating: 4,
    review:
      "Tour manager was very helpful and knowledgeable. Great experience overall.",
  },
  {
    name: "Pooja Mehta",
    city: "Pune",
    rating: 5,
    review:
      "Hotels, transport, and support were excellent. Will book again.",
  },
  {
    name: "Amit Patel",
    city: "Ahmedabad",
    rating: 4,
    review:
      "Good service and local support at destinations. Recommended.",
  },
  {
    name: "Arohi Sharma",
    city: "Bangalore",
    rating: 4,
    review:
      "Tour manager was very helpful and knowledgeable. Great experience overall.",
  },
];

export default function GoogleReviewsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        prev >= reviews.length - visibleCards ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="google-reviews-slider">
      <div className="container">
        <h2 className="section-title">
          Google Reviews{" "}
          <span className="verified">
            <FaCheckCircle /> Verified
          </span>
        </h2>

        <p className="section-subtitle">
          4.8 ★ Rated by happy travelers across India
        </p>

        <div className="slider-wrapper">
          <div
            className="slider-track"
            style={{
              transform: `translateX(-${currentIndex * 33.33}%)`,
            }}
          >
            {reviews.map((item, index) => (
              <div className="review-card" key={index}>
                <div className="review-header">
                  <div className="avatar">{item.name.charAt(0)}</div>
                  <div>
                    <h4>{item.name}</h4>
                    <span>{item.city}</span>
                  </div>
                </div>

                <div className="stars">
                  {"★".repeat(item.rating)}
                  {"☆".repeat(5 - item.rating)}
                </div>

                <p className="review-text">{item.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
