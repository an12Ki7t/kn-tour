import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Tours from "./pages/Tours";
import Contact from "./pages/Contact";
import About from "./pages/About";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WhatsAppButton from "./components/WhatsAppButton";


function App() {

  return (
    <BrowserRouter>
      <Navbar />
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <WhatsAppButton/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
