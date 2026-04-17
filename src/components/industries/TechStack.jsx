// components/TechStack.jsx

export default function TechStack() {
  const row1 = ["Node.js", "Java", "React", ".NET", "Python", "C#", "Rails"];
  const row2 = ["Angular", "PHP", "Android", "iOS", "Golang", "Vue.js", "C++"];

  return (
    <section className="bg-[#f3f4f6] py-20 overflow-hidden">
      <div className="text-center mb-12 px-6">
        
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Yes. We cover your tech stack.
          <span className="text-orange-500">.</span>
        </h2>

        <p className="text-gray-500 mt-4 text-lg">
          We are well-versed in most programming languages, tools, and frameworks.
        </p>
      </div>

      {/* ROW 1 (LEFT → RIGHT) */}
      <div className="overflow-hidden whitespace-nowrap mb-8">
        <div className="flex gap-16 animate-marquee">
          {[...row1, ...row1].map((item, i) => (
            <span
              key={i}
              className="text-6xl md:text-7xl font-semibold text-gray-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ROW 2 (RIGHT → LEFT) */}
      <div className="overflow-hidden whitespace-nowrap">
        <div className="flex gap-16 animate-marquee-reverse">
          {[...row2, ...row2].map((item, i) => (
            <span
              key={i}
              className="text-6xl md:text-7xl font-semibold text-gray-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* BOTTOM LINK */}
      <div className="text-center mt-12 text-black">
        <button className="border-b-2 border-black pb-1 text-2xl font-medium cursor-pointer">
          All technologies we work with →
        </button>
      </div>
    </section>
  );
}