"use client";

import {
  ArrowRight,
  Palette,
  Code,
  CheckCircle,
  Cog,
  Zap,
  Brain,
  Cpu,
  Database,
  Briefcase,
} from "lucide-react";

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
  return (
    <section className="w-full bg-slate-50 py-16 md:py-24 px-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col justify-start">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Introducing Circles
            </h1>

            <h2 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-900 pb-3 inline-block">
              Where the best devs get even better, across the entire development
              lifecycle.
            </h2>

            <p className="text-base text-gray-600 mb-8 leading-relaxed max-w-md">
              Become an expert who never stops improving. Software engineers and
              tech professionals in the Circles program continuously sharpen
              their skills and expertise through collaboration, knowledge
              sharing, and specialized training.
            </p>

            <a
              href="#"
              className="inline-flex items-center text-gray-900 font-semibold border-b-2 border-gray-900 pb-1 hover:text-gray-700 transition-colors w-fit"
            >
              How Circles Work
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>

          {/* Right Column */}
          <div className="flex items-start  mt-15">
            <div className="flex flex-wrap gap-3 md:gap-4">
              {circles.map((circle) => (
                <div
                  key={circle.id}
                  className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow whitespace-nowrap"
                >
                  <span className="text-gray-700 flex-shrink-0">
                    <img
                      src={circle.icon}
                      alt={circle.label}
                      className="w-5 h-5 object-contain"
                    />
                  </span>
                  <span className="text-sm font-medium text-gray-900">
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
