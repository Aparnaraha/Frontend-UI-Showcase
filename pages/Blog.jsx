"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronRight, Clock, Tag, Search, ArrowRight, ArrowLeft, Brush, Heart, Zap, Award } from 'lucide-react'; // Changed DollarSign to Zap or Award
import PageHero from '../ui/Hero';

// =====================================================================
// 🎨 COLOR PALETTE & CONSTANTS (Adapted from Gallery Page)
// =====================================================================
const PRIMARY_BLUE = "#1E4567";   // Deep Blue (Primary Accent)
const ACCENT_PURPLE = "#7B3B6B";  // Rich Purple (Secondary Accent)
const ACCENT_GOLD = "#C79C4B";    // Gold (Highlight/Premium status)
const TEXT_COLOR = '#1F2937';      // Dark Gray/Navy (Headings/Body Text)
const BG_LIGHT = '#F7F7F7';        // Off-White (Page Background)

const SERVICES_PER_PAGE = 6;

// --- PageHero Props for Services Page ---
const servicesPageProps = {
    title: "Blog Feeds",
    subtitle: "Explore our premium blogs for Hair, Skin, Makeup, and Nails.",
    imageUrl: "/hero2.png", // Placeholder image
    shortPara: "Each service is crafted using luxury products and performed by master stylists for a truly transformative experience.",
    backgroundColor: PRIMARY_BLUE + '05',
};

// --- Salon Categories (From Gallery Page) ---
const CATEGORIES = [
    "All",
    "Hair",
    "Makeup",
    "Skin",
    "Nails"
];

// --- Service Data (Adapted from Blog Data) ---
const mockSalonServices = [
    {
        id: 1,
        title: "Advanced Keratin Smoothening",
        excerpt: "Eliminates frizz and straightens hair using a formaldehyde-free keratin formula.",
        content: "Our Advanced Keratin Treatment utilizes nano-technology to infuse keratin deeply into the hair cuticle, providing long-lasting shine and manageability. The process includes a diagnostic wash, application, heat sealing, and final rinse. Results last up to 6 months. **Key Technique:** Low-heat steam sealing. **Duration:** 4 Hours. **Price Start:** Consult. Focus on: Smooth, Frizz-Free Finish.", // Price changed to "Consult"
        duration: "4 Hours",
        complexity: "High", // New field
        category: "Hair",
        imageUrl: "/blog/b9.png", // UPDATED
        isFeatured: true
    },
    {
        id: 2,
        title: "Signature Bridal Makeup Package",
        excerpt: "Complete customized look with HD/Airbrush application, tailored to your outfit and theme.",
        content: "This premium package includes pre-bridal skin prep, trial consultation, and on-location HD/Airbrush makeup for the main event. We use long-wear, waterproof products suitable for flash photography. **Key Technique:** Airbrush perfection. **Duration:** 2 Hours. **Price Start:** Consult. Focus on: Radiant, Photo-Ready Glow.", // Price changed to "Consult"
        duration: "2 Hours",
        complexity: "High", // New field
        category: "Makeup",
        imageUrl: "/blog/b10.png", // UPDATED
        isFeatured: true
    },
    {
        id: 3,
        title: "Deep Hydrating Facial Therapy",
        excerpt: "A restorative facial to replenish moisture and improve skin barrier function.",
        content: "The Hydra-Therapy facial involves gentle exfoliation, steam, extraction, and a custom hydrating mask rich in hyaluronic acid and ceramides. Perfect for dry or dull skin. **Key Technique:** Ultrasonic infusion. **Duration:** 90 Mins. **Price Start:** Consult. Focus on: Plump, Supple Skin.", // Price changed to "Consult"
        duration: "90 Mins",
        complexity: "Medium", // New field
        category: "Skin",
        imageUrl: "/blog/b3.png" // UPDATED
    },
    {
        id: 4,
        title: "3D Gel Nail Extensions & Art",
        excerpt: "Durable sculpted gel extensions with intricate 3D or embedded nail art designs.",
        content: "Using odorless and chip-resistant hard gel, we sculpt the perfect nail shape and length. Followed by a meticulous hand-painted or embedded 3D design chosen by you. **Key Technique:** Custom sculpting. **Duration:** 2 Hours. **Price Start:** Consult. Focus on: High-Impact, Artistic Design.", // Price changed to "Consult"
        duration: "2 Hours",
        complexity: "Medium", // New field
        category: "Nails",
        imageUrl: "/blog/b4.png", // UPDATED
        isFeatured: true
    },
    {
        id: 5,
        title: "Vibrant Balayage & Colour Melt",
        excerpt: "Freehand colour application for a natural, sunkissed dimension without harsh lines.",
        content: "Our stylists expertly blend custom-mixed colours to achieve a seamless melt from root to tip. The service includes Olaplex treatment to maintain hair integrity. **Key Technique:** Hand-painted placement. **Duration:** 5 Hours. **Price Start:** Consult. Focus on: Luminous, Multi-Tonal Colour.", // Price changed to "Consult"
        duration: "5 Hours",
        complexity: "High", // New field
        category: "Hair",
        imageUrl: "/blog/b5.png" // UPDATED
    },
    {
        id: 6,
        title: "Laser Hair Reduction (Small Area)",
        excerpt: "Permanent hair reduction using advanced diode laser technology, safe for all skin types.",
        content: "This service uses a cooling-tip diode laser for comfortable and effective hair removal. A patch test is required. Price is per session for small areas like the upper lip or chin. **Key Technique:** Diode laser precision. **Duration:** 15 Mins. **Price Start:** Consult. Focus on: Smooth, Permanent Results.", // Price changed to "Consult"
        duration: "15 Mins",
        complexity: "Low", // New field
        category: "Skin",
        imageUrl: "/blog/b6.png" // UPDATED
    },
    {
        id: 7,
        title: "Reception Party Glam Makeup",
        excerpt: "Flawless, structured makeup designed to last all night under bright lights.",
        content: "Includes full coverage foundation, contouring, dramatic eye makeup, and lash application. Designed to transition smoothly from daylight to evening lighting. **Key Technique:** Structured contouring. **Duration:** 90 Mins. **Price Start:** Consult. Focus on: Long-Lasting, Defined Look.", // Price changed to "Consult"
        duration: "90 Mins",
        complexity: "Medium", // New field
        category: "Makeup",
        imageUrl: "/blog/b7.png" // UPDATED
    },
    {
        id: 8,
        title: "Classic Manicure & Pedicure Spa",
        excerpt: "Relaxing soak, scrub, mask, massage, and professional shaping with polish application.",
        content: "A full rejuvenating treatment for hands and feet, including callus reduction, cuticle care, and deep moisturization. Choose from our wide selection of premium polishes. **Key Technique:** Therapeutic massage. **Duration:** 75 Mins. **Price Start:** Consult. Focus on: Rejuvenation and Relaxation.", // Price changed to "Consult"
        duration: "75 Mins",
        complexity: "Low", // New field
        category: "Nails",
        imageUrl: "/blog/b2.png" // UPDATED
    },
];

// --- Salon Partner Data (Replaced Academic Institutions) ---
const SALON_PARTNERS = [
    { name: "L'Oréal Professionnel", type: "Hair", focus: "Colour & Care" },
    { name: "M.A.C Cosmetics", type: "Makeup", focus: "Pro Artist Tools" },
    { name: "OPI Nails", type: "Nails", focus: "Lacquer & Gels" },
    { name: "Dermalogica", type: "Skin", focus: "Clinical Skincare" },
];


// ---------------------------------------------------------------------
// ## Sub-Component: SalonPartnerLink (Replaced AcademicPartnerLink)
// ---------------------------------------------------------------------

const SalonPartnerLink = ({ partner }) => (
    <motion.a
        href="#" // Placeholder link
        className="flex items-center space-x-3 group transition-transform duration-300 hover:scale-[1.02] p-2 -m-2 rounded-lg border border-transparent hover:border-gray-200"
        whileHover={{ backgroundColor: '#ECE9F1' }} // Light Purple background for hover
    >
        <div className="flex-shrink-0">
            <Heart size={20} style={{ color: ACCENT_PURPLE }} />
        </div>
        <div className="flex-grow">
            <h4 className="text-sm font-semibold leading-snug group-hover:text-purple-800 transition-colors" style={{ color: TEXT_COLOR }}>
                {partner.name}
            </h4>
            <p className="text-xs mt-0.5" style={{ color: PRIMARY_BLUE }}>
                Focus: {partner.focus}
            </p>
        </div>
        <ChevronRight size={16} className="text-gray-400 group-hover:text-gray-600" />
    </motion.a>
);
SalonPartnerLink.displayName = 'SalonPartnerLink';


// ---------------------------------------------------------------------
// ## Sub-Component: FeaturedServiceLink (Replaced FeaturedPostLink)
// ---------------------------------------------------------------------

const FeaturedServiceLink = ({ service, onClick }) => (
    <motion.a
        href="#"
        onClick={(e) => { e.preventDefault(); onClick(service); }}
        className="flex space-x-3 group transition-transform duration-300 hover:scale-[1.02] p-2 -m-2 rounded-lg"
        whileHover={{ backgroundColor: '#ECE9F1' }} // Light Purple background
    >
        <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
            <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/100x100/7B3B6B/FFFFFF?text=SALON"; }}
            />
        </div>
        <div className="flex-grow">
            <h4 className="text-sm font-semibold leading-snug group-hover:text-purple-800 transition-colors" style={{ color: TEXT_COLOR }}>
                {service.title}
            </h4>
            <p className="text-xs mt-1 flex items-center" style={{ color: ACCENT_GOLD }}>
                <Award size={10} className="inline mr-1 fill-current" /> Level: {service.complexity} {/* Replaced price with complexity */}
            </p>
        </div>
    </motion.a>
);
FeaturedServiceLink.displayName = 'FeaturedServiceLink';


// ---------------------------------------------------------------------
// ## Sub-Component: Service Card (Replaced BlogPostCard)
// ---------------------------------------------------------------------

const ServiceCard = ({ service, delay, onClick }) => (
    <motion.div
        className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 cursor-pointer transform hover:shadow-2xl transition-all duration-500 group"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: delay
        }}
        whileHover={{ y: -5, transition: { duration: 0.3 } }}
        onClick={() => onClick(service)}
    >
        <div className="relative h-48 overflow-hidden">
            <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/1E4567/FFFFFF?text=SERVICE+PREVIEW"; }}
            />
            {service.isFeatured && (
                <div className="absolute top-3 right-3 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center shadow-lg"
                    style={{ backgroundColor: ACCENT_PURPLE }}>
                    <Star size={12} className="mr-1 fill-white" /> LUXURY
                </div>
            )}
        </div>
        <div className="p-6 space-y-3">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="flex items-center font-bold" style={{ color: ACCENT_GOLD }}>
                    <Zap size={14} className="mr-1.5" /> {service.complexity} Level {/* Replaced price with complexity */}
                </span>
                <span className="flex items-center" style={{ color: PRIMARY_BLUE }}>
                    <Brush size={14} className="mr-1.5" style={{ color: ACCENT_PURPLE }} /> {service.category}
                </span>
            </div>

            <h3 className="text-xl font-sans font-bold group-hover:text-purple-800 transition-colors duration-300" style={{ color: TEXT_COLOR }}>
                {service.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
                {service.excerpt}
            </p>
            <a
                href="#"
                onClick={(e) => { e.stopPropagation(); e.preventDefault(); onClick(service); }}
                className="inline-flex items-center font-semibold text-sm pt-2 transition-colors duration-300 group-read-more"
                style={{ color: PRIMARY_BLUE }}
            >
                View Details
                <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-read-more:translate-x-1" />
            </a>
        </div>
    </motion.div>
);
ServiceCard.displayName = 'ServiceCard';


// ---------------------------------------------------------------------
// ## Sub-Component: ServiceDetail (Replaced ArticleDetail)
// ---------------------------------------------------------------------

const ServiceDetail = ({ service, relatedServices, onBack, onSelectRelated }) => {
    // Extracting details from content string using placeholder splits
    const contentParts = service.content.split('. ');
    const keyTechnique = contentParts.find(p => p.startsWith('**Key Technique:'));
    const duration = contentParts.find(p => p.startsWith('**Duration:'));
    const price = contentParts.find(p => p.startsWith('**Price Start:')); // Retain for content extraction, display removed
    const focus = contentParts.find(p => p.startsWith('Focus on:'));

    return (
        <motion.div
            className="w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.4 }}
        >
            <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-10 border border-gray-100 overflow-hidden">
                {/* Back Button */}
                <motion.button
                    onClick={onBack}
                    className="inline-flex items-center text-sm font-semibold mb-6 group transition-colors duration-200 hover:text-blue-700"
                    style={{ color: PRIMARY_BLUE }}
                    whileHover={{ x: -3 }}
                >
                    <ArrowLeft size={18} className="mr-2" />
                    Back to All Services
                </motion.button>

                <div className="space-y-6">
                    <h1 className="text-4xl font-sans font-extrabold" style={{ color: ACCENT_PURPLE }}>
                        {service.title}
                    </h1>

                    <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-500 pb-4 border-b border-gray-100">
                        <span className="flex items-center font-bold" style={{ color: ACCENT_GOLD }}>
                            <Zap size={16} className="mr-2 fill-current" /> Complexity: {service.complexity} {/* Replaced price with complexity */}
                        </span>
                        <span className="flex items-center font-medium" style={{ color: PRIMARY_BLUE }}>
                            <Clock size={16} className="mr-2" /> {service.duration}
                        </span>
                        <span className="flex items-center font-medium" style={{ color: ACCENT_PURPLE }}>
                            <Brush size={16} className="mr-2" /> {service.category}
                        </span>
                        {service.isFeatured && (
                            <span className="flex items-center text-purple-600 font-bold">
                                <Star size={16} className="mr-1.5 fill-purple-600" /> Premium
                            </span>
                        )}
                    </div>

                    {/* Featured Image */}
                    <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg border border-gray-200">
                        <img
                            src={service.imageUrl}
                            alt={service.title}
                            className="w-full h-full object-cover"
                            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x400/1E4567/FFFFFF?text=Service+Detail"; }}
                        />
                    </div>

                    {/* Content - Expanded Detail */}
                    <p className="text-xl font-medium pt-4" style={{ color: TEXT_COLOR }}>
                        **{service.excerpt}**
                    </p>

                    {/* Main Content Sections */}
                    <div className="space-y-6 text-gray-700 leading-loose text-base pt-4 border-t border-gray-100">
                        <p>{contentParts[0]}.</p>

                        <h3 className="text-2xl font-sans font-bold pt-4" style={{ color: PRIMARY_BLUE }}>
                            Service Breakdown
                        </h3>
                        <ul className="list-disc list-inside space-y-2 pl-4 text-gray-700">
                            <li>{keyTechnique?.replace('**', '').replace('**', '') || "Detailed consultation included."}</li>
                            <li>{duration?.replace('**', '').replace('**', '') || "Appointments are essential."}</li>
                            <li className="font-bold">Price: <span className="text-red-500">Please contact us for a personalized quote.</span></li> {/* Replaced price detail with a call-to-action */}
                        </ul>

                        <h3 className="text-2xl font-sans font-bold pt-4" style={{ color: ACCENT_PURPLE }}>
                            Desired Outcome
                        </h3>
                        <p>
                            {focus?.replace('Focus on: ', '') || "Achieve the ultimate in beauty, relaxation, and confidence with our certified stylists."}
                        </p>
                    </div>
                </div>
            </div>

            {/* Related Services Section */}
            {relatedServices.length > 0 && (
                <motion.div
                    className="mt-10 bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h3 className="text-xl font-sans font-bold mb-6" style={{ color: PRIMARY_BLUE }}>More in {service.category}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {relatedServices.map((rService) => (
                            <FeaturedServiceLink key={rService.id} service={rService} onClick={onSelectRelated} />
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.div>
    );
};
ServiceDetail.displayName = 'ServiceDetail';


// ---------------------------------------------------------------------
// ## Main Component: ServicesPage
// ---------------------------------------------------------------------

const ServicesPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [servicesToShow, setServicesToShow] = useState(SERVICES_PER_PAGE);
    const [selectedService, setSelectedService] = useState(null);

    const handleFilterChange = (category) => {
        setSelectedCategory(category);
        setServicesToShow(SERVICES_PER_PAGE);
        setSelectedService(null);
        setSearchTerm('');
        window.scrollTo({ top: 300, behavior: 'smooth' });
    };

    const handleSearchChange = (term) => {
        setSearchTerm(term);
        setServicesToShow(SERVICES_PER_PAGE);
        setSelectedService(null);
        window.scrollTo({ top: 300, behavior: 'smooth' });
    };

    const filteredServices = useMemo(() => {
        // Helper function to convert duration strings to a number for sorting (e.g., '4 Hours' -> 240, '90 Mins' -> 90)
        const durationToMinutes = (durationStr) => {
            const parts = durationStr.split(' ');
            const value = parseInt(parts[0]);
            const unit = parts[1];
            if (unit.startsWith('Hour')) return value * 60;
            if (unit.startsWith('Min')) return value;
            return 0; // Default for unknown formats
        };

        return mockSalonServices
            .filter(service => selectedCategory === 'All' || service.category === selectedCategory)
            .filter(service => service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                service.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                service.content.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .sort((a, b) => durationToMinutes(a.duration) - durationToMinutes(b.duration)); // **CHANGED: Sort by duration (shortest first)**
    }, [selectedCategory, searchTerm]);

    const displayedServices = filteredServices.slice(0, servicesToShow);
    const hasMoreServices = filteredServices.length > servicesToShow;

    const featuredServices = useMemo(() => {
        return mockSalonServices.filter(service => service.isFeatured).sort((a, b) => b.id - a.id).slice(0, 4);
    }, []);

    const allServices = mockSalonServices;

    const relatedServices = useMemo(() => {
        if (!selectedService) return [];
        return allServices
            .filter(service => service.category === selectedService.category && service.id !== selectedService.id)
            .slice(0, 4);
    }, [selectedService, allServices]);

    const handleLoadMore = () => {
        setServicesToShow(prev => prev + SERVICES_PER_PAGE);
    };

    const handleSelectService = (service) => {
        setSelectedService(service);
        setSelectedCategory('All');
        setSearchTerm('');
        window.scrollTo({ top: 300, behavior: 'smooth' });
    };

    const handleBackToServices = () => {
        setSelectedService(null);
        window.scrollTo({ top: 300, behavior: 'smooth' });
    };

    // --- FilterHeading Component ---
    const FilterHeading = () => {
        if (selectedCategory !== 'All' && !selectedService) {
            return (
                <motion.div
                    className="mb-8 p-4 rounded-xl border border-gray-200"
                    style={{ backgroundColor: 'white', borderLeft: `6px solid ${ACCENT_PURPLE}` }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <h2 className="text-2xl font-sans font-extrabold" style={{ color: TEXT_COLOR }}>
                        Showing Services in: <span style={{ color: PRIMARY_BLUE }}>{selectedCategory}</span>
                    </h2>
                    <p className="text-sm mt-1 text-gray-500">
                        {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found in this category.
                    </p>
                </motion.div>
            );
        }
        return null;
    };

    // --- Sidebar Component ---
    const Sidebar = () => (
        <motion.div
            className="w-full space-y-8 sticky top-8 h-fit"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            {/* Search Bar */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-sans font-bold mb-4" style={{ color: ACCENT_PURPLE }}>Find Your Service</h3>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search by name, technique..."
                        value={searchTerm}
                        onChange={(e) => handleSearchChange(e.target.value)}
                        className={`w-full py-3 pl-10 pr-4 border border-gray-200 rounded-sm focus:ring-2 focus:ring-[${PRIMARY_BLUE}]/50 focus:border-[${PRIMARY_BLUE}] transition-all text-gray-800`}
                    />
                    <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
            </div>

            {/* Categories Filter */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-sans font-bold mb-4" style={{ color: ACCENT_PURPLE }}>Service Disciplines</h3>
                <div className="space-y-2">
                    {CATEGORIES.map(category => (
                        <motion.button
                            key={category}
                            onClick={() => handleFilterChange(category)}
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-between ${selectedCategory === category
                                    ? `shadow-md`
                                    : 'text-gray-700 hover:bg-gray-50'
                                }`}
                            style={{
                                backgroundColor: selectedCategory === category ? PRIMARY_BLUE : 'transparent',
                                color: selectedCategory === category ? 'white' : TEXT_COLOR,
                                border: selectedCategory === category ? 'none' : `1px solid ${BG_LIGHT}`,
                            }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="flex items-center">
                                <Tag size={16} className="mr-2" style={{ color: selectedCategory === category ? 'white' : ACCENT_PURPLE }} />
                                {category}
                            </span>
                            <ChevronRight size={16} className={selectedCategory === category ? 'text-white' : 'text-gray-400'} />
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Featured Services */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-sans font-bold mb-4" style={{ color: ACCENT_PURPLE }}>Luxury Picks</h3>
                <div className="space-y-4">
                    {featuredServices.map(service => (
                        <FeaturedServiceLink key={service.id} service={service} onClick={handleSelectService} />
                    ))}
                </div>
            </div>

            {/* Product Partners */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-sans font-bold mb-4" style={{ color: PRIMARY_BLUE }}>Our Premium Partners</h3>
                <div className="space-y-3">
                    {SALON_PARTNERS.map(partner => (
                        <SalonPartnerLink key={partner.name} partner={partner} />
                    ))}
                </div>
            </div>
        </motion.div>
    );

    return (
        <div className="relative min-h-screen" style={{ backgroundColor: BG_LIGHT }}>

            {/* ===================================================================== */}
            {/* ## 1. Page Hero Component */}
            {/* ===================================================================== */}
            <PageHero {...servicesPageProps} />

            {/* ===================================================================== */}
            {/* ## 2. Main Content Grid (List or Detail View) */}
            {/* ===================================================================== */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Left Column: Services List / Service Detail */}
                    <div className="lg:col-span-2">
                        <AnimatePresence mode="wait">
                            {selectedService ? (
                                <ServiceDetail
                                    key={selectedService.id}
                                    service={selectedService}
                                    relatedServices={relatedServices}
                                    onBack={handleBackToServices}
                                    onSelectRelated={handleSelectService}
                                />
                            ) : (
                                <motion.div key="list" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.4 }}>

                                    <FilterHeading />

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {displayedServices.length > 0 ? (
                                            displayedServices.map((service, index) => (
                                                <ServiceCard key={service.id} service={service} delay={index * 0.1} onClick={handleSelectService} />
                                            ))
                                        ) : (
                                            <div className="md:col-span-2 text-center p-10 bg-white rounded-xl shadow-lg" style={{ color: TEXT_COLOR }}>
                                                <Brush size={48} className="mx-auto mb-4" style={{ color: ACCENT_PURPLE }} />
                                                <p className="text-xl font-semibold mb-2">No Services Match Your Search</p>
                                                <p className="text-gray-600">Try adjusting your category filter or search term.</p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Load More Button */}
                                    {hasMoreServices && (
                                        <motion.div
                                            className="text-center mt-12"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <motion.button
                                                onClick={handleLoadMore}
                                                className="px-8 py-3 text-white font-bold rounded-full shadow-lg flex items-center justify-center mx-auto transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                                                style={{ backgroundColor: ACCENT_PURPLE }}
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                Load More Services ({filteredServices.length - servicesToShow} remaining)
                                                <ArrowRight size={18} className="ml-2" />
                                            </motion.button>
                                        </motion.div>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Right Column: Sidebar */}
                    <div className="lg:col-span-1">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;