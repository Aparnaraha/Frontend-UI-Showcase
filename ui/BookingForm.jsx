import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar, Clock, User } from 'lucide-react';

// --- AESTHETIC PALETTE (Sourced from your files) ---
const ACCENT_PRIMARY = "#C79C4B"; // Gold
const ACCENT_PURPLE = "#7B3B6B";
const TEXT_DARK = "#1E4567";     // Dark Blue
const BG_LIGHT = "#F8F7F4";      // Cream White

// ---------------------------------------------------------------------
// ## Component: WhatsAppBookingForm
// ---------------------------------------------------------------------

const WhatsAppBookingForm = () => {
    // 1. State for all required form fields
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        time: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    // Update state on input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // 2. WhatsApp Submission Logic
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const { name, phone, date, time } = formData;
        
        // WhatsApp number: +91 90400 98020 (encoded for URL)
        const WHATSAPP_NUMBER = '919040098020';
        
        // 3. Construct the Message
        const message = `
        **New Appointment Request**
        Name: ${name}
        Phone: ${phone}
        Date: ${date}
        Time: ${time}
        
        *Please confirm availability.*
        `.trim();
        
        // 4. Encode the message for the URL
        const encodedMessage = encodeURIComponent(message);
        
        // 5. Build the final WhatsApp URL
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

        // Open the URL in a new window
        window.open(whatsappUrl, '_blank');

        // Optional: Clear form after submission
        setTimeout(() => {
            setFormData({ name: '', phone: '', date: '', time: '' });
            setIsSubmitting(false);
        }, 1000);
    };
    
    // Framer Motion variant for the form container
    const formVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const isFormValid = formData.name && formData.phone && formData.date && formData.time;

    return (
        <motion.div
            className="p-6 md:p-10 rounded-xl shadow-2xl max-w-lg mx-auto"
            style={{ backgroundColor: BG_LIGHT, border: `1px solid ${ACCENT_PURPLE}20` }}
            variants={formVariants}
            initial="hidden"
            animate="visible"
        >
            <h3 
                className="text-2xl font-bold mb-6 text-center" 
                style={{ color: TEXT_DARK }}
            >
                Book Your Premium Experience
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Name Input */}
                <div className="relative">
                    <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: ACCENT_PRIMARY }} />
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Full Name"
                        required
                        className="w-full pl-10 pr-4 py-3 border-b-2 outline-none transition-all duration-300"
                        style={{ borderColor: ACCENT_PURPLE + '40', color: TEXT_DARK, backgroundColor: BG_LIGHT }}
                    />
                </div>

                {/* 2. Phone Number Input */}
                <div className="relative">
                    <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: ACCENT_PRIMARY }} />
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        required
                        pattern="[0-9]{10,15}" // Basic validation for 10-15 digits
                        className="w-full pl-10 pr-4 py-3 border-b-2 outline-none transition-all duration-300"
                        style={{ borderColor: ACCENT_PURPLE + '40', color: TEXT_DARK, backgroundColor: BG_LIGHT }}
                    />
                </div>

                <div className="flex space-x-4">
                    {/* 3. Date Input */}
                    <div className="relative flex-1">
                        <Calendar size={18} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: ACCENT_PRIMARY }} />
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border-b-2 outline-none transition-all duration-300 appearance-none"
                            style={{ borderColor: ACCENT_PURPLE + '40', color: TEXT_DARK, backgroundColor: BG_LIGHT }}
                        />
                    </div>

                    {/* 4. Time Input */}
                    <div className="relative flex-1">
                        <Clock size={18} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: ACCENT_PRIMARY }} />
                        <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border-b-2 outline-none transition-all duration-300 appearance-none"
                            style={{ borderColor: ACCENT_PURPLE + '40', color: TEXT_DARK, backgroundColor: BG_LIGHT }}
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting || !isFormValid}
                    className="w-full py-3 mt-8 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center disabled:opacity-50"
                    style={{ 
                        backgroundColor: ACCENT_PRIMARY, // Gold background
                        color: TEXT_DARK, // Dark Blue Text for contrast
                        border: `1px solid ${ACCENT_PRIMARY}`,
                        boxShadow: `0 4px 10px ${ACCENT_PRIMARY}40`
                    }}
                >
                    {isSubmitting ? 'Opening WhatsApp...' : 'Book via WhatsApp'}
                </motion.button>

                <p className="text-xs text-center pt-2" style={{ color: TEXT_DARK + '80' }}>
                    A WhatsApp chat will open with your booking details.
                </p>
            </form>
        </motion.div>
    );
};

export default WhatsAppBookingForm;