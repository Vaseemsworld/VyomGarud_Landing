import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Capabilities from "./components/Capabilities";
import Highlights from "./components/Highlights";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import CursorFollower from "./components/CursorFollower";
import "./styles/animations.css";

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-zinc-950 text-white font-sans overflow-x-hidden">
      <CursorFollower />
      <Navigation />
      <Hero />
      <About />
      <Capabilities />
      <Highlights />
      <Contact />
      <Footer />
      {showScrollTop && <ScrollToTop />}
    </div>
  );
}
