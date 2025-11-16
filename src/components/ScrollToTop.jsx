import React from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-lg shadow-orange-500/50 transition-all hover:scale-110 z-50 animate-slide-up"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
}
