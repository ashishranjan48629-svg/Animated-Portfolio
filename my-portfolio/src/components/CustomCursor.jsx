import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-9999"
      style={{
        transform: `translate(${position.x - 15}px, ${position.y - 15}px)`,
      }}
    >
      <div className="w-8 h-8 bg-gray-800 rounded-full blur-md opacity-60"></div>
    </div>
  );
}
