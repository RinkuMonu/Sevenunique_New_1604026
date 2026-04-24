"use client";

import { Link } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    comments: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex min-h-screen mb-10">
      {/* LEFT */}
      <div className="flex-1 bg-white">
        <div className="max-w-[37rem] mx-auto px-6 md:px-0 flex flex-col min-h-screen">
          {/* LOGO */}
          <div className="pt-10 w-fit mx-auto md:mx-0">
            <img
              src="./sevenLogo.png"
              className="w-[12.25rem] md:w-[14rem]"
            />
          </div>

          {/* CONTENT */}
          <main className="mt-8 md:mt-16 mb-16">
            <section className="space-y-10">
              {/* Heading */}
              <div>
                <h2 className="text-[28px] md:text-[32px] text-gray-600 mb-3">
                  Want to discuss a project? Tell us more.
                </h2>
                <p className="text-[#6B727A] font-[500] tracking-wide">
                  Please answer a few questions about your software development
                  needs.
                </p>
              </div>

              {/* FORM */}
              <form className="space-y-6">
                {/* NAME */}
                <div>
                  <label className="text-gray-600 text-sm">Your name</label>

                  <div className="mt-1 flex outline outline-1 outline-[#e2dedee0] rounded px-2 py-2 focus-within:outline-gray-600">
                    <input
                      name="name"
                      value={form.name}
                      onChange={(e) => {
                        const value = e.target.value;

                        // ✅ allow only letters + space
                        if (/^[a-zA-Z\s]*$/.test(value)) {
                          handleChange(e);
                        }
                      }}
                      className="w-full outline-none bg-transparent text-gray-600"
                    />
                  </div>
                </div>

                {/* EMAIL */}
                <div>
                  <label className="text-gray-600 text-sm">
                    Your work email
                  </label>
                  <div className="mt-1 flex outline outline-1 outline-[#e2dedee0] rounded px-2 py-2 focus-within:outline-gray-600">
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full outline-none bg-transparent text-gray-600"
                    />
                  </div>
                </div>

                {/* SERVICES */}
                <div>
                  <h3 className="text-gray-600 mb-2 text-sm">
                    What service are you most interested in?
                  </h3>

                  <div className="flex flex-col md:flex-row gap-4">
                    {[
                      "Staff Augmentation",
                      "Dedicated Teams",
                      "Software Outsourcing",
                    ].map((item) => (
                      <label
                        key={item}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <div className="w-[18px] h-[18px] border-2 border-gray-700 rounded-full flex items-center justify-center">
                          {form.service === item && (
                            <div className="w-2.5 h-2.5 bg-black rounded-full" />
                          )}
                        </div>
                        <input
                          type="radio"
                          name="service"
                          value={item}
                          onChange={handleChange}
                          className="hidden"
                        />
                        <span className="text-gray-600">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* TEXTAREA */}
                <div>
                  <label className="text-gray-600 text-sm">
                    How can we help?
                  </label>
                  <div className="mt-1 outline outline-1 outline-gray-200 rounded px-2 py-2 focus-within:outline-gray-600">
                    <textarea
                      name="comments"
                      rows={3}
                      value={form.comments}
                      onChange={handleChange}
                      className="w-full outline-none resize-none bg-transparent text-gray-600"
                    />
                  </div>
                </div>

                {/* BUTTON */}
                <button className="mt-6 flex items-center gap-2 bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 cursor-pointer">
                  Get Started
                  <span className="text-lg">→</span>
                </button>
              </form>
            </section>
          </main>

          {/* FOOTER */}
          <footer className="mt-auto mb-4 text-sm text-gray-400 flex gap-4 justify-center md:justify-start">
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Terms of service</a>
          </footer>
        </div>
      </div>

      {/* RIGHT */}
      <aside className="relative hidden md:flex flex-col items-center justify-start bg-gray-100 w-[26rem] pt-28 px-10 shadow-lg mb">
        <p className="text-gray-800 text-lg mb-8">Trusted by:</p>

        <div className="flex flex-col gap-8 items-center mb-8">
          <img
            src="https://assets.bairesdev.com/image/upload/v1/www/static/clientlogos/Client_Rolls-Royce_Type_Neutral-500_Boxed_True_zepums.svg"
            className="w-28"
          />
          <img
            src="https://assets.bairesdev.com/image/upload/v1/www/static/clientlogos/google-gray_1754315625.svg"
            className="w-28"
          />
          <img
            src="https://assets.bairesdev.com/image/upload/v1/www/static/clientlogos/univision_lshbwz.svg"
            className="w-28"
          />
          <img
            src="https://assets.bairesdev.com/image/upload/v1/www/static/clientlogos/pinterest-gray_1754315622.svg"
            className="w-28"
          />
          <img
            src="https://assets.bairesdev.com/image/upload/v1/www/static/clientlogos/Client_Panasonic_Type_Neutral-500_Boxed_True_lkpsq1.svg"
            className="w-28"
          />
          <img
            src="https://assets.bairesdev.com/image/upload/v1/www/static/clientlogos/microsoft-gray_1754315739.svg"
            className="w-28"
          />
          <img
            src="https://assets.bairesdev.com/image/upload/v1/www/static/clientlogos/Client_Forcepoint_Type_Neutral-500_Boxed_True_asabjd.svg"
            className="w-28"
          />
          <img
            src="https://assets.bairesdev.com/image/upload/v1/www/static/clientlogos/paramount_ijkvhh.svg"
            className="w-28"
          />
        </div>

        {/* 🔥 Bottom Fade Effect */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-gray-200 to-transparent"></div>
      </aside>
    </div>
  );
}
