"use client";

import Image from "next/image";
import Link from "next/link";

export default function ExperiencesSection() {
  return (
    <section className="bg-[#f5f5f5] pt-28 pb-32 relative">
      
      {/* CARD WRAPPER */}
      <div className="max-w-6xl mx-auto px-6 relative">
        
        <div className="bg-white rounded-[28px] shadow-xl flex flex-col md:flex-row-reverse overflow-hidden">
          
          {/* RIGHT IMAGE */}
          <div className="relative h-60 md:h-auto md:w-[35%]">
            <Image
              src="https://assets.bairesdev.com/image/upload/v1/www/core/joinus_open-application_gtu4vp"
              fill
              alt="open application"
              className="object-cover md:rounded-tr-[28px] md:rounded-br-[28px]"
            />
          </div>

          {/* LEFT CONTENT */}
          <div className="p-8 md:p-14 md:w-[65%] flex flex-col justify-center">
            
            {/* HEADING */}
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
              We don&apos;t just fill vacancies.
            </h2>

            {/* TEXT */}
            <div className="text-gray-600 text-base leading-relaxed space-y-4 mb-8">
              <p>
                We go beyond traditional hiring. By spotlighting your strengths
                and interests, we can connect you to your ideal role.
              </p>

              <p>
                Don&apos;t see your dream job listed? Fill out an open
                application. We&apos;re always looking for top talent!
              </p>
            </div>

            {/* BUTTON */}
            <Link href="/schedule-a-call-page" className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition w-fit">
              Send an Open Application
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}