import React, { useRef } from "react";

export function GlowCard({ children, className = "" }) {
  const cardRef = useRef(null);

  const handleMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.setProperty("--x", `${x}px`);
    cardRef.current.style.setProperty("--y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      className={`
        group
        relative
        rounded-2xl
        border border-white/20
        bg-black
        p-10
        overflow-hidden
        ${className}
      `}
    >
      {/* Border Glow */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          rounded-2xl
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-300
        "
        style={{
          padding: "2px",
          background: `
            radial-gradient(
              220px 220px at var(--x) var(--y),
              rgba(0,229,255,0.9),
              transparent 70%
            )
          `,
          WebkitMask: `
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0)
          `,
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
