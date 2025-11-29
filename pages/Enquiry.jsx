"use client";

import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import PageHero from '../ui/Hero';
import { GradientButton } from '../ui/PremiumButton';
import AdimataNavbar from '../layout/Navbar';
import Footer from '../layout/SiteFooter';

// --- Adimata Venture Color Theme ---
const PRIMARY_ACCENT = '#004B73';    // Dark Blue (Primary Accent)
const SECONDARY_ACCENT = '#F36B21'; // Orange (Secondary Accent/Button color)
const BG_COLOR = '#F7F7F7';         // Light Grey Background

// --- Stable Focus Class (Using PRIMARY_ACCENT) ---
const ACCENT_FOCUS_CLASS = `focus:ring-1 focus:ring-[${PRIMARY_ACCENT}]/50 focus:border-[${PRIMARY_ACCENT}]`;

// --- Hero Section ---
const enquiryPageProps = {
    title: "Partner with Us",
    subtitle: "Start Your Journey with Adimata Venture",
    imageUrl: "/hero.png", // Assuming a relevant contact image
    shortPara: "Tell us about your requirements, and our team will reach out with a detailed plan via email or WhatsApp.",
};

// --- Step Card Component (Updated Steps for Simple Form) ---
const StepCard = ({ step, index }) => {
    const itemVariants = {
        hidden: { opacity: 0, x: 30, scale: 0.98 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 70, damping: 10, delay: 0.2 + (index * 0.15) }
        },
    };

    return (
        <motion.div
            className="bg-white p-5 rounded-sm border border-gray-200 cursor-pointer"
            style={{ borderLeft: `3px solid ${SECONDARY_ACCENT}`, boxShadow: `0 5px 15px -5px ${PRIMARY_ACCENT}20` }}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -2 }}
        >
            <span className="text-2xl font-extrabold font-sans" style={{ color: SECONDARY_ACCENT }}>
                {step.num}
            </span>
            <h4 className="text-lg font-sans font-bold mt-1 mb-1 leading-snug" style={{ color: PRIMARY_ACCENT }}>
                {step.title}
            </h4>
            <p className="text-gray-500 text-sm leading-snug">{step.desc}</p>
        </motion.div>
    );
};

// --- InputField Component ---
const InputField = React.memo(({ label, name, type = "text", required = false, value, onChange }) => (
    <div className="flex flex-col">
        <label htmlFor={name} className="text-sm font-medium text-gray-700 mb-2">
            {label} {required && <span style={{ color: SECONDARY_ACCENT }}>*</span>}
        </label>
        <input
            type={type}
            name={name}
            id={name}
            required={required}
            value={value}
            onChange={onChange}
            className={`px-4 py-3 border border-gray-200 bg-white rounded-sm ${ACCENT_FOCUS_CLASS} transition-all shadow-sm text-gray-800`}
            placeholder={`Enter ${label.toLowerCase()}`}
        />
    </div>
));
InputField.displayName = 'InputField';

// --- Enquiry Page Component ---
const EnquiryPage = () => {
    const { ref: sectionRef } = useInView({ once: true, threshold: 0.1 });

    // Initial state simplified: ADDED subjectLine
    const INITIAL_FORM_STATE = {
        fullName: '',
        phone: '',
        email: '',
        subjectLine: '', // <--- NEW FIELD ADDED HERE: Subject Line
        message: '',
    };

    const [formData, setFormData] = useState(INITIAL_FORM_STATE);

    const handleChange = useCallback((e) => {
        setFormData(prevData => ({ ...prevData, [e.target.name]: e.target.value }));
    }, []);

    // Function updated to include subjectLine
    const formatDataForWhatsApp = (data) => {
        const nl = '%0A';
        const tab = '%20%20%20';
        let message = `*ADIMATA VENTURE ENQUIRY*${nl}${nl}`;
        
        // NEW SUBJECT LINE ADDED TO THE TOP OF THE MESSAGE
        message += `*Subject:* ${data.subjectLine || 'No Subject Provided'}${nl}`;
        message += `---------------------------${nl}${nl}`;


        message += `*Contact Details*${nl}`;
        message += `${tab}Name: ${data.fullName}${nl}`;
        message += `${tab}Phone: ${data.phone}${nl}`;
        message += `${tab}Email: ${data.email}${nl}${nl}`;
        
        message += `*Message/Requirements*${nl}${tab}${data.message}${nl}${nl}`;
        message += `_Sent via Adimata Venture Enquiry Form_`;
        return message;
    };

    // Submits the form data to WhatsApp
    const handleSubmit = (e) => {
        e.preventDefault();
        // UPDATED WhatsApp Number for Adimata Venture (using 7978241091)
        const rawPhoneNumber = '7978241091';
        const whatsappMessage = formatDataForWhatsApp(formData);
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappUrl = `https://wa.me/91${rawPhoneNumber}?text=${encodedMessage}`;
        
        // NOTE: Cannot use alert() in the Canvas environment. Using console log for now.
        console.log('Form submitted. Preparing WhatsApp message.');

        window.open(whatsappUrl, '_blank');
        
        // Reset form after submission attempt
        setFormData(INITIAL_FORM_STATE);
    };


    return (
        <div className={`min-h-screen`} style={{ backgroundColor: BG_COLOR }}>
            <AdimataNavbar />
            {/* HERO */}
            <PageHero {...enquiryPageProps} />

            {/* Main Content */}
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div ref={sectionRef} className="grid lg:grid-cols-4 bg-white rounded-sm border-t-2 shadow-2xl overflow-hidden" style={{ borderColor: SECONDARY_ACCENT }}>

                    {/* Left Column - Simplified Steps */}
                    <motion.div
                        className="lg:col-span-1 p-8 md:p-10 border-r border-gray-100 bg-gray-50/50"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                    >
                        <h3 className="text-xl font-sans font-bold mb-6 pb-2" style={{ color: PRIMARY_ACCENT, borderBottom: `2px solid ${SECONDARY_ACCENT}30` }}>
                            Enquiry Process
                        </h3>
                        <div className="space-y-6">
                            {[
                                { id: 1, num: '01', title: 'Share Contact Details', desc: 'Provide your name, phone, and email for our records.' },
                                { id: 2, num: '02', title: 'Outline Requirements', desc: 'Briefly describe your project or requirement in the message box.' },
                                { id: 3, num: '03', title: 'Confirm via WhatsApp', desc: 'Submit the form, and our expert will contact you shortly to follow up.' },
                            ].map((step, index) => <StepCard key={step.id} step={step} index={index} />)}
                        </div>
                    </motion.div>

                    {/* Right Column - Simplified Form */}
                    <div className="lg:col-span-3 p-8 md:p-14">
                        <h3 className="text-3xl font-sans font-bold mb-4" style={{ color: PRIMARY_ACCENT }}>Project Enquiry Form</h3>
                        <p className="text-gray-600 mb-6 border-b pb-4 border-gray-100">
                            Please provide your essential contact details and project outline below. We will reach out shortly.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Personal Info - Grid layout for responsiveness */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <InputField label="Full Name" name="fullName" required value={formData.fullName} onChange={handleChange} />
                                <InputField label="Phone Number" name="phone" type="tel" required value={formData.phone} onChange={handleChange} />
                                
                                {/* Existing Email Field */}
                                <InputField label="Email Address" name="email" type="email" required value={formData.email} onChange={handleChange} />
                                
                                {/* NEW FIELD ADDED HERE: Subject Line */}
                                <InputField label="Subject/Service Required" name="subjectLine" required value={formData.subjectLine} onChange={handleChange} />
                                
                            </div>

                            {/* Message / Requirements */}
                            <div className="pt-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2 block">Your Message / Requirements</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`px-4 py-3 border border-gray-200 bg-white rounded-sm ${ACCENT_FOCUS_CLASS} transition-all shadow-sm text-gray-800 w-full`}
                                    placeholder="Describe your project or requirement in detail..."
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4">
                                <GradientButton
                                    type="submit"
                                    style={{ background: `linear-gradient(90deg, ${SECONDARY_ACCENT} 0%, ${PRIMARY_ACCENT} 100%)` }}
                                >
                                    Submit Enquiry via WhatsApp
                                </GradientButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default EnquiryPage;