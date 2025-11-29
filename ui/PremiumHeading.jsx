// src/ui/PremiumHeading.js
"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";

/**
 * A reusable, styled, and animated heading component.
 *
 * @param {object} props - Component props.
 * @param {string} props.preTitle - The smaller, uppercase text above the main title (e.g., "Contact Us").
 * @param {string} props.mainTitleBold - The first, bolded part of the main title (e.g., "Initiate").
 * @param {string} props.mainTitleNormal - The second, regular part of the main title (e.g., "Your Inquiry").
 * @param {string} props.subtitle - The descriptive text below the main title.
 * @param {string} props.primaryColor - The color for the bold text part.
 * @param {string} props.secondaryColor - The color for the subtle divider.
 */
const PremiumHeading = ({
  preTitle,
  mainTitleBold,
  mainTitleNormal,
  subtitle,
  primaryColor,
  secondaryColor,
}) => {
  return (
    <motion.div
      className="text-center mb-8 max-w-3xl mx-auto px-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <p className="text-base tracking-wide uppercase font-light mb-1 text-gray-400 sm:tracking-widest">
        {preTitle}
      </p>

      {/* 🚨 FIX APPLIED: Added flex, justify-center, and flex-wrap 
          to allow the title parts to stack vertically on narrow screens. */}
      <h1 className="flex justify-center flex-wrap text-3xl md:text-4xl font-light pb-2 text-gray-800 tracking-normal md:tracking-widest">
        <span className="font-medium" style={{ color: primaryColor }}>
          {mainTitleBold}
        </span>
        {/* Removed &nbsp; and added text-normal part in its own span for cleaner wrapping */}
        <span className="ml-2">{mainTitleNormal}</span> 
      </h1>
      
      {/* Subtle, central divider */}
      <div
        className="w-16 h-0.5 mt-2 mx-auto"
        style={{ backgroundColor: secondaryColor, opacity: 0.8 }}
      ></div>
      <p className="text-md text-gray-500 mt-4 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default memo(PremiumHeading);