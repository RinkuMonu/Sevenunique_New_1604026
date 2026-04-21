import Image from "next/image";
import Link from "next/link";

function CaseStudyCard({ card }) {
  const content = (
    <div className="group relative min-h-[480px] overflow-hidden rounded-[18px] bg-black text-white shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
      <Image
        src={card.image}
        alt={card.title}
        fill
        className="object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/68 to-black/98" />
      <div className="relative z-10 flex h-full flex-col p-8">
        <span className="inline-flex w-fit rounded-[10px] bg-[#eef0f3] px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.24em] text-[#425b7d]">
          {card.tag}
        </span>

        <div className="mt-24 max-w-[300px]">
          <h3 className="text-[26px] font-semibold leading-[1.22] text-white">
            {card.title}
          </h3>
        </div>
      </div>
    </div>
  );

  if (!card.href) {
    return content;
  }

  return (
    <Link href={card.href} className="block">
      {content}
    </Link>
  );
}

export default function CaseStudySection({ caseStudies }) {
  if (!caseStudies?.cards?.length) return null;

  return (
    <section className="bg-white px-6 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#314a6b]">
          {caseStudies.sectionLabel}
        </p>

        <h2 className="max-w-5xl text-[42px] font-semibold leading-[1.08] text-[#101010] md:text-[52px]">
          {caseStudies.heading}
        </h2>

        {caseStudies.description && (
          <p className="mt-6 max-w-5xl text-[18px] leading-[1.65] text-[#1e2a3b]">
            {caseStudies.description}
          </p>
        )}

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {caseStudies.cards.map((card) => (
            <CaseStudyCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
