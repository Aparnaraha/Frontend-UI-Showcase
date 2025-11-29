// src/components/FranchiseContent.js
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaLaptop, FaMotorcycle, FaHome, FaMoneyBillWave, FaBullhorn, FaHeart, FaWrench, FaTags, FaFileSignature, FaWhatsapp, FaRupeeSign, FaChevronRight, FaCheckCircle, FaClipboardCheck, FaDollarSign } from 'react-icons/fa';

// 🚨 IMPORT THE HEADING COMPONENT
import PremiumHeading from "../../ui/PremiumHeading";

// 🎨 Color Scheme (Consistent)
const primaryColor = "#004B73"; // Dark Blue
const secondaryColor = "#F36B21"; // Orange
const accentLight = "#F0F8FF"; // Very Light Blue/White
const white = "#fff";

// --- Data Structures (Same as before) ---
const ELIGIBILITY_POINTS = [
    { icon: FaUserGraduate, requirement: "Educational", text: "Must have a qualification of <b> Graduation </b>." },
    { icon: FaLaptop, requirement: "Tech & Equipment", text: "Must have knowledge of <b> computer operation </b> and own a desktop, Laptop, or Android phone." },
    { icon: FaMotorcycle, requirement: "Mobility", text: "Must own a <b> two-wheeler </b>." },
    { icon: FaHome, requirement: "Office Space", text: "Must have an <b> office space </b> (in home or outside)." },
    { icon: FaMoneyBillWave, requirement: "Franchise Fee", text: "Capacity to pay Franchise fee: <b> Rs. 11,000 + 18% GST </b>." },
    { icon: FaBullhorn, requirement: "Marketing Investment", text: "Capacity to invest for <b> Advertisement & Publicity </b> to collect customers." },
    { icon: FaHeart, requirement: "Commitment", text: "Willingness to work <b> wholeheartedly and to earn money </b>." },
];

const Franchise_ROLES = [
    "Service Provider", "Advertising Consultant", "Marketing Consultant",
    "Legal Consultant", "Educational Consultant", "Business Consultant",
    "NGO Consultant", "Coaching Institute Owner", "School Owner",
    "Social Welfare Programme Organiser", "News Reporter", "Insurance Advisor",
    "Entertainment Programme Event Manager",
];

const FEE_AMOUNT = 11000;
const GST_RATE = 0.18;
const GST_AMOUNT = FEE_AMOUNT * GST_RATE; // 1980
const TOTAL_FEE = FEE_AMOUNT + GST_AMOUNT; // 12980

// --- Main Component: FranchiseContent ---
const FranchiseContent = () => {

    // Animation variant for content blocks
    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
    };

    // Animation variant for the fee box
    const feeBoxVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.3 } }
    };

    return (
        //         {/* DECREASED PY-20 TO PY-12 FOR MOBILE */}
        <section className="py-4 pt-32 px-4" style={{ backgroundColor: white }}>
            <div className="max-w-6xl mx-auto space-y-12 md:space-y-8"> {/* REDUCED SPACE-Y */}

                {/* 1. ELIGIBILITY SECTION (UPDATED FOR RESPONSIVENESS) */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={sectionVariants}
                    viewport={{ once: true, amount: 0.1 }}
                    className="p-4 md:p-8 rounded-sm shadow-md" // Reduced padding on mobile
                    style={{ backgroundColor: accentLight }}
                >
                    <PremiumHeading
                        preTitle="SECTION 1: FOUNDATION"
                        mainTitleBold="FRANCHISE"
                        mainTitleNormal="ELIGIBILITY"
                        subtitle="The mandatory qualifications and requirements to ensure a successful partnership."
                        primaryColor={primaryColor}
                        secondaryColor={secondaryColor}
                    />

                    {/* REDUCED FONT SIZE TO TEXT-BASE ON MOBILE */}
                    <p className="text-base md:text-lg text-gray-700 mt-6 mb-4 leading-relaxed">
                        Becoming a Franchise is a partnership built on mutual commitment. We are looking for motivated individuals who possess the foundational resources and a genuine drive to succeed as a service provider and entrepreneur in their local area.
                    </p>

                    {/* START: TABLE STRUCTURE FOR ELIGIBILITY */}
                    <div className="mt-8 p-0 md:p-4 rounded-sm bg-white shadow-inner overflow-x-auto"> {/* REMOVED PADDING FOR FULL WIDTH TABLE ON MOBILE */}
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead style={{ backgroundColor: accentLight }}>
                                <tr>
                                    <th className="px-3 md:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider w-1/3" style={{ color: primaryColor }}> {/* Added W-1/3 and reduced px */}
                                        <FaClipboardCheck className="inline mr-1 text-sm md:text-base" style={{ color: secondaryColor }} /> Requirement
                                    </th>
                                    <th className="px-3 md:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider w-2/3" style={{ color: primaryColor }}> {/* Added W-2/3 and reduced px */}
                                        <FaWrench className="inline mr-1 text-sm md:text-base" style={{ color: secondaryColor }} /> Details
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {ELIGIBILITY_POINTS.map((point, index) => (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        {/* REQUIREMENT COLUMN */}
                                        <td className="px-3 md:px-6 py-3 md:py-4 whitespace-normal text-xs md:text-sm font-medium text-gray-900"> {/* Adjusted font size and padding */}
                                            <point.icon className="text-lg md:text-xl mr-2 md:mr-3 inline align-middle" style={{ color: primaryColor }} />
                                            {point.requirement}
                                        </td>
                                        {/* DETAILS COLUMN (with ** to <strong> conversion) */}
                                        <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm text-gray-700"> {/* Adjusted font size and padding */}
                                            <span dangerouslySetInnerHTML={{ __html: point.text }} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* END: TABLE STRUCTURE FOR ELIGIBILITY */}

                </motion.div>

                <hr className="border-t-2" style={{ borderColor: accentLight }} />

                {/* 2. ROLES SECTION (UPDATED FOR RESPONSIVENESS) */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={sectionVariants}
                    viewport={{ once: true, amount: 0.1 }}
                    className="p-4 md:p-8 rounded-sm shadow-lg border-2 text-center" // Reduced padding on mobile
                    style={{ borderColor: primaryColor }}
                >
                    <div className="max-w-3xl mx-auto">
                        <PremiumHeading
                            preTitle="SECTION 2: OPPORTUNITY"
                            mainTitleBold="FRANCHISE"
                            mainTitleNormal="Work Profile"
                            subtitle="The diverse and entrepreneurial roles you will undertake across various sectors."
                            primaryColor={primaryColor}
                            secondaryColor={secondaryColor}
                        />
                    </div>

                    {/* REDUCED FONT SIZE ON MOBILE */}
                    <p className="text-lg md:text-xl font-medium mt-6 mb-6" style={{ color: primaryColor }}>
                        Upon enrollment, you will assume roles in key industry verticals:
                    </p>

                    {/* CHANGED GRID TO 2 COLUMNS ON MOBILE, 3 ON MD+ */}
                    <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-8 gap-y-3 text-sm md:text-base max-w-4xl mx-auto p-4 md:p-6 bg-white rounded-sm shadow-md"> {/* Reduced font size, reduced padding and gap */}
                        {Franchise_ROLES.map((role, index) => (
                            <li key={index} className="flex items-center text-left" style={{ color: primaryColor }}>
                                <FaChevronRight className="text-xs mr-2 shrink-0" style={{ color: secondaryColor }} /> {/* Smaller icon */}
                                {role}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <hr className="border-t-2" style={{ borderColor: accentLight }} />

                {/* 3. APPLICATION AND PAYMENT SECTION (UPDATED FOR RESPONSIVENESS) */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={sectionVariants}
                    viewport={{ once: true, amount: 0.1 }}
                    className="p-4 md:p-8 rounded-sm shadow-md" // Reduced padding on mobile
                    style={{ backgroundColor: accentLight }}
                >
                    <PremiumHeading
                        preTitle="SECTION 3: ENROLLMENT"
                        mainTitleBold="Application &"
                        mainTitleNormal="Payment Details"
                        subtitle="Your guide to the quick application process and the transparent fee structure."
                        primaryColor={primaryColor}
                        secondaryColor={secondaryColor}
                    />

                    {/* REVERSED GRID ORDER ON LG SCREENS FOR VISUAL BALANCE, REDUCED GAP */}
                    <div className="mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 items-start">

                        {/* APPLICATION STEPS (Left/Center) */}
                        <div className="lg:col-span-2 space-y-4 md:space-y-6"> {/* Reduced space-y */}

                            {/* REDUCED FONT SIZE */}
                            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 flex items-center" style={{ color: primaryColor }}>
                                <FaClipboardCheck className="mr-2 md:mr-3 text-lg md:text-xl" style={{ color: secondaryColor }} /> How to Become a Franchise
                            </h3>

                            {/* Step 1 - Reduced padding, font size */}
                            <div className="p-3 text-sm md:text-base border-l-4 rounded-sm bg-white shadow-sm" style={{ borderColor: secondaryColor }}>
                                <span className="text-base md:text-lg font-bold mr-2 md:mr-3" style={{ color: secondaryColor }}>1.</span>
                                <strong style={{ color: primaryColor }}>Initial Request:</strong> Send a request message to <b>WhatsApp no: 9090015600</b>. We will send the Franchise Application Kit (Audio format - Odia Language).
                            </div>

                            {/* Step 2 */}
                            <div className="p-3 text-sm md:text-base border-l-4 rounded-sm bg-white shadow-sm" style={{ borderColor: secondaryColor }}>
                                <span className="text-base md:text-lg font-bold mr-2 md:mr-3" style={{ color: secondaryColor }}>2.</span>
                                <strong style={{ color: primaryColor }}>Submission:</strong> Submit the <b>Filled Application</b>, <b>Notarized Agreement</b> on stamp paper, and the <b>Franchise Fee</b>.
                            </div>

                            {/* Step 3 */}
                            <div className="p-3 text-sm md:text-base border-l-4 rounded-md bg-white shadow-sm" style={{ borderColor: secondaryColor }}>
                                <span className="text-base md:text-lg font-bold mr-2 md:mr-3" style={{ color: secondaryColor }}>3.</span>
                                <strong style={{ color: primaryColor }}>Confirmation:</strong> After proper scrutiny, you will receive the <b>Appointment Letter</b> and <b>Business Starter Kit</b>.
                            </div>
                        </div>

                        {/* FEE SUMMARY (Right Column) */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={feeBoxVariants}
                            viewport={{ once: true, amount: 0.1 }}
                            className="p-6 md:p-8 rounded-sm shadow-xl mt-6 lg:mt-0" // Reduced padding, reduced top margin on mobile
                            style={{ backgroundColor: primaryColor }}
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-4 md:mb-5 flex items-center justify-center"> {/* Reduced font size */}
                                <FaRupeeSign className="mr-2 text-white text-lg md:text-xl" /> Franchise Payment
                            </h3>

                            <div className="space-y-2 text-white text-sm md:text-base"> {/* Reduced space-y and font size */}
                                <div className="flex justify-between items-center pb-2 border-b" style={{ borderColor: secondaryColor }}>
                                    <span className="font-medium">Franchise Fee</span>
                                    <span className="font-semibold flex items-center"><FaRupeeSign className="text-xs md:text-base mr-1" />{FEE_AMOUNT.toLocaleString('en-IN')}</span>
                                </div>
                                <div className="flex justify-between items-center pb-2 border-b" style={{ borderColor: secondaryColor }}>
                                    <span className="font-medium">18% GST</span>
                                    <span className="font-semibold flex items-center"><FaRupeeSign className="text-xs md:text-base mr-1" />{GST_AMOUNT.toLocaleString('en-IN')}</span>
                                </div>
                            </div>

                            {/* REDUCED FONT SIZE */}
                            <div className="mt-4 md:mt-6 p-2 md:p-3 rounded-md flex justify-between items-center" style={{ backgroundColor: secondaryColor, color: white }}>
                                <span className="font-bold text-base md:text-lg">Total Non-Refundable:</span>
                                <span className="font-bold text-xl md:text-2xl flex items-center">
                                    <FaRupeeSign className="text-lg md:text-xl mr-1" />{TOTAL_FEE.toLocaleString('en-IN')}
                                </span>
                            </div>

                            <p className="text-xxs md:text-xs text-white opacity-80 mt-2 text-center"> {/* Very small font size for note */}
                                *This total fee is non-refundable upon submission.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default FranchiseContent;