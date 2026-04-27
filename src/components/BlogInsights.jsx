import Link from "next/link";

const posts = [
  {
    title: "From Simple to Complex: Tracing the History and Evolution of Artificial Intelligence",
    href: "/blog/history-of-ai",
    image:
      "https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&w=1200&q=80",
    alt: "Illustration of artificial intelligence concepts",
  },
  {
    title: "iOS App Design Guidelines for 2025",
    href: "/blog/history-of-ai",
    image:
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1200&q=80",
    alt: "Person using a tablet with app icons",
  },
  {
    title: "White Box Testing: Defining Techniques",
    href: "/blog/history-of-ai",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    alt: "Magnifying glass over a software testing concept",
  },
  
  
];

function SliderArrow({ direction = "left" }) {
  const isLeft = direction === "left";
  return (
    <button
      type="button"
      aria-label={isLeft ? "Previous insights" : "Next insights"}
      className="hidden lg:inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#e6e6e6] text-[#db6a43] transition-colors hover:bg-[#fff2ed]"
    >
      <span aria-hidden className="text-lg leading-none">
        {isLeft ? "←" : "→"}
      </span>
    </button>
  );
}

export default function BlogInsights() {
  return (
    <section className="bg-[#f7f7f8] px-6 py-14 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-[34px] sm:text-[40px] font-semibold leading-[1.1] tracking-tight text-[#1b1b1b]">
            Our latest insights.
          </h2>
          <Link
            href="/blog"
            className="inline-flex w-fit items-center gap-2 border-b border-[#1f1f1f] pb-1 text-[14px] font-medium text-[#1f1f1f] transition-colors hover:text-[#db6a43] hover:border-[#db6a43]"
          >
            Over 1,100 articles on technology and talent
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <SliderArrow direction="left" />
          <div className="grid flex-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.title} className="min-w-0">
                <Link href={post.href} className="group block">
                  <div className="overflow-hidden rounded-[18px]">
                    <img src={post.image} alt={post.alt} className="h-[170px] w-full object-cover transition-transform duration-200 group-hover:scale-[1.02]" />
                  </div>
                  <h3 className="mt-4 text-[25px] font-semibold leading-[1.15] tracking-tight text-[#1b1b1b] group-hover:underline">
                    {post.title}
                  </h3>
                  <p className="mt-4 inline-flex items-center gap-2 text-[16px] font-medium text-[#4b4b51]">
                    <span aria-hidden className="text-[#f3672a] text-lg">
                      ◗◖
                    </span>
                    By Sevenunique Editorial Team
                  </p>
                </Link>
              </article>
            ))}
          </div>
          <SliderArrow direction="right" />
        </div>
      </div>
    </section>
  );
}
