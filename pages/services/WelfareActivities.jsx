// src/components/pages/SocialWelfarePage.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import PageHero from '../../ui/Hero';
// Importing an icon for the content section
import { FaHeart, FaHandsHelping } from "react-icons/fa";

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

// --- Social Welfare Content Data ---
const SOCIAL_WELFARE_CONTENT = {
  heroTitle: "Social Welfare Services",
  organizations: [
    { name: "Aastha Educational and Charitable Trust", status: "( Registered Under Indian Trust Act )" },
    { name: "Parnika Pratisthan", status: "( Registered Under Societies Registration Act )" },
  ],
  activities: [
    "Teaching, Training and Research",
    "Rural, Urban and Tribal Development",
    "Child, Youth and Women Empowerment",
    "Rehabilitation and Resettlement works",
    "Sustainable Agriculture",
    "Health Awareness",
  ],
  fpo: "Farmers Producer Organisation (FPO)",
  fpo_mission: "working for the development of Farmers as well as Agriculture.",
};


// --- Main Component ---
const SocialWelfarePage = () => {

  // Hero Props (Consistent styling with other pages)
  const socialWelfarePageProps = {
    title: SOCIAL_WELFARE_CONTENT.heroTitle,
    subtitle: "Promoting sustainable development through education, empowerment, and agriculture.",
    imageUrl: "/hero.png", // Placeholder image path
    shortPara: "We are the proud promoter of key social welfare organizations dedicated to fostering inclusive growth across rural, urban, and tribal communities.",
    backgroundColor: ACCENT_LIGHT,
    shortParaColor: COLORS.textSubtle,
  };

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: WHITE_BG }}>

      {/* ## 1. Page Hero Component */}
      <PageHero {...socialWelfarePageProps} />
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
            {/* Promoter Section */}
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center" style={{ color: PRIMARY_COLOR }}>
                <FaHandsHelping className="mr-3" style={{ color: SECONDARY_COLOR }} />
                Promoted Social Welfare Organisations
              </h3>
              <ul className="space-y-3 pl-5">
                {SOCIAL_WELFARE_CONTENT.organizations.map((org, index) => (
                  <li key={index} className="text-lg" style={{ color: COLORS.textDark }}>
                    <span className="font-semibold" style={{ color: PRIMARY_COLOR }}>{org.name}</span>
                    <span className="text-sm italic" style={{ color: COLORS.textSubtle }}> {org.status}</span>
                  </li>
                ))}
              </ul>
            </div>

            <hr style={{ borderColor: PRIMARY_COLOR + '30' }} />

            {/* Activities Section */}
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center" style={{ color: PRIMARY_COLOR }}>
                <FaHeart className="mr-3" style={{ color: SECONDARY_COLOR }} />
                Key Areas of Engagement
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {SOCIAL_WELFARE_CONTENT.activities.map((activity, index) => (
                  <div key={index} className="p-3 rounded-lg font-medium text-sm" style={{ backgroundColor: WHITE_BG, color: PRIMARY_COLOR, border: `1px solid ${SECONDARY_COLOR + '50'}` }}>
                    {activity}
                  </div>
                ))}
              </div>
            </div>

            <hr style={{ borderColor: PRIMARY_COLOR + '30' }} />

            {/* FPO Section */}
            <div className="p-5 rounded-lg border-l-4" style={{ borderColor: SECONDARY_COLOR, backgroundColor: WHITE_BG }}>
              <p className="text-xl font-semibold mb-2" style={{ color: PRIMARY_COLOR }}>
                Farmers Producer Organisation (FPO)
              </p>
              <p className="text-base" style={{ color: COLORS.textDark }}>
                We are also promoting **{SOCIAL_WELFARE_CONTENT.fpo}** who are **{SOCIAL_WELFARE_CONTENT.fpo_mission}**
              </p>
            </div>

          </motion.div>
        </div>
      </div>

    </div>
  );
};

export default SocialWelfarePage;