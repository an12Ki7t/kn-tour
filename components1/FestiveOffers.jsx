import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./FestiveOffers.css";
import diwali from "../assets/diwali.webp";
import christmas from "../assets/christmas.jpeg";
import summer from "../assets/summer.webp";
import newyear from "../assets/newyear.jpg";


// Example offers
const offersData = [
  {
    id: 1,
    title: "Diwali Special: Rajasthan Heritage Tour",
    image: diwali,
    discount: "20% OFF",
    endDate: "2025-12-31T23:59:59",
  },
  {
    id: 2,
    title: "Christmas Europe Cruise",
    image:christmas ,
    discount: "15% OFF",
    endDate: "2025-12-25T23:59:59",
  },
  {
    id: 3,
    title: "Summer Special: Andaman Islands",
    image:summer ,
    discount: "10% OFF",
    endDate: "2026-03-31T23:59:59",
  },
  {
    id: 4,
    title: "New Year Bhutan Retreat",
    image: newyear,
    discount: "25% OFF",
    endDate: "2025-12-31T23:59:59",
  },
];

const FestiveOffers = () => {
  const [timers, setTimers] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const newTimers = {};
      offersData.forEach((offer) => {
        const distance = new Date(offer.endDate).getTime() - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        newTimers[offer.id] = { days, hours, minutes, seconds };
      });
      setTimers(newTimers);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="festive-offers">
      <h2 className="section-title">Seasonal / Festive Offers</h2>

      <div className="offers-carousel">
        {offersData.map((offer) => (
          <motion.div
            key={offer.id}
            className="offer-card"
            whileHover={{ scale: 1.05 }}
          >
            <div
              className="offer-image"
              style={{ backgroundImage: `url(${offer.image})` }}
            >
              <div className="offer-overlay">
                <span className="discount-badge">{offer.discount}</span>
                <h3>{offer.title}</h3>
                {timers[offer.id] && (
                  <p className="countdown">
                    {timers[offer.id].days}d {timers[offer.id].hours}h{" "}
                    {timers[offer.id].minutes}m {timers[offer.id].seconds}s
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FestiveOffers;
