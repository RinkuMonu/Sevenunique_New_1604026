"use client";

import { ArrowRight } from "lucide-react";

const circles = [
  {
    id: "ux-ui",
    label: "UX/UI Circle",
    icon: "https://assets.bairesdev.com/image/upload/c_limit,w_24/fl_sanitize/v1/www/static/circles/technologies/uxui_swknav.svg",
  },
  {
    id: "frontend",
    label: "Frontend Circle",
    icon: "https://assets.bairesdev.com/image/upload/c_limit,w_24/fl_sanitize/v1/www/static/circles/technologies/frontend_fnl18l.svg",
  },
  {
    id: "qa",
    label: "Quality Assurance Circle",
    icon: "https://assets.bairesdev.com/image/upload/c_limit,w_24/fl_sanitize/v1/www/static/circles/technologies/qa_ujgrvw.svg",
  },
  {
    id: "devops",
    label: "DevOps Circle",
    icon: "https://assets.bairesdev.com/image/upload/c_limit,w_24/fl_sanitize/v1/www/static/circles/technologies/devops_swnr90.svg",
  },
  {
    id: "agile",
    label: "Agile/Scrum Circle",
    icon: "https://assets.bairesdev.com/image/upload/c_limit,w_24/fl_sanitize/v1/www/static/circles/technologies/agilescrum_dr75xm.svg",
  },
  {
    id: "ai-ml",
    label: "AI and ML Circle",
    icon: "https://assets.bairesdev.com/image/upload/c_limit,w_24/fl_sanitize/v1/www/static/circles/technologies/aiml_yutvqi.svg",
  },
  {
    id: "backend",
    label: "Backend Circle",
    icon: "https://assets.bairesdev.com/image/upload/c_limit,w_24/fl_sanitize/v1/www/static/circles/technologies/backend_zujz1l.svg",
  },
  {
    id: "data",
    label: "Data Engineering Circle",
    icon: "https://assets.bairesdev.com/image/upload/c_limit,w_24/fl_sanitize/v1/www/static/circles/technologies/data_tjd2nb.svg",
  },
  {
    id: "pm",
    label: "Product Management Circle",
    icon: "https://assets.bairesdev.com/image/upload/c_limit,w_24/fl_sanitize/v1/www/static/circles/technologies/pm_bvri0h.svg",
  },
];

export function IntroducingCircles() {
  // Responsive UI update: circle introduction keeps comfortable mobile gutters.
  return (
    <section className="w-full bg-slate-50 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col justify-start">
            <h1 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              Introducing Circles
            </h1>

            <h2 className="mb-4 inline-block border-b border-gray-900 pb-3 text-base font-bold leading-relaxed text-gray-900 sm:text-lg">
              Where top developers become even better across the entire development lifecycle.
            </h2>

            <p className="text-base text-gray-600 mb-8 leading-relaxed max-w-md">
        Become an expert who keeps growing. Software engineers and tech professionals in Circles continuously improve through collaboration, knowledge sharing, and focused training.
            </p>

            <a
              href="/circle"
              className="inline-flex items-center text-gray-900 font-semibold border-b-2 border-gray-900 pb-1 hover:text-gray-700 transition-colors w-fit"
            >
              How Circles Work
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>

          {/* Right Column */}
          <div className="flex items-start lg:mt-12">
            <div className="grid w-full grid-cols-1 gap-3 min-[420px]:grid-cols-2 md:gap-4">
              {circles.map((circle) => (
                <div
                  key={circle.id}
                  className="flex min-w-0 items-center gap-2 rounded-full bg-white px-3 py-2.5 shadow-md transition-shadow hover:shadow-lg sm:px-4"
                >
                  <span className="text-gray-700 flex-shrink-0">
                    <img
                      src={circle.icon}
                      alt={circle.label}
                      className="w-5 h-5 object-contain"
                    />
                  </span>
                  <span className="min-w-0 text-sm font-medium leading-tight text-gray-900">
                    {circle.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
