import { Mail, Linkedin, Github, Instagram, ArrowRight } from "lucide-react";

const socials = [
  { icon: <Instagram size={16} />, label: "Instagram", handle: "@finova.manipal", href: "https://www.instagram.com/finova.manipal/" },
  { icon: <Linkedin size={16} />, label: "LinkedIn", handle: "Finova Manipal", href: "https://www.linkedin.com/company/finova-mit-manipal/" },
  { icon: <Github size={16} />, label: "GitHub", handle: "finova-manipal", href: "https://github.com/Finova-MIT" },
  { icon: <Mail size={16} />, label: "Email", handle: "finova.mit.manipal@gmail.com", href: "mailto:finova.mit.manipal@gmail.com" },
];

export default function Contact() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .contact-eyebrow::before {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: rgba(255,255,255,0.33);
          flex-shrink: 0;
        }

        .contact-h2-outline {
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(255,255,255,0.27);
        }

        .contact-h2 {
          font-size: clamp(34px, 5.5vw, 88px);
          line-height: 0.91;
          letter-spacing: -0.03em;
        }

        .social-card:hover .social-arrow {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>

      <section id="contact" className="relative bg-black text-white min-h-screen flex items-center py-20 md:py-28 overflow-hidden" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 60% at 5% 50%, rgba(0,255,209,0.04) 0%, transparent 60%), radial-gradient(ellipse 40% 45% at 95% 30%, rgba(167,139,250,0.04) 0%, transparent 60%)" }} />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-10 md:px-20">

          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-20 gap-6 md:gap-10">
            <div>
              <div className="contact-eyebrow inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.2em] text-[#06B6D4] uppercase mb-5">
                Get In Touch
              </div>
              <h2 className="contact-h2 font-extrabold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                Contact <span className="contact-h2-outline">Us</span>
              </h2>
            </div>
            <p className="max-w-xs text-sm md:text-base font-light text-white/45 leading-[1.85] pb-1">
              Have a question, collaboration idea, or just want to say hello? We'd love to hear from you.
            </p>
          </div>

          {/* 3-panel grid — stacks to 1 col on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">

            {/* COL 1: About */}
            <div className="bg-black p-6 md:p-10 flex flex-col gap-5">
              <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-white/25">About Finova</div>
              <p className="text-sm font-light text-white/45 leading-[1.85] flex-1">
                Finova Manipal is a student-driven community at Manipal Institute of Technology dedicated to merging finance and technology. We run workshops, hackathons, and research initiatives across 8 specialized domains.
              </p>
              <div className="pt-4 border-t border-white/[0.06]">
                <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-white/25 mb-3">Location</div>
                <p className="text-sm font-light text-white/40 leading-relaxed">
                  Manipal Institute of Technology<br />Manipal, Karnataka — 576104<br />India
                </p>
              </div>
            </div>

            {/* COL 2: Socials */}
            <div className="bg-black p-6 md:p-10 flex flex-col gap-5">
              <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-white/25">Find Us Online</div>
              <div className="flex flex-col gap-3 flex-1">
                {socials.map((s, i) => (
                  <a key={i} href={s.href}
                    className="social-card flex items-center justify-between px-4 py-3 md:py-3.5 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.05] transition-all duration-200">
                    <div className="flex items-center gap-3">
                      <div className="text-white/30">{s.icon}</div>
                      <div>
                        <div className="text-[10px] font-semibold tracking-[0.15em] uppercase text-white/25 mb-0.5">{s.label}</div>
                        <div className="text-xs md:text-sm font-light text-white/55 truncate max-w-[150px] md:max-w-none">{s.handle}</div>
                      </div>
                    </div>
                    <ArrowRight size={13} className="social-arrow text-white/25 opacity-0 -translate-x-1 transition-all duration-200 flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>

            {/* COL 3: Direct Contact */}
            <div className="bg-black p-6 md:p-10 flex flex-col gap-6 md:gap-8">
              <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-white/25">Direct Contact</div>
              <div className="flex flex-col gap-6 flex-1">
                <ContactPerson name="Vedant Agarwal" role="President" phone="+91 97113 90266" />
                <div className="w-full h-px bg-white/[0.06]" />
                <ContactPerson name="Suhani Patel" role="Vice President" phone="+91 91041 47937" />
              </div>
              <div className="pt-5 border-t border-white/[0.06]">
                <p className="text-[11px] font-light text-white/30 mb-3 tracking-wide">Or reach us directly at</p>
                <a href="mailto:finova.mit.manipal@gmail.com"
                  className="group flex items-center gap-2 text-xs md:text-sm font-medium text-white/60 hover:text-white transition-colors duration-200 break-all">
                  finova.mit.manipal@gmail.com
                  <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1 text-white/30 flex-shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactPerson({ name, role, phone }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-white/25">{role}</div>
      <div className="text-lg md:text-xl font-extrabold text-white" style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.01em" }}>{name}</div>
      <a href={`tel:${phone.replace(/\s/g, "")}`}
        className="text-sm font-light tracking-wide transition-colors duration-200 hover:text-white"
        style={{ color: "#06B6D4" }}>
        {phone}
      </a>
    </div>
  );
}