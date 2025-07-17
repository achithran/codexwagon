'use client';
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-gradient-to-r from-sky-900/80 to-purple-900/70 backdrop-blur-lg border-b border-white/10">
      <nav className="flex items-center px-6 py-3 max-w-7xl mx-auto">
        {/* Logo icon */}
        <motion.div
          initial={{ scale: 0.8, rotate: -15, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mr-3"
        >
          {/* Stylish SVG “C” for CodexWagon */}
          <svg width="38" height="38" viewBox="0 0 48 48" fill="none">
            <defs>
              <linearGradient id="cwlogo" x1="0" x2="48" y1="0" y2="48" gradientTransform="rotate(45)">
                <stop stopColor="#38bdf8" />
                <stop offset="1" stopColor="#a78bfa" />
              </linearGradient>
            </defs>
            <circle cx="24" cy="24" r="18" stroke="url(#cwlogo)" strokeWidth="4" fill="none" />
            <path d="M32 17c-4-5-13-3-13 7 0 10 9 12 13 7" stroke="url(#cwlogo)" strokeWidth="4" strokeLinecap="round" fill="none" />
          </svg>
        </motion.div>
        {/* Brand name */}
        <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-sky-300 to-fuchsia-300 bg-clip-text text-transparent drop-shadow-md select-none">
          CodexWagon
        </span>
      </nav>
    </header>
  );
}
