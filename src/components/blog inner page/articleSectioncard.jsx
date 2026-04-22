import { ArrowRight } from "lucide-react";
import ArticleCard from "./articlecard";

export default function ArticleSection({ category, linkLabel, articles }) {
  return (
    <section className="py-10 border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xs font-bold text-gray-900 uppercase tracking-widest">
            {category}
          </h2>
          <a
            href="#"
            className="flex items-center gap-1 text-xs font-semibold text-gray-700 hover:text-[#F04E23] transition-colors whitespace-nowrap tracking-wide"
          >
            {linkLabel}
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, idx) => (
            <ArticleCard key={idx} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
}
