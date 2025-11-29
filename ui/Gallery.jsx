"use client";

import React from 'react';
import { motion } from 'framer-motion';
// Replace this with your actual Link import (e.g., import { Link } from 'react-router-dom';)
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaRupeeSign, FaArrowRight, FaUsers, FaClipboardCheck, FaMoneyBillWave, FaArrowCircleRight } from 'react-icons/fa';

// Assuming PremiumHeading is available in this path
import PremiumHeading from "../ui/PremiumHeading";

// --- Shared Data ---
const primaryColor = "#004B73"; // Dark Blue
const secondaryColor = "#F36B21"; // Orange
const accentLight = "#F0F8FF"; // Very Light Blue/White
const white = "#fff";

// Fee calculation constants
const FEE_BASE = 11000;
const GST_RATE = 0.18;
const GST_AMOUNT = Math.round(FEE_BASE * GST_RATE); // Rs. 1,980
const FEE_AMOUNT = FEE_BASE; // Rs. 11,000
const TOTAL_FEE = FEE_BASE + GST_AMOUNT; // Rs. 12,980

// Combined data structure for the 4 key aspects and their respective detail links
const FRANCHISEE_DETAILS = [
    {
        icon: FaGraduationCap,
        title: "Eligibility Criteria",
        text: "See the mandatory qualifications, including being a **Graduate** with essential technical knowledge and owning a two-wheeler.",
        path: "/franchisee/eligibility",
    },
    {
        icon: FaUsers,
        title: "Work Profile & Roles",
        text: "Explore the diverse roles you'll undertake, from Service and **Marketing** to Legal and Educational Consulting.",
        path: "/franchisee/works",
    },
    {
        icon: FaMoneyBillWave,
        title: "Investment Details",
        text: `A breakdown of the single, non-refundable fee: **Rs. ${TOTAL_FEE.toLocaleString('en-IN')}** (incl. GST) required for enrollment.`,
        path: "/franchisee/payment",
    },
    {
        icon: FaClipboardCheck,
        title: "Quick Application",
        text: "Follow the simplified 3-step process, starting with a **WhatsApp Request** for the application kit.",
        path: "/franchisee/how-to-become",
    },
];

// --- Main Component: FranchiseeTeaser (For Home Page) ---
const FranchiseeTeaser = () => {

    // Optimized: Kept subtle Y translation and opacity for the main section
    const teaserVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    // Optimized: Removed expensive 'scale' and 'x' transforms. Using only 'y' and 'opacity'.
    const feeBoxVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    // Card variant kept mostly the same as horizontal translation is minor
    const cardVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    }

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            variants={teaserVariants}
            viewport={{ once: true, amount: 0.2 }}
            className="py-8 px-4 rounded-b-lg shadow-xl" // Apply shadow, but no top border
            style={{ backgroundColor: accentLight }}
        >
            <div className="max-w-6xl mx-auto">

                <div className="text-center">
                    <PremiumHeading
                        preTitle="BECOME A LOCAL BUSINESS PARTNER "
                        mainTitleBold="Franchise"
                        mainTitleNormal="Opportunity"
                        subtitle="A low-investment, high-impact consulting role in your own community."
                        primaryColor={primaryColor}
                        secondaryColor={secondaryColor}
                    />
                </div>

                {/* New Introductory Details */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2 }}
                    className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto mb-6 pb-4 text-justify sm:text-center leading-relaxed font-medium border-b border-gray-300"
                >
                    We offer a unique entrepreneurial path to establish yourself as a <b>multi-sector consultant</b> in your region. This opportunity provides comprehensive support and a proven model for immediate income generation with a focus on service delivery and market advertising.
                </motion.p>


                {/* Main Content Grid: Summary on Left, CTA/Fee on Right */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">

                    {/* LEFT COLUMN: 4 Key Aspects Summary (Takes 2/3 width on large screens) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:col-span-2 gap-6">
                        {FRANCHISEE_DETAILS.map((aspect, index) => (
                            <motion.div
                                key={index}
                                className="p-5 bg-white rounded-lg shadow-md border-b-4 flex flex-col justify-between h-full transition duration-300 relative"
                                style={{ borderColor: secondaryColor }}
                                initial="hidden"
                                whileInView="visible"
                                variants={cardVariants}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                // --- NEW: Hover Animations for Tilt and Zoom ---
                                whileHover={{
                                    scale: 1.03, // Slight zoom
                                    rotate: index % 2 === 0 ? 0.3 : -0.3, // Slight tilt (alternating direction)
                                    boxShadow: "0 20px 40px -10px rgba(0, 75, 115, 0.3)", // Enhanced shadow
                                    transition: { duration: 0.3 }
                                }}
                            // ---------------------------------------------
                            >
                                <div>
                                    <aspect.icon className="text-2xl mb-3" style={{ color: primaryColor }} />
                                    <h4 className="text-lg font-bold mb-2" style={{ color: primaryColor }}>{aspect.title}</h4>
                                    <p className="text-sm text-gray-700 mb-4">
                                        <span dangerouslySetInnerHTML={{ __html: aspect.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                                    </p>
                                </div>

                                {/* Read More Link */}
                                <Link to={aspect.path} className="text-sm font-semibold flex items-center mt-3" style={{ color: secondaryColor }}>
                                    Read More Details <FaArrowCircleRight className="ml-2 h-3 w-3" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* RIGHT COLUMN: Detailed Fee Summary Box (Takes 1/3 width on large screens) */}
                    <div className="flex items-center justify-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={feeBoxVariants} // Uses optimized feeBoxVariants
                            viewport={{ once: true, amount: 0.1 }}
                            className="p-6 md:p-8 rounded-lg shadow-xl w-full"
                            style={{ backgroundColor: primaryColor }}
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-4 md:mb-5 flex items-center justify-center">
                                <FaRupeeSign className="mr-2 text-white text-lg md:text-xl" /> Franchise Payment
                            </h3>

                            <div className="space-y-2 text-white text-sm md:text-base">
                                <div className="flex justify-between items-center pb-2 border-b" style={{ borderColor: secondaryColor }}>
                                    <span className="font-medium">Franchise Fee (Base)</span>
                                    <span className="font-semibold flex items-center"><FaRupeeSign className="text-xs md:text-base mr-1" />{FEE_AMOUNT.toLocaleString('en-IN')}</span>
                                </div>
                                <div className="flex justify-between items-center pb-2 border-b" style={{ borderColor: secondaryColor }}>
                                    <span className="font-medium">18% GST</span>
                                    <span className="font-semibold flex items-center"><FaRupeeSign className="text-xs md:text-base mr-1" />{GST_AMOUNT.toLocaleString('en-IN')}</span>
                                </div>
                            </div>

                            {/* Total Fee Section */}
                            <div className="mt-4 md:mt-6 p-2 md:p-3 rounded-md flex justify-between items-center" style={{ backgroundColor: secondaryColor, color: white }}>
                                <span className="font-bold text-base md:text-lg">Total Non-Refundable:</span>
                                <span className="font-bold text-xl md:text-2xl flex items-center">
                                    <FaRupeeSign className="text-lg md:text-xl mr-1" />{TOTAL_FEE.toLocaleString('en-IN')}
                                </span>
                            </div>

                            <p className="text-xxs md:text-xs text-white opacity-80 mt-2 text-center">
                                *This total fee is non-refundable upon submission.
                            </p>

                            {/* CTA Button */}
                            <Link
                                to="/franchise" // Directs to the full content page
                                className="inline-flex items-center justify-center w-full mt-6 px-6 py-2 border border-transparent text:sm sm:text-lg font-bold rounded-full shadow-lg transition duration-300 transform bg-white text-black hover:bg-gray-100 hover:scale-[1.02]"
                                style={{ color: primaryColor }} // Using primary color for text
                            >
                                View All Details & Apply <FaArrowRight className="ml-3 h-4 w-4" />
                            </Link>

                        </motion.div>
                    </div>

                </div>
            </div>
        </motion.section>
    );
};

export default FranchiseeTeaser;