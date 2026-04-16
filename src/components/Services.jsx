import Link from "next/link";

const services = [
  {
    title: "Front-End Development",
    desc: "Build modern frontends designed for performance, accessibility, and scale.",
    href: "/solutions/front-end",
    icon: (
      <svg viewBox="0 0 20 20" fill="white" className="w-5 h-5">
        <path d="M3 4h14v1.5H3zm0 5h9v1.5H3zm0 5h11v1.5H3z" />
      </svg>
    ),
  },
  {
    title: "Back-End Development",
    desc: "Robust, scalable server-side systems and APIs to power your product.",
    href: "/solutions/back-end",
    icon: (
      <svg viewBox="0 0 20 20" fill="white" className="w-5 h-5">
        <path d="M3 5h14a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1zm1 2v6h12V7H4zm2 1h2v1.5H6zm3.5 0H14v1.5h-4.5z" />
      </svg>
    ),
  },
  {
    title: "Staff Augmentation",
    desc: "Embed pre-vetted engineers into your team. Scale up or down in days.",
    href: "/staff-augmentation",
    icon: (
      <svg viewBox="0 0 20 20" fill="white" className="w-5 h-5">
        <path d="M10 3a4 4 0 100 8 4 4 0 000-8zm-7 9.5C3 10.6 6.1 9 10 9s7 1.6 7 3.5V14H3v-1.5z" />
      </svg>
    ),
  },
  {
    title: "AI Development",
    desc: "Custom AI/ML solutions, LLM integrations, and intelligent automation.",
    href: "/technologies/ai",
    icon: (
      <svg viewBox="0 0 20 20" fill="white" className="w-5 h-5">
        <path d="M10 2l8 4.5v7L10 18l-8-4.5v-7L10 2zm0 2.2L4 7.6v4.8L10 16l6-3.6V7.6L10 4.2z" />
      </svg>
    ),
  },
  {
    title: "Mobile App Development",
    desc: "Native and cross-platform apps for iOS and Android that users love.",
    href: "/solutions/mobile-app",
    icon: (
      <svg viewBox="0 0 20 20" fill="white" className="w-5 h-5">
        <path d="M7 2h6a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2zm0 1.5a.5.5 0 00-.5.5v12c0 .28.22.5.5.5h6a.5.5 0 00.5-.5V4a.5.5 0 00-.5-.5H7zm2.5 11h1v1h-1z" />
      </svg>
    ),
  },
  {
    title: "QA Testing & Automation",
    desc: "End-to-end quality assurance to ship faster with fewer bugs.",
    href: "/solutions/qa",
    icon: (
      <svg viewBox="0 0 20 20" fill="white" className="w-5 h-5">
        <path d="M9 2a7 7 0 104.9 12.07l3.5 3.5 1.06-1.06-3.5-3.5A7 7 0 009 2zm0 1.5a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm-.75 2.5v4l3 1.5-.75 1.3-3.75-1.8V6h1.5z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="px-6 py-20 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <span className="inline-block bg-[#f4622a]/[0.08] text-[#f4622a] text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide mb-4">
          Services
        </span>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.15] mb-3 max-w-xl">
          Get full-stack coverage. Unblock execution across the SDLC.
        </h2>
        <p className="text-[#6b6b67] text-base leading-relaxed mb-12 max-w-2xl">
          Software development services built around your needs — from staff
          augmentation to full software outsourcing.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="group bg-[#f7f7f5] border border-[#e5e5e0] hover:border-[#f4622a] rounded-xl p-6 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              <div className="w-10 h-10 bg-[#f4622a] rounded-lg flex items-center justify-center mb-4">
                {svc.icon}
              </div>
              <h3 className="text-[15px] font-medium mb-2">{svc.title}</h3>
              <p className="text-sm text-[#6b6b67] leading-relaxed mb-3">
                {svc.desc}
              </p>
              <Link
                href={svc.href}
                className="text-[13px] font-medium text-[#f4622a] hover:underline"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/solutions"
            className="inline-flex items-center border border-[#e5e5e0] hover:border-[#f4622a] text-[#1a1a18] hover:text-[#f4622a] text-sm font-medium px-6 py-2.5 rounded-lg transition-colors duration-150"
          >
            View all services →
          </Link>
        </div>
      </div>
    </section>
  );
}