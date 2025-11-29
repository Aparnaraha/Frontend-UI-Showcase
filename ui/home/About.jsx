"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
// Removed: import { Link } from "react-router-dom"; 
// Using standard <a> tag instead to avoid routing errors in Next.js/other environments
import { FaEye, FaBullseye, FaGavel, FaLightbulb, FaUserShield, FaHandsHelping, FaGlobe, FaCertificate, FaBuilding } from "react-icons/fa";
import PremiumHeading from "../PremiumHeading"; 

// 🎨 Color Scheme 
const primaryColor = "#004B73"; 
const secondaryColor = "#F36B21"; 
const white = "#ffffff";
const accentLight = "#F0F8FF"; 
const darkText = "#222222";

// --- Data (Unchanged) ---
const BRAND_DATA = {
    about: {
        title: "About Adimata Ventures",
        icon: FaBuilding, 
        content: "ADIMATA VENTURES is a trusted service provider company established in 2015. This company is engaged in various business activities like – Advertising & Publicity, Marketing & Sales Promotion, Publishing of Books, Business, Educational & NGO consultancy, Audio & Visual productions, Newspaper & Periodicals publications, Digital Media, promotion of education from pre-primary to university courses, Social Welfare activities etc.",
        keywords: [],
        hasCompliance: true,
        imagePath: "./about1.png",
        imageAlt: "A trusted service provider company established in 2015.",
        overlayText: "Established 2015",
        compliance: {
            certification: "ISO 9001: 2015",
            registration: "MSME (Govt. of India) & GST",
            udyam: "[Add Udyam Number]",
            pan: "[Add PAN Number]",
            gst: "[Add GST Number]",
        }
    },
    mission: {
        title: "Our Mission",
        icon: FaBullseye,
        content: "Our mission is to act as true Publicity, Marketing, Educational, Business & NGO consultants, Audio-Visual productions and Mass Media House providing value to our clients and customers by offering them the right engagement and payment tools to meet their distinct objectives. We strive to become an integral part of our partners’ business processes – helping them reduce overhead, maximize resources, and increase profits.",
        keywords: ["Provide Value", "Engagement Tools", "Reduce Overhead", "Maximize Resources"],
    },
    vision: {
        title: "Our Vision",
        icon: FaEye,
        content: "To listen to our clients and customers’ needs and concerns and be driven to always provide solutions that exceed their expectations. We back these solutions with dedicated employees who understand that if we can provide real value to our customers, then our enterprise will prosper and we will remain the best solution available.",
        keywords: ["Exceed Expectations", "Dedicated Employees", "Real Value", "Best Solution"],
    },
    values: [
        { name: "Professionalism", description: "An uncompromising integrity and pride in everything we do.", icon: FaGavel },
        { name: "Innovation", description: "An intense desire for continuous improvement and growth.", icon: FaLightbulb },
        { name: "Customers First", description: "An obsession with providing high quality workmanship and unmatched value.", icon: FaUserShield },
        { name: "Compassion", description: "A commitment to help all team members strive to be the best they can be.", icon: FaHandsHelping },
        { name: "Community", description: "Creating a friendly and vibrant workplace where collaboration, imagination and creativity are valued.", icon: FaGlobe },
    ]
};

// --- Helper Components (KeywordCard, ValueCard, CoreSectionHeading) ---
const KeywordCard = ({ text }) => (
    <div
        className="px-3 py-1 text-xs font-semibold tracking-wider uppercase border"
        style={{
            backgroundColor: secondaryColor + '10',
            color: secondaryColor,
            borderColor: secondaryColor + '40'
        }}
    >
        {text}
    </div>
);

const itemHeavy = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    },
};

const ValueCard = ({ value, controls }) => (
    <motion.div
        className="p-6 h-full flex flex-col items-center text-center transition-all duration-300 relative group"
        style={{
            backgroundColor: white,
            border: `1px solid ${accentLight}`,
            boxShadow: '0 8px 15px rgba(0, 0, 0, 0.06)',
        }}
        variants={itemHeavy}
        animate={controls}
        whileHover={{
            backgroundColor: accentLight,
            boxShadow: `0 10px 20px ${primaryColor}20`,
            border: `1px solid ${secondaryColor}`,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
    >
        <div className="mb-4 p-4 rounded-full shadow-md transition-colors duration-300" style={{ backgroundColor: primaryColor, color: white }}>
            <value.icon size={28} />
        </div>
        <div className="text-xl font-bold mb-2 transition-colors duration-300" style={{ color: darkText }}>
            {value.name}
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">
            {value.description}
        </p>
    </motion.div>
);

const CoreSectionHeading = ({ preTitle, mainTitle, mainIcon: MainIcon }) => (
    <motion.div variants={itemHeavy}>
        <div className="flex items-center mb-3">
            <p className="text-sm font-semibold uppercase tracking-widest mr-3" style={{ color: secondaryColor }}>
                {preTitle}
            </p>
            <div className="h-0.5 w-12 rounded-full" style={{ backgroundColor: secondaryColor }}></div>
        </div>
        <h3 className="text-xl sm:text-3xl font-bold mb-5 flex items-center" style={{ color: primaryColor }}>
            <span className="mr-3">
                <MainIcon className="text-3xl" />
            </span>
            {mainTitle}
        </h3>
    </motion.div>
);


const CoreSection = ({ data, isOdd }) => {
    const textOrder = isOdd ? "order-1" : "order-2";
    const imageOrder = isOdd ? "order-2" : "order-1";

    const finalImageVariants = isOdd
        ? {
            hidden: { opacity: 0, x: 50 },
            visible: {
                opacity: 1,
                x: 0,
                scale: 1,
                transition: { duration: 1.0, ease: "easeOut" }
            },
        }
        : {
            hidden: { opacity: 0, x: -50 },
            visible: {
                opacity: 1,
                x: 0,
                scale: 1,
                transition: { duration: 1.0, ease: "easeOut" }
            },
        };

    return (
        <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 items-stretch relative z-10 w-full"
            initial="hidden"
            whileInView="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            viewport={{ once: true, amount: 0.3 }}
        >
            {/* Content Column */}
            <div
                className={`p-8 flex flex-col justify-center h-full ${textOrder}`}
                style={{ backgroundColor: white, border: `1px solid ${accentLight}` }}
            >
                {/* Title and Intro */}
                <CoreSectionHeading 
                    preTitle="Who We Are"
                    mainTitle={data.title}
                    mainIcon={data.icon}
                />

                {/* Content Area */}
                <motion.div variants={itemHeavy}>
                    <p className="text-base leading-relaxed text-gray-700 mb-6">{data.content}</p>
                </motion.div>

                {/* Compliance Block */}
                {data.hasCompliance && (
                    <motion.div
                        variants={itemHeavy}
                        className="mt-4 p-4 border-t-2"
                        style={{ borderTopColor: primaryColor, backgroundColor: accentLight }}
                    >
                        <h4 className="text-sm font-bold uppercase mb-3" style={{ color: primaryColor }}>Compliance & Registration</h4>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs"> 
                            <p className="flex items-start"><FaCertificate className="mt-1 mr-2 flex-shrink-0" style={{ color: secondaryColor }} />
                                <span className="font-semibold" style={{ color: darkText }}>Certification:</span> {data.compliance.certification}
                            </p>
                            <p className="flex items-start"><FaBuilding className="mt-1 mr-2 flex-shrink-0" style={{ color: secondaryColor }} />
                                <span className="font-semibold" style={{ color: darkText }}>Registration:</span> {data.compliance.registration}
                            </p>
                        </div>
                        
                        <div className="mt-4 text-xs grid grid-cols-1 md:grid-cols-3 gap-2 border-t pt-2" style={{ borderColor: accentLight }}> 
                            <p><span className="font-bold" style={{ color: primaryColor }}>UDYAM:</span> {data.compliance.udyam}</p>
                            <p><span className="font-bold" style={{ color: primaryColor }}>PAN:</span> {data.compliance.pan}</p>
                            <p><span className="font-bold" style={{ color: primaryColor }}>GST:</span> {data.compliance.gst}</p>
                        </div>
                    </motion.div>
                )}

                {/* Know More Link - MODIFIED */}
                <motion.div variants={itemHeavy} className="mt-8 self-start">
                    <motion.a
                        href="/about" // Use href for standard anchor link
                        className="text-sm font-medium px-8 py-3 shadow-sm transition-all duration-300 tracking-wider uppercase inline-block"
                        style={{ backgroundColor: secondaryColor, color: white }}
                        whileHover={{ backgroundColor: primaryColor, boxShadow: `0 5px 10px ${primaryColor}40` }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Know More
                    </motion.a>
                </motion.div>
            </div>

            {/* Image Placeholder Column */}
            <div
                className={`p-8 flex justify-center items-center ${imageOrder}`}
                style={{ backgroundColor: white }}
            >
                <motion.div
                    variants={finalImageVariants}
                    className="w-full h-full relative overflow-hidden transition-all duration-500 cursor-pointer shadow-lg"
                    style={{
                        border: `2px solid ${primaryColor}70`,
                        borderRadius: '0px',
                        backgroundColor: darkText,
                        aspectRatio: '4/3'
                    }}
                    whileHover={{
                        scale: 1.01,
                        border: `2px solid ${secondaryColor}`,
                        boxShadow: `0 10px 20px rgba(0, 0, 0, 0.2)`
                    }}
                >
                    <img
                        src={data.imagePath}
                        alt={data.imageAlt}
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                    />
                    {/* Text Overlay - Unchanged */}
                    <div
                        className="absolute bottom-0 right-0 p-3 z-10"
                        style={{ backgroundColor: primaryColor, color: white }}
                    >
                        <p className="text-xs font-bold uppercase tracking-widest">
                            {data.overlayText}
                        </p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};


// -----------------------------------------------------------
// FEATURE COMPONENT (Unchanged)
// -----------------------------------------------------------
const Feature = ({ data, hasLeftBorder, preTitle }) => {
    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <motion.div
            className={`p-8 h-full flex flex-col relative`}
            variants={textVariants}
        >
            {/* === GRADIENT BORDER IMPLEMENTATION === */}
            {hasLeftBorder && (
                <div
                    className="absolute top-0 bottom-0 left-0 w-1"
                    style={{
                        background: `linear-gradient(to bottom, ${primaryColor}, ${secondaryColor})`,
                        zIndex: 10
                    }}
                ></div>
            )}
            {/* ======================================= */}
            
            {/* USING NEW CONSISTENT HEADING */}
            <CoreSectionHeading 
                preTitle={preTitle}
                mainTitle={data.title}
                mainIcon={data.icon}
            />

            <p className="text-base leading-relaxed text-gray-700 mb-6 mt-0">{data.content}</p>

            <div className="flex flex-wrap gap-2 mt-auto">
                {data.keywords.map((keyword, i) => (
                    <KeywordCard key={i} text={keyword} />
                ))}
            </div>
        </motion.div>
    );
};


// -----------------------------------------------------------
// MISSIONVISIONBLOCK (Unchanged)
// -----------------------------------------------------------
const MissionVisionBlock = ({ missionData, visionData }) => {
    const containerVariants = {
        visible: { transition: { staggerChildren: 0.2 } }
    };

    const dividerColor = primaryColor + '30';

    return (
        <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 border-y"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, amount: 0.3 }}
            style={{
                backgroundColor: white,
                borderColor: accentLight
            }}
        >
            {/* Mission (Left Side) */}
            <div
                className="border-r"
                style={{ borderColor: dividerColor }}
            >
                <Feature
                    data={missionData}
                    hasLeftBorder={true}
                    preTitle="Our Focus" 
                />
            </div>

            {/* Vision (Right Side) */}
            <div>
                <Feature
                    data={visionData}
                    hasLeftBorder={true}
                    preTitle="Our Direction" 
                />
            </div>
        </motion.div>
    );
};


// -----------------------------------------------------------
// MAIN COMPONENT (Unchanged logic)
// -----------------------------------------------------------
const PremiumBrandStoryV7 = () => {
    const controls = BRAND_DATA.values.map(() => useAnimation());

    useEffect(() => {
        const cardCount = controls.length;
        let currentIndex = 0;

        const sequence = async () => {
            while (true) {
                const prevIndex = (currentIndex === 0) ? cardCount - 1 : currentIndex - 1;

                if (cardCount > 0) {
                    await controls[prevIndex].start({
                        scale: 1,
                        backgroundColor: white,
                        border: `1px solid ${accentLight}`,
                        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.06)',
                        transition: { duration: 0.5 }
                    });
                }

                await controls[currentIndex].start({
                    backgroundColor: accentLight,
                    boxShadow: `0 15px 30px ${primaryColor}15`,
                    border: `1px solid ${secondaryColor}`,
                    transition: { duration: 0.5 }
                });

                await new Promise(resolve => setTimeout(resolve, 2000));

                currentIndex = (currentIndex + 1) % cardCount;
            }
        };

        if (cardCount > 0) {
            const timeoutId = setTimeout(() => sequence(), 100);
            return () => clearTimeout(timeoutId);
        }

    }, [controls]);

    return (
        
        <section style={{ background: white }}>
            
            <div className="max-w-7xl mx-auto" style={{ backgroundColor: white }}>

                <div className="pt-8 px-4" style={{ backgroundColor: white }}>
                    <PremiumHeading
                        preTitle="ADIMATA VENTURES"
                        mainTitleBold="Our Company"
                        mainTitleNormal="Identity"
                        subtitle="A trusted service provider built on clear principles and commitment to client success."
                        primaryColor={primaryColor}
                        secondaryColor={secondaryColor}
                    />
                </div>

                {/* Core About Section */}
                <CoreSection data={BRAND_DATA.about} isOdd={false} />

                {/* Mission & Vision Block */}
                <MissionVisionBlock
                    missionData={BRAND_DATA.mission}
                    visionData={BRAND_DATA.vision}
                />

                <hr style={{ borderColor: accentLight }} />

                {/* --- Values Section --- */}
                <div className="py-8 px-4" style={{ backgroundColor: white }}>
                    {/* Values Section Heading */}
                    <PremiumHeading
                        preTitle="Our Philosophy"
                        mainTitleBold="OUR CORE"
                        mainTitleNormal="VALUES"
                        subtitle="These five pillars define our operations, ensuring an unwavering commitment to integrity, innovation, and client obsession."
                        primaryColor={primaryColor}
                        secondaryColor={secondaryColor}
                    />
                    {/* <p className="text-base text-center mb-8 max-w-3xl mx-auto text-gray-700">
                        These five pillars define our operations, ensuring an unwavering commitment to integrity, innovation, and client obsession.
                    </p> */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
                        initial="hidden"
                        whileInView="visible"
                        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {BRAND_DATA.values.map((value, index) => (
                            <ValueCard key={value.name} value={value} controls={controls[index]} />
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default PremiumBrandStoryV7;