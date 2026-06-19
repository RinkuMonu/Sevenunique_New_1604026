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
  <section className="bg-gradient-to-b from-[#f8fafc] to-white py-24 overflow-hidden">
  <div className="max-w-[1200px] mx-auto px-6">

    {/* Header */}
    <div className="max-w-4xl mb-16">
      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-5">
        <span className="w-2 h-2 rounded-full bg-orange-500"></span>
        Our Process
      </span>

      <h2 className="text-[42px] md:text-[52px] leading-tight font-bold text-[#1f2933]">
        {data.title}
      </h2>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-2 gap-8">
      {data.items.map((item, i) => (
        <div
          key={i}
          className="
            group
            relative
            bg-white
            border border-gray-200
            rounded-3xl
            p-8
            overflow-hidden
            transition-all
            duration-500
            hover:-translate-y-2
            hover:border-orange-300
            hover:shadow-[0_20px_60px_rgba(249,115,22,0.15)]
          "
        >
          {/* Orange top line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-300"></div>

          {/* Background Number */}
          <div className="absolute right-5 top-4 text-[90px] font-bold text-orange-50 select-none">
            {String(i + 1).padStart(2, "0")}
          </div>

          <div className="relative z-10">

            {/* Number Badge */}
            <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-all duration-500">
              <span className="text-xl font-bold text-orange-600 group-hover:text-white">
                {i + 1}
              </span>
            </div>

            <h3 className="text-2xl font-semibold text-[#1f2933] mb-4 group-hover:text-orange-600 transition-colors duration-300">
              {item.title}
            </h3>

            <p className="text-gray-600 leading-8 text-[16px]">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}