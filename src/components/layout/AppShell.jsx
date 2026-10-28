"use client";

import { usePathname } from "next/navigation";
import Header from "@/app/Header";
import Footer from "@/components/Footer";
import ChatBot from "@/components/Chatbot";
import CookieConsent from "@/components/CookieConsent";
import WhatsAppChat from "@/components/Whatsappchatbot";

export default function AppShell({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <main className="flex-1">{children}</main>;
  }

  return (
    <>
      <Header />
      <CookieConsent />
      <main className="flex-1">{children}</main>
      <Footer />
      <ChatBot />
      <WhatsAppChat />
    </>
  );
}
