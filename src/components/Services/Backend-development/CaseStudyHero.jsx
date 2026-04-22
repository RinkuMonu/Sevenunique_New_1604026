"use client";

export default function CaseStudyHero() {
    return (
        <section className="w-full flex justify-center bg-[#f3f4f6] py-16">

            {/* MAIN CONTAINER (80% WIDTH) */}
            <div className="w-[80%] relative rounded-[20px] overflow-hidden">

                {/* BACKGROUND SPLIT */}
                <div className="grid grid-cols-12 min-h-[520px]">

                    {/* LEFT DARK PANEL */}
                    <div className="col-span-7 bg-[#0b0b0b] text-white p-12 flex flex-col justify-center">

                        {/* TAG */}
                        <span className="text-[11px] tracking-[1.5px] uppercase bg-[#2a2a2a] text-[#cbd5e1] px-3 py-1 rounded-md w-fit mb-6">
                            Advertising & Marketing
                        </span>

                        {/* HEADING */}
                        <h1 className="text-[34px] leading-[1.25] font-semibold mb-6 max-w-[520px]">
                            Pinterest teamed up with us to rebuild its Ads Manager architecture for scale.
                        </h1>

                        {/* BADGES */}
                        <div className="flex gap-3 mb-6">
                            <span className="text-[13px] border border-[#374151] px-3 py-1 rounded-md">
                                5-Year Engagement
                            </span>
                            <span className="text-[13px] border border-[#374151] px-3 py-1 rounded-md">
                                233 Specialists
                            </span>
                        </div>

                        {/* DESCRIPTION */}
                        <p className="text-[14px] text-[#9ca3af] leading-relaxed mb-6 max-w-[520px]">
                            Pinterest needed to rebuild its Ads Manager backend to handle growth and deliver more value to advertising partners. The platform's architecture required significant changes to support scale and reduce operational complexity.
                        </p>

                        {/* BULLETS */}
                        <ul className="space-y-3 text-[14px] text-[#d1d5db]">
                            <li className="flex items-center gap-2">
                                <span className="text-green-400">✔</span>
                                Rebuilt the Ads Manager architecture to handle scale
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-green-400">✔</span>
                                Reduced infrastructure complexity and costs
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-green-400">✔</span>
                                Scaled engineering team from 5 developers to 233 specialists
                            </li>
                        </ul>

                        {/* LOGO */}
                        <div className="mt-8 text-[#9ca3af] text-[18px] font-semibold">
                            Pinterest
                        </div>
                    </div>

                    {/* RIGHT IMAGE COLLAGE */}
                    <div className="col-span-5 relative bg-[#111]">
                        <img
                            src="/pinterest-collage.jpg"
                            alt="Pinterest UI"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* FLOATING FORM CARD */}
                <div className="absolute right-[-40px] top-[80px] w-[360px] bg-white rounded-[16px] shadow-xl p-6">

                    <h3 className="text-[18px] font-semibold text-[#111] mb-4">
                        Get expert help for your Backend project.
                    </h3>

                    {/* INPUTS */}
                    <div className="space-y-4">

                        <div>
                            <label className="text-[13px] text-[#374151]">Your name</label>
                            <input
                                type="text"
                                placeholder="Full name"
                                className="w-full mt-1 border border-[#e5e7eb] rounded-md px-3 py-2 text-[14px]"
                            />
                        </div>

                        <div>
                            <label className="text-[13px] text-[#374151]">Your email</label>
                            <input
                                type="email"
                                placeholder="name@company.com"
                                className="w-full mt-1 border border-[#e5e7eb] rounded-md px-3 py-2 text-[14px]"
                            />
                        </div>

                        <div>
                            <label className="text-[13px] text-[#374151]">What can we do for you?</label>
                            <textarea
                                placeholder="Tell us more about your needs."
                                rows={3}
                                className="w-full mt-1 border border-[#e5e7eb] rounded-md px-3 py-2 text-[14px]"
                            />
                        </div>

                        <button className="w-full bg-[#c2411c] hover:bg-[#a93415] text-white py-2.5 rounded-md text-[14px] font-medium">
                            Jump-start Your Project
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}