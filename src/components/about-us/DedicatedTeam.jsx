import Image from "next/image";

const teamMembers = [
  {
    name: "Rajyawardhan Singh",
    role: "Backend Developer",
    image: "/images/rajyawardhan.png",
  },

  {
    name: "Rinku Yadav",
    role: "Server Admin",
    image: "/images/rinkusir.png",
  },

  {
    name: "Devika Chhipa",
    role: "Frontend Developer",
    image: "/images/devika.png",
  },

  {
    name: "Khyati Jain",
    role: "UI/UX Designer",
    image: "/images/khyati.PNG",
  },

  {
    name: "Rahul Singh",
    role: "Backend Developer",
    image: "/images/rahul.png",
  },

  {
    name: "Chandan Sharma",
    role: "SEO Specialist",
    image: "/images/chandansir.png",
  },

  {
    name: "Deepak Yadav",
    role: "Mobile App Developer",
    image: "/team/team8.jpg",
  },
  {
    name: "Vishal Prajapat",
    role: "Data Analyst & Social Media Manager",
    image: "/images/vishal.png",
  },
  {
    name: "Deepak Kumar",
    role: "Vedio Editor",
    image: "/images/deepakkumar.png",
  },
  {
    name: "Mumtaz Fatima",
    role: "Graphic Designer",
    image: "/team/team10.jpg",
  },
  {
    name: "Jai Bhavsar",
    role: "Frontent Developer",
    image: "/images/jai.png",
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

          <h2 className="mt-5 text-[42px] font-semibold text-[#111827]">
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
              className="group border border-gray-100 rounded-3xl overflow-hidden hover:shadow-3xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
             <div className="h-80 bg-gray-100 flex items-center justify-center px-4 pt-5 overflow-hidden">
  <div className="relative w-full h-full">
    <Image
      src={member.image}
      alt={member.name}
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-105"
    />
  </div>
</div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#111827]">
                  {member.name}
                </h3>

                <div className="w-10 h-[2px] bg-[#f66135] mx-auto my-3 rounded-full" />

                <p className="text-sm font-medium text-[#f66135]">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
