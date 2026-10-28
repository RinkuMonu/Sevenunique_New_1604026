"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  PenSquare,
  Sparkles,
  ExternalLink,
  Globe,
  LogOut,
  Menu,
  X,
  ChevronRight,
  ShieldCheck,
  Plus,
} from "lucide-react";
import { toast } from "sonner";
import { getSupabaseClient } from "@/lib/supabase/client";

export function AdminSidebar({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  // If on login page, render children without sidebar
  const isLoginPage = pathname === "/admin/login";

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll on mobile drawer open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleLogout = async () => {
    if (isLoggingOut) return;
    setIsLoggingOut(true);
    const toastId = toast.loading("Signing out...");
    try {
      const supabase = getSupabaseClient();
      if (supabase) {
        await supabase.auth.signOut();
      }
      document.cookie = "sb-token=; path=/; max-age=0";
      localStorage.removeItem("sevenunique_admin_session");
      toast.success("Signed out successfully", { id: toastId });
      router.push("/admin/login");
      router.refresh();
    } catch {
      toast.error("Logout failed", { id: toastId });
    } finally {
      setIsLoggingOut(false);
    }
  };

  if (isLoginPage) {
    return <>{children}</>;
  }

  const navItems = [
    {
      label: "Articles & Drafts",
      href: "/admin/blog",
      icon: LayoutDashboard,
      active: pathname === "/admin/blog",
    },
    {
      label: "Write New Post",
      href: "/admin/blog/new",
      icon: PenSquare,
      active: pathname === "/admin/blog/new",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col">
      {/* =========================================================================
          1. FIXED DESKTOP SIDEBAR (lg:flex)
         ========================================================================= */}
      <aside className="hidden lg:flex fixed inset-y-0 left-0 w-64 flex-col bg-white border-r border-slate-200 z-40 select-none shadow-xs">
        {/* Top Branding */}
        <div className="h-18 px-5 border-b border-slate-100 flex items-center justify-between">
          <Link href="/admin/blog" className="flex items-center gap-2">
            <Image
              src="/images/logo-2.png"
              alt="SevenUnique"
              width={140}
              height={36}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-orange-50 text-[#f4622a] border border-orange-200 text-[10px] font-bold uppercase tracking-wider">
            Admin
          </span>
        </div>

        {/* Primary CTA */}
        <div className="p-4 border-b border-slate-100">
          <Link
            href="/admin/blog/new"
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#f4622a] hover:bg-[#e0531e] text-white text-xs font-bold shadow-xs hover:shadow transition-all group cursor-pointer"
          >
            <Plus className="w-4 h-4 transition-transform group-hover:rotate-90 duration-200" />
            <span>Create Article</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
          {/* Main Group */}
          <div>
            <p className="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
              Management
            </p>
            <div className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                      item.active
                        ? "bg-[#f4622a]/10 text-[#f4622a] shadow-2xs font-bold"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon
                        className={`w-4 h-4 ${
                          item.active ? "text-[#f4622a]" : "text-slate-500"
                        }`}
                      />
                      <span>{item.label}</span>
                    </div>
                    {item.active && (
                      <div className="w-1.5 h-1.5 rounded-full bg-[#f4622a]" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* AI Tools */}
          <div>
            <p className="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
              AI Tools
            </p>
            <Link
              href="/admin/blog/new"
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-600 hover:text-purple-700 hover:bg-purple-50 transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-purple-600 transition-transform group-hover:scale-110" />
                <span className="font-semibold">AI Editorial Studio</span>
              </div>
            </Link>
          </div>

          {/* Public Website Links */}
          <div>
            <p className="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
              Live Website
            </p>
            <div className="space-y-1">
              <Link
                href="/blog"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-slate-500" />
                  <span>Live Blog Page</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </Link>
              <Link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Globe className="w-4 h-4 text-slate-500" />
                  <span>SevenUnique Home</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom User Profile & Logout */}
        <div className="p-3.5 border-t border-slate-100 bg-slate-50/50">
          <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="relative w-8 h-8 rounded-lg bg-[#f4622a] text-white flex items-center justify-center font-bold text-xs uppercase shrink-0">
                A
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-slate-900 truncate">SevenUnique Admin</p>
                <p className="text-[10px] text-slate-500 truncate font-mono">admin@sevenunique.com</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              title="Sign Out"
              className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer shrink-0"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* =========================================================================
          2. MOBILE TOP NAVBAR (< lg)
         ========================================================================= */}
      <header className="lg:hidden sticky top-0 z-30 h-16 bg-white border-b border-slate-200 px-4 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 -ml-1 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Open Sidebar"
          >
            <Menu className="w-5 h-5" />
          </button>
          <Link href="/admin/blog" className="flex items-center">
            <Image
              src="/images/logo-2.png"
              alt="SevenUnique"
              width={120}
              height={32}
              className="h-7 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/admin/blog/new"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f4622a] hover:bg-[#e0531e] text-white text-xs font-bold shadow-xs transition"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>New</span>
          </Link>
          <button
            onClick={handleLogout}
            title="Sign Out"
            className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* =========================================================================
          3. MOBILE SLIDE-OVER DRAWER (< lg)
         ========================================================================= */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative w-72 max-w-[85vw] bg-white h-full flex flex-col shadow-2xl z-10 animate-in slide-in-from-left duration-200">
            {/* Drawer Header */}
            <div className="h-16 px-5 border-b border-slate-100 flex items-center justify-between">
              <Link
                href="/admin/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2"
              >
                <Image
                  src="/images/logo-2.png"
                  alt="SevenUnique"
                  width={130}
                  height={32}
                  className="h-7 w-auto object-contain"
                />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Links */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6">
              <div>
                <p className="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Management
                </p>
                <div className="space-y-1">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                          item.active
                            ? "bg-[#f4622a]/10 text-[#f4622a] font-bold"
                            : "text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon
                            className={`w-4 h-4 ${
                              item.active ? "text-[#f4622a]" : "text-slate-500"
                            }`}
                          />
                          <span>{item.label}</span>
                        </div>
                        {item.active && (
                          <div className="w-1.5 h-1.5 rounded-full bg-[#f4622a]" />
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div>
                <p className="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  AI Tools
                </p>
                <Link
                  href="/admin/blog/new"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100"
                >
                  <div className="flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-purple-600" />
                    <span>AI Editorial Studio</span>
                  </div>
                </Link>
              </div>

              <div>
                <p className="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Live Website
                </p>
                <div className="space-y-1">
                  <Link
                    href="/blog"
                    target="_blank"
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-100"
                  >
                    <div className="flex items-center gap-2.5">
                      <FileText className="w-4 h-4 text-slate-500" />
                      <span>Live Blog</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </Link>
                  <Link
                    href="/"
                    target="_blank"
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-100"
                  >
                    <div className="flex items-center gap-2.5">
                      <Globe className="w-4 h-4 text-slate-500" />
                      <span>SevenUnique Home</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="p-4 border-t border-slate-100 bg-slate-50">
              <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200">
                <div className="min-w-0 pr-2">
                  <p className="text-xs font-bold text-slate-900 truncate">SevenUnique Admin</p>
                  <p className="text-[10px] text-slate-500 truncate font-mono">admin@sevenunique.com</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50 cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          4. MAIN CONTENT AREA (lg:pl-64)
         ========================================================================= */}
      <div className="lg:pl-64 flex-1 flex flex-col min-w-0">
        <main className="flex-1 w-full min-w-0">{children}</main>
      </div>
    </div>
  );
}
