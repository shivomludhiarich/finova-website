export default function Services() {
  return (
    <section id="services" className="bg-black text-white px-6 py-16">
      <h2 className="text-xs uppercase mb-6">Services</h2>

      {[
        "Product Design Systems",
        "Interface Prototyping",
        "Creative Development",
      ].map((s, i) => (
        <div key={i} className="py-6 border-t border-white/20 text-3xl uppercase hover:translate-x-4 transition">
          {s}
        </div>
      ))}
    </section>
  );
}
