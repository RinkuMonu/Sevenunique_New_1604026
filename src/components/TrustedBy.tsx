// SVG logos for each company — inline for zero external dependency

function NextRollLogo() {
  return (
    <svg viewBox="0 0 120 32" className="h-6 fill-white" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="24" fontSize="20" fontWeight="700" fontFamily="Manrope, sans-serif" fill="white">
        .O NextRoll
      </text>
    </svg>
  );
}

const companies = [
  {
    name: "NextRoll",
    logo: (
      <div className="flex items-center gap-2 text-white font-bold text-lg">
        <svg viewBox="0 0 20 20" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="9" stroke="white" strokeWidth="2" fill="none" />
          <circle cx="10" cy="10" r="3" fill="white" />
        </svg>
        <span className="font-extrabold tracking-tight">NextRoll</span>
        <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="#f05a22" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="9" />
          <polyline points="8 6 14 10 8 14" fill="#f05a22" stroke="#f05a22" />
        </svg>
      </div>
    ),
  },
  {
    name: "A-LIGN",
    logo: (
      <div className="flex items-center gap-2 text-white font-bold text-lg">
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="white" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
          <polygon points="12 2 22 20 2 20" />
        </svg>
        <span className="font-extrabold tracking-widest text-sm">A-LIGN</span>
        <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="#f05a22" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="9" />
          <polyline points="8 6 14 10 8 14" fill="#f05a22" stroke="#f05a22" />
        </svg>
      </div>
    ),
  },
  {
    name: "KEYSTONE",
    logo: (
      <div className="flex items-center gap-2 text-white font-bold">
        <div className="flex items-center justify-center w-7 h-7 border-2 border-white rounded font-black text-sm">
          K
        </div>
        <div>
          <div className="text-xs font-black tracking-widest leading-none">KEYSTONE</div>
          <div className="text-[10px] tracking-wider text-gray-400 leading-none">CUSTOM HOMES</div>
        </div>
        <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="#f05a22" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="9" />
          <polyline points="8 6 14 10 8 14" fill="#f05a22" stroke="#f05a22" />
        </svg>
      </div>
    ),
  },
  {
    name: "Google",
    logo: (
      <span className="text-white font-bold text-2xl tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
        Google
      </span>
    ),
  },
  {
    name: "Pinterest",
    logo: (
      <div className="flex items-center gap-2 text-white font-bold text-lg">
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
        </svg>
        <span className="font-semibold">Pinterest</span>
      </div>
    ),
  },
  {
    name: "Microsoft",
    logo: (
      <div className="flex items-center gap-2 text-white font-semibold text-lg">
        <svg viewBox="0 0 21 21" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="10" height="10" fill="#f35325" />
          <rect x="11" y="0" width="10" height="10" fill="#81bc06" />
          <rect x="0" y="11" width="10" height="10" fill="#05a6f0" />
          <rect x="11" y="11" width="10" height="10" fill="#ffba08" />
        </svg>
        <span>Microsoft</span>
      </div>
    ),
  },
];

export default function TrustedBy() {
  return (
    <section className="bg-[#1a1a1a] py-10 px-12">
      <p className="text-center text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-8">
        Trusted by CTOs at 1500+ companies:
      </p>
      <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
        {companies.map((c) => (
          <div key={c.name} className="flex items-center">
            {c.logo}
          </div>
        ))}
      </div>
    </section>
  );
}
