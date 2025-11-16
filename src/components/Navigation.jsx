import React, { useState, useEffect } from "react";
import { Menu, X, Target } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-500 ${
        scrolled
          ? "bg-zinc-950/95 backdrop-blur-lg shadow-lg shadow-orange-500/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center transform rotate-45 transition-transform duration-500 group-hover:rotate-[225deg] group-hover:scale-110">
              <div className="transform -rotate-45">
                <Target className="w-6 h-6 text-white" />
              </div>
            </div>
            <span className="text-2xl font-bold tracking-tight">VyomGarud</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="hover:text-orange-500 transition-all duration-300 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#capabilities"
              className="hover:text-orange-500 transition-all duration-300 relative group"
            >
              Capabilities
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              className="hover:text-orange-500 transition-all duration-300 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden transition-transform duration-300 hover:scale-110"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800 animate-slide-down">
          <div className="px-4 py-4 space-y-3">
            <a
              href="#about"
              className="block hover:text-orange-500 transition-all duration-300 hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#capabilities"
              className="block hover:text-orange-500 transition-all duration-300 hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Capabilities
            </a>
            <a
              href="#contact"
              className="block hover:text-orange-500 transition-all duration-300 hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
