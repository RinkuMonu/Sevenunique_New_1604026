import Image from "next/image";
import Link from "next/link";
import { BadgeCheck } from "lucide-react";

function ExpertCard({ expert }) {
  return (
    <article className="flex h-full flex-col rounded-[24px] bg-[#f5f5f4] p-6 text-[#101828] shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        <div className="relative h-24 w-24 overflow-hidden rounded-[18px] bg-[linear-gradient(180deg,#ffffff_0%,#dcecff_100%)]">
          <Image
            src={expert.image}
            alt={expert.name}
            fill
            sizes="96px"
            className="object-cover object-top"
          />
        </div>

        <div className="flex-1">
          <h3 className="text-[20px] font-semibold leading-[1.25] tracking-[-0.02em] text-[#0b1320]">
            {expert.role}
          </h3>
          <p className="mt-3 text-[16px] font-medium text-[#101828]">
            {expert.name}
          </p>
          <p className="mt-1 text-[16px] leading-[1.5] text-[#475467]">
            {expert.experience}
          </p>
        </div>
      </div>

      {expert.skills?.length ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {expert.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-[10px] border border-[#d5d9e1] bg-white px-3 py-1.5 text-[14px] leading-none text-[#344054]"
            >
              {skill}
            </span>
          ))}
        </div>
      ) : null}

      {expert.certifications?.length ? (
        <ul className="mt-6 space-y-3">
          {expert.certifications.map((certification) => (
            <li
              key={certification}
              className="flex items-start gap-2.5 text-[15px] leading-[1.5] text-[#344054]"
            >
              <BadgeCheck
                size={18}
                className="mt-0.5 shrink-0 text-[#60a5fa]"
              />
              <span>{certification}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

export default function ServiceExpertsSection({ expertsSection }) {
  if (!expertsSection?.experts?.length) {
    return null;
  }

  const { heading, description, experts, cta = {} } = expertsSection;
  const avatarImages =
    cta.avatarImages?.length
      ? cta.avatarImages
      : experts.slice(0, 5).map((expert) => expert.image);

  return (
    <section className="-mx-6 bg-white px-6 py-16 md:-mx-10 md:px-10 md:py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="max-w-5xl text-[34px] font-semibold leading-[1.15] tracking-[-0.04em] text-[#0b1320] md:text-[54px]">
          {heading}
        </h2>

        {description ? (
          <p className="mt-6 max-w-6xl text-[18px] leading-[1.7] text-[#344054]">
            {description}
          </p>
        ) : null}

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {experts.map((expert) => (
            <ExpertCard key={`${expert.role}-${expert.name}`} expert={expert} />
          ))}

          <div className="flex min-h-[320px] flex-col items-center justify-between rounded-[24px] bg-[linear-gradient(180deg,#e8f7f2_0%,#dff3ee_100%)] p-8 text-center shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
            <div>
              <div className="mx-auto flex w-fit items-center -space-x-3">
                {avatarImages.map((image, index) => (
                  <div
                    key={`${image}-${index}`}
                    className="relative h-12 w-12 overflow-hidden rounded-full border-[3px] border-white bg-white"
                  >
                    <Image
                      src={image}
                      alt="Team member"
                      fill
                      sizes="48px"
                      className="object-cover object-top"
                    />
                  </div>
                ))}
              </div>

              <h3 className="mx-auto mt-8 max-w-[12ch] text-[28px] font-medium leading-[1.25] tracking-[-0.03em] text-[#0b1320]">
                {cta.title}
              </h3>
            </div>

            <Link
              href={cta.href || "/schedule-a-call-page"}
              className="mt-8 inline-flex min-h-14 w-full items-center justify-center rounded-[14px] bg-[#18a26d] px-6 text-[18px] font-semibold text-white transition hover:bg-[#12865b]"
            >
              {cta.buttonLabel || "Talk to an expert"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
