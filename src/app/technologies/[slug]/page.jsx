import TrustedCompanies from "@/components/TrustedCompanies";
import { techData } from "./data";
import ReactServicesSection from "@/components/ReactServicesSection";

export default async function TechnologyPage({ params }) {
  const { slug } = await params;

  const data = techData?.[slug];

  if (!data) {
    return <div className="p-10">No data found for: {slug}</div>;
  }

  return (
    <>
      <div className="px-10 py-16 bg-[#EEEFF1] grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT SIDE */}
        <div>
          <p className="text-sm text-black uppercase tracking-wide">
            {data.title}
          </p>

          <h1 className="text-4xl text-black font-bold mt-4 leading-tight">
            {data.heading}
          </h1>

          <p className="mt-4 text-black">{data.description}</p>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="border p-6 rounded-lg shadow-sm">
          <h2 className="text-xl text-black  font-semibold mb-4">
            Get expert help for your project
          </h2>
          {/* NAME */}
          <label className="block text-sm text-gray-700 mb-1">Your name</label>
          <input
            type="text"
            placeholder="Full name"
            className="w-full border p-2 mb-4 text-black rounded"
          />

          {/* EMAIL */}
          <label className="block text-sm text-gray-700 mb-1">Your email</label>
          <input
            type="email"
            placeholder="name@company.com"
            className="w-full border p-2 mb-4 text-black rounded"
          />

          {/* MESSAGE */}
          <label className="block text-sm text-gray-700 mb-1">
            What we can do for you?
          </label>
          <textarea
            placeholder="Tell us about your needs."
            className="w-full border p-2 mb-4 text-black rounded"
            rows={4}
          />

          <button className="bg-orange-500 text-white px-4 py-2 rounded">
            Jump-start Your Project
          </button>
        </div>
      </div>
      <TrustedCompanies />
      <ReactServicesSection />
    </>
  );
}
