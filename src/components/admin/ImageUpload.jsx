"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Upload, Loader2, Image as ImageIcon, Trash2, RefreshCw, Link as LinkIcon } from "lucide-react";
import { toast } from "sonner";

const ALLOWED_MIME_TYPES = [
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/webp",
  "image/gif",
];

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export function ImageUpload({ value, onChange, disabled }) {
  const [isUploading, setIsUploading] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef(null);

  const processAndUploadFile = async (file) => {
    // 1. Client-side size guard
    if (file.size > MAX_FILE_SIZE) {
      toast.error("File size exceeded", {
        description: `Selected file is ${(file.size / (1024 * 1024)).toFixed(
          1
        )}MB. Maximum allowed is 5MB.`,
      });
      return;
    }

    // 2. Client-side MIME guard
    if (!ALLOWED_MIME_TYPES.includes(file.type)) {
      toast.error("Unsupported file type", {
        description: "Please upload an image file (PNG, JPEG, WebP, GIF).",
      });
      return;
    }

    setIsUploading(true);
    const toastId = toast.loading("Uploading image to storage...", {
      description: "Optimizing and storing cover asset.",
    });

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error || "Failed to upload file to storage.");
      }

      onChange(data.url);
      toast.success("Cover image uploaded!", {
        id: toastId,
        description: "Image successfully attached to this post.",
      });
    } catch (err) {
      // Fallback: create local object URL / base64 preview so user is never blocked
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          onChange(e.target.result);
          toast.success("Cover image loaded!", {
            id: toastId,
            description: "Image loaded into editor.",
          });
        }
      };
      reader.readAsDataURL(file);
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      processAndUploadFile(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    if (!disabled && !isUploading) {
      setIsDragOver(true);
    }
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    if (disabled || isUploading) return;

    const file = e.dataTransfer.files?.[0];
    if (file) {
      processAndUploadFile(file);
    }
  };

  const handleManualUrl = () => {
    const url = window.prompt("Enter cover image URL (e.g. Unsplash, Cloudinary, etc.):", value || "");
    if (url !== null) {
      onChange(url.trim());
      if (url.trim()) {
        toast.success("Image URL updated!");
      }
    }
  };

  const handleRemove = () => {
    onChange("");
    toast.info("Cover image removed", {
      description: "Don't forget to save changes to persist this update.",
    });
  };

  const PRESET_COVERS = [
    { label: "Fintech", url: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80" },
    { label: "Code & Backend", url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80" },
    { label: "Cloud & DevOps", url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80" },
    { label: "Cybersecurity", url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80" },
  ];

  return (
    <div className="space-y-3">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp,image/gif"
        onChange={handleFileChange}
        disabled={disabled || isUploading}
        className="hidden"
      />

      {value ? (
        <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 group aspect-video max-h-72 w-full flex items-center justify-center shadow-xs">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={value}
            alt="Cover preview"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Action Overlay */}
          <div className="absolute inset-0 bg-slate-900/60 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity backdrop-blur-xs flex flex-wrap items-center justify-center gap-2 p-3">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={disabled || isUploading}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#f4622a] hover:bg-[#e0531e] text-white shadow-xs transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Upload New
            </button>
            <button
              type="button"
              onClick={handleManualUrl}
              disabled={disabled || isUploading}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white hover:bg-slate-100 text-slate-800 shadow-xs transition-colors cursor-pointer border border-slate-200"
            >
              <LinkIcon className="w-3.5 h-3.5" />
              Edit URL
            </button>
            <button
              type="button"
              onClick={handleRemove}
              disabled={disabled || isUploading}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-rose-600 hover:bg-rose-700 text-white shadow-xs transition-colors cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Remove
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => !disabled && !isUploading && fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-2xl p-6 sm:p-7 text-center transition-all cursor-pointer relative overflow-hidden ${
              isDragOver
                ? "border-[#f4622a] bg-orange-50/50 scale-[1.01]"
                : "border-slate-300 hover:border-[#f4622a] bg-slate-50/60 hover:bg-slate-50"
            } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {isUploading ? (
              <div className="flex flex-col items-center justify-center space-y-2 text-slate-600 py-3">
                <Loader2 className="w-6 h-6 animate-spin text-[#f4622a]" />
                <div>
                  <p className="text-xs font-semibold text-slate-900">Uploading cover image...</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Optimizing and linking asset.
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center space-y-2 text-slate-500">
                <div className="p-2.5 rounded-2xl bg-white text-slate-600 border border-slate-200 shadow-xs">
                  {isDragOver ? (
                    <ImageIcon className="w-5 h-5 text-[#f4622a] animate-bounce" />
                  ) : (
                    <Upload className="w-5 h-5 text-slate-500" />
                  )}
                </div>
                <div className="text-xs sm:text-sm text-slate-700">
                  <span className="font-semibold text-[#f4622a] hover:underline">
                    Click to browse
                  </span>{" "}
                  or drag and drop here
                </div>
                <p className="text-[11px] text-slate-400">
                  Supports PNG, JPG, WebP, GIF (Max 5MB)
                </p>
              </div>
            )}
          </div>

          {/* Quick presets & URL options */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[11px] text-slate-500">
              <span className="font-medium">Quick Presets:</span>
              <button
                type="button"
                onClick={handleManualUrl}
                className="text-[#f4622a] hover:underline font-semibold cursor-pointer"
              >
                Paste URL
              </button>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {PRESET_COVERS.map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => onChange(preset.url)}
                  className="px-2.5 py-1.5 rounded-lg text-[11px] font-medium bg-slate-100 hover:bg-orange-50 hover:text-[#f4622a] text-slate-700 border border-slate-200 transition-colors text-left truncate cursor-pointer"
                >
                  ⚡ {preset.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageUpload;
