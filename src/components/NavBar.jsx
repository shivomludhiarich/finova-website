import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-10 py-6">

      {/* LEFT — Logo */}
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-cyan-400 flex items-center justify-center font-bold text-black text-lg">
          KC
        </div>

        <span className="font-bold text-lg tracking-tight">
          Finova
        </span>
      </div>

      {/* CENTER — Floating Pill */}
      <nav className="
        absolute left-1/2 -translate-x-1/2
        bg-black rounded-full
        px-10 py-4
        flex gap-10
        shadow-xl
      ">
       <Link
        to="/"
        className="font-mono text-[20px] text-white px-4 py-2 rounded-full transition-all duration-200 hover:bg-white hover:text-black"
        >HOME</Link>
        <Link
        to="/team"
        className="font-mono text-[20px] text-white px-4 py-2 rounded-full transition-all duration-200 hover:bg-white hover:text-black"
        >TEAM</Link>
      </nav>

      {/* RIGHT — Socials */}
      <div className="flex gap-4">
        {["TW", "GH", "DR"].map((icon) => (
          <a
            key={icon}
            href="#"
            className="
              border-2 border-cyan-400
              text-cyan-400
              px-4 py-2
              text-sm
              rounded-full
              hover:bg-cyan-400
              hover:text-black
              transition
            "
          >
            {icon}
          </a>
        ))}
      </div>

    </header>
  );
}
