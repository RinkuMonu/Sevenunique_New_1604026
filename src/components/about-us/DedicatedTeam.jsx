import Image from "next/image";

const teamMembers = [
  {
    name: "Rajyawardhan Singh",
    role: "Backend Developer",
    image: "/team/team4.jpg",
  },

    {
    name: "Rinku Yadav",
    role: "Server Admin",
    image: "/team/team6.jpg",
  },



    {
    name: "Devika Chhipa",
    role: "Frontend Developer",
    image: "/team/team2.jpg",
  },

  {
    name: "Khyati Jain",
    role: "UI/UX Designer",
    image: "/team/team1.jpg",
  },


  {
    name: "Rahul Singh",
    role: "Backend Developer",
    image: "/team/team4.jpg",
  },
  


  {
    name: "Deepak",
    role: "Mobile App Developer",
    image: "/team/team8.jpg",
  },
  {
    name: "Vishal Prajapat",
    role: "Data Analyst & Social Media Manager",
    image: "/team/team9.jpg",
  },
  {
    name: "Deepak",
    role: "Vedio Editor",
    image: "/team/team10.jpg",
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group border border-gray-100 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden bg-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
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
