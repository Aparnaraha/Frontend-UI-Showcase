// src/components/pages/PublishingPage.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import PageHero from '../../ui/Hero';
// Importing an icon for the content section
import { FaBookOpen } from "react-icons/fa";

// --- COLOR Constants (Replicated from AdvertisingPage) ---
const COLORS = {
  primaryColor: "#004B73", // Dark Blue
  secondaryColor: "#F36B21", // Orange
  accentLight: "#F0F8FF", // Very Light Blue
  white: "#ffffff", // Pure White
  textDark: "#333333", // General dark text
  textSubtle: "#5A7C9B", // Soft dark text
};

const PRIMARY_COLOR = COLORS.primaryColor;
const SECONDARY_COLOR = COLORS.secondaryColor;
const ACCENT_LIGHT = COLORS.accentLight;
const WHITE_BG = COLORS.white;

// --- Publishing Content Data ---
const PUBLISHING_CONTENT = {
  title: "Educational & General Publishing",
  educational: {
    courses: ["Pre-Primary to Post-Graduate courses", "Various competitive examination aspirants."],
    materials: ["Educational books", "Notebooks", "Test papers", "Guide books", "Worksheets"],
  },
  literary: {
    text: "We publish and distribute informative, literary and religious books for all age groups.",
  },
};


// --- Main Component ---
const PublishingPage = () => {

  // Hero Props (Consistent styling with Advertising/Marketing pages)
  const publishingPageProps = {
    title: "Publishing Services",
    subtitle: "High-quality content for academic excellence and general readership.",
    imageUrl: "/hero.png", // Placeholder image path
    shortPara: "We are committed to the meticulous publication and distribution of valuable educational and literary materials, serving students and readers across all ages.",
    backgroundColor: ACCENT_LIGHT,
    shortParaColor: COLORS.textSubtle,
  };

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: WHITE_BG }}>

      {/* ## 1. Page Hero Component */}
      <PageHero {...publishingPageProps} />
      <hr className="border-t border-gray-200" />

      {/* ## 2. Core Content Section */}
      <div className="py-8" style={{ backgroundColor: WHITE_BG }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="p-10 rounded-xl shadow-2xl grid md:grid-cols-2 gap-10"
            style={{ backgroundColor: ACCENT_LIGHT }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Left Column: Educational */}
            <div>
              <div className="flex items-center mb-4">
                <FaBookOpen className="text-4xl mr-4" style={{ color: SECONDARY_COLOR }} />
                <h3 className="text-2xl font-bold" style={{ color: PRIMARY_COLOR }}>
                  Educational Materials
                </h3>
              </div>
              <p className="text-lg font-semibold mb-3" style={{ color: COLORS.textDark }}>
                Courses Covered:
              </p>
              <ul className="list-disc list-inside space-y-1 text-base ml-4" style={{ color: COLORS.textSubtle }}>
                {PUBLISHING_CONTENT.educational.courses.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>

              <p className="text-lg font-semibold mt-4 mb-3" style={{ color: COLORS.textDark }}>
                Materials Published:
              </p>
              <p className="text-base" style={{ color: COLORS.textSubtle }}>
                <b>{PUBLISHING_CONTENT.educational.materials.join(', ')}.</b>
              </p>
            </div>

            {/* Right Column: Literary & General */}
            <div className="md:border-l md:pl-10" style={{ borderColor: SECONDARY_COLOR + '50' }}>
              <div className="flex items-center mb-4">
                <FaBookOpen className="text-4xl mr-4" style={{ color: SECONDARY_COLOR }} />
                <h3 className="text-2xl font-bold" style={{ color: PRIMARY_COLOR }}>
                  General & Literary Works
                </h3>
              </div>
              <p className="text-lg leading-relaxed" style={{ color: COLORS.textDark }}>
                {PUBLISHING_CONTENT.literary.text}
              </p>

              <div className="mt-6 p-4 rounded-lg" style={{ borderLeft: `5px solid ${PRIMARY_COLOR}`, backgroundColor: COLORS.white }}>
                <p className="font-semibold text-base italic" style={{ color: PRIMARY_COLOR }}>
                  Target Audience: <b>All age groups.</b>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </div>
  );
};

export default PublishingPage;