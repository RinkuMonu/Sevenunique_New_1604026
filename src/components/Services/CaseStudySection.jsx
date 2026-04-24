import Image from "next/image";
import Link from "next/link";

/* ───────── CARD ───────── */
function CaseStudyCard({ card }) {
  const content = (
    <div className="group relative min-h-[480px] overflow-hidden rounded-[18px] bg-black text-white shadow-[0_10px_30px_rgba(0,0,0,0.12)]">

      {/* IMAGE */}
      <Image
        src={card.image}
        alt={card.title}
        fill
        className="object-cover transition duration-500 group-hover:scale-105"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/60 to-black/90" />

      {/* CONTENT */}
      <div className="relative z-10 flex h-full flex-col p-8">

        {/* TAG */}
        <span className="inline-flex w-fit rounded-[10px] bg-[#eef0f3] px-4 py-3 text-[12px] font-medium uppercase tracking-[0.2em] text-[#425b7d]">
          {card.tag}
        </span>

        <div className="mt-24 max-w-[300px] relative">

          {/* TITLE (disappears) */}
          <h3 className="text-[26px] font-semibold leading-[1.22] text-white transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-4">
            {card.title}
          </h3>

          {/* DESCRIPTION (slides in) */}
          {card.description && (
            <p className="absolute top-0 left-0 text-[16px] text-gray-300 leading-[1.6] opacity-0 translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out">
              {card.description}
            </p>
          )}
          {/* TECHNOLOGIES */}
          {card.technologies && (
            <div className="mt-24 flex flex-wrap gap-3 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out">
              {card.technologies.slice(0, 6).map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-[12px] rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>


      </div>
    </div >
  );

  if (!card.href) return content;

  return (
    <Link href={card.href} className="block">
      {content}
    </Link>
  );
}

/* ───────── SECTION ───────── */
export default function CaseStudySection({ caseStudies }) {
  if (!caseStudies?.cards?.length) return null;

  return (
    <section className="bg-white px-6 py-20 md:px-10 md:py-24 font-sans">
      <div className="mx-auto max-w-7xl">

        {/* LABEL */}
        <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.2em] text-[#314a6b]">
          {caseStudies.sectionLabel}
        </p>

        {/* HEADING */}
        <h2 className="max-w-5xl text-[24px] font-semibold leading-[1.4] text-[#101010]">
          {caseStudies.heading}
        </h2>

        {/* DESCRIPTION */}
        {caseStudies.description && (
          <p className="mt-6 max-w-5xl text-[16px] leading-[1.6] text-[#1e2a3b]">
            {caseStudies.description}
          </p>
        )}



        {/* CARDS */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {caseStudies.cards.map((card) => (
            <CaseStudyCard key={card.title} card={card} />
          ))}
        </div>

      </div>
    </section>
  );
}