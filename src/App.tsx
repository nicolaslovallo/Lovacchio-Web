/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Flavors from './components/Flavors';
import Services from './components/Services';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Gift, Sparkles, MapPin } from 'lucide-react';

export default function App() {
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([]);

  // Smooth scroll handler
  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Toggle dynamic flavor checklist
  const handleToggleFlavor = (flavorId: string) => {
    setSelectedFlavors((prev) =>
      prev.includes(flavorId)
        ? prev.filter((id) => id !== flavorId)
        : [...prev, flavorId]
    );
  };

  return (
    <div id="app-root" className="min-h-screen bg-gradient-to-br from-[#FFD1DC] via-[#E0F7FA]/90 to-[#FFD5E1] flex flex-col relative select-none">
      
      {/* Absolute floating ambient blobs to add extra refraction depth */}
      <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-brand-pink/30 rounded-full blur-[140px] -z-10 pointer-events-none"></div>
      <div className="absolute top-[55%] right-[15%] w-[450px] h-[450px] bg-brand-celeste/25 rounded-full blur-[140px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[5%] w-[380px] h-[380px] bg-brand-pink/20 rounded-full blur-[140px] -z-10 pointer-events-none"></div>

      {/* 1. Header Navigation */}
      <Navbar onScrollToSection={handleScrollToSection} />

      {/* Main Sections */}
      <main className="flex-grow">
        
        {/* 2. Hero Presentation Panel */}
        <Hero onScrollToSection={handleScrollToSection} />

        {/* 3. Specialized Business Services Panel (Fabricación, Mayoristas, Eventos) */}
        <Services />

        {/* 4. Interactive Popsicles Catalog / Flavors Selection */}
        <Flavors
          selectedFlavors={selectedFlavors}
          onToggleFlavor={handleToggleFlavor}
          onScrollToQuote={() => handleScrollToSection('quote')}
        />

        {/* 5. Custom Interactive Quotation and WhatsApp Generator Form */}
        <QuoteForm
          selectedFlavors={selectedFlavors}
          onToggleFlavor={handleToggleFlavor}
        />

      </main>

      {/* 6. Page Footer */}
      <Footer onScrollToSection={handleScrollToSection} />

      {/* 7. Breathing Floating WhatsApp Button Accent */}
      <motion.div
        id="floating-whatsapp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center group cursor-pointer"
      >
        <div className="mr-3 bg-white text-brand-dark/95 px-4 py-2 rounded-full border border-brand-pink/15 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-fredoka font-semibold text-xs pointer-events-none">
          ¿Hablamos por WhatsApp? 🍦
        </div>
        <a
          href="https://wa.me/34634885047?text=%C2%A1Hola%20Lovacchio%21%20%F0%9F%8D%A6%20Me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20polos%20gourmet."
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-brand-pink hover:bg-brand-pink-dark text-white rounded-full flex items-center justify-center shadow-lg hover:rotate-6 hover:scale-105 transition-all duration-300 relative"
        >
          <MessageCircle size={28} fill="white" className="relative top-[1px]" />
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-brand-celeste border-2 border-white rounded-full animate-ping"></span>
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-brand-celeste border-2 border-white rounded-full"></span>
        </a>
      </motion.div>

    </div>
  );
}
