"use client";

import AuroraBackground from "./ui/aurora-background";

export default function Hero() {
  return (
    <AuroraBackground>
      <div className="relative z-10 text-center px-6">

  <h1 className="
    font-archivo
    text-[18vw]
    leading-[0.85]
    uppercase
    tracking-[-0.04em]
  ">
    Finova <br/> Manipal
  </h1>

  <p className="
    mt-6
    font-inter
    text-sm
    uppercase
    tracking-widest
  ">
    Digital Product Designer <br/>
    & Creative Developer
  </p>

  <button className="
    mt-8
    bg-black
    text-white
    px-8 py-3
    rounded-full
    text-xs
    uppercase
    tracking-widest
    hover:scale-110
    transition
  ">
    Initiate Project
  </button>

</div>
    </AuroraBackground>
  );
}
