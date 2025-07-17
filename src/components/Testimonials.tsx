'use client';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  { quote: "CodexWagon’s AI sales bot doubled our qualified leads in 3 months.", author: "Rahul M., Real Estate" },
  { quote: "Content automation saved us hours and grew our organic reach.", author: "Anjali K., E-commerce" },
  { quote: "The analytics dashboard changed our sales game overnight.", author: "Sameer P., SaaS Startup" },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);

  // Auto-advance testimonial every 4 seconds
  useEffect(() => {
    const t = setTimeout(() => setIdx((idx + 1) % testimonials.length), 4000);
    return () => clearTimeout(t);
  }, [idx]);

  return (
    <section className="relative min-h-[50vh] flex flex-col justify-center items-center bg-gradient-to-tl from-sky-800/70 to-indigo-900/80 py-20">
      <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-10 drop-shadow">What Our Clients Say</h2>
      <div className="w-full max-w-2xl flex flex-col items-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.95 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl px-8 py-10 w-full text-center text-white/90"
          >
            <p className="text-xl mb-4">&quot;{testimonials[idx].quote}&quot;</p>
            <span className="block mt-2 text-sky-200 font-bold">{testimonials[idx].author}</span>
          </motion.div>
        </AnimatePresence>
        <div className="flex gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setIdx(i)}
              className={`w-3 h-3 rounded-full transition border border-sky-300 ${
                i === idx ? "bg-sky-300" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
      {/* Decorative blur blob */}
      <div className="absolute -z-10 top-0 right-0 w-60 h-60 bg-purple-500/30 rounded-full filter blur-3xl opacity-60 animate-pulse"></div>
    </section>
  );
}
