'use client';
import { motion } from "framer-motion";

const services = [
  { icon: "🤖", title: "AI Sales & Support Agents", desc: "24/7 smart assistants that engage prospects, qualify leads, and hand them off to your team." },
  { icon: "📝", title: "AI Content Automation", desc: "Generate high-quality blog posts, product descriptions, and social media updates." },
  { icon: "🎬", title: "AI Video & Media Tools", desc: "Create subtitles, voiceovers, and short video clips automatically." },
  { icon: "📈", title: "Predictive Analytics Dashboards", desc: "Real-time visibility into customer behavior and AI-powered insights." },
  { icon: "🛒", title: "Conversational Commerce", desc: "AI chatbots that recommend products and help customers complete purchases seamlessly." },
  { icon: "⚙️", title: "Custom AI Integrations", desc: "Connect intelligent workflows into your CRM, marketing tools, and internal systems." },
];

const container = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const card = {
  initial: { opacity: 0, y: 40, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 60 } }
};

export default function Services() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-bl from-sky-900/60 to-indigo-900/80 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-5xl font-bold text-white text-center mb-12 drop-shadow"
      >
        Our Core AI Solutions
      </motion.h2>
      <motion.div
        variants={container}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 z-10 w-full max-w-6xl px-4"
      >
        {services.map((svc) => (
          <motion.div
            key={svc.title}
            variants={card}
            className="backdrop-blur-2xl bg-white/10 border border-white/30 shadow-2xl rounded-2xl p-8 flex flex-col items-center justify-center hover:scale-105 hover:bg-white/20 transition duration-300"
          >
            <div className="text-5xl mb-4">{svc.icon}</div>
            <h3 className="text-xl font-semibold text-sky-200 mb-2">{svc.title}</h3>
            <p className="text-white/90 text-center">{svc.desc}</p>
          </motion.div>
        ))}
      </motion.div>
      {/* Subtle color blob */}
      <div className="absolute -z-10 -bottom-24 left-0 w-72 h-72 bg-purple-500/20 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
    </section>
  );
}
