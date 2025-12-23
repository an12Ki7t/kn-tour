import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import logo from "../assets/nLogo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <NavLink to="/" className="logo" onClick={() => setMenuOpen(false)}>
        <img src={logo} alt="KN Tours & Travel" />
      </NavLink>

      {/* Hamburger */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu */}
      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li><NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink></li>
        <li><NavLink to="/tours" onClick={() => setMenuOpen(false)}>Tours</NavLink></li>
        <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About Us</NavLink></li>
        <li><NavLink to="/services" onClick={() => setMenuOpen(false)}>Services</NavLink></li>
        
        <li><NavLink to="/blog" onClick={() => setMenuOpen(false)}>Blog</NavLink></li>
        <li><NavLink to="/career" onClick={() => setMenuOpen(false)}>Career</NavLink></li>
        <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
