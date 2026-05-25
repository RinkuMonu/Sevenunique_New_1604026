"use client";

import { Search } from "lucide-react";


export default function JobsPage() {
const jobs = [
  {
    title: "Frontend Developer | React.js | Jaipur, Rajasthan",
    description:
      "We are looking for a skilled React.js developer to build responsive and high-performance web applications for international clients. Experience with Tailwind CSS and API integration is preferred.",
    category: "Frontend Development",
    image:
      "/images/frontend.jpeg",
  },

  {
    title: "UI/UX Designer | IT Company | Jaipur, Rajasthan",
    description:
      "Join our creative design team to craft modern user experiences for web and mobile platforms. Strong knowledge of Figma, wireframing, and responsive design systems is required.",
    category: "UI/UX Design",
    image:
      "/images/uiux.jpeg",
  },

  {
    title: "Backend Developer | Node.js & MongoDB | Jaipur",
    description:
      "Seeking a backend developer with experience in Node.js, Express, and MongoDB to develop scalable APIs and secure server-side applications for enterprise projects.",
    category: "Backend Development",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Digital Marketing Executive | SEO & Social Media | Jaipur",
    description:
      "Looking for a marketing professional to manage SEO campaigns, social media growth, and content strategies for our IT and software development services.",
    category: "Digital Marketing",
    image:
      "/images/seo.png",
  },

  {
    title: "Full Stack Developer | MERN Stack | Jaipur, India",
    description:
      "Work on dynamic web applications using MongoDB, Express.js, React.js, and Node.js. Collaborate with cross-functional teams to deliver scalable digital solutions.",
    category: "Full Stack Development",
    image:
      "/images/fullstack.png",
  },

  {
    title: "Business Development Executive | IT Sales | Jaipur",
    description:
      "We are hiring energetic business development executives to generate leads, manage client communication, and grow international software service partnerships.",
    category: "Business Development",
    image:
      "/images/bde.jpeg",
  },

  {
    title: "QA Engineer | Manual & Automation Testing | Jaipur",
    description:
      "Join our QA team to ensure software quality through detailed testing, bug tracking, and automation frameworks for web and mobile applications.",
    category: "Quality Assurance",
    image:
      "/images/qa.png",
  },
];

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
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 py-10"
          />

          <input
            type="text"
            placeholder="Job title, company, and keyword"
            className="py-5 w-full pl-10 pr-4 py-3 rounded-lg border text-gray-600 border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
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
          <div className="md:w-[280px] w-full h-[220px] md:h-auto overflow-hidden">
            <img
              src={job.image}
              alt={job.title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex-1 p-6 flex flex-col justify-between">

            {/* TOP CONTENT */}
            <div>

              {/* CATEGORY + TYPE */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="bg-orange-100 text-[#ff6a3d] text-xs font-semibold px-3 py-1 rounded-full">
                  {job.category}
                </span>

                <span className="text-sm text-gray-500">
                  Full Time
                </span>
              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-bold text-gray-800 leading-snug">
                {job.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-4 text-gray-600 leading-relaxed text-[15px] max-w-3xl">
                {job.description}
              </p>

              {/* EXTRA INFO */}
              <div className="flex flex-wrap gap-5 mt-5 text-sm text-gray-500">

                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-location-dot text-[#ff6a3d]"></i>
                  Jaipur, Rajasthan
                </div>

                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-briefcase text-[#ff6a3d]"></i>
                  2+ Years Experience
                </div>

                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-indian-rupee-sign text-[#ff6a3d]"></i>
                  Competitive Salary
                </div>

              </div>
            </div>

            {/* BOTTOM */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-8 pt-5 border-t border-gray-100">

              <div className="flex items-center gap-3">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="recruiter"
                  className="w-11 h-11 rounded-full object-cover"
                />

                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    HR Department
                  </p>

                  <p className="text-xs text-gray-500">
                    Posted 2 days ago
                  </p>
                </div>
              </div>

              <button className="bg-[#ff6a3d] hover:bg-[#e85c32] text-white px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300">
                Apply Now
              </button>

            </div>
          </div>

        </div>
      </div>
    ))}

  </div>

  
</section>1

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
