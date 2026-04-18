export default function Benefits() {
  return (
    <section className="bg-[#fafafa] py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-[28px] font-semibold mb-10">
          Benefits of building bespoke solutions
        </h2>

        <div className="grid grid-cols-3 gap-8">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i}>
              <h3 className="font-semibold mb-2 text-[16px]">
                Benefit Title
              </h3>
              <p className="text-gray-600 text-[14px] leading-[22px]">
                Short description about benefit explaining value.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}