// components/TechStack.jsx

import Link from "next/link";

export default function TechStack() {
  // const row1 = ["Node.js", "Java", "React", ".NET", "Python", "C#", "Rails"];
  // const row2 = ["Angular", "PHP", "Android", "iOS", "Golang", "Vue.js", "C++"];


  const row1 = [
     { name: ".NET", path: "/technologies/dotnet" },
    { name: "AWS", path: "/technologies/aws" },
    { name: "Django", path: "/technologies/django" },
    { name: "Java", path: "/technologies/java" },
    // { name: "Machine Learning", path: "/technologies/machine-learning" },
    { name: "PHP", path: "/technologies/php" },
    { name: "React", path: "/technologies/react" },
    // { name: "TypeScript", path: "/technologies/typescript" },
  ];

  const row2 = [
     { name: "AI", path: "/technologies/ai" },
    { name: "C#", path: "/technologies/csharp" },
    { name: "Golang", path: "/technologies/golang" },
    // { name: "JavaScript", path: "/technologies/javascript" },
    // { name: "Microsoft Azure", path: "/technologies/azure" },
    // { name: "Power BI", path: "/technologies/power-bi" },
    { name: "Ruby", path: "/technologies/ruby" },
    { name: "Vue.js", path: "/technologies/vue" },
  ];

  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="text-center mb-12 px-6">

        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Yes. We cover your tech stack.
          <span className="text-orange-500">.</span>
        </h2>

        <p className="text-gray-500 mt-4 text-lg">
          We are well-versed in most programming languages, tools, and frameworks.
        </p>
      </div>

      {/* ROW 1 */}
      <div className="flex gap-16 animate-marquee group-hover:[animation-play-state:paused]">
        {[...row1, ...row1].map((item, i) => (
          <Link key={i} href={item.path}>
            <span className="text-6xl md:text-7xl font-semibold text-gray-300 hover:text-orange-500 transition cursor-pointer">
              {item.name}
            </span>
          </Link>
        ))}
      </div>

      {/* ROW 2 */}
      <div className="flex gap-16 animate-marquee-reverse group-hover:[animation-play-state:paused] mt-4">
        {[...row2, ...row2].map((item, i) => (
          <Link key={i} href={item.path}>
            <span className="text-6xl md:text-7xl font-semibold text-gray-300 hover:text-orange-500 transition cursor-pointer">
              {item.name}
            </span>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12 text-black">
        <Link href="/technologies">
          <button className="group border-b-2 border-black pb-1 text-2xl font-medium flex items-center gap-2 mx-auto cursor-pointer">

            <span className="transition-transform duration-300 group-hover:translate-x-2">
              All technologies we work with →
            </span>

          </button>
        </Link>
      </div>
    </section>
  );
}