// // components/IndustryGrid.jsx

// const industries = [
//   { title: "Advertising", desc: "Amplify your brand's message by crafting engaging campaigns that connect with audiences and drive measurable results." },
//   { title: "Agriculture", desc: "Elevate farming efficiency with sustainable practices... argetrhtrgh" },
//   { title: "Aviation", desc: "Enhance passenger experiences and streamline flight operations..." },
//   { title: "Banking", desc: "Transform customer experiences with secure digital platforms..." },
//   { title: "Construction", desc: "Deliver projects on time and within budget..." },
//   { title: "E-Learning", desc: "Transform education through interactive platforms..." },
  
//   { title: "Education", desc: "Enrich the learning environment..." },
//   { title: "Entertainment", desc: "Captivate audiences by creating immersive experiences..." },
//   { title: "Finance", desc: "Strengthen financial operations..." },
//   { title: "Healthcare", desc: "Create HIPAA-compliant healthcare software..." },
//   { title: "Retail", desc: "Reinvent the retail experience..." },
//   { title: "Travel Hospitality", desc: "Deliver exceptional travel services..." },
// ];

// export default function IndustryGrid() {
//   return (
//     <section className="bg-[#f5f7fa] py-10">
//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-2 gap-6">
        
//         {industries.map((item, i) => (
//           <div
//             key={i}
//             className="bg-white border rounded-xl p-5 hover:shadow-md transition"
//           >
//             <h3 className="font-semibold text-lg mb-2 underline">
//               {item.title}
//             </h3>

//             <p className="text-gray-600 text-sm">
//               {item.desc}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }




// components/IndustryGrid.jsx

const industries = [
  { title: "Advertising", desc: "Amplify your brand's message by crafting engaging campaigns that connect with audiences and drive measurable results." },
  { title: "Agriculture", desc: "Elevate farming efficiency with sustainable practices and precision technologies for higher crop yields and resource optimization." },
  { title: "Aviation", desc: "Enhance passenger experiences and streamline flight operations while maintaining the highest safety standards in aviation." },
  { title: "Banking", desc: "Improve customer banking experiences with secure, user-friendly platforms, while optimizing backend operations and ensuring compliance." },
  { title: "Construction", desc: "Deliver projects on time and within budget by improving collaboration, optimizing workflows, and ensuring compliance in construction." },
  { title: "E-Learning", desc: "Transform education through interactive online platforms that expand access and engage learners in innovative ways." },
  
  { title: "Education", desc: "Enrich the learning environment by fostering student engagement, simplifying administration, and embracing modern teaching methods." },
  { title: "Entertainment", desc: "Captivate audiences by creating immersive experiences, optimizing content delivery, and expanding your reach across platforms." },
  { title: "Finance", desc: "Strengthen financial operations and ensure compliance to support strategic growth and stability in your financial endeavors." },
  { title: "Healthcare", desc: "Create HIPAA-compliant healthcare software that enhances patient care, streamlines operations, and scales with your evolving needs." },
  { title: "Retail", desc: "Reinvent the retail experience by engaging customers, managing inventory effectively, and increasing sales opportunities." },
  { title: "Travel Hospitality", desc: "Deliver exceptional guest services by personalizing experiences, streamlining reservations, and optimizing operations." },
];

export default function IndustryGrid() {
  return (
    <section className="bg-[#f3f4f6] py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        
        {industries.map((item, i) => (
          <div
            key={i}
            className="bg-[#f8f9fb] border border-gray-200 rounded-2xl p-8 hover:shadow-sm transition"
          >
            {/* TITLE */}
            <h3 className="text-3xl font-bold text-gray-900 underline underline-offset-4 mb-4">
              {item.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-xl leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}