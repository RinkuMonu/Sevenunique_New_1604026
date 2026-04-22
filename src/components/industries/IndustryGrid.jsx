// components/IndustryGrid.jsx

import Link from "next/link";

const industries = [
  { title: "Advertising", slug: "advertising", desc: "Amplify your brand's message by crafting engaging campaigns that connect with audiences and drive measurable results." },
  { title: "Agriculture", slug: "agriculture", desc: "Elevate farming efficiency with sustainable practices and precision technologies for higher crop yields and resource optimization." },
  { title: "Aviation", slug: "aviation", desc: "Enhance passenger experiences and streamline flight operations while maintaining the highest safety standards in aviation." },
  { title: "Banking", slug: "banking", desc: "Improve customer banking experiences with secure, user-friendly platforms, while optimizing backend operations and ensuring compliance." },
  { title: "Construction", slug: "construction", desc: "Deliver projects on time and within budget by improving collaboration, optimizing workflows, and ensuring compliance in construction." },
  { title: "E-Learning", slug: "e-learning", desc: "Transform education through interactive online platforms that expand access and engage learners in innovative ways." },

  { title: "Education", slug: "education", desc: "Enrich the learning environment by fostering student engagement, simplifying administration, and embracing modern teaching methods." },
  { title: "Entertainment", slug: "entertainment", desc: "Captivate audiences by creating immersive experiences, optimizing content delivery, and expanding your reach across platforms." },
  { title: "Finance", slug: "finance", desc: "Strengthen financial operations and ensure compliance to support strategic growth and stability in your financial endeavors." },
  { title: "Healthcare", slug: "healthcare", desc: "Create HIPAA-compliant healthcare software that enhances patient care, streamlines operations, and scales with your evolving needs." },
  { title: "Retail", slug: "retail", desc: "Reinvent the retail experience by engaging customers, managing inventory effectively, and increasing sales opportunities." },
  { title: "Travel Hospitality", slug: "travel-hospitality", desc: "Deliver exceptional guest services by personalizing experiences, streamlining reservations, and optimizing operations." },

  // 🔥 NEW ADDED
  { title: "Insurance", slug: "insurance", desc: "Develop secure insurance platforms for policy management, claims processing, and customer engagement." },
  { title: "Real Estate", slug: "real-estate", desc: "Build digital real estate solutions for property management, listings, and seamless transactions." },
  { title: "Telecommunications", slug: "telecommunications", desc: "Enhance telecom operations with scalable systems for network management and customer services." },
  { title: "Automotive", slug: "automotive", desc: "Drive innovation in automotive industry with connected systems, fleet management, and smart mobility solutions." },
  { title: "Startups", slug: "startups", desc: "Empower startups with scalable, fast-to-market software solutions tailored for rapid growth." },
  { title: "Martech", slug: "martech", desc: "Build marketing technology platforms for automation, analytics, and customer engagement." },
  { title: "Transportation and Logistics", slug: "transportation-logistics", desc: "Optimize logistics operations with tracking, route optimization, and supply chain visibility." },
  { title: "Oil and Gas", slug: "oil-gas", desc: "Develop robust systems for resource management, safety compliance, and operational efficiency." },
  { title: "Supply Chain", slug: "supply-chain", desc: "Streamline supply chain processes with real-time tracking, analytics, and automation tools." },
];

export default function IndustryGrid() {
  return (
    <section className="bg-[#f3f4f6] py-12 pt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">

        {industries.map((item, i) => (

          <Link key={i} href={`/industries/${item.slug}`}>
            <div className="bg-[#f8f9fb] border border-gray-200 rounded-2xl p-8 hover:shadow-sm transition cursor-pointer">

              {/* TITLE */}
              <h3 className="text-3xl font-bold text-gray-900 underline underline-offset-4 mb-4">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600 text-xl leading-relaxed">
                {item.desc}
              </p>

            </div>
          </Link>

        ))}
      </div>
    </section>
  );
}