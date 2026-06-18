/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Flame, Award, Heart, HelpCircle, Citrus, Snowflake } from 'lucide-react';
import { Flavor } from '../types';

interface FlavorsProps {
  selectedFlavors: string[];
  onToggleFlavor: (flavorId: string) => void;
  onScrollToQuote: () => void;
}

const FLAVORS_DATA: Flavor[] = [
  {
    id: 'fresa',
    name: 'Fresa del Huerto',
    description: 'Nuestra receta estrella elaborada con fresas enteras frescas trituradas. Dulce, clásica y absolutamente natural.',
    type: 'fruit',
    ingredients: ['Fresas naturales 85%', 'Agua mineral', 'Azúcar de caña orgánico', 'Zumo de limón'],
    color: 'bg-[#ffccd0]',
    textColor: 'text-[#d63d50]',
    badge: '★ Best Seller',
    calories: '65 kcal',
  },
  {
    id: 'mango',
    name: 'Mango & Maracuyá',
    description: 'Una explosión tropical de mangos hilados maduros con el toque ácido y perfume del maracuyá real.',
    type: 'fruit',
    ingredients: ['Mango maduro 60%', 'Zumo de maracuyá 25%', 'Agua mineral', 'Pimienta rosa silvestre'],
    color: 'bg-[#ffecd1]',
    textColor: 'text-[#e07a10]',
    badge: 'Popular',
    calories: '72 kcal',
  },
  {
    id: 'limon',
    name: 'Limón y Hierbabuena',
    description: 'Súper refrescante. Zumo de limones maduros recién exprimidos con hojas de hierbabuena fresca machacadas.',
    type: 'citrus',
    ingredients: ['Zumo de limón natural 45%', 'Hojas de hierbabuena fresca', 'Ralladura de limón', 'Pizca de jengibre'],
    color: 'bg-[#edfbf9]',
    textColor: 'text-[#1a9c84]',
    badge: 'Refrescante 🧊',
    calories: '52 kcal',
  },
  {
    id: 'sandia',
    name: 'Sandía & Albahaca',
    description: 'Ligera e hidratante. Sandías dulces de temporada trituradas y aromatizadas con un velo de albahaca fresca.',
    type: 'citrus',
    ingredients: ['Pulpa de sandía de temporada 88%', 'Hojas de albahaca fresca infusionadas', 'Zumo de lima'],
    color: 'bg-[#ffd3e1]',
    textColor: 'text-[#c93663]',
    badge: 'Veraniego ☀️',
    calories: '48 kcal',
  },
  {
    id: 'frambuesa_coco',
    name: 'Frambuesa & Coco',
    description: 'Hermoso polo de dos capas. Base sedosa de leche de coco ligera con una corona ácida de frambruesas frescas silvestre.',
    type: 'creamy',
    ingredients: ['Leche de coco ecológica', 'Frambuesas naturales 35%', 'Néctar de agave', 'Pizca de vainilla'],
    color: 'bg-[#fbe3f7]',
    textColor: 'text-[#a22b82]',
    badge: 'Gourmet ✨',
    calories: '89 kcal',
  },
  {
    id: 'pina_colada',
    name: 'Piña Colada Real',
    description: 'Helado cremoso y refrescante de piñas naturales asadas y licuadas combinadas con el mejor coco batido. Sin alcohol.',
    type: 'creamy',
    ingredients: ['Piña natural 50%', 'Crema de coco', 'Agua de coco', 'Zumo de lima fresco'],
    color: 'bg-[#fffbd0]',
    textColor: 'text-[#9c8405]',
    badge: 'Favorito',
    calories: '94 kcal',
  },
];

export default function Flavors({ selectedFlavors, onToggleFlavor, onScrollToQuote }: FlavorsProps) {
  const [filterType, setFilterType] = useState<'all' | 'fruit' | 'citrus' | 'creamy'>('all');

  const filteredFlavors = filterType === 'all'
    ? FLAVORS_DATA
    : FLAVORS_DATA.filter((f) => f.type === filterType);

  return (
    <section id="flavors" className="py-20 bg-transparent relative overflow-hidden">
      {/* Background shapes - customized to frosted glass blur standard */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-brand-celeste/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-brand-pink/20 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header container */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-brand-pink font-fredoka font-semibold tracking-wider uppercase text-sm px-3.5 py-1.5 bg-white/40 backdrop-blur-md rounded-full border border-white/30">
            🍓 Nuestros Sabores
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-fredoka font-bold text-brand-dark">
            Fórmulas refrescantes elaboradas con fruta de verdad
          </h2>
          <p className="text-lg text-brand-dark/70 font-sans max-w-2xl mx-auto">
            Hacemos que lo natural sea delicioso. Sin aditivos extraños, sin conservantes químicos y llenos de sabor. ¡Selecciona los sabores que te interesan para armar tu presupuesto!
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            <button
              onClick={() => setFilterType('all')}
              className={`px-5 py-2 rounded-full font-fredoka font-semibold text-sm transition-all duration-300 cursor-pointer ${
                filterType === 'all'
                  ? 'bg-brand-pink text-white bubble-shadow'
                  : 'bg-white/40 backdrop-blur-md text-brand-dark/75 border border-white/40 hover:bg-white/70 shadow-xs'
              }`}
            >
              Todos ({FLAVORS_DATA.length})
            </button>
            <button
              onClick={() => setFilterType('fruit')}
              className={`px-5 py-2 rounded-full font-fredoka font-semibold text-sm transition-all duration-300 cursor-pointer ${
                filterType === 'fruit'
                  ? 'bg-brand-pink text-white bubble-shadow'
                  : 'bg-white/40 backdrop-blur-md text-brand-dark/75 border border-white/40 hover:bg-white/70 shadow-xs'
              }`}
            >
              🍓 100% Agua y Fruta
            </button>
            <button
              onClick={() => setFilterType('citrus')}
              className={`px-5 py-2 rounded-full font-fredoka font-semibold text-sm transition-all duration-300 cursor-pointer ${
                filterType === 'citrus'
                  ? 'bg-brand-pink text-white bubble-shadow'
                  : 'bg-white/40 backdrop-blur-md text-brand-dark/75 border border-white/40 hover:bg-white/70 shadow-xs'
              }`}
            >
              🍋 Cítricos & Exóticos
            </button>
            <button
              onClick={() => setFilterType('creamy')}
              className={`px-5 py-2 rounded-full font-fredoka font-semibold text-sm transition-all duration-300 cursor-pointer ${
                filterType === 'creamy'
                  ? 'bg-brand-pink text-white bubble-shadow'
                  : 'bg-white/40 backdrop-blur-md text-brand-dark/75 border border-white/40 hover:bg-white/70 shadow-xs'
              }`}
            >
              🥥 Cremosos con Coco
            </button>
          </div>
        </div>

        {/* Flavors Grid */}
        <div id="flavors-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFlavors.map((flavor, index) => {
            const isSelected = selectedFlavors.includes(flavor.id);
            return (
              <motion.div
                key={flavor.id}
                id={`flavor-card-${flavor.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/40 flex flex-col justify-between ${flavor.color}/40 backdrop-blur-md min-h-[440px]`}
              >
                {/* Visual bubble layout */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-8 -mt-8 pointer-events-none"></div>
                
                <div className="p-8 pb-3 relative z-10">
                  {/* Card head: badge & calories */}
                  <div className="flex justify-between items-center mb-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold font-fredoka ${flavor.textColor} bg-white/70 backdrop-blur-sm shadow-xs border border-white/40`}>
                      {flavor.badge}
                    </span>
                    {flavor.calories && (
                      <span className="text-xs font-mono font-medium text-brand-dark/70 bg-white/40 border border-white/30 px-2.5 py-0.5 rounded-lg">
                        {flavor.calories}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className={`text-2xl sm:text-3xl font-fredoka font-bold ${flavor.textColor} mb-3`}>
                    {flavor.name}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-brand-dark/80 font-normal leading-relaxed mb-6 font-sans">
                    {flavor.description}
                  </p>

                  {/* Ingredients block */}
                  <div className="bg-white/50 backdrop-blur-xs rounded-2xl p-4 border border-white/30 shadow-xs">
                    <h4 className="text-[11px] uppercase tracking-wider font-bold text-brand-dark/60 font-fredoka mb-2 flex items-center">
                      <Citrus size={12} className="mr-1.5 text-brand-celeste" />
                      Ingredientes reales
                    </h4>
                    <p className="text-xs text-brand-dark/90 leading-relaxed font-sans font-medium">
                      {flavor.ingredients.join(', ')}
                    </p>
                  </div>
                </div>

                {/* Footer interactive checkout bar */}
                <div className="p-6 pt-2 bg-white/45 backdrop-blur-sm border-t border-white/30 flex items-center justify-between mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-brand-dark/50 font-fredoka">Presupuesto</span>
                    <span className="text-xs text-brand-dark/80 font-sans font-medium">Click para cotizar</span>
                  </div>

                  <button
                    id={`flavor-select-btn-${flavor.id}`}
                    onClick={() => onToggleFlavor(flavor.id)}
                    className={`flex items-center space-x-1.5 px-4 py-2.5 rounded-full font-fredoka font-bold text-xs cursor-pointer transition-all duration-300 ${
                      isSelected
                        ? 'bg-brand-celeste text-white bubble-shadow'
                        : 'bg-white/80 hover:bg-white text-brand-pink border border-brand-pink/25 shadow-xs'
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <Check size={14} className="stroke-[3px]" />
                        <span>¡Seleccionado!</span>
                      </>
                    ) : (
                      <>
                        <Heart size={13} fill="currentColor" className="opacity-75" />
                        <span>Me Interesa</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic summary message helping flow to checkout */}
        {selectedFlavors.length > 0 && (
          <motion.div
            id="flavors-selection-banner"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-12 glass-effect-pink border border-white/50 p-6 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4 max-w-4xl mx-auto bubble-shadow shadow-xl"
          >
            <div>
              <p className="font-fredoka text-lg font-bold text-brand-pink-dark">
                🎒 Tienes {selectedFlavors.length} sabor{selectedFlavors.length > 1 ? 'es seleccionados' : 'o seleccionado'} para tu cotización
              </p>
              <p className="text-sm text-brand-dark/75 font-sans">
                Los sabores seleccionados se rellenarán automáticamente en el formulario de cotización de abajo.
              </p>
            </div>
            <button
              id="flavors-goToQuote-btn"
              onClick={onScrollToQuote}
              className="bg-brand-pink hover:bg-brand-pink-dark text-white font-fredoka font-bold px-6 py-3 rounded-2xl text-sm bubble-shadow transition-all cursor-pointer whitespace-nowrap"
            >
              Completar Presupuesto ✍️
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
}
