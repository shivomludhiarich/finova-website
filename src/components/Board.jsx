import { Mail, Linkedin } from "lucide-react";

export default function Board() {
  const members = [
    {
      name: "Vedant Agarwal",
      role: "President",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    },
    {
      name: "Suhani Patel",
      role: "Vice President",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    },
    {
      name: "Samriddhi Mishra",
      role: "General Secretary",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80",
    },
    {
      name: "Aayushman Jain",
      role: "Treasurer",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    },
    {
      name: "Nishant Dahiya",
      role: "Head of Operations",
      img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&q=80",
    },
    {
      name: "Nihar Madhekar",
      role: "Quant Head",
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80",
    },
    {
      name: "Debarun Karmakar",
      role: "Investment Banking Head",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    },
    {
      name: "Mohammed Hadi",
      role: "Blockchain & Web3 Head",
      img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&q=80",
    },
  ];

  return (
    <section className="bg-black text-[#00E5FF] py-32">
      <div className="max-w-7xl mx-auto px-10">

        {/* HEADER SECTION */}
        <div className="mb-24">
          <p className="uppercase text-xl tracking-widest mb-4">
            Who We Are
          </p>

          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-10">
            A Team of <br /> FinTech Leaders
          </h1>

          <div className="grid md:grid-cols-2 gap-16 text-xl text-white/70 leading-relaxed">
            <p>
              Our board consists of visionary leaders dedicated to fostering
              innovation in finance and technology.
            </p>

            <p>
              Each member brings unique expertise across quantitative research,
              blockchain infrastructure, product development, and investment
              strategy — working together to build the future.
            </p>
          </div>
        </div>

        {/* MEMBER GRID */}
        <div className="grid text-white grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {members.map((member, index) => (
            <MemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MemberCard({ name, role, img }) {
  return (
    <div className="bg-[#111111] rounded-2xl p-6 transition hover:-translate-y-2 duration-300 shadow-sm text-center">

      <div className="overflow-hidden rounded-2xl mb-6">
        <img
          src={img}
          alt={name}
          className="w-full h-64 object-cover"
        />
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold text-lg">
          {name}
        </h3>

        <p className="text-white/60 text-sm">
          {role}
        </p>

        <div className="flex justify-center gap-4 pt-3 text-white/50">
          <Mail className="w-4 h-4 hover:text-white transition cursor-pointer" />
          <Linkedin className="w-4 h-4 hover:text-white transition cursor-pointer" />
        </div>
      </div>
    </div>
  );
}


