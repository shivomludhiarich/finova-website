import { useState } from "react";

export default function Domains() {
  const domains = [
    {
      name: "Quant",
      desc: "Specialized in developing sophisticated algorithmic trading strategies and quantitative analysis tools for financial markets.",
      img: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7"
    },
    {
      name: "Investment Banking",
      desc: "Focused on financial advisory, valuation, and capital market strategies.",
      img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3"
    },
    {
      name: "Blockchain",
      desc: "Exploring decentralized tech, smart contracts, and Web3.",
      img: "https://images.unsplash.com/photo-1639762681057-408e52192e55"
    },
    {
      name: "InfoSec",
      desc: "Cybersecurity, ethical hacking, and data protection.",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
    },
    {
      name: "Research",
      desc: "Financial research and market analysis.",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
    },
    {
      name: "Fintech Software",
      desc: "Building fintech apps and platforms.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
    }
  ];

  const [active, setActive] = useState(domains[0]);

  return (
    <section className="bg-black text-white py-28">
      <div className="max-w-7xl mx-auto px-10">

        <h2 className="text-5xl font-bold text-center mb-16">
          Our Domains
        </h2>

        <div className="flex flex-col md:flex-row gap-16">

          {/* LEFT */}
          <div className="flex flex-col gap-4 w-full md:w-[420px]">
            {domains.map((d) => (
              <DomainItem
                key={d.name}
                active={active.name === d.name}
                onClick={() => setActive(d)}
              >
                {d.name}
              </DomainItem>
            ))}
          </div>

          {/* RIGHT */}
          <div className="flex-1">
            <div className="border border-cyan-500/30 rounded-2xl p-6 bg-zinc-900/40 backdrop-blur">

              <img
                src={active.img}
                className="rounded-xl mb-6 w-full h-[260px] object-cover"
              />

              <h3 className="text-2xl font-bold mb-2">
                {active.name}
              </h3>

              <p className="text-white/70">
                {active.desc}
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function DomainItem({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full text-left px-6 py-4 rounded-xl transition
        ${
          active
            ? "bg-cyan-500 text-black"
            : "bg-zinc-900 hover:bg-zinc-800"
        }
      `}
    >
      {children}
    </button>
  );
}
