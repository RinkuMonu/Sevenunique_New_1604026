// // components/Benefits.jsx

// const benefits = [
//   {
//     title: "Integration with Existing Systems",
//     desc: "We design our custom agricultural software solutions to integrate seamlessly with your existing systems and processes using industry-standard protocols. We ensure smooth communication and data sharing between different platforms and devices. Our solutions help streamline your workflows and enhance operational efficiency across your entire agricultural ecosystem. They also future-proof your infrastructure for scalability and innovation.",
//   },
//   {
//     title: "Enhanced Security & Compliance",
//     desc: "Our solutions are built with security and compliance at their core, ensuring your data is protected while meeting regulatory requirements. We implement robust encryption, authentication, and monitoring systems.",
//   },
//   {
//     title: "Improved Operational Efficiency",
//     desc: "Custom solutions streamline workflows, reduce manual processes, and increase productivity. By automating tasks and optimizing systems, businesses can operate more efficiently.",
//   },
//   {
//     title: "Tailored to Your Needs",
//     desc: "Agriculture is a diverse industry with unique challenges and requirements varying from farm to farm. By developing custom agricultural software solutions, we tailor our solutions to your needs and operations. Whether you're a small family farm or a large-scale agribusiness, our customized software addresses your unique workflows, crop management practices, and regulatory compliance requirements. This ensures that you have the tools and processes necessary to optimize your particular agricultural operations.",
//   },
//   {
//     title: "Scalability & Future Growth",
//     desc: "Our solutions are designed to scale with your business, allowing you to expand operations without limitations. This ensures long-term sustainability and adaptability.",
//   },
// ];

// export default function Benefits() {
//   return (
//     <section className="bg-[#f6f7f9] py-[90px]">
//       <div className="max-w-[1200px] mx-auto px-6">

//         {/* HEADING */}
//         <h2 className="text-[48px] leading-[56px] font-semibold text-[#1f2933] mb-[60px]">
//           Benefits of building bespoke solutions
//         </h2>

//         {/* GRID (2 COLUMN) */}
//         <div className="grid grid-cols-2 gap-x-[80px] gap-y-[50px]">

//           {benefits.map((item, i) => (
//             <div key={i}>

//               {/* TITLE */}
//               <h3 className="text-[22px] font-semibold text-[#1f2933] mb-4">
//                 {i + 1}. {item.title}
//               </h3>

//               {/* DESCRIPTION */}
//               <p className="text-[17px] leading-[30px] text-gray-600">
//                 {item.desc}
//               </p>

//             </div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }



// components/Benefits.jsx

export default function Benefits({ data }) {
  return (
    <section className="bg-[#f6f7f9] py-[90px]">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-[48px] leading-[56px] font-semibold text-[#1f2933] mb-[60px]">
          {data.title}
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-2 gap-x-[80px] gap-y-[50px]">

          {data.items.map((item, i) => (
            <div key={i}>
              
              <h3 className="text-[22px] font-semibold text-[#1f2933] mb-4">
                {i + 1}. {item.title}
              </h3>

              <p className="text-[17px] leading-[30px] text-gray-600">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}