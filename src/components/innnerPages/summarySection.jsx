export default function SummarySection() {
  return (
    <>
      <section className="py-24 px-6 max-w-6xl flex flex-col mx-auto ">
        <div className="flex flex-col gap-20 items-center">
          {/* TOP GRID */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
                The summary<span className="text-orange-500">.</span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                When launching Android TV, Google trusted us to deliver
                stand-alone and integrated testing services. We ensured the
                interface met Google’s user expectations, fixed bugs, and
                improved user experience during the rollout.
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                alt="Google"
                className="w-44 opacity-90"
              />
            </div>
          </div>

          {/* STATS */}
          <div className="flex justify-center gap-20 mt-20">
            {/* ITEM 1 */}
            <div className="text-center">
              {/* DOUBLE CIRCLE */}
              <div className="relative w-66 h-66 flex items-center justify-center">
                {/* OUTER */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-300"></div>

                {/* INNER */}
                <div className="absolute inset-3 rounded-full border-2 border-dashed border-gray-300"></div>

                {/* NUMBER */}
                <span className="text-orange-500 text-[4rem] font-semibold">
                  20
                </span>
              </div>

              <p className="mt-6 text-gray-700 text-3xl font-[700]">
                Team size
              </p>
            </div>

            {/* ITEM 2 */}
            <div className="text-center">
              <div className="relative w-66 h-66 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-300"></div>
                <div className="absolute inset-3 rounded-full border-2 border-dashed border-gray-300"></div>

                <div className="flex flex-col items-center">
                  <span className="text-orange-500 text-[4rem] font-semibold">
                    4
                  </span>
                  <span className="text-black font-semibold text-3xl mt-1">
                    years
                  </span>
                </div>
              </div>

              <p className="mt-6 text-gray-700 text-3xl  font-[700] max-w-[100px] flex items-center justify-center mx-auto">
                Engagement length
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-16 bg-[#ececec] rounded-2xl px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* LEFT */}
          <div>
            <p className="text-gray-500 text-sm mb-3">Main technologies used</p>

            <div className="flex flex-wrap gap-3">
              {["Python", "JavaScript", "Java"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white rounded-full text-sm text-gray-700 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <p className="text-gray-500 text-sm mb-3">Engagement model</p>

            <span className="px-4 py-2 bg-white rounded-full text-sm text-gray-700 shadow-sm">
              Staff augmentation
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
