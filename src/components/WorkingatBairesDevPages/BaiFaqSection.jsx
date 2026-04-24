"use client";

export default function BaiContactSection() {
  return (
    <section className="bg-[#f5f5f5] pb-24">
      <div className="max-w-6xl mx-auto px-6 pb-10 flex flex-col md:flex-row items-start gap-12">
        {/* LEFT SIDE */}
        <div className="md:w-1/2">
          <h2 className="text-[42px] md:text-[56px] leading-tight font-semibold text-[#1f2937]">
            Got questions? <br />
            Let&apos;s chat!
          </h2>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:w-1/2 text-[#374151] flex flex-col gap-6 text-[18px] leading-relaxed">
          <p>
            Our friendly team is ready to answer your questions and guide you
            through your journey with us.
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
            We offer support in English, Spanish, and Portuguese.
          </p>
        </div>
      </div>
    </section>
  );
}
