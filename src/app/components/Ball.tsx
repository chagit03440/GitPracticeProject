'use client'
import React, { useEffect, useState } from 'react';

const Ball: React.FC = () => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [direction, setDirection] = useState({ x: 1, y: 1 });

  useEffect(() => {
    const moveBall = () => {
      setPosition((prev) => {
        const newTop = prev.top + direction.y * 10; // Adjust speed here
        const newLeft = prev.left + direction.x * 10;

        // Reverse direction when hitting boundaries
        const nextDirection = {
          x: newLeft <= 0 || newLeft >= window.innerWidth - 50 ? -direction.x : direction.x,
          y: newTop <= 0 || newTop >= window.innerHeight - 50 ? -direction.y : direction.y,
        };

        setDirection(nextDirection);

        return {
          top: Math.min(Math.max(newTop, 0), window.innerHeight - 50),
          left: Math.min(Math.max(newLeft, 0), window.innerWidth - 50),
        };
      });
    };

    const interval = setInterval(moveBall, 50); // Adjust interval for smoothness
    return () => clearInterval(interval);
  }, [direction]);

  return (
    <div
      className="absolute w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg"
      style={{ top: `${position.top}px`, left: `${position.left}px` }}
    />
  );
};

export default Ball;
