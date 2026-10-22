import Image from "next/image";

export default function ArticleCard({
  title,
  author,
  readTime,
  img,
  featured = false,
}) {
  return (
    <a href="/blogDetails" className="group flex flex-col cursor-pointer">
      <div
        className={`w-full aspect-[16/9] rounded-lg mb-3 flex items-center justify-center overflow-hidden flex-shrink-0  ${featured ? "border-4 border-[#F04E23]" : ""}`}
      >
        <Image
          src={img}
          alt={title}
          width={400}
          height={225}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col flex-1">
        <h3 className="text-lg tracking-wide font-semibold text-gray-900 leading-snug mb-3 group-hover:underline transition-colors line-clamp-3">
          {title}
        </h3>
        <div className="flex items-center gap-2 mt-auto">
          <Image
            src="https://assets.bairesdev.com/image/upload/f_auto,q_auto/www/blog/authors/AlessandroBaggio_1760447156"
            alt={author}
            width={28}
            height={28}
            loading="eager"
            className="w-9 h-9 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden"
          />
          <div className="flex justify-between items-center w-full  text-gray-500 p-4">
            <span className="text-md text-gray-500">By {author}</span>
            <span className="text-xs text-gray-400">{readTime} min read</span>
          </div>
        </div>
      </div>
    </a>
  );
}
