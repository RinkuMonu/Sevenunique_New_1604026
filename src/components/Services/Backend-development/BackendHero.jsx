
import React from "react";
import Link from "next/link";
import { GoHome } from "react-icons/go";
import ProfileSlider from "./ProfileSlider";

export default function BackendHero() {
    return (
        <div className="w-full min-h-screen bg-[#f5f6f7] flex items-center justify-center px-10">
            <div className="max-w-7xl w-full flex gap-16 items-start">

                {/* LEFT SIDE */}
                <div className="flex-1">

                    {/* Breadcrumb */}
                    <div className="flex items-center text-sm text-gray-500 mb-6">
                        <GoHome className="mr-2 text-lg" />

                        <span className="mx-2">›</span>

                        <Link href="/solutions" className="hover:text-black transition hover:underline">
                            Solutions
                        </Link>

                        <span className="mx-2">›</span>

                        <span className="text-black font-medium">Backend</span>
                    </div>
                    <h2 className="text-[14px] font-bold text-black">BACKEND DEVELOPMENT SERVICES</h2>

                    {/* Heading */}
                    <h1 className="text-[53px] font-bold leading-tight text-black mb-6">
                        Build custom backend solutions
                        <br />
                        with experts trusted by 1500+
                        <br />
                        companies.
                    </h1>

                    {/* Description */}
                    <p className="text-gray-600 text-[20px] max-w-xl leading-relaxed mb-10">
                        Our backend developers build infrastructure that scales under pressure and stays reliable as your product grows. We’ve shipped complex production systems for companies like Pinterest and SiriusXM. Onboard senior backend engineers in 2 weeks.
                    </p>

                    {/* Profile Card */}
                    <ProfileSlider />


                    {/* Dots */}
                    <div className="flex gap-2 mt-4">
                        {[1, 2, 3, 4, 5].map((dot, i) => (
                            <div
                                key={i}
                                className={`w-2 h-2 rounded-full ${i === 1 ? "bg-gray-500" : "bg-gray-300"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* RIGHT SIDE FORM */}
                <div className="w-[360px] bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-black text-xl font-semibold text-center mb-6">
                        Get expert help for your
                        <br />
                        Backend project.
                    </h2>

                    <input
                        type="text"
                        placeholder="Full name"
                        className="w-full border text-gray-500 border-gray-300 rounded-md px-4 py-3 mb-4 outline-none focus:border-orange-500"
                    />

                    <input
                        type="email"
                        placeholder="name@company.com"
                        className="w-full border text-gray-500 border-gray-300 rounded-md px-4 py-3 mb-4 outline-none focus:border-orange-500"
                    />

                    <textarea
                        placeholder="Tell us about your needs."
                        rows={4}
                        className="w-full text-gray-500 border border-gray-300 rounded-md px-4 py-3 mb-6 outline-none focus:border-orange-500"
                    />

                    <button className="w-full bg-orange-500 text-white py-3 rounded-md font-semibold hover:bg-orange-600 transition">
                        Jump-start Your Project
                    </button>
                </div>

            </div>
        </div>
    );
}