"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";

// Reusable Blog Card Component
const BlogCard = ({ title, imageUrl, author, date }) => {
  return (
    <div className="flex-none w-full  group cursor-pointer">
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full w-full flex flex-col">
        {/* Image Container */}
        <div className="relative h- overflow-hidden ">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Title */}
          <Link href="/blog" className="text-xl font-bold text-gray-900 mb-4 line-clamp-3 min-h-[4.5rem]">
            {title}
          </Link>

          {/* Author Section */}
          <div className="flex items-center gap-2 mt-auto">
            <div className="w-5 h-5 rounded-full flex items-center justify-center">
              <Image
                src="/sevenLogo.png"
                width={50}
                height={50}
                className="object-left"
              />
            </div>
            <span className="text-md text-gray-500">
              By BairesDev Editorial Team
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Component
const BlogCarouselSectionCricle = () => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title:
        "The Future of AI in Software Development: Trends to Watch in 2025",
      imageUrl:
        "https://bairesdev.mo.cloudinary.net/blog/2024/06/history-of-artificial-intelligence.jpg?tx=w_1920,q_auto",
      author: "BairesDev Editorial Team",
      date: "Dec 15, 2024",
    },
    {
      id: 2,
      title:
        "How to Build Scalable Microservices Architecture for Enterprise Applications",
      imageUrl:
        "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=500&fit=crop",
      author: "BairesDev Editorial Team",
      date: "Dec 12, 2024",
    },
    {
      id: 3,
      title:
        "Remote Work Best Practices: Managing Global Tech Teams Effectively",
      imageUrl:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=500&fit=crop",
      author: "BairesDev Editorial Team",
      date: "Dec 10, 2024",
    },
  ];

  // Update arrow visibility based on scroll position
  const updateArrows = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const maxScroll = container.scrollWidth - container.clientWidth;
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(container.scrollLeft < maxScroll - 5);
    }
  };

  // Scroll function
  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth * 0.8;
      const newScrollLeft =
        direction === "left"
          ? container.scrollLeft - scrollAmount
          : container.scrollLeft + scrollAmount;

      container.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  // Mouse drag scrolling
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", updateArrows);
      updateArrows();
      return () => container.removeEventListener("scroll", updateArrows);
    }
  }, []);

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
          {/* Left side: Heading with orange dot */}
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Our latest insights.
            </h2>
          </div>

          {/* Right side: Link */}
          <a
            href="/blog"
            className="text-gray-800 font-semibold hover:text-gray-600 transition-colors flex items-center gap-1 group text-right"
          >
            Over 1,100 Articles on Technology and Talent →
          </a>
        </div>

        {/* Carousel Container with Arrows */}
        <div className="relative">
          {/* Left Arrow */}
          {/* {showLeftArrow && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-gray-50 focus:outline-none"
              aria-label="Previous articles"
            >
              <svg
                className="w-5 h-5 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )} */}

          {/* Right Arrow */}
          {/* {showRightArrow && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-gray-50 focus:outline-none"
              aria-label="Next articles"
            >
              <svg
                className="w-5 h-5 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )} */}

          {/* Scrollable Cards Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth grid grid-cols-3"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {blogPosts.map((post) => (
              <div key={post.id} className="snap-start">
                <BlogCard
                  title={post.title}
                  imageUrl={post.imageUrl}
                  author={post.author}
                  date={post.date}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dots indicator (optional, for better UX) */}
        {/* <div className="flex justify-center gap-2 mt-8">
          {blogPosts.map((_, idx) => (
            <button
              key={idx}
              className="w-2 h-2 rounded-full bg-gray-300 hover:bg-orange-500 transition-colors"
              onClick={() => {
                const container = scrollContainerRef.current;
                if (container) {
                  const cardWidth = container.children[0]?.offsetWidth || 0;
                  const gap = 24;
                  container.scrollTo({
                    left: idx * (cardWidth + gap),
                    behavior: "smooth",
                  });
                }
              }}
            />
          ))}
        </div> */}
      </div>

      {/* Hide scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default BlogCarouselSectionCricle;
