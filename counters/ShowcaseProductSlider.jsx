// AadimataConsultancyAutoHighlight.js (React Router Link Added)
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // 💡 ADDED: Import Link
import { FaGraduationCap, FaBuilding, FaHandsHelping, FaRegLightbulb, FaAngleDoubleRight } from 'react-icons/fa';
// Assuming PremiumHeading is defined elsewhere or imported correctly
import PremiumHeading from "../ui/PremiumHeading";

// 🎨 Color Scheme (Consistent)
const primaryColor = "#004B73"; // Dark Blue
const secondaryColor = "#F36B21"; // Orange
const white = "#fff"
const subtleInactiveBorder = "#f0f0f0"; // New variable for a very light gray border

// --- Service Data (Unchanged - concise features) ---
const SERVICES = [
    {
        id: 1,
        title: "Business Consultancy",
        icon: FaBuilding,
        tagline: "Comprehensive corporate setup, registration, and compliance.",
        color: secondaryColor,
        short_features: [
            "Entity Registration (Pvt. Ltd, LLP)",
            "GST/Tax Filings (PAN/TAN)",
            "License Acquisition (Trade Mark, FSSAI)",
            "Digital Services (DSC, Reports)"
        ],
    },
    {
        id: 2,
        title: "NGO Consultancy",
        icon: FaHandsHelping,
        tagline: "Statutory compliance, financial reporting, and project funding support.",
        color: primaryColor,
        short_features: [
            "Non-Profit Registration (Society, Trust)",
            "Tax Exemptions (12A & 80G, FCRA)",
            "Mandatory Compliance (CSR-1, ISO)",
            "Financial Documentation & Proposals"
        ],
    },
    {
        id: 3,
        title: "Educational Consultancy",
        icon: FaGraduationCap,
        tagline: "Guidance for all academic streams and institutional recognition.",
        color: secondaryColor,
        short_features: [
            "Admissions (Medical, Engineering, Law)",
            "UG/PG Support (B.Ed, Management)",
            "Skill Development Certification",
            "UGC, AICTE, NAAC Recognition Assurance"
        ],
    },
];

// --- Card Component (MODIFIED to use Link) ---
const ServiceCard = ({ service, isActive, handleMouseEnter, handleMouseLeave }) => (
    <motion.div
        // Initial state setup
        initial={{ opacity: 0, y: 30, scale: 1, rotateX: 0, rotateY: 0, border: `1px solid ${subtleInactiveBorder}` }}
        animate={isActive ?
            {
                opacity: 1, y: 0,
                scale: 1.03, // REDUCED SCALE for more subtle lift
                rotateX: 1,
                rotateY: 1.5,
                border: `1px solid ${service.color}`, // Active/Hover: Colored Border
                boxShadow: `0 8px 20px -5px ${service.color}40`, // Added subtle shadow on active state
                zIndex: 10,
            } :
            {
                opacity: 1, y: 0,
                scale: 1,
                rotateX: 0,
                rotateY: 0,
                border: `1px solid ${subtleInactiveBorder}`, // Inactive: Very Light Gray Border
                boxShadow: 'none', // Ensure no shadow when inactive
                zIndex: 1,
            }
        }

        // Manual Hover Override
        whileHover={{
            scale: 1.03, // REDUCED SCALE on hover
            rotateX: 1,
            rotateY: 1.5,
            border: `1px solid ${service.color}`, // Hover: Colored Border
            boxShadow: `0 8px 20px -5px ${service.color}40`, // Added subtle shadow on hover
            zIndex: 10,
        }}

        // Setting perspective for the 3D effect
        style={{ perspective: 1000 }}

        // ADJUSTED PADDING & MIN-HEIGHT FOR RESPONSIVENESS
        className="flex flex-col p-4 lg:p-6 rounded-xl h-full transition-transform duration-500 ease-out cursor-pointer min-h-[300px] lg:min-h-[350px] justify-between overflow-hidden"
        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}

        // Handlers to pause the auto-cycle on user interaction
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
    >
        {/* Inner Card structure for styling */}
        <div
            className="flex flex-col h-full rounded-lg"
            style={{
                backgroundColor: white,
                borderTop: `4px solid ${service.color}`, // Reduced accent bar thickness
            }}
        >
            <div className="p-4 lg:p-6 flex flex-col flex-grow">
                {/* Icon Section - Adjusted size */}
                <div
                    className="w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center mb-3 lg:mb-4"
                    style={{
                        backgroundColor: service.color + "10",
                        border: `1px solid ${service.color}20`
                    }}
                >
                    <service.icon className="text-xl lg:text-2xl" style={{ color: service.color }} />
                </div>

                {/* Title - Adjusted size */}
                <h3 className="text-lg lg:text-xl font-bold mb-1" style={{ color: primaryColor }}>
                    {service.title}
                </h3>

                {/* Tagline - Adjusted size */}
                <p className="text-xs lg:text-sm text-gray-500 italic mb-3 pb-2 border-b" style={{ borderColor: primaryColor + "10" }}>
                    {service.tagline}
                </p>

                {/* Concise Feature List - Fine-tuned spacing */}
                <ul className="space-y-1 lg:space-y-2 flex-grow mb-4 lg:mb-6">
                    {service.short_features.map((feature, index) => (
                        <li key={index} className="flex items-start text-gray-700 text-sm leading-snug">
                            <FaAngleDoubleRight className="text-xs mr-1 lg:mr-2 mt-0.5 shrink-0" style={{ color: service.color }} />
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Bottom Button - MODIFIED to use Link component */}
            <div className="mt-auto p-4 pt-0">
                <Link
                    to="/contact" // 💡 Link to the /contact page
                    className="inline-flex items-center text-base font-semibold px-3 py-1.5 rounded-lg transition-all duration-300 w-full justify-center"
                    style={{
                        backgroundColor: service.color,
                        color: white,
                        boxShadow: `0 2px 8px ${service.color}40` // Subtle button shadow
                    }}
                    // Using onMouseEnter/onMouseLeave for background hover effect
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = primaryColor}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = service.color}
                >
                    Contact Us →

                    {/* <FaRegLightbulb className="ml-2 text-xs" /> */}
                </Link>
            </div>
        </div>
    </motion.div>
);

// --- Main Component (Auto-Highlight Grid - Unchanged Logic) ---
const AadimataConsultancyAutoHighlight = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-Cycling Logic
    useEffect(() => {
        if (isPaused) return;
        const cycleInterval = setInterval(() => {
            setActiveIndex(prevIndex => (prevIndex + 1) % SERVICES.length);
        }, 3000);
        return () => clearInterval(cycleInterval);
    }, [isPaused]);

    // Handlers to pause the auto-cycle when the user interacts
    const handleMouseEnter = (id) => {
        setIsPaused(true);
        setActiveIndex(SERVICES.findIndex(s => s.id === id));
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
    };

    return (
        // Adjusted section padding for mobile
        <section className="py-8 px-4" style={{ backgroundColor: white }}>
            <div className="max-w-6xl mx-auto">

                <PremiumHeading
                    preTitle="CORE CONSULTANCY SERVICES"
                    mainTitleBold="Your"
                    mainTitleNormal="Growth Partners"
                    subtitle="The cards automatically highlight our primary focus areas, cycling through our key services."
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                />

                <div className="mt-8" />

                {/* Responsive Grid Layout */}
                <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-8 gap-6">
                    {SERVICES.map((service, index) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            isActive={index === activeIndex}
                            handleMouseEnter={() => handleMouseEnter(service.id)}
                            handleMouseLeave={handleMouseLeave}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AadimataConsultancyAutoHighlight;