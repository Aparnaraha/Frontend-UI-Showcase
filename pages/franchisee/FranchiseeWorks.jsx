"use client";

import React from "react";
import { motion } from "framer-motion";
// Importing PageHero from the original file's path (as per the FAQ example)
import PageHero from '../../ui/Hero';
import PremiumHeading from "../../ui/PremiumHeading";

// --- ICONS for Franchise Roles ---
const Briefcase = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>;
const Zap = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>;


// --- COLOR PALETTE CONSTANTS (Retained for Hero consistency) ---
const COLORS = {
  darkBlue: "#1E4567", // PRIMARY (Used for Hero BG)
  purple: "#7B3B6B",  // ACCENT (Used for Hero shortPara)
};

const PRIMARY_COLOR = COLORS.darkBlue;
const WHITE_BG = '#F7F7F7';

// --- FAQ Color Scheme (Used for the main content section) ---
const faqPrimaryColor = "#004B73"; // Dark Blue (Main Text, Headings)
const faqSecondaryColor = "#F36B21"; // Orange (Accent, Icons)
const faqAccentLight = "#F0F8FF"; // Very Light Blue (Card Backgrounds)
const faqWhite = "#ffffff"; // Pure White

// --- Content Data ---
const FRANCHISE_ROLES = [
  "Service Provider",
  "Advertising Consultant",
  "Marketing Consultant",
  "Legal Consultant",
  "Educational Consultant",
  "Business Consultant",
  "NGO Consultant",
  "Coaching Institute Owner",
  "School Owner",
  "Social Welfare Programme Organiser",
  "News Reporter",
  "Insurance Advisor",
  "Entertainment Programme Event Manager",
];


// ======================================================================
//                                           FRANCHISE WORK LIST COMPONENT (Integrated Intro)
// ======================================================================

const FranchiseContent = () => (
  <motion.div
    className="p-8 md:p-12 rounded-sm shadow-2xl max-w-7xl mx-auto"
    style={{ backgroundColor: faqWhite }} // White main background for contrast
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    {/* --- Introduction Section --- */}
    <div className="text-center mb-10 p-6 rounded-sm" style={{ backgroundColor: faqAccentLight }}>
      <PremiumHeading
        preTitle="HOW FRANCHISE WORKS"
        mainTitleBold="FRANCHISE"
        mainTitleNormal="WORKING"
        subtitle="The mandatory qualifications and requirements to ensure a successful partnership."
        primaryColor={faqPrimaryColor}
        secondaryColor={faqSecondaryColor}
      />
      <p className="text-lg text-gray-700">
        Joining our franchise network means embracing a <b></b>dynamic and diverse career. You are empowered to operate across a vast spectrum of industries, moving beyond a single role to become a comprehensive business solution provider. <b>When you are enrolled as a Franchise, you will work as:</b>
      </p>
    </div>

    {/* --- Work List Section --- */}
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-6 border-b pb-2" style={{ color: faqPrimaryColor, borderColor: faqSecondaryColor + "80" }}>
        Core Operational and Consultancy Roles
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
        {FRANCHISE_ROLES.map((role, index) => (
          <motion.div
            key={index}
            className="flex items-center p-3 rounded-sm font-semibold shadow-md transition-all duration-300"
            style={{ backgroundColor: faqAccentLight, color: faqPrimaryColor, borderLeft: `5px solid ${faqSecondaryColor}` }}
            whileHover={{ scale: 1.02, boxShadow: `0 4px 10px -2px ${faqPrimaryColor}15` }}
          >
            <Briefcase className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: faqSecondaryColor }} />
            <span>{role}</span>
          </motion.div>
        ))}
      </div>
    </div>

  </motion.div>
);


// ======================================================================
// FRANCHISE WORK PAGE LAYOUT
// ======================================================================

const FranchiseWorkPage = () => {
  // Hero Props (Consistent with FaqPage/ContactPage for color)
  const franchisePageProps = {
    title: "Franchise Work Profile",
    subtitle: "Explore the diverse roles and opportunities waiting for you.",
    imageUrl: "/hero.png", // Reused placeholder
    shortPara: "As an Aadimata Venture Franchise, you gain access to a broad scope of business and consultancy sectors.",
    backgroundColor: PRIMARY_COLOR + '05',
  };

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: WHITE_BG }}>

      {/* ===================================================================== */}
      {/* ## 1. Page Hero Component (Same styling as FaqPage) */}
      {/* ===================================================================== */}
      {/* <PageHero {...franchisePageProps} /> */}

      {/* ===================================================================== */}
      {/* ## 2. Franchise Content Section (Integrated Intro and List) */}
      {/* ===================================================================== */}
      <div className="pt-32 pb-4" style={{ backgroundColor: WHITE_BG }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FranchiseContent />
        </div>
      </div>

    </div>
  );
};

export default FranchiseWorkPage;