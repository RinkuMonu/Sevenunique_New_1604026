"use client";

import { useState } from "react";
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
      <section className="text-center py-10 px-4">
        <h1 className="text-[48px] md:text-[34px] font-bold text-[#1e2a4a]">
          Explore Our Fully Remote Open Positions
        </h1>

        {/* SEARCH BAR */}
        <div className="mt-6 max-w-5xl mx-auto relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Job title, company, and keyword"
            className="w-full pl-10 pr-4 py-4 rounded-lg border text-gray-600 border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
      </section>

      {/* ================= JOB GRID ================= */}
      <section className="px-4 pb-14 max-w-6xl mx-auto w-full">
        <div className="space-y-6">

          {jobs.map((job, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row">

                {/* LEFT IMAGE */}
                <div className="md:w-[280px] w-full h-[220px] overflow-hidden">
                  <img
                    src={job.image}
                    alt={job.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* RIGHT CONTENT */}
                <div className="flex-1 p-6 flex flex-col justify-between">

                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="bg-orange-100 text-[#ff6a3d] text-xs font-semibold px-3 py-1 rounded-full">
                        {job.category}
                      </span>

                      <span className="text-sm text-gray-500">
                        Full Time
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800 leading-snug">
                      {job.title}
                    </h3>

                    <p className="mt-4 text-gray-600 leading-relaxed text-[15px]">
                      {job.description}
                    </p>
                  </div>

                  {/* BUTTON */}
                  <div className="mt-8 pt-5 border-t border-gray-100">
                    <button
                      onClick={() => handleOpenModal(job.title)}
                      className="bg-[#ff6a3d] hover:bg-[#e85c32] text-white px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300"
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
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">

          <div className="bg-white w-full max-w-lg rounded-3xl p-8 relative animate-[fadeIn_.3s_ease]">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-5 right-5 text-gray-500 hover:text-black"
            >
              <X size={22} />
            </button>

            {/* TITLE */}
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Apply Now
            </h2>

            <p className="text-gray-500 mb-8">
              Fill in your details to apply for this role.
            </p>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-5">

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
                  className="w-full border text-gray-500 text-gray-500 border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
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
                  className="w-full border text-gray-500 border-gray-300 rounded-xl px-4 py-3 bg-gray-100 text-gray-600"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="w-full bg-[#ff6a3d] hover:bg-[#e85c32] text-white py-4 rounded-xl font-medium transition-all duration-300"
              >
                Submit Application
              </button>

            </form>
          </div>
        </div>
      )}

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#ff6a3d] text-white mt-auto">
        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-2 font-semibold">
            <span>▸▸</span>
            <span>Seven Unique</span>
          </div>

          <p className="mt-2 md:mt-0">
            Seven Unique 2024 - 2026. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}