"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'; // 👈 ADDED: Link import
import { 
    Heart, Car, Shield, Home, Briefcase, Zap, ArrowRight, Ambulance
} from 'lucide-react';

// NOTE: Using the specified relative paths for components
import PageHero from '../../ui/Hero'; 
import PremiumHeading from "../../ui/PremiumHeading"; 

// --- COLOR PALETTE CONSTANTS (Consistent) ---
const PRIMARY_COLOR = "#1E4567"; // Dark Blue (Hero BG)
const WHITE_BG = '#F7F7F7';       // Page background
const faqPrimaryColor = "#004B73"; // Dark Blue (Main Text, Headings)
const faqSecondaryColor = "#F36B21"; // Orange (Accent, Icons)
const CARD_SOFT_BG = "#FAFDFD"; 
const faqWhite = "#ffffff";
const darkText = "#333333";

// --- Animation Variants ---
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", damping: 18, stiffness: 100 } 
    },
};


// ======================================================================
// 1. SERVICES DATA
// ======================================================================
const INSURANCE_DATA = [
    {
        title: "HEALTH INSURANCE",
        icon: Heart,
        color: PRIMARY_COLOR, // Orange
        focusAreas: [
            "Individual Health Insurance",
            "Family Floater Health plans",
            "Travel Insurance",
            "Group Health Insurance"
        ],
        // 👈 ADDED: Contact path
        contactPath: "/contact" 
    },
    {
        title: "MOTOR INSURANCE",
        icon: Car,
        color: PRIMARY_COLOR, // Using Primary Color for Motor
        focusAreas: [
            "Bike Insurance",
            "Car Insurance",
            "Commercial Vehicle (Any Type)",
            "Brand New Vehicle Insurance"
        ],
        // 👈 ADDED: Contact path
        contactPath: "/contact" 
    },
    {
        title: "LIFE INSURANCE",
        icon: Shield,
        color: PRIMARY_COLOR, // Emerald Green for Life
        focusAreas: [
            "Guaranteed Maturity plans",
            "Guaranteed Money Back plans",
            "Term Life Insurance plans"
        ],
        // 👈 ADDED: Contact path
        contactPath: "/contact" 
    },
    {
        title: "GENERAL INSURANCE",
        icon: Home,
        color: PRIMARY_COLOR, // Darker Brown/Rust for General
        focusAreas: [
            "Home Insurance",
            "Warehouse Insurance",
            "Flat Insurance",
            "Fire Insurance",
            "Marine"
        ],
        // 👈 ADDED: Contact path
        contactPath: "/contact" 
    },
];

// ======================================================================
// 2. INSURANCE CARD COMPONENT (UPDATED for Link and CTA Text)
// ======================================================================
const InsuranceCard = ({ service }) => {
    return (
        <motion.div
            className="p-8 rounded-2xl shadow-xl flex flex-col h-full transition-all duration-500 ease-in-out group relative overflow-hidden transform"
            style={{ 
                backgroundColor: faqWhite, 
                border: `1px solid ${service.color}20`,
                boxShadow: `0 4px 20px -5px ${service.color}30`, 
            }}
            variants={itemVariants}
            whileHover={{ 
                y: -8, 
                boxShadow: `0 10px 40px -10px ${service.color}50`,
            }} 
        >
            {/* Background Accent Shape */}
            <div 
                className="absolute inset-x-0 top-0 h-1/4 opacity-10 transition-opacity duration-500 group-hover:opacity-20"
                style={{ backgroundColor: service.color }}
            ></div>
            
            <div className="flex flex-col items-center text-center mb-6 relative z-10">
                <div 
                    className="p-4 mb-4 rounded-xl flex-shrink-0 transition-all duration-300 transform group-hover:scale-105"
                    style={{ backgroundColor: service.color + "15", color: service.color }}
                >
                    <service.icon size={36} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-extrabold tracking-wide uppercase mt-6" style={{ color: faqPrimaryColor }}>
                    {service.title}
                </h3>
            </div>

            {/* Focus Areas - Emphasized */}
            <div className="mb-8 space-y-3 flex-grow relative z-10">
                <p className="text-sm font-bold uppercase mb-3" style={{ color: faqSecondaryColor }}>
                    Key Coverage Areas:
                </p>
                <ul className="space-y-3">
                    {service.focusAreas.map((area, index) => (
                        <li key={index} className="flex items-start text-sm font-medium" style={{ color: darkText }}>
                            <Zap className="w-4 h-4 mt-1 mr-3 flex-shrink-0" style={{ color: service.color }} />
                            {area}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Action Button: Replaced motion.button with Link */}
            <Link 
                to={service.contactPath} // 👈 USING react-router-dom Link and contactPath
                className="mt-auto flex items-center justify-center px-4 py-3 font-bold uppercase text-xs tracking-widest w-full rounded-lg transition-all duration-300 transform relative z-10 hover:shadow-lg"
                style={{ backgroundColor: service.color, color: faqWhite }}
                // Added a hover effect via style to replicate the button transition
                onMouseOver={e => e.currentTarget.style.backgroundColor = faqSecondaryColor}
                onMouseOut={e => e.currentTarget.style.backgroundColor = service.color}
            >
                Contact for Customized Plans {/* 👈 UPDATED BUTTON TEXT */}
                <ArrowRight size={16} className="ml-2" />
            </Link>
        </motion.div>
    );
};

// ======================================================================
// 3. INTRODUCTORY SECTION - USING STANDARD <img> TAG
// ======================================================================
const InsuranceIntroSection = () => (
    <motion.section
        className="py-8"
        style={{ backgroundColor: faqWhite }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
    >
        {/* The grid container forces equal height columns (grid items) */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            
            <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-bold tracking-tight mb-4" style={{ color: faqPrimaryColor }}>
                    Your Trusted Shield Against Uncertainty
                </h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    In an unpredictable world, **insurance is the backbone of financial stability**. We partner with leading providers to offer a diverse portfolio of plans designed to protect every aspect of your life—your health, your assets, and your future.
                </p>
                <div className="space-y-4">
                    <div className="flex items-start">
                        <div className="p-2 mr-3 rounded-full" style={{ backgroundColor: faqSecondaryColor + "15", color: faqSecondaryColor }}>
                            <Shield size={20} />
                        </div>
                        <div>
                            <h4 className="font-semibold text-base" style={{ color: faqPrimaryColor }}>Holistic Coverage</h4>
                            <p className="text-sm text-gray-600">Plans covering life, health, motor, and assets.</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="p-2 mr-3 rounded-full" style={{ backgroundColor: faqSecondaryColor + "15", color: faqSecondaryColor }}>
                            <Briefcase size={20} />
                        </div>
                        <div>
                            <h4 className="font-semibold text-base" style={{ color: faqPrimaryColor }}>Easy Claims Process</h4>
                            <p className="text-sm text-gray-600">Dedicated support to handle your claims efficiently.</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Image using standard <img> tag */}
            <motion.div
                className="relative overflow-hidden rounded-xl shadow-2xl flex items-center justify-center"
                variants={itemVariants}
            >
                <div className="min-h-[300px] w-full relative"> 
                    <img
                        src="/insurance.png" 
                        alt="Abstract representation of various insurance policies and protection"
                        className="absolute inset-0 w-full h-full object-cover z-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                </div>
            </motion.div>
        </div>
    </motion.section>
);


// ======================================================================
// 4. CORE INSURANCE PORTFOLIO (Service Cards)
// ======================================================================
const InsuranceServicePortfolio = () => {
    return (
        <section className="py-8 px-4" style={{ backgroundColor: CARD_SOFT_BG }}> 
            <div className="max-w-6xl mx-auto"> 
                <PremiumHeading
                    preTitle="FINANCIAL SECURITY"
                    mainTitleBold="CORE INSURANCE"
                    mainTitleNormal="SOLUTIONS" 
                    subtitle="Our comprehensive portfolio covers all major risk areas, tailored for peace of mind."
                    primaryColor={faqPrimaryColor}
                    secondaryColor={faqSecondaryColor}
                />
                
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto mt-12" 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {INSURANCE_DATA.map((service, index) => (
                        <InsuranceCard key={index} service={service} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
// ======================================================================
// 5. MAIN PAGE LAYOUT
// ======================================================================
const InsuranceServicePage = () => {
    const heroProps = {
        title: "Insurance Solutions",
        subtitle: "Protecting Your Health, Assets, and Future.",
        shortPara: "We offer tailored insurance plans across Health, Motor, Life, and General segments, backed by expert advice and easy claims.",
        imageUrl: "/hero.png", 
        backgroundColor: PRIMARY_COLOR + '05', 
    };

    return (
        <div className="relative min-h-screen" style={{ backgroundColor: WHITE_BG }}>
            
            {/* Hero Section */}
            <PageHero {...heroProps} />

            {/* Introductory Text Section */}
            <InsuranceIntroSection />

            {/* Core Services Portfolio (Cards) */}
            <InsuranceServicePortfolio />

        </div>
    );
};

export default InsuranceServicePage;