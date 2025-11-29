import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// Icons needed for this section:
import { FaGraduationCap, FaDesktop, FaMotorcycle, FaHome, FaRupeeSign, FaHandshake } from 'react-icons/fa'; 
// Re-using the imported heading component
import PremiumHeading from "../PremiumHeading"; 

// 🎨 Color Scheme (Consistent with AadimataConsultancyAutoHighlight)
const primaryColor = "#004B73"; // Dark Blue
const secondaryColor = "#F36B21"; // Orange
const white = "#fff";
const softGray = "#f9fafb"; 

// --- Franchisee Data ---
const ELIGIBILITY = [
    { text: "Must have a qualification of Graduation", icon: FaGraduationCap },
    { text: "Must have knowledge of computer operation", icon: FaDesktop },
    { text: "Must have a desktop or Laptop computer or Android phone", icon: FaDesktop },
    { text: "Must have a two wheeler", icon: FaMotorcycle },
    { text: "Must have an office space in home or outside", icon: FaHome },
    { text: "Must have capacity to pay franchisee fee", icon: FaRupeeSign },
    { text: "Must have capacity to invest for Advertisement & Publicity", icon: FaRupeeSign },
    { text: "Must have willingness to work wholeheartedly and to earn money", icon: FaHandshake },
];

const ROLES = [
    "Service provider", "Advertising Consultant", "Marketing Consultant", 
    "Legal Consultant", "Educational Consultant", "Business Consultant", 
    "NGO Consultant", "Coaching Institute Owner", "School Owner", 
    "Social Welfare Programme Organiser", "News Reporter", "Insurance Advisor", 
    "Entertainment programme Event Manager"
];

// --- Section Component ---
const FranchiseeSection = () => {

    return (
        <section className="py-20 px-4" style={{ backgroundColor: white }}> 
            <div className="max-w-6xl mx-auto"> 
                
                <PremiumHeading
                    preTitle="PARTNER WITH US"
                    mainTitleBold="Become Our"
                    mainTitleNormal="Franchisee"
                    subtitle="Explore the requirements, benefits, and the straightforward process to join our network of consultants."
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                />
                
                <div className="mt-12 grid lg:grid-cols-3 gap-10">

                    {/* Left Column: Eligibility */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="p-6 rounded-xl border" 
                        style={{ borderColor: softGray, backgroundColor: softGray }}
                    >
                        <h3 className="text-2xl font-bold mb-4" style={{ color: primaryColor }}>
                            ✔️ Eligibility Criteria
                        </h3>
                        <ul className="space-y-4">
                            {ELIGIBILITY.map((item, index) => (
                                <li key={index} className="flex items-start text-gray-700">
                                    <item.icon className="text-xl mr-3 mt-1 shrink-0" style={{ color: secondaryColor }} />
                                    <span className="text-sm leading-relaxed">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Middle Column: Roles */}
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="p-6 rounded-xl border"
                        style={{ borderColor: softGray, backgroundColor: softGray }}
                    >
                        <h3 className="text-2xl font-bold mb-4" style={{ color: primaryColor }}>
                            💼 Roles You Will Play
                        </h3>
                        <ul className="space-y-3 columns-2 text-sm">
                            {ROLES.map((role, index) => (
                                <li key={index} className="text-gray-700">
                                    <span style={{ color: secondaryColor }}>•</span> {role}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Right Column: Enrollment & Fee */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="p-6 rounded-xl"
                        style={{ border: `1px solid ${primaryColor}20`, backgroundColor: white }}
                    >
                        <h3 className="text-2xl font-bold mb-4" style={{ color: primaryColor }}>
                            📝 How to Enroll
                        </h3>
                        
                        <ol className="space-y-4 text-gray-700 text-sm">
                            <li>
                                **Step 1: Request Kit** <br/>
                                Send a request message to WhatsApp no: <span className="font-semibold" style={{ color: secondaryColor }}>9090015600</span>. We will send the Application Kit and details in Audio format (Odia Language).
                            </li>
                            <li>
                                **Step 2: Submit Documents & Fee** <br/>
                                Send the Filled-in Application, Notarized Agreement on stamp paper, and the Franchisee fee.
                            </li>
                            <li>
                                **Step 3: Receive Starter Kit** <br/>
                                After proper scrutiny, you will receive an appointment letter and a business starter kit.
                            </li>
                        </ol>

                        <div className="mt-6 p-4 rounded-lg text-center" style={{ backgroundColor: primaryColor, color: white }}>
                            <p className="text-lg font-bold">Franchisee Fee</p>
                            <p className="text-2xl font-extrabold mt-1">
                                Rs. 12,980/- 
                                <span className="block text-xs font-normal opacity-80">(Rs. 11,000 + 18% GST, non-refundable)</span>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FranchiseeSection;