'use client';
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-[90vh] overflow-hidden bg-gradient-to-tr from-indigo-900 via-sky-900 to-purple-800">
      {/* animated colored blobs */}
      <motion.div
        className="absolute -top-24 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-sky-500 via-blue-500 to-purple-600 opacity-40 blur-3xl z-0"
        animate={{ scale: [1, 1.08, 1], x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-fuchsia-500 via-sky-400 to-emerald-400 opacity-40 blur-3xl z-0"
        animate={{ scale: [1, 1.1, 1], x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      />
      {/* floating SVG shape */}
      <motion.svg
        width="120" height="120"
        viewBox="0 0 100 100"
        className="absolute top-24 right-32 z-10 opacity-60"
        animate={{ y: [0, -16, 0], rotate: [0, 7, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      >
        <polygon points="50,15 90,80 10,80" fill="#38bdf8" fillOpacity="0.18" />
      </motion.svg>
      {/* glassy card */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-20 backdrop-blur-2xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl px-8 py-16 max-w-2xl mx-auto text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.1 }}
          className="text-4xl md:text-6xl font-bold text-white drop-shadow-xl leading-tight"
        >
          Transform Your Business with <span className="text-sky-300">AI-Powered</span><br />
          <span className="bg-gradient-to-r from-purple-300 via-sky-400 to-fuchsia-300 bg-clip-text text-transparent">Digital Solutions</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="mt-8 text-xl text-white/90"
        >
          Unlock growth, automate workflows, and deliver <span className="font-bold text-sky-200">next-gen customer experiences</span>—powered by CodexWagon.
        </motion.p>
        {/* Animated button */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.08, backgroundColor: "#1fb6ff" }}
          transition={{ type: "spring", stiffness: 350 }}
          className="mt-10 inline-block px-10 py-4 text-lg font-semibold rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-lg hover:shadow-2xl hover:bg-sky-600 transition"
        >
          🚀 Get Started
        </motion.a>
      </motion.div>
      {/* extra sparkles */}
      <motion.div
        className="absolute left-16 bottom-24 w-6 h-6 rounded-full bg-sky-300 opacity-80 blur-xl z-20"
        animate={{ x: [0, 8, 0], y: [0, -7, 0] }}
        transition={{ repeat: Infinity, duration: 2.3, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-32 top-20 w-3 h-3 rounded-full bg-fuchsia-300 opacity-70 blur-lg z-20"
        animate={{ x: [0, -5, 0], y: [0, 7, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      />
    </section>
  );
}
