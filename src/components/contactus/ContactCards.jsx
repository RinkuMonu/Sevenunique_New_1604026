// components/ContactCards.jsx

import Link from "next/link";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaPhone,
} from "react-icons/fa";

export default function ContactCards() {
  const cards = [
    {
      title: "Discuss Our Services",
      desc: "Looking to outsource your software development? Discuss your needs with one of our reps.",
      btn: "Book A Call",
      link: "/schedule-a-call-page",
      highlight: true,
    },
    {
      title: "Careers at BairesDev",
      desc: "Shape the future of tech in a dynamic company with over 4,000 experts worldwide.",
      btn: "View Job Openings",
      link: "/schedule-a-call-page",
    },
    {
      title: "Press and Media",
      desc: "For enquiries related to speaking engagements, quotes, company history, and articles.",
      btn: "Contact Press",
      link: "/schedule-a-call-page",
    },
    {
      title: "General Inquiries",
      desc: "Any other queries or support needs",
      btn: "Fill Contact Form",
      link: "/schedule-a-call-page",
    },
  ];

  return (
    <section className="bg-[#f5f7fa] py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-white border rounded-2xl p-6 flex flex-col justify-between min-h-[260px] shadow-sm"
          >
            <div>
              <h3
                className={`text-lg font-semibold mb-3 ${card.highlight ? "text-orange-500" : "text-black"
                  }`}
              >
                {card.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>

            <Link
              href={card.link}
              className="mt-6 bg-black text-white px-5 py-3 rounded-lg w-fit hover:bg-gray-800 transition inline-block"
            >
              {card.btn}
            </Link>
          </div>
        ))}
      </div>

      {/* Bottom row */}
      <div className="max-w-7xl mx-auto px-6 mt-12 flex flex-col md:flex-row items-center gap-6 text-black">

        {/* Call Us */}
        <div>
          <h4 className="font-bold text-2xl">Call Us</h4>
          <div className="flex items-center gap-2 text-gray-600 mt-2">
            <FaPhone size={22} />
            <span>0141-4511098</span>
          </div>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="font-bold text-2xl">Follow Us</h4>

          <div className="flex gap-4 mt-4 text-gray-700">

            <a
              href="https://www.linkedin.com/company/sevenuniquetech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={22}
                className="cursor-pointer hover:text-black transition"
              />
            </a>

            <a
              href="https://www.facebook.com/Sevenuniquetech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                size={22}
                className="cursor-pointer hover:text-black transition"
              />
            </a>

            <a
              href="https://x.com/Sevenuniqu42041"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter
                size={22}
                className="cursor-pointer hover:text-black transition"
              />
            </a>

            <a
              href="https://www.instagram.com/sevenuniquetech/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={22}
                className="cursor-pointer hover:text-black transition"
              />
            </a>

          </div>
        </div>
      </div>
    </section>  
  );
}