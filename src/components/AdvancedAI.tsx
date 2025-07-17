const advanced = [
  { icon: "💡", title: "AI Strategy Consulting", desc: "Roadmap for AI integration across your organization." },
  { icon: "🧠", title: "Custom Model Training", desc: "Develop proprietary AI models fine-tuned on your data." },
  { icon: "📊", title: "AI Data Analytics", desc: "Turn raw data into actionable insights." },
  { icon: "🤖", title: "Robotic Process Automation", desc: "Automate repetitive tasks like docs, reporting, approvals." },
  { icon: "💬", title: "Omni-channel Conversational AI", desc: "Engage customers across WhatsApp, Messenger, SMS, web chat." },
  { icon: "🛡️", title: "AI Compliance & Security", desc: "Enterprise-grade security and privacy compliance." },
];

export default function AdvancedAI() {
  return (
    <section className="max-w-7xl mx-auto my-16 px-4">
      <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">Advanced AI Solutions</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {advanced.map((svc) => (
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
