// src/components/pages/MarketingPage.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import PageHero from '../../ui/Hero';
// Importing an icon for the content section
import { FaBullhorn } from "react-icons/fa";

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

// --- Marketing Content Data ---
const MARKETING_CONTENT = {
    title: "Marketing and Promotion",
    text: "We undertake Marketing and Promotion activities of different production and service Provider Company by MoU. We believe Marketing should have an impact on business growth. This only happens with a highly structured approach to marketing anchored in strategy and diligent modernizing of best practices. Below are areas where we build and strengthen our clients’ business development system.",
    serviceScope: "We are undertaking marketing service of Good Quality Products and Services for throughout Odisha state or any area by our business network",
};


// --- Main Component ---
const MarketingPage = () => {

    // Hero Props (Consistent styling with Advertising page)
    const marketingPageProps = {
        title: "Marketing Services",
        subtitle: "Drive business growth through structured marketing and sales promotion.",
        imageUrl: "/hero.png", // Placeholder image path
        shortPara: "We partner with product and service providers to execute highly effective marketing and sales strategies, focusing on structured growth and regional penetration.",
        backgroundColor: ACCENT_LIGHT,
        shortParaColor: COLORS.textSubtle,
    };

    return (
        <div className="relative min-h-screen" style={{ backgroundColor: WHITE_BG }}>

            {/* ## 1. Page Hero Component */}
            <PageHero {...marketingPageProps} />
            <hr className="border-t border-gray-200" />

            {/* ## 2. Core Content Section */}
            <div className="py-8" style={{ backgroundColor: WHITE_BG }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="p-10 rounded-xl shadow-2xl"
                        style={{ backgroundColor: ACCENT_LIGHT }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className="flex items-start mb-6">
                            <FaBullhorn className="text-5xl mr-5 flex-shrink-0" style={{ color: SECONDARY_COLOR }} />
                            <h2 className="text-2xl sm:text-3xl font-bold pt-1" style={{ color: PRIMARY_COLOR }}>
                                {MARKETING_CONTENT.title}
                            </h2>
                        </div>

                        <p className="text-lg leading-relaxed mb-6" style={{ color: COLORS.textDark }}>
                            {MARKETING_CONTENT.text}
                        </p>

                        <div className="p-4 rounded-lg" style={{ borderLeft: `5px solid ${SECONDARY_COLOR}`, backgroundColor: COLORS.white }}>
                            <p className="font-semibold text-base italic" style={{ color: PRIMARY_COLOR }}>
                                <b>Service Scope:</b> {MARKETING_CONTENT.serviceScope}
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>

        </div>
    );
};

export default MarketingPage;