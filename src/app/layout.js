import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/layout/AppShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  metadataBase: new URL("https://sevenunique.com"),

  title: {
    default: "SevenUnique Tech Solutions | Custom Software, AI & Fintech Engineering",
    template: "%s | SevenUnique",
  },

  description:
    "Leading fintech and software engineering firm specializing in custom AI, enterprise applications, digital payment rails, and cloud infrastructure.",

  alternates: {
    canonical: "https://sevenunique.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "oPj-lQulH5rMXXLnWlJ4WP3rDrOsiS-hsmsmI2-Lbe4",
  },

  openGraph: {
    title: "SevenUnique Tech Solutions Pvt. Ltd.",
    description:
      "Leading fintech and IT solutions provider specializing in AI, software development, digital payments, and enterprise solutions.",
    url: "https://sevenunique.com",
    siteName: "SevenUnique",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "SevenUnique Tech Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SevenUnique Tech Solutions Pvt. Ltd.",
    description:
      "Leading fintech and IT solutions provider specializing in AI and custom software.",
    images: ["/og-image.jpeg"],
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SevenUnique Tech Solutions Pvt. Ltd.",
    alternateName: "SevenUnique",
    url: "https://sevenunique.com",
    logo: "https://sevenunique.com/images/logo-2.png",
    image: "https://sevenunique.com/og-image.jpeg",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-8741886688",
      contactType: "customer service",
      areaServed: "Worldwide",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [
      "https://www.linkedin.com/company/sevenuniquetech",
      "https://x.com/sevenuniqu42041",
      "https://www.facebook.com/people/SevenUnique-Tech-Solutions-Pvtltd/61556669918427/",
      "https://www.instagram.com/sevenuniquetech/",
    ],
  };

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
    {/* Browser extensions can inject attributes on body before React hydrates. */}
    <body className="min-h-screen flex flex-col" suppressHydrationWarning>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(organizationSchema),
    }}
  />

  <AppShell>
    {children}
  </AppShell>
</body>
    </html>
  );
}
