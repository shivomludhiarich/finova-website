import { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Github, Menu, X } from "lucide-react";
import logo from "../assets/finova_logo.png";

const links = [
  { name: "HOME", path: "/" },
  { name: "TEAM", path: "/team" },
  { name: "EVENTS", path: "/events" },
  { name: "CONTACT", path: "/contact" },
];

const socials = [
  { icon: <Instagram size={18} />, href: "https://www.instagram.com/finova.manipal" },
  { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/company/finova-mit-manipal" },
  { icon: <Github size={18} />, href: "https://github.com/Finova-MIT" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-5 md:px-10 py-4 md:py-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 z-50" onClick={() => setOpen(false)}>
          <div className="h-9 w-9 md:h-12 md:w-12 rounded-full flex items-center justify-center">
            <img src={logo} alt="Finova logo" className="w-full h-full object-contain" />
          </div>
          <span className="font-bold text-base md:text-lg tracking-tight text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
            Finova
          </span>
        </Link>

        {/* Desktop nav pill */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-black rounded-full px-6 py-2.5 gap-1 shadow-xl tracking-widest">
          {links.map((l) => (
            <Link key={l.name} to={l.path}
              className="font-mono text-[13px] text-white px-4 py-2 rounded-full transition-all duration-200 hover:bg-white hover:text-black">
              {l.name}
            </Link>
          ))}
        </nav>

        {/* Desktop socials + mobile hamburger */}
        <div className="flex items-center gap-3 z-50">
          <div className="hidden md:flex gap-3">
            {socials.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white hover:bg-white/10 transition">
                {s.icon}
              </a>
            ))}
          </div>
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white/70 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile fullscreen overlay */}
      <div className={`fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        {links.map((l) => (
          <Link key={l.name} to={l.path} onClick={() => setOpen(false)}
            className="font-mono text-3xl font-bold text-white/60 hover:text-white transition-colors duration-200 tracking-widest"
            style={{ fontFamily: "'Syne', sans-serif" }}>
            {l.name}
          </Link>
        ))}
        <div className="flex gap-4 mt-6">
          {socials.map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white transition">
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}