"use client";
import Link from "next/link";

export default function CtaBanner({ ctaBanner }) {
  return (
    <div className="group mx-4 my-8 overflow-hidden rounded-2xl bg-gradient-to-b from-orange-200 to-orange-50 sm:mx-6 md:mx-10 md:bg-gradient-to-r">

      <div className="flex flex-col gap-6 bg-transparent p-5 font-[Outfit,sans-serif] transition-colors duration-700 ease-in-out group-hover:bg-orange-100 sm:p-8 md:flex-row md:items-center md:gap-20 lg:p-12">

        {/* TEXT */}
        <div className="flex-1 text-2xl leading-snug text-gray-900 sm:text-[32px]">
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
        <div className="relative z-0 w-full md:w-fit">

          {/* ✅ MOBILE BUTTON */}
          <Link
            href="/schedule-a-call-page"
            className="flex w-full items-center justify-center rounded-lg bg-orange-600 px-4 py-3 font-medium text-white transition hover:bg-orange-500 active:bg-orange-700 lg:hidden"
          >
            {ctaBanner?.buttonLabel || "Talk to an expert"}
          </Link>

          {/* ✅ DESKTOP BUTTON */}
          <Link
            href="/schedule-a-call-page"
            className="hidden lg:inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-400 active:bg-orange-500 transition"
          >
            <span className="font-bold text-[20px]">
              {ctaBanner?.buttonLabel || "Talk to an expert"}
            </span>
          </Link>

          {/* GLOW EFFECT */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 w-12 aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-orange-300 to-orange-500 blur-md transition-transform duration-700 ease-in group-hover:scale-[12]" />

        </div>
      </div>
    </div>
  );
}
