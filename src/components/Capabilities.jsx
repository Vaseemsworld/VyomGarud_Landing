import React, { useState, useEffect, useRef } from "react";
import { Shield, Zap, Eye, Target } from "lucide-react";
import CapabilityCard from "./CapabilityCard";

export default function Capabilities() {
  const capsRef = useRef(null);
  const [capsVisible, setCapsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setCapsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );

    if (capsRef.current) observer.observe(capsRef.current);
    return () => observer.disconnect();
  }, []);

  const capabilities = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Autonomous Navigation",
      description:
        "Military-grade AI systems with real-time path optimization and obstacle avoidance for mission-critical operations.",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Advanced ISR Systems",
      description:
        "High-resolution imaging and surveillance capabilities with multi-spectral sensors for comprehensive intelligence gathering.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Communications",
      description:
        "Encrypted data links and anti-jamming technology ensuring operational security in contested environments.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Rapid Deployment",
      description:
        "Quick-launch systems designed for tactical mobility with minimal setup time in field operations.",
    },
  ];

  return (
    <section id="capabilities" ref={capsRef} className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            capsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
            Our Capabilities
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Tactical Excellence by Design
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Every system is engineered to deliver mission-critical performance
            in the most demanding environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => (
            <CapabilityCard
              key={index}
              capability={capability}
              index={index}
              visible={capsVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
