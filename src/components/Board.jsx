import { Mail, Linkedin } from "lucide-react";

import vedant from "../assets/members/images/vedant.jpg";
import aayushman from "../assets/members/images/aayushman.png";
import nishant from "../assets/members/images/nishant.jpeg";
import abhuday from "../assets/members/images/abhuday.jpeg";
import sujai from "../assets/members/images/sujai.jpeg";

const members = [
  { name: "Vedant Agarwal", role: "President", img: vedant, email: "mailto:vedant.agarwal312@gmail.com", linkedin: "https://www.linkedin.com/in/vedant-agarwal312" },
  { name: "Suhani Patel", role: "Vice President", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80", email: "mailto:suhani@example.com", linkedin: "https://linkedin.com/in/suhani" },
  { name: "Samriddhi Mishra", role: "General Secretary", img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80", email: "mailto:samriddhi@example.com", linkedin: "https://linkedin.com/in/samriddhi" },
  { name: "Aayushman Jain", role: "Treasurer", img: aayushman, email: "mailto:aayushman.mitmpl2023@learner.manipal.edu", linkedin: "https://www.linkedin.com/in/aayushman-jain" },
  { name: "Nishant Dahiya", role: "Head of Operations", img: nishant, email: "mailto:nishant@example.com", linkedin: "https://www.linkedin.com/in/nishant-dahiya-3a071424b" },
  { name: "Nihar Madhekar", role: "Quant Head", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80", email: "mailto:nihar@example.com", linkedin: "https://linkedin.com/in/nihar" },
  { name: "Debarun Karmakar", role: "Investment Banking Head", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80", email: "mailto:debarun@example.com", linkedin: "https://linkedin.com/in/debarun" },
  { name: "Mohammed Hadi", role: "Blockchain & Web3 Head", img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&q=80", email: "mailto:hadi@example.com", linkedin: "https://linkedin.com/in/hadi" },
  { name: "Sujai Murali", role: "InfoSec Head", img: sujai, email: "mailto:velociper5@gmail.com", linkedin: "https://www.linkedin.com/in/sujai-murali" },
  { name: "Abhuday Singh", role: "Research Head", img: abhuday, email: "mailto:abhuday@example.com", linkedin: "https://www.linkedin.com/in/kunwar-abhuday-singh-280836284" },
  { name: "Pranay G Nayak", role: "Fintech Software Head", img: "ADD_IMAGE_HERE", email: "mailto:pranay@example.com", linkedin: "#" },
  { name: "Ayush Das", role: "Product Head", img: "ADD_IMAGE_HERE", email: "mailto:ayush@example.com", linkedin: "#" },
  { name: "Aditya Sharma", role: "Management Head", img: "ADD_IMAGE_HERE", email: "mailto:aditya@example.com", linkedin: "#" },
];

export default function Board() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .board-h2-outline {
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(255,255,255,0.27);
        }

        .board-h2 {
          font-size: clamp(34px, 5vw, 72px);
          line-height: 0.95;
          letter-spacing: -0.03em;
        }

        .member-card:hover .member-img {
          transform: scale(1.06);
          filter: brightness(1) saturate(1.05);
        }

        .member-card:hover .member-socials {
          opacity: 1;
          transform: translateY(0);
        }

        .member-card:hover .member-overlay {
          opacity: 1;
        }
      `}</style>

      <section className="relative bg-black text-white min-h-screen flex items-center py-20 md:py-28 overflow-hidden">
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-10 md:px-20">

          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-6 md:gap-10">
            <h2 className="board-h2 font-extrabold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
              A Team of <span className="board-h2-outline">FinTech</span><br />Leaders
            </h2>
            <p className="max-w-md text-sm md:text-base font-light text-white/45 leading-[1.85] pb-1">
              Visionary leaders building across quant, blockchain, and finance.
            </p>
          </div>

          {/* GRID — 2 cols mobile, 3 sm, 4 lg */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
            {members.map((member, i) => (
              <MemberCard key={i} {...member} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

function MemberCard({ name, role, img, email, linkedin }) {
  return (
    <div
      className="member-card relative rounded-xl md:rounded-2xl overflow-hidden cursor-pointer"
      style={{ transition: "transform 0.4s cubic-bezier(0.32, 0.72, 0, 1)" }}
      onMouseEnter={e => e.currentTarget.style.transform = "translateY(-8px)"}
      onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img src={img} alt={name} className="member-img w-full h-full object-cover"
          style={{ filter: "brightness(1) saturate(1) contrast(1.08)", transition: "all 0.5s ease" }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      <div className="member-overlay absolute inset-0 opacity-0 bg-black/20 transition-opacity" />

      <div className="absolute bottom-0 p-3 md:p-5">
        <div className="text-[9px] md:text-[10px] tracking-widest text-white/40 mb-0.5 uppercase">{role}</div>
        <h3 className="text-sm md:text-lg font-bold mb-2 md:mb-3 leading-tight">{name}</h3>
        <div className="member-socials flex gap-2 opacity-0 translate-y-2 transition-all duration-200">
          {email && (
            <a href={email} className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center border border-white/20 rounded-full hover:border-white transition-colors">
              <Mail size={12} />
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center border border-white/20 rounded-full hover:border-white transition-colors">
              <Linkedin size={12} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}