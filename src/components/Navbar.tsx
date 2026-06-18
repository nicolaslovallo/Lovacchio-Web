/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Heart, Calendar } from 'lucide-react';

interface NavbarProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Navbar({ onScrollToSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Nuestros Polos', id: 'flavors' },
    { name: 'Servicios', id: 'services' },
    { name: 'Presupuesto', id: 'quote' },
  ];

  return (
    <nav id="app-navbar" className="sticky top-0 z-50 bg-white/40 backdrop-blur-xl border-b border-white/30 shadow-xs transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Brand Logo - Styled to perfectly match the design of the provided Lovacchio logo */}
          <div 
            id="nav-logo"
            className="flex flex-col items-center cursor-pointer group"
            onClick={() => onScrollToSection('hero')}
          >
            <span className="font-pacifico text-3xl text-brand-pink tracking-wide leading-none group-hover:scale-105 transition-transform duration-300">
              Lovacchio
            </span>
            <span className="font-fredoka text-[10px] uppercase font-bold tracking-[0.18em] text-brand-celeste mt-0.5 leading-none">
              Helados Gourmet
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => onScrollToSection(link.id)}
                className="font-fredoka font-medium text-brand-dark/80 hover:text-brand-pink cursor-pointer transition-colors duration-200 text-base"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Contact & CTA Area */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              id="nav-call-btn"
              href="tel:+34634885047"
              className="flex items-center space-x-2 text-brand-dark/80 hover:text-brand-celeste transition-colors duration-200 font-fredoka font-medium"
            >
              <Phone size={18} className="text-brand-celeste" />
              <span>+34 634 885 047</span>
            </a>
            
            <button
              id="nav-cta-btn"
              onClick={() => onScrollToSection('quote')}
              className="bg-brand-pink/90 hover:bg-brand-pink text-white font-fredoka font-semibold px-5 py-2.5 rounded-full bubble-shadow backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center space-x-2 text-sm"
            >
              <Heart size={16} fill="white" />
              <span>Pide Tu Presupuesto</span>
            </button>
          </div>

          {/* Mobile hamburger menu button */}
          <div className="md:hidden flex items-center">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-dark hover:text-brand-pink p-2 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/70 backdrop-blur-xl border-t border-white/20 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  id={`mobile-nav-link-${link.id}`}
                  onClick={() => {
                    setIsOpen(false);
                    onScrollToSection(link.id);
                  }}
                  className="block w-full text-left font-fredoka font-medium text-lg text-brand-dark/90 hover:text-brand-pink py-2 px-3 rounded-lg hover:bg-white/40 transition-all duration-200"
                >
                  {link.name}
                </button>
              ))}
              
              <div className="h-px bg-white/40 my-3"></div>
              
              <div className="flex flex-col space-y-3 px-3">
                <a
                  id="mobile-nav-phone"
                  href="tel:+34634885047"
                  className="flex items-center space-x-3 text-brand-dark font-fredoka font-medium text-base py-1"
                >
                  <Phone size={18} className="text-brand-celeste" />
                  <span>+34 634 885 047</span>
                </a>

                <div className="text-xs text-brand-dark/50 font-normal ps-7">
                  📍 Madrid • Distribución, Eventos y Mayoristas
                </div>
                
                <button
                  id="mobile-nav-cta"
                  onClick={() => {
                    setIsOpen(false);
                    onScrollToSection('quote');
                  }}
                  className="w-full bg-brand-pink hover:bg-brand-pink-dark text-white font-fredoka font-semibold py-3 px-4 rounded-full text-center bubble-shadow transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer mt-2"
                >
                  <Heart size={16} fill="white" />
                  <span>Pide Tu Presupuesto</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
