import "./FeaturedTours.css";

import "./FeaturedTours.css";

import amazing from "../assets/anazing.jpg";
import royal from "../assets/royal.jpg";
import romantic from "../assets/romatic.jpeg";
import paradise from "../assets/paradise.jpg";

const tours = [
  {
    id: 1,
    name: "Amazing Europe",
    duration: "7 Nights / 8 Days",
    price: "₹1,49,999",
    image: amazing,
    highlights: [
      "Paris city tour",
      "Swiss Alps & Mt. Titlis",
      "Rhine River cruise",
    ],
  },
  {
    id: 2,
    name: "Royal Rajasthan",
    duration: "6 Nights / 7 Days",
    price: "₹59,999",
    image: royal,
    highlights: [
      "Jaipur & Udaipur",
      "Desert safari in Jaisalmer",
      "Heritage palace stays",
    ],
  },
  {
    id: 3,
    name: "Romantic Goa",
    duration: "4 Nights / 5 Days",
    price: "₹29,999",
    image: romantic,
    highlights: [
      "Beachside resort",
      "Sunset cruise",
      "North & South Goa tour",
    ],
  },
  {
    id: 4,
    name: "Kashmir Paradise",
    duration: "5 Nights / 6 Days",
    price: "₹45,999",
    image: paradise,
    highlights: [
      "Dal Lake shikara ride",
      "Gulmarg snow experience",
      "Mughal gardens",
    ],
  },
];


const FeaturedTours = () => {
  return (
    <section className="featured-tours">
      <h2 className="section-title">Popular Tours</h2>

      <div className="tours-grid">
        {tours.map((tour) => (
          <div className="tour-card" key={tour.id}>
            <div
              className="tour-image"
              style={{ backgroundImage: `url(${tour.image})` }}
            >
              <div className="hover-overlay">
                <h4>Tour Highlights</h4>
                <ul>
                  {tour.highlights.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <button className="quick-btn">Quick View</button>
              </div>
            </div>

            <div className="tour-info">
              <span className="duration-badge">{tour.duration}</span>
              <h3>{tour.name}</h3>

              <div className="price-row">
  <span className="price">{tour.price}</span>
  <button className="book-btn">Book Now</button>
</div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedTours; 