"use client";

import React from "react";
import { motion } from "framer-motion";
// Importing PageHero (assuming it is available in the current environment scope)
import PageHero from '../../ui/Hero';
import PremiumHeading from "../../ui/PremiumHeading";

// --- ICONS for Services ---
const Users = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>;


// --- COLOR PALETTE CONSTANTS (Reused from previous context) ---
const COLORS = {
  darkBlue: "#1E4567", // PRIMARY (Used for Hero BG)
};

const PRIMARY_COLOR = COLORS.darkBlue;
const WHITE_BG = '#F7F7F7';

// --- Color Scheme for Content ---
const primaryColor = "#004B73"; // Dark Blue (Main Text, Headings)
const secondaryColor = "#F36B21"; // Orange (Accent, Icons)
const accentLight = "#F0F8FF"; // Very Light Blue (Card Backgrounds)
const white = "#ffffff"; // Pure White


// ======================================================================
//                                NGO CONSULTANCY CONTENT COMPONENT
// ======================================================================

const NGOConsultancyServicesContent = () => {

  const SERVICES_LIST = [
    "NGO Registration",
    "Club Registration / Yubak Sangha Registration",
    "Society Registration",
    "Trust Registration",
    "NITI Ayog / NGO Darpan Registration",
    "MSME Registration (for allied activities)",
    "12 A & 80 G of IT Act. Registration",
    "FCRA Registration (Foreign Contribution Regulation Act)",
    "CSR-1 Registration (Corporate Social Responsibility)",
    "E-Anudan Application Support",
    "ISO Registration",
    "Audit Report & Balance sheet Preparation",
    "Annual Report Preparation",
    "Project Proposal Preparation",
  ];

  return (
    <motion.div
      className="p-8 md:p-12 rounded-sm shadow-2xl max-w-7xl mx-auto"
      style={{ backgroundColor: white }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* --- Introduction/Heading Section --- */}
      <div className="text-center mb-10 p-6 rounded-sm" style={{ backgroundColor: accentLight }}>
        <PremiumHeading
          preTitle="Social Sector Support"
          mainTitleBold="NGO CONSULTANCY"
          mainTitleNormal="SERVICES"
          subtitle="Comprehensive legal, registration, and management services for Societies, Trusts, and NGOs."
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
        />
      </div>

      {/* --- Services List Section --- */}
      <div className="mt-8 space-y-8">
        <h3 className="text-2xl font-bold mb-8 flex items-center" style={{ color: primaryColor }}>
          <Users className="w-6 h-6 mr-3" style={{ color: secondaryColor }} />
          Registration & Management Services
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {SERVICES_LIST.map((service, index) => (
            <motion.div
              key={index}
              className="flex items-start"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <span className="flex-shrink-0 mr-3 mt-1  text-md" style={{ color: secondaryColor }}>
                &bull;
              </span>
              <p className=" text-md" style={{ color: primaryColor }}>{service}</p>
            </motion.div>
          ))}
        </div>

        <blockquote className="mt-10 p-4 border-l-4 rounded-sm italic" style={{ borderColor: secondaryColor, backgroundColor: accentLight, color: primaryColor }}>
          We support non-profit and social organizations through every stage, from initial registration (Society, Trust, NGO) to securing essential compliance certificates like 12A, 80G, and FCRA.
        </blockquote>
      </div>

    </motion.div>
  );
};


// ======================================================================
//                                NGO CONSULTANCY PAGE LAYOUT
// ======================================================================

const NGOConsultancyPage = () => {
  // Hero Props
  const consultancyPageProps = {
    title: "NGO CONSULTANCY SERVICES",
    subtitle: "Dedicated support for non-profit registration, compliance, and project management.",
    imageUrl: "/hero.png", // Reused placeholder
    shortPara: "Focus on your mission while we handle the legal and financial compliance of your Society or Trust.",
    backgroundColor: PRIMARY_COLOR + '05',
  };

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: WHITE_BG }}>

      {/* 1. Page Hero Component */}
      {/* <PageHero {...consultancyPageProps} /> */}

      {/* 2. NGO Consultancy Content Section */}
      <div className="pt-32 pb-4" style={{ backgroundColor: WHITE_BG }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NGOConsultancyServicesContent />
        </div>
      </div>

    </div>
  );
};

export default NGOConsultancyPage;
