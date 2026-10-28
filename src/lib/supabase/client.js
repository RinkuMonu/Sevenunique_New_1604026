import { createClient } from "@supabase/supabase-js";

let clientInstance = null;

export function getSupabaseClient() {
  if (clientInstance) return clientInstance;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    console.warn("Supabase public credentials missing in environment.");
    return null;
  }

  clientInstance = createClient(url, anonKey);
  return clientInstance;
}
