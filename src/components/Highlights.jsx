import React from "react";
import { Globe, Lock, Zap } from "lucide-react";

export default function Highlights() {
  const highlights = [
    {
      icon: <Globe className="w-6 h-6" />,
      text: "500+ Successful Missions Across 12 Countries",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      text: "Military-Grade Encryption & Security Protocols",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      text: "99.7% System Reliability in Field Operations",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-zinc-900 to-zinc-950 border-y border-zinc-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-500 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-500 rounded-full filter blur-3xl animate-float-delayed"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-orange-500 flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                {highlight.icon}
              </div>
              <p className="text-zinc-300 font-semibold">{highlight.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
