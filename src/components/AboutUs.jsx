import { GlowCard } from "./ui/spotlight-card";

export default function About() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        .about-eyebrow::before {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: rgba(255,255,255,0.33);
          flex-shrink: 0;
        }

        .about-h2-outline {
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(255,255,255,0.27);
        }

        .about-h2 {
          font-size: clamp(42px, 5.5vw, 88px);
          line-height: 0.91;
          letter-spacing: -0.03em;
        }
      `}</style>

      <section
        id="about"
        className="relative bg-black text-white min-h-screen flex items-center overflow-hidden py-24 md:py-0"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <div className="relative z-10 w-full px-5 sm:px-10 md:px-20 flex flex-col md:flex-row items-center gap-12 md:gap-24">

          {/* LEFT: Text */}
          <div className="flex-1 min-w-0 w-full">
            <div className="about-eyebrow inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.2em] text-[#06B6D4] uppercase mb-5">
              Who We Are
            </div>
            <h2 className="about-h2 font-extrabold text-white mb-8 md:mb-10" style={{ fontFamily: "'Syne', sans-serif" }}>
              About <span className="about-h2-outline">Us</span>
            </h2>
            <p className="text-base md:text-lg font-light text-white/55 leading-[1.85] mb-5 max-w-lg">
              Established in 2024, we are a student-driven community passionate about merging finance and technology to drive innovation and real-world impact.
            </p>
            <p className="text-base md:text-lg font-light text-white/45 leading-[1.85] max-w-lg">
              By bridging these disciplines, we're not just building skills — we're building the{" "}
              <span className="text-white/80 font-medium">future</span>.
            </p>
            <div className="mt-8 md:mt-10 w-12 h-px bg-white/10" />
          </div>

          {/* RIGHT: Stats grid */}
          <div className="flex-shrink-0 grid grid-cols-2 gap-4 md:gap-7 w-full md:w-auto">
            {[
              { number: "8",    label: "DOMAINS"  },
              { number: "300+", label: "MEMBERS"  },
              { number: "3+",   label: "PROJECTS" },
              { number: "2",    label: "YEARS"    },
            ].map((s) => (
              <GlowCard
                key={s.label}
                className="flex flex-col justify-center items-center text-center hover:bg-white/[0.04] transition-colors duration-300 cursor-default rounded-2xl border border-white/10 p-6 md:p-8"
              >
                <div className="text-4xl md:text-5xl font-extrabold text-white mb-2" style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.03em" }}>
                  {s.number}
                </div>
                <div className="text-[10px] font-semibold tracking-[0.22em] text-white/35 uppercase">
                  {s.label}
                </div>
              </GlowCard>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}