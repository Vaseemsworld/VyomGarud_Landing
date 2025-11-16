import React from "react";
import { Target } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="animate-slide-up">
            <div className="flex items-center space-x-2 mb-4 group cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center transform rotate-45 transition-transform duration-500 group-hover:rotate-[225deg]">
                <div className="transform -rotate-45">
                  <Target className="w-5 h-5 text-white" />
                </div>
              </div>
              <span className="text-xl font-bold">VyomGarud</span>
            </div>
            <p className="text-zinc-400 text-sm">
              Advanced UAV systems for defense and security operations
              worldwide.
            </p>
          </div>
          <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a
                href="#about"
                className="block text-zinc-400 hover:text-orange-500 transition-all hover:translate-x-1 text-sm"
              >
                About
              </a>
              <a
                href="#capabilities"
                className="block text-zinc-400 hover:text-orange-500 transition-all hover:translate-x-1 text-sm"
              >
                Capabilities
              </a>
              <a
                href="#contact"
                className="block text-zinc-400 hover:text-orange-500 transition-all hover:translate-x-1 text-sm"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="space-y-2 text-sm text-zinc-400">
              <p className="hover:text-orange-500 transition-colors cursor-pointer">
                info@vyomgarud.com
              </p>
              <p className="hover:text-orange-500 transition-colors cursor-pointer">
                +91 (0) 123-456-7890
              </p>
              <p>Defense Systems Division</p>
            </div>
          </div>
        </div>
        <div className="border-t border-zinc-900 pt-8 text-center text-zinc-500 text-sm">
          <p>
            &copy; 2025 VyomGarud. All rights reserved. | Military-Grade UAV
            Systems
          </p>
        </div>
      </div>
    </footer>
  );
}
