import React, { useState, useEffect } from "react";

export default function CursorFollower() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="fixed w-6 h-6 border-2 border-orange-500/30 rounded-full pointer-events-none z-50 transition-transform duration-200"
      style={{
        left: `${mousePos.x}px`,
        top: `${mousePos.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}
