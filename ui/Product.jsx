// src/components/PremiumServicePortfolio.js (V18 - Two Keywords Display)
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom"; // Using react-router-dom Link
import { FaBullhorn, FaBullseye, FaBook, FaDesktop, FaGraduationCap, FaHandshake, FaUserShield, FaCar, FaFilm, FaHeart, FaPlusCircle, FaMinusCircle, FaTag, FaArrowRight } from "react-icons/fa";
import PremiumHeading from "./PremiumHeading"; 

// 🎨 Color Scheme 
const primaryColor = "#004B73"; 
const secondaryColor = "#F36B21"; 
const tagBorderColor = "#D65C1A"; 
const tagInnerBg = "#FFFFFF"; 
const white = "#ffffff";
const accentLight = "#F0F8FF"; 
const darkText = "#333333";

// Helper function to extract and format keywords
const processDescription = (description) => {
    const keywordRegex = /<b>(.*?)<\/b>/g;
    const allKeywords = [];
    
    // 1. Extract all keywords
    let match;
    while ((match = keywordRegex.exec(description)) !== null) {
        allKeywords.push(match[1]);
    }
    
    // 2. Select the first two keywords for tagging
    const taggedKeywords = allKeywords.slice(0, 2);
    
    // 3. Reconstruct the description, keeping all keywords bolded, 
    // but only highlighting them for visual display in the description text.
    let cleanedDescription = description.replace(keywordRegex, (fullMatch, keyword) => {
        return `<span style="color: ${primaryColor}; font-weight: 700;">${keyword}</span>`; 
    });

    // We no longer remove keywords from the description, we just select the first two 
    // for the separate tag display. The cleaning step above handles making all 
    // bolded text colored.
    
    return { cleanedDescription, keywords: taggedKeywords };
};


// --- Service Path Data Mapping (for Link component) ---
const generalServices = [
    { name: "Advertising & Publicity", path: "/services/advertising" }, 
    { name: "Marketing & Sales Promotion", path: "/services/marketing" }, 
    { name: "Publishing", path: "/services/publishing" },
    { name: "Mass Media", path: "/services/mass-media" },
    { name: "Education Promotion Services", path: "/services/education" }, 
    { name: "Consultancy Services", path: "/services/consultancy" }, 
    { name: "Insurance Solutions", path: "/services/insurance" }, 
    { name: "Audio-Visual Productions", path: "/services/audio-visuals" }, 
    { name: "Public Utility Services", path: "/services/utility" }, 
    { name: "Social Welfare Activities", path: "/services/welfare" }, 
];

const getPath = (title) => {
    const service = generalServices.find(s => s.name === title);
    return service ? service.path : "#";
};

// --- Services Data (Updated with Paths) ---
const SERVICES_DATA = [
    { 
        title: "Advertising & Publicity", 
        description: "We undertake comprehensive strategies for achieving widespread brand visibility. Activities cover <b>Print Medias</b>, <b>Digital Campaigns</b>, <b>Event Management</b>, and <b>Materials Design</b>.", 
        icon: FaBullhorn,
        path: getPath("Advertising & Publicity")
    },
    { 
        title: "Marketing & Sales Promotion", 
        description: "Driving commercial success through targeted promotional campaigns. We ensure high-impact <b>Business Growth</b>, <b>Promotion</b>, <b>Market Engagement</b>, and <b>Structured Strategy</b>.", 
        icon: FaBullseye,
        path: getPath("Marketing & Sales Promotion")
    },
    { 
        title: "Publishing", 
        description: "We publish and distribute educational and literary content across age groups, including <b>Educational Books</b>, <b>Guide Books</b>, <b>Competitive Exams</b> materials, and <b>Religious Books</b>.", 
        icon: FaBook,
        path: getPath("Publishing")
    },
    { 
        title: "Mass Media", 
        description: "Leveraging modern channels for maximum audience reach. We produce content for <b>Web Portal</b>, <b>Web Channel</b>, <b>E-Paper</b>, and <b>Newspaper Publishing</b>.", 
        icon: FaDesktop,
        path: getPath("Mass Media")
    },
    { 
        title: "Education Promotion Services", 
        description: "Dedicated promotion and specialized consultancy for all academic levels, spanning from <b>Pre-Primary</b>, <b>University Level</b>, <b>Institutional Promotion</b>, and <b>Advisory Services</b>.", 
        icon: FaGraduationCap,
        path: getPath("Education Promotion Services")
    },
    { 
        title: "Consultancy Services", 
        description: "Offering specialized advisory services tailored for key sectors: <b>Business Consultancy</b>, <b>NGO Consultancy</b>, <b>Educational Guidance</b>, and <b>Specialized Advisory</b>.", 
        icon: FaHandshake,
        path: getPath("Consultancy Services")
    },
    { 
        title: "Insurance Solutions", 
        description: "Providing reliable guidance and coverage options for corporate and personal needs: <b>Health Insurance</b>, <b>Motor Insurance</b>, <b>Life Insurance</b> plans, and <b>General Coverage</b>.", 
        icon: FaUserShield,
        path: getPath("Insurance Solutions")
    },
    { 
        title: "Public Utility Services", 
        description: "Efficient provision of essential public services and facilitation: <b>TIN-FC/PAN</b>, <b>AePS/Micro ATM</b>, <b>Bill Payments</b>, and <b>Travel Booking</b>.", 
        icon: FaCar,
        path: getPath("Public Utility Services")
    },
    { 
        title: "Audio-Visual Productions", 
        description: "End-to-end creation of high-quality multimedia content, specializing in <b>Corporate Videos</b>, <b>Documentaries</b>, <b>Animations</b>, and <b>Media Assets</b>.", 
        icon: FaFilm,
        path: getPath("Audio-Visual Productions")
    },
    { 
        title: "Social Welfare Activities", 
        description: "Profound commitment to social responsibility through impactful programs: <b>Rural Development</b>, <b>Women Empowerment</b>, <b>FPO Promotion</b>, and <b>Health Awareness</b>.", 
        icon: FaHeart,
        path: getPath("Social Welfare Activities")
    },
];

// --- Animation Variants ---
const containerVariants = {
    visible: { 
        transition: { 
            staggerChildren: 0.05, 
            delayChildren: 0.1 
        } 
    },
};

const itemLift = {
    hidden: { opacity: 0, y: 30 }, 
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            type: "spring",
            damping: 20, 
            stiffness: 150 
        } 
    },
    exit: { 
        opacity: 0, 
        y: 30,
        transition: { duration: 0.3 }
    }
};

// --- Service Card Component (Optimized) ---
const ServiceCard = ({ service }) => {
    // Only the first two keywords are returned for the tags, 
    // but the full description retains all bolded words.
    const { cleanedDescription, keywords } = processDescription(service.description); 
    
    return (
        <motion.div
            className="h-full flex flex-col relative overflow-hidden transition-shadow duration-300 group rounded-md" 
            style={{ 
                backgroundColor: white,
                border: `1px solid ${primaryColor}15`, 
                minHeight: '320px', 
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
            }}
            whileHover={{
                boxShadow: `0 6px 15px ${primaryColor}20`,
                y: -5, 
                transition: { duration: 0.2, type: "tween" }
            }}
            variants={itemLift}
        >
            {/* 1. Content Body */}
            <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center mb-4">
                    <div className="p-2 mr-3 flex-shrink-0 rounded-full" style={{ backgroundColor: accentLight, color: primaryColor }}>
                        <service.icon size={24} /> 
                    </div>
                    <h5 className="text-xl font-bold leading-snug" style={{ color: primaryColor }}>{service.title}</h5>
                </div>
                
                {/* Key Deliverables/Keywords (Now only displays max 2) */}
                {keywords.length > 0 && (
                    <div className="mb-6">
                        <p className="text-xs font-medium uppercase mb-1" style={{ color: primaryColor }}>Key Focus Areas:</p>
                        <div className="flex flex-wrap gap-2">
                            {/* Iterates over the new 'keywords' array which holds max 2 items */}
                            {keywords.map((keyword, i) => (
                                <div 
                                    key={i}
                                    className="px-2 py-1 flex items-center rounded-sm" 
                                    style={{ 
                                        backgroundColor: tagInnerBg,
                                        border: `1px solid ${tagBorderColor}`,
                                        color: tagBorderColor,
                                        fontSize: '0.7rem',
                                        fontWeight: 600,
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    <FaTag size={9} className="mr-1" style={{ color: tagBorderColor }} />
                                    {keyword}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Description Text (Retains all bolded text, including the keywords not shown in tags) */}
                <p 
                    className="text-sm flex-grow pb-4" 
                    style={{ color: darkText }} 
                    dangerouslySetInnerHTML={{ __html: cleanedDescription }}
                />

                {/* 2. Footer/Know More Link */}
                <div className="mt-auto border-t" style={{ borderTopColor: primaryColor + '10' }}>
                    <Link 
                        to={service.path}
                        className="pt-3 flex items-center justify-between font-semibold uppercase text-xs w-full transition-colors duration-300 group-hover:text-opacity-80"
                        style={{ 
                            backgroundColor: white,
                            color: primaryColor,
                        }}
                    >
                        View Details
                        <FaArrowRight size={12} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" style={{ color: secondaryColor }}/>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

// --- Main Service Portfolio Component (Optimized) ---
const PremiumServicePortfolio = () => {
    const [showAll, setShowAll] = useState(false);
    
    const initialDisplayCount = 4;
    
    const visibleServices = showAll ? SERVICES_DATA : SERVICES_DATA.slice(0, initialDisplayCount);
    const hasMore = SERVICES_DATA.length > initialDisplayCount; 
    
    const toggleIcon = showAll ? FaMinusCircle : FaPlusCircle;
    const remainingCount = SERVICES_DATA.length - initialDisplayCount;
    const toggleText = showAll ? "Show Less" : `Show All ${SERVICES_DATA.length} Services (${remainingCount} More)`;

    return (
        <section className="py-8 px-4" style={{ backgroundColor: accentLight }}> 
            <div className="max-w-6xl mx-auto">
                <PremiumHeading
                    preTitle="WHAT WE OFFER"
                    mainTitleBold="Our Key Service"
                    mainTitleNormal="Portfolio" 
                    subtitle="A structured overview of our comprehensive solutions and key delivery areas."
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                />
                
                {/* Service Grid Container */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-12"
                    variants={containerVariants} 
                    initial="hidden"
                    animate="visible"
                >
                    <AnimatePresence>
                        {visibleServices.map((service, index) => (
                            <ServiceCard key={service.title} service={service} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Show More Button (mt-12 for extra space) */}
                {hasMore && (
                    <div className="text-center mt-12">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="flex items-center justify-center text-base font-medium px-8 py-3 shadow-lg transition-all duration-300 tracking-wider uppercase" 
                            style={{ 
                                backgroundColor: primaryColor, 
                                color: white,
                                margin: '0 auto',
                                borderRadius: '4px' 
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = secondaryColor;
                                e.currentTarget.style.boxShadow = `0 5px 15px ${secondaryColor}60`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = primaryColor;
                                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)'; 
                            }}
                        >
                            <motion.div 
                                key={showAll ? "minus" : "plus"}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1, rotate: showAll ? 180 : 0 }}
                                exit={{ opacity: 0, scale: 0.5, rotate: showAll ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="mr-3 flex items-center justify-center"
                            >
                                {React.createElement(toggleIcon, { size: 18 })}
                            </motion.div>
                            {toggleText}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default PremiumServicePortfolio;