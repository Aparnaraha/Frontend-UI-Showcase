// src/components/FixedRightSidebarFinal.js (Revised SidebarButton component)
"use client";

import React, { memo, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";

// --- COLOR CONSTANTS ---
const PRIMARY_BLUE = "#004B73"; 
const ACCENT_ORANGE = "#F36B21"; 
const TEXT_WHITE = "#FFFFFF";
const WHATSAPP_GREEN = "#25D366"; 

const ADIMATA_VENTURES_INFO = {
    WHATSAPP_NUMBER: "917978241091",
    PHONE_NUMBER: "917978241091", 
    EMAIL: "inquiry@adimataventures.com",
};

/**
 * Sidebar Button Component
 * REFINED for maximum hover smoothness and no hanging.
 **/
const SidebarButton = memo(({ icon: Icon, onClick, label, isFaIcon = false, buttonColor }) => (
    <motion.button
        className="w-full h-12 sm:h-14 flex items-center justify-center transition-colors border-b border-orange-400 last:border-b-0 relative group"
        
        style={{ 
            backgroundColor: buttonColor, 
            color: TEXT_WHITE 
        }}
        
        // ANIMATION: Subtle slide
        whileHover={{
            backgroundColor: buttonColor === WHATSAPP_GREEN 
                ? "#128C7E" 
                : PRIMARY_BLUE, 
            x: -12, 
            zIndex: 50, 
        }}
        whileTap={{ scale: 0.95 }}
        
        // ✨ REFINED TRANSITION for smoothness and quick settling (less hanging)
        transition={{ 
            type: "spring", 
            stiffness: 180, // Lower stiffness (was 250) for a softer start
            damping: 20,    // Lower damping (was 30) for faster settling
            mass: 0.5,      // Added mass to help stabilize the motion quickly
        }} 
        
        onClick={onClick}
        aria-label={label}
    >
        {/* Icon rendering */}
        <div className="flex items-center justify-center w-full h-full">
            <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${isFaIcon ? "" : "stroke-2"}`} style={{ color: TEXT_WHITE }} />
        </div>
        
        {/* Tooltip (visible on hover) */}
        <span
            className="absolute right-full mr-3 px-3 py-1 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50 hidden sm:block rounded"
            style={{
                backgroundColor: PRIMARY_BLUE,
                top: "50%",
                transform: "translateY(-50%)",
            }}
        >
            {label}
        </span>
    </motion.button>
));
SidebarButton.displayName = "SidebarButton";

// -----------------------------------------------------------------------------

// --- Main Sidebar Component (Unchanged) ---
const FixedRightSidebarFinal = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    // --- Scroll-based visibility logic (remains the same) ---
    useEffect(() => {
        const handleScroll = () => {
            const footer = document.querySelector("footer");
            if (!footer) {
                setIsVisible(true);
                return;
            }
            const footerTop = footer.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (footerTop < windowHeight - 60) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // --- Click handlers (remain the same) ---
    const handleWhatsAppClick = () => {
        const message = encodeURIComponent("Hello, I would like to inquire about ADIMATA VENTURES.");
        window.open(`https://wa.me/${ADIMATA_VENTURES_INFO.WHATSAPP_NUMBER}?text=${message}`, "_blank");
    };

    const handleCallClick = () => {
        window.open(`tel:+${ADIMATA_VENTURES_INFO.PHONE_NUMBER}`, "_self");
    };

    const handleEmailClick = () => {
        window.location.href = `mailto:${ADIMATA_VENTURES_INFO.EMAIL}`;
    };
    
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="mt-12 fixed right-0 top-1/2 transform -translate-y-1/2 z-[100] flex flex-col items-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Toggle Arrow */}
                    <motion.button
                        className="w-8 h-8 sm:w-10 sm:h-10 mb-1 sm:mb-2 flex items-center justify-center rounded-l-md shadow-md"
                        style={{ backgroundColor: PRIMARY_BLUE, color: TEXT_WHITE }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsCollapsed((prev) => !prev)}
                        aria-label="Toggle sidebar"
                    >
                        {isCollapsed ? 
                            <FaChevronLeft size={14} className="sm:text-base" /> : 
                            <FaChevronRight size={14} className="sm:text-base" />
                        }
                    </motion.button>

                    {/* Sidebar Buttons Container */}
                    <AnimatePresence>
                        {!isCollapsed && (
                            <motion.div
                                key="sidebar"
                                
                                className={`flex flex-col space-y-0 rounded-l-md w-10 sm:w-14 shadow-lg`} 
                                
                                initial={{ x: 0, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }} 
                                exit={{ x: 50, opacity: 0 }}
                                
                                transition={{ type: "tween", duration: 0.2 }}
                            >
                                {/* 📞 Call Button - Orange */}
                                <SidebarButton 
                                    icon={Phone} 
                                    onClick={handleCallClick} 
                                    label={`Call ${ADIMATA_VENTURES_INFO.PHONE_NUMBER}`} 
                                    buttonColor={ACCENT_ORANGE} 
                                />

                                {/* 🟢 WhatsApp Button - Green */}
                                <SidebarButton 
                                    icon={FaWhatsapp} 
                                    onClick={handleWhatsAppClick} 
                                    label="Chat on WhatsApp" 
                                    isFaIcon 
                                    buttonColor={WHATSAPP_GREEN} 
                                />

                                {/* 📧 Email Button - Primary Blue */}
                                <SidebarButton 
                                    icon={Mail} 
                                    onClick={handleEmailClick} 
                                    label="Send an Email" 
                                    buttonColor={PRIMARY_BLUE} 
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FixedRightSidebarFinal;