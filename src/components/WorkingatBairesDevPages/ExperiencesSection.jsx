"use client";

import Image from "next/image";
import Link from "next/link";

export default function ExperiencesSection() {
  return (
    <section className="relative bg-[#f5f5f5] py-14 sm:py-20 lg:pb-32 lg:pt-28">
      
      {/* CARD WRAPPER */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Responsive UI update: compact card, image, copy, and CTA for phone widths. */}
        <div className="flex flex-col overflow-hidden rounded-[22px] bg-white shadow-xl sm:rounded-[28px] md:flex-row-reverse">
          
          {/* RIGHT IMAGE */}
          <div className="relative h-60 md:h-auto md:w-[35%]">
            <Image
              src="/images/workingp2.png"
              fill
              sizes="(max-width: 767px) 100vw, 35vw"
              alt="open application"
              className="object-cover md:rounded-tr-[28px] md:rounded-br-[28px]"
            />
          </div>

          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center p-5 sm:p-8 md:w-[65%] md:p-10 lg:p-14">
            
            {/* HEADING */}
            <h2 className="mb-5 text-2xl font-semibold leading-tight text-gray-900 sm:text-3xl md:mb-6 md:text-4xl">
              We go beyond hiring and focus on finding the right talent.
            </h2>

            {/* TEXT */}
            <div className="text-gray-600 text-base leading-relaxed space-y-4 mb-8">
              <p>
               We go beyond traditional hiring by highlighting your strengths and interests to match you with the right role.
Don’t see your ideal job? Send an open application, we’re always looking for top talent.
              </p>

            
            </div>

            {/* BUTTON */}
            <Link href="/schedule-a-call-page" className="inline-flex w-full items-center justify-center rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800 sm:w-fit">
            Apply Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
