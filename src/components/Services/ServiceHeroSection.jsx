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

  const breadcrumb = hero.breadcrumb || [];
  const rating = hero.rating || {};

  // ✅ Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  // ✅ Validation function
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

  // ✅ Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // 🔗 Redirect after success
      router.push("/schedule-a-call-page");
    }
  };

  return (
    <section className="bg-[#f1f2f4] px-6 py-12 md:px-10 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-wrap items-center gap-3 text-sm text-[#2c3444]">
          <span>Home</span>
          <span>{">"}</span>
          <span>{breadcrumb[0]}</span>
          <span>{">"}</span>
          <span className="font-semibold text-black">
            {breadcrumb[1]}
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.7fr)_minmax(340px,0.9fr)] lg:gap-12">
          <div className="lg:pr-12">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#24456f]">
              {hero.title}
            </p>

            <h1 className="max-w-4xl text-[42px] font-semibold leading-[1.08] text-[#111111] md:text-[58px]">
              {renderHighlightedHeading(hero.heading)}
            </h1>

            <p className="mt-8 max-w-4xl text-[18px] leading-[1.7] text-[#2f4057]">
              {hero.description}
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-8">
              <div>
                <p className="text-[20px] font-semibold text-black">
                  {rating.platform}
                </p>
                <div className="mt-2 flex items-center gap-3">
                  <span className="text-[20px] font-medium text-black">
                    {rating.score}
                  </span>
                  <span className="text-[16px] tracking-[0.2em] text-[#ff6433]">
                    {"*****"}
                  </span>
                </div>
                <p className="mt-1 text-sm text-[#2f4057]">
                  {rating.reviews}
                </p>
              </div>

              <div className="hidden h-16 w-px bg-[#cfd5dd] md:block" />

              <div>
                <p className="max-w-[120px] text-lg font-semibold leading-tight text-[#4c3bff]">
                  {hero.label}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:border-l lg:border-[#cfd5dd] lg:pl-12">
            <div>
              <h2 className="mb-8 text-[24px] font-semibold leading-tight text-[#111111]">
                {hero.formTitle}
              </h2>

              {/* ✅ Form with submit handler */}
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="mb-2 block text-[16px] font-medium text-[#26354a]">
                    Your name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Full name"
                    onChange={handleChange}
                    className="h-11 w-full rounded-[4px] border border-[#c9d0d8] bg-white px-4"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-[16px] font-medium text-[#26354a]">
                    Your email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                    onChange={handleChange}
                    className="h-11 w-full rounded-[4px] border border-[#c9d0d8] bg-white px-4"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-[16px] font-medium text-[#26354a]">
                    What we can do for you?
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your needs."
                    onChange={handleChange}
                    className="w-full rounded-[4px] border border-[#c9d0d8] bg-white px-4 py-3"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full rounded-[8px] bg-[#ff6433] px-6 py-4 text-[17px] font-semibold text-white hover:bg-[#ef5728]"
                >
                  Jump-start Your Project
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 