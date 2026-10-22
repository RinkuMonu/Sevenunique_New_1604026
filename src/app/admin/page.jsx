"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseClient } from "@/lib/supabase/client";
import { Loader2 } from "lucide-react";

export default function AdminRootPage() {
  const router = useRouter();

  useEffect(() => {
    const checkAuthAndRedirect = async () => {
      try {
        const supabase = getSupabaseClient();
        if (!supabase) {
          router.replace("/admin/login");
          return;
        }

        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
          router.replace("/admin/blog");
        } else {
          router.replace("/admin/login");
        }
      } catch {
        router.replace("/admin/login");
      }
    };

    checkAuthAndRedirect();
  }, [router]);

  return (
    <div className="min-h-screen bg-[#0e121a] flex flex-col items-center justify-center text-white">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="w-8 h-8 text-[#f4622a] animate-spin" />
        <p className="text-sm text-gray-400 font-medium">Redirecting to Admin Portal...</p>
      </div>
    </div>
  );
}
