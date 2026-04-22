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
    title: "Blockchain Certification",
    img: "https://assets.bairesdev.com//image/upload/c_limit,w_200/fl_sanitize/v1/www/core/certifications/blockchainCertification_vivlcq.svg?_a=BAVAfVDW0",
    desc: "Our engineers have proven experience working with blockchain technology across industries, helping organizations build decentralized systems, secure transactions, and innovative digital solutions.",
  },
  {
    title: "Database Cloud Administrator Certified Professional",
    img: "https://assets.bairesdev.com//image/upload/c_limit,w_200/fl_sanitize/v1/www/core/certifications/oracleDatabaseCertification_t4oyge.svg?_a=BAVAfVDW0",
    desc: "This certification demonstrates expertise in managing enterprise database cloud technologies, including Oracle Cloud Infrastructure, Autonomous Databases, and scalable database systems.",
  },
  {
    title: "Java (EE) Certifications",
    img: "https://assets.bairesdev.com//image/upload/c_limit,w_200/fl_sanitize/v1/www/core/certifications/oracleJeeCertification_j1qukr.svg?_a=BAVAfVDW0",
    desc: "Our specialists are highly experienced in enterprise-level Java application development, system architecture design, requirement analysis, and execution of mission-critical software systems.",
  },
  {
    title: "AWS Certifications",
    img: "https://assets.bairesdev.com//image/upload/c_limit,w_200/fl_sanitize/v1/www/core/certifications/awsCertifications_k1ibry.svg?_a=BAVAfVDW0",
    desc: "This certification validates advanced expertise in designing and implementing AWS architectures, with deep knowledge of networking, scalability, and hybrid cloud environments.",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    img: "https://assets.bairesdev.com//image/upload/c_limit,w_200/fl_sanitize/v1/www/core/certifications/awsCertifiedCloud_g8qzqw.svg?_a=BAVAfVDW0",
    desc: "This certification validates foundational knowledge of AWS cloud services, architecture, pricing models, and deployment strategies for modern cloud-based applications.",
  },
  {
    title: "Salesforce Certified Platform Developer II",
    img: "https://assets.bairesdev.com//image/upload/c_limit,w_200/fl_sanitize/v1/www/core/certifications/salesforceCertified_mhsjfh.svg?_a=BAVAfVDW0",
    desc: "This certification demonstrates expertise in developing advanced applications on Salesforce, including data modeling, business logic implementation, and platform customization.",
  },
  {
    title: "Redis Certified Developer",
    img: "https://assets.bairesdev.com//image/upload/c_limit,w_200/fl_sanitize/v1/www/core/certifications/redisCertified_macj4d.svg?_a=BAVAfVDW0",
    desc: "Validates proficiency in Redis database technologies, including data structures, architecture, and building scalable high-performance applications.",
  },
  {
    title: "Cloudera Certified Professional (CCP): Data Scientist",
    img: "https://assets.bairesdev.com//image/upload/c_limit,w_200/fl_sanitize/v1/www/core/certifications/clouderaCertified_ce41im.svg?_a=BAVAfVDW0",
    desc: "This certification validates expertise in data science, machine learning, and building data-driven solutions using Cloudera platforms.",
  },
  {
    title: "LPIC-3: Linux Enterprise Professional Certification",
    img: "https://assets.bairesdev.com//image/upload/c_limit,w_200/fl_sanitize/v1/www/core/certifications/lpicCertification_aiwunc.svg?_a=BAVAfVDW0",
    desc: "Advanced certification in Linux enterprise systems, covering system administration, security, virtualization, and high-availability infrastructure.",
  },
  {
    title: "Certified Agile Project Manager",
    img: "https://assets.bairesdev.com//image/upload/c_limit,w_200/fl_sanitize/v1/www/core/certifications/agilePm_jupoxw.svg?_a=BAVAfVDW0",
    desc: "Demonstrates expertise in managing projects using Agile methodologies, ensuring efficient team collaboration and adaptability in dynamic environments.",
  },
  {
    title: "Machine Learning and Artificial Intelligence",
    img: "https://assets.bairesdev.com//image/upload/c_limit,w_200/fl_sanitize/v1/www/core/certifications/mitProfessional_yuhcpp.svg?_a=BAVAfVDW0",
    desc: "Validates knowledge in AI and machine learning, including model development, deployment, and real-world application of intelligent systems.",
  },
  {
    title: "Salesforce Consulting Partner",
    img: "https://assets.bairesdev.com//image/upload/c_limit,w_200/fl_sanitize/v1/www/core/certifications/salesforce-consulting-partner_1768833761.svg?_a=BAVAfVDW0",
    desc: "Recognizes expertise in building and optimizing CRM ecosystems using Salesforce, including automation, integrations, and custom development.",
  },
  {
    title: "Databricks Partner",
    img: "https://assets.bairesdev.com//image/upload/c_limit,w_200/fl_sanitize/v1/www/core/certifications/databricks-partner_1768833759.svg?_a=BAVAfVDW0",
    desc: "This partnership validates expertise in building scalable data pipelines, AI models, and analytics solutions using the Databricks Lakehouse platform.",
  },
    {
    title: "Google Cloud Partner",
    img: "https://assets.bairesdev.com//image/upload/c_limit,w_200/dpr_auto/f_auto/q_auto/v1/www/static/Google_Cloud_Partner_no_outline_vertical_cgr4ml?_a=BAVAfVDW0",
    desc: "Being a Google Cloud Partner certifies our organization’s expertise in the cloud and our ability to meet various technical and business needs. This certification validates our customer success using Google Cloud in a wide range of industries, workloads, and solutions areas.",
  },
  {
    title: "Microsoft Gold Certified Partner",
    img: "https://assets.bairesdev.com//image/upload/c_limit,w_200/fl_sanitize/v1/www/core/certifications/microsoftCertification_kguidx.svg?_a=BAVAfVDW0",
    desc: "As a Microsoft Certified Partner (MCP) we provide Microsoft-related products, services or support. Microsoft Gold Certified Partners are the most highly accredited independent technical providers offering support for data management and software development.",
  },
  {
    title: "AWS Services Partner",
    img: "https://assets.bairesdev.com//image/upload/c_limit,w_200/fl_sanitize/v1/www/core/certifications/AWSSericesPartner_1767733513.svg?_a=BAVAfVDW0",
    desc: "This designation is granted to organizations that have demonstrated expertise in providing services and solutions on the AWS platform, ensuring strong technical proficiency, customer success, and collaboration with AWS to deliver value to clients.",
  },
  {
    title: "Scrum Certifications",
    img: "https://assets.bairesdev.com//image/upload/c_limit,w_200/fl_sanitize/v1/www/core/certifications/scrumCertification_fl1rub.svg?_a=BAVAfVDW0",
    desc: "Certified Scrum Professionals help organizations understand Agile principles, adopt Scrum frameworks, and improve workflows through collaboration, Lean thinking, and efficient team dynamics.",
  },
    {
    title: "MCSE: Business Applications",
    img: "https://assets.bairesdev.com//image/upload/c_limit,w_200/fl_sanitize/v1/www/core/certifications/mcseCertification_s1k50b.svg?_a=BAVAfVDW0",
    desc: "Our engineers have deep expertise in Microsoft Dynamics 365 technologies and modern enterprise systems including cloud computing, identity management, networking, virtualization, and systems management.",
  },
  {
    title: "IRAM-ISO 27001-2022",
    img: "https://assets.bairesdev.com//image/upload/c_limit,w_200/dpr_auto/f_auto/q_auto/v1/www/core/certifications/IRAM-ISO-27001-Gestion-SI-Badge-Black_EN_Transp%202_1749154464?_a=BAVAfVDW0",
    desc: "This certification validates our commitment to strong information security practices, risk management, and continuous improvement through a robust Information Security Management System across all operational processes.",
  },
];

export default function CertificationsGrid() {
  return (
    <section className="bg-white py-[80px]">
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-8">

          {certifications.map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-2xl px-8 py-6 bg-white flex items-center gap-8 hover:shadow-sm transition"
            >

              {/* LEFT IMAGE (FIXED WIDTH LIKE ORIGINAL) */}
              <div className="w-[180px] flex-shrink-0 flex justify-center">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={160}
                  height={120}
                  className="object-contain mix-blend-multiply"
                />
              </div>

              {/* RIGHT CONTENT */}
              <div className="flex-1">
                <h3 className="text-[22px] font-medium text-[#2b2f33] mb-3">
                  {item.title}
                </h3>

                <p className="text-[16px] leading-[28px] text-gray-600">
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