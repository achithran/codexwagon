import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import AdvancedAI from '../components/AdvancedAI'
import WhyChoose from '../components/WhyChoose'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import ChatWidget from '../components/ChatWidget';
export default function Home() {
  return (
    <main className="h-screen w-full overflow-y-scroll scroll-smooth snap-y snap-mandatory">
      <section className="h-screen snap-start"><Hero /></section>
      <section className="h-screen snap-start"><About /></section>
      <section className="h-screen snap-start"><Services /></section>
      <section className="h-screen snap-start"><AdvancedAI /></section>
      <section className="h-screen snap-start"><WhyChoose /></section>
      <section className="h-screen snap-start"><Testimonials /></section>
      <section className="h-screen snap-start"><Footer /></section>
      <section className="h-screen snap-start"><ChatWidget /></section> 
    </main>
  );
}
