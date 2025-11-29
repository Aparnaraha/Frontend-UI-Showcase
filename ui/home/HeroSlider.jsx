"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Handshake,
  ChevronLeft,
  ChevronRight,
  Circle,
  Users,
  Star as FutureIcon,
  Layers,
  Award,
  // NEW IMPORTS FOR PAUSE/PLAY
  Pause,
  Play,
} from "lucide-react";

// COLOR CONFIG
const ACCENT_ORANGE = "#F36B21";
const PRIMARY_BLUE = "#1E4567";
const DARK_GREY = "#1F2937";
const LIGHT_BG = "#F7FAFF";
const TEXT_LIGHT = "#FFFFFF";

// Data (omitted for brevity)
const SLIDES = [
  {
    id: 1,
    title: "Expert Consultancy to Accelerate Growth",
    subtitle: "BUSINESS • NGO • EDUCATION",
    description:
      "Strategic advisory, digital transformation and capacity building — designed to unlock sustained growth and impact.",
    bullets: [
      "Board-level strategy & planning",
      "Digital transformation roadmaps",
    ],
    imageUrl: "/hero11.png",
    ctaPrimary: "Discover Strategies",
    ctaSecondary: "Contact Us",
    icon: Handshake,
    imageTag1: "STRATEGY",
    imageCtaText: "Quick Response",
    imageOverlayText: "High-Impact Consulting",
    primaryLink: "/services/consultancy",
    secondaryLink: "/contact",
  },
  {
    id: 2,
    title: "Integrated Advertising, Publishing & Welfare",
    subtitle: "ADVERTISING • PUBLISHING • WELFARE",
    description:
      "End-to-end solutions — creative campaigns, distribution and community-first welfare initiatives that move hearts and markets.",
    bullets: [
      "Creative campaign design",
      "Multichannel publishing",
    ],
    imageUrl: "/hero12.png",
    ctaPrimary: "Explore Services",
    ctaSecondary: "Contact Us",
    icon: Handshake,
    imageTag1: "CREATIVE",
    imageCtaText: "Request Info",
    imageOverlayText: "Creative & Community Focus",
    primaryLink: "/services/publishing",
    secondaryLink: "/contact",
  },
  {
    id: 3,
    title: "Franchise Partnerships — Scale with Support",
    subtitle: "FRANCHISE • TRAINING • SUPPORT",
    description:
      "A proven framework to launch and grow your own territory with brand, operations and marketing support.",
    bullets: [
      "Comprehensive onboarding",
      "Ongoing training & marketing",
    ],
    imageUrl: "/hero13.png",
    ctaPrimary: "Become a Partner",
    ctaSecondary: "Contact Us",
    icon: Handshake,
    imageTag1: "FRANCHISE",
    imageCtaText: "Start Now",
    imageOverlayText: "Proven Franchise Model",
    primaryLink: "/franchise",
    secondaryLink: "/contact",
  },
];

// Animated heading (omitted for brevity)
const AnimatedHeading = ({ text }) => {
  const words = text.split(" ");
  const container = { visible: { transition: { staggerChildren: 0.015 } } };
  const letter = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 180, damping: 15 } },
  };

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="visible"
      className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight"
      style={{ color: DARK_GREY }}
    >
      {words.map((w, i) => (
        <span key={`word-${i}`} className="inline-block mr-3">
          {w.split("").map((c, j) => (
            <motion.span key={`letter-${i}-${j}`} variants={letter} className="inline-block">
              {c}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h1>
  );
};

// HeroImage (omitted for brevity)
const HeroImage = ({ slide }) => {
  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -left-12 -bottom-12 w-28 h-28 rounded-full" style={{ background: PRIMARY_BLUE + "10" }} />
      </div>
      <div className="relative z-20 rounded-3xl overflow-hidden shadow-2xl"
        style={{ boxShadow: `0 15px 45px -10px ${PRIMARY_BLUE}60` }}>
        <img
          src={slide.imageUrl}
          alt={slide.title}
          className="w-full h-[280px] sm:h-[320px] md:h-[340px] lg:h-[360px] object-cover object-center"
        />
        <div className="absolute top-2 left-2 p-2 rounded-full backdrop-blur-sm bg-black/40 text-sm font-medium flex items-center gap-2"
          style={{ color: TEXT_LIGHT }}>
          <Layers size={14} />
          {slide.imageOverlayText}
        </div>
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: `linear-gradient(180deg, ${PRIMARY_BLUE}08 0%, #00000000 40%)` }}
        />
      </div>
      <Link
        to={slide.secondaryLink}
        className="hidden md:flex absolute z-30 -right-12 -bottom-8 w-fit bg-white rounded-xl shadow-xl p-4 items-start gap-3 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
        style={{ borderLeft: `4px solid ${ACCENT_ORANGE}` }}
      >
        <div className="p-3 rounded-lg" style={{ background: ACCENT_ORANGE + "15" }}>
          <Award size={20} style={{ color: ACCENT_ORANGE }} />
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-800">{slide.imageCtaText}</p>
          <p className="text-xs text-gray-500">Learn more about our services</p>
        </div>
      </Link>
      <div className="hidden lg:block absolute -right-10 -top-10 w-24 h-24 rounded-full z-10" style={{ background: PRIMARY_BLUE + "22" }} />
    </div>
  );
};

// BackgroundTags (omitted for brevity)
const BackgroundTags = ({ slide }) => {
  return (
    <div className="hidden lg:block absolute inset-0 max-w-auto mx-auto px-6 lg:px-8 pointer-events-none z-0">
      <motion.p
        key={slide.id + "-tag1-bg"}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0.2, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="absolute top-10 right-0 text-5xl font-bold tracking-widest select-none transform rotate-3"
        style={{ color: PRIMARY_BLUE + "30" }}
      >
        {slide.imageTag1}
      </motion.p>
    </div>
  );
}

// SlideContent (omitted for brevity)
const SlideContent = ({ slide }) => {
  const Icon = slide.icon;
  return (
    <div className="w-full max-w-xl">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-md" style={{ background: PRIMARY_BLUE + "10" }}>
          <Icon size={22} style={{ color: PRIMARY_BLUE }} />
        </div>
        <p className="text-xs font-semibold tracking-widest" style={{ color: ACCENT_ORANGE }}>
          {slide.subtitle}
        </p>
      </div>
      <AnimatedHeading text={slide.title} />
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mt-4 text-gray-600 max-w-xl leading-relaxed" style={{ color: DARK_GREY }}
      >
        {slide.description}
      </motion.p>
      <ul className="mt-6 grid grid-cols-1 gap-2">
        {slide.bullets.map((b, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
            className="flex items-start gap-3"
          >
            <div className="mt-1">
              <Circle size={10} fill={PRIMARY_BLUE} style={{ color: PRIMARY_BLUE }} />
            </div>
            <span className="text-sm text-gray-700" style={{ color: DARK_GREY }}>{b}</span>
          </motion.li>
        ))}
      </ul>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="mt-6 flex items-center gap-4"
      >
        <Link
          to={slide.primaryLink}
          className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold shadow-lg transition-all duration-300 hover:scale-[1.02]"
          style={{ background: PRIMARY_BLUE, color: TEXT_LIGHT, boxShadow: `0 10px 30px -10px ${PRIMARY_BLUE}66` }}
        >
          {slide.ctaPrimary}
        </Link>
        <Link
          to={slide.secondaryLink}
          className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-gray-50"
          style={{ border: `1px solid transparent`, background: `linear-gradient(${LIGHT_BG}, ${LIGHT_BG}) padding-box, linear-gradient(90deg, ${PRIMARY_BLUE}80, ${ACCENT_ORANGE}80) border-box`, color: DARK_GREY, }}
        >
          {slide.ctaSecondary}
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="mt-8 flex items-center gap-6"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-md bg-blue-50" style={{ border: `1px solid ${PRIMARY_BLUE}22` }}>
            <FutureIcon size={18} style={{ color: PRIMARY_BLUE }} />
          </div>
          <div>
            <p className="text-sm font-bold" style={{ color: DARK_GREY }}>Future</p>
            <p className="text-xs text-gray-500">Focused</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-md bg-orange-50" style={{ border: `1px solid ${ACCENT_ORANGE}22` }}>
            <Users size={18} style={{ color: ACCENT_ORANGE }} />
          </div>
          <div>
            <p className="text-sm font-bold" style={{ color: DARK_GREY }}>Global</p>
            <p className="text-xs text-gray-500">Mindset & Reach</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};


// Main exported component
export default function AdimataHeroSliderPremium() {
  const [index, setIndex] = useState(0);
  const [isPaused, setPaused] = useState(false); // 1. Pausing state restored
  const timeoutRef = useRef(null);
  const DURATION = 7000; // Auto-slide delay: 3 seconds

  const next = useCallback(() => setIndex((i) => (i + 1) % SLIDES.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length), []);

  // Toggle function for the new button
  const togglePause = () => {
    setPaused(p => !p);
  };

  // Auto-slide useEffect - Now respects isPaused
  useEffect(() => {
    if (isPaused) return;
    timeoutRef.current = setTimeout(() => next(), DURATION);
    return () => clearTimeout(timeoutRef.current);
  }, [index, isPaused, next]);

  // keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  const goTo = (i) => setIndex(i);

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: LIGHT_BG, paddingTop: 160, paddingBottom: 20 }}
    >

      {/* BACKGROUND TAGS (omitted for brevity) */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={SLIDES[index].id + "-bg-tags"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <BackgroundTags slide={SLIDES[index]} />
        </motion.div>
      </AnimatePresence>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">

        {/* Grid: Left content (3/5) and Right image (2/5) */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 items-center">
          {/* left content */}
          <div className="ml-8 lg:col-span-3">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={SLIDES[index].id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.4 }}
              >
                <SlideContent slide={SLIDES[index]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* right image */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end mt-12 lg:mt-0">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={SLIDES[index].id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <HeroImage slide={SLIDES[index]} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* controls - centered (UPDATED WITH PAUSE/PLAY) */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <div className="flex items-center gap-3">
            {/* Previous Button */}
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="p-2 rounded-full bg-white shadow-md transition-colors hover:bg-gray-100"
            >
              <ChevronLeft size={20} />
            </button>

            {/* NEW: Pause/Play Button */}
            <button
              onClick={togglePause}
              aria-label={isPaused ? "Resume auto-slide" : "Pause auto-slide"}
              className="p-2 rounded-full shadow-lg transition-colors duration-200"
              style={{
                background: isPaused ? PRIMARY_BLUE : 'white', // Blue when paused
                color: isPaused ? TEXT_LIGHT : PRIMARY_BLUE, // White icon when paused
                boxShadow: isPaused ? `0 4px 12px ${PRIMARY_BLUE}55` : '0 4px 12px rgba(0,0,0,0.1)',
              }}
            >
              {/* Toggles between Play (when paused) and Pause (when playing) */}
              {isPaused ? <Play size={20} fill="currentColor" /> : <Pause size={20} fill="currentColor" />}
            </button>

            {/* Next Button */}
            <button
              onClick={next}
              aria-label="Next slide"
              className="p-2 rounded-full bg-white shadow-md transition-colors hover:bg-gray-100"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* small thumbnails / dots */}
          <div className="flex items-center gap-2">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-10 h-10 rounded-lg overflow-hidden border transition-all duration-300 ${index === i ? "ring-2 ring-offset-2 ring-blue-500" : "opacity-60 hover:opacity-100"}`}
                style={{ borderColor: index === i ? ACCENT_ORANGE : "transparent" }}
              >
                <img src={s.imageUrl} alt={s.title} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}