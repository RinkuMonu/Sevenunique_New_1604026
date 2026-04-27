"use client";
import Link from "next/link";

export default function CtaBanner({ ctaBanner }) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-gradient-to-b md:bg-gradient-to-r from-[#eaf2fd] to-[#afcef7]">

      <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-20 p-8 lg:p-12 bg-transparent transition-colors duration-700 ease-in-out group-hover:bg-[#d0d9ec] font-[Outfit,sans-serif]">

        {/* TEXT */}
        <div className="flex-1 text-gray-900 text-[32px]">
          <p>
            {ctaBanner?.title ||
              "Looking for a team with this kind of track record?"}
          </p>
          <p className="mt-2">
            {ctaBanner?.subtitle ||
              "Tell us more about your AI needs."}
          </p>
        </div>

        {/* BUTTON + GLOW */}
        <div className="relative z-0 w-fit">

          {/* ✅ MOBILE BUTTON */}
          <Link
            href="/schedule-a-call-page"
            className="flex lg:hidden items-center justify-center px-4 py-2.5 rounded-lg bg-[#2563eb] text-white font-medium hover:bg-[#1d4ed8] active:bg-[#1e40af] transition"
          >
            {ctaBanner?.buttonLabel || "Talk to an expert"}
          </Link>

          {/* ✅ DESKTOP BUTTON */}
          <Link
            href="/schedule-a-call-page"
            className="hidden lg:inline-block bg-[#2563eb] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1d4ed8] active:bg-[#1e40af] transition"
          >
            <span className="font-bold text-[20px]">
              {ctaBanner?.buttonLabel || "Talk to an expert"}
            </span>
          </Link>

          {/* GLOW EFFECT */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 w-12 aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#60a5fa] to-[#2563eb] blur-md transition-transform duration-700 ease-in group-hover:scale-[12]" />

        </div>
      </div>
    </div>
  );
}