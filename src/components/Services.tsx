/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ChefHat, Truck, ShoppingCart, Calendar, CheckCircle } from 'lucide-react';
import { ServiceItem } from '../types';

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'fabricacion',
    title: 'Fabricación Artesana',
    description: 'Elaboramos nuestros polos en nuestro obrador con frutas enteras seleccionadas en su punto óptimo de madurez. Apostamos por lo natural, sin conservantes ni aditivos de laboratorio.',
    iconName: 'ChefHat',
    badge: 'Producción Local',
    features: ['Fruta 100% natural', 'Fórmula baja en azúcares', 'Opciones veganas y sin gluten', 'Calidad gourmet garantizada'],
  },
  {
    id: 'distribucion',
    title: 'Distribución en Madrid',
    description: 'Servimos a toda la Comunidad de Madrid garantizando la cadena de frío permanente. Contamos con logística especializada en congelados para que los polos lleguen perfectos.',
    iconName: 'Truck',
    badge: 'Cadena de Frío',
    features: ['Logística certificada', 'Reparto regular y flexible', 'Atención directa en local', 'Puntualidad garantizada'],
  },
  {
    id: 'mayoristas',
    title: 'Pedidos Mayoristas',
    description: 'Suministramos a cafeterías, heladerías, quioscos, hoteles y tiendas de barrio. Diseñamos tarifas especiales por volumen para que ofrezcas un producto premium con excelentes márgenes.',
    iconName: 'ShoppingCart',
    badge: 'Tarifas B2B',
    features: ['Precios directos de fábrica', 'Expositores para tu local', 'Formación de producto', 'Márgenes altamente rentables'],
  },
  {
    id: 'eventos',
    title: 'Eventos & Festivales',
    description: 'Llevamos la alegría de Lovacchio a tus eventos: bodas, cumpleaños, fiestas de empresa, ferias o festivales en Madrid. Ponemos a tu disposición carritos vintage de helados preciosos.',
    iconName: 'Calendar',
    badge: 'Soluciones a Medida',
    features: ['Carritos de helados retro', 'Personalización de sabores', 'Servicio con camarero', 'Montaje rápido y limpio'],
  },
];

const getIcon = (name: string) => {
  switch (name) {
    case 'ChefHat':
      return <ChefHat className="text-brand-pink" size={32} />;
    case 'Truck':
      return <Truck className="text-brand-celeste" size={32} />;
    case 'ShoppingCart':
      return <ShoppingCart className="text-brand-pink" size={32} />;
    case 'Calendar':
      return <Calendar className="text-brand-celeste" size={32} />;
    default:
      return <ChefHat className="text-brand-pink" size={32} />;
  }
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-transparent relative overflow-hidden">
      
      {/* Background shapes - customized to frosted glass blur standard */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-pink/20 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-brand-celeste/20 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-brand-celeste font-fredoka font-semibold tracking-wider uppercase text-sm px-3.5 py-1.5 bg-white/40 backdrop-blur-md rounded-full border border-white/30">
            📦 ¿Qué Ofrecemos?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-fredoka font-bold text-brand-dark">
            Todo lo que necesitas para disfrutar y vender helados premium
          </h2>
          <p className="text-lg text-brand-dark/70 font-sans max-w-2xl mx-auto">
            Desde el campo hasta la boca del cliente, nos encargamos de todo el proceso con mimo, profesionalidad y el toque único de Lovacchio.
          </p>
        </div>

        {/* Bento Grid with Glassmorphism Cards */}
        <div id="services-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              id={`service-card-${service.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect rounded-[2.5rem] p-8 hover:glass-effect-strong shadow-xl hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Header of service block: Icon and Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 rounded-2xl bg-white/50 group-hover:bg-white/80 transition-colors duration-300 border border-white/30 shadow-xs">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="font-fredoka text-xs font-bold px-3 py-1 bg-white/40 backdrop-blur-xs text-brand-dark/80 rounded-full border border-white/30">
                    {service.badge}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-fredoka font-bold text-brand-dark mb-3 group-hover:text-brand-pink transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-brand-dark/70 font-normal leading-relaxed mb-6 font-sans">
                  {service.description}
                </p>
              </div>

              {/* Bullet features list */}
              <div className="border-t border-white/30 pt-5 mt-auto">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-xs sm:text-sm text-brand-dark/80 font-sans">
                      <CheckCircle size={15} className="text-brand-celeste shrink-0 stroke-[2.5px]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Madrid local notice banner with Frosted Glass styling */}
        <motion.div
          id="local-notice-banner"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 glass-effect-strong overflow-hidden rounded-[2.5rem] shadow-xl p-8 flex flex-col lg:flex-row items-center justify-between gap-6 max-w-5xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
            <div className="text-3xl">🇪🇸</div>
            <div className="space-y-1">
              <h4 className="font-fredoka text-lg font-bold text-brand-dark">Obrador artesanal ubicado en Madrid</h4>
              <p className="text-sm text-brand-dark/70 font-sans">
                Fabricamos de forma local bajo estrictas normas de bioseguridad, garantizando un producto con huella de carbono reducida y apoyo al comercio de proximidad.
              </p>
            </div>
          </div>
          <div className="whitespace-nowrap font-fredoka font-semibold text-brand-celeste-dark bg-white/45 backdrop-blur-xs px-4 py-2 rounded-full border border-white/40 text-xs sm:text-sm shadow-xs">
            📍 Servicio Diario Madrid y Alrededores
          </div>
        </motion.div>

      </div>
    </section>
  );
}
