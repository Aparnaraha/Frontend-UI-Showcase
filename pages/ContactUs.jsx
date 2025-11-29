"use client";

import React, { useState, memo } from "react";
import { motion } from "framer-motion";
// Importing PageHero from the original file's path (as per the FAQ example)
import PageHero from '../ui/Hero';
import AdimataNavbar from "../layout/Navbar";
import PremiumFooter from "../layout/SiteFooter"
import ServiceSteps from '../counters/ServiceSteps'
import FixedRightSidebarFinal from "../layout/FloatingButton";
// --- ICONS for Contact (Assuming these come from lucide-react or similar) ---
// We redefine them here for completeness, though they should be imported.
const MapPin = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
const Phone = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.08 2h3a2 2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
const Mail = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
const Globe = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>;
const Send = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"></path><path d="M22 2L15 22L11 13L2 9L22 2Z"></path></svg>;
const Loader2 = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>;


// --- COLOR PALETTE CONSTANTS (Retained from FAQ for Hero consistency) ---
const COLORS = {
    darkBlue: "#1E4567", // PRIMARY (Used for Hero BG, text, etc.)
    purple: "#7B3B6B",  // ACCENT (Used for Hero shortPara)
    gold: "#C79C4B",
    textLight: "#FFFFFF",
    textDark: "#333333",
    accentLight: "#F0F8FF", // Corrected the assignment here
};

const PRIMARY_COLOR = COLORS.darkBlue;
const ACCENT_COLOR = COLORS.purple;
const WHITE_BG = '#ffffffff';
const ACCENT_LIGHT = COLORS.accentLight;

// --- FAQ Color Scheme (Used for the main content section) ---
const faqPrimaryColor = "#004B73"; // Dark Blue (Main Text, Headings)
const faqSecondaryColor = "#F36B21"; // Orange (Accent, Buttons, Icons)
const faqAccentLight = "#F0F8FF"; // Very Light Blue (Card Backgrounds)
const faqWhite = "#ffffff"; // Pure White (Form Background)


// ======================================================================
//                                           CONTACT COMPONENTS (FAQ Theme)
// ======================================================================

/**
 * Displays the key contact information. (Themed)
 */
const ContactDetails = ({ info }) => {
    const ContactItem = ({ Icon, title, content }) => (
        // Item background matches the FAQ Item Header background when open
        <div className="flex items-start space-x-4 p-4 rounded-lg shadow-lg" style={{ backgroundColor: faqWhite, border: `1px solid ${faqPrimaryColor}10` }}>
            <Icon className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: faqSecondaryColor }} />
            <div>
                <h3 className="text-lg font-semibold" style={{ color: faqPrimaryColor }}>{title}</h3>
                <p className="text-sm text-gray-600 break-words">{content}</p>
            </div>
        </div>
    );

    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6 md:space-y-8 p-6 md:p-10 rounded-xl h-full shadow-2xl"
            style={{ backgroundColor: faqAccentLight }} // Light Blue/White background for the block
        >
            <h2 className="text-3xl font-bold mb-6 border-b pb-2" style={{ color: faqPrimaryColor, borderColor: faqSecondaryColor + "80" }}>
                {info.companyName || "Aadimata Venture Contact Hub"}
            </h2>

            <ContactItem
                Icon={MapPin}
                title="Location"
                content={info.address || '123 Global Headquarters Rd, Business District, State/Region, 10001'}
            />

            <ContactItem
                Icon={Phone}
                title="Contact Numbers"
                content={(info.contactNumbers && info.contactNumbers.join(', ')) || '+1-555-1234, +1-555-5678'}
            />

            <ContactItem
                Icon={Mail}
                title="Email"
                content={info.email || 'contact@aadimata.com'}
            />

            <ContactItem
                Icon={Globe}
                title="Website"
                content={info.website || 'www.aadimata.com'}
            />
        </motion.div>
    );
};


// --- MEMOIZED INPUT FIELD COMPONENT ---
const InputField = memo(({ label, name, type = 'text', required = false, value, onChange }) => (
    <div className="mb-6">
        <label htmlFor={name} className="block text-sm font-medium mb-2" style={{ color: faqPrimaryColor }}>
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input
            type={type}
            id={name}
            name={name}
            required={required}
            value={value}
            onChange={onChange}
            className="w-full px-4 py-3 border rounded-lg text-gray-800 placeholder-gray-500 transition duration-300 focus:ring-2 focus:ring-opacity-50"
            style={{
                backgroundColor: faqWhite,
                borderColor: faqPrimaryColor + "30",
                outline: 'none',
                "--tw-ring-color": faqSecondaryColor,
            }}
        />
    </div>
));

const TextAreaField = memo(({ label, name, required = false, value, onChange }) => (
    <div className="mb-6">
        <label htmlFor={name} className="block text-sm font-medium mb-2" style={{ color: faqPrimaryColor }}>
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <textarea
            id={name}
            name={name}
            rows="4"
            required={required}
            value={value}
            onChange={onChange}
            className="w-full px-4 py-3 border rounded-lg text-gray-800 placeholder-gray-500 transition duration-300 resize-none focus:ring-2 focus:ring-opacity-50"
            style={{
                backgroundColor: faqWhite,
                borderColor: faqPrimaryColor + "30",
                outline: 'none',
                "--tw-ring-color": faqSecondaryColor,
            }}
        ></textarea>
    </div>
));


/**
 * The Contact Form component. (Themed)
 */
const ContactForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        number: '', // --- NEW FIELD ADDED ---
        message: '',
    });
    const [status, setStatus] = useState(null); // 'sending', 'sent', 'error'

    // Using a constant handler here to ensure stable reference for memoization
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        console.log('Form Data Submitted:', formState);

        // Simulate API call delay
        setTimeout(() => {
            const success = Math.random() > 0.1;

            if (success) {
                setStatus('sent');
                setFormState({ name: '', email: '', number: '', message: '' }); // Resetting new field
            } else {
                setStatus('error');
            }

            setTimeout(() => setStatus(null), 5000);
        }, 1500);
    };

    // Status Message Display
    const StatusMessage = () => {
        if (status === 'sending') {
            return (
                <div className="flex items-center justify-center p-3 text-lg font-medium rounded-lg mb-6" style={{ color: faqSecondaryColor, backgroundColor: faqAccentLight }}>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Sending message...
                </div>
            );
        }
        if (status === 'sent') {
            return (
                <div className="p-3 text-lg font-medium text-green-700 rounded-lg mb-6" style={{ backgroundColor: '#D1FAE5' }}> {/* Light green success background */}
                    Thank you! Your message has been sent successfully. We will respond soon.
                </div>
            );
        }
        if (status === 'error') {
            return (
                <div className="p-3 text-lg font-medium text-red-700 rounded-lg mb-6" style={{ backgroundColor: '#FEE2E2' }}> {/* Light red error background */}
                    Submission failed. Please try again later or contact us directly.
                </div>
            );
        }
        return null;
    };

    return (
        <motion.form
            onSubmit={handleSubmit}
            className="p-6 md:p-10 rounded-xl shadow-2xl"
            style={{ backgroundColor: faqWhite }} // Pure white background for the form
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
        >
            <h2 className="text-3xl font-bold mb-8" style={{ color: faqPrimaryColor }}>
                Send Us a Message
            </h2>

            <StatusMessage />

            <InputField label="Full Name" name="name" required value={formState.name} onChange={handleChange} />

            {/* --- NEW INPUT: Contact Number --- */}
            <InputField
                label="Contact Number"
                name="number"
                type="tel" // Use tel for better mobile keyboard experience
                required
                value={formState.number}
                onChange={handleChange}
            />

            <InputField label="Email Address" name="email" type="email" required value={formState.email} onChange={handleChange} />
            <TextAreaField label="Your Message" name="message" required value={formState.message} onChange={handleChange} />

            <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 mt-4 text-lg font-bold text-white rounded-lg transition duration-300 ease-in-out focus:outline-none focus:ring-4 shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ backgroundColor: faqSecondaryColor, focusRingColor: faqSecondaryColor + "50" }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = PRIMARY_COLOR} // Hover to dark blue
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = faqSecondaryColor} // Back to orange
            >
                {status === 'sending' ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending...</span>
                    </>
                ) : (
                    <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                    </>
                )}
            </button>
        </motion.form>
    );
};


// ======================================================================
//                                           CONTACT PAGE LAYOUT (Themed)
// ======================================================================

const CONTACT_INFO = {
    companyName: "Adimata Venture",
    address: "Plot No-13, Bapuji Nagar, Near SBI ATM, Unit-I, Bhubaneswar, Odisha, India, 751009",
    contactNumbers: ["+91 79782 41091", "+91 93488 96738"],
    email: "aadimataventure@gmail.com",
    website: "www.aadimataventure.com",
};

const ContactPage = () => {
    // Hero Props (Consistent with FaqPage)
    const contactPageProps = {
        title: "Get In Touch",
        subtitle: "We are here to help you start your next venture.",
        imageUrl: "/hero.png", // Reused placeholder
        shortPara: "Reach out to our expert teams for consultancy, marketing, publishing, and business development inquiries.",
        backgroundColor: PRIMARY_COLOR + '05',
    };

    return (
        <div className="relative min-h-screen" style={{ backgroundColor: WHITE_BG }}>

            {/* ===================================================================== */}
            {/* ## 1. Page Hero Component (Same styling as FaqPage) */}
            {/* ===================================================================== */}
            <PageHero {...contactPageProps} />

            <AdimataNavbar />
            {/* ===================================================================== */}
            {/* ## 2. Contact Content Section (Themed Light Background) */}
            {/* ===================================================================== */}
            <div className="py-12" style={{ backgroundColor: WHITE_BG }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* --- Main Content Layout (Details + Form) --- */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                        {/* 1. Contact Details (Left Column) */}
                        <ContactDetails info={CONTACT_INFO} />

                        {/* 2. Contact Form (Right Column) */}
                        <ContactForm />

                    </div>
                </div>
            </div>
            <ServiceSteps />
            <PremiumFooter />
            <FixedRightSidebarFinal />
        </div>
    );
};

export default ContactPage;