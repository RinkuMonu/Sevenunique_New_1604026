"use client";

export default function CaseStudyHero() {
  return (
    <section className="w-full bg-[#eef0f2] py-20 flex justify-center">
      
      {/* BIGGER CONTAINER */}
      <div className="w-[85%] max-w-[1400px] relative rounded-[24px] overflow-visible">
        
        <div className="grid grid-cols-12 min-h-[620px] rounded-[24px] overflow-hidden">
          
          {/* LEFT PANEL */}
          <div className="col-span-7 bg-[#0a0a0a] text-white px-14 py-16 flex flex-col justify-center">
            
            {/* TAG */}
            <span className="text-[12px] tracking-[1.6px] uppercase bg-[#2b2b2b] text-[#cbd5e1] px-4 py-1.5 rounded-md w-fit mb-7">
              Advertising & Marketing
            </span>

            {/* HEADING */}
            <h1 className="text-[38px] leading-[1.25] font-semibold mb-7 max-w-[560px]">
              Pinterest teamed up with us to rebuild its Ads Manager architecture for scale.
            </h1>

            {/* BADGES */}
            <div className="flex gap-4 mb-7">
              <span className="text-[13px] border border-[#374151] px-4 py-1.5 rounded-md">
                5-Year Engagement
              </span>
              <span className="text-[13px] border border-[#374151] px-4 py-1.5 rounded-md">
                233 Specialists
              </span>
            </div>

            {/* DESCRIPTION */}
            <p className="text-[15px] text-[#9ca3af] leading-relaxed mb-7 max-w-[560px]">
              Pinterest needed to rebuild its Ads Manager backend to handle growth and deliver more value to advertising partners. The platform's architecture required significant changes to support scale and reduce operational complexity. Our backend, frontend, and data engineering teams integrated with Pinterest's in-house developers to hit their production deadline.
            </p>

            {/* BULLETS */}
            <ul className="space-y-4 text-[15px] text-[#d1d5db]">
              <li className="flex items-center gap-3">
                <span className="text-green-400 text-[16px]">✔</span>
                Rebuilt the Ads Manager architecture to handle scale
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-400 text-[16px]">✔</span>
                Reduced infrastructure complexity and costs across the ads platform
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-400 text-[16px]">✔</span>
                Scaled engineering team from 5 developers to 233 specialists
              </li>
            </ul>

            {/* LOGO */}
            <div className="mt-10 text-[#9ca3af] text-[20px] font-semibold">
              Pinterest
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-span-5 h-full">
            <img
              src="/pinterest.png"
              alt="Pinterest UI"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 🔥 CORRECT FORM POSITION (IMPORTANT PART) */}
        <div className="absolute top-[110px] right-[-90px] w-[380px] bg-white rounded-[18px] shadow-2xl p-7">
          
          <h3 className="text-[19px] font-semibold text-[#111] mb-5">
            Get expert help for your Backend project.
          </h3>

          <div className="space-y-5">
            
            <div>
              <label className="text-[13px] text-[#374151]">Your name</label>
              <input
                type="text"
                placeholder="Full name"
                className="w-full mt-1.5 border border-[#e5e7eb] rounded-md px-3 py-2.5 text-[14px]"
              />
            </div>

            <div>
              <label className="text-[13px] text-[#374151]">Your email</label>
              <input
                type="email"
                placeholder="name@company.com"
                className="w-full mt-1.5 border border-[#e5e7eb] rounded-md px-3 py-2.5 text-[14px]"
              />
            </div>

            <div>
              <label className="text-[13px] text-[#374151]">What can we do for you?</label>
              <textarea
                rows={3}
                placeholder="Tell us more about your needs."
                className="w-full mt-1.5 border border-[#e5e7eb] rounded-md px-3 py-2.5 text-[14px]"
              />
            </div>

            <button className="w-full bg-[#f66135] hover:bg-[#f1592a] text-white py-3 rounded-md text-[14px] font-medium">
              Jump-start Your Project
            </button>
          </div>
        </div>
     
      </div>
    </section>
  );
}