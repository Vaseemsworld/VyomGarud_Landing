import React, { useState, useEffect, useRef } from "react";
import { Target } from "lucide-react";

export default function About() {
  const [missionCount, setMissionCount] = useState(0);
  const aboutRef = useRef(null);
  const [aboutVisible, setAboutVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setAboutVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (aboutVisible && missionCount < 500) {
      const timer = setInterval(() => {
        setMissionCount((prev) => {
          if (prev >= 500) {
            clearInterval(timer);
            return 500;
          }
          return prev + 10;
        });
      }, 20);
      return () => clearInterval(timer);
    }
  }, [aboutVisible, missionCount]);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="py-24 bg-gradient-to-b from-zinc-950 to-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-6 transition-all duration-1000 ${
              aboutVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="inline-block">
              <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
                About VyomGarud
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Engineering the Future of Unmanned Systems
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              VyomGarud develops cutting-edge unmanned aerial vehicle systems
              for defense and security operations. Our mission is to deliver
              autonomous solutions that combine artificial intelligence,
              precision engineering, and military-grade reliability.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              From reconnaissance to tactical support, our UAV platforms are
              trusted by armed forces and security agencies worldwide. We don't
              just build drones—we engineer operational superiority.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <div className="h-px w-16 bg-orange-500 animate-expand"></div>
              <span className="text-zinc-500 text-sm">
                Trusted by Defense Forces Globally
              </span>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${
              aboutVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-800 p-8 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-orange-500/5 group-hover:bg-orange-500/10 transition-colors duration-500"></div>
              <div className="relative z-10 text-center">
                <Target className="w-32 h-32 text-orange-500 mb-4 mx-auto animate-spin-slow" />
                <div className="space-y-2">
                  <div className="text-5xl font-bold">{missionCount}+</div>
                  <div className="text-zinc-400">Successful Missions</div>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-24 h-24 border-2 border-orange-500/20 rounded-full animate-ping-slow"></div>
              <div className="absolute bottom-4 left-4 w-32 h-32 border-2 border-orange-500/20 rounded-full animate-ping-slower"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
