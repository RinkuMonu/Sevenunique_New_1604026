"use client";

import Image from "next/image";
import Link from "next/link";

export default function ClientLogos() {
  return (
    <section className="py-16 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex ml-12 mb-4 font-bold">
          <span className="text-[#656565b3] text-[12px] tracking-wide">
            OUR TALENT WORKS WITH THE INDUSTRY LEADERS
          </span>
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
