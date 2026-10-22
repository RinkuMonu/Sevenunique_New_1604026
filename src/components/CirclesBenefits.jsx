"use client";

const features = [
  {
    id: 1,
    title: "Smarter Problem-Solving",
    description:
      "Continuous learning helps our senior engineers bring fresh ideas and stronger expertise to every project.",
  },
  {
    id: 2,
    title: "Faster Project Delivery",
    description:
      "Circles members use their growing skills to solve challenges efficiently while maintaining high quality.",
  },
  {
    id: 3,
    title: "Latest Technologies",
    description:
      "Our developers stay updated with the latest trends and tools to deliver future-ready solutions for clients.",
  },
];

function GreenCheck() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="shrink-0 mt-1"
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

export default function CirclesBenefits() {
  return (
    <section className="w-full overflow-hidden bg-gray-50 py-12 sm:py-16 lg:py-20">
      {/* Responsive UI update: benefits content scales and stacks cleanly on narrow screens. */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          
          {/* LEFT SIDE */}
          <div className="max-w-xl">
            
            {/* Heading */}
            <p className="text-orange-500 uppercase tracking-[3px] font-semibold mb-4">
              Why Circles
            </p>

            <h2 className="text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl md:text-[52px]">
              How does Circles benefit{" "}
              <span className="text-orange-500">you?</span>
            </h2>

            {/* Subheading */}
            <p className="mt-5 text-base leading-relaxed text-gray-600 sm:mt-6 sm:text-lg">
              Better developers lead to better solutions. We empower engineers
              with continuous learning, modern technologies, and a collaborative
              environment to create exceptional digital experiences.
            </p>

            {/* Image */}
            <div className="relative mt-8 h-[240px] w-full overflow-hidden rounded-2xl sm:h-[320px] md:h-[420px] md:rounded-[28px]">
              <img
                src="/images/team-handjoin.png"
                alt="Seven Unique team"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full">
            <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:p-6 md:rounded-[28px] md:p-10">
              
              {features.map((feature, index) => (
                <div key={feature.id}>
                  
                  <div className="flex items-start gap-3 py-5 sm:gap-5 sm:py-6">
                    <GreenCheck />

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {feature.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed text-[15px]">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  {index < features.length - 1 && (
                    <div className="border-t border-gray-200" />
                  )}
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
