"use client";

import Image from "next/image";
import Link from "next/link";

export default function ClientLogos() {
  return (
    <section className="bg-[#ffffff]  px-6">
      <div className="max-w-5xl mx-auto text-center">

        {/* HEADING */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-600 leading-snug mb-16">
          500+ companies rely on our{" "}
          <span className="underline decoration-[#f4622a] underline-offset-4">
            top 1% talent
          </span>{" "}
          to scale their dev teams
          <span className="text-[#f4622a]">.</span>
        </h2>

        {/* ROW 1 */}
        <div className="flex justify-center items-end gap-16 mb-10">
          
          <div className="flex flex-col items-center gap-0">
            <Image src="/logos/google-new.png" alt="Google" width={130} height={60} className="grayscale opacity-70"/>
            <Link href="/google-case-study" className="text-xs text-[#f4622a]">Read case study</Link>
          </div>

          <div className="flex flex-col items-center gap-0">
            <Image src="/logos/nextroll-new.png" alt="NextRoll" width={120} height={60} className="grayscale opacity-70"/>
            <Link href="/google-case-stud" className="text-xs text-[#f4622a]">Watch testimonial ▶</Link>
          </div>

          <div className="flex flex-col items-center gap-0">
            <Image src="/logos/pintrest.png" alt="Pinterest" width={120} height={60} className="grayscale opacity-70"/>
            <Link href="/google-case-stud" className="text-xs text-[#f4622a]">Read case study</Link>
          </div>

        </div>

        {/* Logos in a single row - exactly like screenshot */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 md:gap-x-12 lg:gap-x-16">
          {/* Adobe */}
          <div className="flex flex-col items-center gap-1">
            <Image
              src="/logos/adobe.png"
              alt="Adobe"
              width={90}
              height={40}
              className="grayscale brightness-50 opacity-100 object-contain"
              style={{ filter: "grayscale(100%)", opacity: 100 }}
            />
          </div>

          {/* Google */}
          <div className="flex flex-col items-center gap-1">
            <Image
              src="/logos/google-new.png"
              alt="Google"
              width={100}
              height={40}
              className="grayscale opacity-60 object-contain"
              style={{ filter: "grayscale(100%)", opacity: 100 }}
            />
          </div>

          {/* Paramount */}
          {/* <div className="flex flex-col items-center gap-1">
            <Image
              src="/logos/paramount.png"
              alt="Paramount"
              width={120}
              height={40}
              className="grayscale opacity-60 object-contain"
              style={{ filter: "grayscale(100%)", opacity: 100 }}
            />
            
          </div> */}

          {/* Motorola */}
          <div className="flex flex-col items-center gap-1">
            <Image
              src="/logos/motorola.png"
              alt="Motorola"
              width={100}
              height={40}
              className="grayscale opacity-100 object-contain"
              style={{ filter: "grayscale(100%)", opacity: 100 }}
            />
          </div>

          {/* Johnson & Johnson */}
          <div className="flex flex-col items-center gap-1">
            <Image
              src="/logos/johnson.png"
              alt="Johnson & Johnson"
              width={130}
              height={40}
              className="grayscale opacity-60 object-contain"
              style={{ filter: "grayscale(100%)", opacity: 100 }}
            />
          </div>

          {/* Salesforce */}
          <div className="flex flex-col items-center gap-1">
            <Image
              src="/logos/salesforce.png"
              alt="Salesforce"
              width={110}
              height={40}
              className="grayscale opacity-60 object-contain"
              style={{ filter: "grayscale(100%)", opacity: 100 }}
            />
          </div>

          {/* Pinterest */}
          <div className="flex flex-col items-center gap-1">
            <Image
              src="/logos/pintrest.png"
              alt="Pinterest"
              width={110}
              height={40}
              className="grayscale opacity-60 object-contain"
              style={{ filter: "grayscale(100%)", opacity: 100 }}
            />
          </div>

          {/* HP */}
          <div className="flex flex-col items-center gap-1">
            <Image
              src="/logos/hp.png"
              alt="HP"
              width={70}
              height={40}
              className="grayscale opacity-60 object-contain"
              style={{ filter: "grayscale(100%)", opacity: 100 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
