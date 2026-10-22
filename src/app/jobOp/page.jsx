"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Search, X } from "lucide-react";





// export const metadata = {
//   title: "Hire Remote Developers & IT Experts Solutions | SevenUnique",
//   description: "Hire skilled remote developers and technology experts to accelerate software projects with flexible engagement models and scalable development support.",
// };


export default function JobsPage() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    location: "",
    role: "",
  });

  // Responsive UI update: keep the page fixed while the application modal scrolls independently.
  useEffect(() => {
    if (!openModal) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpenModal(false);
    };
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [openModal]);

  const jobs = [
    {
      title: "Frontend Developer | React.js | Jaipur, Rajasthan",
      description:
        "We are looking for a skilled React.js developer to build responsive and high-performance web applications.",
      category: "Frontend Development",
      image: "/images/frontend.jpeg",
    },

    {
      title: "UI/UX Designer | IT Company | Jaipur, Rajasthan",
      description:
        "Join our creative design team to craft modern user experiences for web and mobile platforms.",
      category: "UI/UX Design",
      image: "/images/uiux.jpeg",
    },
  ];

  // OPEN MODAL
  const handleOpenModal = (jobTitle) => {
    setSelectedRole(jobTitle);

    setFormData({
      name: "",
      mobile: "",
      email: "",
      location: "",
      role: jobTitle,
    });

    setOpenModal(true);
  };

  // HANDLE INPUT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Your application has been submitted successfully!");

    setOpenModal(false);

    setFormData({
      name: "",
      mobile: "",
      email: "",
      location: "",
      role: "",
    });
  };

  return (
    <div className="bg-[#f5f6f8] min-h-screen flex flex-col">

      {/* ================= TITLE + SEARCH ================= */}
      <section className="px-4 py-8 text-center sm:px-6 sm:py-10">
        {/* Responsive UI update: use mobile-first heading scale. */}
        <h1 className="text-3xl font-bold text-[#1e2a4a] sm:text-4xl lg:text-5xl">
          Explore Our Fully Remote Open Positions
        </h1>

        {/* SEARCH BAR */}
        <div className="relative mx-auto mt-5 max-w-5xl sm:mt-6">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Job title, company, and keyword"
            className="w-full rounded-lg border border-gray-300 bg-white py-3.5 pl-10 pr-4 text-sm text-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 sm:py-4 sm:text-base"
          />
        </div>
      </section>

      {/* ================= JOB GRID ================= */}
      {/* Responsive UI update: cards use valid dimensions and compact mobile spacing. */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6 sm:pb-14">
        <div className="space-y-4 sm:space-y-6">

          {jobs.map((job, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-xl sm:rounded-2xl"
            >
              <div className="flex flex-col md:flex-row">

                {/* LEFT IMAGE */}
                <div className="relative h-[210px] w-full shrink-0 overflow-hidden sm:h-[250px] md:h-auto md:min-h-[260px] md:w-[280px]">
                  <Image
                    src={job.image}
                    alt={job.title}
                    fill
                    sizes="(max-width: 767px) 100vw, 280px"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* RIGHT CONTENT */}
                <div className="flex min-w-0 flex-1 flex-col justify-between p-4 sm:p-6">

                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="bg-orange-100 text-[#ff6a3d] text-xs font-semibold px-3 py-1 rounded-full">
                        {job.category}
                      </span>

                      <span className="text-sm text-gray-500">
                        Full Time
                      </span>
                    </div>

                    <h3 className="text-xl font-bold leading-snug text-gray-800 sm:text-2xl">
                      {job.title}
                    </h3>

                    <p className="mt-4 text-gray-600 leading-relaxed text-[15px]">
                      {job.description}
                    </p>
                  </div>

                  {/* BUTTON */}
                  <div className="mt-6 border-t border-gray-100 pt-4 sm:mt-8 sm:pt-5">
                    <button
                      onClick={() => handleOpenModal(job.title)}
                      className="w-full rounded-xl bg-[#ff6a3d] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#e85c32] sm:w-auto"
                    >
                      Apply Now
                    </button>
                  </div>

                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ================= MODAL ================= */}
      {openModal && (
        <div className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto overscroll-contain bg-black/60 px-3 py-3 sm:items-center sm:px-4 sm:py-8">

          {/* Keep the application form inside short laptop/mobile viewports without changing submission logic. */}
          <div className="relative max-h-[calc(100dvh-1.5rem)] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-4 shadow-2xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden animate-[fadeIn_.3s_ease] sm:max-h-[calc(100dvh-4rem)] sm:rounded-3xl sm:p-8">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpenModal(false)}
              aria-label="Close application form"
              className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-black sm:right-5 sm:top-5"
            >
              <X size={22} />
            </button>

            {/* TITLE */}
            <h2 className="mb-2 pr-12 text-2xl font-bold text-gray-900 sm:text-3xl">
              Apply Now
            </h2>

            <p className="mb-5 text-gray-500 sm:mb-8">
              Fill in your details to apply for this role.
            </p>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">

              {/* NAME */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full border text-gray-500 border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              {/* MOBILE */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile Number
                </label>

                <input
                  type="tel"
                  name="mobile"
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  className="w-full border text-gray-500  border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full border text-gray-500 border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              {/* LOCATION */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>

                <input
                  type="text"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter your location"
                  className="w-full border text-gray-500 border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              {/* ROLE */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Applying For
                </label>

                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  readOnly
                  className="w-full rounded-xl border border-gray-300 bg-gray-100 px-4 py-3 text-gray-500"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="w-full rounded-xl bg-[#ff6a3d] py-3.5 font-medium text-white transition-all duration-300 hover:bg-[#e85c32] sm:py-4"
              >
                Submit Application
              </button>

            </form>
          </div>
        </div>
      )}

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#ff6a3d] text-white mt-auto">
        {/* Responsive UI update: center and space the compact job-page footer on phones. */}
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-center text-sm sm:px-6 md:flex-row md:gap-4 md:py-10 md:text-left">
          <div className="flex items-center gap-2 font-semibold">
            <span>▸▸</span>
            <span>Seven Unique</span>
          </div>

          <p>
            Seven Unique 2024 - 2026. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
