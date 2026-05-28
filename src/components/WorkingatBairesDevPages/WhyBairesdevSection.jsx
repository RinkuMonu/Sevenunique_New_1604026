import { CircleCheck as CheckCircle } from "lucide-react";
import Image from "next/image";

export default function WhyBairesdevSection() {
  const features = [
  {
    title: "Work From Anywhere",
    description:
      "Choose your workspace and work remotely even as a digital nomad.",
  },
  {
    title: "Diverse Network",
    description:
      "Connect with 4,000+ professionals across 50+ countries.",
  },
  {
    title: "Team Up with the Best",
    description:
      "Collaborate with the top 1% of talent in your field.",
  },
  {
    title: "Upskill Avenues",
    description:
      "Grow through mentorship, training, and learning programs.",
  },
  {
    title: "Flexible Schedules",
    description:
      "Enjoy the freedom to set your own working hours.",
  },
  {
    title: "Growth Possibilities",
    description:
      "Advance your career as the company grows, just like many leaders here.",
  },
  {
    title: "Vacations & Holidays",
    description:
      "Get 2 weeks of paid vacation plus all local holidays off.",
  },
  {
    title: "Innovative Global Projects",
    description:
      "Work on impactful tech solutions across 100+ industries.",
  },
   {
    title: "Top-Notch Tools",
    description:
      "Access the latest hardware and software to support your work.",
  },
   {
    title: "Life Moments Covered",
    description:
      "Take time off for important life events like moving, marriage, parenthood, and more.",
  },
];
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 md:py-24 ">
      <div className="flex md:grid-cols-2 ">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
        Why Sevenunique?

          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-8">
          At Sevenunique, we believe in creating more than just digital products — we build impactful solutions that help businesses grow and succeed. Our team is made up of passionate developers, designers, and innovators who work together to deliver high-quality, scalable, and future-ready technology solutions.<br />
We focus on creativity, collaboration, and continuous improvement, ensuring every project is built with precision, modern technology, and a user-first approach. Whether it’s web development, mobile applications, cloud solutions, or custom software, we are committed to turning ideas into meaningful digital experiences.<br />
At the core of Sevenunique is a simple vision: to help businesses move faster, scale smarter, and achieve long-term success through technology.

          </p>
         <div className="rounded-lg mt-8 flex items-center justify-center">
           <Image
            src="/images/workingp2.png"
            width={500}
            height={600}
            className="object-cover rounded-lg shadow-lg"
            priority
            alt="img"
          />
         </div>
        </div>
       
      </div>
 <div className="rounded-lg mt-8 flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex gap-4">
                <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      {/* Image section below */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 relative"></div> */}
    </section>
  );
}
