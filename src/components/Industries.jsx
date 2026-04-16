import Link from "next/link";

const industries = [
  { label: "Healthcare", href: "/industries/healthcare" },
  { label: "Finance & Banking", href: "/industries/banking" },
  { label: "Retail & eCommerce", href: "/industries/retail" },
  { label: "Startups", href: "/industries/startups" },
  { label: "Insurance", href: "/industries/insurance" },
  { label: "Telecommunications", href: "/industries/telecom" },
  { label: "Automotive", href: "/industries/automotive" },
  { label: "Aviation", href: "/industries/aviation" },
  { label: "Entertainment", href: "/industries/entertainment" },
  { label: "Real Estate", href: "/industries/real-estate" },
  { label: "Supply Chain", href: "/industries/supply-chain" },
  { label: "Oil & Gas", href: "/industries/oil-gas" },
  { label: "Agriculture", href: "/industries/agriculture" },
  { label: "Transportation", href: "/industries/transportation-logistics" },
  { label: "Travel & Hospitality", href: "/industries/travel-hospitality" },
  { label: "Martech", href: "/industries/martech" },
  { label: "Construction", href: "/industries/construction" },
  { label: "Big Data", href: "/solutions/big-data" },
];

export default function Industries() {
  return (
    <section className="px-6 py-20 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <span className="inline-block bg-[#f4622a]/[0.08] text-[#f4622a] text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide mb-4">
          Industries
        </span>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.15] mb-3">
          Experience in your industry. We have it.
        </h2>
        <p className="text-[#6b6b67] text-base leading-relaxed mb-10 max-w-xl">
          1,250+ projects delivered across 130+ sectors. Whatever your domain,
          we've built software there.
        </p>

        <div className="flex flex-wrap gap-2.5">
          {industries.map((ind) => (
            <Link
              key={ind.label}
              href={ind.href}
              className="bg-[#f7f7f5] border border-[#e5e5e0] hover:bg-[#f4622a] hover:text-white hover:border-[#f4622a] text-[#1a1a18] text-[14px] font-medium px-4 py-2 rounded-full transition-all duration-150"
            >
              {ind.label}
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/industries"
            className="inline-flex items-center border border-[#e5e5e0] hover:border-[#f4622a] text-[#1a1a18] hover:text-[#f4622a] text-sm font-medium px-6 py-2.5 rounded-lg transition-colors duration-150"
          >
            View all industries →
          </Link>
        </div>
      </div>
    </section>
  );
}