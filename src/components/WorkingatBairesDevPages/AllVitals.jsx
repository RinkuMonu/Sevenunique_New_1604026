"use client";

import Image from "next/image";

export default function OneTeamSection() {
  return (
    <section className="bg-[#f5f5f5] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        
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
              At BairesDev, we believe in empowering talent from every corner
              of the world and from every walk of life.
            </p>

            <p>
              Our multicultural company embraces unique perspectives and
              actively challenges biases in technology. Through support for the
              LGBTQIA+ community, remote work opportunities, investments in
              bias-reducing technology, and a focus on gender equality, we offer
              an environment where diversity thrives.
            </p>

            <p>
              We've been recognized by Comparably, IT World Awards, and more, as
              leaders in diversity and inclusion. Together, we're building a
              future where tech careers are accessible and rewarding for all,
              regardless of background or identity.
            </p>
          </div>

          {/* LINK */}
          <a
            href="#"
            className="inline-flex items-center gap-2 border-b-2 border-black w-fit pb-1 font-medium text-black hover:opacity-70 transition"
          >
            Learn more →
          </a>
        </div>

        {/* RIGHT IMAGES */}
        <div className="flex flex-col items-end gap-6">

          {/* IMAGE 1 */}
          <div className="hidden md:block relative h-40 w-[16rem] rounded-2xl overflow-hidden">
            <Image
              src="https://assets.bairesdev.com/image/upload/v1/www/core/joinus_one-team-1_ckbxxt"
              fill
              alt="img1"
              className="object-cover"
            />
          </div>

          {/* IMAGE 2 */}
          <div className="relative h-28 w-full md:w-[24rem] rounded-2xl overflow-hidden">
            <Image
              src="https://assets.bairesdev.com/image/upload/v1/www/core/joinus_one-team-2_fhst3y"
              fill
              alt="img2"
              className="object-cover"
            />
          </div>

          {/* IMAGE 3 */}
          <div className="hidden md:block relative h-52 w-[21rem] rounded-2xl overflow-hidden">
            <Image
              src="https://assets.bairesdev.com/image/upload/v1/www/core/joinus_one-team-3_m27vo0"
              fill
              alt="img3"
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}