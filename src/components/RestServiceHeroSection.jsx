"use client";

import Image from "next/image";
import Link from "next/link";
import { GoHome } from "react-icons/go";

export default function RestServiceHeroSection({ data }) {
  const hero = data?.hero;

  if (!hero) return null;

  return (
   <section className="bg-[#0f172a] px-6 py-10 md:px-10 md:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-wrap items-center gap-3 text-sm text-[#4b5563]">
          <GoHome className="text-[18px]" />
          <span>{">"}</span>
          <span>{hero.breadcrumb?.[0]}</span>
          <span>{">"}</span>
          <span className="font-semibold text-gray-500">
            {hero.breadcrumb?.[1]}
          </span>
        </div>

     <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] py-8 lg:py-12">
  {/* Left Content */}
  <div className="max-w-2xl">
    {/* Title */}
    <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-white">
      {hero.title}
    </p>

    {/* Heading */}
    <h1 className="text-[52px] font-semibold leading-[1.1] text-white lg:text-[64px]">
      {hero.heading}
    </h1>

    {/* Description */}
    <p className="mt-8 text-[20px] leading-[1.8] text-gray-200">
      {hero.description}
    </p>

    {/* Button */}
    <Link
      href="/schedule-a-call-page"
      className="mt-10 inline-flex items-center rounded-2xl bg-[#ff6b3d] px-8 py-5 text-xl font-semibold text-white transition hover:bg-[#f15c2d]"
    >
      {hero.buttonLabel}
    </Link>
  </div>

  {/* Right Image */}
  <div className="w-full bg-gray-200 p-2 rounded-xl">
  <div className="relative h-[450px] w-full overflow-hidden rounded-xl ">
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
