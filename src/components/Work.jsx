export default function Work() {
  return (
    <section id="work" className="px-6 py-16">
      <h2 className="text-xs uppercase mb-6">Select Work</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {["Live Dashboard","Brand System","Product Tour"].map((w,i)=>(
          <div key={i} className="border-2 border-black p-6 hover:scale-105 transition">
            {w}
          </div>
        ))}
      </div>
    </section>
  );
}
