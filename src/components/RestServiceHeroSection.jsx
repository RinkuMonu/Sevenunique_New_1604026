"use client";

import Image from "next/image";
import Link from "next/link";
import { GoHome } from "react-icons/go";

export default function RestServiceHeroSection({ data }) {
  const hero = data?.hero;

  if (!hero) return null;

  return (
   <section className="bg-[#0f172a] px-4 py-10 sm:px-6 md:px-10 md:py-12">
      {/* Responsive UI update: alternate service hero scales on phones. */}
      <div className="mx-auto w-full min-w-0 max-w-7xl">
        <div className="mb-10 flex flex-wrap items-center gap-3 text-sm text-[#4b5563]">
          <GoHome className="text-[18px]" />
          <span>{">"}</span>
          <span>{hero.breadcrumb?.[0]}</span>
          <span>{">"}</span>
          <span className="font-semibold text-gray-500">
            {hero.breadcrumb?.[1]}
          </span>
        </div>

     <div className="grid min-w-0 grid-cols-1 items-center gap-8 py-5 sm:py-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:py-10">
  {/* Left Content */}
  <div className="min-w-0 max-w-2xl">
    {/* Title */}
    <p className="mb-4 [overflow-wrap:anywhere] text-xs font-semibold uppercase tracking-[0.16em] text-white sm:mb-6 sm:text-sm sm:tracking-[0.2em]">
      {hero.title}
    </p>

    {/* Heading */}
    <h1 className="[overflow-wrap:anywhere] text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl lg:text-[58px]">
      {hero.heading}
    </h1>

    {/* Description */}
    <p className="mt-5 max-w-full [overflow-wrap:anywhere] text-base leading-relaxed text-gray-200 sm:mt-8 sm:text-lg md:text-xl md:leading-[1.8]">
      {hero.description}
    </p>

    {/* Button */}
    <Link
      href="/schedule-a-call-page"
      className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-[#ff6b3d] px-6 py-4 text-base font-semibold text-white transition hover:bg-[#f15c2d] sm:mt-10 sm:w-auto sm:rounded-2xl sm:px-8 sm:py-5 sm:text-xl"
    >
      {hero.buttonLabel}
    </Link>
  </div>

  {/* Right Image */}
  <div className="w-full min-w-0 max-w-full rounded-xl bg-gray-200 p-2">
  <div className="relative h-[240px] w-full overflow-hidden rounded-xl sm:h-[340px] md:h-[420px]">
  <Image
    src={hero.image}
    alt={hero.heading}
    fill
    className="object-cover"
    priority
  />
</div>
  </div>
</div>
      </div>
    </section>
  );
}
