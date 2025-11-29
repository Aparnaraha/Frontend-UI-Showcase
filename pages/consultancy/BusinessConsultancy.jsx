"use client";

import React from "react";
import { motion } from "framer-motion";
// Importing PageHero (assuming it is available in the current environment scope)
import PageHero from '../../ui/Hero';
import PremiumHeading from "../../ui/PremiumHeading";

// --- ICONS for Services (Using a general business icon) ---
const Briefcase = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>;


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
//                                BUSINESS CONSULTANCY CONTENT COMPONENT
// ======================================================================

const ConsultancyServicesContent = () => {

  const SERVICES_LIST = [
    "MSME / Proprietorship / Partnership Company",
    "Pvt. Ltd / Limited / LLP / OPC Company",
    "PAN / TAN Application",
    "DSC (Digital Signature Certificate)",
    "GST Registration / GST Return Filing / Income Tax Return Filing",
    "Trade Mark Registration / FSSAI / ISO Registration",
    "Export – Import Registration",
    "Labour License",
    "Excise Licence for Tobacco products Unit",
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
          preTitle="Expert Support"
          mainTitleBold="BUSINESS CONSULTANCY"
          mainTitleNormal="SERVICES"
          subtitle="Comprehensive legal, regulatory, and financial compliance services for your business."
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
        />
      </div>

      {/* --- Services List Section --- */}
      <div className="mt-8 space-y-8">
        <h3 className="text-2xl font-bold mb-8 flex items-center" style={{ color: primaryColor }}>
          <Briefcase className="w-6 h-6 mr-3" style={{ color: secondaryColor }} />
          Company Registration & Other Allied Services
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
              <span className="flex-shrink-0 mr-3 mt-1 text-md" style={{ color: secondaryColor }}>
                &bull;
              </span>
              <p className="text-md" style={{ color: primaryColor }}>{service}</p>
            </motion.div>
          ))}
        </div>

        <blockquote className="mt-10 p-4 border-l-4 rounded-sm italic" style={{ borderColor: secondaryColor, backgroundColor: accentLight, color: primaryColor }}>
          We provide end-to-end guidance and filing for all business registration and compliance requirements, ensuring your operations are smooth and fully legal.
        </blockquote>
      </div>

    </motion.div>
  );
};


// ======================================================================
//                                BUSINESS CONSULTANCY PAGE LAYOUT
// ======================================================================

const BusinessConsultancyPage = () => {
  // Hero Props
  const consultancyPageProps = {
    title: "BUSINESS CONSULTANCY SERVICES",
    subtitle: "Your one-stop solution for company registration, compliance, and regulatory licensing.",
    imageUrl: "/hero.png", // Reused placeholder
    shortPara: "Navigate complex regulations easily with our expert support for all your documentation needs.",
    backgroundColor: PRIMARY_COLOR + '05',
  };

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: WHITE_BG }}>

      {/* 1. Page Hero Component */}
      {/* <PageHero {...consultancyPageProps} /> */}

      {/* 2. Business Consultancy Content Section */}
      <div className="pt-32 pb-4" style={{ backgroundColor: WHITE_BG }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ConsultancyServicesContent />
        </div>
      </div>

    </div>
  );
};

export default BusinessConsultancyPage;