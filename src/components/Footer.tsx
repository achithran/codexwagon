'use client';
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative z-30 mt-32 bg-gradient-to-br from-sky-950/80 to-fuchsia-900/60 backdrop-blur-2xl py-10 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand + logo */}
        <div className="flex items-center gap-3">
          {/* Animated logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
              <defs>
                <linearGradient id="footerlogo" x1="0" x2="48" y1="0" y2="48" gradientTransform="rotate(45)">
                  <stop stopColor="#38bdf8" />
                  <stop offset="1" stopColor="#a78bfa" />
                </linearGradient>
              </defs>
              <circle cx="24" cy="24" r="18" stroke="url(#footerlogo)" strokeWidth="4" fill="none" />
              <path d="M32 17c-4-5-13-3-13 7 0 10 9 12 13 7" stroke="url(#footerlogo)" strokeWidth="4" strokeLinecap="round" fill="none" />
            </svg>
          </motion.div>
          <span className="text-xl font-bold bg-gradient-to-r from-sky-300 to-fuchsia-300 bg-clip-text text-transparent">CodexWagon</span>
        </div>
        {/* Social icons */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="https://github.com/achithran" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
            <svg className="w-6 h-6 text-white opacity-80 hover:opacity-100" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.48 0-.23-.01-.83-.01-1.63-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.04 1.53 1.04.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.09 0-1.12.39-2.04 1.03-2.75-.1-.26-.45-1.3.1-2.72 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0112 6.84a9.3 9.3 0 012.5.34c1.9-1.33 2.74-1.05 2.74-1.05.55 1.42.2 2.46.1 2.72.64.71 1.03 1.63 1.03 2.75 0 3.96-2.34 4.83-4.57 5.09.36.32.67.94.67 1.9 0 1.37-.01 2.48-.01 2.82 0 .26.18.59.69.48A10.013 10.013 0 0022 12.25C22 6.58 17.52 2 12 2z"/>
            </svg>
          </a>
          <a href="mailto:contact@codexwagon.in" className="hover:scale-110 transition">
            <svg className="w-6 h-6 text-white opacity-80 hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M21 8v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8"/>
            </svg>
          </a>
        </div>
      </div>
      {/* Divider */}
      <div className="border-t border-white/10 mt-8 pt-6 flex flex-col items-center text-sm text-white/60">
        <span>&copy; {new Date().getFullYear()} CodexWagon. All rights reserved.</span>
        <span className="mt-1">Built with <span className="text-fuchsia-300">❤️</span> by Arun</span>
      </div>
    </footer>
  );
}
