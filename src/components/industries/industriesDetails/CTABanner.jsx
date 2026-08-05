import Image from "next/image";
import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="bg-white py-8 sm:py-10">
  <div className="mx-auto max-w-[1180px] px-4 sm:px-6">

    {/* MAIN BOX */}
    <div className="flex flex-col overflow-hidden rounded-[24px] bg-[#22a06b] lg:flex-row lg:items-center">

      {/* LEFT IMAGE */}
      <div className="relative w-full lg:w-auto lg:flex-shrink-0">
        <Image
          src="/images/data-engg.png"
          alt="team"
          width={200}
          height={160}
          priority
          className="h-[180px] w-full object-cover lg:h-[160px] lg:w-[200px]"
        />
      </div>

      {/* CONTENT */}
      <div className="flex-1 px-6 py-6 sm:px-8 lg:px-10">
        <h3 className="text-2xl font-semibold leading-tight text-white sm:text-3xl lg:max-w-[650px] lg:text-[24px] lg:leading-[34px]">
          From concept to completion. 100s of custom software solutions built
          since 2009.
        </h3>
      </div>

      {/* BUTTON */}
      <div className="px-6 pb-6 lg:px-8 lg:pb-0">
        <Link
          href="/schedule-a-call-page"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-black px-6 py-3 text-[15px] font-medium text-white transition hover:bg-[#111] sm:w-auto"
        >
          Schedule a Call
          <span className="text-lg">→</span>
        </Link>
      </div>

    </div>

  </div>
</section>
  );
}