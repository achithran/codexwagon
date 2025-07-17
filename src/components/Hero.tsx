'use client';
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-[80vh] overflow-hidden bg-gradient-to-tr from-indigo-900 via-sky-900 to-purple-800">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl px-8 py-14 max-w-2xl mx-auto text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg"
        >
          Transform Your Business with <span className="text-sky-300">AI-Powered</span> Digital Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.9 }}
          className="mt-8 text-xl text-white/90"
        >
          Unlock growth, automate workflows, and deliver <span className="font-bold text-sky-200">next-gen customer experiences</span>—powered by CodexWagon.
        </motion.p>
      </motion.div>
      {/* Light effect gradient blobs */}
      <div className="absolute -top-20 -left-32 w-96 h-96 bg-purple-400/30 rounded-full filter blur-3xl opacity-60 animate-pulse z-0"></div>
      <div className="absolute -bottom-24 right-0 w-80 h-80 bg-sky-400/40 rounded-full filter blur-3xl opacity-60 animate-pulse z-0"></div>
    </section>
  );
}
