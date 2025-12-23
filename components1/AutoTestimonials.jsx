import { FaStar } from "react-icons/fa";
import "./AutoTestimonials.css";

const testimonials = [
  {
    name: "Amit Sharma",
    rating: 5,
    text: "Everything was perfectly planned. Hotels, guides, transfers — seamless experience.",
  },
  {
    name: "Sneha Kulkarni",
    rating: 4,
    text: "International trip felt premium and stress-free. Excellent coordination.",
  },
  {
    name: "Rahul Mehta",
    rating: 5,
    text: "Professional team and great itinerary design. Worth every rupee.",
  },
  {
    name: "Pooja Desai",
    rating: 5,
    text: "Customer support was always available. Felt safe throughout the journey.",
  },
  {
    name: "Vikram Singh",
    rating: 4,
    text: "One of the best tour experiences I’ve had. Highly recommended.",
  },
];

// initials helper
const getInitials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("");

const AutoTestimonials = () => {
  return (
    <section className="auto-testimonials">
      <h3 className="auto-title">What Our Travelers Say</h3>

      <div className="testimonial-marquee">
        <div className="testimonial-track">
          {[...testimonials, ...testimonials].map((item, index) => (
            <div className="testimonial-box" key={index}>
              <div className="avatar">{getInitials(item.name)}</div>

              <p className="testimonial-text">“{item.text}”</p>

              <span className="testimonial-name">{item.name}</span>

              {/* STAR RATING */}
              <div className="star-rating">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < item.rating ? "star filled" : "star"}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutoTestimonials;
