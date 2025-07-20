'use client';
import { motion } from "framer-motion";

export default function AdvancedAI() {
  return (
    <section className="relative h-full flex items-center justify-center bg-gradient-to-br from-sky-900/80 to-indigo-900/90">
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl rounded-3xl px-8 py-14 max-w-2xl mx-auto text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow"
        >
          Advanced AI. Human Results.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-2xl text-white/80 mb-8"
        >
          From large language models to voice, vision, and agent frameworks, CodexWagon leverages the world's top AI to solve your business challenges—securely, ethically, and at scale.
        </motion.p>
      </motion.div>
    </section>
  );
}
