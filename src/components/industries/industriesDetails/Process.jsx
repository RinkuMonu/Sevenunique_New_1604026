export default function Process() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-16">
      <h2 className="text-[28px] font-semibold mb-10">
        Our process. Simple, seamless, streamlined.
      </h2>

      <div className="grid grid-cols-2 gap-10 items-center">
        
        <div className="w-full h-[260px] bg-gray-200 rounded-md" />

        <div className="space-y-6">
          {["Discuss your requirements", "Conceptualize and design", "Get to work"].map((step, i) => (
            <div key={i} className="flex gap-4">
              <span className="text-orange-500 font-bold text-lg">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h4 className="font-semibold text-[16px]">{step}</h4>
                <p className="text-gray-600 text-[14px]">
                  Short explanation of this step in process.
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}