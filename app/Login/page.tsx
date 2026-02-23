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

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    // Aquí iría la lógica de login
    setTimeout(() => {
      setLoading(false);
      setError("Usuario o contraseña incorrectos");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden relative font-['DM_Sans'] bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,var(--c3)_0%,var(--c1)_45%,var(--c0)_100%)]">
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
      <div className="bsolute inset-0 bg-grid-pattern bg-grid mask-fade-radial">
        <div className="relative w-lg p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl">
          <div className="flex items-center justify-left gap-2 mb-6">
            <div className="w-10 h-10 bg-[linear-gradient(135deg,var(--c4),var(--c3))] rounded-xl flex items-center justify-center shadow-[0_0_20px_#000000] animate-pulse-custom">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <span className="text-xl font-bold text-white text-center">
              INVENTORY SYSTEM
            </span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-6 text-left">
            Bienvenido
          </h1>
          <p className="text-white mb-6 text-left">
            Ingresa tus credenciales para continuar
          </p>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit} method="POST">
            <div className="relative">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onFocus={() => setFocused("username")}
                onBlur={() => setFocused(null)}
                className="w-full p-3 pl-10 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-c4 transition-colors"
                placeholder="Usuario"
              />
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute left-3 top-1/2 -translate-y-1/2"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setFocused("password")}
                onBlur={() => setFocused(null)}
                className="w-full p-3 pl-10 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-c4 transition-colors"
                placeholder="Contraseña"
              />
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute left-3 top-1/2 -translate-y-1/2"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="inline-block cursor-pointer items-center justify-center rounded-xl border-[1.58px] border-zinc-600 bg-zinc-950 px-5 py-3 font-medium text-slate-200 shadow-md transition-all duration-300 hover:[transform:translateY(-.335rem)] hover:shadow-xl"
            >
              {loading ? "Iniciando sesión..." : "Iniciar sesión"}
            </button>
          </form>
          {error && <p className="text-red-500 mb-6 text-center">{error}</p>}
        </div>
      </div>
    </div>
  );
}
