"use client";

import { useState } from "react";
import {
  Eye,
  Award,
  Target,
  Users,
  Zap,
  Lightbulb,
  HomeIcon,
} from "lucide-react";
import Image from "next/image";
import { BiLeftArrow } from "react-icons/bi";
import { FaAngleRight } from "react-icons/fa";
import Link from "next/link";

const galleryMoments = [
  {
    id: 1,
    image: "/images/goa3.JPG",
    hoverImage: "/images/goa4.JPG",
    title: "2st Anniversary Trip To Goa",
    description: "A memorable team getaway by the sea.",
  },
  {
    id: 2,
    image: "/images/team-nainital.JPG",
    hoverImage: "/images/nainital2.jpg",
    title: "Nainital Getaway for 1st Company Anniversary",
    description: "A peaceful retreat in the hills.",
  },
  {
    id: 3,
    image: "/images/mumbai1.JPG",
    hoverImage: "/images/team-nainital.JPG",
        title: "Mumbai Office Inauguration",
    description: "A memorable team getaway by the sea.",
  },
];

const officeMemories = [
  {
    id: 1,
    image: "/images/15aug.jpeg",
    title: "Independence Day",
    description:
      "Celebrating freedom, unity, and patriotism together.",
  },
  {
    id: 2,
    image: "/images/sakrat.JPG",
    title: "Makar Sankranti",
    description:
      "Festive moments, laughter, and team bonding.",
  },
  {
    id: 3,
    image: "/images/navratri.PNG",
    title: "Navratri Celebration",
    description:
      "Creating memories that strengthen our culture.",
  },
  
];

function Globe() {
  return (
    <div className="w-14 h-14 bg-gradient-to-br from-orange-200 to-orange-500 rounded-lg" />
  );
}

function Premium() {
  return (
    <div className="w-14 h-14 bg-gradient-to-br from-blue-200 to-blue-500 rounded-lg" />
  );
}

function Handshake() {
  return (
    <div className="w-14 h-14 bg-gradient-to-br from-green-200 to-green-600 rounded-lg" />
  );
}

function Bulb() {
  return (
    <div className="w-14 h-14 bg-gradient-to-br from-yellow-100 to-yellow-500 rounded-lg" />
  );
}

function BeliefCard({ belief }) {
  const Icon = belief.icon;





  
  return (
   <div className="group relative rounded-xl overflow-hidden h-[350px]">

  {/* Background Image */}
  <Image
    src={belief.image}
    alt={belief.title}
    fill
    className="object-cover transition-transform duration-700 group-hover:scale-110"
  />

  {/* Black Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/90
  
via-black/40 to-transparent z-10" />

  {/* Content */}
  <div className="absolute bottom-0 left-0 z-20 p-6">
    <h3 className="text-2xl font-semibold text-white">
      {belief.title}
    </h3>

    <p className="text-gray-200 mt-2 text-sm">
      {belief.description}
    </p>
  </div>
</div>
  );
}

function ValueCard({ value }) {
  return (
    <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-[380px]">
      {/* IMAGE BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src={value.img}
          alt={value.title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-all duration-500" />

      {/* WHITE HOVER CARD */}
      <div className="absolute  inset-0 bg-white translate-y-255 group-hover:translate-y-0 transition-all duration-500" />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-end">
        {/* DEFAULT TITLE (BOTTOM) */}
        <div className="transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
          <h3 className=" text-xl md:text-2xl font-semibold leading-snug">
            {value.title}
          </h3>
        </div>

        {/* HOVER CONTENT */}
        <div
          className="
          absolute inset-0 p-6 md:p-8 flex flex-col justify-center
          opacity-0 group-hover:opacity-100
          transition-all duration-500 text-black
        "
        >
          <h3 className="text-xl md:text-2xl font-semibold  mb-3">
            {value.title}
          </h3>

          <p className="text-gray-500 font-semibold text-sm md:text-base mb-3">
            {value.subtitle}
          </p>

          <p className="text-gray-600 text-sm md:text-base">
            {value.description}
          </p>
        </div>

        {/* EYE ICON */}
        {/* <div className="absolute top-4 right-4 bg-white/80 backdrop-blur rounded-full p-2">
          <Eye className="w-5 h-5 text-gray-800" />
        </div> */}
      </div>
    </div>
  );
}

function GalleryCard({ image, hoverImage, title, description }) {
  return (
    <div className="group relative h-[320px] overflow-hidden rounded-2xl shadow-lg">

      {/* Default Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="absolute inset-0 z-0 object-cover transition-opacity duration-700 group-hover:opacity-0"
      />

      {/* Hover Image */}
      <Image
        src={hoverImage}
        alt={title}
        fill
        className="absolute inset-0 z-0 object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      {/* Text */}
      <div className="absolute bottom-0 left-0 z-20 p-6">
        <h3 className="text-white text-2xl font-bold">
          {title}
        </h3>

        <p className="mt-2 text-sm text-white/90">
          {description}
        </p>
      </div>
    </div>
  );
}



function MemoryCard({ image, title, description }) {
  return (
    <div className="group relative h-[320px] overflow-hidden rounded-2xl shadow-lg">
      {/* Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-all duration-700 group-hover:scale-110"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 z-20 p-6 w-full">
        {/* Title Always Visible */}
        <h3 className="text-white text-xl md:text-2xl font-bold">
          {title}
        </h3>

        {/* Description Appears On Hover */}
        <p
          className="
            text-gray-200 text-sm mt-3
            opacity-0 max-h-0 overflow-hidden
            group-hover:opacity-100
            group-hover:max-h-24
            transition-all duration-500
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default function CulturePage() {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
    <section className="relative h-[105vh] md:py-24 py-10  min-h-[650px] overflow-hidden">
  {/* Background Image */}
 <Image
  src="/images/goa-celeb.jpeg"
  alt="Company Culture"
  fill
  priority
  className="object-cover object-top scale-105"
/>

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/10"></div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto h-full px-6 lg:px-8 flex flex-col justify-end pb-16">
    
    {/* Breadcrumb */}
    <div className="flex items-center gap-3 text-white/80 mb-6">
      <HomeIcon size={18} />
      <FaAngleRight size={14} />
      <span className="text-sm font-medium">
        Company Culture
      </span>
    </div>

    {/* Hero Content */}
   {/* Hero Content */}
<div className="max-w-4xl">
  <p className="text-white uppercase tracking-[4px] font-semibold text-sm mb-4">
    Gallery & Memories
  </p>

  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
    Every Picture
    <br />
    <span className="text-orange-500">
      Tells a Story.
    </span>
  </h1>

  <p className="text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed">
    Explore the moments that define our journey—from team outings and
    celebrations to achievements, events, and everyday memories.
    Each photograph reflects the passion, collaboration, and culture
    that make Sevenunique more than just a workplace.
  </p>
</div>
  </div>
</section>

      {/* What We Believe In Section */}
  <section className="py-20">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid md:grid-cols-12 gap-8 mb-12">
      <div>
        <h2 className="text-4xl md:text-5xl text-gray-700 font-bold">
          Team Trips<span className="text-orange-500">.</span>
        </h2>

        <p className="text-gray-600 mt-4">
          Exploring new places together and creating unforgettable memories.
        </p>
      </div>

     <div className="grid md:grid-cols-2 gap-6">
  {galleryMoments.map((item) => (
<GalleryCard
  key={item.id}
  image={item.image}
  hoverImage={item.hoverImage}
  title={item.title}
  description={item.description}
/>
  ))}
</div>
    </div>
  </div>
</section>

      {/* What We Value Section */}
     <section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid md:grid-cols-4 gap-8 mb-12">
      <div>
        <h2 className="text-4xl md:text-5xl text-gray-700 font-bold">
          Celebrations & Events
          <span className="text-orange-500">.</span>
        </h2>

        <p className="text-gray-600 mt-4">
          A glimpse into the moments that bring our team together.
        </p>
      </div>

      <div className="md:col-span-3">
      <div className="grid md:grid-cols-3 gap-6">
  {officeMemories.map((item) => (
    <MemoryCard
      key={item.id}
      image={item.image}
      title={item.title}
      description={item.description}
    />
  ))}
</div>
      </div>
    </div>
  </div>
</section>
      {/* Team Section */}
      <section className="py-20 md:py-28 bg-[#1f2a33] text-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* LEFT SIDE (75%) */}
            <div className="w-full md:w-[75%] flex flex-col gap-1 justify-start items-end">
              {/* AVATARS */}
              <div className="flex justify-start mb-6">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-2 border-white overflow-hidden"
                    style={{
                      marginLeft: i === 0 ? 0 : "-12px",
                      zIndex: 10 - i,
                    }}
                  >
                    <img
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* HEADING */}
              <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-6 text-end">
             It all comes together in <br />
               what we do
              </h2>

              {/* TEXT */}
              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
                Our beliefs guide us, and our values shape how we act. Together, they create a workplace where we are challenged, supported, and motivated to do our best work.
              </p>
            </div>

            {/* RIGHT SIDE (25%) */}
            <div className="w-full md:w-[25%] flex justify-center md:justify-end">
              <div className="bg-white rounded-2xl p-6 md:p-8 text-gray-900 shadow-xl border border-blue-200 max-w-[320px] w-full">
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-center">
                  See yourself here?
                </h3>

                <p className="text-gray-600 text-sm md:text-base text-center leading-relaxed mb-6">
                  If this feels like a fit, don’t wait.{" "}
                  <span className="font-semibold text-gray-800">
                    Let’s find you your next career opportunity today!
                  </span>
                </p>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3  rounded-xl transition-all duration-300">
                  <Link href="/schedule-a-call-page" className="py-3">
                    {" "}
                    Apply now{" "}
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}