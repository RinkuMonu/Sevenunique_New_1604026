"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function renderHighlightedHeading(heading) {
  if (!heading) return null;

  const match = heading.match(/\bAI\b/);

  if (!match || match.index === undefined) {
    return heading;
  }

  const start = match.index;
  const end = start + match[0].length;

  return (
    <>
      {heading.slice(0, start)}

      <span className="text-[#ff6433]">
        {heading.slice(start, end)}
      </span>

      {heading.slice(end)}
    </>
  );
}

export default function ServiceHeroSection({ data }) {
  const hero = data?.hero;
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  if (!hero) return null;

  // ✅ ALL DATA COMING FROM PROPS
  const {
    breadcrumb = [],
    title,
    heading,
    description,
    label,
    formTitle,
    backgroundImage,
    rating = {},
  } = hero;

  // INPUT CHANGE
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  // VALIDATION
  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      router.push("/schedule-a-call-page");
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#0f172a] px-4 py-10 sm:px-6 sm:py-14 md:px-10 md:py-16">
      {/* Responsive UI update: service form hero stacks and fits narrow screens. */}

      {/* BACKGROUND IMAGE FROM PROPS */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="background"
          className="w-full h-full object-cover opacity-15"
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172ae8] to-[#111827d9]"></div>

      {/* GLOW */}
      <div className="absolute top-[-120px] left-[-100px] w-[350px] h-[350px] bg-[#ff6433]/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* BREADCRUMB */}
        <div className="mb-7 flex flex-wrap items-center gap-2 text-xs text-white/70 sm:mb-10 sm:gap-3 sm:text-sm">
          <span>Home</span>

          <span>{">"}</span>

          <span>{breadcrumb[0]}</span>

          <span>{">"}</span>

          <span className="font-semibold text-white">
            {breadcrumb[1]}
          </span>
        </div>

        {/* GRID */}
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(360px,0.9fr)] lg:gap-14">

          {/* LEFT */}
          <div className="lg:pr-10">

            {/* TAG */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#ff6433]"></span>

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white">
                {title}
              </p>
            </div>

            {/* HEADING */}
            <h1 className="mt-6 max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-[52px]">
              {renderHighlightedHeading(heading)}
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-300 sm:mt-8 sm:text-lg sm:leading-[1.9]">
              {description}
            </p>

            {/* STATS */}
            <div className="mt-8 grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 sm:mt-12 sm:gap-5">

              {/* RATING */}
              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md sm:px-6 sm:py-5">
                <p className="text-[18px] font-semibold text-white">
                  {rating.platform}
                </p>

                <div className="mt-2 flex items-center gap-3">
                  <span className="text-[24px] font-bold text-white">
                    {rating.score}
                  </span>

                  <span className="text-[16px] tracking-[0.2em] text-[#ff6433]">
                    ★★★★★
                  </span>
                </div>

                <p className="mt-1 text-sm text-gray-400">
                  {rating.reviews}
                </p>
              </div>

              {/* LABEL */}
              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md sm:px-6 sm:py-5">
                <p className="text-lg font-semibold leading-snug text-white">
                  {label}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-white/95 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8 md:rounded-[30px] md:p-10">

              {/* TITLE */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold leading-tight text-[#111827] sm:text-[30px]">
                  {formTitle}
                </h2>

                <p className="mt-3 text-gray-500 leading-relaxed">
                  Let’s discuss your project and explore how we can help.
                </p>
              </div>

              {/* FORM */}
              <form className="space-y-6" onSubmit={handleSubmit}>

                {/* NAME */}
                <div>
                  <label className="mb-2 block text-[15px] font-medium text-[#26354a]">
                    Your name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    onChange={handleChange}
                    className="h-14 w-full rounded-xl border border-gray-200 bg-[#f8fafc] px-5 text-gray-700 outline-none transition focus:border-[#ff6433] focus:ring-4 focus:ring-orange-100"
                  />

                  {errors.name && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* EMAIL */}
                <div>
                  <label className="mb-2 block text-[15px] font-medium text-[#26354a]">
                    Your email
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                    onChange={handleChange}
                    className="h-14 w-full rounded-xl border border-gray-200 bg-[#f8fafc] px-5 text-gray-700 outline-none transition focus:border-[#ff6433] focus:ring-4 focus:ring-orange-100"
                  />

                  {errors.email && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="mb-2 block text-[15px] font-medium text-[#26354a]">
                    What can we help you with?
                  </label>

                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your project requirements..."
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 bg-[#f8fafc] px-5 py-4 text-gray-700 outline-none transition focus:border-[#ff6433] focus:ring-4 focus:ring-orange-100"
                  />

                  {errors.message && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#ff6433] px-6 py-4 text-[17px] font-semibold text-white transition-all duration-300 hover:bg-[#ef5728]"
                >
                  Jump-start Your Project →
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
