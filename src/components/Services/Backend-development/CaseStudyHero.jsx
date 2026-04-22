"use client";

import Image from "next/image";

export default function CaseStudyHero() {
    return (
        <section className="w-full bg-[#f3f4f6] px-4 pb-28 pt-16 md:px-6">
            <div className="relative mx-auto w-full max-w-[1250px] overflow-visible rounded-[20px]">
                <div className="relative min-h-[520px] overflow-hidden rounded-[20px]">
                    <Image
                        src="/images/pinterest.png"
                        alt="Pinterest UI collage"
                        fill
                        className="object-cover object-center"
                        sizes="100vw"
                        priority
                    />
                    <div className="absolute inset-y-0 left-0 w-full bg-[linear-gradient(90deg,rgba(7,7,8,0.94)_0%,rgba(7,7,8,0.9)_48%,rgba(7,7,8,0.58)_68%,rgba(7,7,8,0.16)_82%,rgba(7,7,8,0)_100%)]" />

                    <div className="relative grid min-h-[520px] grid-cols-1 lg:grid-cols-12">
                    <div className="relative col-span-1 flex flex-col justify-center p-8 text-white md:p-12 lg:col-span-8 lg:pr-[320px]">
                        <div className="relative z-10">
                        <span className="mb-8 w-fit rounded-xl bg-[#8e8e92] px-4 py-2 text-[11px] font-semibold uppercase tracking-[2px] text-[#23364d]">
                            Advertising & Marketing
                        </span>

                        <h1 className="mb-8 max-w-[600px] text-[34px] font-semibold leading-[1.2] md:text-[44px]">
                            Pinterest teamed up with us to rebuild its Ads Manager architecture for scale.
                        </h1>

                        <div className="mb-8 flex flex-wrap gap-4">
                            <span className="rounded-xl border border-[#334155] px-4 py-2 text-[13px] text-[#d7dde6]">
                                5-Year Engagement
                            </span>
                            <span className="rounded-xl border border-[#334155] px-4 py-2 text-[13px] text-[#d7dde6]">
                                233 Specialists
                            </span>
                        </div>

                        <p className="mb-10 max-w-[640px] text-[14px] leading-[1.7] text-[#afb7c2] md:text-[15px]">
                            Pinterest needed to rebuild its Ads Manager backend to handle growth and deliver more value to advertising partners. The platform&apos;s architecture required significant changes to support scale and reduce operational complexity. Our backend, frontend, and data engineering teams integrated with Pinterest&apos;s in-house developers to hit their production deadline.
                        </p>

                        <ul className="space-y-4 text-[14px] text-[#d6dbe3] md:text-[15px]">
                            <li className="flex items-center gap-3">
                                <span className="text-[18px] text-[#2bb7a3]">✓</span>
                                Rebuilt the Ads Manager architecture to handle scale
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-[18px] text-[#2bb7a3]">✓</span>
                                Reduced infrastructure complexity and costs across the ads platform
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-[18px] text-[#2bb7a3]">✓</span>
                                Scaled engineering team from 5 developers to 233 specialists
                            </li>
                        </ul>

                        <div className="mt-12 text-[18px] font-semibold text-[#d1d5db]">
                            Pinterest
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="relative z-20 mx-auto -mt-6 w-full max-w-[385px] rounded-[22px] bg-[#d9d9d9] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.18)] lg:absolute lg:-right-[8px] lg:top-[326px] lg:mx-0 lg:mt-0">
                    <h3 className="mb-8 max-w-[260px] text-[24px] font-semibold leading-[1.25] text-[#0f172a]">
                        Get expert help for your Backend project.
                    </h3>

                    <div className="space-y-6">
                        <div>
                            <label className="mb-2 block text-[13px] font-medium text-[#374151]">Your name</label>
                            <input
                                type="text"
                                placeholder="Full name"
                                className="w-full rounded-md border border-[#b8bfc7] bg-transparent px-4 py-3 text-[14px] text-[#334155] outline-none placeholder:text-[#6b7280]"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-[13px] font-medium text-[#374151]">Your email</label>
                            <input
                                type="email"
                                placeholder="name@company.com"
                                className="w-full rounded-md border border-[#b8bfc7] bg-transparent px-4 py-3 text-[14px] text-[#334155] outline-none placeholder:text-[#6b7280]"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-[13px] font-medium text-[#374151]">What can we do for you?</label>
                            <textarea
                                placeholder="Tell us more about your needs."
                                rows={4}
                                className="w-full rounded-md border border-[#b8bfc7] bg-transparent px-4 py-3 text-[14px] text-[#334155] outline-none placeholder:text-[#6b7280]"
                            />
                        </div>

                        <button className="w-full rounded-md bg-[#c2411c] py-3 text-[14px] font-medium text-white transition-colors hover:bg-[#a93415]">
                            Jump-start Your Project
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
