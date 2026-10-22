import { Toaster } from "sonner";
import { AdminSidebar } from "@/components/admin/AdminSidebar";

export const metadata = {
  title: "Admin Dashboard | SevenUnique Blog Studio",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#f4622a] selection:text-white">
      <Toaster
        richColors
        position="top-right"
        theme="light"
        closeButton
      />
      <AdminSidebar>{children}</AdminSidebar>
    </div>
  );
}
