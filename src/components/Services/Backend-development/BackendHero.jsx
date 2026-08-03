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

  return (
  <div className="w-full min-h-screen bg-[#0f172a] px-4 sm:px-6 lg:px-10 py-12 md:py-16 lg:py-20 flex items-center justify-center">
  <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start">

    {/* LEFT SIDE */}
    <div className="flex-1 w-full text-center lg:text-left">

      {/* Breadcrumb */}
      <div className="flex flex-wrap justify-center lg:justify-start items-center text-sm text-gray-400 mb-6">
        <GoHome className="mr-2 text-lg" />

        <span className="mx-2">›</span>

        <Link
          href="/solutions"
          className="hover:text-white transition hover:underline"
        >
          Solutions
        </Link>

        <span className="mx-2">›</span>

        <span className="font-medium">
          {hero.breadcrumb[1]}
        </span>
      </div>

      <h2 className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider text-white">
        {hero.title}
      </h2>

      <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
        {hero.heading}
      </h1>

      <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
        {hero.description}
      </p>

      {/* <ProfileSlider /> */}

      <div className="flex justify-center lg:justify-start gap-2 mt-8">
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
    <div className="w-full sm:max-w-md lg:w-[380px] bg-white rounded-2xl shadow-xl p-6 sm:p-8">

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
          className="w-full border border-gray-300 rounded-md px-4 py-3 mb-1 outline-none focus:border-orange-500 text-gray-700"
        />

        {errors.name && (
          <p className="text-red-500 text-sm mb-3">
            {errors.name}
          </p>
        )}

        {/* EMAIL */}
        <input
          type="email"
          name="email"
          placeholder="name@company.com"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-3 mb-1 outline-none focus:border-orange-500 text-gray-700"
        />

        {errors.email && (
          <p className="text-red-500 text-sm mb-3">
            {errors.email}
          </p>
        )}

        {/* MESSAGE */}
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us about your needs."
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-3 mb-1 outline-none focus:border-orange-500 text-gray-700 resize-none"
        />

        {errors.message && (
          <p className="text-red-500 text-sm mb-4">
            {errors.message}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-3 rounded-md font-semibold"
        >
          Jump-start Your Project
        </button>

      </form>
    </div>

  </div>
</div>
  );
}