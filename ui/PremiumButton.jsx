// src/components/Contact/PremiumButton.jsx
import React from 'react';
import { motion } from 'framer-motion';
// Note: If you're not using React Router's Link in this file, remove this import.
// For this solution, we assume the host app uses React Router, and the Link import is necessary.
import { Link } from 'react-router-dom'; 

const PRIMARY_ACCENT = '#F36B21';   // Deep Blue
const SECONDARY_ACCENT = '#F36B21';   // Purple

// --- Shared Button Styling ---
const buttonStyles = {
    fontSize: '1rem',
    padding: '0.5rem 1.5rem',
    borderRadius: '0.175rem',
    fontWeight: 600,
    textAlign: 'center',
    selectNone: 'none',
    cursorPointer: 'pointer',
    inlineBlock: 'inline-block',
    transition: 'box-shadow 0.3s ease',
};

const gradientProps = {
    background: `linear-gradient(270deg, ${PRIMARY_ACCENT}, ${SECONDARY_ACCENT}, ${PRIMARY_ACCENT})`,
    backgroundSize: '300% 300%',
    initial: { backgroundPosition: '0% 50%' },
    animate: { backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] },
    transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
};

// --- Primary Button: Supports 'to' (Link) or 'type'/'onClick' (Button) ---
export const GradientButton = ({ children, to, type = 'button', onClick, className = '' }) => {
    // Determine the base element: Link if 'to' is provided, otherwise a Button
    const BaseElement = to ? Link : 'button';
    
    // Props for the BaseElement
    const baseProps = to 
        ? { to, className: `inline-block ${className}` } 
        : { type, onClick, className: `inline-block ${className}` };

    const sharedMotionProps = {
        className: "relative overflow-hidden cursor-pointer select-none inline-block",
        style: {
            ...buttonStyles,
            border: `1px solid ${SECONDARY_ACCENT}`,
            boxShadow: `0 3px 10px ${SECONDARY_ACCENT}40`,
            textShadow: '0 1px 2px rgba(0,0,0,0.25)',
            color: '#FFFFFF',
            ...gradientProps,
        },
        whileHover: {
            scale: 1.05,
            boxShadow: `0 6px 18px ${SECONDARY_ACCENT}90`,
            backgroundPosition: '100% 50%',
            transition: { duration: 0.8, ease: 'easeInOut' },
        },
        whileTap: { scale: 0.95, transition: { duration: 0.15 } },
        initial: gradientProps.initial,
        animate: gradientProps.animate,
        transition: gradientProps.transition,
    };

    return (
        <BaseElement {...baseProps}>
            <motion.div {...sharedMotionProps}>
                <span className="relative z-10 pointer-events-none">
                    {children}
                </span>
            </motion.div>
        </BaseElement>
    );
};

// --- Secondary Button: Updated to also support 'to' or 'type'/'onClick' ---
export const SecondaryGradientButton = ({ children, to, type = 'button', onClick, className = '' }) => {
    const BaseElement = to ? Link : 'button';

    const baseProps = to 
        ? { to, className: `inline-block ${className}` } 
        : { type, onClick, className: `inline-block ${className}` };

    const sharedMotionProps = {
        className: "relative overflow-hidden cursor-pointer select-none inline-block",
        style: {
            ...buttonStyles,
            border: `1px solid ${SECONDARY_ACCENT}`,
            background: 'transparent',
            position: 'relative',
        },
        whileHover: {
            scale: 1.05,
            boxShadow: `0 6px 18px ${SECONDARY_ACCENT}90`,
        },
        whileTap: { scale: 0.95, transition: { duration: 0.15 } },
    };

    const textMotionProps = {
        className: "relative z-10 pointer-events-none",
        style: {
            background: gradientProps.background,
            backgroundSize: gradientProps.backgroundSize,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block',
        },
        initial: gradientProps.initial,
        animate: gradientProps.animate,
        transition: gradientProps.transition,
    };

    return (
        <BaseElement {...baseProps}>
            <motion.div {...sharedMotionProps}>
                <motion.span {...textMotionProps}>
                    {children}
                </motion.span>
            </motion.div>
        </BaseElement>
    );
};