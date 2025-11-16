import React, { useState } from "react";
import { Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will contact you shortly.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-up">
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

        <div
          className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 space-y-6 animate-slide-up hover:border-orange-500/30 transition-all duration-500"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group">
              <label className="block text-sm font-semibold mb-2 group-focus-within:text-orange-500 transition-colors">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                placeholder="Vaseem Khan"
              />
            </div>
            <div className="group">
              <label className="block text-sm font-semibold mb-2 group-focus-within:text-orange-500 transition-colors">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                placeholder="vaseem@example.com"
              />
            </div>
          </div>
          <div className="group">
            <label className="block text-sm font-semibold mb-2 group-focus-within:text-orange-500 transition-colors">
              Message
            </label>
            <textarea
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              rows="5"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 resize-none"
              placeholder="Tell us about your requirements..."
            ></textarea>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 flex items-center justify-center space-x-2 group"
          >
            <span>Send Message</span>
            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
