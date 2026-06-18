/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, Mail, MapPin, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  return (
    <footer id="footer-section" className="bg-[#1c2626]/90 backdrop-blur-xl text-slate-300 pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
      
      {/* Soft decorative background circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-pink/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-celeste/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 select-text pb-12 border-b border-white/5">
          
          {/* Column 1: Brand details */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex flex-col cursor-pointer" onClick={() => onScrollToSection('hero')}>
              <span className="font-pacifico text-4xl text-brand-pink tracking-wide">
                Lovacchio
              </span>
              <span className="font-fredoka text-[11px] uppercase font-bold tracking-[0.2em] text-brand-celeste mt-1">
                Helados Gourmet
              </span>
            </div>
            
            <p className="text-sm font-sans text-slate-400 font-normal leading-relaxed max-w-sm">
              Tu obrador artesanal de helados tipo polos frutales en Madrid, España. Recetas frescas elaboradas con fruta real seleccionada de temporada para mayoristas, reventa y eventos memorables.
            </p>

            <div className="flex flex-col space-y-3 pt-2 text-sm">
              <a
                href="tel:+34634885047"
                className="flex items-center space-x-3 text-slate-300 hover:text-brand-pink transition-colors"
              >
                <Phone size={16} className="text-brand-pink shrink-0" />
                <span>+34 634 885 047</span>
              </a>

              <span className="flex items-center space-x-3 text-slate-300">
                <MapPin size={16} className="text-brand-celeste shrink-0" />
                <span>Madrid, España</span>
              </span>

              <span className="flex items-center space-x-3 text-slate-300">
                <Mail size={16} className="text-brand-pink shrink-0" />
                <span>hola@lovacchiohelados.es</span>
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="font-fredoka text-base font-bold text-white uppercase tracking-wider">Enlaces rápidos</h4>
            <div className="flex flex-col space-y-3.5 text-sm font-fredoka">
              <button
                onClick={() => onScrollToSection('flavors')}
                className="text-left text-slate-400 hover:text-brand-pink cursor-pointer transition-colors"
              >
                🍓 Catálogo de Sabores
              </button>
              <button
                onClick={() => onScrollToSection('services')}
                className="text-left text-slate-400 hover:text-brand-pink cursor-pointer transition-colors"
              >
                📦 Servicios de Obrador
              </button>
              <button
                onClick={() => onScrollToSection('quote')}
                className="text-left text-slate-400 hover:text-brand-pink cursor-pointer transition-colors"
              >
                📞 Cotización Interactiva
              </button>
            </div>
          </div>

          {/* Column 3: Highlighting coverage */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="font-fredoka text-base font-bold text-white uppercase tracking-wider">¿Dónde Servimos?</h4>
            <p className="text-sm font-sans text-slate-400 leading-relaxed">
              Abastecemos diariamente a cafeterías, tiendas y eventos en toda la <strong>Comunidad de Madrid</strong>.
            </p>
            
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-xs text-slate-400 space-y-2 font-sans">
              <p className="font-semibold text-brand-celeste">📢 Solicita muestrario gratuito</p>
              <p>¿Tienes una cafetería o negocio en Madrid? Pídenos una prueba sin costes de nuestros polos estrella enviándonos tus datos por WhatsApp.</p>
            </div>
          </div>

        </div>

        {/* Closing details & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs font-sans text-slate-500">
          <p className="text-center sm:text-left flex items-center justify-center gap-1">
            Hecho con <Heart size={12} fill="#f48b94" className="text-brand-pink shrink-0 animate-pulse" /> y fruta real en Madrid. 
            <span>Lovacchio Helados Gourmet © 2026.</span>
          </p>

          <button
            onClick={() => onScrollToSection('hero')}
            className="flex items-center space-x-1.5 hover:text-white transition-colors duration-200 cursor-pointer text-slate-400 font-fredoka py-1 px-3 border border-slate-700/60 rounded-full"
          >
            <span>Subir</span>
            <ArrowUp size={12} />
          </button>
        </div>

      </div>
    </footer>
  );
}
