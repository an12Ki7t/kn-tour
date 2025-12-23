import React from "react";
import "./QuickContactCards.css";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const QuickContactCards = () => {
  return (
    <section className="quick-contact-section">
      <div className="quick-contact-grid">

        {/* Call Us */}
        <div className="contact-card">
          <div className="icon-box">
            <Phone />
          </div>
          <h3>Call Us</h3>
          <p>+91 98765 43210</p>
          <span>Mon – Sat | 10:00 AM – 7:00 PM</span>
        </div>

        {/* Email Us */}
        <div className="contact-card">
          <div className="icon-box">
            <Mail />
          </div>
          <h3>Email Us</h3>
          <p>info@kntours.com</p>
          <span>support@kntourstravel.com</span>
        </div>

        {/* Office Location */}
        <div className="contact-card">
          <div className="icon-box">
            <MapPin />
          </div>
          <h3>Office Location</h3>
          <p>Pune, Maharashtra, India</p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
          >
            Get Directions →
          </a>
        </div>

        {/* WhatsApp Support */}
        <div className="contact-card highlight">
          <div className="icon-box">
            <MessageCircle />
          </div>
          <h3>WhatsApp Support</h3>
          <p>Instant Chat Support</p>
          <span>Fast response during business hours</span>
        </div>

      </div>
    </section>
  );
};

export default QuickContactCards;
