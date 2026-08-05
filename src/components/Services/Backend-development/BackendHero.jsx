"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GoHome } from "react-icons/go";
import { useRouter } from "next/navigation";
import ProfileSlider from "./ProfileSlider";

export default function BackendHero({ data }) {
  const { hero } = data;
  const router = useRouter();

  // ✅ Form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // ✅ Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Validation
  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // 🔗 Redirect after success
      router.push("/schedule-a-call-page");
    }
  };

  // Responsive UI update: remove conflicting desktop padding from mobile.
  return (
    <div className="flex w-full items-center justify-center bg-[#0f172a] px-4 py-10 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:min-h-screen">
      <div className="flex w-full max-w-7xl flex-col items-start gap-10 lg:flex-row lg:gap-16">

        {/* LEFT SIDE */}
        <div className="flex-1">
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <GoHome className="mr-2 text-lg" />
            <span className="mx-2">›</span>
            <Link href="/solutions" className="hover:text-white transition hover:underline">
              Solutions
            </Link>
            <span className="mx-2">›</span>
            <span className="text-gray-500 font-medium">
              {hero.breadcrumb[1]}
            </span>
          </div>

          <h2 className="text-[14px] font-bold text-white uppercase">
            {hero.title}
          </h2>

          {/* Responsive UI update: mobile-first hero sizing and card width. */}
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[53px]">
            {hero.heading}
          </h1>

          <p className="mb-8 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl lg:mb-10">
            {hero.description}
          </p>

          {/* <ProfileSlider /> */}

          <div className="flex gap-2 mt-4">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === 1 ? "bg-gray-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="w-full rounded-2xl bg-white p-5 shadow-lg sm:p-8 lg:max-w-[360px]">
          <h2 className="text-black text-xl font-semibold text-center mb-6">
            {hero.formTitle}
          </h2>

          <form onSubmit={handleSubmit}>
            {/* NAME */}
            <input
              type="text"
              name="name"
              placeholder="Full name"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3 mb-1 outline-none focus:border-orange-500 text-gray-600"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mb-3">{errors.name}</p>
            )}

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              placeholder="name@company.com"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3 mb-1 outline-none focus:border-orange-500 text-gray-600"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mb-3">{errors.email}</p>
            )}

            {/* MESSAGE */}
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us about your needs."
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3 mb-1 outline-none focus:border-orange-500 text-gray-600"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mb-4">{errors.message}</p>
            )}

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-md font-semibold hover:bg-orange-600 transition"
            >
              Jump-start Your Project
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}