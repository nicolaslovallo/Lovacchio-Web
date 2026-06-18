/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Star, ShoppingBag, MapPin } from 'lucide-react';
import heroPopsicles from '../assets/images/gourmet_popsicles_hero_1781784196931.jpg';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  return (
    <div id="hero-section" className="relative overflow-hidden pt-10 pb-16 md:py-24">
      {/* Dynamic blurred background blobs as per Frosted Glass theme instructions */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-pink/30 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute top-40 -left-20 w-80 h-80 bg-brand-celeste/25 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero text panel */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <motion.div
              id="hero-badge"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-white/40 backdrop-blur-md border border-white/30 px-4 py-1.5 rounded-full text-brand-pink-dark font-fredoka font-semibold text-xs sm:text-sm bubble-shadow"
            >
              <Sparkles size={14} className="animate-pulse text-brand-pink" />
              <span>Fabricación Propia • Polos de Fruta Real</span>
            </motion.div>

            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-fredoka font-bold text-brand-dark leading-[1.05]"
            >
              EL SABOR <span className="text-brand-pink relative inline-block">NATURAL<span className="absolute left-0 bottom-0.5 w-full h-[6px] bg-brand-celeste/30 rounded-full"></span></span> DEL FRÍO GOURMET.
            </motion.h1>

            <motion.p
              id="hero-description"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-brand-dark/75 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans"
            >
              En <strong className="text-brand-pink font-semibold">Lovacchio</strong> creamos helados artesanales tipo polos hechos con fruta 100% natural. Frescura pura para tus eventos, festivales y comercios en toda la Comunidad de Madrid.
              <span className="block mt-2 font-medium text-brand-celeste-dark text-base sm:text-lg">
                🍧 De nuestro obrador artesanal directo a tu paladar o negocio.
              </span>
            </motion.p>

            {/* Float tags - Styled as Frosted Glass Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2 text-xs sm:text-sm"
            >
              <span className="flex items-center space-x-1.5 bg-white/30 backdrop-blur-md text-brand-dark/90 px-3.5 py-2 rounded-full border border-white/40 bubble-shadow font-fredoka">
                <MapPin size={14} className="text-brand-celeste" />
                <span>Madrid, España</span>
              </span>
              <span className="flex items-center space-x-1.5 bg-white/30 backdrop-blur-md text-brand-dark/90 px-3.5 py-2 rounded-full border border-white/40 bubble-shadow font-fredoka">
                <Star size={14} className="text-brand-pink" fill="#f48b94" />
                <span>Calidad Gourmet</span>
              </span>
              <span className="flex items-center space-x-1.5 bg-white/30 backdrop-blur-md text-brand-dark/90 px-3.5 py-2 rounded-full border border-white/40 bubble-shadow font-fredoka">
                <ShoppingBag size={14} className="text-brand-celeste" />
                <span>Mayoristas & Distribución</span>
              </span>
            </motion.div>

            {/* Calls to Action */}
            <motion.div
              id="hero-actions"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <button
                id="hero-cta-primary"
                onClick={() => onScrollToSection('quote')}
                className="w-full sm:w-auto bg-brand-pink hover:bg-brand-pink-dark text-white font-fredoka font-bold px-8 py-4 rounded-2xl text-lg bubble-shadow transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2.5 cursor-pointer"
              >
                <span>Pedir Presupuesto</span>
                <ArrowRight size={20} />
              </button>

              <button
                id="hero-cta-secondary"
                onClick={() => onScrollToSection('flavors')}
                className="w-full sm:w-auto bg-white/40 hover:bg-white/70 backdrop-blur-md text-brand-celeste-dark border border-white/50 font-fredoka font-bold px-8 py-3.5 rounded-2xl text-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2 cursor-pointer shadow-xs"
              >
                <span>Ver Sabores 🍒</span>
              </button>
            </motion.div>
          </div>

          {/* Hero graphic / Image Panel with gorgeous frames */}
          <div className="lg:col-span-5 flex justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-[420px] aspect-square"
            >
              {/* Outer decorative ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-pink/20 to-brand-celeste/20 rounded-[2.5rem] rotate-[6deg] -z-10 animate-pulse"></div>

              {/* Main image container with frosted border */}
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden bubble-shadow border-4 border-white/60 relative bg-white/45 backdrop-blur-md">
                <img
                  id="hero-popsicles-img"
                  src={heroPopsicles}
                  alt="Gourmet Popsicles Lovacchio"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Float tag on top of the image - styled frosted glass */}
                <div className="absolute bottom-6 right-6 bg-white/50 backdrop-blur-lg p-4 rounded-2xl border border-white/40 bubble-shadow max-w-[170px]">
                  <p className="text-[11px] uppercase font-bold tracking-[0.1em] text-brand-pink">Lovacchio Helados</p>
                  <p className="text-xs font-semibold text-brand-dark/95 mt-0.5 font-fredoka">Fruta 100% natural, directo de Madrid</p>
                </div>
              </div>

              {/* Little cute bubbles floating around image */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/40 backdrop-blur-md border border-white/50 rounded-full bubble-shadow flex items-center justify-center text-brand-pink text-xs font-bold animate-bounce hidden sm:flex">
                🍓
              </div>
              <div className="absolute top-1/2 -left-6 w-10 h-10 bg-white/40 backdrop-blur-md border border-white/50 rounded-full bubble-shadow flex items-center justify-center text-brand-celeste text-xs font-bold animate-pulse hidden sm:flex">
                🍋
              </div>
              <div className="absolute -bottom-2 -left-2 w-14 h-14 bg-white/50 backdrop-blur-md border border-white/55 rounded-full bubble-shadow flex items-center justify-center text-brand-celeste text-lg font-bold animate-bounce hidden sm:flex" style={{ animationDelay: '1s' }}>
                🧊
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
