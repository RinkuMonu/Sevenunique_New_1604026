"use client";

import Image from "next/image";
import Link from "next/link";
import { GoHome } from "react-icons/go";

export default function RestServiceHeroSection({ data }) {
  const hero = data?.hero;

  if (!hero) return null;

  return (
    <section className="bg-[#f7f7f8] px-6 py-14 md:px-10 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-wrap items-center gap-3 text-sm text-[#4b5563]">
          <GoHome className="text-[18px]" />
          <span>{">"}</span>
          <span>{hero.breadcrumb?.[0]}</span>
          <span>{">"}</span>
          <span className="font-semibold text-black">{hero.breadcrumb?.[1]}</span>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.5fr)_320px] lg:gap-20">
          <div className="max-w-4xl">
            <p className="mb-8 text-xs font-semibold uppercase tracking-[0.28em] text-[#516986]">
              {hero.title}
            </p>

            <h1 className="max-w-4xl text-[44px] font-semibold leading-[1.08] text-[#2b3440] md:text-[68px]">
              {hero.heading}
            </h1>

            <p className="mt-8 max-w-3xl text-[18px] leading-[1.7] text-[#4b5c74] md:text-[20px]">
              {hero.description}
            </p>

            <Link
              href="/schedule-a-call-page"
              className="mt-12 inline-flex rounded-[12px] bg-[#ff6b3d] px-6 py-4 text-[18px] font-semibold text-white transition hover:bg-[#f15c2d]"
            >
              {hero.buttonLabel}
            </Link>
          </div>

          <div className="mx-auto w-full max-w-[290px]">
            <div className="relative aspect-[0.78] overflow-hidden rounded-[22px] bg-[#d8dde4]">
              <Image
                src={hero.image}
                alt={hero.breadcrumb?.[1] || hero.title}
                fill
                className="object-cover"
                sizes="290px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
