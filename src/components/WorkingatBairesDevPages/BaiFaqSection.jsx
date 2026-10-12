"use client";

export default function BaiContactSection() {
  return (
    <section className="bg-[#f5f5f5] pb-14 sm:pb-20 lg:pb-24">
      {/* Responsive UI update: scale contact copy and stack columns on mobile. */}
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-4 pb-8 sm:px-6 sm:pb-10 md:flex-row md:gap-12">
        {/* LEFT SIDE */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold leading-tight text-[#1f2937] sm:text-4xl md:text-[56px]">
            Got questions? <br />
            Let&apos;s talk !
          </h2>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex min-w-0 flex-col gap-5 text-base leading-relaxed text-[#374151] sm:text-lg md:w-1/2 md:gap-6">
          <p>
            Our friendly team is here to answer your questions and guide you through your journey with us.
          </p>
          <p className="font-bold text-gray-600">Contact us via</p>
<p>Live Chat on our application site
</p>
          <p>
            {/* Contact us via <br />
            Live Chat on our{" "}
            <a href="#" className="underline">
              Applications Site
            </a>{" "}
            <br /> */}
            Email:{" "}
            <a
              // href="mailto:recruiting.process@bairesdev.com"
              className="underline"
            >
              info@7uniqune.in
            </a>{" "}
            <br />
           We provide support in English, Spanish, and Portuguese.
          </p>
        </div>
      </div>
    </section>
  );
}
