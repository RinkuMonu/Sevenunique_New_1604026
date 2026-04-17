export default function FeaturedSection() {
  return (
    <section className="bg-[#f3f3f3] py-16 px-6">
      <div className="max-w-5xl mx-auto bg-[#4b5863] text-white rounded-2xl overflow-hidden">
        
        {/* TOP BAR */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <p className="text-sm text-white/70">As featured in...</p>
          <div className="flex gap-6 text-white/80">
            <span>CNBC</span>
            <span>Forbes</span>
            <span>INSIDER</span>
            <span>Bloomberg</span>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex items-center gap-10 px-6 py-10">
          
          {/* LEFT */}
          <div className="text-2xl font-serif">
            FINANCIAL TIMES
          </div>

          {/* RIGHT */}
          <p className="text-white/80 max-w-xl leading-relaxed">
            We were recognized by Financial Times in the America's Fastest-growing Companies list of 2024, showcasing significant revenue growth between 2019 and 2022.
          </p>

        </div>

        {/* BOTTOM */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-white/10 text-sm">
          <button>← Previous</button>

          <div className="flex gap-2">
            <span className="w-2 h-2 bg-white/50 rounded-full"></span>
            <span className="w-2 h-2 bg-white/20 rounded-full"></span>
            <span className="w-2 h-2 bg-white/20 rounded-full"></span>
          </div>

          <button>Next →</button>
        </div>

      </div>
    </section>
  );
}