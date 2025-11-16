import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronRight,
  Send,
  Shield,
  Zap,
  Eye,
  Target,
  Globe,
  Lock,
} from "lucide-react";

export default function VyomGarudLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will contact you shortly.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-zinc-950 text-white font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-zinc-950/95 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center transform rotate-45">
                <div className="transform -rotate-45">
                  <Target className="w-6 h-6 text-white" />
                </div>
              </div>
              <span className="text-2xl font-bold tracking-tight">
                VyomGarud
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="hover:text-orange-500 transition-colors"
              >
                About
              </a>
              <a
                href="#capabilities"
                className="hover:text-orange-500 transition-colors"
              >
                Capabilities
              </a>
              <a
                href="#contact"
                className="hover:text-orange-500 transition-colors"
              >
                Contact
              </a>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-zinc-900 border-t border-zinc-800">
            <div className="px-4 py-4 space-y-3">
              <a
                href="#about"
                className="block hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#capabilities"
                className="block hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Capabilities
              </a>
              <a
                href="#contact"
                className="block hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,123,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,123,0,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <div className="flex items-center space-x-2 bg-zinc-900/50 border border-orange-500/30 rounded-full px-4 py-2 backdrop-blur-sm">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-zinc-300">
                  Next-Gen UAV Systems
                </span>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Precision in the Sky,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Dominance on the Ground
              </span>
            </h1>

            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Military-grade autonomous drone systems engineered for tactical
              superiority. Advanced ISR, secure communications, and unmatched
              reliability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <a
                href="#capabilities"
                className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Explore Capabilities</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="border border-zinc-700 hover:border-orange-500 px-8 py-4 rounded-lg font-semibold transition-all hover:bg-zinc-900"
              >
                Request Demo
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-zinc-700 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-orange-500 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 bg-gradient-to-b from-zinc-950 to-zinc-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
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
                trusted by armed forces and security agencies worldwide. We
                don't just build drones—we engineer operational superiority.
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <div className="h-px w-16 bg-orange-500"></div>
                <span className="text-zinc-500 text-sm">
                  Trusted by Defense Forces Globally
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-800 p-8 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-orange-500/5 group-hover:bg-orange-500/10 transition-colors"></div>
                <div className="relative z-10">
                  <Target className="w-32 h-32 text-orange-500 mb-4" />
                  <div className="text-center space-y-2">
                    <div className="text-5xl font-bold">500+</div>
                    <div className="text-zinc-400">Successful Missions</div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-24 h-24 border-2 border-orange-500/20 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-32 h-32 border-2 border-orange-500/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
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
              <div
                key={index}
                className="group bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-orange-500/50 transition-all hover:transform hover:scale-105 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-orange-500/10 transition-all"></div>
                <div className="relative z-10">
                  <div className="text-orange-500 mb-4 transform group-hover:scale-110 transition-transform">
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{capability.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-gradient-to-r from-zinc-900 to-zinc-950 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center space-x-4 group">
                <div className="text-orange-500 flex-shrink-0 transform group-hover:scale-110 transition-transform">
                  {highlight.icon}
                </div>
                <p className="text-zinc-300 font-semibold">{highlight.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
              Get In Touch
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Ready to Deploy Excellence?
            </h2>
            <p className="text-zinc-400 text-lg">
              Contact our team to discuss how VyomGarud can enhance your
              operational capabilities.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">
                Message
              </label>
              <textarea
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows="5"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                placeholder="Tell us about your requirements..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Send Message</span>
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center transform rotate-45">
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
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a
                  href="#about"
                  className="block text-zinc-400 hover:text-orange-500 transition-colors text-sm"
                >
                  About
                </a>
                <a
                  href="#capabilities"
                  className="block text-zinc-400 hover:text-orange-500 transition-colors text-sm"
                >
                  Capabilities
                </a>
                <a
                  href="#contact"
                  className="block text-zinc-400 hover:text-orange-500 transition-colors text-sm"
                >
                  Contact
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="space-y-2 text-sm text-zinc-400">
                <p>info@vyomgarud.com</p>
                <p>+91 (0) 123-456-7890</p>
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

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap");

        * {
          font-family: "Inter", sans-serif;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
