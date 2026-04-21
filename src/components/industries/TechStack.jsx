// components/TechStack.jsx

export default function TechStack() {
  const row1 = ["Node.js", "Java", "React", ".NET", "Python", "C#", "Rails"];
  const row2 = ["Angular", "PHP", "Android", "iOS", "Golang", "Vue.js", "C++"];

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
<div className="overflow-hidden whitespace-nowrap mb-8 group">
  <div className="flex gap-16 animate-marquee group-hover:[animation-play-state:paused] cursor-pointer">
    {[...row1, ...row1].map((item, i) => (
      <span
        key={i}
        className="text-6xl md:text-7xl font-semibold text-gray-300 hover:text-orange-500 transition"
      >
        {item}
      </span>
    ))}
  </div>
</div>

{/* ROW 2 */}
<div className="overflow-hidden whitespace-nowrap group">
  <div className="flex gap-16 animate-marquee-reverse group-hover:[animation-play-state:paused] cursor-pointer">
    {[...row2, ...row2].map((item, i) => (
      <span
        key={i}
        className="text-6xl md:text-7xl font-semibold text-gray-300 hover:text-orange-500 transition"
      >
        {item}
      </span>
    ))}
  </div>
</div>

   <div className="text-center mt-12 text-black">
  <button className="group border-b-2 border-black pb-1 text-2xl font-medium flex items-center gap-2 mx-auto cursor-pointer">
    

    <span className="transition-transform duration-300 group-hover:translate-x-2">
    All technologies we work with  →
    </span>

  </button>
</div>
    </section>
  );
}