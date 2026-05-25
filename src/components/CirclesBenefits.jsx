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
    <section className="w-full bg-gray-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT SIDE */}
          <div className="max-w-xl">
            
            {/* Heading */}
            <p className="text-orange-500 uppercase tracking-[3px] font-semibold mb-4">
              Why Circles
            </p>

            <h2 className="text-[38px] md:text-[52px] leading-tight font-semibold text-gray-900">
              How does Circles benefit{" "}
              <span className="text-orange-500">you?</span>
            </h2>

            {/* Subheading */}
            <p className="text-lg text-gray-600 leading-relaxed mt-6">
              Better developers lead to better solutions. We empower engineers
              with continuous learning, modern technologies, and a collaborative
              environment to create exceptional digital experiences.
            </p>

            {/* Image */}
            <div className="relative mt-10 w-full h-[420px] rounded-[28px] overflow-hidden">
              <img
                src="/images/team-handjoin.png"
                alt="Seven Unique team"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full">
            <div className="bg-white rounded-[28px] shadow-sm border border-gray-100 p-8 md:p-10">
              
              {features.map((feature, index) => (
                <div key={feature.id}>
                  
                  <div className="flex items-start gap-5 py-6">
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