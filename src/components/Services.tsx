const services = [
  { icon: "🤖", title: "AI Sales & Support Agents", desc: "24/7 smart assistants that engage prospects, qualify leads, and hand them off to your team." },
  { icon: "📝", title: "AI Content Automation", desc: "Generate high-quality blog posts, product descriptions, and social media updates." },
  { icon: "🎬", title: "AI Video & Media Tools", desc: "Create subtitles, voiceovers, and short video clips automatically." },
  { icon: "📈", title: "Predictive Analytics Dashboards", desc: "Real-time visibility into customer behavior and AI-powered insights." },
  { icon: "🛒", title: "Conversational Commerce", desc: "AI chatbots that recommend products and help customers complete purchases seamlessly." },
  { icon: "⚙️", title: "Custom AI Integrations", desc: "Connect intelligent workflows into your CRM, marketing tools, and internal systems." },
];

export default function Services() {
  return (
    <section className="max-w-7xl mx-auto my-16 px-4">
      <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">Our Core AI Solutions</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((svc) => (
          <div key={svc.title} className="bg-white rounded-2xl shadow p-8 text-center hover:shadow-xl transition">
            <div className="text-4xl mb-3">{svc.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-blue-900">{svc.title}</h3>
            <p className="text-gray-600">{svc.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
