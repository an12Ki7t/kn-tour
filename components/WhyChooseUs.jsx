import "./WhyChooseUs.css";
import {
  FaRoute,
  FaRupeeSign,
  FaUserTie,
  FaMapMarkedAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaRoute />,
    title: "Customized Itineraries",
    text: "Tailor-made travel plans designed to match your interests, budget, and schedule.",
  },
  {
    icon: <FaRupeeSign />,
    title: "Transparent Pricing",
    text: "No hidden charges. Clear cost breakdowns so you know exactly what you pay for.",
  },
  {
    icon: <FaUserTie />,
    title: "Experienced Tour Managers",
    text: "Professionally trained managers to ensure smooth, worry-free travel.",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Local Support at Destinations",
    text: "On-ground assistance at every destination for safety, comfort, and confidence.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="container">
        <h2 className="section-title">Why Choose Us</h2>
        <p className="section-subtitle">
          What sets us apart from other travel companies
        </p>

        <div className="features-grid">
          {features.map((item, index) => (
            <div className="feature-card" key={index}>
              <div className="icon-box">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
