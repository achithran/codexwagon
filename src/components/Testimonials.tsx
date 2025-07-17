const testimonials = [
  { quote: "CodexWagon’s AI sales bot doubled our qualified leads in 3 months.", author: "Rahul M., Real Estate" },
  { quote: "Content automation saved us hours and grew our organic reach.", author: "Anjali K., E-commerce" },
  { quote: "The analytics dashboard changed our sales game overnight.", author: "Sameer P., SaaS Startup" },
];

export default function Testimonials() {
  return (
    <section className="max-w-6xl mx-auto my-16 px-4">
      <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">Client Stories</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map(t => (
          <div key={t.author} className="bg-white rounded-2xl shadow p-6 text-center">
            <p className="text-gray-700 mb-4">&quot;{t.quote}&quot;</p>
            <strong className="text-blue-800">{t.author}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
