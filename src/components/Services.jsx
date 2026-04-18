import Link from "next/link";

const services = [
  {
    title: "Front-End Development",
    desc: "Create high-performance, accessible, and scalable user interfaces.",
    tags: ["Front-End", "Web Development", "React", "Angular"],
    iconBg: "bg-[#e25d35]",
    icon: (
      <svg viewBox="0 0 20 20" fill="white" className="w-5 h-5">
        <path d="M3 4h14v1.5H3zm0 5h9v1.5H3zm0 5h11v1.5H3z" />
      </svg>
    ),
  },
  {
    title: "Back-End Development",
    desc: "Create strong, scalable architectures built for stability and efficiency.",
    tags: ["Back-End", "Database", "Go", ".NET", "Java", "Node.js"],
    iconBg: "bg-[#232f3f]",
    icon: (
      <svg viewBox="0 0 20 20" fill="white" className="w-5 h-5">
        <path d="M3 5h14a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1zm1 2v6h12V7H4zm2 1h2v1.5H6zm3.5 0H14v1.5h-4.5z" />
      </svg>
    ),
  },
  {
    title: "AI and Machine Learning",
    desc: "Implement reliable AI solutions that drive meaningful business outcomes.",
    tags: ["AI", "Machine Learning", "Data Science", "LLMs", "Generative AI", "Python"],
    iconBg: "bg-[#0f4f93]",
    icon: (
      <svg viewBox="0 0 20 20" fill="white" className="w-5 h-5">
        <path d="M9.2 3.3l.8 2.2 2.3.9-2.3.9-.8 2.2-.8-2.2-2.3-.9 2.3-.9.8-2.2zm5.3 3.4l.5 1.3 1.3.5-1.3.5-.5 1.3-.5-1.3-1.3-.5 1.3-.5.5-1.3zM6.4 10.2l.7 1.9 1.9.7-1.9.7-.7 1.9-.7-1.9-1.9-.7 1.9-.7.7-1.9z" />
      </svg>
    ),
  },
  {
    title: "Mobile Development",
    desc: "Build high-performance iOS and Android apps with seamless user experiences and strong data security.",
    tags: ["Mobile Applications", "iOS", "Android"],
    iconBg: "bg-[#1e5dc0]",
    icon: (
      <svg viewBox="0 0 20 20" fill="white" className="w-5 h-5">
        <path d="M7 2h6a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2zm0 1.5a.5.5 0 00-.5.5v12c0 .28.22.5.5.5h6a.5.5 0 00.5-.5V4a.5.5 0 00-.5-.5H7zm2.5 11h1v1h-1z" />
      </svg>
    ),
  },
  {
    title: "UX/UI Design",
    desc: "Create intuitive designs with clear user journeys, scalable components, and accessible interfaces.",
    tags: ["UX Design", "UI Design"],
    iconBg: "bg-[#3f9ea6]",
    icon: (
      <svg viewBox="0 0 20 20" fill="white" className="w-5 h-5">
        <path d="M3 4h14a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1zm0 1.5v10h14v-10H3zm2 2h4v6H5v-6zm5.5 0h4.5v2.5h-4.5V7.5zm0 3.5h4.5v2.5h-4.5V11z" />
      </svg>
    ),
  },
  {
    title: "QA and Testing",
    desc: "Ensure high-quality releases with end-to-end testing covering both manual and automated processes.",
    tags: ["Quality Assurance"],
    iconBg: "bg-[#1f9f71]",
    icon: (
      <svg viewBox="0 0 20 20" fill="white" className="w-5 h-5">
        <path d="M3 10.5l3.2 3.2L17 3.9l-1.2-1.2-9.6 9.6-2-2zM2.5 15h10v1.5h-10z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="px-6 py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-10">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.12] max-w-3xl text-[#191919]">
            Get full-stack coverage.
            <br />
            Unblock execution across the SDLC
            <span className="text-[#f4622a]">.</span>
          </h2>
          <Link
            href="/solutions"
            className="shrink-0 inline-flex items-center gap-2 text-[15px] text-[#1f1f1f] border-b border-[#1f1f1f] pb-1 hover:text-[#f4622a] hover:border-[#f4622a] transition-colors"
          >
            Everything we do
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="bg-[#f4f4f6] border border-[#ececef] rounded-md p-7 min-h-[248px]"
            >
              <div
                className={`w-10 h-10 ${svc.iconBg} rounded-lg flex items-center justify-center mb-5`}
              >
                {svc.icon}
              </div>
              <h3 className="text-3xl font-medium mb-2 text-[#1f1f1f] leading-[1.2]">
                {svc.title}
              </h3>
              <p className="text-[15px] text-[#4f4f56] leading-relaxed mb-5">
                {svc.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2.5 py-1 text-[15px] leading-none text-[#1764ca] border border-[#8db2e2] rounded-md bg-transparent hover:bg-blue-500 hover:text-white hover:cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}