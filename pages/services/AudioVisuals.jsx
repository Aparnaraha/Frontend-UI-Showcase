// src/components/pages/AudioVisualsPage.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import PageHero from '../../ui/Hero';
// Importing an icon for the content section
import { FaVideo } from "react-icons/fa";

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

// --- Audio Visual Content Data ---
const AUDIO_VISUAL_CONTENT = {
    title: "Comprehensive Audio-Visual Services",
    planning: {
        text: "We work with clients from the first day of planning, assisting with concept and set design, graphics, and creative services.",
        focus: ["Concept Development", "Set Design", "Graphics", "Creative Services"]
    },
    execution: {
        text: "Our company specializes in the creation, planning, and execution of multimedia content.",
        types: ["Videos", "Animations", "Documentaries"]
    },
    scope: "Audio Visual production encompasses all activities related to the creation of audio visual content, whether it is music, movies, television programme, radio programme, social media programme, advertisements or live events. It involves the participation of numerous professionals from design to production and distribution.",
};


// --- Main Component ---
const AudioVisualsPage = () => {

    // Hero Props (Consistent styling with other pages)
    const audioVisualsPageProps = {
        title: "Audio-Visual Services",
        subtitle: "Bringing your stories and messages to life through sight and sound.",
        imageUrl: "/hero.png", // Placeholder image path
        shortPara: "From initial concept planning to final execution and distribution, we manage the entire spectrum of high-quality multimedia content creation for various platforms and events.",
        backgroundColor: ACCENT_LIGHT,
        shortParaColor: COLORS.textSubtle,
    };

    return (
        <div className="relative min-h-screen" style={{ backgroundColor: WHITE_BG }}>

            {/* ## 1. Page Hero Component */}
            <PageHero {...audioVisualsPageProps} />
            <hr className="border-t border-gray-200" />

            {/* ## 2. Core Content Section */}
            <div className="py-8" style={{ backgroundColor: WHITE_BG }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="p-10 rounded-xl shadow-2xl space-y-8"
                        style={{ backgroundColor: ACCENT_LIGHT }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className="flex items-start mb-6 border-b pb-4" style={{ borderColor: SECONDARY_COLOR + '50' }}>
                            <FaVideo className="text-5xl mr-5 flex-shrink-0" style={{ color: SECONDARY_COLOR }} />
                            <h2 className="text-3xl font-bold pt-1" style={{ color: PRIMARY_COLOR }}>
                                {AUDIO_VISUAL_CONTENT.title}
                            </h2>
                        </div>

                        {/* Planning and Execution */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Planning */}
                            <div>
                                <h3 className="text-xl font-bold mb-2" style={{ color: PRIMARY_COLOR }}>
                                    Project Planning & Creative Services
                                </h3>
                                <p className="text-base leading-relaxed mb-3" style={{ color: COLORS.textDark }}>
                                    {AUDIO_VISUAL_CONTENT.planning.text}
                                </p>
                                <ul className="list-disc list-inside space-y-1 text-sm ml-4" style={{ color: COLORS.textSubtle }}>
                                    {AUDIO_VISUAL_CONTENT.planning.focus.map((item, i) => (
                                        <li key={i}><b>{item}</b></li>
                                    ))}
                                </ul>
                            </div>

                            {/* Execution */}
                            <div className="md:border-l md:pl-8" style={{ borderColor: PRIMARY_COLOR + '30' }}>
                                <h3 className="text-xl font-bold mb-2" style={{ color: PRIMARY_COLOR }}>
                                    Core Multimedia Content
                                </h3>
                                <p className="text-base leading-relaxed mb-3" style={{ color: COLORS.textDark }}>
                                    {AUDIO_VISUAL_CONTENT.execution.text} This includes:
                                </p>
                                <ul className="list-disc list-inside space-y-1 text-sm ml-4" style={{ color: SECONDARY_COLOR }}>
                                    {AUDIO_VISUAL_CONTENT.execution.types.map((item, i) => (
                                        <li key={i} style={{ color: PRIMARY_COLOR }}><b>{item}</b></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Broad Scope/Wrap-up */}
                        <div className="pt-4 mt-4 border-t" style={{ borderColor: PRIMARY_COLOR + '30' }}>
                            <p className="text-base leading-relaxed" style={{ color: COLORS.textSubtle }}>
                                {AUDIO_VISUAL_CONTENT.scope}
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>

        </div>
    );
};

export default AudioVisualsPage;