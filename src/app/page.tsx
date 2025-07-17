import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import AdvancedAI from '../components/AdvancedAI';
import WhyChoose from '../components/WhyChoose';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen font-sans">
      <Hero />
      <About />
      <Services />
      <AdvancedAI />
      <WhyChoose />
      <Testimonials />
      <CTA />
    </main>
  );
}
