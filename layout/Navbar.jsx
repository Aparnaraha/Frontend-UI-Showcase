import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, BookOpen, MessageCircle, Phone, Mail, MapPin, Clock, BriefcaseBusiness, Globe, GraduationCap, Code, Server, Zap, TrendingUp, Handshake, Heart, Briefcase } from 'lucide-react';
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion';

// --- COLOR PALETTE CONSTANTS ---
const PRIMARY_BLUE = "#004B73"; 
const ACCENT_ORANGE = "#F36B21"; 
const TEXT_COLOR = "#1A1A1A"; 
const WHITE_BG = "#FFFFFF";
const NAV_BAR_BG = "#FFFFFF ";
const TOP_BAR_BG = "#004B73"; 
const TOP_BAR_TEXT = "#fff8f8ff";
const HOVER_SWIPE_COLOR = "rgba(0, 204, 255, 0.1)"; 
const PRIMARY_NAV_HEIGHT = 80; // Height of the main nav bar
const TOP_BAR_HEIGHT = 40; // Height of the top bar

// --- ADIMATA VENTURES CONTACT INFO (NEW) ---
const ADDRESS = "Raghunath pada, Titilagarh, Balangir (Odisha), India"; 
const CONTACT_1 = "7978241091";
const CONTACT_2 = "9124355350";
const EMAIL = "inquiry@adimataventures.com";
const WEBSITE = "www.adimataventures.com";


// --- SUB-SERVICE DATA STRUCTURES (Retained) ---
const generalServices = [
    { name: "Advertising", path: "/services/advertising", icon: TrendingUp }, 
    { name: "Marketing", path: "/services/marketing", icon: Zap }, 
    { name: "Publishing", path: "/services/publishing", icon: BookOpen }, 
    { name: "Mass Media", path: "/services/mass-media", icon: Globe }, 
    { name: "Education", path: "/services/education", icon: GraduationCap }, 
    { name: "Consultancy", path: "/services/consultancy", icon: Handshake }, 
    { name: "Insurance", path: "/services/insurance", icon: Briefcase }, 
    { name: "Audio - Visuals", path: "/services/audio-visuals", icon: Code }, 
    { name: "Public Utility Services", path: "/services/utility", icon: Server }, 
    { name: "Social Welfare Activities", path: "/services/welfare", icon: Heart }, 
];

const consultancyLinks = [
    { name: "Business Consultancy", path: "/consultancy/business", icon: BriefcaseBusiness },
    { name: "NGO Consultancy", path: "/consultancy/ngo", icon: Globe },
    { name: "Educational Consultancy", path: "/consultancy/education", icon: GraduationCap },
];

const franchiseeLinks = [
    { name: "Works of a Franchise", path: "/franchisee/works", icon: Briefcase },
    { name: "Eligibility of Franchise", path: "/franchisee/eligibility", icon: Briefcase },
    { name: "How to become a franchise", path: "/franchisee/how-to-become", icon: Briefcase },
    { name: "Payment for Franchise", path: "/franchisee/payment", icon: Briefcase },
];

// --- NAV DATA STRUCTURE (Retained) ---
const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about", icon: BookOpen },
    {
        name: "Services",
        path: "#",
        dropdown: generalServices,
        isMega: true
    },
    {
        name: "Consultancy",
        path: "#",
        dropdown: consultancyLinks,
    },
    {
        name: "Franchise",
        path: "/franchise",
        dropdown: franchiseeLinks
    },
    { name: "Contact", path: "/contact", icon: Phone },
    { name: "FAQ", path: "/faq", icon: MessageCircle },
];

// -------------------------------------------------------------------
// 1. Logo Component (Updated with new website context)
// -------------------------------------------------------------------
const AdimataLogo = () => (
    // Applied transition directly to the Link element for a subtle effect, 
    // but REMOVED transform/scale to prevent image blur/flicker.
    <Link 
        to="/" 
        className="flex items-center space-x-2 p-2 transition duration-300 active:opacity-80" // Reduced active effect to opacity
        style={{ transitionProperty: 'opacity' }} // Explicitly limit transition property
    >
        <img
            src="/logo.png" 
            alt="Adimata Ventures Logo"
            className="h-full w-32" 
            // Removed all scale/transform classes from the image itself
        />
    </Link>
);
AdimataLogo.displayName = "AdimataLogo";

// -------------------------------------------------------------------
// 2. Top Bar Component (UPDATED with new contact and location info)
// -------------------------------------------------------------------
const TopBar = () => (
    <div 
        className="w-full hidden sm:block border-b relative" 
        style={{ 
            backgroundColor: TOP_BAR_BG, 
            borderColor: 'rgba(255, 255, 255, 0.2)',
            height: `${TOP_BAR_HEIGHT}px`, 
            overflow: 'hidden' 
        }}
    >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between text-xs" style={{ color: TOP_BAR_TEXT }}>
            <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-1 font-medium" title={ADDRESS}>
                    <MapPin size={12} style={{ color: ACCENT_ORANGE }} />
                    {/* Showing a simplified location in the top bar due to space constraints */}
                    <span>Titilagarh, Odisha | {WEBSITE}</span> 
                </div>
                <div className="flex items-center space-x-1 font-medium">
                    <Clock size={12} style={{ color: ACCENT_ORANGE }} />
                    <span>Mon - Fri: 9:00 AM - 6:00 PM IST</span>
                </div>
            </div>
            <div className="flex items-center space-x-6">
                {/* Updated Contact Numbers */}
                <a href={`tel:+91${CONTACT_1}`} className="flex items-center space-x-1 hover:text-gray-200 transition-colors duration-200">
                    <Phone size={12} style={{ color: ACCENT_ORANGE }} />
                    <span className='font-medium'>+91 {CONTACT_1}</span>
                </a>
                
                {/* Updated Email */}
                <a href={`mailto:${EMAIL}`} className="flex items-center space-x-1 hover:text-gray-200 transition-colors duration-200">
                    <Mail size={12} style={{ color: ACCENT_ORANGE }} />
                    <span className='font-medium'>{EMAIL}</span>
                </a>
            </div>
        </div>
    </div>
);
TopBar.displayName = "TopBar";

// -------------------------------------------------------------------
// 3. Dropdown Menu Component (Retained)
// -------------------------------------------------------------------
const DropdownMenu = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    const dropdownVariants = {
        hidden: { opacity: 0, y: -10, scale: 0.98 },
        visible: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: -10, scale: 0.98 }
    };

    const minWidth = item.isMega ? '380px' : '250px'; 
    const gridCols = item.isMega ? 'grid-cols-2' : 'grid-cols-1';

    return (
        <div
            // IMPORTANT: z-index must be high enough to overlap content below the header
            className="relative h-full z-50" 
            onMouseEnter={() => window.innerWidth >= 1024 && setIsOpen(true)}
            onMouseLeave={() => window.innerWidth >= 1024 && setIsOpen(false)}
        >
            {/* Dropdown Trigger (Main Nav Link) */}
            <Link
                to={item.path}
                className="flex items-center py-2 px-4 text-base font-bold tracking-wide h-full transition-all duration-300 group"
                style={{ color: TEXT_COLOR, borderBottom: `2px solid transparent` }}
                onMouseEnter={(e) => e.currentTarget.style.borderBottom = `2px solid ${ACCENT_ORANGE}`}
                onMouseLeave={(e) => e.currentTarget.style.borderBottom = `2px solid transparent`}
            >
                {item.name}
                <ChevronDown
                    size={16} 
                    className={`ml-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                    style={{ color: ACCENT_ORANGE }} 
                />
            </Link>

            {/* Dropdown Content */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        // Ensure this is higher than anything else (already z-50, but worth checking)
                        className={`absolute left-1/2 -translate-x-1/2 shadow-2xl rounded-sm border border-gray-100 z-[90] overflow-hidden p-3`} 
                        style={{
                            backgroundColor: NAV_BAR_BG,
                            minWidth: minWidth,
                            top: '100%', 
                            transform: 'translateX(-50%)', 
                        }}
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.25, ease: "easeOut" }} 
                    >
                        <div className={`grid ${gridCols} gap-2`}> 
                            {item.dropdown.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.03 + 0.05 }}
                                    className="col-span-1"
                                >
                                    {/* Sub-Navbar Link with SWIPE HOVER Effect */}
                                    <Link
                                        to={link.path}
                                        className="relative flex items-center p-2 rounded-sm overflow-hidden group transition-all duration-300" 
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {/* 1. SWIPE-IN Background Effect */}
                                        <motion.div
                                            className="absolute inset-0 z-0 rounded-sm origin-left"
                                            style={{ backgroundColor: HOVER_SWIPE_COLOR }}
                                            initial={{ scaleX: 0 }}
                                            whileHover={{ scaleX: 1, transition: { duration: 0.3, ease: 'easeOut' } }} 
                                        />

                                        {/* Icon (Left) */}
                                        {link.icon &&
                                            <motion.div
                                                className="relative z-10 mr-3 flex-shrink-0 p-1 rounded-full"
                                                initial={{ color: ACCENT_ORANGE }}
                                                whileHover={{ color: PRIMARY_BLUE, transition: { duration: 0.2 } }}
                                                style={{ border: `1px solid ${ACCENT_ORANGE}` }} 
                                            >
                                                <link.icon size={16} style={{ color: 'inherit' }} />
                                            </motion.div>
                                        }
                                        
                                        {/* Text Content (Right) */}
                                        <motion.div
                                            className="relative z-10 flex flex-col w-full"
                                            whileHover={{ x: 3, transition: { duration: 0.15 } }}
                                        >
                                            <p
                                                className="font-medium text-base transition-colors duration-200" 
                                                style={{ color: TEXT_COLOR }}
                                                onMouseEnter={(e) => e.target.style.color = PRIMARY_BLUE}
                                                onMouseLeave={(e) => e.target.style.color = TEXT_COLOR}
                                            >
                                                {link.name}
                                            </p>
                                        </motion.div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
DropdownMenu.displayName = "DropdownMenu";


// -------------------------------------------------------------------
// 4. Premium CTA Button Component (Retained)
// -------------------------------------------------------------------
const PremiumCTAButton = ({ isMobile = false, onClick }) => {
    const scalePulse = {
        scale: [1, 1.02, 1],
        boxShadow: [
            `0 10px 20px -5px rgba(255, 107, 0, 0.4)`,
            `0 15px 30px -5px rgba(255, 107, 0, 0.7)`,
            `0 10px 20px -5px rgba(255, 107, 0, 0.4)`,
        ],
        transition: {
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    const baseClass = `flex items-center justify-center font-bold tracking-wide rounded-sm transition-all duration-200 active:scale-95 whitespace-nowrap`;
    const desktopClasses = `hidden lg:inline-flex px-4 py-2 text-base`;
    const mobileClasses = `w-full inline-flex mt-4 px-4 py-2 text-base`;

    return (
        <Link to="/enquire" onClick={onClick}>
            <motion.div
                className={`${baseClass} ${isMobile ? mobileClasses : desktopClasses}`}
                style={{
                    backgroundColor: ACCENT_ORANGE,
                    color: WHITE_BG,
                    boxShadow: `0 10px 20px -5px rgba(255, 107, 0, 0.4)`,
                }}
                animate={scalePulse}
                whileHover={{
                    scale: 1.05,
                    boxShadow: `0 10px 30px -5px rgba(255, 107, 0, 0.8)`,
                    transition: { duration: 0.2 }
                }}
            >
                Enquire Now
            </motion.div>
        </Link>
    );
};
PremiumCTAButton.displayName = "PremiumCTAButton";

// -------------------------------------------------------------------
// 5. Main Navbar Component (Retained)
// -------------------------------------------------------------------
const AdimataNavbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    // Scroll logic for Top Bar visibility
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        
        // 1. SCROLLING DOWN (Hide Top Bar)
        if (latest > previous && latest > TOP_BAR_HEIGHT) {
            setHidden(true);
        } 
        
        // 2. SCROLLING UP (Show Top Bar ONLY at the very top)
        else if (latest < 1) { 
            setHidden(false);
        }
    });

    // Determine the animated height of the overall header
    const headerHeight = hidden ? PRIMARY_NAV_HEIGHT : PRIMARY_NAV_HEIGHT + TOP_BAR_HEIGHT;
    const topBarAnimatedHeight = hidden ? 0 : TOP_BAR_HEIGHT;

    return (
        <Fragment>
            <motion.header
                // Animate the overall height of the fixed header
                animate={{ height: headerHeight }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                
                // IMPORTANT: Removed 'overflow-hidden' from the main header's class list.
                // It's applied to the TopBar's inner motion.div instead.
                className="w-full fixed top-0 z-50 transition-shadow duration-300 shadow-md" 
                style={{ 
                    backgroundColor: NAV_BAR_BG,
                }}
            >
                {/* 1. Top Bar Container - Uses overflow: hidden for the scroll-in/out effect */}
                <motion.div
                    layout
                    animate={{ height: topBarAnimatedHeight, opacity: hidden ? 0 : 1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ pointerEvents: hidden ? 'none' : 'auto', overflow: 'hidden' }} // Keep overflow hidden here
                >
                    <TopBar />
                </motion.div>


                {/* 2. Main Navigation Bar */}
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between"
                    style={{ height: `${PRIMARY_NAV_HEIGHT}px` }} 
                >
                    {/* 2a. Logo (Left) */}
                    <div className="flex-shrink-0">
                        <AdimataLogo />
                    </div>

                    {/* 2b. Desktop Navigation Links (Center) */}
                    <div className="hidden lg:flex items-center justify-center flex-grow h-full space-x-1">
                         {navItems.map((item) =>
                            item.dropdown ? (
                                // Dropdown Menu component ensures its own high z-index
                                <DropdownMenu key={item.name} item={item} /> 
                            ) : (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className="py-2 px-4 text-base font-bold tracking-wide h-full flex items-center transition-all duration-300"
                                    style={{ color: TEXT_COLOR, borderBottom: `2px solid transparent` }}
                                    onMouseEnter={(e) => e.currentTarget.style.borderBottom = `2px solid ${ACCENT_ORANGE}`}
                                    onMouseLeave={(e) => e.currentTarget.style.borderBottom = `2px solid transparent`}
                                >
                                    {item.name}
                                </Link>
                            )
                        )}
                    </div>

                    {/* 2c. CTA Button (Right - Desktop) & Mobile Toggle */}
                    <div className="flex items-center space-x-3">
                        <PremiumCTAButton />

                        <button
                            className="lg:hidden p-2 rounded-full transition-colors duration-200 hover:bg-gray-100"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                            style={{ color: TEXT_COLOR }}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </nav>

                {/* --- SOFT BORDER SEPARATION --- */}
                <div className="w-full h-[1px] border-b" style={{ borderColor: 'rgba(0, 0, 0, 0.08)' }}></div>
                {/* ------------------------------ */}

                {/* Mobile Menu Drawer */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            className="lg:hidden absolute w-full shadow-lg overflow-hidden" 
                            style={{ backgroundColor: NAV_BAR_BG, top: `${headerHeight}px` }} 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <motion.div
                                className="p-4 space-y-2"
                                initial="hidden"
                                animate="visible"
                                transition={{ staggerChildren: 0.05 }}
                            >
                                {navItems.map((item, index) => (
                                    <MobileNavItem
                                        key={index}
                                        item={item}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    />
                                ))}
                                <PremiumCTAButton
                                    isMobile={true}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>
        </Fragment>
    );
};
AdimataNavbar.displayName = "AdimataNavbar";


// -------------------------------------------------------------------
// 6. Mobile Navigation Item Component (Retained)
// -------------------------------------------------------------------
const MobileNavItem = ({ item, onClick }) => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const handleLinkClick = () => {
        if (!item.dropdown) {
            onClick();
        } else {
            setIsSubMenuOpen(!isSubMenuOpen);
        }
    };

    return (
        <motion.div variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}>
            <div className="flex justify-between items-center py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors duration-150" 
                style={{ backgroundColor: isSubMenuOpen ? 'rgba(0, 0, 0, 0.03)' : 'transparent' }} 
            >
                <Link
                    to={item.path}
                    className="flex-grow font-semibold text-base" 
                    style={{ color: TEXT_COLOR }}
                    onClick={handleLinkClick}
                >
                    {item.name}
                </Link>
                {item.dropdown && (
                    <button onClick={() => setIsSubMenuOpen(!isSubMenuOpen)} className="p-1">
                        <ChevronDown size={20} className={`transition-transform duration-300 ${isSubMenuOpen ? 'rotate-180' : 'rotate-0'}`} style={{ color: ACCENT_ORANGE }} />
                    </button>
                )}
            </div>

            {/* Sub-menu Content (Mobile) */}
            <AnimatePresence initial={false}>
                {item.dropdown && isSubMenuOpen && (
                    <motion.div
                        className="pl-5 pt-1 pb-2 space-y-1 overflow-hidden ml-3"
                        style={{ borderLeft: `2px solid ${ACCENT_ORANGE}` }}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className={`grid ${item.isMega ? 'grid-cols-2 gap-1 px-2 pt-2' : 'grid-cols-1 gap-1'}`}>
                            {item.dropdown.map((subItem) => (
                                <Link
                                    key={subItem.name}
                                    to={subItem.path}
                                    className={`flex items-center py-1.5 pl-3 text-sm rounded-md hover:bg-gray-100 transition-colors duration-150`}
                                    style={{ color: TEXT_COLOR }}
                                    onClick={onClick} 
                                >
                                    {subItem.icon && <subItem.icon size={16} className="mr-2" style={{ color: PRIMARY_BLUE }} />}
                                    {subItem.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};
MobileNavItem.displayName = "MobileNavItem";

export default AdimataNavbar;