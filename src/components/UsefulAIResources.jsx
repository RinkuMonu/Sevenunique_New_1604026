"use client";

const resources = [
  { label: "Hire AI Developers", href: "/hire-ai-developers" },
  { label: "Outsource AI Development", href: "/outsource-ai-development" },
];

const articles = [
  {
    id: 1,
    title:
      "Automating Quality Assurance: Essential Strategies for Growth Without Sacrificing Stability",
    description:
      "Discover key strategies to improve software reliability throughout development. Enhance quality and performance—read the article for actionable insights.",
    image: "/logos/photo1.png",
    href: "/blog/automating-quality-assurance",
  },
  {
    id: 2,
    title:
      "The CTO's Guide to Choosing the Right Tech Stack for Long-Term Success",
    description:
      "Discover best practices and strategies for building robust backend architecture. Enhance your development skills and optimize your systems—read more now!",
    image: "/logos/photo2.png",
    href: "/blog/cto-guide-tech-stack",
  },
  {
    id: 3,
    title:
      "Technical Debt: The Silent Killer of Product Velocity & How to Manage It",
    description:
      "Explore how to identify, manage, and reduce technical debt in software development. Improve your projects and streamline your processes—read the guide now!",
    image: "/logos/photo3.png",
    href: "/blog/technical-debt",
  },
  {
    id: 4,
    title:
      "Private Blockchains for IoT: Cutting Risks, Costs, and Complexity in Smart Networks",
    description:
      "Smart devices collect more data than you think, and cloud networks aren't keeping up. Private blockchains provide stronger security, better reliability, and lower costs without the headaches.",
    image: "/logos/photo4.png",
    href: "/blog/private-blockchains-iot",
  },
];

export default function UsefulAIResources() {
  return (
    <section className="useful-ai-resources">
      {/* Section Label */}
      <p className="section-label">USEFUL AI RESOURCES</p>

      <div className="content-wrapper">
        {/* Left Sidebar */}
        <aside className="sidebar">
          <h2 className="sidebar-title">
            AI resources<span className="dot">.</span>
          </h2>
          <ul className="resource-list">
            {resources.map((resource) => (
              <li key={resource.label} className="resource-item">
                <span className="bullet" />
                <a href={resource.href} className="resource-link">
                  {resource.label}
                </a>
                <svg
                  className="external-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </li>
            ))}
          </ul>
        </aside>

        {/* Right Articles Panel */}
        <div className="articles-panel">
          <h2 className="articles-title">
            Related articles<span className="dot">.</span>
          </h2>
          <div className="articles-list">
            {articles.map((article) => (
              <article key={article.id} className="article-card">
                <div className="article-image-wrapper">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="article-image"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://placehold.co/112x112/1a2744/4fc3f7?text=Article";
                    }}
                  />
                </div>
                <div className="article-body">
                  <h3 className="article-title">
                    <a href={article.href} className="article-title-link">
                      {article.title}
                    </a>
                  </h3>
                  <p className="article-description">{article.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .useful-ai-resources {
          background-color: #f3f4f6;
          padding: 32px 24px 48px;
          font-family: "Segoe UI", system-ui, sans-serif;
        }

        .section-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #6b7280;
          margin: 0 0 20px 0;
          text-transform: uppercase;
        }

        .content-wrapper {
          display: flex;
          gap: 24px;
          align-items: flex-start;
          max-width: 1200px;
        }

        /* ── Sidebar ── */
        .sidebar {
          background: #ffffff;
          border-radius: 8px;
          padding: 28px 24px;
          min-width: 220px;
          width: 220px;
          flex-shrink: 0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
        }

        .sidebar-title {
          font-size: 22px;
          font-weight: 800;
          color: #111827;
          margin: 0 0 24px 0;
          line-height: 1.2;
        }

        .dot {
          color: #e85d26;
        }

        .resource-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .resource-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .bullet {
          display: inline-block;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #d1d5db;
          flex-shrink: 0;
        }

        .resource-link {
          font-size: 13.5px;
          color: #374151;
          text-decoration: none;
          flex: 1;
          transition: color 0.15s;
        }

        .resource-link:hover {
          color: #e85d26;
        }

        .external-icon {
          width: 14px;
          height: 14px;
          color: #111827;
          flex-shrink: 0;
          transition: color 0.15s;
        }

        .resource-item:hover .external-icon {
          color: #e85d26;
        }

        /* ── Articles Panel ── */
        .articles-panel {
          background: #ffffff;
          border-radius: 8px;
          padding: 28px 32px;
          flex: 1;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
        }

        .articles-title {
          font-size: 22px;
          font-weight: 800;
          color: #111827;
          margin: 0 0 24px 0;
        }

        .articles-list {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .article-card {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        .article-image-wrapper {
          width: 112px;
          height: 112px;
          flex-shrink: 0;
          border-radius: 4px;
          overflow: hidden;
          background: #e5e7eb;
        }

        .article-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .article-body {
          flex: 1;
          padding-top: 4px;
        }

        .article-title {
          font-size: 15px;
          font-weight: 700;
          margin: 0 0 8px 0;
          line-height: 1.45;
        }

        .article-title-link {
          color: #111827;
          text-decoration: none;
          transition: color 0.15s;
        }

        .article-title-link:hover {
          color: #e85d26;
          text-decoration: underline;
        }

        .article-description {
          font-size: 13.5px;
          color: #4b5563;
          line-height: 1.6;
          margin: 0;
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .content-wrapper {
            flex-direction: column;
          }
          .sidebar {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
