// src/components/FranchiseeTeaser.js
"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { 
  FaQuoteLeft, 
  FaArrowLeft, 
  FaArrowRight, 
  FaStar, 
  FaUserCircle,
  FaPlay // Added for resume button
} from "react-icons/fa";
import PremiumHeading from "./PremiumHeading";

// Define your colors (Primary: Dark Blue, Secondary: Orange)
const primaryColor = "#004B73"; // Dark Blue
const secondaryColor = "#F36B21"; // Orange
const accentLight = "#F0F8FF"; // Very Light Blue/White

// Dummy Testimonial Data (UNCHANGED)
const testimonials = [
  {
    id: 1,
    quote: "Aadimata Ventures provided exceptional business consultancy. Their insights into market trends were invaluable and helped us redefine our strategy for aggressive growth. Truly professional and results-driven!",
    name: "Mr. Subhankar Sahoo", 
    designation: "Entrepreneur & Business Head, Bhubaneswar", 
    rating: 5,
  },
  {
    id: 2,
    quote: "The marketing and advertising campaign they ran for us was a massive success. The reach and engagement exceeded all our expectations. Highly recommend their creative team.",
    name: "Ms. Bhawna Mohanty", 
    designation: "Marketing & Strategy Lead, Cuttack", 
    rating: 5,
  },
  {
    id: 3,
    quote: "We partnered with them for an educational project and saw a remarkable improvement in our institution's branding. Their approach is holistic and deeply committed.",
    name: "Dr. Sudeep Patra", 
    designation: "Educational Consultant, Puri", 
    rating: 4,
  },
  {
    id: 4,
    quote: "Their guidance in public utility projects was crucial for securing timely permits and project completion. They handle the complexities with genuine expertise.",
    name: "Mrs. Ananya Jena", 
    designation: "Senior Project Manager, Utilities Sector", 
    rating: 5,
  },
  {
    id: 5,
    quote: "Outstanding support for our publishing venture. From concept to distribution, Aadimata Ventures ensured a flawless execution and exceptional market entry.",
    name: "Mr. Gopal Behera", 
    designation: "Founder, Regional Publishing House", 
    rating: 5,
  },
];

// --- CORE LAYOUT LOGIC AND ANIMATION VARIANTS (MAX SPEED AND SMOOTHNESS) ---

const getIndex = (i, total, current) => {
  const index = (i - current + total) % total;
  return index;
};

const cardLayoutVariants = (current, total) => ({
  center: (i) => {
    const index = getIndex(i, total, current);
    
    let translateX = 0;
    let scale = 0.6;
    let opacity = 0;
    let zIndex = 0;

    if (index === 0) {
      // Center Card (The Focus)
      translateX = '0%';
      scale = 1; 
      opacity = 1;
      zIndex = 10;
    } else if (index === total - 1) {
      // Immediate Previous Card (Small Left)
      translateX = '-100%'; 
      scale = 0.85;
      opacity = 0.4;
      zIndex = 5;
    } else if (index === 1) {
      // Immediate Next Card (Small Right)
      translateX = '100%'; 
      scale = 0.85;
      opacity = 0.4;
      zIndex = 5;
    } else if (index === total - 2) {
      // Second Left Card (Extra Small Left)
      translateX = '-150%'; 
      scale = 0.7;
      opacity = 0.1;
      zIndex = 2;
    } else if (index === 2) {
      // Second Right Card (Extra Small Right)
      translateX = '150%';
      scale = 0.7;
      opacity = 0.1;
      zIndex = 2;
    }
    
    return {
      x: translateX,
      // Animated zoom for the center card 
      scale: index === 0 ? [0.85, 1.05, 1] : scale, 
      opacity: opacity,
      zIndex: zIndex,
      // FASTER, Continuous Transition: 0.5s duration
      transition: { 
        type: "linear", 
        duration: 0.5, 
        ease: "linear"
      },
    };
  },
});


const TestimonialSectionPremium = () => {
  const [current, setCurrent] = useState(0); 
  const total = testimonials.length;
  // isPaused is now ONLY set to true upon manual click of arrows/dots
  const [isPaused, setIsPaused] = useState(false); 
  const containerRef = useRef(null); 

  const navigate = (direction) => {
    setCurrent((prev) => (prev + direction + total) % total);
  };
  
  // Function to PAUSE: sets pause state to true
  const handlePause = () => {
    setIsPaused(true);
  }
  
  // Function to RESUME: sets pause state to false
  const handleResume = () => {
    setIsPaused(false);
  }

  // --- AUTOSLIDER LOGIC (Continuous, non-stop movement unless PAUSED) ---
  useEffect(() => {
    // Only run if NOT manually paused
    if (isPaused) return; 

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 2500); // MAX SPEED: 1000ms (1 second)

    return () => clearInterval(interval);
  }, [total, isPaused]);
  // --- END AUTOSLIDER LOGIC ---


  return (
    <section 
        className="flex flex-col items-center justify-center py-8 px-4 bg-white w-full overflow-hidden"
    >
      
      {/* 👑 PREMIUM HEADING (UNCHANGED) */}
      <PremiumHeading
        preTitle="Client Success Stories"
        mainTitleBold="Experience The"
        mainTitleNormal="Aadimata Difference"
        subtitle="Hear directly from our esteemed clients about the results we deliver."
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
      />
      
      {/* --- CAROUSEL CONTAINER (Removed hover pause) --- */}
      <div 
        ref={containerRef}
        className="relative w-full max-w-5xl h-[450px] md:h-[400px]"
        // Hovering OVER the container does NOTHING to the pause state
      >
        
        {/* Card Track (UNCHANGED) */}
        <div className="absolute inset-0 flex justify-center items-center">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="absolute w-[80%] md:w-[60%] lg:w-[450px] h-auto p-8 rounded-sm shadow-xl cursor-pointer flex flex-col items-center text-center transition-all duration-300"
              style={{ backgroundColor: accentLight }}
              custom={index}
              variants={cardLayoutVariants(current, total)}
              animate="center"
              // Clicks on the card will PAUSE the slider
              onClick={() => { setCurrent(index); handlePause(); }} 
            >
              
              {/* Card Content (UNCHANGED) */}
              <div className="flex items-center space-x-4 mb-4">
                <FaUserCircle 
                  className="w-16 h-16 rounded-full" 
                  style={{ color: primaryColor, opacity: 0.8 }} 
                />
              </div>
              
              <div className="flex text-base mb-2" style={{ color: secondaryColor }}>
                {Array(testimonial.rating).fill(0).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <FaQuoteLeft className="text-3xl mb-4 opacity-70" style={{ color: primaryColor }} />
              
              <p className="italic text-base text-gray-700 leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              
              <h4 className="text-lg font-bold mb-0" style={{ color: primaryColor }}> 
                {testimonial.name}
              </h4>

            </motion.div>
          ))}
        </div>
        
        {/* Navigation Buttons (Clicks PAUSE the slide) */}
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 z-30 p-4 rounded-full text-white shadow-xl transition-colors duration-300 ml-4 hidden md:block"
          onClick={() => { navigate(-1); handlePause(); }}
          style={{ backgroundColor: secondaryColor }}
        >
          <FaArrowLeft />
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 z-30 p-4 rounded-full text-white shadow-xl transition-colors duration-300 mr-4 hidden md:block"
          onClick={() => { navigate(1); handlePause(); }}
          style={{ backgroundColor: secondaryColor }}
        >
          <FaArrowRight />
        </button>

        {/* --- Resume Button (Visible only when paused) --- */}
        {isPaused && (
          <button
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 p-3 rounded-full text-white shadow-xl transition-colors duration-300 flex items-center space-x-2 animate-bounce"
            onClick={handleResume}
            style={{ backgroundColor: primaryColor }}
            title="Resume Auto-Slide"
          >
            <FaPlay className="text-sm" />
            <span className="text-sm font-semibold">Resume</span>
          </button>
        )}
        
      </div>
      
      {/* Dots Indicator (Clicks PAUSE the slide) */}
      <div className="flex justify-center space-x-3 mt-10">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${current === index ? 'w-6' : ''}`}
            style={{ 
              backgroundColor: current === index ? secondaryColor : primaryColor, 
              opacity: current === index ? 1 : 0.4 
            }}
            onClick={() => { setCurrent(index); handlePause(); }}
          />
        ))}
      </div>

    </section>
  );
};

export default TestimonialSectionPremium;