import PostEditor from "@/components/admin/PostEditor";
import { createAdminClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Edit Article | SevenUnique Blog Studio",
};

export default async function EditBlogPostPage({ params }) {
  const { id } = await params;

  let post = null;
  try {
    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !data) {
      notFound();
    }
    post = data;
  } catch (err) {
    console.error("Error fetching post for edit:", err);
    notFound();
  }

  return <PostEditor initialData={post} />;
}
