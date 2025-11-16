import React from "react";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl animate-float-slow"></div>
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,123,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,123,0,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] animate-grid-flow"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-500/30 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="space-y-8">
          <div
            className="inline-block animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="flex items-center space-x-2 bg-zinc-900/50 border border-orange-500/30 rounded-full px-4 py-2 backdrop-blur-sm">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-zinc-300">
                Next-Gen UAV Systems
              </span>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            <span
              className="inline-block animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Precision in the Sky,
            </span>
            <br />
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 inline-block animate-slide-up animate-gradient"
              style={{ animationDelay: "0.3s" }}
            >
              Dominance on the Ground
            </span>
          </h1>

          <p
            className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            Military-grade autonomous drone systems engineered for tactical
            superiority. Advanced ISR, secure communications, and unmatched
            reliability.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-slide-up"
            style={{ animationDelay: "0.5s" }}
          >
            <a
              href="#capabilities"
              className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 flex items-center space-x-2"
            >
              <span>Explore Capabilities</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="border border-zinc-700 hover:border-orange-500 px-8 py-4 rounded-lg font-semibold transition-all hover:bg-zinc-900 hover:scale-105"
            >
              Request Demo
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="w-6 h-10 border-2 border-zinc-700 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-orange-500 rounded-full mt-2 animate-scroll-indicator"></div>
        </div>
      </div>
    </section>
  );
}
