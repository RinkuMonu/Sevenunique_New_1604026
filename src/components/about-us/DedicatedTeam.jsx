import Image from "next/image";

const teamMembers = [
  {
    name: "Rajyawardhan Singh",
    role: "Backend Developer",
    image: "/images/rajya-sir.png",
  },
  {
    name: "Devika Chhipa",
    role: "Sr. Frontend Developer",
    image: "/images/devika-chhipa.png",
  },
  {
    name: "Khyati Jain",
    role: "UI/UX Designer",
    image: "/images/khyati-2.png",
  },
  {
    name: "Rahul Singh",
    role: "Backend Developer",
    image: "/images/rahul-singh.png",
  },
  {
    name: "Chandan Sharma",
    role: "SEO Specialist",
    image: "/images/chandan-sir.png",
  },
 {
    name: "Vishal Prajapat",
    role: "Data Analyst & Social Media Manager",
    image: "/images/vishall.png",
  },
  {
    name: "Deepak Yadav",
    role: "Mobile App Developer",
    image: "/images/yadavdeepak.PNG",
  },
  {
    name: "Mohsin Khan",
    role: "Mobile App Developer",
    image: "/images/mohsin.PNG",
  },
 
  {
    name: "Deepak Kumar",
    role: "Video Editor",
    image: "/images/kumar-deepak.PNG",
  },
  {
    name: "Mumtaz Fatima",
    role: "Graphic Designer",
    image: "/images/fatima.png",
  },
  {
    name: "Jai Bhavsar",
    role: "Frontend Developer",
    image: "/images/jai-bhavsar.png", 
  },
   {
    name: "Sejal Gupta",
    role: "Jr. AI/ML Engineer",
    image: "/images/gupta-sejal.PNG", 
  },
  {
    name: "Kratika Sharma",
    role: "Jr. AI/ML Engineer",
    image: "/images/kratika-sharma.PNG", 
  },
   {
    name: "Rahul Jain",
    role: "Frontend Developer Intern",
    image: "/images/rahull-jain.PNG", 
  },
];

export default function DedicatedTeamMembers() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-orange-50 text-[#f66135] text-sm font-medium">
            Our Team
          </span>

          {/* Responsive UI update: section heading scales from phone to desktop. */}
          <h2 className="mt-5 text-3xl font-semibold text-[#111827] sm:text-4xl lg:text-[42px]">
            Our Dedicated Team
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Behind every successful project is a passionate team of designers,
            developers, testers, marketers, and strategists committed to
            delivering exceptional digital experiences.
          </p>
        </div>

        {/* Team Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
  {teamMembers.map((member, index) => (
    <div
      key={index}
     className="group relative overflow-hidden rounded-[28px]
bg-white
border border-[#F8E5DD]
transition-all duration-500
hover:-translate-y-2
hover:border-[#FFD0C0]
hover:shadow-[0_18px_45px_rgba(246,97,53,0.14)]"
    >
      {/* Top Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#f66135] via-[#ff946d] to-[#FFD9CC]" />

      {/* Image */}
      <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[#FFF2EC] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative h-80 overflow-hidden bg-[#FFF8F5]">
        <div className="relative h-full w-full overflow-hidden rounded-2xl">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Soft Orange Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#f66135]/15 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>
      </div>

      {/* Content */}
      <div className="bg-[#FFFDFC] px-6 py-7 text-center">
        <h3 className="text-xl font-bold text-gray-900 tracking-wide">
          {member.name}
        </h3>

        <div className="mx-auto my-4 h-[2px] w-12 rounded-full bg-[#FFD4C5]" />

        <span className="inline-flex rounded-full bg-[#FFF2EC] px-4 py-2 text-sm font-semibold text-[#f66135]">
          {member.role}
        </span>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
