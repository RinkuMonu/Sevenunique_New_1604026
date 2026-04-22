import TrustedCompanies from "@/components/TrustedCompanies";
import { techData } from "./data";
import ReactServicesSection from "@/components/ReactServicesSection";
import TrustedClientsStrip from "@/components/Services/ai-development/TrustedClientsStrip";
import AIUseCasesSection from "@/components/Services/ai-development/AIUseCasesSection";
import { Star } from "lucide-react";
import ServiceSection from "../ServiceSection";

export default async function TechnologyPage({ params }) {
  const { slug } = await params;

  const data = techData?.[slug];

  if (!data) {
    return <div className="p-10">No data found for: {slug}</div>;
  }

  // Derive a short display name from the title for the form header
  const displayName = data.title
    .replace(/(development services|app development services|services)/gi, "")
    .trim();

  return (
    <>
      <div className="px-10 py-16 bg-[#EEEFF1] grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6">
          <p className="text-xs font-semibold text-black uppercase tracking-widest">
            {data?.title}
          </p>

          <h1 className="text-5xl text-black font-extrabold leading-tight">
            {data?.heading}
          </h1>

          <p className="text-base text-black leading-relaxed">
            {data?.description}
          </p>

          {/* Clutch + Tech Badge Row */}
          <div className="flex items-center gap-6 mt-2">
            {/* Clutch */}
            <div className="flex flex-col">
              <span className="text-xl font-bold text-black">Clutch</span>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-base font-semibold text-black">4.9/5</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-orange-400 text-orange-400"
                    />
                  ))}
                </div>
              </div>
              <span className="text-xs text-gray-500 mt-0.5">60 client reviews</span>
            </div>

            {/* Divider */}
            <div className="h-12 w-px bg-gray-400" />

            {/* Tech Logo Badge */}
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              {/* Generic icon placeholder — swap for actual logo per slug */}
              <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">
                {displayName.charAt(0)}
              </div>
              <span className="text-sm font-semibold text-blue-600">
                {displayName}
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-[#EEEFF1] border border-gray-300 p-8 rounded-xl shadow-sm">
          <h2 className="text-xl text-black font-bold mb-6 leading-snug">
            Get expert help for your {displayName} project.
          </h2>

          {/* NAME */}
          <label className="block text-sm text-gray-700 mb-1">Your name</label>
          <input
            type="text"
            placeholder="Full name"
            className="w-full border border-gray-300 bg-white p-3 mb-4 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          {/* EMAIL */}
          <label className="block text-sm text-gray-700 mb-1">Your email</label>
          <input
            type="email"
            placeholder="name@company.com"
            className="w-full border border-gray-300 bg-white p-3 mb-4 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          {/* MESSAGE */}
          <label className="block text-sm text-gray-700 mb-1">
            What we can do for you?
          </label>
          <textarea
            placeholder="Tell us about your needs."
            className="w-full border border-gray-300 bg-white p-3 mb-6 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            rows={4}
          />

          <button className="w-full bg-orange-500 hover:bg-orange-600 transition-colors text-white font-semibold py-3 rounded-md text-base">
            Jump-start Your Project
          </button>
        </div>
      </div>

      <TrustedClientsStrip />
       {/* <TrustedCompanies /> */}
      <AIUseCasesSection useCases={data.useCases}/>
      <ReactServicesSection  data={data}/>
      
    </>
  );
}