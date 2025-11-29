// src/components/PremiumEnquiryFlow.js
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // 💡 ADDED: Import Link
import { FaPhoneVolume, FaClipboardCheck, FaHandshake } from "react-icons/fa";
import PremiumHeading from "../ui/PremiumHeading"; // Adjust path as needed

// 🎨 Color Scheme from Previous Task (Dark Blue/Orange)
const primaryColor = "#004B73"; // Dark Blue
const secondaryColor = "#F36B21"; // Orange
const accentLight = "#F0F8FF"; // Very Light Blue/White
const white = "#ffffff";

// --- Steps Data ---
const ENQUIRY_STEPS = [
  {
    id: 1,
    icon: FaPhoneVolume,
    title: "1. Initial Connect",
    description: "Submit your inquiry via the form or WhatsApp. We'll reach out within 24 hours to understand your specific needs.",
  },
  {
    id: 2,
    icon: FaClipboardCheck,
    title: "2. Proposal & Review",
    description: "Receive a tailored solution proposal, clear scope breakdown, and transparent pricing for your project.",
  },
  {
    id: 3,
    icon: FaHandshake,
    title: "3. Consult & Launch",
    description: "Once the scope is finalized and approved, the project officially kicks off with dedicated resources assigned.",
  },
];

// Animation Variants
const flowContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const flowItem = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "tween", duration: 0.6, ease: "easeOut" },
  },
};

// --- Step Card Component (Unchanged) ---
const EnquiryStepCard = ({ step, index }) => (
  <motion.div
    className={`p-6 bg-white rounded-xl shadow-lg transition-all duration-300 border-l-2 lg:border-l-0 lg:border-t-2 hover:shadow-2xl flex items-start space-x-4 lg:space-x-0 lg:flex-col lg:items-center lg:text-center relative`}
    style={{ borderColor: secondaryColor }}
    variants={flowItem}
    whileHover={{ scale: 1.03, zIndex: 1 }}
  >
    {/* Step Number/Icon Container */}
    <div
      className="text-2xl p-3 rounded-full shrink-0 lg:mb-4 shadow-md"
      style={{ backgroundColor: secondaryColor, color: white }}
    >
      <step.icon />
    </div>

    {/* Content */}
    <div>
      <h3 className="text-lg font-bold mb-1" style={{ color: primaryColor }}>
        {step.title}
      </h3>
      <p className="text-sm text-gray-600">
        {step.description}
      </p>
    </div>

    {/* Desktop Connector (Hidden on Mobile) */}
    {index < ENQUIRY_STEPS.length - 1 && (
      <div className="hidden lg:block absolute right-[-24px] top-1/2 transform -translate-y-1/2 w-8 h-0.5" style={{ backgroundColor: secondaryColor }}>
        {/* Arrow/Point on the connector line */}
        <div className="w-2 h-2 rounded-full absolute right-0 top-1/2 transform -translate-y-1/2" style={{ backgroundColor: primaryColor }} />
      </div>
    )}
  </motion.div>
);

// --- Main Component (MODIFIED) ---
const PremiumEnquiryFlow = () => {

  // 💡 Create a motion-wrapped Link component for animation support
  const MotionLink = motion(Link);

  return (
    <section className="py-8 px-4" style={{ background: accentLight }}>
      <div className="max-w-6xl mx-auto">

        {/* 🌟 Imported Premium Heading 🌟 */}
        <PremiumHeading
          preTitle="Process FLOW"
          mainTitleBold="Service"
          mainTitleNormal="Steps To Flow"
          subtitle="A simple, three-step process designed for clarity and efficiency from inquiry to launch."
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
        />
        <div className="mt-8" />

        {/* 🚀 Flow Container */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative max-w-5xl mx-auto"
          variants={flowContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {ENQUIRY_STEPS.map((step, index) => (
            <EnquiryStepCard key={step.id} step={step} index={index} />
          ))}
        </motion.div>

        {/* Optional: CTA Button styled with the new colors - NOW A LINK */}
        <div className="mt-8 flex justify-center">
          <MotionLink // 💡 Changed from motion.button to MotionLink
            to="/enquire" // 💡 ADDED: Set the 'to' prop for React Router navigation
            className="text-white font-medium px-8 py-3 rounded-full shadow-xl transition-all duration-300 text-base flex items-center justify-center"
            style={{ backgroundColor: primaryColor }}
            whileHover={{ scale: 1.05, backgroundColor: secondaryColor, boxShadow: '0 10px 15px -3px rgba(0, 75, 115, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Consultation Today
          </MotionLink>
        </div>

      </div>
    </section>
  );
};

export default PremiumEnquiryFlow;