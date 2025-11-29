"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// Using consistent icons
import { FaBookOpen, FaLightbulb, FaGlobe, FaChalkboardTeacher, FaArrowRight } from 'react-icons/fa'; // Updated icons for better fit

// --- Aadimata Venture Brand Colors ---
const primaryColor = "#004B73"; // Dark Blue
const secondaryColor = "#F36B21"; // Orange (Accent)
const white = "#fff";
const grayLight = "#F9FAFB"; // Very light background for contrast
const darkBlueDeep = "#003A59";

// --- Animation Variants ---
const mainContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
            when: "beforeChildren",
        }
    }
};

const segmentReveal = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardItemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 150 } },
};

// Data for the Features List - UPDATED CONTENT
const ADIMATA_VENTURES_STRENGTHS = [
    {
        icon: FaLightbulb, // Icon for Business Consultancy/Strategy
        label: "Strategic Business Consulting",
        desc: "Expert guidance for growth, planning, and operational efficiency.",
        color: primaryColor,
    },
    {
        icon: FaGlobe, // Icon for Marketing/Digital Media
        label: "Integrated Media & Marketing",
        desc: "Full-spectrum advertising, sales promotion, and digital media solutions.",
        color: secondaryColor,
    },
    {
        icon: FaBookOpen, // Icon for Publishing/Content
        label: "Professional Publishing Services",
        desc: "Publishing of books, newspapers, periodicals, and audio-visual production.",
        color: primaryColor,
    },
    {
        icon: FaChalkboardTeacher, // Icon for Education/NGO
        label: "Educational & NGO Promotion",
        desc: "Consultancy and promotion across all levels of the education sector.",
        color: secondaryColor,
    },
];

const MinimalistAnimatedCTA = () => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            variants={mainContainerVariants}
            viewport={{ once: true, amount: 0.1 }}
            className="w-full py-8 px-6 lg:px-12"
        >
            <div
                className="max-w-6xl mx-auto rounded-sm overflow-hidden shadow-2xl flex flex-col lg:flex-row items-stretch"
                style={{ border: `1px solid ${primaryColor}10` }}
            >
                {/* LEFT SEGMENT: Headline & CTA (Dark/Premium Background) */}
                <motion.div
                    variants={segmentReveal}
                    className="p-8 md:p-12 w-full lg:w-1/3 flex flex-col justify-center text-center lg:text-left"
                    style={{
                        backgroundColor: primaryColor,
                        color: white,
                    }}
                >
                    {/* UPDATED PRE-HEADER */}
                    <p
                        className="text-xs font-medium uppercase tracking-[0.2em] mb-2"
                        style={{ color: secondaryColor }}
                    >
                        ADIMATA VENTURES: ESTABLISHED IN 2015
                    </p>
                    {/* UPDATED HEADLINE */}
                    <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-6">
                        Drive Your Vision with Our <span style={{ color: secondaryColor }}>Diverse Business</span> Ecosystem
                    </h2>

                    {/* CTA Button */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="w-full sm:w-auto lg:self-start self-center"
                    >
                        <Link
                            to="/contact" // Changed link to /contact or /services
                            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-md shadow-lg transition duration-300 w-full lg:w-auto"
                            style={{
                                backgroundColor: secondaryColor,
                                color: primaryColor,
                            }}
                        >
                            <FaArrowRight className="mr-2 h-3 w-3" /> Contact To Join Our Services
                        </Link>
                    </motion.div>
                </motion.div>

                {/* RIGHT SEGMENT: Feature Cards (Light Background) */}
                <div
                    className="p-8 md:p-12 w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6"
                    style={{ backgroundColor: grayLight }}
                >
                    {ADIMATA_VENTURES_STRENGTHS.map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={cardItemVariants}
                            // Re-introducing the lift and subtle shadow/scale on hover
                            whileHover={{ scale: 1.05, y: -3, boxShadow: `0 8px 15px ${item.color}30` }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="p-4 rounded-lg text-left border flex flex-col justify-start h-full"
                            style={{
                                backgroundColor: white, // White card background
                                borderColor: primaryColor + '10', // Light border
                                borderTop: `4px solid ${item.color}`, // Color accent on top
                            }}
                        >
                            <item.icon size={24} className="mb-2" style={{ color: item.color }} />
                            {/* Feature label size */}
                            <h5 className="text-base font-bold mb-1" style={{ color: primaryColor }}>{item.label}</h5>
                            {/* Description size */}
                            <p className="text-xs text-gray-600">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default MinimalistAnimatedCTA;