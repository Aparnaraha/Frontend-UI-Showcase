// SpecialFeaturesSection.jsx (New Look: Cards with Image Background)

import React, { useRef, useEffect, memo } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { Link } from 'react-router-dom';

// --- SALON COLOR CONFIGURATION (KEPT SAME) ---
const COLORS = {
    darkBlue: "#1E4567",
    purple: "#7B3B6B",
    gold: "#C79C4B",
    creamWhite: "#F8F7F4",
    textLight: "#FFFFFF",
};

const ACCENT_PRIMARY = COLORS.gold;
const ACCENT_SECONDARY = COLORS.purple;
const TEXT_DARK = COLORS.darkBlue;
const TEXT_LIGHT = COLORS.textLight;
const CARD_BG = COLORS.darkBlue; // Using DarkBlue for Card BG

// --- MOCK UI COMPONENTS (Lucide Icons) ---
// Hair Icon (NEW: Hair Dryer)
const HairDryer = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 14.5l-4-4c-1.5-1.5-3-2-5-2H2v4h3.5l1.5 1.5c1.5 1.5 2 3 2 5v2h4l-2-2z" /><path d="M7.5 10.5L10 13l3.5-3.5" /></svg>
);

// Skin Icon (KEPT: Sparkles for glow/beauty)
const Sparkles = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1.5l2.5 5 5 1.5-5 1.5-2.5 5-2.5-5-5-1.5 5-1.5z" /><circle cx="17.5" cy="17.5" r="1.5" /><circle cx="5" cy="12" r="1" /></svg>
);

// Nail Care Icon (NEW: Feather for delicate application)
const Feather = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.2 6.5l-3.79 3.79 2.13 2.13-2.13 2.13-3.79-3.79 2.13-2.13z" /><path d="M18.88 1.66l-1.66 1.66-2.13 2.13 3.79 3.79 2.13-2.13 1.66-1.66a2 2 0 000-2.83l-1.92-1.92a2 2 0 00-2.83 0z" /><path d="M15.41 12.59l-1.59 1.59-2.13 2.13 3.79 3.79 2.13-2.13 1.59-1.59" /><path d="M6 18l-3 3" /><path d="M3 3l3 3" /></svg>
);

// Makeup Icon (NEW: Eye for cosmetic focus)
const Eye = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
);


// Mapping function to choose the icon based on the category title (UPDATED)
const getCategoryIcon = (categoryTitle) => {
    switch (categoryTitle.toLowerCase()) {
        case 'hair':
            return HairDryer;
        case 'skin':
            return Sparkles;
        case 'nail care':
            return Feather; // Using Feather for precision/artistry
        case 'makeup':
            return Eye;
        default:
            return Sparkles;
    }
};

const MLink = motion(Link);

// --- HeadingSection MOCK (KEPT SAME) ---
const HeadingSection = memo(({ title, subtitle, inView, className = "", textColor = TEXT_DARK }) => {
    const itemVariants = {
        hidden: { y: 15, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: "tween", duration: 0.6 } },
    };

    const dividerVariants = {
        hidden: { scaleX: 0 },
        visible: { scaleX: 1, transition: { duration: 0.8, delay: 0.3 } },
    };

    return (
        <motion.div
            className={`text-center ${className}`}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
        >
            <motion.h1
                variants={itemVariants}
                className="text-2xl sm:text-3xl lg:text-4xl font-sans font-extrabold mb-3 max-w-4xl mx-auto"
                style={{ color: textColor }}
            >
                {title}
            </motion.h1>

            <motion.div
                className="w-10 h-0.5 mx-auto my-4"
                style={{ backgroundColor: ACCENT_PRIMARY }}
                variants={dividerVariants}
            />

            <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg max-w-3xl mx-auto mt-4 font-normal px-2"
                style={{ color: textColor }}
            >
                {subtitle}
            </motion.p>
        </motion.div>
    );
});
HeadingSection.displayName = "HeadingSection";


// --- ServiceFeatureCard (REVAMPED LOOK) ---
const ServiceFeatureCard = memo(({ data, index, isVisible }) => {

    // Placeholder images for demonstration. In a real app, you'd use a real path.
    const placeholderImages = {
        'hair': 'url("https://images.unsplash.com/photo-1596464879555-d41c8d5a1b3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTMyMDN8MHwxfHNlYXJjaHwzfHNhbG9uJTIwaGFpcmN1dHxlbnwwfHx8fDE3MDI3OTc3NDJ8MA&ixlib=rb-4.0.3&q=80&w=400")',
        'skin': 'url("https://images.unsplash.com/photo-1544717173-ef8805f63d08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTMyMDN8MHwxfHNlYXJjaHwzfHNhbG9uJTIwc2tpbmNhcmV8ZW58MHx8fHwxNzAyNzk3Nzk3fDA&ixlib=rb-4.0.3&q=80&w=400")',
        'nail care': 'url("https://images.unsplash.com/photo-1588235213600-4740e69ddc6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTMyMDN8MHwxfHNlYXJjaHwzfHNhbG9uJTIwbmFpbHxlbnwwfHx8fDE3MDI3OTc4MjB8MA&ixlib=rb-4.0.3&q=80&w=400")',
        'makeup': 'url("https://images.unsplash.com/photo-1620170428987-a2ff76774619?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTMyMDN8MHwxfHNlYXJjaHwzfHNhbG9uJTIwbWFrZXVwfGVufDB8fHx8MTcwMjc5Nzg1NHww&ixlib=rb-4.0.3&q=80&w=400")',
    };

    const categoryKey = data.categoryTitle.toLowerCase();
    const backgroundImage = placeholderImages[categoryKey] || 'none';

    const accentColor = index % 2 === 0 ? ACCENT_PRIMARY : ACCENT_SECONDARY;

    const IconComponent = getCategoryIcon(data.categoryTitle);

    const whileHoverScale = isVisible ? 1.05 : 1;

    return (
        <motion.div
            className="flex-shrink-0 w-[300px] sm:w-[350px] p-4 snap-center"
            whileHover={{
                scale: whileHoverScale,
                // Subtle shadow on hover for depth
                boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.5)`
            }}
            transition={{ duration: 0.3 }}
        >
            <div
                className="relative aspect-square p-8 rounded-xl overflow-hidden text-center transition-all duration-300 transform h-full group"
                style={{
                    backgroundColor: CARD_BG,
                    color: TEXT_LIGHT,
                    border: `2px solid ${accentColor}` // Keeping the accent border
                }}
            >
                {/* Background Image Layer */}
                <div
                    className="absolute inset-0 z-0 transition-opacity duration-500 opacity-20 group-hover:opacity-40"
                    style={{
                        backgroundImage: backgroundImage,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        // Dark overlay to ensure text readability
                        backgroundBlendMode: 'multiply',
                        backgroundColor: CARD_BG // Use card background color for multiply blend
                    }}
                />

                {/* Content Layer */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full">

                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: isVisible ? 1 : 0.8 }}
                        transition={{ delay: index * 0.1, duration: 0.5, type: 'spring' }}
                        className="p-3 mb-4 rounded-full"
                        style={{ backgroundColor: accentColor + '30', border: `1px solid ${ACCENT_PRIMARY}` }}
                    >
                        <IconComponent className="w-8 h-8" style={{ color: ACCENT_PRIMARY }} />
                    </motion.div>

                    <p className="text-sm font-light uppercase tracking-widest mb-1" style={{ color: ACCENT_PRIMARY }}>
                        {data.categoryTitle}
                    </p>

                    <h4 className="text-2xl sm:text-3xl font-serif font-semibold mb-4" style={{ color: TEXT_LIGHT }}>
                        {data.name}
                    </h4>

                    <p className="text-sm text-gray-300 max-w-[200px] mb-6">
                        Explore the full range of {data.categoryTitle.toLowerCase()} services tailored just for you.
                    </p>

                    <MLink
                        to={data.path}
                        className="mt-2 text-sm uppercase font-extrabold inline-block transition-colors duration-200"
                        style={{ color: accentColor }}
                        whileHover={{ color: TEXT_LIGHT, backgroundColor: accentColor, padding: '4px 8px', borderRadius: '4px' }}
                    >
                        Discover More
                    </MLink>
                </div>

            </div>
        </motion.div>
    );
});
ServiceFeatureCard.displayName = "ServiceFeatureCard";

// --- useContinuousSlider Hook (KEPT SAME) ---
const useContinuousSlider = (contentCount, itemWidth) => {
    const scrollContainerRef = useRef(null);
    const x = useMotionValue(0);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const clones = container.querySelectorAll('.slider-item-clone');
        clones.forEach(clone => clone.remove());

        const originalItems = container.querySelectorAll('.slider-item');
        if (originalItems.length === 0) return;

        originalItems.forEach((item) => {
            const clone = item.cloneNode(true);
            clone.classList.add('slider-item-clone');
            container.appendChild(clone);
        });

        const totalScrollWidth = originalItems.length * itemWidth;

        const animation = animate(x, [-totalScrollWidth, 0], {
            repeat: Infinity,
            duration: 30 * contentCount / 5,
            ease: "linear",
            onUpdate: (latest) => {
                container.scrollLeft = -latest;
            }
        });

        return () => animation.stop();
    }, [contentCount, itemWidth]);

    return { scrollContainerRef, x };
};

// --- DATA STRUCTURE and FLATTENING (KEPT SAME) ---
const nestedServiceData = [
    {
        title: 'Hair',
        links: [
            { name: 'Haircut', path: '/services/haircut' },
            { name: 'Hair Style', path: '/services/hair-style' },
            { name: 'Hair Colors', path: '/services/hair-colors' },
            { name: 'Hair Spa', path: '/services/hair-spa' },
            { name: 'Texture', path: '/services/texture' },
        ]
    },
    {
        title: 'Skin',
        links: [
            { name: 'Body Care', path: '/services/body-care' },
            { name: 'Skin Care', path: '/services/skin-care' },
            { name: 'Clean up', path: '/services/clean-up' },
            { name: 'Facials', path: '/services/facials' },
        ]
    },
    {
        title: 'Nail Care',
        links: [
            { name: 'Manicure', path: '/services/manicure' },
            { name: 'Pedicure', path: '/services/pedicure' },
            { name: 'Nails', path: '/services/nails' },
            { name: 'Gel Polish', path: '/services/gel-polish' },
            { name: 'Extensions', path: '/services/extensions' },
        ]
    },
    {
        title: 'Makeup',
        links: [
            { name: 'Party Makeup', path: '/services/party-makeup' },
            { name: 'Bridal Makeup', path: '/services/bridal-makeup' },
            { name: 'Occasional Makeup', path: '/services/occasional-makeup' },
            { name: 'Regular Makeup', path: '/services/regular-makeup' },
        ]
    },
];

const flatServiceFeatures = nestedServiceData.flatMap((category, catIndex) =>
    category.links.map((link, linkIndex) => ({
        id: `${catIndex}-${linkIndex}`,
        categoryTitle: category.title,
        name: link.name,
        path: link.path,
    }))
);


// --- MAIN COMPONENT: SpecialFeaturesSection ---
const SpecialFeaturesSection = () => {
    const { ref: inViewRef, inView } = useInView({ threshold: 0.1, triggerOnce: true });

    const itemWidth = 350;
    const { scrollContainerRef } = useContinuousSlider(flatServiceFeatures.length, itemWidth);

    return (
        <section
            className="py-16"
            style={{ backgroundColor: TEXT_DARK }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12" ref={inViewRef}>
                    <HeadingSection
                        title="Our Signature Services Menu"
                        subtitle="Discover our luxury treatments, from precision haircuts and custom color to skin and nail care."
                        inView={inView}
                        textColor={TEXT_LIGHT}
                    />
                </div>

                <div
                    ref={scrollContainerRef}
                    className="flex p-2 gap-4"
                    style={{ overflowX: 'scroll', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {flatServiceFeatures.map((feature, index) => (
                        <div key={feature.id} className="slider-item">
                            <ServiceFeatureCard data={feature} index={index} isVisible={inView} />
                        </div>
                    ))}
                </div>
            </div>
            {/* Custom CSS to hide the scrollbar for webkit browsers */}
            <style jsx global>{`
                div[style*="overflow-x: scroll"]::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};
SpecialFeaturesSection.displayName = "SpecialFeaturesSection";

export default SpecialFeaturesSection;