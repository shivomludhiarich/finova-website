import { Instagram, Linkedin, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/finova_logo.png"

const quickLinks = ["Home", "About", "Domains", "Projects", "Contact"];
const socials = [
  { icon: <Instagram size={15} />, label: "Instagram", href: "https://www.instagram.com/finova.manipal/" },
  { icon: <Linkedin size={15} />, label: "LinkedIn", href: "https://www.linkedin.com/company/finova-mit-manipal/" },
  { icon: <Github size={15} />, label: "GitHub", href: "https://github.com/Finova-MIT" },
];
const navLinks = [
  { name: "Home", path: "/" },
  { name: "Team", path: "/team" },
  { name: "Events", path: "/events" },
];

export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .footer-link {
          position: relative;
          display: inline-block;
          color: rgba(0, 40, 50, 0.65);
          font-size: 14px;
          font-weight: 400;
          text-decoration: none;
          transition: color 0.2s ease;
          padding: 2px 0;
        }
        .footer-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 1px;
          background: rgba(0, 30, 40, 0.8);
          transition: width 0.25s ease;
        }
        .footer-link:hover { color: rgba(0, 20, 30, 0.95); }
        .footer-link:hover::after { width: 100%; }
        .footer-social:hover .footer-social-icon {
          background: rgba(0,0,0,0.12);
          border-color: rgba(0,0,0,0.25);
          color: rgba(0,20,30,0.9);
        }
      `}</style>

      <footer className="relative overflow-hidden" style={{ backgroundColor: "#06B6D4", fontFamily: "'DM Sans', sans-serif" }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-black/10" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(0,0,0,0.08) 0%, transparent 70%)" }} />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-10 md:px-20 py-10 md:py-16">
          {/* 2 cols on mobile, 4 on md */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">

            {/* Quick Links */}
            <div>
              <div className="text-[10px] font-bold tracking-[0.22em] uppercase mb-4 md:mb-6" style={{ color: "rgba(0,30,40,0.5)" }}>Quick Links</div>
              <ul className="flex flex-col gap-1">
                {quickLinks.map((link) => (
                  <li key={link}><a href={`#${link.toLowerCase()}`} className="footer-link text-sm">{link}</a></li>
                ))}
              </ul>
            </div>

            {/* Nav Links */}
            <div>
              <div className="text-[10px] font-bold tracking-[0.22em] uppercase mb-4 md:mb-6" style={{ color: "rgba(0,30,40,0.5)" }}>Nav Links</div>
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.name}><Link to={link.path} className="footer-link text-sm">{link.name}</Link></li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div>
              <div className="text-[10px] font-bold tracking-[0.22em] uppercase mb-4 md:mb-6" style={{ color: "rgba(0,30,40,0.5)" }}>Socials</div>
              <ul className="flex flex-col gap-2">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="footer-social flex items-center gap-2 md:gap-3">
                      <span className="footer-social-icon w-7 h-7 rounded-full border border-black/15 flex items-center justify-center transition-all duration-200" style={{ color: "rgba(0,30,40,0.6)" }}>
                        {s.icon}
                      </span>
                      <span className="footer-link text-sm">{s.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Brand + Contact — full width on mobile */}
            <div className="col-span-2 md:col-span-1 flex flex-col gap-5 md:gap-6">
              <a href="#" className="flex items-center gap-3 w-fit">
                <img src={logo} alt="Finova" className="w-9"/>
                <span className="text-base md:text-lg font-extrabold tracking-[0.1em] uppercase" style={{ fontFamily: "'Syne', sans-serif", color: "rgba(0,20,30,0.85)" }}>FINOVA</span>
              </a>

              <div>
                <div className="text-[11px] font-light mb-3 tracking-wide" style={{ color: "rgba(0,30,40,0.5)" }}>For any enquiries, contact:</div>
                <div className="flex flex-col gap-2.5">
                  <ContactLine phone="+91 97113 90266" name="Vedant Agarwal" role="President" />
                  <ContactLine phone="+91 91041 47937" name="Suhani Patel" role="Vice President" />
                </div>
              </div>

              <a href="#apply" className="flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] uppercase w-fit group transition-opacity duration-200 hover:opacity-70" style={{ color: "rgba(0,20,30,0.8)" }}>
                Apply Now
                <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}>
          <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-10 md:px-20 py-4 md:py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
            <p className="text-[11px] font-light tracking-wide" style={{ color: "rgba(0,30,40,0.45)" }}>
              © {new Date().getFullYear()} Finova Manipal. All rights reserved.
            </p>
            <p className="text-[11px] font-light tracking-wide" style={{ color: "rgba(0,30,40,0.45)" }}>
              Manipal Institute of Technology · Karnataka, India
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

function ContactLine({ phone, name, role }) {
  return (
    <div className="flex flex-wrap items-baseline gap-1.5">
      <span className="text-[13px] font-bold" style={{ color: "rgba(0,20,30,0.85)", fontFamily: "'Syne', sans-serif", letterSpacing: "-0.01em" }}>{phone}</span>
      <span className="text-[11px] font-light" style={{ color: "rgba(0,30,40,0.55)" }}>{name} – {role}</span>
    </div>
  );
}