import { Toaster } from "sonner";

export const metadata = {
  title: "Admin Dashboard | SevenUnique Blog Studio",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 selection:bg-purple-600 selection:text-white">
      <Toaster
        richColors
        position="top-right"
        theme="dark"
        closeButton
      />
      {children}
    </div>
  );
}
