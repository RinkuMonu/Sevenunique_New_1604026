// import { useState } from "react";

const avatars = [
  {
    src: "https://assets.bairesdev.com//image/upload/c_limit,w_256/dpr_auto/f_auto/q_auto/v1/www/static/Edward-Batten_vyckul?_a=BAVAfVDW0",
    alt: "Edward Batten",
  },
  {
    src: "https://assets.bairesdev.com//image/upload/c_limit,w_256/dpr_auto/f_auto/q_auto/v1/www/static/Paige-Hanlon_jlfqll?_a=BAVAfVDW0",
    alt: "Paige Hanlon",
  },
  {
    src: "https://assets.bairesdev.com//image/upload/c_limit,w_256/dpr_auto/f_auto/q_auto/v1/www/static/Adam-Kuchyt_ukn48q?_a=BAVAfVDW0",
    alt: "Adam Kuchyt",
  },
];

const steps = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
      </svg>
    ),
    title: "Define Solutions & Team Structure.",
    description:
      "Share your requirements with us. We’ll identify the right solutions and shape the ideal team based on your goals, timeline, budget, and required expertise.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
    title: "Onboard & Get Started.",
    description:
      "Once the scope is finalized, we assemble your team and get things moving. Developers and dedicated teams are typically onboarded within 2–4 weeks.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
      </svg>
    ),
    title: "Continuous Performance Tracking.",
    description:
      "We consistently monitor team performance to ensure both quality and output meet your standards at every stage.",
  },
];

function AvatarStack() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex">
        {avatars.map((avatar, i) => (
          <div
            key={i}
            className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md"
            style={{ marginLeft: i === 0 ? 0 : "-12px", zIndex: avatars.length - i }}
          >
            <img
              src={avatar.src}
              alt={avatar.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <p className="font-bold text-gray-900 text-base text-center">
      Nationwide presence.
      </p>
      <p className="text-gray-500 text-sm text-center">
      Talk to a client engagement specialist close to you
      </p>
    </div>
  );
}

function StepItem({ step, index, isLast }) {
  return (
    <li className="relative flex flex-col gap-2 pl-12">
      {/* Connector line */}
      {!isLast && (
        <div className="absolute left-5 top-14 bottom-0 w-px border-l-2 border-dashed border-gray-300" />
      )}

      {/* Icon bubble */}
      <div className="absolute left-0 top-0 w-10 h-10 rounded-full border border-orange-600 bg-white flex items-center justify-center text-orange-600 shadow-sm">
        {step.icon}
      </div>

      <h3 className="text-lg font-semibold text-gray-900 leading-snug pt-1 ">
        {step.title}
      </h3>
      <p className="text-gray-700 text-sm leading-relaxed pb-6">
        {step.description}
      </p>
    </li>
  );
}

export default function ServiceSection({data}) {
    const displayName = data?.title
    .replace(/(development services|app development services|services)/gi, "")
    .trim();
  return (
    <section className="bg-gray-50 rounded-b-2xl pt-20 pb-20 px-6">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 text-center leading-tight">
        Go from idea to kickoff in 2–4 weeks
        </h2>

        {/* Content grid */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          {/* Left: Avatar block */}
          <div className="flex justify-center md:block md:w-64 shrink-0">
            <AvatarStack />
          </div>

          {/* Right: Steps */}
          <div className="flex-1">
            <ol className="flex flex-col gap-0">
              {steps.map((step, i) => (
                <StepItem
                  key={i}
                  step={step}
                  index={i}
                  isLast={i === steps.length - 1}
                />
              ))}
            </ol>

            {/* CTA Button */}
            <div className="mt-2">
              <a
                href="/schedule-a-call-page"
                className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-medium text-base px-6 py-3 rounded-lg transition-colors duration-150"
              >
                Connect with Our Experts
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}