// PublicUtilityServicePage.js (New page for Public Utility Services)
"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
    Home, Globe, CreditCard, Smartphone, Zap, Truck, ArrowRight
} from 'lucide-react'; // Appropriate icons for utility services

// NOTE: Using the specified relative paths for components
import PageHero from '../../ui/Hero'; 
import PremiumHeading from "../../ui/PremiumHeading"; 

// --- COLOR PALETTE CONSTANTS (Consistent) ---
const PRIMARY_COLOR = "#1E4567";      
const WHITE_BG = '#F7F7F7';          
const faqPrimaryColor = "#004B73";   
const faqSecondaryColor = "#F36B21"; 
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

// --- Premium Feature Card Component ---
const PremiumFeatureListItem = ({ icon: Icon, title, content }) => (
    <motion.li 
        className="flex flex-col md:flex-row md:items-start p-6 transition duration-300 hover:bg-white/50 border-b border-gray-200"
        variants={itemVariants}
    >
        <div className="flex-shrink-0 mb-3 md:mb-0 md:mr-6 flex items-center">
            <Icon size={24} className="mr-3" style={{ color: faqSecondaryColor }} />
            <h4 className="text-lg font-semibold" style={{ color: faqPrimaryColor }}>{title}</h4>
        </div>
        <div className="text-base text-gray-700 leading-relaxed pl-7 md:pl-0">{content}</div>
    </motion.li>
);

// ======================================================================
// 1. PUBLIC UTILITY CORE SERVICES SECTION
// ======================================================================
const PublicUtilityCoreServices = () => {
    // Grouping the services logically for a better visual structure
    const ServicesGroups = [
        {
            icon: CreditCard,
            title: "FINANCIAL & IDENTITY SERVICES",
            items: [
                "Facilitation Centre-TIN-FC/TIN - PAN",
                "DSC (Digital Signatures)",
                "Aadhaar Enabled Payment Service (AePS)",
                "Micro ATM (MATM)",
                "Domestic Money Transfer (DMT)",
                "Money Deposit and Withdrawal",
            ]
        },
        {
            icon: Zap,
            title: "BILLING & RECHARGE",
            items: [
                "Mobile / DTH Recharge",
                "Electric / Water / Other Bill payments",
            ]
        },
        {
            icon: Globe,
            title: "TRAVEL & LOGISTICS",
            items: [
                "Air / Bus / Train Ticket Booking",
                "Hotel Booking",
                "Courier and Logistics",
            ]
        },
    ];

    return (
        <motion.section
            className="py-8" 
            style={{ backgroundColor: WHITE_BG }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main Introductory Paragraph */}
                <motion.p 
                    className="text-center max-w-4xl mx-auto  text-lg font-light italic tracking-wide p-6 rounded-lg shadow-xl" 
                    variants={itemVariants}
                    style={{ color: darkText, backgroundColor: '#FFFFFF', borderLeft: `6px solid ${faqSecondaryColor}` }}
                >
                    We provide a comprehensive suite of <b>Public Utility Common Services</b>, acting as a single facilitation point for crucial daily needs.
                </motion.p>
            </div>

            {/* Core Utility Listing - Premium Grid Look */}
            <div className="max-w-6xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
                <motion.div 
                    variants={containerVariants}
                    className="grid grid-cols-1 gap-10 md:grid-cols-3"
                >
                    {ServicesGroups.map((group, index) => (
                        <motion.div 
                            key={index}
                            variants={itemVariants}
                            className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 h-full flex flex-col"
                        >
                            {/* Group Header */}
                            <div className="p-6" style={{ backgroundColor: faqPrimaryColor }}>
                                <div className="flex items-center">
                                    <group.icon size={32} className="mr-4" style={{ color: faqSecondaryColor }} />
                                    <h3 className="text-lg font-bold tracking-tight text-white">
                                        {group.title}
                                    </h3>
                                </div>
                            </div>
                            
                            {/* Group Items */}
                            <ul className="divide-y divide-gray-100 flex-grow">
                                {group.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="p-4 flex items-start text-gray-700 text-base">
                                        <ArrowRight size={18} className="mr-3 flex-shrink-0 mt-1" style={{ color: faqSecondaryColor }} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            
        </motion.section>
    );
};


// ======================================================================
// 2. MAIN PAGE LAYOUT
// ======================================================================
const PublicUtilityServicePage = () => {
    const heroProps = {
        title: "Public Utility Services",
        subtitle: "One-stop access for essential financial, travel, and citizen services.",
        shortPara: "Empowering communities by bringing crucial digital and physical services closer, ensuring convenience and efficiency for all citizens.",
        imageUrl: "/hero.png", // Placeholder image path
        backgroundColor: PRIMARY_COLOR + '05', 
    };

    return (
        <div className="relative min-h-screen" style={{ backgroundColor: WHITE_BG }}>
            
            {/* Hero Section */}
            <PageHero {...heroProps} />

            {/* Core Services Section */}
            <PublicUtilityCoreServices />

        </div>
    );
};

export default PublicUtilityServicePage;