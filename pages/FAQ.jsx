// src/components/pages/FaqPage.jsx - FAQ PAGE LAYOUT
"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Importing Link from react-router-dom for client-side routing
import { Link } from "react-router-dom"; // Assumes you are using BrowserRouter wrapper
// Importing PageHero from the original file's path
import PageHero from '../ui/Hero';

// --- ICONS for FAQ (Using react-icons as provided in the FAQ snippet) ---
import { FaPlus, FaMinus, FaQuestionCircle, FaSearch, FaTimes, FaFilter, FaTag, FaCheckCircle } from "react-icons/fa";

// --- COLOR PALETTE CONSTANTS (Retained from GalleryPage for Hero consistency) ---
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
const WHITE_BG = '#F7F7F7';
const ACCENT_LIGHT = COLORS.accentLight; // New variable for clarity in CTA

// --- FAQ Color Scheme (From the FAQ snippet - used for FAQ content) ---
const faqPrimaryColor = "#004B73"; // Dark Blue (Different shade than PRIMARY_COLOR)
const faqSecondaryColor = "#F36B21"; // Orange
const faqAccentLight = "#F0F8FF"; // Very Light Blue/White
const faqWhite = "#ffffff";

// --- FAQ Categories and Data (From the FAQ snippet) ---
const CATEGORIES = [
    "Advertising & Marketing",
    "Consultancy",
    "Publishing & Media",
    "Business & Franchise",
    "Insurance & Utility",
    "Social & Education",
];

const FAQ_ITEMS = [
    // Advertising & Marketing (3 Items)
    {
        id: 1,
        category: "Advertising & Marketing",
        question: "How does Aadimata Venture integrate Advertising, Marketing, and Sales Promotion?",
        answer:
            "We provide a comprehensive 360-degree approach. This includes strategic advertising campaigns (digital and traditional media), targeted marketing strategies, and dynamic sales promotion planning to ensure maximum visibility and conversion for your products or services.",
    },
    {
        id: 7,
        category: "Advertising & Marketing",
        question: "What is your typical timeline for launching a comprehensive digital campaign?",
        answer:
            "A full-scale digital campaign typically requires 4-6 weeks for strategy, content creation, and setup (including media buying and creative sign-off). Execution then proceeds based on the agreed campaign flight time, usually 3 to 6 months.",
    },
    {
        id: 8,
        category: "Advertising & Marketing",
        question: "How do you measure the ROI (Return on Investment) of a sales promotion?",
        answer:
            "We use key performance indicators (KPIs) like increment in sales volume, customer acquisition cost (CAC), lifetime value (LTV), and promotional spend versus revenue generated, tracked via custom analytics dashboards.",
    },

    // Consultancy (4 Items)
    {
        id: 2,
        category: "Consultancy",
        question: "What specific Consultancy expertise does Aadimata provide?",
        answer:
            "We offer three specialized streams: Business Consultancy (strategy, operations, growth), NGO Consultancy (fundraising, compliance, project management), and Educational Consultancy (curriculum development, institutional structuring, admission guidance).",
    },
    {
        id: 9,
        category: "Consultancy",
        question: "What is the process for NGO compliance and strategic planning?",
        answer:
            "Our NGO process begins with a compliance audit against regulatory bodies (like FCRA, IT, etc.). We then move into donor strategy, program design, impact measurement framework development, and annual operational planning.",
    },
    {
        id: 10,
        category: "Consultancy",
        question: "Do you offer retainer services for ongoing business strategy support?",
        answer:
            "Yes, we offer flexible monthly and quarterly retainer agreements for clients needing continuous strategic guidance, fractional executive support, and real-time advisory on market pivots and operational efficiency.",
    },
    {
        id: 11,
        category: "Consultancy",
        question: "Can you help secure funding and grants for new ventures?",
        answer:
            "We assist in developing compelling pitch decks, detailed financial models, and feasibility reports necessary for securing equity investment, venture capital, and relevant government or private sector grants.",
    },

    // Publishing & Media (3 Items)
    {
        id: 3,
        category: "Publishing & Media",
        question: "What types of Publishing and Mass Media services are offered?",
        answer:
            "Our publishing services range from content creation and editing to media placement. For Mass Media, we manage PR, media buying, and production of high-quality Audio-Visual content for effective communication across various channels.",
    },
    {
        id: 12,
        category: "Publishing & Media",
        question: "Can Aadimata handle end-to-end book publishing for authors?",
        answer:
            "Absolutely. We provide services covering editing, design (cover and layout), ISBN registration, printing/eBook conversion, distribution logistics, and targeted book launch marketing.",
    },
    {
        id: 13,
        category: "Publishing & Media",
        question: "What are the primary distribution channels you utilize for AV content?",
        answer:
            "We utilize a mix of digital platforms (YouTube, OTT), traditional broadcast media (TV, Radio), targeted cinema advertising, and internal corporate communication channels, tailored to the project's audience.",
    },

    // Business & Franchise (2 Items)
    {
        id: 4,
        category: "Business & Franchise",
        question: "Can you assist with setting up a Franchisee model for my business?",
        answer:
            "Yes, we offer end-to-end franchisee consultation. This includes developing the franchisee agreement, operational manuals, territory planning, and providing ongoing support for successful expansion and brand standardization.",
    },
    {
        id: 14,
        category: "Business & Franchise",
        question: "What are the key legal steps in establishing a new corporate entity?",
        answer:
            "We provide guidance on selection of business structure (Pvt. Ltd., LLP, etc.), MOA/AOA drafting, regulatory registrations (GST, ROC), and essential intellectual property (IP) protection, connecting you with trusted legal partners.",
    },

    // Insurance & Utility (2 Items)
    {
        id: 5,
        category: "Insurance & Utility",
        question: "Do your services include Insurance planning and Public Utility assistance?",
        answer:
            "While we are primarily a service and consultancy provider, we guide clients through necessary insurance requirements (general business liability, project-specific coverage) related to their campaigns and business operations. We also consult on regulatory requirements pertaining to Public Utility Services.",
    },
    {
        id: 15,
        category: "Insurance & Utility",
        question: "What kind of project-specific insurance guidance do you offer?",
        answer:
            "We offer advisory on risk mitigation and required insurance for major projects, such as media production indemnity, event liability, or specialized construction project insurance, ensuring compliance and protection.",
    },

    // Social & Education (2 Items)
    {
        id: 6,
        category: "Social & Education",
        question: "What is your involvement in Social Welfare Activities and Education?",
        answer:
            "We actively engage in and consult on Social Welfare projects, often supporting NGOs and corporate CSR initiatives. In Education, we provide strategic consultancy and content development to institutions and businesses in the educational sector.",
    },
    {
        id: 16,
        category: "Social & Education",
        question: "How does Aadimata help corporations manage their CSR projects?",
        answer:
            "We assist corporations by identifying high-impact focus areas, designing and implementing CSR programs, vetting and partnering with reliable NGOs, and producing mandatory impact reports and regulatory filings.",
    },
];

// --- Single FAQ Item Component (Accordion) ---
const FaqItem = React.memo(({ item, isInitiallyOpen }) => {
    const [isOpen, setIsOpen] = useState(isInitiallyOpen || false);

    // Variant for the Answer body animation
    const answerVariants = {
        open: { opacity: 1, height: "auto", transition: { duration: 0.4 } },
        collapsed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    };

    // Variants for Item entry/exit/layout
    const itemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
        exit: { opacity: 0, height: 0, marginBottom: 0, transition: { duration: 0.3 } },
    };

    return (
        <motion.div
            layout // Key for smooth re-ordering when items are filtered
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="mb-4 rounded-xl overflow-hidden border-b"
            style={{ borderColor: faqPrimaryColor + "15", backgroundColor: faqWhite }}
        >
            {/* Question Header */}
            <motion.header
                className="flex justify-between items-center p-5 cursor-pointer transition-colors duration-200"
                style={{ backgroundColor: isOpen ? faqAccentLight : faqWhite }}
                onClick={() => setIsOpen(!isOpen)}
                animate={{
                    boxShadow: isOpen
                        ? `0 5px 15px -5px ${faqPrimaryColor}25`
                        : "0 1px 3px 0 rgba(0,0,0,0.05)",
                }}
                transition={{ duration: 0.3 }}
            >
                <div className="flex items-center">
                    <FaQuestionCircle className="mr-3 text-lg shrink-0" style={{ color: faqSecondaryColor }} />
                    <h4 className="text-base font-semibold text-left" style={{ color: faqPrimaryColor }}>
                        {item.question}
                    </h4>
                </div>
                <motion.span
                    className="text-lg shrink-0 ml-4"
                    style={{ color: faqSecondaryColor }}
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {isOpen ? <FaMinus /> : <FaPlus />}
                </motion.span>
            </motion.header>

            {/* Answer Content */}
            <AnimatePresence>
                {isOpen && (
                    <motion.section
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={answerVariants}
                        className="px-5 pb-5 pt-0"
                    >
                        <p className="text-gray-600 text-sm leading-relaxed border-l-4 pl-4 pt-2" style={{ borderColor: faqSecondaryColor + "80" }}>
                            {item.answer}
                        </p>
                        <div className="text-right mt-2">
                            <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: faqPrimaryColor + "10", color: faqPrimaryColor }}>
                                Category: {item.category}
                            </span>
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>
        </motion.div>
    );
});
FaqItem.displayName = "FaqItem";


// --- Category Sidebar Component ---
const CategorySidebar = React.memo(({ activeCategory, setActiveCategory, searchTerm, setSearchTerm, handleClearSearch }) => (
    <motion.div
        className="w-full lg:w-72 shrink-0 mb-8 lg:mb-0 p-6 rounded-2xl shadow-xl lg:sticky lg:top-8"
        style={{ backgroundColor: faqWhite }}
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
    >

        {/* Search Input Area */}
        <h3 className="text-lg font-bold mb-4 flex items-center" style={{ color: faqPrimaryColor }}>
            <FaSearch className="mr-2" style={{ color: faqSecondaryColor }} /> Quick Search
        </h3>
        <div className="relative mb-8">
            <input
                type="text"
                placeholder="Search keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-3 pr-8 py-2 border rounded-lg focus:ring-2 focus:outline-none text-gray-700 transition-all duration-300"
                style={{
                    borderColor: faqPrimaryColor + "30",
                    "--tw-ring-color": faqSecondaryColor + "50",
                }}
            />
            <AnimatePresence>
                {searchTerm && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        onClick={handleClearSearch}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-500 transition-colors"
                        aria-label="Clear Search"
                    >
                        <FaTimes className="text-sm" />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>


        {/* Category Filters Area */}
        <h3 className="text-lg font-bold mb-4 flex items-center" style={{ color: faqPrimaryColor }}>
            <FaFilter className="mr-2" style={{ color: faqSecondaryColor }} /> Filter by Topic
        </h3>
        <nav>
            {CATEGORIES.map((category) => (
                <motion.button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`w-full text-left flex items-center justify-between px-3 py-2 my-1 rounded-lg transition-all duration-300 font-medium text-sm`}
                    style={{
                        backgroundColor: activeCategory === category ? faqAccentLight : faqWhite,
                        color: activeCategory === category ? faqPrimaryColor : 'gray',
                        borderLeft: activeCategory === category ? `4px solid ${faqSecondaryColor}` : '4px solid transparent',
                    }}
                    whileHover={{ backgroundColor: faqAccentLight, x: activeCategory !== category ? 3 : 0 }}
                >
                    <span className="flex items-center">
                        <FaTag className="mr-2 text-sm" style={{ color: activeCategory === category ? faqSecondaryColor : faqPrimaryColor + "50" }} />
                        {category}
                    </span>
                    {activeCategory === category && (
                        <FaCheckCircle className="text-sm" style={{ color: faqSecondaryColor }} />
                    )}
                </motion.button>
            ))}
        </nav>

    </motion.div>
));
CategorySidebar.displayName = "CategorySidebar";

// --- Main Component ---
const FaqPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    // Set initial category to the first one in the list
    const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);

    // Memoized filtered FAQ Items Calculation
    const filteredFaqs = useMemo(() => {
        const lowerCaseSearch = searchTerm.toLowerCase();

        return FAQ_ITEMS.filter((item) => {
            // 1. Category Filter
            const categoryMatch = item.category === activeCategory;

            // 2. Search Term Filter (checks question OR answer)
            const searchMatch =
                item.question.toLowerCase().includes(lowerCaseSearch) ||
                item.answer.toLowerCase().includes(lowerCaseSearch);

            return categoryMatch && searchMatch;
        });
    }, [searchTerm, activeCategory]);

    const handleClearSearch = () => {
        setSearchTerm("");
    };

    // Hero Props (Adjusted for an FAQ context but using original color scheme)
    const faqPageProps = {
        title: "Questions & Answers",
        subtitle: "Your comprehensive guide to Aadimata Venture's services.",
        imageUrl: "/hero.png", // Retained from the original GalleryPage
        shortPara: "Find quick, detailed answers on our Consultancy, Marketing, Publishing, and other business segments.",
        backgroundColor: PRIMARY_COLOR + '05',
    };

    return (
        <div className="relative min-h-screen" style={{ backgroundColor: WHITE_BG }}>

            {/* ===================================================================== */}
            {/* ## 1. Page Hero Component (Reused from GalleryPage structure) */}
            {/* ===================================================================== */}
            <PageHero {...faqPageProps} />

            {/* ===================================================================== */}
            {/* ## 2. FAQ Content Section (Replacing Gallery/Commitment Sections) */}
            {/* ===================================================================== */}
            <div className="py-12" style={{ backgroundColor: WHITE_BG }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* --- Main Content Layout (Sidebar + Results) --- */}
                    <div className="flex flex-col lg:flex-row gap-8">

                        {/* 1. Sidebar Filters (Category & Search) */}
                        <CategorySidebar
                            activeCategory={activeCategory}
                            setActiveCategory={setActiveCategory}
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                            handleClearSearch={handleClearSearch}
                        />

                        {/* 2. FAQ Results Area */}
                        <div className="flex-grow">

                            {/* Information Header */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="mb-6 p-4 rounded-xl shadow-md"
                                style={{ backgroundColor: faqWhite }}
                            >
                                <p className="text-sm font-semibold" style={{ color: faqPrimaryColor }}>
                                    {filteredFaqs.length} Questions Displayed
                                    <span className="ml-2 px-2 py-0.5 rounded-full text-xs font-normal" style={{ backgroundColor: faqSecondaryColor + "10", color: faqSecondaryColor }}>
                                        Topic: {activeCategory}
                                    </span>
                                </p>
                            </motion.div>


                            {/* FAQ Accordions */}
                            <motion.div layout className="space-y-4">
                                <AnimatePresence mode="popLayout">
                                    {filteredFaqs.length > 0 ? (
                                        filteredFaqs.map((item) => (
                                            <FaqItem key={item.id} item={item} />
                                        ))
                                    ) : (
                                        <motion.div
                                            key="no-results"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            className="text-center p-12 rounded-xl"
                                            style={{ backgroundColor: faqAccentLight }}
                                        >
                                            <FaTimes className="w-10 h-10 mx-auto mb-4" style={{ color: faqSecondaryColor }} />
                                            <p className="text-xl font-bold" style={{ color: faqPrimaryColor }}>
                                                No FAQs found.
                                            </p>
                                            <p className="text-gray-600 mt-2">
                                                Try adjusting the category or clearing the search term.
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                            {/* CTA/Assistance Block - Background swapped to accentLight */}
                            <div className="mt-10 p-6 rounded-xl text-center shadow-lg" style={{ backgroundColor: ACCENT_LIGHT }}>
                                <p className="text-lg font-bold mb-3" style={{ color: faqPrimaryColor }}>
                                    Still have questions?
                                </p>
                                <p className="text-gray-700 mb-4">
                                    If you cannot find the answer here, our experts are ready to provide a detailed consultation specific to your needs.
                                </p>
                                {/* REPLACED Link with react-router-dom <Link> component */}
                                <Link
                                    to="tel:+917978241091" // Target route: /contact
                                    className="text-white font-medium px-8 py-3 rounded-full shadow-md transition-all duration-300 text-base inline-block"
                                    style={{ backgroundColor: faqSecondaryColor }}
                                >
                                    <motion.span // Wrap the content in motion.span or use motion.custom(Link)
                                        whileHover={{ scale: 1.05, backgroundColor: faqPrimaryColor }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Contact Our Team
                                    </motion.span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqPage;