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
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
        Why Sevenunique?

          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-8">
            At Sevenunique, we don’t just deliver work, we push boundaries and redefine what’s possible. 

We’re a global, diverse team powered by the Top 1%. We support each other to think bigger, move faster, and grow continuously. We enjoy solving problems, learning, sharing wins, and improving every day. Along the way, we work from anywhere, travel, have fun, and build real connections.
If you’re looking for a place to grow your skills and turn bold ideas into real impact, this is the right place.

          </p>
          <Image
            src="https://assets.bairesdev.com//image/upload/c_limit,w_1920/dpr_auto/f_auto/q_auto/v1/www/core/joinus_why-baires-dev_frrxg7?_a=BAVAfVDW0"
            width={500}
            height={600}
            className="object-cover "
            priority
            alt="img"
          />
        </div>
        <div className="rounded-lg aspect-video flex items-center justify-center">
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
      </div>

      {/* Image section below */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 relative"></div> */}
    </section>
  );
}
