// import Image from "next/image";

// const certifications = [
//   {
//     title: "Google Cloud Partner",
//     img: "https://assets.bairesdev.com//image/upload/c_limit,w_200/dpr_auto/f_auto/q_auto/v1/www/static/Google_Cloud_Partner_no_outline_vertical_cgr4ml?_a=BAVAfVDW0",
//     desc: "Being a Google Cloud Partner certifies our organization’s expertise in the cloud and our ability to meet various technical and business needs. This certification validates our customer success using Google Cloud in a wide range of industries, workloads, and solutions areas.",
//   },
//   {
//     title: "Microsoft Gold Certified Partner",
//     img: "https://assets.bairesdev.com//image/upload/c_limit,w_200/fl_sanitize/v1/www/core/certifications/microsoftCertification_kguidx.svg?_a=BAVAfVDW0",
//     desc: "As a Microsoft Certified Partner (MCP), we provide Microsoft-related products, services, and support. Microsoft Gold Certified Partners are highly accredited technical providers offering support for data management and software development.",
//   },
//   {
//     title: "AWS Services Partner",
//     img: "https://assets.bairesdev.com//image/upload/c_limit,w_200/fl_sanitize/v1/www/core/certifications/AWSSericesPartner_1767733513.svg?_a=BAVAfVDW0",
//     desc: "This designation is granted to organizations that have demonstrated expertise in providing services and solutions on the AWS platform, ensuring strong technical proficiency and customer success.",
//   },
//   {
//     title: "Scrum Certifications",
//     img: "https://assets.bairesdev.com//image/upload/c_limit,w_200/fl_sanitize/v1/www/core/certifications/scrumCertification_fl1rub.svg?_a=BAVAfVDW0",
//     desc: "Certified Scrum Professionals help organizations adopt Agile practices and improve workflows through better team collaboration and Lean thinking.",
//   },

//   // 👉 SAME STRUCTURE → aur add karte jao (19 total)
//   {
//     title: "MCSE: Business Applications",
//     img: "https://assets.bairesdev.com//image/upload/c_limit,w_200/fl_sanitize/v1/www/core/certifications/mcseCertification_s1k50b.svg?_a=BAVAfVDW0",
//     desc: "Our engineers have expertise in Microsoft Dynamics 365 technologies and modern enterprise solutions including cloud, networking, and systems management.",
//   },
//   {
//     title: "ISO 27001 Certification",
//     img: "https://assets.bairesdev.com//image/upload/c_limit,w_200/dpr_auto/f_auto/q_auto/v1/www/core/certifications/IRAM-ISO-27001-Gestion-SI-Badge-Black_EN_Transp%202_1749154464?_a=BAVAfVDW0",
//     desc: "This certification validates strong information security practices and a robust Information Security Management System.",
//   },
//   {
//     title: "Blockchain Certification",
//     img: "https://assets.bairesdev.com//image/upload/c_limit,w_200/fl_sanitize/v1/www/core/certifications/blockchainCertification_vivlcq.svg?_a=BAVAfVDW0",
//     desc: "Our engineers have hands-on experience working with blockchain technology across industries.",
//   },
//   {
//     title: "Oracle DB Certification",
//     img: "https://assets.bairesdev.com//image/upload/c_limit,w_200/fl_sanitize/v1/www/core/certifications/oracleDatabaseCertification_t4oyge.svg?_a=BAVAfVDW0",
//     desc: "Demonstrates expertise in enterprise database cloud technologies and Oracle infrastructure.",
//   },

//   // 👉 remaining fill karle same pattern me (total 19)
// ];

// export default function CertificationsGrid() {
//   return (
//     <section className="bg-[#f6f7f9] py-[80px]">
//       <div className="max-w-[1200px] mx-auto px-6">

//         {/* GRID */}
//         <div className="grid md:grid-cols-2 gap-8">

//           {certifications.map((item, i) => (
//             <div
//               key={i}
//               className="border border-gray-200 rounded-2xl px-8 py-6 bg-white flex flex-col md:flex-row items-start gap-6 hover:shadow-sm transition"
//             >
              
//               {/* IMAGE */}
//               <div className="flex justify-center">
//                 <Image
//                   src={item.img}
//                   alt={item.title}
//                   width={140}
//                   height={140}
//                   className="object-contain"
//                 />
//               </div>

//               {/* CONTENT */}
//               <div>
//                 <h3 className="text-[22px] font-semibold text-[#1f2933] mb-2">
//                   {item.title}
//                 </h3>

//                 <p className="text-[16px] leading-[28px] text-gray-600">
//                   {item.desc}
//                 </p>
//               </div>

//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }



import Image from "next/image";

const certifications = [


  {
    title: "IAF certificate",
    img: "/images/iaf.png",
   
  },
  {
    title: "QRO Certifications",
    img: "/images/qro.jpg",
   
  },
  {
    title: "KAB Certifications",
    img: "/images/kab.png",
    
  },
  {
    title: "EGAC Accredited CAB",
    img: "/images/egca.png",
    
  },
  {
    title: "PCI DSS Certification",
    img: "/images/pcidss.png",
   
  },
  {
    title: "EU CERT",
    img: "/images/eu.webp",
    
  },
  {
    title: "MSME Certification",
    img: "/images/msme.png",
   
  },
  {
    title: "ISO",
    img: "/images/iso.png",
   
  },
 
];

export default function CertificationsGrid() {
  return (
   <section className="bg-[#f8f9fb] py-24">
  <div className="max-w-7xl mx-auto px-6">

    {/* SECTION HEADING */}
    <div className="text-center mb-16">
      <p className="text-[#f45d2d] uppercase tracking-[3px] text-sm font-semibold mb-4">
        Certifications & Recognition
      </p>

      <h2 className="text-[36px] md:text-[48px] font-semibold text-[#111827] leading-tight">
        Trusted Standards. Proven Excellence.
      </h2>

      <p className="mt-5 text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
        Our certifications reflect our commitment to quality, security,
        innovation, and delivering world-class digital solutions.
      </p>
    </div>

    {/* CARDS GRID */}
   {/* Responsive UI update: explicitly center the certification panel on desktop. */}
   <div className="mx-auto w-full max-w-6xl rounded-2xl border border-gray-100 bg-orange-100 p-5 shadow-sm sm:p-6 lg:p-8">
     <div className="grid md:grid-cols-2 gap-8">

      {certifications.map((item, i) => (
        <div
          key={i}
          className="group relative overflow-hidden rounded-[28px] bg-white border border-gray-200 p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-300"
        >
          
          {/* Gradient Glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-orange-50 via-transparent to-transparent"></div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-8">

            {/* LOGO */}
            <div className="relative flex items-center justify-center  rounded-2xl bg-[#f8f9fb] border border-gray-100 group-hover:bg-white transition">
              <Image
                src={item.img}
                alt={item.title}
                width={130}
                height={100}
                // Image warning fix: preserve ratio when global responsive sizing constrains width.
                style={{ height: "auto" }}
                className="object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* CONTENT */}
            <div className="flex-1 text-center sm:text-left">
              
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#fff4ef] text-[#f45d2d] text-sm font-medium mb-4">
                Certified
              </div>

              <h3 className="text-[24px] font-semibold text-[#111827] leading-snug group-hover:text-[#f45d2d] transition-colors duration-300">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed text-[15px]">
                Recognized for maintaining high standards in operational
                excellence, innovation, and customer-focused delivery.
              </p>
            </div>

          </div>
        </div>
      ))}

    </div>
   </div>
  </div>
</section>
  );
}
