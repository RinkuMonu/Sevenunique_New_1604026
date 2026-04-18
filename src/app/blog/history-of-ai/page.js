import Link from "next/link";
import { FiCalendar, FiClock } from "react-icons/fi";
import { FaLinkedinIn, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

const expertiseTags = [
  "Dedicated Software Development Teams",
  "Software Development Outsourcing",
  "Software Development Services",
  "Staff Augmentation",
];

const articleSections = [
  {
    title: "Early Beginnings of AI",
    paragraphs: [
      "The artificial intelligence of today has origins in the theoretical foundations of both logic and mathematics.",
    ],
  },
  {
    title: "Theoretical Foundations in Mathematics and Logic",
    paragraphs: [
      "The theoretical foundations of mathematics and logic are also foundational principles for artificial intelligence development. Many philosophical discussions on the nature of machines and intelligence focused on whether machines had the ability to mimic human thought.",
      "Early work like Aristotle's syllogism set the groundwork for formal reasoning. Key ideas and figures like Gottlob Frege and George Boole set the stage for the AI of today through their principles of symbolic reasoning and computation.",
    ],
  },
  {
    title: "The Birth of Modern AI",
    paragraphs: [
      "Using these principles, modern experts in mathematics, logic, and computer science went on to create the blueprints and early building blocks for the AI of today.",
    ],
  },
];

function HiringCard() {
  const engineers = [
    { name: "Alejandro D.", role: "Sr. Full-stack Dev." },
    { name: "Gustavo A.", role: "Sr. QA Engineer" },
    { name: "Fiorella G.", role: "Sr. Data Scientist" },
  ];

  return (
    <aside className="rounded-md border border-[#d6dce6] bg-[#ecf1f8] p-5 shadow-sm">
      <h3 className="text-[35px] font-semibold leading-none text-[#111]">Hiring engineers?</h3>
      <p className="mt-3 text-[17px] leading-[1.55] text-[#2c2f36]">
        We provide nearshore tech talent to companies from startups to enterprises like Google and Rolls-Royce.
      </p>

      <div className="mt-5 space-y-2">
        {engineers.map((item) => (
          <div key={item.name} className="flex items-center gap-3 rounded-full bg-white px-3 py-2">
            <div className="h-8 w-8 rounded-full bg-[#c8d4e8]" />
            <div>
              <p className="text-[13px] font-medium leading-none text-[#111]">{item.name}</p>
              <p className="mt-1 text-[11px] leading-none text-[#4f5562]">{item.role}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 space-y-1 text-[16px]">
        <Link href="#" className="block underline underline-offset-2">
          About Us
        </Link>
        <Link href="#" className="block underline underline-offset-2">
          Our Services
        </Link>
        <Link href="#" className="block underline underline-offset-2">
          Our Clients
        </Link>
      </div>
    </aside>
  );
}

function QuoteCard() {
  return (
    <aside className="rounded-md border border-[#d7d7d7] bg-white shadow-sm">
      <div className="p-5">
        <p className="text-[44px] leading-none text-[#f25f2a]">“</p>
        <p className="mt-2 text-[37px] leading-[1.45] text-[#111]">
          BairesDev assembled a dream team for us and in just a few months our digital offering was completely transformed.
        </p>
        <div className="mt-6 flex items-center gap-3 rounded-md bg-[#faf7f7] p-3">
          <div className="h-8 w-8 rounded-full border border-[#ccc] flex items-center justify-center text-[16px]">R</div>
          <div>
            <p className="text-[14px] font-medium leading-none">VP Product Manager</p>
            <p className="mt-1 text-[12px] text-[#666] leading-none">Rolls-Royce</p>
          </div>
        </div>
      </div>
      <button type="button" className="w-full bg-[#111319] py-2 text-[15px] font-semibold text-white">
        Read Case Study
      </button>
    </aside>
  );
}

export default function BlogDetailPage() {
  return (
    <div className="bg-[#f7f7f8]">
      <div className="h-1 w-full bg-gradient-to-r from-[#f16537] via-[#f16537] to-transparent" />
      <div className="mx-auto max-w-[1280px] px-5 py-7 lg:px-8">
        <div className="grid gap-9 lg:grid-cols-[1fr_290px]">
          <article>
            <div className="text-[13px] text-[#4d535f]">
              <span>⌂</span>
              <span className="mx-2">›</span>
              <span>Blog</span>
              <span className="mx-2">›</span>
              <span>Software Development</span>
              <span className="mx-2">›</span>
              <span className="font-semibold text-[#1a1f2a]">
                From Simple to Complex: Tracing the History and Evolution of Artificial Intelligence
              </span>
            </div>

            <h1 className="mt-10 max-w-[940px] text-[61px] font-semibold leading-[1.08] tracking-tight text-[#111319]">
              From Simple to Complex: Tracing the History and Evolution of Artificial Intelligence
            </h1>
            <p className="mt-5 max-w-[980px] text-[35px] leading-[1.45] text-[#30343d]">
              Explore the fascinating history of AI and its algorithms from basic models to complex systems,
              transforming the landscape of artificial intelligence.
            </p>

            <div className="mt-7 flex flex-wrap gap-8 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#5d6470]">
              <p className="inline-flex items-center gap-2">
                <FiCalendar className="text-[15px]" />
                Last Updated: February 24th 2025
              </p>
              <p className="inline-flex items-center gap-2">
                <FiClock className="text-[15px]" /> 15 min read
              </p>
            </div>

            <div className="mt-10 rounded-md bg-[#eceef1] p-5 sm:p-8">
              <div className="flex flex-wrap gap-5 sm:items-start">
                <div className="text-[74px] leading-none text-[#f26431]">◗◖</div>
                <div>
                  <h2 className="text-[46px] font-semibold leading-tight">
                    By <span className="underline">BairesDev Editorial Team</span>
                  </h2>
                  <div className="mt-2 flex items-center gap-3 text-[#4f5968]">
                    <FaLinkedinIn />
                    <FaXTwitter />
                    <FaFacebookF />
                    <HiOutlineMail />
                  </div>
                </div>
              </div>

              <p className="mt-6 text-[16px] leading-[1.7] text-[#3f4450]">
                Founded in 2009, BairesDev is the leading nearshore technology solutions company, with 4,000+
                professionals in more than 50 countries, representing the top 1% of tech talent. The company's goal is
                to create lasting value throughout the entire digital transformation journey.
              </p>

              <p className="mt-5 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#454b57]">Expertise</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {expertiseTags.map((tag) => (
                  <span key={tag} className="rounded-full border border-[#c7cbd2] bg-white px-3 py-1 text-[12px] text-[#3b404a]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <img
              src="https://assets.bairesdev.com/image/upload/f_auto,q_auto/v1/www/legacy/blog-images/From-Simple-to-Complex_-Tracing-the-History-and-Evolution-of-Artificial-Intelligence-1.webp"
              alt="Artificial intelligence concepts illustration"
              className="mt-8 w-full rounded-[2px] object-cover"
            />

            <div className="mt-7 flex items-center gap-4">
              <div className="h-10 w-10 rounded-lg bg-[#071f4e] text-white grid place-items-center">✦</div>
              <button
                type="button"
                className="flex-1 rounded-md border border-[#d8d8d8] bg-white px-4 py-3 text-left text-[14px] text-[#111]"
              >
                Article Contents
              </button>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[52px_1fr]">
              <div className="hidden lg:flex flex-col items-center gap-3 pt-2">
                <button className="h-8 w-8 rounded-full border border-[#c8ccd3] text-[#1b1f2a] grid place-items-center">
                  <FaFacebookF size={12} />
                </button>
                <button className="h-8 w-8 rounded-full border border-[#c8ccd3] text-[#1b1f2a] grid place-items-center">
                  <FaLinkedinIn size={12} />
                </button>
                <button className="h-8 w-8 rounded-full border border-[#c8ccd3] text-[#1b1f2a] grid place-items-center">
                  <FaXTwitter size={12} />
                </button>
                <button className="h-8 w-8 rounded-full border border-[#c8ccd3] text-[#1b1f2a] grid place-items-center">
                  <FaWhatsapp size={12} />
                </button>
                <button className="h-8 w-8 rounded-full border border-[#c8ccd3] text-[#1b1f2a] grid place-items-center">
                  <HiOutlineMail size={12} />
                </button>
              </div>

              <div>
                <p className="text-[17px] leading-[1.9] text-[#1c212b]">
                  The <Link href="#" className="underline">artificial intelligence</Link> boom of the last few years set
                  the world ablaze with possibilities ranging from massive data set processing to computer-generated and
                  controversial “art.” Now, many people use AI technology as part of their daily lives or in their jobs.
                </p>
                <p className="mt-7 text-[17px] leading-[1.9] text-[#1c212b]">
                  The broad term “artificial intelligence” refers to the simulation of human-level intelligence and
                  thinking through the use of machines. It encompasses technologies and concepts like machine learning,
                  natural language processing, computer vision, and robotics. An AI system can analyze and learn from
                  data and use the information to make intelligent decisions. AI models continue to revolutionize many
                  types of businesses and industries, including finance, transportation, and healthcare.
                </p>
                <p className="mt-7 text-[17px] leading-[1.9] text-[#1c212b]">
                  Although it’s the top buzzword of the tech industry right now, most people don’t know how AI got to
                  this point or its possibilities for the future. To truly understand this technology, let’s start at
                  the beginning. Here, we’ll trace the history of artificial intelligence from its humble origins to its
                  impact today—and where it’s headed.
                </p>

                {articleSections.map((section) => (
                  <section key={section.title} className="mt-10">
                    <h2 className="text-[46px] font-semibold leading-[1.2] text-[#111319]">{section.title}</h2>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 30)} className="mt-5 text-[17px] leading-[1.9] text-[#1c212b]">
                        {paragraph}
                      </p>
                    ))}
                  </section>
                ))}
              </div>
            </div>
          </article>

          <div className="space-y-7">
            <div className="lg:sticky lg:top-24">
              <HiringCard />
              <div className="mt-7">
                <QuoteCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
