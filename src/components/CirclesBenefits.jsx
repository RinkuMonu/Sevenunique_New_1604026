// CirclesBenefits.jsx
// Next.js (App Router) — Tailwind CSS — JSX

"use client";

const features = [
  {
    id: 1,
    title: "Smarter Problem-Solving",
    description:
      "Thanks to continuous upskilling, our senior software engineers bring fresh perspectives and advanced expertise to software projects.",
  },
  {
    id: 2,
    title: "Faster Project Delivery",
    description:
      "Circle members leverage their ever-evolving skills to overcome challenges efficiently while meeting the highest quality standards.",
  },
  {
    id: 3,
    title: "Latest Technologies",
    description:
      "With ample learning opportunities, our developers stay current with the latest trends and tech. So they can bring our clients future-ready solutions.",
  },
];

// Floating label config — positions are tuned to match screenshot proportions
const labels = [
  {
    id: "paul",
    name: "Paul",
    role: "Sr. Backend Dev.",
    // bottom-left area
    style: { bottom: "13%", left: "2%" },
    pointer: "bottom-left",
  },
  {
    id: "sara",
    name: "Sara",
    role: "Sr. UX/UI Designer",
    // mid-left, slightly higher
    style: { bottom: "6%", left: "28%" },
    pointer: "bottom-left",
  },
  {
    id: "andre",
    name: "Andre",
    role: "Sr. Frontend Dev.",
    // top-center
    style: { top: "4%", left: "46%" },
    pointer: "top-right",
  },
  {
    id: "david",
    name: "David",
    role: "Sr. Data Scientist",
    // bottom-right
    style: { bottom: "6%", right: "4%" },
    pointer: "bottom-left",
  },
];

function GreenCheck() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="shrink-0 mt-0.5"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="11" stroke="#22c55e" strokeWidth="1.8" />
      <path
        d="M7.5 12.5l3 3 6-6"
        stroke="#22c55e"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Tooltip-style floating label with a small triangle pointer
function FloatingLabel({ name, role, style, pointer }) {
  // pointer direction: "bottom-left" | "top-right"
  const isBottomLeft = pointer === "bottom-left";

  return (
    <div className="absolute z-20" style={style}>
      <div
        className="relative bg-white rounded-md px-3 py-1.5 shadow-md border border-gray-100"
        style={{ fontSize: "0.72rem", whiteSpace: "nowrap", lineHeight: 1.4 }}
      >
        <span className="font-bold text-gray-900">{name}</span>
        <span className="text-gray-600">, {role}</span>

        {/* Triangle pointer */}
        {isBottomLeft ? (
          // Points down-left
          <span
            className="absolute"
            style={{
              bottom: "-6px",
              left: "14px",
              width: 0,
              height: 0,
              borderLeft: "6px solid transparent",
              borderRight: "6px solid transparent",
              borderTop: "6px solid white",
              filter: "drop-shadow(0 1px 0 rgba(0,0,0,0.07))",
            }}
          />
        ) : (
          // Points up-right (Andre label above)
          <span
            className="absolute"
            style={{
              top: "-6px",
              right: "14px",
              width: 0,
              height: 0,
              borderLeft: "6px solid transparent",
              borderRight: "6px solid transparent",
              borderBottom: "6px solid white",
              filter: "drop-shadow(0 -1px 0 rgba(0,0,0,0.07))",
            }}
          />
        )}
      </div>
    </div>
  );
}

export default function CirclesBenefits() {
  return (
    <section className="w-full bg-gray-50 py-16 px-6 sm:px-10 lg:px-20 xl:px-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        {/* ── TOP ROW: Left heading + Right features ── */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* ── LEFT: Heading + subheading + image ── */}
          <div className="flex-1 min-w-0">
            {/* Heading */}
            <h2 className="font-extrabold text-[30px] leading-tight tracking-tight text-gray-900 mb-1">
              How does Circles benefit <br className="hidden sm:block" />
              <span className="text-orange-500">you</span>
              <span className="text-gray-900">?</span>
            </h2>

            {/* Subheading */}
            <p className="text-[clamp(1.1rem,2vw,1.5rem)] font-semibold text-gray-800 mt-5 mb-8">
              Stronger devs. Smarter solutions.
            </p>

            {/* ── Image with floating labels ── */}
            <div
              className="relative w-full max-w-[560px]"
            //   style={{ aspectRatio: "560/520" }}
            >
              {/* Developers group image — using a placeholder that looks realistic */}
              <img
                src="https://assets.bairesdev.com//image/upload/c_limit,w_912/dpr_auto/f_auto/q_auto/v1/www/static/circles/circle_benefits_people_zjybgu?_a=BAVAfVDW0"
                alt="BairesDev team of senior developers"
                className="w-full h-full object-cover object-top rounded-none"
                style={{ display: "block" }}
              />

              {/* Floating labels */}
              {labels.map((label) => (
                <FloatingLabel
                  key={label.id}
                  name={label.name}
                  role={label.role}
                  style={label.style}
                  pointer={label.pointer}
                />
              ))}
            </div>
          </div>

          {/* ── RIGHT: Feature list ── */}
          <div className="flex-1 min-w-0 flex flex-col justify-start">
            {features.map((feature, index) => (
              <div key={feature.id}>
                <div className="flex items-start gap-3 py-7">
                  <GreenCheck />
                  <div>
                    <h3 className="font-bold text-[1.1rem] text-gray-900 mb-2 leading-snug">
                      {feature.title}
                    </h3>
                    <p className="text-[0.93rem] text-gray-600 leading-relaxed max-w-[460px]">
                      {feature.description}
                    </p>
                  </div>
                </div>
                {/* Divider — not after last item */}
                {index < features.length - 1 && (
                  <hr className="border-0 border-t border-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
