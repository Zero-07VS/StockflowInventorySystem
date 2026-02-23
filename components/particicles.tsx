"use client";

import { useState, useEffect } from "react";

interface Particle {
  id: number;
  left: number;
  top: number;
  delay: number;
  duration: number;
  size: number;
}

export default function Particles() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  const generateParticles = (count: number): Particle[] =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 3 + Math.random() * 4,
      size: 2 + Math.random() * 4,
    }));

  useEffect(() => {
    setMounted(true);
    setParticles(generateParticles(20));
  }, []);

  return (
    <>
        {mounted &&
        particles.map((p) => (
          <div
            key={p.id}
            className="absolute bg-white/10 rounded-full animate-float"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
    </>
  );
}