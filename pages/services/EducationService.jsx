// EducationServicePage.js - FINALIZED LAYOUT (Max-Width 4XL & Adjusted Heading Sizes)
"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
    School, BookOpen, GraduationCap, Zap, DollarSign, Phone, ArrowRight, User, Globe, CheckCircle, Database
} from 'lucide-react';

// NOTE: Using the specified relative paths for components
// Assuming PremiumHeading manages its own internal typography based on props/style
import PageHero from '../../ui/Hero'; 
import PremiumHeading from "../../ui/PremiumHeading"; 

// --- COLOR PALETTE CONSTANTS (Consistent) ---
const PRIMARY_COLOR = "#1E4567"; // Base color for Hero BG
const WHITE_BG = '#F7F7F7';     // Page background
const faqPrimaryColor = "#004B73"; // Dark Blue (Primary Accent)
const faqSecondaryColor = "#F36B21"; // Orange (Secondary Accent)
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
// 1. BUTTERFLY KIDS SCHOOL SHOWCASE SECTION (Internal Heading Size Adjusted)
// ======================================================================
const ButterflySchoolShowcase = () => {
    const programFeatures = [
        { name: "PLAY", icon: Zap },
        { name: "LEARN", icon: BookOpen },
        { name: "GROW", icon: GraduationCap },
    ];

    return (
        <motion.section
            className="py-8"
            style={{ backgroundColor: faqWhite }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <PremiumHeading
                    preTitle="Our Flagship Educational Initiative"
                    mainTitleBold="BUTTERFLY KIDS"
                    mainTitleNormal="SCHOOL"
                    subtitle="A strong foundation for a bright career, guided by play, learning, and growth."
                    primaryColor={faqPrimaryColor}
                    secondaryColor={faqSecondaryColor}
                />
            </div>
            
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center mt-12">
                
                {/* Left Side: Photo/Visual (Adjusted to object-contain) */}
                <motion.div
                    className="relative overflow-hidden rounded-sm shadow-2xl flex items-center justify-center h-full min-h-[300px] lg:min-h-[400px]"
                    variants={itemVariants}
                >
                    <img 
                        src="/education.png" 
                        alt="Butterfly Kids School Building" 
                        className="w-full h-full object-contain rounded-sm p-4"
                        style={{ backgroundColor: CARD_SOFT_BG }} 
                    />
                </motion.div>

                {/* Right Side: Content & Franchise Inquiry */}
                <motion.div variants={itemVariants} className="space-y-6">
                    <h3 className="text-2xl font-bold pt-2" style={{ color: faqPrimaryColor }}>
                        Strong Foundation for a Bright Career
                    </h3>
                    
                    {/* Core Pillars */}
                    <div className="flex justify-between md:justify-start md:space-x-12 border-b pb-4 pt-2" style={{borderColor: faqPrimaryColor + "10"}}>
                        {programFeatures.map((item) => (
                            <div key={item.name} className="flex flex-col items-center text-center">
                                <item.icon size={30} className="mb-2" style={{ color: faqSecondaryColor }} />
                                <span className="font-bold uppercase text-sm" style={{ color: faqPrimaryColor }}>{item.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* Program Details Table */}
                    <div className="p-5 rounded-sm shadow-md border" style={{ backgroundColor: faqWhite, borderColor: faqPrimaryColor + "10" }}>
                        <h4 className="font-bold mb-3 uppercase tracking-wider" style={{ color: faqSecondaryColor }}>Programs Offered:</h4>
                        <ul className="space-y-2 text-base text-gray-700 grid grid-cols-2">
                            <li className="font-medium"><School size={18} className="inline mr-2" style={{ color: faqPrimaryColor }}/><span className="font-bold">NURSERY</span></li>
                            <li className="font-medium"><User size={18} className="inline mr-2" style={{ color: faqPrimaryColor }}/><span className="font-bold">L.K.G</span></li>
                            <li className="font-medium"><User size={18} className="inline mr-2" style={{ color: faqPrimaryColor }}/><span className="font-bold">U.K.G</span></li>
                            <li className="font-medium"><Zap size={18} className="inline mr-2" style={{ color: faqPrimaryColor }}/><span className="font-bold">ACTIVITY CLASSES</span></li>
                        </ul>
                    </div>

                    {/* Franchise Callout - Premium Look */}
                    <motion.div 
                        className="p-6 rounded-sm border-2 space-y-3 transition-all duration-300 shadow-lg hover:shadow-xl" 
                        style={{borderColor: faqSecondaryColor, backgroundColor: faqWhite}}
                        whileHover={{ scale: 1.01 }}
                    >
                        <p className="text-xl font-bold" style={{ color: faqPrimaryColor }}>
                            Franchisee Enquiry Solicited from Urban & Rural Areas
                        </p>
                        <p className="text-xl font-bold" style={{ color: faqSecondaryColor }}>
                            Small Investment - High Return
                        </p>
                        <div className="flex items-center justify-center pt-3 border-t mt-4" style={{ borderColor: faqPrimaryColor + "15" }}>
                            <Phone size={20} className="mr-3 flex-shrink-0" style={{ color: faqSecondaryColor }} />
                            <span className="text-lg font-bold" style={{ color: darkText }}>For Details Contact: 9090015600</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};

// ======================================================================
// 2. HIGHER EDUCATION & DISTANCE LEARNING SECTION (Internal Heading Size Adjusted)
// ======================================================================
const HigherEducationSection = () => {
    const courses = [
        "B.A", "B.Sc", "B.Com", "M.A", "M.Sc", "M.Com",
        "BCA", "MCA", "BBA", "MBA", "B.Lib", "M.Lib",
        "B.Tech", "M.Tech", "BSW", "MSW", "BJMC", "MJMC",
        "ITI", "Diploma", "D.Pharm", "B.Pharm", "B.Sc (Agr)", "M.Sc (Agr)",
        "PGDCA", "NTT", "B.ED", "M.ED", "B.P.ED", "LLB",
    ];
    
    const accreditations = [
        "UGC", "NCTE", "BCI", "PCI", 
        "AICTE", "DEB", "AIU", "NAAC A++"
    ];

    return (
        <motion.section
            className="py-8"
            style={{ backgroundColor: CARD_SOFT_BG }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            {/* Keeping max-w-6xl as requested in previous step for container constraint */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <PremiumHeading
                    preTitle="Academic Flexibility"
                    mainTitleBold="HIGHER EDUCATION"
                    mainTitleNormal="COURSES"
                    subtitle="Achieve your degrees in Arts, Science, and Commerce from recognized institutions."
                    primaryColor={faqPrimaryColor}
                    secondaryColor={faqSecondaryColor}
                />
            </div>

            {/* MAIN BALANCED GRID: Two Columns (Max-W 4XL) */}
            <div className="max-w-6xl mx-auto mt-12 grid lg:grid-cols-2 gap-10 px-4 sm:px-6 lg:px-8 items-stretch">
                
                {/* LEFT COLUMN: Course Listing (Dense Content) */}
                <motion.div variants={itemVariants} className="p-8 rounded-sm shadow-xl flex flex-col" 
                            style={{ backgroundColor: faqWhite, border: `1px solid ${faqPrimaryColor}20` }}>
                    {/* ADJUSTED HEADING SIZE: from text-2xl to text-xl */}
                    <h3 className="text-xl font-bold mb-6 border-b pb-3" style={{ color: faqPrimaryColor, borderColor: faqSecondaryColor }}>
                        📚 Available Courses (REGULAR & DISTANCE)
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-3 text-sm text-gray-700 flex-grow">
                        {courses.map((course, index) => (
                            <motion.span 
                                key={index} 
                                className="flex items-center font-medium cursor-default p-1 rounded-md"
                                whileHover={{ scale: 1.02, backgroundColor: faqSecondaryColor + "10", color: faqPrimaryColor }}
                            >
                                <Globe size={16} className="mr-2 flex-shrink-0" style={{ color: faqSecondaryColor }} />
                                {course}
                            </motion.span>
                        ))}
                    </div>
                    <p className="mt-8 pt-4 border-t text-sm font-bold" style={{ borderColor: faqSecondaryColor + "20", color: faqPrimaryColor }}>
                        **Equivalent to All States Board & BSE, CHSE, ICSE, CBSE**
                    </p>
                </motion.div>

                {/* RIGHT COLUMN: Actionable Info (Stacked Cards) */}
                <motion.div variants={itemVariants} className="flex flex-col space-y-8">
                    
                    {/* Admission Status Card (Adjusted Size) */}
                    <div className="p-6 text-center rounded-sm shadow-2xl flex-shrink-0" 
                         style={{ backgroundColor: faqSecondaryColor, color: faqWhite }}>
                        {/* ADJUSTED TEXT SIZE: from text-5xl to text-4xl */}
                        <h3 className="text-4xl font-bold leading-tight">
                            ADMISSION <span className="text-black">OPEN</span>
                        </h3>
                        <p className="mt-2 text-sm font-semibold uppercase tracking-widest leading-snug text-white/90">
                            MATRIC / 10th & +2 / ARTS, SCIENCE, COMMERCE
                        </p>
                    </div>

                    {/* Recognition & Validity Assurance (Middle, Highlighted) */}
                    <div className="p-6 rounded-sm shadow-xl border-l-8 flex-grow" 
                            style={{ backgroundColor: faqWhite, borderColor: faqPrimaryColor }}>
                        {/* ADJUSTED HEADING SIZE: from text-xl to text-lg */}
                        <h3 className="text-lg font-bold mb-4 flex items-center" style={{ color: faqPrimaryColor }}>
                            <CheckCircle size={22} className="mr-2" style={{ color: faqSecondaryColor }}/>
                            Validity & Recognition
                        </h3>
                        <div className="flex flex-wrap gap-2 text-base font-semibold mb-4 pt-2">
                            {accreditations.map((acc, index) => (
                                <span key={index} className="px-3 py-1 rounded-full text-xs font-bold shadow-sm" 
                                    style={{ backgroundColor: faqPrimaryColor, color: faqWhite }}>
                                    {acc}
                                </span>
                            ))}
                        </div>
                        <ul className="text-sm space-y-2 mt-4 text-gray-700">
                            <li className="font-medium">
                                <CheckCircle size={16} className="inline mr-2" style={{ color: faqSecondaryColor }} />
                                **Certificates valid for all Jobs & Higher Studies.**
                            </li>
                            <li className="font-medium">
                                <CheckCircle size={16} className="inline mr-2" style={{ color: faqSecondaryColor }} />
                                Exams held at our own centre (Except NIOS).
                            </li>
                        </ul>
                    </div>

                    {/* Study At Home Card (Bottom, Dark Accent) */}
                    <div className="p-6 rounded-sm shadow-lg flex-shrink-0" 
                         style={{ backgroundColor: faqPrimaryColor, border: `1px solid ${faqSecondaryColor}` }}>
                        {/* ADJUSTED HEADING SIZE: from text-xl to text-lg */}
                        <p className="text-lg font-bold text-white mb-3">
                            <Database size={22} className="inline mr-3" style={{ color: faqSecondaryColor }}/>
                            Study At Home & Get Good Marks!
                        </p>
                        <p className="text-sm text-gray-200">
                            Flexible study programs for those who wish to achieve their degrees or complete their schooling.
                        </p>
                    </div>
                </motion.div>
                
            </div>
        </motion.section>
    );
};


// ======================================================================
// 3. MAIN PAGE LAYOUT
// ======================================================================
const EducationServicePage = () => {
    const heroProps = {
        title: "Education Services",
        subtitle: "From Primary Foundations to Higher Degrees and Career Training.",
        shortPara: "We offer both high-quality pre-primary education through Butterfly Kids School and flexible higher education courses recognized nationally.",
        imageUrl: "/hero.png", 
        backgroundColor: PRIMARY_COLOR + '05', 
    };

    return (
        <div className="relative min-h-screen" style={{ backgroundColor: WHITE_BG }}>
            
            {/* Hero Section (Required Import) */}
            <PageHero {...heroProps} />

            {/* Butterfly School Showcase (Max-Width 4XL, Adjusted Text) */}
            <ButterflySchoolShowcase />

            {/* Higher Education & Distance Learning (Max-Width 4XL, Adjusted Text) */}
            <HigherEducationSection />

        </div>
    );
};

export default EducationServicePage;