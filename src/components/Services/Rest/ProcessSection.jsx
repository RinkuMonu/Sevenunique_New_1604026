"use client";

import Image from "next/image";

export default function ProcessSection() {
  const steps = [
    {
      step: "STEP 1",
      title: "Discuss Your Requirements",
      desc: `We'll start by discussing your goals for your Android app, including the engagement model that's best for your business. We'll also review your budget, timeline, and requirements.`,
    },
    {
      step: "STEP 2",
      title: "Create a Plan and Build Your Team",
      desc: `After determining the approach we'll use, we will choose the best-fit Android developers and team members to build your app autonomously or work side-by-side with your internal team.`,
    },
    {
      step: "STEP 3",
      title: "Get to Work",
      desc: `Once we've assembled your team, we'll get to work. No matter which engagement model you choose, you'll retain oversight. We'll keep you fully informed throughout development.`,
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 12 GRID */}
        <div className="grid grid-cols-12 gap-10">
          
          {/* MAIN CONTENT (9 COLS) */}
          <div className="col-span-12 lg:col-span-9">
            
            <div className="grid md:grid-cols-2 gap-12">
              
              {/* LEFT SIDE */}
              <div>
                <h2 className="text-[44px] font-semibold text-[#0f172a] leading-tight mb-10">
                  Our process. <br />
                  Simple, seamless, <br />
                  streamlined.
                </h2>

                {/* Image */}
                <div className="relative w-full h-[300px] rounded-[40px] overflow-hidden">
                  <Image
                    src="/images/process.png" // replace image
                    alt="process"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* RIGHT TIMELINE */}
              <div className="relative">
                
                {/* Vertical Line */}
                <div className="absolute left-[19px] top-6 bottom-20 border-l border-dashed border-gray-400"></div>

                <div className="space-y-12">
                  {steps.map((item, i) => (
                    <div key={i} className="flex gap-6 relative">
                      
                      {/* Dot */}
                      <div className="relative z-10">
                        <div className="w-10 h-10 rounded-full bg-[#c2410c] flex items-center justify-center relative z-10"></div>
                      </div>

                      {/* Content */}
                      <div>
                        <p className="text-xs tracking-widest text-gray-400 mb-1">
                          {item.step}
                        </p>

                        <h3 className="text-[22px] font-semibold text-[#0f172a] mb-2">
                          {item.title}
                        </h3>

                        <p className="text-[15px] text-gray-600 leading-7 max-w-md">
                          {item.desc}
                        </p>
                      </div>

                    </div>
                  ))}
                </div>

                {/* Button */}
                <div className="mt-5">
                  <button className="bg-[#c2410c] text-white px-5 py-2.5 rounded-lg text-sm font-medium">
                    Schedule a Call
                  </button>
                </div>

              </div>

            </div>
          </div>

          {/* EMPTY RIGHT SIDE (3 COLS) */}
          <div className="hidden lg:block lg:col-span-3"></div>

        </div>
      </div>
    </section>
  );
}
