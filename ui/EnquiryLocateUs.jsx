"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaGlobe,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";
// 👈 Import the new component
import PremiumHeading from "./PremiumHeading"; 

// Variants for sequential animation (UNCHANGED)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "tween", duration: 0.5, ease: "easeOut" },
  },
};

const ContactUs = () => {
  // Define your colors (Primary: Dark Blue, Secondary: Orange)
  const primaryColor = "#004B73"; // Dark Blue
  const secondaryColor = "#F36B21"; // Orange
  const accentLight = "#F0F8FF"; // Very Light Blue/White

  return (
    <section className="flex flex-col items-center justify-center py-8 px-4 bg-white w-full">
      {/* 👑 ===== ULTIMATE PREMIUM HEADING STYLE (NOW A COMPONENT) ===== 👑 */}
      <PremiumHeading
        preTitle="Contact Us"
        mainTitleBold="Initiate"
        mainTitleNormal="Your Inquiry"
        subtitle="Experience dedicated support. Use the form or connect directly with our team."
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
      />
      {/* ----------------------------------------------------- */}

      {/* ===== Main Content Card - SQUARE LOOK: rounded-lg, FOCUSED SIZE: max-w-4xl ===== */}
      <motion.div
        className="w-full max-w-5xl shadow-2xl rounded-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2 bg-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ===== LEFT SIDE — CONTACT INFO PANEL (1/2 width) - Subtle Background ===== */}
        <div
          className="lg:col-span-1 p-8 flex flex-col justify-between space-y-6"
          style={{ backgroundColor: accentLight }}
        >
          <div className="space-y-6">
            <h2 className="text-xl font-medium mb-4 tracking-wider" style={{ color: primaryColor }}>
              Office Information
            </h2>

            {/* Contact Info Items */}
            {[
              { icon: FaMapMarkerAlt, title: "Address", content: <>Raghunath Pada, Near Shibaprasad School<br />P.O Titilagarh, Dist Balangir ( Odisha )</> },
              { icon: FaEnvelope, title: "Email", content: <a href="mailto:inquiry@adimataventures.com" className="text-gray-700 hover:text-blue-700 font-normal transition duration-300">inquiry@adimataventures.com</a> },
              { icon: FaPhoneAlt, title: "Phone", content: <p className="text-gray-700 font-normal"><a href="tel:7978241091" className="hover:text-blue-700">7978241091</a>, <a href="tel:9124355350" className="hover:text-blue-700">9124355350</a></p> },
              { icon: FaGlobe, title: "Website", content: <a href="https://www.adimataventures.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-700 font-normal transition duration-300">www.adimataventures.com</a> },
            ].map((info, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-3"
                variants={itemVariants}
              >
                <div className="text-xl mt-1 shrink-0" style={{ color: secondaryColor }}>
                  <info.icon />
                </div>
                <div>
                  <h3 className="font-medium text-base mb-0" style={{ color: primaryColor }}>
                    {info.title}
                  </h3>
                  <div className="text-gray-600 leading-snug text-sm">
                    {info.content}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* WhatsApp Link - Consistent Style */}
          <motion.a
            href="https://wa.me/917978241091"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center space-x-2 text-green-600 font-medium hover:text-green-700 transition duration-300 w-fit"
            whileHover={{ x: 5 }}
            variants={itemVariants}
          >
            <FaWhatsapp className="text-lg" />
            <span>Instant Chat on WhatsApp</span>
          </motion.a>
        </div>

        {/* ===== RIGHT SIDE — CONTACT FORM (1/2 width) - Clean Background ===== */}
        <div className="lg:col-span-1 p-8 flex flex-col justify-center bg-white">
          <h2 className="text-xl font-medium mb-4 tracking-wide text-gray-700">
            Send Us Your Inquiry
          </h2>
          <form className="grid grid-cols-1 gap-3">

            {/* Name Input */}
            <motion.div className="flex flex-col" variants={itemVariants}>
              <label htmlFor="name" className="text-gray-700 font-normal mb-1 text-sm">Full Name</label>
              <input
                id="name" type="text" placeholder="John Doe" required
                className="px-4 py-2 rounded-lg border border-gray-300 text-sm focus:ring-1 focus:ring-opacity-80 transition duration-300 placeholder-gray-400"
                // Note: Tailwind 'focus:ring' color should be used directly in Tailwind classes for full utility
                // For dynamic styling like this, we'll keep the approach you used for compatibility (though it's not pure Tailwind)
                style={{ focusRingColor: secondaryColor }} 
              />
            </motion.div>

            {/* Email Input */}
            <motion.div className="flex flex-col" variants={itemVariants}>
              <label htmlFor="email" className="text-gray-700 font-normal mb-1 text-sm">Email Address</label>
              <input
                id="email" type="email" placeholder="you@example.com" required
                className="px-4 py-2 rounded-lg border border-gray-300 text-sm focus:ring-1 focus:ring-opacity-80 transition duration-300 placeholder-gray-400"
                style={{ focusRingColor: secondaryColor }}
              />
            </motion.div>

            {/* Phone Number Input */}
            <motion.div className="flex flex-col" variants={itemVariants}>
              <label htmlFor="phone" className="text-gray-700 font-normal mb-1 text-sm">Phone Number</label>
              <input
                id="phone" type="tel" placeholder="+91 98765 43210 (Optional)"
                className="px-4 py-2 rounded-lg border border-gray-300 text-sm focus:ring-1 focus:ring-opacity-80 transition duration-300 placeholder-gray-400"
                style={{ focusRingColor: secondaryColor }}
              />
            </motion.div>

            {/* Message Textarea (Full Width) */}
            <motion.div className="flex flex-col" variants={itemVariants}>
              <label htmlFor="message" className="text-gray-700 font-normal mb-1 text-sm">Your Message</label>
              <textarea
                id="message" rows="3" placeholder="Tell us about your project or questions..." required
                className="px-4 py-2 rounded-lg border border-gray-300 text-sm focus:ring-1 focus:ring-opacity-80 transition duration-300 placeholder-gray-400"
                style={{ focusRingColor: primaryColor }}
              ></textarea>
            </motion.div>

            {/* Submission Button */}
            <motion.button
              type="submit"
              className={`mt-4 text-white font-medium px-6 py-2.5 rounded-lg shadow-md transition-all duration-300 text-base w-full md:w-auto flex items-center justify-center space-x-2`}
              style={{ backgroundColor: secondaryColor }}
              whileHover={{ scale: 1.05, backgroundColor: primaryColor }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              <FaPaperPlane className="mr-2 text-sm" />
              <span>Submit Form</span>
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;