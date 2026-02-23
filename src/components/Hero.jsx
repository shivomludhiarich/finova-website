"use client";
import AuroraBackground from "./ui/aurora-background";

export default function Hero() {
  return (
    <section id="home">
      <AuroraBackground>
        <>
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

            .hero-eyebrow::before {
              content: '';
              display: block;
              width: 28px;
              height: 1px;
              background: rgba(255,255,255,0.33);
              flex-shrink: 0;
            }

            .hero-h1 {
              font-size: clamp(52px, 12vw, 180px);
              line-height: 0.88;
              letter-spacing: -0.04em;
            }
          `}</style>

          <div className="relative z-10 text-center px-5 sm:px-8 flex flex-col items-center" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <div className="hero-eyebrow inline-flex items-center gap-2.5 text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] text-white/30 uppercase mb-6 sm:mb-8">
              Finance · Technology · Innovation
            </div>

            <h1 className="hero-h1 font-extrabold text-white uppercase" style={{ fontFamily: "'Syne', sans-serif" }}>
              Finova<br />Manipal
            </h1>

            <p className="mt-6 sm:mt-8 text-sm sm:text-base font-light text-white/45 tracking-[0.05em] leading-relaxed max-w-xs sm:max-w-sm text-center">
              A student-driven community merging finance and technology to build the future.
            </p>

            <button
              onClick={() => document.getElementById("domains")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-8 sm:mt-10 px-7 sm:px-8 py-3 rounded-full text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase border border-white/20 text-white/60 bg-white/[0.04] hover:bg-white/[0.1] hover:border-white/40 hover:text-white transition-all duration-200"
            >
              Explore Domains
            </button>
          </div>
        </>
      </AuroraBackground>
    </section>
  );
}