import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Menu from "./Menu";
import Booking from "./Booking";
import Special from "./Special";
import About from "./About";
import Header from "../components/Header";
import ConfirmBooking from "./ConfirmBooking";
import Footer from "../components/Footer";


function WebPage() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/special" element={<Special />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking/confirmation" element={<ConfirmBooking />} />
      </Routes>  
      <Footer />    
    </Router>
  );
}

export default WebPage;
