'use client';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import AdvancedAI from '../components/AdvancedAI';
import WhyChoose from '../components/WhyChoose';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <main className="h-screen w-full overflow-y-scroll scroll-smooth snap-y snap-mandatory">
      <section className="snap-start">
        <Hero />
      </section>
      <section className="snap-start">
        <About />
      </section>
      <section className="snap-start">
        <Services />
      </section>
      <section className="snap-start">
        <AdvancedAI />
      </section>
      <section className="snap-start">
        <WhyChoose />
      </section>
      <section className="snap-start">
        <Testimonials />
      </section>
      <section className="snap-start">
        <CTA />
      </section>
    </main>
  );
}
