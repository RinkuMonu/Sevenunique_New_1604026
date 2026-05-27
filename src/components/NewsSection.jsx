"use client";

const newsLogos = [
  {
    image: "/images/J1.png",
    text: "Digital Business News Platforms",
  },
  {
    image: "/images/J2.png",
    text: "Technology & Startup Media Coverage",
  },
  {
    image: "/images/J3.png",
    text: "Fintech Industry Discussions",
  },
  {
    image: "/images/J4.png",
    text: "Regional and National Media Recognition",
  },
   {
    image: "/images/J5.png",
    text: "Innovation & IT Community Mentions",
  },
];

export default function NewsCTASection() {
  return (
  <section className="relative overflow-hidden py-10 bg-[#0f172a]">

  {/* Gradient Glow Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-orange-300/10" />

  {/* Floating Blur Effects */}
  <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-orange-500/20 blur-[120px] rounded-full" />
  <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-orange-300/20 blur-[120px] rounded-full" />

  {/* Grid Overlay */}
  <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:60px_60px]" />

  <div className="relative z-10 max-w-7xl mx-auto px-6">

    {/* Top Badge */}
    <div className="flex justify-center mb-6">
      <span className="px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-sm tracking-[3px] uppercase text-orange-200 font-medium">
        Media Recognition
      </span>
    </div>

    {/* Heading */}
    <h2 className="text-2xl md:text-4xl font-bold text-white text-center leading-tight">
      Featured Across
      <span className="block bg-gradient-to-r from-orange-300 to-yellow-200 bg-clip-text text-transparent mt-2">
        Global Publications
      </span>
    </h2>

    {/* Description */}
    <p className="text-white/70 text-lg md:text-lg max-w-3xl mx-auto text-center mt-8 leading-relaxed">
      Seven Unique Tech Solutions Pvt. Ltd. has been recognized by reputed
      media platforms and global publishers for innovation, digital
      transformation, and technology excellence.
    </p>

    {/* Decorative Line */}
    <div className="flex justify-center mt-10 mb-16">
      <div className="w-40 h-[2px] bg-gradient-to-r from-transparent via-orange-400 to-transparent" />
    </div>

    {/* Marquee Container */}
    <div className="relative">

      

      {/* Marquee */}
    <div className="marquee-wrapper">
  <div className="marquee">
   {[...newsLogos, ...newsLogos].map((item, index) => (
  <div
    key={index}
    className="group min-w-[260px] h-[190px] rounded-xl border border-white/10 bg-white backdrop-blur-xl flex flex-col items-center justify-center px-6 py-5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
  >
    <img
      src={item.image}
      alt="news"
      className="max-h-[95px] w-auto object-contain mb-5 group-hover:scale-105 transition duration-500"
    />

    <p className="text-sm text-gray-600 font-medium text-center leading-relaxed">
      {item.text}
    </p>
  </div>
))}
  </div>
</div>
    </div>
  </div>

  <style jsx>{`
    .marquee-wrapper {
      overflow: hidden;
      width: 100%;
      position: relative;
    }

    .marquee {
      display: flex;
      gap: 2rem;
      width: max-content;
      animation: scroll 20s linear infinite;
    }

    .marquee:hover {
      animation-play-state: paused;
    }

    @keyframes scroll {
      from {
        transform: translateX(0);
      }

      to {
        transform: translateX(-50%);
      }
    }
  `}</style>
</section>
  );
}