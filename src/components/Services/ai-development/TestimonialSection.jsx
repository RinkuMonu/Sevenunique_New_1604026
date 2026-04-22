"use client";

import Image from "next/image";

const leftTestimonials = [
  {
    industry: "Healthcare & MedTech",
    quote:
      "We are consistently delivering high-quality software on time, in part thanks to the people from BairesDev. They can find talented, high-caliber, sharp developers who will stay with us long-term. Their main strength is their talent.",
    name: "David Johnston",
    role: "Product Engagement Lead",
    photo: "/images/man1.png",
    companyType: "image",
    companySrc: "/logos/johnson.png",
    companyAlt: "Johnson & Johnson",
  },
  {
    industry: "Financial Services",
    subtitle: "Upgraded and Maintained Repay's AWS Infrastructure",
    quote:
      "They've also been proactive about checking in about the state of the engagement and overall performance. I'm confident we'll continue working with BairesDev for a long time.",
    name: "Michael Soltow",
    role: "Software Dev. Manager",
    photo: "/images/man2.png",
    companyType: "text",
    companyText: "REPAY",
    companyClassName:
      "text-[18px] font-semibold tracking-[0.28em] text-[#24456f]",
    hoverDetails: {
      description:
        "Repay needed a stronger AWS foundation to improve uptime, monitoring, and release confidence. Our team modernized infrastructure management and tightened DevOps workflows to support long-term scale.",
      tags: ["AWS", "Terraform", "CI/CD", "Observability", "DevOps"],
      metrics: [
        { value: "6", label: "Team size" },
        { value: "99.9%", label: "Uptime" },
        { value: "18 mo", label: "Engagement" },
      ],
    },
  },
];

const rightTestimonials = [
  {
    industry: "Financial Services",
    subtitle: "Developed new digital banking features",
    quote:
      "BairesDev has been a fantastic partner. We wanted to put forth a product to help people cope with financial struggles but didn't have the resources we needed, so we turned to them. They could always find us quality talent in a concise amount of time.",
    name: "Leonardo Shapiro",
    role: "Head of Growth",
    photo: "/images/man3.png",
    companyType: "text",
    companyText: "azlo",
    companyClassName: "text-[20px] font-semibold lowercase text-[#101828]",
    featured: true,
    hoverDetails: {
      description:
        "Azlo wanted to make digital banking accessible for entrepreneurs and small businesses. Our engineers built CI/CD pipelines, developed new banking features, and migrated data from MongoDB to PostgreSQL to improve reliability and scalability. We also redesigned the onboarding experience for better UX and faster adoption.",
      tags: ["Angular", "Node.js", "JavaScript", "MongoDB", "Kafka"],
      metrics: [
        { value: "15", label: "Team size" },
        { value: "10", label: "NPS" },
        { value: "2 years", label: "Engagement" },
      ],
    },
  },
  {
    industry: "Renewable Energy",
    quote:
      "I was concerned about a possible mismatch of talent levels of our in-house engineers versus contractors. But, as it turns out, many of the BairesDev engineers we hired emerged as top performers. In fact, of our group of 120 developers, all the BairesDev engineers we had were in the top 20 of the organization.",
    name: "Matthew Mecham",
    role: "VP of Engineering",
    photo: "/images/man4.png",
    companyType: "text",
    companyText: "Lumio",
    companyClassName: "text-[20px] font-semibold text-[#101828]",
  },
];

function CompanyMark({
  companyType,
  companySrc,
  companyAlt,
  companyText,
  companyClassName,
}) {
  if (companyType === "image" && companySrc) {
    return (
      <Image
        src={companySrc}
        alt={companyAlt || "Company logo"}
        width={120}
        height={48}
        className="h-auto w-[110px] object-contain md:w-[130px]"
      />
    );
  }

  return <p className={companyClassName}>{companyText}</p>;
}

function TestimonialCard({ item, featured = false }) {
  const card = (
    <div
      className={`group relative overflow-hidden rounded-[8px] border border-[#cfd5dd] bg-[#f5f6f7] p-4 md:p-5 ${
        featured ? "min-h-[304px]" : ""
      }`}
    >
      <div className="mb-4 border-b border-[#d8dde3] pb-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#6a7380]">
          {item.industry}
        </p>
        {item.subtitle ? (
          <p className="mt-1 text-[15px] text-[#3d4652]">{item.subtitle}</p>
        ) : null}
      </div>

      <div className="grid gap-4 md:grid-cols-[88px_minmax(0,1fr)] md:gap-5">
        <div className="relative h-[124px] w-[88px] overflow-hidden bg-[#d9d9d9]">
          <Image
            src={item.photo}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>

                <div className="flex min-h-full flex-col">
                    <p className="text-[18px] leading-[1.6] text-[#111827]">
                        <span className="mr-1 align-top text-[26px] leading-none text-[#f4622a]">
                            "
                        </span>
                        {item.quote}
                    </p>

          <div className="mt-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-[14px] font-semibold text-[#111827]">
                {item.name}
              </p>
              <p className="text-[12px] text-[#5d6673]">{item.role}</p>
            </div>

            <div className="shrink-0">
              <CompanyMark {...item} />
            </div>
          </div>
        </div>
      </div>

      {item.hoverDetails ? (
        <>
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
            <div className="h-10 w-[10px] rounded-r-full bg-[#09090b] opacity-100" />
          </div>

          <div className="pointer-events-none absolute inset-0 z-10 translate-x-[102%] border-l border-[#cfd5dd] bg-[#f5f6f7] transition-transform duration-500 ease-out group-hover:translate-x-0">
            <div className="flex h-full flex-col overflow-hidden bg-white">
              <div className="bg-[#09090b] px-4 py-4 md:px-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#a5adba]">
                  {item.industry}
                </p>
                {item.subtitle ? (
                  <p className="mt-1 text-[15px] text-white">{item.subtitle}</p>
                ) : null}
              </div>

              <div className="flex-1 bg-white p-4 md:p-5">
                <p className="text-[16px] leading-[1.7] text-[#111827]">
                  {item.hoverDetails.description}
                </p>

                                <div className="mt-6 flex flex-wrap gap-3">
                                    {item.hoverDetails.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-[6px] bg-[#f4f6f8] px-3 py-2 text-[14px] text-[#111827]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                <div className="mt-10 grid grid-cols-3 gap-4 border-t border-[#d8dde3] pt-6">
                  {item.hoverDetails.metrics.map((metric) => (
                    <div key={metric.label}>
                      <p className="text-[18px] font-semibold text-[#f4622a] md:text-[20px]">
                        {metric.value}
                      </p>
                      <p className="mt-1 text-[13px] text-[#3d4652]">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );

  if (!featured && !item.hoverDetails) {
    return card;
  }

  return (
    <div className="relative">
      <div className="absolute inset-y-0 right-0 w-full rounded-[8px] bg-[#09090b] translate-x-3" />
      <div className="relative pr-3">{card}</div>
    </div>
  );
}

function AvatarRow() {
  const avatars = [
    { src: "/images/img1.png", bg: "#FBB39E" },
    { src: "/images/img2.png", bg: "#90BBF3" },
    { src: "/images/img3.png", bg: "#8FD5BF" },
    { src: "/images/img4.png", bg: "#FFD785" },
    { src: "/images/img5.png", bg: "#FDDC43" },
    { src: "/images/img6.png", bg: "#CDE8FA" },
  ];

  return (
    <div className="flex items-center">
      {avatars.map((avatar, index) => (
        <div
          key={avatar.src}
          className={`relative flex h-11 w-11 items-end justify-center overflow-hidden rounded-full border-2 border-[#f5f6f7] transition-transform duration-300 ease-out group-hover:-translate-y-1 ${
            index === 0 ? "" : "-ml-2"
          }`}
          style={{
            backgroundColor: avatar.bg,
            transitionDelay: `${index * 40}ms`,
          }}
        >
          <Image
            src={avatar.src}
            alt={`Team member ${index + 1}`}
            fill
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
}

export default function TestimonialSection() {
    return (
        <section className="bg-[#f5f6f7] px-6 py-20 md:px-10">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
                    <div className="space-y-6">
                        <div className="max-w-[470px] pt-2">
                            <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#233143]">
                                Client Testimonials
                            </p>
                            <h2 className="max-w-[420px] text-[38px] font-medium leading-[1.12] text-[#111827] md:text-[52px]">
                                Get AI results you can stand behind.
                            </h2>
                            <p className="mt-6 max-w-[420px] text-[18px] leading-[1.7] text-[#3d4652]">
                                Our work holds up in reviews, in production, and in front of the
                                board.
                            </p>
                        </div>

                        {leftTestimonials.map((item) => (
                            <TestimonialCard key={item.name} item={item} />
                        ))}
                    </div>

                    <div className="space-y-6">
                        {rightTestimonials.map((item, index) => (
                            <TestimonialCard
                                key={item.name}
                                item={item}
                                featured={index === 0 && item.featured}
                            />
                        ))}

                        <div className="group relative overflow-hidden rounded-[8px] border border-[#cfd5dd] bg-[#f5f6f7] p-5 transition-colors duration-500 hover:bg-[#d7ebff]">
                            <div className="relative z-10">
                            <AvatarRow />
                            <p className="mt-4 max-w-[420px] text-[24px] font-medium leading-[1.3] text-[#111827]">
                                Join 500+ companies building AI products with our engineers.
                            </p>
                            <div className="mt-5 w-fit overflow-hidden rounded-[8px] border bg-[#2563eb]">
                                <button
                                    type="button"
                                    className="relative z-10 inline-flex rounded-[8px] px-5 py-3 text-[15px] font-semibold text-white"
                                >
                                    <span className="relative z-10">Schedule a Call</span>  
                                </button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
