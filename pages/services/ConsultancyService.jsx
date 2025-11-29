// ConsultancyServicePage.js - FINALIZED FILE (Fixed Link Import)
"use client";

import React from "react";
import { motion } from "framer-motion";
// FIX: Changed import from 'next/link' to 'react-router-dom'
import { Link } from 'react-router-dom'; 
import { 
    Users, Target, Eye, Zap, CheckCircle, MapPin, Heart, Lightbulb, Briefcase, Star, Home, Building2,
    Handshake, Layers, FileText, GraduationCap, ArrowRight, Phone
} from 'lucide-react';

// NOTE: Using the specified relative paths for components
import PageHero from '../../ui/Hero'; 
import PremiumHeading from "../../ui/PremiumHeading"; 

// --- COLOR PALETTE CONSTANTS (Consistent) ---
const PRIMARY_COLOR = "#1E4567"; // Dark Blue (Hero BG)
const WHITE_BG = '#F7F7F7';     // Page background
const faqPrimaryColor = "#004B73"; // Dark Blue (Main Text, Headings)
const faqSecondaryColor = "#F36B21"; // Orange (Accent, Icons)
const CARD_SOFT_BG = "#FAFDFD"; 
const faqWhite = "#ffffff";
const darkText = "#333333";
const educationColor = "#4B0082"; // Deep purple/indigo for Educational Card


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
// 1. SERVICES DATA (Unchanged)
// ======================================================================
const CONSULTANCY_DATA = [
    {
        title: "Business Consultancy",
        icon: Briefcase,
        color: faqPrimaryColor,
        description: "Comprehensive corporate setup, registration, and compliance services.",
        focusAreas: [
            "Entity Registration (Pvt. Ltd, LLP)",
            "GST/Tax Filings (PAN/TAN)",
            "License Acquisition (Trade Mark, FSSAI)",
            "Digital Services (DSC, Reports)"
        ]
    },
    {
        title: "NGO Consultancy",
        icon: Heart,
        color: faqSecondaryColor,
        description: "Statutory compliance, financial reporting, and project funding support for non-profits.",
        focusAreas: [
            "Non-Profit Registration (Society, Trust)",
            "Tax Exemptions (12A & 80G, FCRA)",
            "Mandatory Compliance (CSR-1, ISO)",
            "Financial Documentation & Proposals"
        ]
    },
    {
        title: "Educational Consultancy",
        icon: GraduationCap,
        color: educationColor, 
        description: "Guidance for all academic streams, admissions, and institutional recognition.",
        focusAreas: [
            "Admissions (Medical, Engineering, Law)",
            "UG/PG Support (B.Ed, Management)",
            "Skill Development Certification",
            "UGC, AICTE, NAAC Recognition Assurance"
        ]
    },
];

// ======================================================================
// 2. CONSULTANCY CARD COMPONENT 
// ======================================================================
const ConsultancyCard = ({ service }) => {
    return (
        <motion.div
            className="p-6 rounded-sm shadow-lg flex flex-col h-full border-l-4 transition-all duration-300 group hover:shadow-xl"
            style={{ 
                backgroundColor: faqWhite, 
                borderColor: service.color, 
                borderTop: `1px solid ${faqPrimaryColor}10`,
                borderRight: `1px solid ${faqPrimaryColor}10`,
                borderBottom: `1px solid ${faqPrimaryColor}10`,
            }}
            variants={itemVariants}
            whileHover={{ y: -5 }} 
        >
            <div className="flex items-start mb-4">
                <div 
                    className="p-3 mr-4 rounded-sm flex-shrink-0 transition-colors duration-300"
                    style={{ 
                        backgroundColor: service.color + "10", 
                        color: service.color,
                        boxShadow: `0 1px 3px ${service.color}30` 
                    }}
                >
                    <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold leading-tight pt-1" style={{ color: faqPrimaryColor }}>
                    {service.title}
                </h3>
            </div>

            <p className="text-base mb-6 flex-grow" style={{ color: darkText }}>
                {service.description}
            </p>

            <div className="mb-6 space-y-2">
                <p className="text-sm font-semibold uppercase" style={{ color: faqPrimaryColor }}>
                    Key Deliverables:
                </p>
                <ul className="space-y-2">
                    {service.focusAreas.map((area, index) => (
                        <li key={index} className="flex items-start text-sm" style={{ color: darkText }}>
                            <FileText className="w-4 h-4 mt-1 mr-2 flex-shrink-0" style={{ color: service.color }} />
                            {area}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Changed href to to (standard for React Router DOM) */}
            <Link 
                to="/contact"
                className="mt-auto flex items-center justify-center px-4 py-3 font-semibold uppercase text-sm tracking-wider w-full rounded-sm transition-all duration-300 shadow-md"
                style={{ backgroundColor: service.color, color: faqWhite }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = faqSecondaryColor; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = service.color; }}
            >
                <Phone size={16} className="mr-2" />
                Contact Us
            </Link>
        </motion.div>
    );
};

// ======================================================================
// 3. INTRODUCTORY SECTION (Unchanged)
// ======================================================================
const ConsultancyIntroSection = () => (
    <motion.section
        className="py-8"
        style={{ backgroundColor: faqWhite }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
    >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            
            <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-bold tracking-tight mb-4" style={{ color: faqPrimaryColor }}>
                    A Strategic Partnership for Growth
                </h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    ADIMATA VENTURES is more than just a consultant; we are your strategic partner. Our services are built on a foundation of **deep industry knowledge**, regulatory expertise, and an unwavering commitment to your success.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-8">
                    We demystify complex processes, from initial entity registration to ongoing compliance and strategic funding, allowing you to focus on your core mission.
                </p>
                <div className="space-y-4">
                    <div className="flex items-start">
                        <div className="p-2 mr-3 rounded-full" style={{ backgroundColor: faqSecondaryColor + "15", color: faqSecondaryColor }}>
                            <Zap size={20} />
                        </div>
                        <div>
                            <h4 className="font-semibold text-base" style={{ color: faqPrimaryColor }}>Regulatory Expertise</h4>
                            <p className="text-sm text-gray-600">Navigate compliance with confidence.</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="p-2 mr-3 rounded-full" style={{ backgroundColor: faqSecondaryColor + "15", color: faqSecondaryColor }}>
                            <Target size={20} />
                        </div>
                        <div>
                            <h4 className="font-semibold text-base" style={{ color: faqPrimaryColor }}>Strategic Planning</h4>
                            <p className="text-sm text-gray-600">Build sustainable roadmaps for growth.</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Clean Image Container */}
            <motion.div
                className="relative overflow-hidden rounded-sm shadow-2xl flex items-center justify-center min-h-[350px] lg:min-h-[450px]"
                variants={itemVariants}
                style={{ backgroundColor: CARD_SOFT_BG }}
            >
                <img 
                    src="/consultancy.png" 
                    alt="Consultancy and Strategic Partnership" 
                    className="w-full h-full object-cover rounded-sm"
                    onError={(e) => { e.currentTarget.style.backgroundColor = faqPrimaryColor + "15"; e.currentTarget.alt = "Strategic Partnership Visual"; }}
                />
            </motion.div>
        </div>
    </motion.section>
);


// ======================================================================
// 4. CORE CONSULTANCY PORTFOLIO (Service Cards - Unchanged)
// ======================================================================
const ConsultancyServicePortfolio = () => {
    return (
        <section className="py-8 px-4" style={{ backgroundColor: CARD_SOFT_BG }}> 
            <div className="max-w-6xl mx-auto"> 
                <PremiumHeading
                    preTitle="YOUR GROWTH PARTNERS"
                    mainTitleBold="CORE CONSULTANCY"
                    mainTitleNormal="SERVICES" 
                    subtitle="Our specialized consultancy services are designed to navigate complex regulatory, growth, and academic landscapes."
                    primaryColor={faqPrimaryColor}
                    secondaryColor={faqSecondaryColor}
                />
                
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto mt-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {CONSULTANCY_DATA.map((service, index) => (
                        <ConsultancyCard key={index} service={service} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};


// ======================================================================
// 5. MAIN PAGE LAYOUT (Unchanged)
// ======================================================================
const ConsultancyServicePage = () => {
    const heroProps = {
        title: "Consultancy Services",
        subtitle: "Expert Guidance for Business, NGOs, and Education.",
        shortPara: "We provide strategic insights and end-to-end support to help you navigate complex regulatory landscapes, achieve compliance, and unlock sustainable growth.",
        imageUrl: "/hero.png", 
        backgroundColor: PRIMARY_COLOR + '05', 
    };

    return (
        <div className="relative min-h-screen" style={{ backgroundColor: WHITE_BG }}>
            
            {/* Hero Section */}
            <PageHero {...heroProps} />

            {/* Introductory Text Section */}
            <ConsultancyIntroSection />

            {/* Core Services Portfolio (Cards) */}
            <ConsultancyServicePortfolio />

        </div>
    );
};

export default ConsultancyServicePage;