"use client";

import React from "react";
import { motion } from "framer-motion";
// Importing PageHero and PremiumHeading from the original file's path
import PageHero from '../ui/Hero';
import PremiumHeading from "../ui/PremiumHeading";
import {
  Users, Target, Eye, Zap, CheckCircle, MapPin, Heart, Lightbulb, Briefcase, Star, Home, Building2
} from 'lucide-react'
import PremiumEnquiryFlow from "../counters/ServiceSteps";

// --- COLOR PALETTE CONSTANTS (Retained from previous component) ---
const COLORS = {
  darkBlue: "#1E4567", // PRIMARY (Used for Hero BG)
};

const PRIMARY_COLOR = COLORS.darkBlue;
const WHITE_BG = '#F7F7F7'; // Page background
const faqPrimaryColor = "#004B73"; // Dark Blue (Main Text, Headings)
const faqSecondaryColor = "#F36B21"; // Orange (Accent, Icons)
const CARD_SOFT_BG = "#FAFDFD"; // Very light, subtle off-white/cyan for a soft, premium feel
const faqWhite = "#ffffff"; // Pure White

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// ======================================================================
//                                        ABOUT PAGE SECTIONS
// ======================================================================

// --- 1. Who We Are Section (UPDATED IMAGE SECTION) ---
const WhoWeAreSection = () => (
  <motion.section
    className="pt-10 pb-8 md:pt-14 md:pb-10 rounded-sm max-w-7xl mx-auto"
    style={{ backgroundColor: faqWhite, boxShadow: '0 10px 30px rgba(0, 75, 115, 0.05)' }}
    variants={containerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="px-4 sm:px-6 lg:px-8">
      <PremiumHeading
        preTitle="Introduction"
        mainTitleBold="WHO WE ARE"
        mainTitleNormal="& OUR REACH"
        subtitle="ADIMATA VENTURES: A trusted name in consultancy and media services."
        primaryColor={faqPrimaryColor}
        secondaryColor={faqSecondaryColor}
      />
    </div>

    <div className="mt-8 grid lg:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8">

      {/* LEFT COLUMN: Content (Text and Compliance) */}
      <div className="flex flex-col space-y-6">

        {/* 1. About Text Content */}
        <motion.div className="space-y-3 text-gray-700" variants={itemVariants}>
          <h3 className="text-xl font-bold border-b pb-2" style={{ color: faqPrimaryColor, borderColor: faqPrimaryColor + "10" }}>
            About ADIMATA VENTURES
          </h3>
          <p className="text-lg leading-relaxed">
            ADIMATA VENTURES is a <b>trusted service provider company established in 2015</b>.
            We are engaged in diverse business activities, including:
          </p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-base pt-2">
            {[
              "Advertising & Publicity", "Marketing & Sales Promotion",
              "Publishing of Books", "Business Consultancy",
              "Educational & NGO consultancy", "Audio & Visual productions",
              "Public Uitility Service", "Digital Media",
              "Promotion of education (pre-primary to university)", "Social Welfare activities"
            ].map((activity, index) => (
              <span key={index} className="flex items-start">
                <Zap className="w-4 h-4 mr-2 mt-1 flex-shrink-0" style={{ color: faqSecondaryColor }} />
                {activity}
              </span>
            ))}
          </div>
        </motion.div>

        {/* 2. Compliance & Registration Card */}
        <motion.div
          className="p-5 rounded-sm space-y-3 flex flex-col justify-between border-2 border-dashed"
          style={{
            backgroundColor: CARD_SOFT_BG,
            borderColor: faqSecondaryColor + "40",
          }}
          variants={itemVariants}
        >
          <div>
            <h4 className="flex items-center text-lg font-bold mb-3" style={{ color: faqSecondaryColor }}>
              <Users className="w-5 h-5 mr-2" />
              Compliance & Registration
            </h4>
            <div className="space-y-2 text-base">
              <p className="flex items-center text-gray-700">
                <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" style={{ color: faqPrimaryColor }} />
                <b>Certification:</b> ISO 9001: 2015
              </p>
              <p className="flex items-center text-gray-700">
                <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" style={{ color: faqPrimaryColor }} />
                <b>Registration:</b> MSME (Govt. of India) & GSTUDYAM: <span className="font-mono ml-1">[Add Udyam Number]</span>
              </p>
              <p className="flex items-center text-gray-700">
                <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" style={{ color: faqPrimaryColor }} />
                <b>PAN:</b> <span className="font-mono ml-1">[Add PAN Number]</span>
              </p>
              <p className="flex items-center text-gray-700">
                <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" style={{ color: faqPrimaryColor }} />
                <b>GST:</b> <span className="font-mono ml-1">[Add GST Number]</span>
              </p>
            </div>
          </div>

          <div className="flex items-center justify-end pt-3 border-t" style={{ borderColor: faqPrimaryColor + "15" }}>
            <MapPin className="w-4 h-4 mr-2" style={{ color: faqSecondaryColor }} />
            <span className="text-sm font-semibold text-gray-600">Established 2015</span>
          </div>
        </motion.div>

      </div>

      {/* RIGHT COLUMN: Image Placeholder (Updated to use /about.png) */}
      <motion.div
        className="relative overflow-hidden rounded-sm shadow-2xl flex items-center justify-center min-h-[350px] lg:min-h-full"
        variants={itemVariants}
      >
        {/* Standard HTML img tag using the provided path */}
        <img
          src="/about.png"
          alt="ADIMATA VENTURES Office or Team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  pointer-events-none"></div> {/* Dark overlay for professionalism */}
      </motion.div>
    </div>
  </motion.section>
);

// --- 2. Mission & Vision Section (Retained) ---
const MissionVisionSection = () => (
  <motion.section
    className="pt-8 pb-8 md:pt-10 md:pb-10 max-w-7xl mx-auto"
    variants={containerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="px-4 sm:px-6 lg:px-8">
      <PremiumHeading
        preTitle="Our Direction"
        mainTitleBold="STRATEGY &"
        mainTitleNormal="GUIDANCE"
        subtitle="Defining our present actions and future goals for client success."
        primaryColor={faqPrimaryColor}
        secondaryColor={faqSecondaryColor}
      />
    </div>

    <div className="mt-8 grid lg:grid-cols-2 gap-6 px-4 sm:px-6 lg:px-8">
      {/* Guiding Mission Card - MODIFIED TO USE FAQ PRIMARY COLOR (DARK BLUE) */}
      <motion.div
        className="p-6 rounded-sm space-y-3 shadow-md border-l-4"
        style={{ backgroundColor: faqWhite, borderColor: faqPrimaryColor }} /* CHANGED: Border color to faqPrimaryColor */
        variants={itemVariants}
      >
        <h4 className="flex items-center text-xl font-bold" style={{ color: faqPrimaryColor }}>
          <Target className="w-6 h-6 mr-3" style={{ color: faqPrimaryColor }} /> {/* CHANGED: Icon color to faqPrimaryColor */}
          Our Guiding Mission
        </h4>
        <p className="text-base text-gray-700 leading-normal">
          Our mission is to act as true Publicity, Marketing, Educational, Business & NGO consultants,
          providing <b>value</b> to our clients by offering them the right <b>engagement and payment tools</b>.
          We aim to become an integral part of our partners’ business processes, helping them <b>reduce overhead</b> and <b>maximize resources</b>.
        </p>
        <div className="pt-3 flex flex-wrap gap-2 border-t" style={{ borderColor: faqPrimaryColor + "15" }}> {/* CHANGED: Border/separator color to faqPrimaryColor + "15" */}
          {["Provide Value", "Engagement Tools", "Reduce Overhead", "Maximize Resources"].map((point, index) => (
            <span key={index} className="px-3 py-1 text-sm font-medium rounded" style={{ backgroundColor: faqPrimaryColor + "10", color: faqPrimaryColor }}> {/* CHANGED: Tag colors to faqPrimaryColor theme */}
              {point}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Forward Vision Card */}
      <motion.div
        className="p-6 rounded-sm space-y-3 shadow-md border-l-4"
        style={{ backgroundColor: faqWhite, borderColor: faqPrimaryColor }}
        variants={itemVariants}
      >
        <h4 className="flex items-center text-xl font-bold" style={{ color: faqPrimaryColor }}>
          <Eye className="w-6 h-6 mr-3" style={{ color: faqPrimaryColor }} />
          Our Forward Vision
        </h4>
        <p className="text-base text-gray-700 leading-normal">
          To listen to our clients and be driven to always provide solutions that <b>exceed their expectations</b>.
          We back these solutions with <b>dedicated employees</b> who understand that providing <b>real value</b> ensures our enterprise prospers and we remain the <b>best solution</b> available.
        </p>
        <div className="pt-3 flex flex-wrap gap-2 border-t" style={{ borderColor: faqPrimaryColor + "15" }}>
          {["Exceed Expectations", "Dedicated Employees", "Real Value", "Best Solution"].map((point, index) => (
            <span key={index} className="px-3 py-1 text-sm font-medium rounded" style={{ backgroundColor: faqPrimaryColor + "10", color: faqPrimaryColor }}>
              {point}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  </motion.section>
);

// --- 3. Core Values Section (Retained) ---
const CoreValuesSection = () => {
  const values = [
    { title: "Professionalism", description: "Uncompromising integrity and pride in everything we do.", icon: Briefcase },
    { title: "Innovation", description: "Intense desire for continuous improvement and growth.", icon: Lightbulb },
    { title: "Customers First", description: "Obsession with high quality workmanship and unmatched value.", icon: Star },
    { title: "Compassion", description: "Commitment to help all team members strive to be the best.", icon: Heart },
    { title: "Community", description: "Creating a friendly and vibrant workplace where creativity is valued.", icon: Home },
  ];

  return (
    <motion.section
      className="pt-8 pb-12 md:pt-10 md:pb-16 max-w-7xl mx-auto"
      style={{ backgroundColor: CARD_SOFT_BG }}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <PremiumHeading
          preTitle="Our Philosophy"
          mainTitleBold="OUR CORE"
          mainTitleNormal="VALUES"
          subtitle="Five pillars defining our operations, integrity, and client obsession."
          primaryColor={faqPrimaryColor}
          secondaryColor={faqSecondaryColor}
        />
      </div>

      <motion.div className="mt-8 grid md:grid-cols-2 lg:grid-cols-5 gap-4 px-4 sm:px-6 lg:px-8" variants={containerVariants}>
        {values.map((value, index) => (
          <motion.div
            key={index}
            className="p-4 rounded-lg space-y-2 flex flex-col items-center text-center h-full border-b-2 transition-all duration-300 hover:shadow-lg"
            style={{
              backgroundColor: faqWhite,
              borderColor: faqSecondaryColor, // CHANGED: Border color to faqSecondaryColor for consistency
            }}
            variants={itemVariants}
          >
            <div className="p-3 rounded-full" style={{ backgroundColor: faqSecondaryColor + "15" }}> {/* CHANGED: Always use faqSecondaryColor + "15" for background */}
              <value.icon
                className="w-6 h-6"
                style={{ color: faqSecondaryColor }} // CHANGED: Always use faqSecondaryColor for icon color
              />
            </div>

            <h5 className="text-base font-bold pt-1" style={{ color: faqPrimaryColor }}>
              {value.title}
            </h5>
            <p className="text-sm text-gray-500 flex-grow">
              {value.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};


// ======================================================================
//                                  ABOUT PAGE LAYOUT
// ======================================================================

const AboutPage = () => {
  // Hero Props (Consistent styling)
  const aboutPageProps = {
    title: "About Us",
    subtitle: "A decade of trust, excellence, and diverse service offerings.",
    imageUrl: "/hero.png", // New placeholder image path
    shortPara: "Since 2015, we have been dedicated consultants in education, business, media, and social welfare, guided by strong values and a clear vision.",
    backgroundColor: PRIMARY_COLOR + '05',
  };

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: WHITE_BG }}>

      {/* ===================================================================== */}
      {/* ## 1. Page Hero Component */}
      {/* ===================================================================== */}
      <PageHero {...aboutPageProps} />

      {/* ===================================================================== */}
      {/* ## 2. About Content Sections */}
      {/* ===================================================================== */}
      <div className="w-full" style={{ backgroundColor: WHITE_BG }}>
        <WhoWeAreSection />
        {/* Subtle Visual Separator */}
        <div className="max-w-7xl mx-auto h-px" style={{ backgroundColor: faqPrimaryColor + "10" }} />
        <MissionVisionSection />
        {/* Subtle Visual Separator */}
        <div className="max-w-7xl mx-auto h-px" style={{ backgroundColor: faqPrimaryColor + "10" }} />
        <CoreValuesSection />
      </div>
      <PremiumEnquiryFlow />
    </div>
  );
};

export default AboutPage;