"use client";

import React from "react";
import { motion } from "framer-motion";
// Importing PageHero from the original file's path (as per the FAQ example)
import PageHero from '../../ui/Hero';
import PremiumHeading from "../../ui/PremiumHeading";

// --- ICONS for Payment Steps ---
const Whatsapp = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>;
const FileText = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>;
const CheckCircle = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>;


// --- COLOR PALETTE CONSTANTS (Retained for Hero consistency) ---
const COLORS = {
  darkBlue: "#1E4567", // PRIMARY (Used for Hero BG)
  purple: "#7B3B6B",  // ACCENT (Used for Hero shortPara)
};

const PRIMARY_COLOR = COLORS.darkBlue;
const WHITE_BG = '#F7F7F7';

// --- FAQ/Franchise Color Scheme (Used for the main content section) ---
const faqPrimaryColor = "#004B73"; // Dark Blue (Main Text, Headings)
const faqSecondaryColor = "#F36B21"; // Orange (Accent, Icons)
const faqAccentLight = "#F0F8FF"; // Very Light Blue (Card Backgrounds)
const faqWhite = "#ffffff"; // Pure White


// ======================================================================
//                                FRANCHISE PAYMENT CONTENT COMPONENT
// ======================================================================

const PaymentContent = () => {

  const PAYMENT_STEPS = [
    {
      icon: Whatsapp,
      title: "Step 1: Send Request via WhatsApp",
      description: (
        <>
          If you are interested to work as our franchise then please send a <b>request message</b> to WhatsApp no: <span className="font-bold tracking-wider" style={{ color: faqSecondaryColor }}>9090015600</span>.
        </>
      ),
      note: "We will send you the franchise Application Kit with details in Audio format (Odia Language).",
    },
    {
      icon: FileText,
      title: "Step 2: Submit Application and Fee",
      description: (
        <>
          Subsequently, you will send the <b>Filled in Application</b>, <b>Notarized Agreement on stamp paper</b>, and the <b>franchise Fee</b>.
        </>
      ),
      fee: (
        <p className="mt-2 p-2 rounded-sm font-bold" style={{ backgroundColor: faqAccentLight, border: `1px solid ${faqSecondaryColor}` }}>
          Fee Breakdown: Rs. 11,000 + 18% GST = <span className="text-xl" style={{ color: faqSecondaryColor }}>Total Rs. 12,980/-</span> (Non-refundable).
        </p>
      ),
    },
    {
      icon: CheckCircle,
      title: "Step 3: Scrutiny and Onboarding",
      description: "After proper scrutiny of your application and documents, we will provide you with your <b>appointment letter</b> and the <b>business starter kit</b>.",
      note: "This finalizes your enrollment as an official franchise.",
    },
  ];

  return (
    <motion.div
      className="p-8 md:p-12 rounded-sm shadow-2xl max-w-7xl mx-auto"
      style={{ backgroundColor: faqWhite }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* --- Introduction/Heading Section --- */}
      <div className="text-center mb-10 p-6 rounded-sm" style={{ backgroundColor: faqAccentLight }}>
        <PremiumHeading
          preTitle="FRANCHISE ONBOARDING PROCESS"
          mainTitleBold="FRANCHISE"
          mainTitleNormal="PAYMENT DETAILS"
          subtitle="A simple, step-by-step guide to becoming an official franchise."
          primaryColor={faqPrimaryColor}
          secondaryColor={faqSecondaryColor}
        />
      </div>

      {/* --- Payment/Process Steps Section --- */}
      <div className="mt-8 space-y-8">
        <h3 className="text-2xl font-bold mb-8 border-b pb-2" style={{ color: faqPrimaryColor, borderColor: faqSecondaryColor + "80" }}>
          Official Enrollment Procedure
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PAYMENT_STEPS.map((step, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-sm shadow-lg border-t-8"
              style={{
                backgroundColor: faqWhite,
                borderColor: faqSecondaryColor,
                color: faqPrimaryColor
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 mr-3 rounded-full" style={{ backgroundColor: faqSecondaryColor + "20" }}>
                  <step.icon className="w-6 h-6" style={{ color: faqSecondaryColor }} />
                </div>
                <h4 className="text-xl font-bold">{step.title}</h4>
              </div>
              <p className="text-gray-700">{step.description}</p>
              {step.fee && <div className="mt-4">{step.fee}</div>}
              {step.note && (
                <blockquote className="mt-4 p-3 border-l-4 text-sm italic" style={{ borderColor: faqPrimaryColor, color: faqPrimaryColor }}>
                  {step.note}
                </blockquote>
              )}
            </motion.div>
          ))}
        </div>
      </div>

    </motion.div>
  );
};


// ======================================================================
//                                FRANCHISE PAYMENT PAGE LAYOUT
// ======================================================================

const FranchisePaymentPage = () => {
  // Hero Props
  const paymentPageProps = {
    title: "Franchise Payment",
    subtitle: "Steps to finalize your application and payment for the franchise program.",
    imageUrl: "/hero.png", // Reused placeholder
    shortPara: "Your path to becoming an official franchise starts here with a simple application and a one-time, non-refundable fee.",
    backgroundColor: PRIMARY_COLOR + '05',
  };

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: WHITE_BG }}>

      {/* ===================================================================== */}
      {/* ## 1. Page Hero Component */}
      {/* ===================================================================== */}
      {/* <PageHero {...paymentPageProps} /> */}

      {/* ===================================================================== */}
      {/* ## 2. Franchise Payment Content Section */}
      {/* ===================================================================== */}
      <div className="pt-32 pb-4" style={{ backgroundColor: WHITE_BG }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PaymentContent />
        </div>
      </div>

    </div>
  );
};

export default FranchisePaymentPage;