import "./Footer.css";
import logo from "../assets/nLogo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-col">
          <img src={logo} alt="KN Tours Travel" className="footer-logo" />
          <p className="footer-desc">
            KN Tours & Travel is your trusted travel partner, offering curated
            domestic and international tour packages with reliable service and
            unforgettable experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/tours">Tours</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/career">Career</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="#">Flight Booking</a></li>
            <li><a href="#">Hotel Booking</a></li>
            <li><a href="#">Holiday Packages</a></li>
            <li><a href="#">Visa Assistance</a></li>
            <li><a href="#">Travel Insurance</a></li>
          </ul>
        </div>

        {/* Policies */}
        <div className="footer-col">
          <h4>Policies</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Cancellation Policy</a></li>
            <li><a href="#">Refund Policy</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact Us</h4>

          <p className="footer-contact">
            <FaMapMarkerAlt /> Pune, Maharashtra, India
          </p>
          <p className="footer-contact">
            <FaPhoneAlt /> +91 98765 43210
          </p>
          <p className="footer-contact">
            <FaEnvelope /> info@kntours.com
          </p>

          <div className="social-links">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} KN Tours & Travel. All rights reserved.
      </div>
    </footer>
  );
}
