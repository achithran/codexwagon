const points = [
  "200+ successful projects delivered worldwide",
  "Deep expertise in AI, cloud, web/mobile, and automation",
  "Flexible for startups to large enterprises",
  "Ongoing support and optimization—your growth is our mission"
];

export default function WhyChoose() {
  return (
    <section className="max-w-3xl mx-auto my-16 px-4 text-center">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">Why Choose CodexWagon?</h2>
      <ul className="space-y-3 text-lg">
        {points.map(p => <li key={p} className="flex items-center justify-center gap-2"><span>✅</span>{p}</li>)}
      </ul>
    </section>
  );
}
