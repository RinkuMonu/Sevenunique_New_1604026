"use client";

import {
  Rocket,
  Building2,
  Landmark,
  GraduationCap,
  HeartPulse,
  Pill,
  Dumbbell,
  UtensilsCrossed,
  Clapperboard,
  Wallet,
  Hotel,
  Truck,
  Factory,
  HardHat,
  Plane,
  Scale,
  ShoppingBag,
} from "lucide-react";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const industries = [
  { title: "Startups", icon: Rocket },
  { title: "Corporates", icon: Building2 },
  { title: "Government", icon: Landmark },
  { title: "Education", icon: GraduationCap },
  { title: "Healthcare", icon: HeartPulse },
  { title: "Pharmaceutical", icon: Pill },
  { title: "Fitness & Medical", icon: Dumbbell },
  { title: "Food & Beverage", icon: UtensilsCrossed },
  { title: "Media & Entertainment", icon: Clapperboard },
  { title: "Banking, Finance & FinTech", icon: Wallet },
  { title: "Hospitality", icon: Hotel },
  { title: "Transportation", icon: Truck },
  { title: "Manufacturing", icon: Factory },
  { title: "Construction", icon: HardHat },
  { title: "Aviation", icon: Plane },
  { title: "Legal Tech", icon: Scale },
  { title: "Retail & E-Commerce", icon: ShoppingBag },
];

export default function ProjectsBannerSlider() {
  return (
    <section className={`${outfit.className} bg-white py-20 px-5`}>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-[34px] sm:text-[38px] leading-[1.1] font-semibold text-[#111] mb-5">
            Industries we <span className="text-orange-500">Empower</span>{" "}
            Worldwide
          </h2>

          <p className="max-w-4xl mx-auto text-[#666] text-[17px] leading-8">
            We build cutting-edge digital products, AI-powered solutions,
            mobile applications, enterprise software, and business automation
            systems that help organizations innovate, scale, and transform
            digitally across industries.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item, index) => {
            const Icon = item.icon;

            return (
           <div
  key={index}
  className="industry-card group relative overflow-hidden bg-[#f8f8f8] rounded-full px-5 py-4 flex items-center gap-4 border border-gray-100 cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(249,115,22,0.15)] hover:border-orange-200"
>
  {/* Animated Shine */}
  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/60 to-transparent" />

  {/* Icon */}
  <div className="relative w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-[0_0_25px_rgba(249,115,22,0.5)]">
    <Icon
      size={26}
      className="text-white transition-all duration-500"
    />
  </div>

  {/* Text */}
  <h3 className="text-[15px] font-semibold text-[#1f2937] leading-snug transition-all duration-300 group-hover:text-orange-500">
    {item.title}
  </h3>
</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}