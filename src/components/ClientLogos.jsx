const clients = [
  "Google",
  "Pinterest",
  "Rolls-Royce",
  "Urban Outfitters",
  "IQVIA",
  "NextRoll",
];

export default function ClientLogos() {
  return (
    <div className="bg-[#f7f7f5] border-b border-[#e5e5e0] px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-xs font-medium text-[#6b6b67] uppercase tracking-widest mb-6">
          500+ companies rely on our top 1% talent to scale their dev teams
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
          {clients.map((client) => (
            <div
              key={client}
              className="bg-black/[0.06] rounded-lg px-5 py-2 text-[13px] font-semibold text-[#6b6b67] tracking-wide"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}