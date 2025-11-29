// src/components/FranchiseligibilityPage.js
"use client";

import React from "react";
import { motion } from "framer-motion";
// Importing PageHero and PremiumHeading based on the paths used in the previous component
import PageHero from '../../ui/Hero';
import PremiumHeading from "../../ui/PremiumHeading";

// --- ICONS for Eligibility List ---
// Custom SVG icon for list items
const ShieldCheck = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M9 12l2 2 4-4"></path></svg>;

// --- COLOR PALETTE CONSTANTS (Consistent with Franchise theme) ---
const COLORS = {
  darkBlue: "#1E4567", // PRIMARY (Used for Hero BG)
};

const PRIMARY_COLOR = COLORS.darkBlue;
const WHITE_BG = '#F7F7F7';

// --- Main Content Color Scheme ---
const faqPrimaryColor = "#004B73"; // Dark Blue (Main Text, Headings)
const faqSecondaryColor = "#F36B21"; // Orange (Accent, Icons)
const faqAccentLight = "#F0F8FF"; // Very Light Blue (Card Backgrounds)
const faqWhite = "#ffffff"; // Pure White

// --- Content Data: ELIGIBILITY REQUIREMENTS ---
const ELIGIBILITY_REQUIREMENTS = [
  "Must have a qualification of Graduation",
  "Must have knowledge of computer operation",
  "Must have a desktop or Laptop computer or Android phone",
  "Must have a two wheeler",
  "Must have a office space in home or outside",
  // Ensure this line is wrapped correctly for very narrow screens
  "Must have capacity to pay Franchise fee Rs. 11,000 + 18% GST",
  "Must have capacity to invest for Advertisement & Publicity to collect customers",
  "Must have willingness to work wholeheartedly and to earn money",
];


// ======================================================================
//  FRANCHISE ELIGIBILITY CONTENT COMPONENT
// ======================================================================

const FranchiseligibilityContent = () => (
  <motion.div
    // Responsive padding: p-4 for mobile, p-8 for desktop
    className="p-4 md:p-8 rounded-sm shadow-2xl max-w-7xl mx-auto"
    style={{ backgroundColor: faqWhite }}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    {/* --- Heading Section using PremiumHeading --- */}
    <div className="text-center mb-6 p-4 md:p-6 rounded-sm" style={{ backgroundColor: faqAccentLight }}>
      <PremiumHeading
        preTitle="MANDATORY CRITERIA"
        mainTitleBold="FRANCHISE"
        mainTitleNormal="ELIGIBILITY"
        subtitle="The essential qualifications and requirements to ensure a successful, committed partnership."
        primaryColor={faqPrimaryColor}
        secondaryColor={faqSecondaryColor}
      />
    </div>

    {/* --- Eligibility List Section --- */}
    <div className="mt-6">
      <h3 
        // Responsive font size: text-xl for mobile, text-2xl for desktop
        className="text-xl md:text-2xl font-bold mb-4 border-b pb-2 text-center" 
        style={{ color: faqPrimaryColor, borderColor: faqSecondaryColor + "80" }}
      >
        Key Requirements for Enrollment
      </h3>

      {/* Responsive Grid: 1 column on mobile, 2 columns from sm breakpoint */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
        {ELIGIBILITY_REQUIREMENTS.map((req, index) => (
          <motion.div
            key={index}
            // Responsive padding and font size for list items
            className="flex items-start p-3 rounded-lg text-sm md:text-base font-medium shadow-sm transition-all duration-300 h-full"
            style={{ backgroundColor: faqAccentLight, color: faqPrimaryColor, border: `1px solid ${faqSecondaryColor}30` }}
            whileHover={{ scale: 1.01, boxShadow: `0 6px 15px -5px ${faqPrimaryColor}20` }}
          >
            <ShieldCheck className="w-4 h-4 mt-1 mr-3 flex-shrink-0" style={{ color: faqSecondaryColor }} />
            {/* FIX: break-words ensures text wraps properly and doesn't overflow */}
            <span className="break-words">{req}</span> 
          </motion.div>
        ))}
      </div>
    </div>

  </motion.div>
);


// ======================================================================
//  FRANCHISE ELIGIBILITY PAGE LAYOUT
// ======================================================================

const FranchiseligibilityPage = () => {
  // Hero Props (Consistent with other pages)
  const eligibilityPageProps = {
    title: "Franchise Eligibility",
    subtitle: "Ensure you meet the basic requirements to join our network.",
    imageUrl: "/hero.png", // Reused placeholder
    shortPara: "We seek committed, capable, and driven individuals ready to invest in a multi-sector consulting career.",
    backgroundColor: PRIMARY_COLOR + '05',
  };

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: WHITE_BG }}>

      {/* ===================================================================== */}
      {/* ## 1. Page Hero Component */}
      {/* (Uncomment this line when PageHero component is available) */}
      {/* <PageHero {...eligibilityPageProps} /> */}

      {/* ===================================================================== */}
      {/* ## 2. Eligibility Content Section */}
      {/* ===================================================================== */}
      {/* Top padding pt-32 ensures content starts below a fixed header (if one exists) */}
      <div className="pt-32 pb-4" style={{ backgroundColor: WHITE_BG }}>
        {/* Responsive padding px-4 sm:px-6 lg:px-8 for the outer container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FranchiseligibilityContent />
        </div>
      </div>

    </div>
  );
};

export default FranchiseligibilityPage;