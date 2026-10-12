"use client";

import Image from "next/image";

export default function OneTeamSection() {
  return (
    <section className="bg-[#f5f5f5] py-14 sm:py-20 md:py-28">
      {/* Responsive UI update: stack diversity media and constrain every image to its column. */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-3 md:gap-10">
        
        {/* LEFT CONTENT */}
        <div className="md:col-span-2 flex flex-col gap-6">
          
          {/* HEADING */}
          <h4 className="text-[22px] md:text-[32px] font-semibold text-[#111827] leading-tight">
            All voices. <br />
            All backgrounds. <br />
            <span className="text-orange-500">One team.</span>
          </h4>

          {/* PARAGRAPHS */}
          <div className="text-gray-600 text-[16px] leading-relaxed space-y-10 max-w-xl">
            <p>
              At Sevenunique, we empower talent from around the world and all walks of life.
As a multicultural company, we value diverse perspectives and work to reduce bias in technology.
            </p>

            <p>
               We support the LGBTQIA+ community, promote remote work, invest in fairer tech, and focus on gender equality to create an inclusive environment.
We’ve been recognized by Comparably, IT World Awards, and others for diversity and inclusion. Our goal is to make tech careers accessible and rewarding for everyone, regardless of background or identity.

            </p>

          </div>

          {/* LINK */}
          {/* <a
            href="#"
            className="inline-flex items-center gap-2 border-b-2 border-black w-fit pb-1 font-medium text-black hover:opacity-70 transition"
          >
            Learn more →
          </a> */}
        </div>

        {/* RIGHT IMAGES */}
        <div className="flex min-w-0 flex-col items-stretch gap-4 sm:gap-6 md:items-end">

          {/* IMAGE 1 */}
          <div className="relative hidden h-40 w-full max-w-[16rem] overflow-hidden rounded-2xl md:block">
            <Image
              src="/images/goa-celeb.jpeg"
              fill
              sizes="256px"
              alt="img1"
              className="object-cover"
            />
          </div>

          {/* IMAGE 2 */}
          <div className="relative h-48 w-full max-w-full overflow-hidden rounded-2xl sm:h-56 md:h-28 md:max-w-[24rem]">
            <Image
              src="/images/team-goa.JPG"
              fill
              sizes="(max-width: 767px) 100vw, 384px"
              alt="img2"
              className="object-cover"
            />
          </div>

          {/* IMAGE 3 */}
          <div className="relative hidden h-52 w-full max-w-[21rem] overflow-hidden rounded-2xl md:block">
            <Image
              src="/images/team-nainital.JPG"
              fill
              sizes="336px"
              alt="img3"
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
