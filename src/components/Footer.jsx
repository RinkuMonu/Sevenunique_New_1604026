import Link from "next/link";

const footerLinks = {
  Services: [
    { label: "Staff Augmentation", href: "/staff-augmentation" },
    { label: "Dedicated Teams", href: "/software-development-services/software-dedicated-team" },
    { label: "Software Outsourcing", href: "/software-development-services/software-outsourcing" },
    { label: "AI Development", href: "/technologies/ai" },
    { label: "Mobile Apps", href: "/solutions/mobile-app" },
    { label: "Web Development", href: "/solutions/web-development" },
  ],
  Technologies: [
    { label: "React", href: "/technologies/react" },
    { label: "Python", href: "/technologies/python" },
    { label: "Node.js", href: "/technologies/nodejs" },
    { label: "AWS", href: "/technologies/aws" },
    { label: "Java", href: "/technologies/java" },
    { label: "TypeScript", href: "/technologies/typescript" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Leadership Team", href: "/about/leadership-team" },
    { label: "Awards & Recognitions", href: "/awards-recognitions" },
    { label: "Press", href: "/press" },
    { label: "Careers", href: "/join-us" },
    { label: "Contact Us", href: "/contact-us" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0b] px-6 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        {/* Top */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-[#f4622a] rounded-[6px] flex items-center justify-center">
                <span className="text-white font-bold text-[13px] tracking-tight">BD</span>
              </div>
              <span className="text-white font-medium text-[17px] tracking-tight">BairesDev</span>
            </Link>
            <p className="text-white/40 text-[13px] leading-relaxed max-w-[260px]">
              Nearshore software development and staff augmentation since 2009.
              Top 1% tech talent, timezone-aligned with your team.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-white/90 text-[12px] font-medium uppercase tracking-widest mb-4">
                {group}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/40 hover:text-white/80 text-[13px] transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-[12px]">
            © {new Date().getFullYear()} BairesDev LLC. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="text-white/30 hover:text-white/60 text-[12px] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/30 hover:text-white/60 text-[12px] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}