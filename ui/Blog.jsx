"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaChevronRight, FaRegUser } from "react-icons/fa";
import PremiumHeading from "./PremiumHeading";

// Define your colors (Primary: Dark Blue, Secondary: Orange)
const primaryColor = "#004B73"; // Dark Blue
const secondaryColor = "#F36B21"; // Orange
const accentLight = "#F0F8FF"; // Very Light Blue/White
const darkText = "#333333"; 

// --- UPDATED COLORS & STYLING FOR PREMIUM LOOK ---
const crispBorder = "#E0E0E0"; // Light Gray for crisp card border
const pureWhite = "#FFFFFF";

// Dummy Blog Data
const blogPosts = [
  {
    id: 1,
    title: "The Future of Digital Marketing in Consultancy",
    summary: "Exploring cutting-edge strategies and technologies driving client acquisition and brand visibility in the digital landscape.",
    author: "Aadimata Team",
    date: "Oct 28, 2025",
    category: "Marketing",
    image: "",
  },
  {
    id: 2,
    title: "Navigating NGO Compliance and Grant Writing Success",
    summary: "Expert insights on compliance pitfalls and best practices for writing compelling grant proposals that secure funding.",
    author: "Consultancy Expert",
    date: "Oct 20, 2025",
    category: "Consultancy",
    image: "",
  },
  {
    id: 3,
    title: "Essential Tips for Effective Mass Media Campaigns",
    summary: "A breakdown of successful mass media strategies, from conceptualizing visuals to choosing the right distribution channels.",
    author: "Media Lead",
    date: "Oct 15, 2025",
    category: "Mass Media",
    image: "",
  },
 
];

// Variants (kept the same)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, 
    },
  },
};
const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

// --- REVISED BLOG CARD COMPONENT for Compact Look ---
const BlogCard = ({ post }) => {
  return (
    <motion.article
      className="flex flex-col overflow-hidden h-full transition-all duration-300 rounded-sm"
      style={{ 
        boxShadow: `0 4px 15px rgba(0, 0, 0, 0.08)`,
        border: `1px solid ${crispBorder}`,
      }}
      variants={cardVariants}
      whileHover={{ 
        y: -5,
        boxShadow: `0 15px 30px rgba(0, 0, 0, 0.15)`,
        border: `1px solid ${pureWhite}`,
        outline: `2px solid ${secondaryColor}`,
      }}
    >
      {/* Image/Visual Placeholder: REDUCED HEIGHT from h-60 to h-44 */}
      <div className="h-44 w-full overflow-hidden relative" style={{ backgroundColor: primaryColor }}>
        <div className="flex items-center justify-center h-full text-white text-base font-light opacity-80">
          [Image Placeholder]
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Content Area: REDUCED PADDING from p-7 to p-5 */}
      <div className="p-5 flex flex-col justify-between flex-grow bg-white">
        
        {/* Category Tag: Kept small */}
        <span 
          className="text-xs font-bold px-2 py-0.5 mb-3 uppercase tracking-widest self-start rounded-sm" // Reduced padding and margin
          style={{ backgroundColor: secondaryColor, color: pureWhite }}
        >
          {post.category}
        </span>

        {/* Title and Summary: Reduced text size and line clamp */}
        <div>
          <h3 className="text-xl font-extrabold mb-2 leading-snug" style={{ color: darkText }}> {/* Reduced title size to text-xl */}
            {post.title}
          </h3>
          <p className="text-sm text-gray-500 mb-3 line-clamp-2 leading-normal"> {/* Reduced text size and clamped to 2 lines */}
            {post.summary}
          </p>
        </div>

        {/* Meta Data: Reduced font size and padding */}
        <div className="mt-2 flex items-center justify-between text-xs font-medium uppercase tracking-wider text-gray-400 border-t pt-3" style={{ borderColor: crispBorder }}>
          <div className="flex items-center" style={{ color: primaryColor }}>
            <FaCalendarAlt className="mr-1.5" style={{ color: secondaryColor }} />
            {post.date}
          </div>
          <div className="flex items-center">
            <FaRegUser className="mr-1.5" style={{ color: secondaryColor }} />
            {post.author}
          </div>
        </div>

        {/* Read More Link: Reduced margin */}
        <motion.a 
            href="#" 
            className="mt-4 flex items-center font-bold text-sm transition duration-300 w-fit self-start border-b pb-0.5" // Reduced margin-top
            style={{ color: primaryColor, borderColor: crispBorder }}
            whileHover={{ 
                x: 3,
                color: secondaryColor,
                borderColor: secondaryColor
            }}
        >
          Read More
          <FaChevronRight className="ml-2 text-xs" />
        </motion.a>
      </div>
    </motion.article>
  );
};


// --- MAIN BLOG SECTION COMPONENT (Kept the same for 6xl width) ---
const BlogSectionFocused = () => {
  const featuredPosts = blogPosts.slice(0, 3); 

  return (
    <section className="flex flex-col items-center justify-center pt-16 pb-24 px-4 bg-white w-full"> 
      
      {/* 👑 PREMIUM HEADING */}
      <PremiumHeading
        preTitle="Latest Insights"
        mainTitleBold="Aadimata"
        mainTitleNormal="Blog"
        subtitle="Stay updated with our expert analysis on Marketing, Consultancy, Media, and Industry Trends."
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
      />
      
      {/* ===== Blog Grid Container (3 Cards per Row, max-w-6xl) ===== */}
      <motion.div
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {featuredPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </motion.div>

      {/* ===== Call to Action (View All) ===== */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <a 
          href="#" 
          className="inline-flex items-center font-semibold text-lg px-10 py-4 shadow-xl transition-all duration-300 rounded-sm"
          style={{ backgroundColor: primaryColor, color: 'white', border: `1px solid ${primaryColor}` }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = secondaryColor;
            e.currentTarget.style.borderColor = secondaryColor;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = primaryColor;
            e.currentTarget.style.borderColor = primaryColor;
          }}
        >
          View All Articles
          <FaChevronRight className="ml-3 text-sm" />
        </a>
      </motion.div>
    </section>
  );
};

export default BlogSectionFocused;