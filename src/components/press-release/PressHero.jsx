"use client";

import { Download } from "lucide-react";

export default function PressHero() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          {/* Small Label */}
          <p className="text-xs tracking-widest text-gray-500 uppercase mb-4">
            BairesDev Press & Media Hub
          </p>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-[#1f2937]">
            Big news. Bold Moves. <br />
            That’s{" "}
            <span className="text-[#ff5a2f]">BairesDev.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-600 text-lg max-w-xl">
            From exciting projects to industry insights, here are our latest
            updates and media mentions.
          </p>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm max-w-md ml-auto">
          <p className="text-gray-600 text-base leading-relaxed">
            Discover BairesDev’s journey, impact, and innovative solutions we
            deliver across many industries.
          </p>

          {/* Download Link */}
          <div className="mt-6">
            <button className="flex items-center gap-2 text-black text-sm font-medium border-b border-black pb-1">
              Download Corporate Profile
              <Download size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}