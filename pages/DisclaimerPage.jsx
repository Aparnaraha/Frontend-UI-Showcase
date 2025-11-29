"use client";

import React from 'react';
import { motion } from 'framer-motion';
// Using consistent icons
import { FaGavel, FaExternalLinkAlt, FaExclamationTriangle } from 'react-icons/fa';

// --- Aadimata Venture Brand Colors ---
const primaryColor = "#004B73"; // Dark Blue
const secondaryColor = "#F36B21"; // Orange (Accent)
const white = "#fff";
const grayLight = "#F9FAFB"; // Very light background for contrast
const darkBlueDeep = "#003A59";

// --- Animation Variants (Re-used for a gentle page entry) ---
const pageEntranceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

// Data for Disclaimer Sections - USING <b>BOLD</b> MARKDOWN IN CONTENT
const DISCLAIMER_SECTIONS = [
    {
        icon: FaExclamationTriangle,
        title: "General Information Disclaimer",
        content: "The information provided by ADIMATA VENTURES ('we,' 'us' or 'our') on this website is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, or completeness of any information.",
        color: secondaryColor,
        emphasis: "No Professional Advice:",
        emphasisContent: "The content (including business, educational, and media topics) is not intended as professional advice. Always seek the advice of a qualified professional for any specific questions.",
    },
    {
        icon: FaGavel,
        title: "Limitation of Liability",
        content: "Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.",
        color: primaryColor,
        emphasis: "Errors & Omissions:",
        emphasisContent: "While we strive for accuracy, we reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice.",
    },
    {
        icon: FaExternalLinkAlt,
        title: "External Links Disclaimer",
        content: "The site may contain links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.",
        color: secondaryColor,
        emphasis: "Third-Party Content:",
        emphasisContent: "We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site.",
    },
];

const DisclaimerPage = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={pageEntranceVariants}
            viewport={{ once: true, amount: 0.1 }}
            className="w-full pt-32 pb-4 px-6 lg:px-12"
            style={{ backgroundColor: grayLight }}
        >
            {/* UPDATED: max-w-4xl changed to max-w-7xl */}
            <div className="max-w-7xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-2xl">

                {/* HEADER SECTION - H1 kept at large size for impact */}
                <div className="text-center mb-10 pb-4 border-b" style={{ borderColor: primaryColor + '30' }}>
                    {/*                     <h1 
                        className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 leading-none" 
                        style={{ color: darkBlueDeep }}
                    >
                        DISCLAIMER
                    </h1> */}
                    <p className="text-2xl font-medium" style={{ color: secondaryColor }}>
                        ADIMATA VENTURES - Official Website Legal Notice
                    </p>
                    <p className="mt-4 text-gray-500 text-sm">
                        Last updated: <b>[5/11/25]</b>
                    </p>
                </div>

                {/* DISCLAIMER CONTENT SECTIONS */}
                <div className="space-y-8">
                    {DISCLAIMER_SECTIONS.map((section, idx) => (
                        <motion.div
                            key={idx}
                            variants={{
                                hidden: { opacity: 0, y: 10 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: idx * 0.15 } }
                            }}
                            className="p-6 rounded-lg border-l-4 shadow-sm"
                            style={{ borderColor: section.color, backgroundColor: section.color + '05' }}
                        >
                            <div className="flex items-center mb-3">
                                <section.icon size={20} className="mr-3" style={{ color: section.color }} />
                                <h2 className="text-xl font-bold" style={{ color: primaryColor }}>
                                    {section.title}
                                </h2>
                            </div>

                            <p className="text-gray-700 mb-4 text-base leading-relaxed">
                                {section.content}
                            </p>

                            {/* Emphasis Box for Key Warning */}
                            <div className="p-3 rounded" style={{ backgroundColor: section.color + '15' }}>
                                <p className="text-sm" style={{ color: darkBlueDeep }}>
                                    <b>{section.emphasis}</b> {section.emphasisContent}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CONTACT FOOTER */}
                <div className="mt-10 pt-6 border-t text-center" style={{ borderColor: primaryColor + '30' }}>
                    <p className="text-base font-semibold mb-2" style={{ color: primaryColor }}>
                        Contact Us
                    </p>
                    <p className="text-sm text-gray-500">
                        For any inquiries regarding this Disclaimer, please contact us at <b>+91 91243 55350
                            /inquiry@adimataventures.com</b>.
                    </p>
                </div>

            </div>
        </motion.div>
    );
};

export default DisclaimerPage;