import { useState, useRef, useCallback, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const domains = [
  { name: "Quant", desc: "Algorithmic trading systems, statistical arbitrage, and data-driven market models built for speed and precision.", img: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7", accent: "#00FFD1", tag: "TRADING · ALGORITHMS" },
  { name: "Investment Banking", desc: "Financial advisory, DCF & LBO modeling, M&A due diligence, and capital markets intelligence.", img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3", accent: "#FFD166", tag: "ADVISORY · VALUATION" },
  { name: "Blockchain", desc: "Web3 infrastructure, smart contract auditing, DeFi protocols, and decentralized application architecture.", img: "https://images.unsplash.com/photo-1639762681057-408e52192e55", accent: "#A78BFA", tag: "WEB3 · DEFI" },
  { name: "InfoSec", desc: "Red teaming, penetration testing, threat modeling, and security architecture for financial systems.", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b", accent: "#F43F5E", tag: "SECURITY · HACKING" },
  { name: "Research", desc: "Deep-dive sector analysis, equity research, macro trends, and structured data intelligence pipelines.", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40", accent: "#38BDF8", tag: "ANALYSIS · MARKETS" },
  { name: "Fintech Software", desc: "Scalable payment rails, compliance automation, open banking APIs, and next-gen financial platforms.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71", accent: "#4ADE80", tag: "PLATFORMS · INFRA" },
];

const SWIPE_THRESHOLD = 15;
const WHEEL_THRESHOLD = 20;
const WHEEL_COOLDOWN = 500;

function getVisible() {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
}
function getGap() {
  if (typeof window === "undefined") return 32;
  return window.innerWidth < 640 ? 16 : 32;
}
function getPad() {
  if (typeof window === "undefined") return 80;
  if (window.innerWidth < 640) return 20;
  if (window.innerWidth < 1024) return 40;
  return 80;
}

export default function Domains() {
  const [index, setIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [visible, setVisible] = useState(getVisible);

  const sliderRef = useRef(null);
  const pointerStartX = useRef(null);
  const pointerStartY = useRef(null);
  const lastPointerX = useRef(null);
  const pointerVelocity = useRef(0);
  const pointerStartTime = useRef(null);
  const axisLocked = useRef(null);
  const wheelLastFired = useRef(0);
  const wheelAccum = useRef(0);
  const wheelRaf = useRef(null);

  const maxIndex = Math.max(0, domains.length - visible);
  const clamp = (v, mn, mx) => Math.min(Math.max(v, mn), mx);
  const goTo = useCallback((n) => setIndex(clamp(n, 0, Math.max(0, domains.length - visible))), [visible]);

  useEffect(() => {
    const onResize = () => {
      setVisible(getVisible());
      setIndex((i) => Math.min(i, Math.max(0, domains.length - getVisible())));
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX) * 1.5) return;
      e.preventDefault();
      e.stopPropagation();
      wheelAccum.current += e.deltaX;
      if (wheelRaf.current) cancelAnimationFrame(wheelRaf.current);
      wheelRaf.current = requestAnimationFrame(() => {
        const now = Date.now();
        if (now - wheelLastFired.current < WHEEL_COOLDOWN) { wheelAccum.current = 0; return; }
        const abs = Math.abs(wheelAccum.current);
        if (abs < WHEEL_THRESHOLD) return;
        const steps = abs > 150 ? 2 : 1;
        if (wheelAccum.current > 0) goTo(index + steps);
        else goTo(index - steps);
        wheelLastFired.current = now;
        wheelAccum.current = 0;
      });
    };
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [index, goTo]);

  const onPointerDown = (e) => {
    if (e.button !== undefined && e.button !== 0) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    pointerStartX.current = e.clientX;
    pointerStartY.current = e.clientY;
    lastPointerX.current = e.clientX;
    pointerStartTime.current = Date.now();
    pointerVelocity.current = 0;
    axisLocked.current = null;
    setIsDragging(false);
    setDragOffset(0);
  };

  const onPointerMove = (e) => {
    if (pointerStartX.current === null) return;
    const dx = e.clientX - pointerStartX.current;
    const dy = e.clientY - pointerStartY.current;
    if (!axisLocked.current && (Math.abs(dx) > 5 || Math.abs(dy) > 5)) {
      axisLocked.current = Math.abs(dx) >= Math.abs(dy) ? "x" : "y";
    }
    if (axisLocked.current === "y") return;
    if (Math.abs(dx) > SWIPE_THRESHOLD) { e.preventDefault(); setIsDragging(true); }
    pointerVelocity.current = e.clientX - lastPointerX.current;
    lastPointerX.current = e.clientX;
    setDragOffset(dx);
  };

  const onPointerUp = (e) => {
    if (pointerStartX.current === null) return;
    const totalDx = e.clientX - pointerStartX.current;
    if (axisLocked.current === "x" && Math.abs(totalDx) > SWIPE_THRESHOLD) {
      goTo(totalDx < 0 ? index + 1 : index - 1);
    }
    setDragOffset(0);
    setIsDragging(false);
    pointerStartX.current = null;
    axisLocked.current = null;
  };

  const pad = getPad();
  const gap = getGap();
  const gapTotal = gap * (visible - 1);
  const cardW = `calc((100vw - ${pad * 2}px - ${gapTotal}px) / ${visible})`;
  const cardStep = `(100vw - ${pad * 2}px - ${gapTotal}px) / ${visible} + ${gap}px`;

  const trackTransform = isDragging
    ? `translateX(calc(-${index} * (${cardStep}) + ${dragOffset}px))`
    : `translateX(calc(-${index} * (${cardStep})))`;
  const trackTransition = isDragging ? "none" : "transform 0.55s cubic-bezier(0.25, 1, 0.35, 1)";

  const isMobile = visible === 1;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .dom-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 55% 45% at 12% 55%, rgba(0,255,209,0.05) 0%, transparent 60%),
            radial-gradient(ellipse 50% 50% at 88% 28%, rgba(167,139,250,0.05) 0%, transparent 60%);
          pointer-events: none;
        }

        .dom-eyebrow::before {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: rgba(255,255,255,0.33);
          flex-shrink: 0;
        }

        .dom-heading-outline {
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(255,255,255,0.27);
        }

        .dom-h2 {
          font-size: clamp(32px, 5vw, 72px);
          line-height: 0.95;
          letter-spacing: -0.03em;
        }

        .dom-card-name {
          font-size: clamp(20px, 2.2vw, 38px);
          letter-spacing: -0.02em;
          line-height: 1;
        }

        .dom-viewport {
          mask-image: linear-gradient(90deg, transparent 0%, black 2%, black 98%, transparent 100%);
        }

        .dom-dot-active {
          width: 22px !important;
          border-radius: 3px !important;
        }
      `}</style>

      <section
        id="domains"
        className="dom-root relative w-full min-h-screen flex items-center overflow-hidden bg-black box-border py-20 md:py-4"
        style={{ fontFamily: "'DM Sans', sans-serif", paddingLeft: `${pad}px`, paddingRight: `${pad}px` }}
      >
        <div className="relative z-10 w-full">

          {/* HEADER */}
          <div className="flex items-end justify-between mb-8 md:mb-14">
            <div>
              <div className="dom-eyebrow inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.2em] text-[#06B6D4] uppercase mb-4 md:mb-5">
                Our Domains
              </div>
              <h2 className="dom-h2 font-extrabold text-white m-0" style={{ fontFamily: "'Syne', sans-serif" }}>
                The <span className="dom-heading-outline">power</span>house
                <br />of innovation
              </h2>
            </div>

            <div className="flex flex-col items-end gap-2 md:gap-4 pb-1">
              <div className="text-[11px] font-semibold tracking-[0.05em] text-white/20 leading-none" style={{ fontFamily: "'Syne', sans-serif" }}>
                <strong className="text-[28px] md:text-[42px] text-white/70 tracking-[-0.03em] mr-1 leading-none" style={{ fontFamily: "'Syne', sans-serif" }}>
                  0{index + 1}
                </strong>
                / 0{maxIndex + 1}
              </div>

              <div className="flex items-center gap-2">
                <button onClick={() => goTo(index - 1)} disabled={index === 0}
                  className="w-9 h-9 md:w-[54px] md:h-[54px] rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center text-white/50 transition-all duration-200 hover:border-white/40 hover:bg-white/10 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed">
                  <ArrowLeft size={15} />
                </button>

                {/* Dots — hidden on mobile to save space */}
                <div className="hidden sm:flex items-center gap-[7px]">
                  {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                    <div key={i} onClick={() => goTo(i)}
                      className={`dom-dot h-[5px] rounded-full cursor-pointer transition-all duration-300 ${i === index ? "dom-dot-active bg-white/70" : "w-[5px] bg-white/20"}`} />
                  ))}
                </div>

                <button onClick={() => goTo(index + 1)} disabled={index === maxIndex}
                  className="w-9 h-9 md:w-[54px] md:h-[54px] rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center text-white/50 transition-all duration-200 hover:border-white/40 hover:bg-white/10 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed">
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>

          {/* SLIDER */}
          <div ref={sliderRef} className="dom-viewport overflow-hidden"
            style={{ cursor: isDragging ? "grabbing" : "grab", touchAction: "pan-y" }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            <div className="flex will-change-transform select-none"
              style={{ gap: `${gap}px`, transform: trackTransform, transition: trackTransition }}>
              {domains.map((d, i) => {
                const isHovered = hoveredCard === i;
                const showDesc = isMobile || isHovered;
                return (
                  <div key={i} className="relative flex-shrink-0 rounded-[18px] md:rounded-[22px] overflow-hidden"
                    style={{
                      width: cardW,
                      height: isMobile ? "440px" : "520px",
                      transform: isHovered ? "translateY(-10px)" : "translateY(0)",
                      transition: "transform 0.45s cubic-bezier(0.32, 0.72, 0, 1)",
                      cursor: isDragging ? "grabbing" : "pointer",
                    }}
                    onMouseEnter={() => !isDragging && setHoveredCard(i)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <img src={`${d.img}?w=900&auto=format&fit=crop`} alt={d.name}
                      className="absolute inset-0 w-full h-full object-cover pointer-events-none" draggable={false}
                      style={{
                        transform: isHovered ? "scale(1.08)" : "scale(1)",
                        filter: isHovered ? "saturate(0.78) brightness(0.52)" : "saturate(0.55) brightness(0.44)",
                        transition: "transform 0.7s cubic-bezier(0.32, 0.72, 0, 1), filter 0.5s ease",
                      }} />

                    <div className="absolute inset-0 pointer-events-none"
                      style={{ background: "linear-gradient(170deg, transparent 20%, rgba(4,4,6,0.5) 55%, rgba(4,4,6,0.97) 100%)" }} />

                    <div className="absolute top-0 left-0 right-0 pointer-events-none"
                      style={{ height: "2.5px", background: `linear-gradient(90deg, transparent, ${d.accent}, transparent)`, opacity: isHovered ? 1 : 0, transition: "opacity 0.3s ease" }} />

                    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-9 pb-6 md:pb-10 pointer-events-none">
                      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.17em] mb-2.5 transition-colors duration-300"
                        style={{ color: isHovered ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.30)" }}>
                        <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: d.accent }} />
                        {d.tag}
                      </div>

                      <h3 className="dom-card-name font-extrabold text-white mb-2.5" style={{ fontFamily: "'Syne', sans-serif" }}>
                        {d.name}
                      </h3>

                      <p className="text-[13px] md:text-[14.5px] font-light text-white/50 leading-relaxed m-0 overflow-hidden"
                        style={{
                          maxHeight: showDesc ? "120px" : "0px",
                          opacity: showDesc ? 1 : 0,
                          transition: "max-height 0.45s cubic-bezier(0.32,0.72,0,1), opacity 0.3s ease",
                        }}>
                        {d.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}