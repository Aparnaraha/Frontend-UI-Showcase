import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, ArrowRight, Send } from 'lucide-react';

// --- COLOR PALETTE CONSTANTS (Retained) ---
const PRIMARY_BLUE = "#fff";
const ACCENT_ORANGE = "#F36B21";
const TEXT_COLOR = "#1A1A1A";
const WHITE_BG = "#FFFFFF";
const FOOTER_BG = TEXT_COLOR;
const FOOTER_TEXT = WHITE_BG;
const FOOTER_SUB_TEXT = "rgba(255, 255, 255, 0.7)";

// --- DATA STRUCTURES (Retained) ---
const generalServices = [
    { name: "Advertising", path: "/services/advertising" },
    { name: "Marketing", path: "/services/marketing" },
    { name: "Publishing", path: "/services/publishing" },
    { name: "Education", path: "/services/education" },
    { name: "Consultancy", path: "/services/consultancy" },
];

const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Franchisee Program", path: "/franchisee" },
    { name: "FAQ", path: "/faq" },
    { name: "NGO Consultancy", path: "/consultancy/ngo" },
    { name: "Disclaimer", path: "/disclaimer" },
];

// --- HELPER COMPONENTS ---

// 1. Footer Link Item Component
const FooterLinkItem = ({ name, path }) => (
    <Link
        to={path}
        className="flex items-center text-sm transition-all duration-200 group w-fit"
        style={{ color: FOOTER_SUB_TEXT }}
        onMouseEnter={(e) => e.currentTarget.style.color = ACCENT_ORANGE}
        onMouseLeave={(e) => e.currentTarget.style.color = FOOTER_SUB_TEXT}
    >
        <ArrowRight
            size={16}
            className="mr-2 transition-transform duration-200 group-hover:translate-x-1"
            style={{ color: ACCENT_ORANGE }}
        />
        {name}
    </Link>
);
FooterLinkItem.displayName = "FooterLinkItem";

// 2. WhatsApp Enquiry Form Component
const WhatsAppEnquiryForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    // UPDATED WHATSAPP NUMBER
    const WHATSAPP_NUMBER = "917978241091";

    const handleSubmit = (e) => {
        e.preventDefault();

        const message =
            `Hello Adimata Team,%0AI saw the 'Stay Updated' form on your website and would like to learn more about your services.%0A%0A` +
            `*Name:* ${name}%0A` +
            `*Email:* ${email}%0A` +
            `*My Query:* [Type your quick query here]`;

        const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

        window.open(whatsappLink, '_blank');
        setName('');
        setEmail('');
    };

    return (
        <div className="lg:mt-0">
            <h4 className="text-xl font-bold mb-3" style={{ color: PRIMARY_BLUE }}>
                Stay Updated
            </h4>

            <p className="text-sm mb-4" style={{ color: FOOTER_SUB_TEXT }}>
                Enter your details to receive key updates or send a quick service enquiry via WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
                <input
                    type="text"
                    placeholder="Your Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="p-2.5 text-sm w-full outline-none"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: FOOTER_TEXT, border: `1px solid ${ACCENT_ORANGE}` }}
                />
                <input
                    type="email"
                    placeholder="Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="p-2.5 text-sm w-full outline-none"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: FOOTER_TEXT, border: `1px solid ${ACCENT_ORANGE}` }}
                />
                <button
                    type="submit"
                    className="flex items-center justify-center w-full p-2.5 font-semibold rounded-sm transition-colors duration-200 active:scale-95"
                    style={{ backgroundColor: "white", color: FOOTER_BG }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = ACCENT_ORANGE}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "white"}
                >
                    <Send size={18} className="mr-2" />
                    Get Information
                </button>
            </form>
        </div>
    );
};
WhatsAppEnquiryForm.displayName = "WhatsAppEnquiryForm";


// -------------------------------------------------------------------
// 3. Premium Footer Component (The Main Component)
// -------------------------------------------------------------------
const PremiumFooter = () => {
    return (
        <footer style={{ backgroundColor: FOOTER_BG }} className="">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-4">

                {/* --- 4-Column Grid Layout --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-10">

                    {/* 1. Company Info / Contact */}
                    <div>
                        <Link to="/" className="flex items-center mb-4">
                            <img
                                // UPDATED LOGO PATH
                                src="/logo.png"
                                alt="Adimata Ventures Logo"
                                className="h-full w-32"
                            />
                        </Link>
                        <p className="text-sm mb-6" style={{ color: FOOTER_SUB_TEXT }}>
                            Your partner in Advertising, Marketing, and Global Consultancy. Driving innovation and growth worldwide.
                        </p>

                        <div className="space-y-3">
                            <div className="flex items-start">
                                <MapPin size={18} className="mt-0.5 flex-shrink-0" style={{ color: ACCENT_ORANGE }} />
                                {/* UPDATED ADDRESS */}
                                <span className="ml-3 text-sm" style={{ color: FOOTER_SUB_TEXT }}>At: Raghunath pada, Near Shibaprasad School, P.o: Titilagarh, Dist: Balangir (Odisha)</span>
                            </div>
                            <div className="flex items-center">
                                <Mail size={18} className="flex-shrink-0" style={{ color: ACCENT_ORANGE }} />
                                {/* UPDATED EMAIL */}
                                <a href="mailto:inquiry@adimataventures.com" className="ml-3 text-sm transition-colors duration-200 hover:text-white" style={{ color: FOOTER_SUB_TEXT }}>inquiry@adimataventures.com</a>
                            </div>
                            <div className="flex items-center">
                                <Phone size={18} className="flex-shrink-0" style={{ color: ACCENT_ORANGE }} />
                                {/* UPDATED PHONE NUMBERS */}
                                <a href="tel:+917978241091" className="ml-3 text-sm transition-colors duration-200 hover:text-white" style={{ color: FOOTER_SUB_TEXT }}>+91 79782 41091, +91 91243 55350</a>
                            </div>
                            <div className="flex items-center">
                                <Clock size={18} className="flex-shrink-0" style={{ color: ACCENT_ORANGE }} />
                                <span className="ml-3 text-sm" style={{ color: FOOTER_SUB_TEXT }}>Mon - Fri: 9:00 AM - 6:00 PM IST</span>
                            </div>
                        </div>
                    </div>

                    {/* 2. Our Services */}
                    <div>
                        <h4 className="text-xl font-bold mb-5" style={{ color: PRIMARY_BLUE }}>
                            Our Services
                        </h4>
                        <ul className="space-y-3">
                            {generalServices.map((link) => (
                                <li key={link.name}>
                                    <FooterLinkItem name={link.name} path={link.path} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3. Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold mb-5" style={{ color: PRIMARY_BLUE }}>
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <FooterLinkItem name={link.name} path={link.path} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 4. Stay Connected / Enquiry Form */}
                    <WhatsAppEnquiryForm />

                </div>

                {/* --- Copyright Bar (Minimal Padding) --- */}
                {/* Changed pt-4 to pt-3 and removed mt-4 */}
                <div className="pt-3 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
                    <div className="text-center text-sm" style={{ color: FOOTER_SUB_TEXT }}>
                        &copy; {new Date().getFullYear()} <b>Adimata Ventures</b>. All rights reserved. | <b>Developed by NexPro Solution</b>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default PremiumFooter;