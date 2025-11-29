// src/components/Layout/SiteLayout.jsx
import React, { useState, useEffect } from 'react';
import NavigationBar from './Navbar';
import TopFooter from './TopFooter';
import SiteFooter from './SiteFooter';
import EnquiryLocateUs from '../ui/EnquiryLocateUs';
import ServiceStepCounter from '../counters/ServiceSteps';
// import StillHaveQuestion from '../counters/StillHaveQuestions';
import FloatingButtons from './FloatingButton';

const SiteLayout = ({ children }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if the user has scrolled past the TopHeader (40px)
            if (window.scrollY > 40) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="flex flex-col min-h-screen relative">
            {/* TopHeader component will now scroll off-screen */}
            {/* <div className={`transition-all duration-300 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-10 opacity-100'}`}>
                <TopHeader />
            </div> */}

            {/* NavigationBar is now sticky and gets the scroll state */}
            <NavigationBar isScrolled={isScrolled} />

            {/* Main content with NO margin-top, it will flow correctly below the nav */}
            <main className="flex-grow">
                {children}
            </main>

            {/* <ServiceStepCounter /> */}
            {/* <TopFooter /> */}
            {/* <EnquiryLocateUs /> */}
            <SiteFooter />
            <FloatingButtons />
        </div>
    );
};

export default SiteLayout;
