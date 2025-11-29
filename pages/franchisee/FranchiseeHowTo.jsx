"use client";

import React from "react";
import { motion } from "framer-motion";
// Importing PageHero (assuming it is available in the current environment scope)
import PageHero from '../../ui/Hero';
import PremiumHeading from "../../ui/PremiumHeading";

// --- ICONS for Onboarding Steps ---
const Whatsapp = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>;
const FileText = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>;
const CheckCircle = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>;


// --- COLOR PALETTE CONSTANTS ---
const COLORS = {
  darkBlue: "#1E4567", // PRIMARY (Used for Hero BG)
};

const PRIMARY_COLOR = COLORS.darkBlue;
const WHITE_BG = '#F7F7F7';

// --- Color Scheme for Content ---
const primaryColor = "#004B73"; // Dark Blue (Main Text, Headings)
const secondaryColor = "#F36B21"; // Orange (Accent, Icons)
const accentLight = "#F0F8FF"; // Very Light Blue (Card Backgrounds)
const white = "#ffffff"; // Pure White


// ======================================================================
// FRANCHISE ONBOARDING CONTENT COMPONENT (New Layout)
// ======================================================================

const OnboardingContent = () => {

  const ONBOARDING_STEPS = [
    {
      icon: Whatsapp,
      title: "Step 1: Send Request via WhatsApp",
      description: (
        <>
          If you are interested to work as our Franchise then please send a <b>request message</b> to WhatsApp no: <span className="font-bold tracking-wider" style={{ color: secondaryColor }}>9090015600</span>.
        </>
      ),
      note: "We will send you the Franchise Application Kit with details in Audio format (Odia Language).",
    },
    {
      icon: FileText,
      title: "Step 2: Submit Application and Agreement",
      description: (
        <>
          Next, you will send the <b>Filled in Application</b> and the <b>Notarized Agreement on stamp paper</b> to complete the formalities.
        </>
      ),
      note: "Details regarding the Franchise Fee are discussed separately. This step focuses on documentation.",
    },
    {
      icon: CheckCircle,
      title: "Step 3: Scrutiny and Onboarding",
      description: "After proper scrutiny of your application and documents, we will provide you with your <b>appointment letter</b> and the <b>business starter kit</b>.",
      note: "This finalizes your enrollment as an official Franchise and marks the start of your business.",
    },
  ];

  // Component for a single timeline item
  const TimelineItem = ({ step, index }) => (
    <div className="flex relative pb-12">
      {/* The main line and circular icon container */}
      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
        {/* Vertical Line (Dotted for separation, solid line for connecting steps) */}
        <div className="h-full w-0.5 pointer-events-none" style={{ backgroundColor: secondaryColor + "40" }}></div>
      </div>
      <motion.div
        className="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center relative z-10"
        style={{ backgroundColor: secondaryColor }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
      >
        <step.icon className="w-5 h-5" style={{ color: white }} />
      </motion.div>

      {/* Content container */}
      <motion.div
        className="flex-grow pl-6 pt-1"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
      >
        <h3 className="text-xl font-bold mb-2" style={{ color: primaryColor }}>{step.title}</h3>
        <p className="leading-relaxed text-base mb-2" style={{ color: primaryColor }}>{step.description}</p>
        {step.note && (
          <blockquote className="p-3 border-l-4 text-sm italic rounded-sm" style={{ backgroundColor: accentLight, borderColor: secondaryColor, color: primaryColor }}>
            <b>Note:</b> {step.note}
          </blockquote>
        )}
      </motion.div>
    </div>
  );


  return (
    <motion.div
      className="p-4 md:p-8 rounded-sm shadow-2xl max-w-7xl mx-auto"
      style={{ backgroundColor: white }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* --- Introduction/Heading Section --- */}
      <div className="text-center mb-10 p-6 rounded-sm" style={{ backgroundColor: accentLight }}>
        <PremiumHeading
          preTitle="APPLICATION PROCESS"
          mainTitleBold="HOW TO BECOME"
          mainTitleNormal="A Franchise"
          subtitle="A simple, step-by-step guide to starting your journey with us."
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
        />
      </div>

      {/* --- Process Steps Section (Timeline) --- */}
      <div className="mt-8 px-4 sm:px-0">
        <h3 className="text-2xl font-bold mb-8 border-b pb-2" style={{ color: primaryColor, borderColor: secondaryColor + "80" }}>
          Three Simple Steps to Enrollment
        </h3>

        <div className="container mx-auto">
          {ONBOARDING_STEPS.map((step, index) => (
            <TimelineItem key={index} step={step} index={index} />
          ))}

          {/* Final Step Marker (Termination point) */}
          <div className="flex relative pb-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center" style={{ backgroundColor: primaryColor }}>
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: white }}><circle cx="12" cy="12" r="10"></circle></svg>
            </div>
            <div className="flex-grow pl-6 pt-1">
              <h3 className="text-xl font-bold" style={{ color: primaryColor }}>Start Your Business!</h3>
            </div>
          </div>

        </div>
      </div>

    </motion.div>
  );
};


// ======================================================================
//                                Franchise ONBOARDING PAGE LAYOUT
// ======================================================================

const FranchiseOnboardingPage = () => {
  // Hero Props
  const onboardingPageProps = {
    title: "HOW TO BECOME A Franchise",
    subtitle: "Your comprehensive guide to the application and enrollment process.",
    imageUrl: "/hero.png", // Reused placeholder
    shortPara: "Start your journey: follow these three steps to secure your appointment letter and business starter kit.",
    backgroundColor: PRIMARY_COLOR + '05',
  };

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: WHITE_BG }}>

      {/* 1. Page Hero Component */}
      {/* <PageHero {...onboardingPageProps} /> */}

      {/* 2. Franchise Onboarding Content Section */}
      <div className="pt-32 pb-4" style={{ backgroundColor: WHITE_BG }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <OnboardingContent />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Placeholder for the PageHero component that was commented out */}
          <div className="text-center mt-8">
            <h2 className="text-3xl font-bold" style={{ color: PRIMARY_COLOR }}>{onboardingPageProps.title}</h2>
            <p className="text-lg mt-2" style={{ color: primaryColor }}>{onboardingPageProps.subtitle}</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default FranchiseOnboardingPage;