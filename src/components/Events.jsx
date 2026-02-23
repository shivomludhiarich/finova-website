import { useState } from "react";
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react";

const events = [
  { title: "General Body Meeting", type: "Introduction", status: "Completed", date: "February 24,2025", duration: "3 hours", location: "MV Seminar Hall", participants: "Max 170 participants", description:" This was the first event of Finova, marking the beginning of the club, where all the future plans of the club, along with introduction of the board members were discussed, follwed by quiz round", highlights: ["Introduction", "Future plans", "Quiz"],tags:["Introduction", "Quiz"], accent: "#38BDF8", photos: "https://drive.google.com/drive/folders/1fmrt8dJWY9qKfr-UNuyu6MSlaOvQIocM"},
  { title: "Softlaunch", type: "Hackathon", status: "Completed", date: "April 18, 2025", duration: "2 Days", location: "Innovation Centre", participants: "Max 240 participants", description: "A two-day event combining business fundamentals workshop and hackathon. Day one introduced business concepts and vibe coding to transform ideas into reality.", highlights: ["Business fundamentals workshop", "Vibe coding methodology", "Business idea development"], tags: ["launch", "hackathon", "business", "vibe-coding"], accent: "#00FFD1" , photos:"https://drive.google.com/drive/folders/1DnjRE_SnLZo5U3QkxWTjXsnrXuF000zm"},
  { title: "Research Paper & Patent Writing Workshop", type: "Workshop", status: "Completed", date: "March 28, 2025", duration: "Full Day", location: "Online", participants: "Max 50 participants", description: "An online workshop educating participants on choosing problem statements, writing research papers, and working on patents. Covered the complete process from ideation to submission.", highlights: ["Problem statement selection", "Research paper writing techniques", "Patent application process"], tags: ["research", "writing", "patents", "online"], accent: "#A78BFA" },
  { title: "FA/TA Smart Trading Workshop", type: "Workshop", status: "Completed", date: "April 13, 2025", duration: "2 Days", location: "MIT Trading Lab", participants: "Max 50 participants", description: "An exploration of strategic trading decisions incorporating both fundamental and technical analysis. Participants tested various trading strategies and learned real-world application.", highlights: ["Fundamental analysis techniques", "Technical analysis methods", "Strategy testing and implementation"], tags: ["trading", "fundamental-analysis", "technical-analysis", "strategy"], accent: "#FFD166" },
  { title: "Quant Finance Summit", type: "Summit", status: "Upcoming", date: "July 5, 2025", duration: "1 Day", location: "Finance Block, Room 201", participants: "Max 120 participants", description: "Industry speakers and hands-on labs covering algorithmic trading, backtesting frameworks, and statistical arbitrage strategies used by top hedge funds.", highlights: ["Algorithmic trading strategies", "Backtesting with Python", "Industry speaker panels"], tags: ["quant", "algo-trading", "python", "finance"], accent: "#F43F5E" },
  { title: "FinTech Product Sprint", type: "Hackathon", status: "Upcoming", date: "August 22, 2025", duration: "48 Hours", location: "Innovation Centre", participants: "Max 200 participants", description: "Build and pitch a working fintech product in 48 hours. Teams compete across categories including payments, lending, and wealth management.", highlights: ["48-hour build sprint", "Mentor office hours", "Investor pitch finals"], tags: ["fintech", "hackathon", "product", "startup"], accent: "#4ADE80" },
  
];

export default function Events() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Completed", "Upcoming"];
  const filtered = filter === "All" ? events : events.filter((e) => e.status === filter);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .ev-eyebrow::before {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: rgba(255,255,255,0.33);
          flex-shrink: 0;
        }

        .ev-h2-outline {
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(255,255,255,0.27);
        }

        .ev-h2 {
          font-size: clamp(34px, 5.5vw, 88px);
          line-height: 0.91;
          letter-spacing: -0.03em;
        }

        .ev-card:hover .ev-card-accent { opacity: 1; }
      `}</style>

      <section className="relative bg-black text-white min-h-screen py-20 md:py-28 overflow-hidden" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-10 md:px-20">

          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-20 gap-6 md:gap-10">
            <div>
              <div className="ev-eyebrow inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.2em] text-[#06B6D4] uppercase mb-5">
                What We Do
              </div>
              <h2 className="ev-h2 font-extrabold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                Our <span className="ev-h2-outline">Events</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm md:text-base font-light text-white/45 leading-[1.85] pb-1">
              Workshops, hackathons, and summits designed to bridge finance and technology.
            </p>
          </div>

          {/* FILTER TABS */}
          <div className="flex items-center gap-2 md:gap-3 mb-8 md:mb-14 flex-wrap">
            {filters.map((f) => (
              <button key={f} onClick={() => setFilter(f)}
                className={`px-4 md:px-5 py-2 rounded-full text-[10px] md:text-[11px] font-semibold tracking-[0.15em] uppercase transition-all duration-200 border ${
                  filter === f ? "bg-white text-black border-white" : "bg-transparent text-white/40 border-white/10 hover:border-white/30 hover:text-white/70"
                }`}>
                {f}
              </button>
            ))}
            <div className="ml-auto text-[10px] md:text-[11px] font-semibold tracking-[0.15em] uppercase text-white/20">
              {filtered.length} event{filtered.length !== 1 ? "s" : ""}
            </div>
          </div>

          {/* GRID — 1 col mobile, 2 sm, 3 lg */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {filtered.map((ev, i) => <EventCard key={i} ev={ev} />)}
          </div>

        </div>
      </section>
    </>
  );
}

function EventCard({ ev }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="ev-card relative rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden flex flex-col"
      style={{ transition: "transform 0.4s cubic-bezier(0.32, 0.72, 0, 1), border-color 0.3s" }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
    >
      <div className="ev-card-accent absolute top-0 left-0 right-0 opacity-0 transition-opacity duration-300"
        style={{ height: "2px", background: `linear-gradient(90deg, transparent, ${ev.accent}, transparent)` }} />

      <div className="p-5 md:p-7 flex flex-col gap-4 md:gap-5 flex-1">
        <div>
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <span className={`text-[9px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full border ${ev.status === "Completed" ? "border-white/15 text-white/40" : "border-white/30 text-white/70"}`}>
              {ev.status}
            </span>
            <span className="text-[9px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full border"
              style={{ borderColor: `${ev.accent}50`, color: ev.accent }}>
              {ev.type}
            </span>
          </div>
          <h3 className="text-lg md:text-xl font-extrabold text-white leading-tight" style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.01em" }}>
            {ev.title}
          </h3>
        </div>

        <p className="text-sm font-light text-white/45 leading-relaxed">
          {expanded ? ev.description : ev.description.slice(0, 110) + "…"}
        </p>

        <div className="grid grid-cols-2 gap-2">
          {[
            { icon: <Calendar size={11} />, text: ev.date },
            { icon: <Clock size={11} />, text: ev.duration },
            { icon: <MapPin size={11} />, text: ev.location },
            { icon: <Users size={11} />, text: ev.participants },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-1.5 text-[11px] text-white/35">
              <span className="text-white/25 flex-shrink-0">{item.icon}</span>
              <span className="truncate">{item.text}</span>
            </div>
          ))}
        </div>

        {expanded && (
          <div>
            <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-white/30 mb-2">Highlights</div>
            <ul className="flex flex-col gap-1.5">
              {ev.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-[12px] text-white/45 font-light">
                  <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: ev.accent }} />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {ev.tags.map((tag, i) => (
            <span key={i} className="text-[9px] font-semibold tracking-[0.12em] uppercase px-2 py-1 rounded-full bg-white/[0.04] border border-white/[0.07] text-white/30">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-white/[0.06]">
          <button onClick={() => setExpanded(!expanded)}
            className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white/35 hover:text-white/70 transition-colors duration-200">
            {expanded ? "Show less" : "View more"}
          </button>
          <a
            href={ev.photos}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.12em] uppercase hover:opacity-80 transition-opacity"
            style={{ color: ev.accent }}
            >
            Photos <ArrowRight size={11} />
            </a>

        </div>
      </div>
    </div>
  );
}