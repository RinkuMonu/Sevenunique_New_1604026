import Link from "next/link";

export default function CTABand() {
  return (
    <section className="bg-[#f4622a] px-6 py-20 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-white tracking-tight leading-[1.1] mb-4">
          Ready to accelerate your roadmap?
        </h2>
        <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-8">
          Schedule a call and get matched with your team in as little as 2 weeks.
        </p>
        <Link
          href="/start/basic-details"
          className="inline-flex items-center bg-white text-[#f4622a] hover:bg-white/90 font-semibold text-[15px] px-8 py-3.5 rounded-lg transition-colors duration-150"
        >
          Schedule a Call →
        </Link>
      </div>
    </section>
  );
}