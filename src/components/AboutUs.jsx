import { GlowCard } from "./ui/spotlight-card";

export default function About() {
  return (
    <section id="about" className="bg-black text-white py-24">
      <div className="px-10">

        {/* MAIN FLEX */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-32">

          {/* LEFT */}
          <div className="max-w-3xl">
            <h2 className="text-8xl font-bold mb-8">
              About Us
            </h2>

            <p className="text-3xl leading-relaxed text-white/80">
              Established in 2024, we are a student-driven community
              passionate about merging finance and technology to drive
              innovation and impact. By merging the fields of finance and
              technology, we're not just building skills — we're building
              the future.
            </p>
          </div>

          {/* RIGHT */}
          <div className="
            flex flex-wrap
            gap-12
            max-w-3xl
            justify-center
          ">
            <Stat number="8" label="DOMAINS" />
            <Stat number="300+" label="MEMBERS" />
            <Stat number="3+" label="PROJECTS" />
            <Stat number="2" label="YEARS" />
          </div>

        </div>

      </div>
    </section>
  );
}



function Stat({ number, label }) {
  return (
    <GlowCard className="
      w-64 h-44
      flex flex-col
      justify-center
      items-center
      text-center
      hover:scale-105
      transition
    ">
      <div className="text-5xl font-bold mb-2">
        {number}
      </div>

      <div className="text-sm tracking-widest text-white/60">
        {label}
      </div>
    </GlowCard>
  );
}

