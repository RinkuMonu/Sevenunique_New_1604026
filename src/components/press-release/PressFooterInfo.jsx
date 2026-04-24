"use client";

import { Mail, Rss } from "lucide-react";
import {
  FaLinkedin,
  FaFacebook,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

export default function PressFooterInfo() {
  return (
    <div className="grid md:grid-cols-3 gap-10 items-start ps-10 mb-20 mt-10 ">
      
      {/* FOLLOW */}
      <div>
        <h4 className="text-base text-black font-semibold mb-4">
          Follow Us
        </h4>

        <div className="flex gap-4 text-gray-700 text-xl">
          <FaLinkedin />
          <FaFacebook />
          <FaXTwitter />
          <FaInstagram />
          <FaYoutube />
        </div>
      </div>

      {/* RSS */}
      <div>
        <h4 className="text-base font-semibold text-black mb-4">
          Subscribe to RSS
        </h4>

        <div className="flex items-center gap-2 text-sm text-gray-700">
          <Rss size={16} />
          <span className="border-b border-black cursor-pointer">
            Press & Media Hub RSS Feed
          </span>
        </div>
      </div>

      {/* EMAIL */}
      <div>
        <h4 className="text-sm font-semibold text-black mb-4">
          Email Us
        </h4>

        <div className="flex items-center gap-2 text-sm text-gray-700">
          <Mail size={16} />
          <span className="border-b border-black cursor-pointer">
            press@bairesdev.com
          </span>
        </div>
      </div>
    </div>
  );
}