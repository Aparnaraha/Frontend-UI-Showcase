// src/components/blog/BlogGallery.jsx
"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Calendar, User, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

// --- Color Palette Mapping (MAROON THEME - Reused) ---
const PRIMARY_ACCENT = "#7F1D1D"; // Soft Maroon (Used for initial text/border)
const SECONDARY_ACCENT = "#B91C1C"; // Brighter Maroon (Used for hover fill)
const TEXT_COLOR = "#1F2937"; // Dark Gray
const BG_COLOR = "#F5F8FA"; // Light, slightly cool background
const CARD_BG_LIGHT = "#FFFFFF"; // White for button background
// --- Blog Data Structure (3 Cards for the Home Section) ---
const BLOG_DATA = [
  {
    id: 1,
    title: "Future of Pharmacy: Beyond the Counter",
    summary:
      "Exploring new roles for pharmacists in clinical research and digital health.",
    imagePath: "/course/c5.png",
    accent: PRIMARY_ACCENT,
    date: "Oct 15, 2025",
    author: "Dr. A. Sharma",
  },
  {
    id: 2,
    title: "The Critical Role of ANM in Rural Healthcare",
    summary:
      "How Auxiliary Nurses are bridging the gap in primary care delivery across India.",
    imagePath: "/course/c2.png",
    accent: SECONDARY_ACCENT,
    date: "Sep 28, 2025",
    author: "Prof. S. Jena",
  },
  {
    id: 3,
    title: "Why Allied Health Careers Are Booming",
    summary:
      "Demand for specialized technologists (CT, MRI, Dialysis) is rapidly increasing globally.",
    imagePath: "/course/c6.png",
    accent: PRIMARY_ACCENT,
    date: "Sep 10, 2025",
    author: "Guest Expert",
  },
];

// --- Animation Variants for PremiumButton Wrapper ---
const buttonItemVariants = {
  hidden: { opacity: 0, x: -40, scale: 0.98 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 70, damping: 12, delay: 0 },
  },
};

// -----------------------------------------------------------------
// --- PREMIUM LINK BUTTON COMPONENT (Re-implemented) ---
// -----------------------------------------------------------------
const PremiumLinkButton = memo(
  ({ text, to, Icon, className = "", buttonStyle = "primary" }) => {
    // Base colors using the BlogGallery's palette
    const defaultTextColor = PRIMARY_ACCENT;
    const defaultBorderColor = PRIMARY_ACCENT;
    const defaultBgColor = CARD_BG_LIGHT;
    const hoverBgColor = SECONDARY_ACCENT;
    const scaleOnHover = { scale: 1.02 };
    const scaleOnClick = { scale: 0.98 };

    // 🔑 CHANGE 1: Reduced 'p-3' padding to 'px-4 py-2' for smaller button
    const sharedClasses = `
      relative px-4 py-2 font-bold text-sm uppercase tracking-wider rounded-lg overflow-hidden
      transition-all duration-300 ease-out isolate group flex items-center justify-center w-fit // Retain w-fit
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[${defaultBorderColor}]
    `;

    return (
      <motion.div
        variants={buttonItemVariants}
        // 🔑 CHANGE 2: Removed 'w-full' from the outer wrapper for text fit
        className={`inline-block ${className}`}
      >
        {" "}
        <motion.div
          whileHover={scaleOnHover}
          whileTap={scaleOnClick}
          // 🔑 CHANGE 3: Removed 'w-full' from the shadow wrapper for text fit
          className={`rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 w-fit`}
        >
          {" "}
          <Link
            to={to}
            className={`${sharedClasses} ${
              // 🔑 CHANGE 4: Removed the conditional 'w-full' for 'primary' style
              buttonStyle === "primary" ? "" : ""
            }`}
            style={{
              color: defaultTextColor,
              borderColor: defaultBorderColor,
              backgroundColor: defaultBgColor,
              borderWidth: "2px",
              textDecoration: "none",
            }}
          >
            {" "}
            {/* Hover Background Element: Expands with red accent color */}{" "}
            <span
              className={` absolute inset-0 z-[-1] transition-transform duration-500 ease-out transform scale-x-0 origin-center group-hover:scale-x-100`}
              style={{ backgroundColor: hoverBgColor }}
            ></span>{" "}
            {/* Text Content: Inherits red, becomes white on hover */}{" "}
            <span
              className={`relative z-10 transition-colors duration-500 flex items-center group-hover:text-white`}
            >
              {text}                       
              {Icon && <Icon className="w-5 h-5 ml-3" />}              
            </span>{" "}
          </Link>{" "}
        </motion.div>{" "}
      </motion.div>
    );
  }
);
PremiumLinkButton.displayName = "PremiumLinkButton";

// --- Reusable Heading Component (Reused Structure) ---
const HeadingSection = memo(({ title, subtitle, pretitle, inView }) => {
  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "tween", duration: 0.6 } },
  };
  const dividerVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.8, delay: 0.3 } },
  };

  return (
    <motion.div
      className="text-center mb-16"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {" "}
      <motion.p
        variants={itemVariants}
        className="text-sm font-semibold tracking-widest uppercase mb-2"
        style={{ color: PRIMARY_ACCENT }}
      >
        {pretitle}        
      </motion.p>{" "}
      <motion.h1
        variants={itemVariants}
        className="text-3xl md:text-4xl font-sans font-bold mb-3"
        style={{ color: TEXT_COLOR }}
      >
        {title}        
      </motion.h1>{" "}
      <motion.div
        className="w-12 h-0.5 mx-auto my-4"
        style={{ backgroundColor: SECONDARY_ACCENT }}
        variants={dividerVariants}
      />{" "}
      <motion.p
        variants={itemVariants}
        className="text-gray-600 max-w-3xl mx-auto text-lg mt-4 font-normal"
      >
        {subtitle}        
      </motion.p>{" "}
    </motion.div>
  );
});

HeadingSection.displayName = "HeadingSection";

// --- Blog Card Component (Adapted from ServiceCard) ---
const BlogCard = memo(({ post, isVisible, delay }) => {
  // All cards link to the generic /blog page as requested
  const blogLink = "/blogs";
  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 70, damping: 12, delay: delay },
    },
  }; // Standard hover for a clean, professional blog look
  const hoverAnimation = {
    scale: 1.01,
    boxShadow: `0 15px 30px -8px ${post.accent}20`,
    transition: { duration: 0.3 },
  };
  const placeholderImageUrl = `https://via.placeholder.com/600x450?text=${encodeURIComponent(
    post.title + " Blog"
  )}`;

  return (
    <Link to={blogLink} className="block h-full">
      {" "}
      <motion.div
        className="rounded-2xl shadow-xl transition-all duration-300 transform relative overflow-hidden flex flex-col group h-full"
        style={{ backgroundColor: CARD_BG_LIGHT }}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={itemVariants}
        whileHover={hoverAnimation}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Image Area */}{" "}
        <div className="relative h-56 overflow-hidden">
          {" "}
          <img
            src={post.imagePath}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = placeholderImageUrl;
            }}
          />{" "}
        </div>
        {/* Content Area */}{" "}
        <div className="p-6 flex flex-col flex-grow">
          {/* Meta */}{" "}
          <div className="flex text-xs space-x-3 mb-3 text-gray-500">
            {" "}
            <span className="flex items-center">
              <Calendar className="w-3 h-3 mr-1" /> {post.date}
            </span>{" "}
            <span className="flex items-center">
              <User className="w-3 h-3 mr-1" /> {post.author}
            </span>{" "}
          </div>
          {/* Title */}{" "}
          <h3
            className="text-xl font-sans font-bold mb-3 line-clamp-2 transition-colors duration-300 group-hover:text-red-700"
            style={{ color: TEXT_COLOR }}
          >
            {post.title}{" "}
          </h3>
          {/* Summary */}{" "}
          <p className="text-gray-600 mb-4 text-base line-clamp-3 flex-grow">
            {post.summary}{" "}
          </p>{" "}
          {/* Read More Link - Uses current card accent for color */}{" "}
          <div className="mt-4">
            {" "}
            <p
              className="group inline-flex items-center text-sm font-semibold transition-colors duration-300"
              style={{ color: post.accent }}
            >
              Read More{" "}
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </motion.div>{" "}
    </Link>
  );
});

BlogCard.displayName = "BlogCard";

// --- Main Component ---
const BlogGallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const sectionInView = inView;

  return (
    <section ref={ref} className="pt-12" style={{ backgroundColor: BG_COLOR }}>
      {" "}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {" "}
        <HeadingSection
          pretitle="Latest Insights"
          title="The College Blog"
          subtitle="Stay updated with our research, faculty breakthroughs, and expert opinions from our faculty and alumni."
          inView={sectionInView}
        />{" "}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12"
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {" "}
          {BLOG_DATA.map((post, index) => (
            <BlogCard
              key={post.id}
              post={post}
              isVisible={sectionInView}
              delay={index * 0.15}
            />
          ))}{" "}
        </motion.div>{" "}
        {/* View All Button at the bottom - NOW USING PremiumLinkButton */}{" "}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: BLOG_DATA.length * 0.15 + 0.3, duration: 0.6 }}
        >
          {/* 🔑 NOTE: The parent flex container is centered, and the PremiumLinkButton now uses w-fit, achieving the centered, compact layout. */}
          <div className="flex items-center justify-center mx-auto w-fit max-w-sm">
            
            {/* 🔑 CHANGE: Replaced simple Link with PremiumLinkButton */}
            <PremiumLinkButton
              text="View All Articles"
              to="/blogs"
              Icon={BookOpen} // Using BookOpen icon for a blog section
              className="inline-flex w-fit"
              buttonStyle="primary"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Renamed the export for clarity
// AchievementCounter.displayName = "AchievementCounter";
BlogGallery.displayName = "BlogGallery";

export default BlogGallery;