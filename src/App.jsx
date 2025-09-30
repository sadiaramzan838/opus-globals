// src/App.jsx
import React from "react";
import HeaderNavbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";
import Hero from "./components/Hero";
import MobileHero from "./components/MobileHero";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* Desktop Navbar */}
      <div className="d-none d-lg-block">
        <HeaderNavbar />
      </div>

      {/* Mobile Navbar */}
      <MobileNavbar />

      {/* Desktop Hero */}
      <div className="d-none d-lg-block">
        <Hero />
      </div>

      {/* Mobile Hero */}
      <div className="d-lg-none">
        <MobileHero />
      </div>


      {/* Footer */}
      <Footer />
    </>
  );
}


export default App;
