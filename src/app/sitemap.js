import { allKnownServiceSlugs } from "./services/[slug]/serviceUnifiedData.js";
import { paymentSolutionSlugs } from "./payment-solutions/paymentData.js";

export default async function sitemap() {
  const baseUrl = "https://sevenunique.com";
  const now = new Date().toISOString();

  // 1. Core High-Priority Pages
  const staticRoutes = [
    { url: `${baseUrl}`, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/about-us`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/payment-solutions`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/our-work-page`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/technologies`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/industries`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/contact-us`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/schedule-a-call-page`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/jobOp`, lastModified: now, changeFrequency: "weekly", priority: 0.75 },
    { url: `${baseUrl}/awards`, lastModified: now, changeFrequency: "monthly", priority: 0.65 },
    { url: `${baseUrl}/certifications`, lastModified: now, changeFrequency: "monthly", priority: 0.65 },
    { url: `${baseUrl}/culture`, lastModified: now, changeFrequency: "monthly", priority: 0.65 },
    { url: `${baseUrl}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/termsAndCondition`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/cancellationpolicy`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/kycpolicy`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/apiterms`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/payment-solutions/connect-with-us`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
  ];

  // 2. All 29 Services
  const serviceRoutes = allKnownServiceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // 3. All 36+ Payment Solutions
  const paymentRoutes = paymentSolutionSlugs.map((slug) => ({
    url: `${baseUrl}/payment-solutions/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // 4. Blog Posts
  const blogSlugs = [
    "history-of-ai",
    "java-multithreading-for-engineering-leaders",
    "zero-trust-identity-first-security",
    "kubernetes-cost-optimization-guide",
  ];
  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...serviceRoutes, ...paymentRoutes, ...blogRoutes];
}
