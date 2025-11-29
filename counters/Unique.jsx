// src/components/FacilitiesFeatureTabsWiderAutoWorking.jsx

import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Added AnimatePresence for smoother exits
import { useInView } from "react-intersection-observer";
import { Link } from 'react-router-dom';
import { Zap, BookOpen, Globe, Layout, Monitor, Users, ArrowRight, CornerDownRight } from 'lucide-react'; 

// --- MAROON/BURGUNDY COLOR PALETTE ---
const PRIMARY_ACCENT = '#7F1D1D';      // Rich, deep Maroon/Burgundy (Primary)
const SECONDARY_ACCENT = '#B91C1C';    // Slightly brighter Red/Maroon (Secondary)
const TEXT_COLOR = '#1F2937';        // Dark Gray/Navy
const SECTION_BG = '#FFFFFF';        // Pure White Background
const CARD_BG = '#FFFFFF';           // Pure white for card panels

// --- Configuration Data ---
const FACILITY_CONFIG = {
    title: 'Explore Our World-Class Infrastructure',
    subtitle: "Browse key facilities that power your academic journey and campus life.",
    links: [
        { id: 'opd', name: "Health Center", to: "/OPD", description: "Dedicated health center for immediate care, consultation, and wellness programs for all students and staff.", icon: Zap, imageSrc: "/facility/f1.png" },
        { id: 'classrooms', name: "Hi-Tech Classrooms", to: "/High-Tech-Classrooms", description: "Integrated smart boards, acoustic engineering, and live-streaming capabilities for a truly modern and interactive learning experience.", icon: Layout, imageSrc: "/facility/f2.png" },
        { id: 'wifi', name: "Wi-Fi Campus", to: "/Wi-Fi-Enabled-Campus", description: "Seamless, high-speed fiber-optic wireless connectivity across all academic, administrative, and residential areas.", icon: Globe, imageSrc: "/facility/f3.png" },
        { id: 'labs', name: "Advanced Computer Labs", to: "/Computer-Lab", description: "State-of-the-art workstations with specialized, licensed software and high-performance hardware to support complex research and practical work.", icon: Monitor, imageSrc: "/facility/f4.png" },
        { id: 'library', name: "Digital Library", to: "/Library", description: "An extensive collection of physical books and a massive digital repository (e-journals, e-books, databases) supporting research and comprehensive study.", icon: BookOpen, imageSrc: "/hero12.png" },
        { id: 'teaching', name: "Modern Pedagogy", to: "/Modern-Teaching-Methodology", description: "A pedagogical approach focused on project-based learning, industry-relevant case studies, and experiential hands-on training.", icon: Users, imageSrc: "/facility/f6.png" },
    ]
};

// -----------------------------------------------------------------------
// --- Framer Motion Variants ---
// -----------------------------------------------------------------------

const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1 } },
};

// Use an exit prop for smoother transitions when the active card changes
const detailVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.2 } }
};

// --- Single Grid Tab Item (Interactive Button) ---
const GridTabItem = ({ facility, isActive, onClick }) => {
    const IconComponent = facility.icon;

    return (
        <motion.button
            onClick={onClick}
            className={`
                flex flex-col items-center justify-center p-4 md:p-6 h-full text-center rounded-xl transition-all duration-300 relative
                ${isActive 
                    ? 'shadow-2xl z-10' 
                    : 'hover:shadow-lg hover:scale-[1.01] cursor-pointer'
                }
            `}
            style={{ 
                backgroundColor: isActive ? PRIMARY_ACCENT : CARD_BG,
                color: isActive ? 'white' : TEXT_COLOR,
                border: `2px solid ${isActive ? PRIMARY_ACCENT : '#FEE2E2'}`
            }}
            whileTap={{ scale: 0.98 }}
        >
            <IconComponent className="w-8 h-8 mb-2" style={{ color: isActive ? 'white' : SECONDARY_ACCENT }} />
            <span className="font-semibold text-base leading-tight">{facility.name}</span>
            {isActive && (
                <motion.div 
                    layoutId="activePill"
                    className="absolute top-0 right-0 bottom-0 left-0 rounded-xl"
                    style={{ border: `3px solid ${SECONDARY_ACCENT}`, pointerEvents: 'none' }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
            )}
        </motion.button>
    );
};

// --- Main Facilities Section Component (Grid with Overlapping Tabs) ---
const FacilitiesFeatureTabsWiderAutoWorking = () => {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

    const facilityIds = useMemo(() => FACILITY_CONFIG.links.map(f => f.id), []);
    const [activeFacilityId, setActiveFacilityId] = useState(facilityIds[0]);
    const [isHovered, setIsHovered] = useState(false);

    const activeFacility = useMemo(() => 
        FACILITY_CONFIG.links.find(f => f.id === activeFacilityId) || FACILITY_CONFIG.links[0]
    , [activeFacilityId]);

    // ✅ AUTO-CHANGE LOGIC (4 seconds interval)
    useEffect(() => {
        // Only run the interval if the component is visible AND not being hovered/interacted with
        if (!inView || isHovered) {
            return;
        }

        const intervalId = setInterval(() => {
            setActiveFacilityId(currentId => {
                const currentIndex = facilityIds.indexOf(currentId);
                const nextIndex = (currentIndex + 1) % facilityIds.length;
                return facilityIds[nextIndex];
            });
        }, 4000); // 4 seconds interval

        return () => clearInterval(intervalId); // Cleanup function
    }, [inView, isHovered, facilityIds]); // Re-run effect only if these change

    // Handlers for manual click and hover pause
    const handleCardClick = (id) => {
        setIsHovered(true); // Pause auto-change temporarily after a click
        setActiveFacilityId(id);
        // Optionally: Resume auto-change after a delay, or let the user resume via mouseleave
        setTimeout(() => setIsHovered(false), 8000); // Resume after 8 seconds
    };

    return (
        <div 
            style={{ backgroundColor: SECTION_BG }} 
            className="py-12"
            onMouseEnter={() => setIsHovered(true)} // Pause cycle when mouse enters the whole section
            onMouseLeave={() => setIsHovered(false)} // Resume cycle when mouse leaves
        >
            <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={containerVariants}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                
                <div className="text-center mb-12">
                    <h2 className="text-lg font-semibold uppercase tracking-widest mb-2" style={{ color: SECONDARY_ACCENT }}>
                        DYNAMIC OVERVIEW
                    </h2>
                    <h1 className="text-3xl md:text-4xl font-bold" style={{ color: TEXT_COLOR }}>
                        {FACILITY_CONFIG.title}
                    </h1>
                </div>

                {/* Main Content Panel: CRITICAL CHANGE: lg:grid-cols-4 for 50/50 split on large screens */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    
                    {/* Left Column: Grid of Feature Tabs (WIDER: 2/4 = 50% width) */}
                    <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6 h-full">
                        {FACILITY_CONFIG.links.map((facility) => (
                            <GridTabItem
                                key={facility.id}
                                facility={facility}
                                isActive={facility.id === activeFacilityId}
                                onClick={() => handleCardClick(facility.id)}
                            />
                        ))}
                    </div>
                    
                    {/* Right Column: Details and Image (2/4 = 50% width) */}
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={activeFacilityId} 
                            variants={detailVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="lg:col-span-2 rounded-2xl p-6 md:p-10 shadow-2xl flex flex-col justify-between overflow-hidden" 
                            style={{ backgroundColor: CARD_BG }}
                        >
                            <div className="flex flex-col md:flex-row gap-8">
                                {/* Text Content */}
                                <div className="md:w-1/2 flex flex-col justify-center">
                                    <h3 className="text-3xl font-bold mb-3" style={{ color: PRIMARY_ACCENT }}>
                                        {activeFacility.name}
                                    </h3>
                                    <p className="text-gray-600 mb-6 text-lg">
                                        {activeFacility.description}
                                    </p>
                                    
                                    <Link to={activeFacility.to} className="group flex items-center text-sm font-semibold mt-4">
                                        <CornerDownRight className="w-4 h-4 mr-2" style={{ color: SECONDARY_ACCENT }} />
                                        <span className="underline group-hover:no-underline transition-colors" style={{ color: PRIMARY_ACCENT }}>
                                            Explore Facility Page
                                        </span>
                                    </Link>
                                </div>

                                {/* Image Area */}
                                <div className="md:w-1/2 h-56 md:h-64 rounded-xl overflow-hidden shadow-xl">
                                    <img
                                        src={activeFacility.imageSrc}
                                        alt={activeFacility.name}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.05]"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "https://placehold.co/400x256/7F1D1D/ffffff?text=Image+Missing";
                                        }}
                                    />
                                </div>
                            </div>
                            
                            {/* Footer CTA */}
                            <div className="pt-6 border-t mt-6" style={{ borderColor: `${PRIMARY_ACCENT}30` }}>
                                <div className="flex justify-between items-center">
                                    <p className="text-gray-500 text-sm">
                                        Ready to see it in person?
                                    </p>
                                    
                                    <Link to="/contact">
                                        <motion.button
                                            className="inline-flex items-center text-sm font-bold uppercase tracking-wider py-2 px-6 rounded-full text-white"
                                            style={{ backgroundColor: PRIMARY_ACCENT }}
                                            whileHover={{ scale: 1.05, backgroundColor: SECONDARY_ACCENT }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Schedule a Virtual Tour
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </motion.button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
};

export default FacilitiesFeatureTabsWiderAutoWorking;