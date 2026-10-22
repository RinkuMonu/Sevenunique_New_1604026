"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import LinkExtension from "@tiptap/extension-link";
import ImageExtension from "@tiptap/extension-image";
import { useEffect, useRef } from "react";
import {
  Bold,
  Italic,
  Strikethrough,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Undo,
  Redo,
  Link as LinkIcon,
  Image as ImageIcon,
  Minus,
} from "lucide-react";

export function TiptapEditor({ content, onChange }) {
  const lastEmittedHtml = useRef(content || "");
  const fileInputRef = useRef(null);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [2, 3],
        },
      }),
      LinkExtension.configure({
        openOnClick: false,
        HTMLAttributes: {
          class:
            "text-[#f4622a] font-semibold underline decoration-[#f4622a]/50 underline-offset-4 hover:text-[#d34c1a] transition-colors cursor-pointer",
        },
      }),
      ImageExtension.configure({
        inline: true,
        HTMLAttributes: {
          class: "rounded-lg max-w-full my-4 border border-slate-200 shadow-xs",
        },
      }),
    ],
    content: content || "",
    editorProps: {
      attributes: {
        class:
          "prose max-w-none min-h-[350px] p-4 sm:p-6 focus:outline-none text-slate-900 text-sm leading-relaxed prose-headings:text-slate-950 prose-p:text-slate-700 prose-strong:text-slate-900",
      },
    },
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      lastEmittedHtml.current = html;
      onChange(html);
    },
  });

  // Sync external content if updated (e.g. from AI generation or reset)
  useEffect(() => {
    if (editor && content !== lastEmittedHtml.current) {
      lastEmittedHtml.current = content || "";
      editor.commands.setContent(content || "", { emitUpdate: false });
    }
  }, [content, editor]);

  if (!editor) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white min-h-[350px] flex items-center justify-center text-slate-400 text-sm">
        Loading editor...
      </div>
    );
  }

  const setLink = () => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("Enter URL:", previousUrl);

    if (url === null) return;
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  const handleInlineImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert("Image size must be less than 5MB");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok || data.error) {
        throw new Error(data.error || "Upload failed");
      }

      editor.chain().focus().setImage({ src: data.url }).run();
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Failed to upload image";
      alert(msg);
    } finally {
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const addImage = () => {
    const url = window.prompt("Enter image URL (leave empty to upload a local image file):");
    if (url && url.trim()) {
      editor.chain().focus().setImage({ src: url.trim() }).run();
      return;
    }
    fileInputRef.current?.click();
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white overflow-hidden focus-within:border-[#f4622a] focus-within:ring-1 focus-within:ring-[#f4622a] transition-all shadow-xs">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp,image/gif"
        onChange={handleInlineImageUpload}
        className="hidden"
      />
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 bg-slate-50 border-b border-slate-200">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-1.5 rounded-lg text-sm transition-colors cursor-pointer ${
            editor.isActive("bold")
              ? "bg-[#f4622a] text-white"
              : "text-slate-600 hover:bg-slate-200 hover:text-slate-900"
          }`}
          title="Bold"
        >
          <Bold className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-1.5 rounded-lg text-sm transition-colors cursor-pointer ${
            editor.isActive("italic")
              ? "bg-[#f4622a] text-white"
              : "text-slate-600 hover:bg-slate-200 hover:text-slate-900"
          }`}
          title="Italic"
        >
          <Italic className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`p-1.5 rounded-lg text-sm transition-colors cursor-pointer ${
            editor.isActive("strike")
              ? "bg-[#f4622a] text-white"
              : "text-slate-600 hover:bg-slate-200 hover:text-slate-900"
          }`}
          title="Strikethrough"
        >
          <Strikethrough className="w-4 h-4" />
        </button>

        <div className="w-px h-5 bg-slate-200 mx-1 hidden sm:block" />

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`p-1.5 rounded-lg text-sm transition-colors cursor-pointer ${
            editor.isActive("heading", { level: 2 })
              ? "bg-[#f4622a] text-white"
              : "text-slate-600 hover:bg-slate-200 hover:text-slate-900"
          }`}
          title="Heading 2"
        >
          <Heading2 className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={`p-1.5 rounded-lg text-sm transition-colors cursor-pointer ${
            editor.isActive("heading", { level: 3 })
              ? "bg-[#f4622a] text-white"
              : "text-slate-600 hover:bg-slate-200 hover:text-slate-900"
          }`}
          title="Heading 3"
        >
          <Heading3 className="w-4 h-4" />
        </button>

        <div className="w-px h-5 bg-slate-200 mx-1 hidden sm:block" />

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-1.5 rounded-lg text-sm transition-colors cursor-pointer ${
            editor.isActive("bulletList")
              ? "bg-[#f4622a] text-white"
              : "text-slate-600 hover:bg-slate-200 hover:text-slate-900"
          }`}
          title="Bullet List"
        >
          <List className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-1.5 rounded-lg text-sm transition-colors cursor-pointer ${
            editor.isActive("orderedList")
              ? "bg-[#f4622a] text-white"
              : "text-slate-600 hover:bg-slate-200 hover:text-slate-900"
          }`}
          title="Numbered List"
        >
          <ListOrdered className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`p-1.5 rounded-lg text-sm transition-colors cursor-pointer ${
            editor.isActive("blockquote")
              ? "bg-[#f4622a] text-white"
              : "text-slate-600 hover:bg-slate-200 hover:text-slate-900"
          }`}
          title="Blockquote"
        >
          <Quote className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          className="p-1.5 rounded-lg text-sm text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition-colors cursor-pointer"
          title="Divider"
        >
          <Minus className="w-4 h-4" />
        </button>

        <div className="w-px h-5 bg-slate-200 mx-1 hidden sm:block" />

        <button
          type="button"
          onClick={setLink}
          className={`p-1.5 rounded-lg text-sm transition-colors cursor-pointer ${
            editor.isActive("link")
              ? "bg-[#f4622a] text-white"
              : "text-slate-600 hover:bg-slate-200 hover:text-slate-900"
          }`}
          title="Add Link"
        >
          <LinkIcon className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={addImage}
          className="p-1.5 rounded-lg text-sm text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition-colors cursor-pointer"
          title="Add Image"
        >
          <ImageIcon className="w-4 h-4" />
        </button>

        <div className="w-px h-5 bg-slate-200 mx-1 hidden sm:block" />

        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          className="p-1.5 rounded-lg text-sm text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition-colors disabled:opacity-40 cursor-pointer"
          title="Undo"
        >
          <Undo className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          className="p-1.5 rounded-lg text-sm text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition-colors disabled:opacity-40 cursor-pointer"
          title="Redo"
        >
          <Redo className="w-4 h-4" />
        </button>
      </div>

      {/* Editor Content Area */}
      <EditorContent editor={editor} />
    </div>
  );
}

export default TiptapEditor;
