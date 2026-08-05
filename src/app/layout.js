import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/Header";
import Footer from "@/components/Footer";
import ChatBot from "@/components/Chatbot";
import CookieConsent from "@/components/CookieConsent";
import WhatsAppChat from "@/components/Whatsappchatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.sevenunique.com"),

    openGraph: {
    title: "SevenUnique Tech Solutions Pvt. Ltd.",
    description:
      "Leading fintech and IT solutions provider specializing in AI, software development, digital payments, and enterprise solutions.",
    url: "https://www.sevenunique.com",
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
      "Leading fintech and IT solutions provider.",
    images: ["/og-image.jpeg"],
  },
};

export default function RootLayout({ children }) {

  const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SevenUnique Tech Solutions Pvt. Ltd.",
  url: "https://www.sevenunique.com",
  logo: "https://www.sevenunique.com/images/logo-2.png",
  image: "https://www.sevenunique.com/og-image.jpeg",
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

  <Header />

  <CookieConsent />

  <main className="flex-1">
    {children}
  </main>

  <Footer />
  <ChatBot />
  <WhatsAppChat />
</body>
    </html>
  );
}
