// AdvertisingServicePage.js (Refactored AdvertisingCoreServices with reduced font sizes)
"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
    Megaphone, ArrowRight
} from 'lucide-react'; 

// NOTE: Using the specified relative paths for components
import PageHero from '../../ui/Hero'; 
import PremiumHeading from "../../ui/PremiumHeading"; 

// --- COLOR PALETTE CONSTANTS (Consistent) ---
const PRIMARY_COLOR = "#1E4567";      
const WHITE_BG = '#F7F7F7';          
const faqPrimaryColor = "#004B73";   
const faqSecondaryColor = "#F36B21"; 
const darkText = "#333333";
const ACCENT_GOLD = '#B8860B'; // Added for a premium touch


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
const PremiumFeatureListItem = ({ content }) => (
    <motion.li 
        className="flex items-start p-4 transition duration-300 hover:bg-white/50 border-b border-gray-200"
        variants={itemVariants}
    >
        <ArrowRight size={20} className="mr-4 flex-shrink-0 mt-1" style={{ color: faqSecondaryColor }} />
        {/* Reduced text size to text-base */}
        <span className="text-base text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ 
            __html: content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
        }} />
    </motion.li>
);

// ======================================================================
// 1. ADVERTISING CORE SERVICES SECTION (PREMIUM LOOK)
// ======================================================================
const AdvertisingCoreServices = () => (
    <motion.section
        className="py-8" 
        style={{ backgroundColor: WHITE_BG }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
    >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* <PremiumHeading
                preTitle="Maximum Visibility"
                mainTitleBold="ADVERTISING &"
                mainTitleNormal="PUBLICITY STRATEGY"
                subtitle="Strategic promotion for production and service providers through MoUs."
                primaryColor={faqPrimaryColor}
                secondaryColor={faqSecondaryColor}
            /> */}

            {/* Main Introductory Paragraph - Font size reduced to text-xl */}
            <motion.p 
                className="text-center max-w-4xl mx-auto text-lg font-light italic tracking-wide p-6 rounded-lg shadow-xl" 
                variants={itemVariants}
                style={{ color: darkText, backgroundColor: '#FFFFFF', borderLeft: `6px solid ${faqSecondaryColor}` }}
            >
                We undertake <strong>Advertising and Publicity activities</strong> of different production and service Provider Company by MoU.
            </motion.p>
        </div>

        {/* Core Advertising Listing - Premium Card Look */}
        <div className="max-w-6xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
            <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="p-8" style={{ backgroundColor: faqPrimaryColor + '05' }}>
                    <div className="flex items-center mb-8 border-b pb-4 border-gray-200">
                        <Megaphone size={40} className="mr-5" style={{ color: faqSecondaryColor }} />
                        {/* Title Font size reduced to text-2xl md:text-3xl */}
                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight" style={{ color: faqPrimaryColor }}>
                            Core Advertising Services
                        </h3>
                    </div>
                    
                    <ul className="divide-y divide-gray-100">
                        {/* Items use the reduced text-base size from the component */}
                        <PremiumFeatureListItem 
                            content="(i): <strong>Advertising Campaign</strong> through <strong>Print Medias</strong>, <strong>Electronics Media</strong>, <strong>Digital Medias</strong>, and <strong>Social Medias</strong>."
                        />
                        
                        <PremiumFeatureListItem 
                            content="(ii): <strong>Advertising & Publicity</strong> through <strong>Poster, Banner, Hoardings, Wall painting, Glow Sign Board,</strong> and <strong>Mobile Van</strong>."
                        />

                        <PremiumFeatureListItem 
                            content="(iii): <strong>Seminar, Workshops, Conference, Cultural Programmes</strong> & <strong>Event Management</strong>."
                        />

                        <PremiumFeatureListItem 
                            content="(iv): <strong>Advertising & Publicity Materials</strong> design and preparation."
                        />
                    </ul>
                </div>
            </motion.div>
        </div>
        
    </motion.section>
);


// ======================================================================
// 2. MAIN PAGE LAYOUT
// ======================================================================
const AdvertisingServicePage = () => {
    const heroProps = {
        title: "Advertising Services",
        subtitle: "Targeted campaigns and strategic public relations for product and service growth.",
        shortPara: "We partner with production and service providers to execute high-impact publicity activities, ensuring your message reaches the right audience.",
        imageUrl: "/hero.png", 
        backgroundColor: PRIMARY_COLOR + '05', 
    };

    return (
        <div className="relative min-h-screen" style={{ backgroundColor: WHITE_BG }}>
            
            {/* Hero Section */}
            <PageHero {...heroProps} />

            {/* Core Services Section (Now List-Style) */}
            <AdvertisingCoreServices />

        </div>
    );
};

export default AdvertisingServicePage;