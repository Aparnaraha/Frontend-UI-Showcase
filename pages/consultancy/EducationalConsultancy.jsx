"use client";

import React from "react";
import { motion } from "framer-motion";
// Importing PageHero from the original file's path
import PageHero from '../../ui/Hero';
import PremiumHeading from "../../ui/PremiumHeading";
import { Zap } from 'lucide-react'

// --- ICONS for Education Consultancy Categories ---
// Note: Assuming these icons are available or need to be defined/imported
const BookOpen = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s4-3 10-3 10 3 10 3-4 3-10 3-10-3-10-3z"></path><circle cx="12" cy="12" r="3"></circle></svg>;
const GraduationCap = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 16V13a2 2 0 0 0-2-2H17.5l-6-6L5.5 11H2.5a2 2 0 0 0-2 2v3"></path><path d="M14 20v-3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3"></path><path d="M12 21a9 9 0 0 0 9-9"></path><path d="M3 12a9 9 0 0 0 9 9"></path></svg>;
const Clipboard = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>;


// --- COLOR PALETTE CONSTANTS (Retained for Hero consistency) ---
const COLORS = {
  darkBlue: "#1E4567", // PRIMARY (Used for Hero BG)
  purple: "#7B3B6B",  // ACCENT (Used for Hero shortPara)
};

const PRIMARY_COLOR = COLORS.darkBlue;
const WHITE_BG = '#F7F7F7';

// --- Color Scheme (Used for the main content section, using the same palette for consistency) ---
const faqPrimaryColor = "#004B73"; // Dark Blue (Main Text, Headings)
const faqSecondaryColor = "#F36B21"; // Orange (Accent, Icons)
const faqAccentLight = "#F0F8FF"; // Very Light Blue (Card Backgrounds)
const faqWhite = "#ffffff"; // Pure White

// --- Content Data ---
const EDUCATIONAL_SERVICES = [
  {
    category: "BOARD EDUCATION",
    icon: Clipboard,
    courses: ["10th (Matric)", "12th (+2)"],
    description: "Courses and Certificates are equivalent to All States Board & BSE, CHSE, ICSE, CBSE.",
  },
  {
    category: "TRADITIONAL EDUCATION",
    icon: BookOpen,
    courses: ["B.A, B.Sc, B.Com", "M.A, M.Sc, M.Com"],
  },
  {
    category: "TEACHING EDUCATION",
    icon: GraduationCap,
    courses: ["B.Ed", "M.Ed", "B.P.Ed", "NTT"],
  },
  {
    category: "MEDICAL",
    icon: BookOpen,
    courses: ["MBBS", "BAMS", "BHMS"],
  },
  {
    category: "ENGINEERING & TECHNICAL",
    icon: GraduationCap,
    courses: ["ITI", "Diploma", "B.Tech", "M.Tech"],
  },
  {
    category: "MANAGEMENT",
    icon: Clipboard,
    courses: ["BBA", "MBA"],
  },
  {
    category: "NURSING",
    icon: BookOpen,
    courses: ["ANM", "GNM", "B.Sc (Nursing)"],
  },
  {
    category: "PHARMACY",
    icon: GraduationCap,
    courses: ["D.Pharma", "B. Pharma"],
  },
  {
    category: "COMPUTER & IT",
    icon: Clipboard,
    courses: ["DCA, PGDCA, BCA, MCA", "Tally, ERP, GST"],
  },
  {
    category: "LAW",
    icon: BookOpen,
    courses: ["LL.B", "LL.M"],
  },
  {
    category: "PROFESSIONAL",
    icon: GraduationCap,
    courses: ["BSW, MSW", "DJMC, BJMC, MJMC"],
  },
  {
    category: "VOCATIONAL & SKILL DEVELOPMENT",
    icon: Clipboard,
    courses: [
      "Carpentry, Laundry Service, Bakery & Confectionary",
      "Welding Technology, Solar Energy Technician, House Keeping",
      "Early Childhood Care & Education, Entrepreneurship, Fashion Designing",
      "Beautician, Food processing, Paramedical and many more…"],
    fullWidth: true, // Use to span more columns for the extensive list
  },
];

// ======================================================================
//                                   EDUCATION CONSULTANCY CONTENT
// ======================================================================

const EducationConsultancyContent = () => (
  <motion.div
    className="p-8 md:p-12 rounded-lg shadow-2xl max-w-7xl mx-auto"
    style={{ backgroundColor: faqWhite }} // White main background for contrast
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    {/* --- Introduction Section (Background Restored) --- */}
    <div className="text-center mb-10 p-6 rounded-lg" style={{ backgroundColor: faqAccentLight }}> {/* <-- Background applied here */}
      <PremiumHeading
        preTitle="Our Offerings"
        mainTitleBold="EDUCATION"
        mainTitleNormal="CONSULTANCY SERVICES"
        primaryColor={faqPrimaryColor}
        secondaryColor={faqSecondaryColor}
      />
      <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
        We provide expert guidance and enrollment support for a <b>wide range of recognized courses</b>, partnering with UGC, AICTE, and other approved universities to ensure quality and valid qualifications.
      </p>
    </div>

    {/* --- Services List Section (Tabular Card Look with increased glow) --- */}
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-6 border-b pb-2" style={{ color: faqPrimaryColor, borderColor: faqSecondaryColor + "80" }}>
        Available Courses by Category
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {EDUCATIONAL_SERVICES.map((service, index) => (
          <motion.div
            key={index}
            className={`p-5 rounded-lg border-2 flex flex-col justify-between transition-all duration-200 ${service.fullWidth ? 'lg:col-span-3 xl:col-span-4' : ''}`}
            // Modern, subtle styling: White background, primary color border, secondary color on hover
            style={{ backgroundColor: faqWhite, borderColor: faqAccentLight, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)' }}
            // Increased glow for better visibility
            whileHover={{ borderColor: faqSecondaryColor, boxShadow: `0 10px 20px -5px ${faqPrimaryColor}40` }}
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center pb-3 mb-3 border-b" style={{ borderColor: faqAccentLight, backgroundColor: faqAccentLight + '60', padding: '10px', margin: '-5px -5px 12px -5px', borderRadius: '4px 4px 0 0' }}>
                {service.icon({ className: "w-5 h-5 mr-3 flex-shrink-0", style: { color: faqPrimaryColor } })}
                <h4 className="text-sm font-semibold uppercase tracking-wider" style={{ color: faqPrimaryColor }}>
                  {service.category}
                </h4>
              </div>

              {/* Course List (Tabular Look) */}
              <div className={service.fullWidth ? "grid grid-cols-2 gap-x-4" : "space-y-2"}>
                {service.courses.map((course, i) => (
                  <div
                    key={i}
                    className="flex items-center text-sm font-medium text-gray-800"
                  >
                    <div className="w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0" style={{ backgroundColor: faqSecondaryColor }} />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>

            {service.description && (
              <p className="mt-4 text-xs italic text-gray-500 pt-3 border-t" style={{ borderColor: faqAccentLight }}>
                Note: {service.description}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </div>

    {/* --- Recognition and Exam Info (HTML bolding used) --- */}
    <div className="mt-10 p-6 rounded-lg border-l-4 shadow-md" style={{ backgroundColor: faqAccentLight, borderColor: faqSecondaryColor }}>
      <h4 className="text-xl font-bold mb-3" style={{ color: faqPrimaryColor }}>
        Important Credentials & Examination
      </h4>
      <ul className="space-y-3 text-gray-700">
        <li className="flex items-start">
          <Zap className="w-5 h-5 mr-3 mt-1 flex-shrink-0" style={{ color: faqSecondaryColor }} />
          <div>
            <b>Recognition:</b> Universities are Recognised & Approved by <b>UGC, NCTE, BCI, PCI, AICTE, DEB, AIU, NAAC A++</b>.
          </div>
        </li>
        <li className="flex items-start">
          <Zap className="w-5 h-5 mr-3 mt-1 flex-shrink-0" style={{ color: faqSecondaryColor }} />
          <div>
            <b>Validity:</b> Certificates are valid for all <b>Jobs & Higher Studies</b>.
          </div>
        </li>
        <li className="flex items-start">
          <Zap className="w-5 h-5 mr-3 mt-1 flex-shrink-0" style={{ color: faqSecondaryColor }} />
          <div>
            <b>Examinations:</b> ALL EXAMS. WILL BE HELD AT OUR OWN CENTRE (Except NIOS).
          </div>
        </li>
      </ul>
    </div>

  </motion.div>
);


// ======================================================================
//                               EDUCATION CONSULTANCY PAGE LAYOUT
// ======================================================================

const EducationConsultancyPage = () => {
  // Hero Props (Consistent styling)
  const educationPageProps = {
    title: "Education Consultancy Services",
    subtitle: "Your path to recognized academic and professional degrees.",
    imageUrl: "/hero.png", // Reused placeholder
    shortPara: "We partner with UGC, AICTE, and other approved universities to offer a vast catalogue of courses, ensuring valid and valuable qualifications.",
    backgroundColor: PRIMARY_COLOR + '05',
  };

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: WHITE_BG }}>

      {/* ===================================================================== */}
      {/* ## 1. Page Hero Component (Uncomment if needed) */}
      {/* <PageHero {...educationPageProps} /> */}

      {/* ===================================================================== */}
      {/* ## 2. Education Content Section (Integrated Intro and List) */}
      {/* ===================================================================== */}
      <div className="pt-32 pb-12" style={{ backgroundColor: WHITE_BG }}> {/* Reduced top padding since PageHero is commented out */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EducationConsultancyContent />
        </div>
        {/* The subtitle prop for PremiumHeading was removed to fit the previous structure */}
      </div>

    </div>
  );
};

export default EducationConsultancyPage;