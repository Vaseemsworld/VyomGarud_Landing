import React from "react";

export default function CapabilityCard({ capability, index, visible }) {
  return (
    <div
      className={`group bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-orange-500/10 transition-all duration-500"></div>
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
      <div className="relative z-10">
        <div className="text-orange-500 mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
          {capability.icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{capability.title}</h3>
        <p className="text-zinc-400 leading-relaxed">
          {capability.description}
        </p>
      </div>
    </div>
  );
}
