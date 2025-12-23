import React from "react";
import "./OurServices.css";
import {
  FaMapMarkedAlt,
  FaGlobeAsia,
  FaHeart,
  FaUsers,
  FaBriefcase,
  FaHotel,
  FaRoute,
  FaPassport
} from "react-icons/fa";

const services = [
  {
    icon: <FaMapMarkedAlt />,
    title: "Domestic Tour Packages",
    desc: "Well-planned tours across India with comfort, safety, and value."
  },
  {
    icon: <FaGlobeAsia />,
    title: "International Tour Packages",
    desc: "Curated international experiences with end-to-end travel support."
  },
  {
    icon: <FaHeart />,
    title: "Honeymoon Packages",
    desc: "Romantic, customized getaways designed for unforgettable moments."
  },
  {
    icon: <FaUsers />,
    title: "Family & Group Tours",
    desc: "Seamless travel planning for families, friends, and large groups."
  },
  {
    icon: <FaBriefcase />,
    title: "Corporate Travel Solutions",
    desc: "Reliable and professional travel arrangements for business needs."
  },
  {
    icon: <FaHotel />,
    title: "Hotel Bookings & Transport",
    desc: "Trusted hotel tie-ups and comfortable transport services."
  },
  {
    icon: <FaRoute />,
    title: "Customized Itineraries",
    desc: "Personalized travel plans tailored to your schedule and budget."
  },
  {
   icon: <FaPassport />,
    title: "Visa Assistance & Documentation",
    desc: "End-to-end visa guidance and documentation support for hassle-free travel."
  }
];

const OurServices = () => {
  return (
    <section className="our-services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive travel solutions designed for comfort, reliability, and peace of mind.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
