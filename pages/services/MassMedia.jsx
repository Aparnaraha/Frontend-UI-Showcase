// src/components/pages/MassMediaPage.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import PageHero from '../../ui/Hero';
// Importing an icon for the content section
import { FaNewspaper, FaBroadcastTower } from "react-icons/fa";

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

// --- Mass Media Content Data ---
const MASS_MEDIA_CONTENT = {
  heroTitle: "Mass Media Services",
  planned: {
    newspaper: "Planned newspaper available in both print and e-paper format.",
    digital: "Resolved to start our own web portal and web news channel.",
    content: "Producing content for websites, blogs, social media, and other digital platforms.",
  },
  current: [
    { type: "Weekly Newspaper", name: "Koshal Chetana" },
    { type: "Web Portal & Channel", name: "Koshal Reporter" },
  ]
};


// --- Main Component ---
const MassMediaPage = () => {

  // Hero Props (Consistent styling with other pages)
  const massMediaPageProps = {
    title: MASS_MEDIA_CONTENT.heroTitle,
    subtitle: "Delivering news and content across traditional and modern digital platforms.",
    imageUrl: "/hero.png", // Placeholder image path
    shortPara: "We are expanding our presence into various media segments, focusing on comprehensive news dissemination and engaging digital content creation.",
    backgroundColor: ACCENT_LIGHT,
    shortParaColor: COLORS.textSubtle,
  };

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: WHITE_BG }}>

      {/* ## 1. Page Hero Component */}
      <PageHero {...massMediaPageProps} />
      <hr className="border-t border-gray-200" />

      {/* ## 2. Core Content Section */}
      <div className="py-8" style={{ backgroundColor: WHITE_BG }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="p-10 rounded-xl shadow-2xl space-y-10"
            style={{ backgroundColor: ACCENT_LIGHT }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
          >

            {/* Planned Ventures Section */}
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center" style={{ color: PRIMARY_COLOR }}>
                <FaNewspaper className="mr-3" style={{ color: SECONDARY_COLOR }} />
                Future Media Initiatives
              </h3>
              <ul className="list-disc list-inside space-y-2 text-base pl-5" style={{ color: COLORS.textDark }}>
                <li><b>Newspaper Publishing:</b> {MASS_MEDIA_CONTENT.planned.newspaper}</li>
                <li><b>Digital Broadcasting:</b> {MASS_MEDIA_CONTENT.planned.digital}</li>
                <li><b>Content Production:</b> {MASS_MEDIA_CONTENT.planned.content}</li>
              </ul>
            </div>

            <hr style={{ borderColor: PRIMARY_COLOR + '30' }} />

            {/* Current Promotion Section */}
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center" style={{ color: PRIMARY_COLOR }}>
                <FaBroadcastTower className="mr-3" style={{ color: SECONDARY_COLOR }} />
                Currently Promoting
              </h3>
              <div className="space-y-4">
                {MASS_MEDIA_CONTENT.current.map((item, index) => (
                  <div key={index} className="p-4 rounded-lg border-l-4" style={{ borderColor: SECONDARY_COLOR, backgroundColor: WHITE_BG }}>
                    <p className="text-lg font-semibold" style={{ color: PRIMARY_COLOR }}>
                      {item.name}
                    </p>
                    <p className="text-sm" style={{ color: COLORS.textSubtle }}>
                      <b>Type:</b> {item.type}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>

    </div>
  );
};

export default MassMediaPage;