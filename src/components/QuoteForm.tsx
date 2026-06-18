/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { QuoteState, Flavor } from '../types';
import { MessageSquare, Phone, Calendar, Send, ShoppingCart, HelpCircle, User, MapPin } from 'lucide-react';

interface QuoteFormProps {
  selectedFlavors: string[];
  onToggleFlavor: (flavorId: string) => void;
}

const ALL_FLAVORS_INFO = [
  { id: 'fresa', name: '🍓 Fresa del Huerto' },
  { id: 'mango', name: '🥭 Mango & Maracuyá' },
  { id: 'limon', name: '🍋 Limón y Hierbabuena' },
  { id: 'sandia', name: '🍉 Sandía & Albahaca' },
  { id: 'frambuesa_coco', name: '🥥 Frambuesa & Coco' },
  { id: 'pina_colada', name: '🍍 Piña Colada' },
];

export default function QuoteForm({ selectedFlavors, onToggleFlavor }: QuoteFormProps) {
  const [formData, setFormData] = useState<QuoteState>({
    clientType: 'mayorista',
    quantity: '100-300',
    flavorInterests: [...selectedFlavors],
    location: '',
    contactName: '',
    additionalNotes: '',
  });

  const [isSuccess, setIsSuccess] = useState(false);

  // Synchronize state when selectedFlavors changes from the catalog section
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      flavorInterests: [...selectedFlavors],
    }));
  }, [selectedFlavors]);

  const handleClientTypeChange = (type: 'mayorista' | 'distribuidor' | 'evento' | 'festival') => {
    setFormData({ ...formData, clientType: type });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFlavorToggle = (flavorId: string) => {
    onToggleFlavor(flavorId);
    // The useEffect will handle syncing back to formData
  };

  const generateWhatsAppUrl = () => {
    const phone = '34634885047'; // Clean user phone number
    const intro = `¡Hola Lovacchio! 🍦 He visto vuestra web de helados gourmet y me gustaría solicitar información/presupuesto.`;
    
    let typeDescription = '';
    if (formData.clientType === 'mayorista') typeDescription = '🛒 Pedidos Mayoristas (Tiendas/Locales)';
    if (formData.clientType === 'distribuidor') typeDescription = '🚚 Distribución / Reventa';
    if (formData.clientType === 'evento') typeDescription = '🎉 Evento Privado (Boda/Cumpleaños/Empresa)';
    if (formData.clientType === 'festival') typeDescription = '🎪 Festival o Feria Comercial';

    const clientName = formData.contactName ? `🧑‍💼 Nombre de contacto: ${formData.contactName}` : '';
    const locationInfo = formData.location ? `📍 Lugar de entrega/evento: ${formData.location}` : '';
    const quantityInfo = `🍧 Cantidad estimada de polos: ${formData.quantity} unidades`;
    
    // Convert flavor IDs to user-friendly names
    const flavorNames = formData.flavorInterests
      .map((id) => {
        const item = ALL_FLAVORS_INFO.find((f) => f.id === id);
        return item ? item.name : id;
      })
      .join(', ');
    const flavorsInfo = flavorNames ? `🍒 Sabores de interés: ${flavorNames}` : '🍒 Sabores de interés: Pendiente de seleccionar';

    const notesInfo = formData.additionalNotes ? `✉️ Comentarios/detalles del pedido: "${formData.additionalNotes}"` : '';

    const text = [
      intro,
      '',
      clientName,
      `💼 Tipo de servicio solicitado: ${typeDescription}`,
      quantityInfo,
      flavorsInfo,
      locationInfo,
      notesInfo,
      '',
      '¡Espero vuestra respuesta para definir los detalles de Lovacchio! Muchas gracias.'
    ]
      .filter((line) => line !== '')
      .join('\n');

    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    
    // Redirect after a slight delay for beautiful UX feedback
    setTimeout(() => {
      window.open(generateWhatsAppUrl(), '_blank');
      setIsSuccess(false);
    }, 1000);
  };

  return (
    <section id="quote" className="py-20 bg-transparent relative overflow-hidden">
      {/* Background shapes - customized to frosted glass blur standard */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-pink/20 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-brand-celeste/20 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Informative / Decorative Panel on the Left */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-brand-pink font-fredoka font-semibold tracking-wider uppercase text-sm px-3.5 py-1.5 bg-white/40 backdrop-blur-md rounded-full border border-white/30">
                📞 Cotización & Contacto
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-fredoka font-bold text-brand-dark leading-[1.12]">
                ¿Hablamos y organizamos tu pedido?
              </h2>
              <p className="text-base sm:text-lg text-brand-dark/70 font-sans leading-relaxed">
                Rellena nuestro configurador interactivo rápido para enviarnos toda la información de tu idea por WhatsApp. Te responderemos súper rápido con tarifas ajustadas y opciones disponibles.
              </p>
            </div>

            {/* Quick stats / highlights */}
            <div className="space-y-4 pt-4 border-t border-white/30">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/50 backdrop-blur-md border border-white/40 rounded-2xl shrink-0 text-brand-pink shadow-xs">
                  <MessageSquare size={20} fill="currentColor" />
                </div>
                <div>
                  <h4 className="font-fredoka font-bold text-brand-dark text-base">Contacto directo vía WhatsApp</h4>
                  <p className="text-xs sm:text-sm text-brand-dark/60 font-sans">Sin correos perdidos ni llamadas tediosas. Escríbenos en 1 click al <strong className="text-brand-pink font-semibold">+34 634 885 047</strong>.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/50 backdrop-blur-md border border-white/40 rounded-2xl shrink-0 text-brand-celeste shadow-xs">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-fredoka font-bold text-brand-dark text-base">¿Prefieres llamarnos?</h4>
                  <p className="text-xs sm:text-sm text-brand-dark/60 font-sans">Estamos encantados de atenderte por llamada directa para responder a tus dudas comerciales al instante.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/50 backdrop-blur-md border border-white/40 rounded-2xl shrink-0 text-brand-pink shadow-xs">
                  <Calendar size={20} />
                </div>
                <div>
                  <h4 className="font-fredoka font-bold text-brand-dark text-base">Servicio ágil en Madrid</h4>
                  <p className="text-xs sm:text-sm text-brand-dark/60 font-sans">Obrador local con plazos de entrega reducidos para atender roturas de stock o eventos imprevistos.</p>
                </div>
              </div>
            </div>

            {/* Call Direct Option layout - Styled Frosted Glass */}
            <div className="glass-effect-celeste rounded-[2.5rem] p-6 border border-white/50 text-center space-y-4 shadow-xl">
              <p className="font-fredoka font-bold text-brand-celeste-dark text-base sm:text-lg">📞 ¿Eres de llamadas directas?</p>
              <p className="text-xs sm:text-sm text-brand-dark/75 font-sans">Llámanos directamente en horario laboral y te resolveremos tu consulta mayorista o de eventos en el momento.</p>
              <a
                href="tel:+34634885047"
                className="inline-flex items-center space-x-2 bg-brand-celeste hover:bg-brand-celeste-dark text-white font-fredoka font-bold px-6 py-3 rounded-2xl bubble-shadow transition-all duration-300 transform hover:-translate-y-0.5 text-sm"
              >
                <Phone size={15} />
                <span>Llamar al +34 634 885 047</span>
              </a>
            </div>
          </div>

          {/* Interactive quotation form right side - Styled Elegant Frosted Glass Plate */}
          <div id="interactive-form-panel" className="lg:col-span-7">
            <div className="glass-effect rounded-[2.5rem] p-6 sm:p-10 border border-white/50 shadow-2xl relative">
              
              <div className="absolute top-0 right-10 w-24 h-24 bg-white/10 rounded-full pointer-events-none"></div>

              <form onSubmit={handleFormSubmit} className="space-y-6 sm:space-y-8">
                
                {/* Section 1: Contact info */}
                <div className="space-y-4">
                  <h3 className="font-fredoka font-bold text-lg text-brand-dark flex items-center">
                    <span className="w-6 h-6 rounded-full bg-brand-pink text-white flex items-center justify-center text-xs mr-2 font-bold font-fredoka">1</span>
                    ¿A quién nos dirigimos?
                  </h3>
                  
                  <div className="relative">
                    <label htmlFor="contactName" className="sr-only">Tu nombre o negocio</label>
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-brand-dark/50">
                      <User size={18} />
                    </div>
                    <input
                      type="text"
                      name="contactName"
                      id="contactName"
                      required
                      value={formData.contactName}
                      onChange={handleInputChange}
                      placeholder="Tu nombre completo o negocio (ej. Cafetería Sol)"
                      className="w-full glass-input focus:bg-white rounded-2xl py-3.5 pl-11 pr-4 text-sm sm:text-base outline-none font-sans"
                    />
                  </div>
                </div>

                {/* Section 2: Inquiry category */}
                <div className="space-y-4">
                  <h3 className="font-fredoka font-bold text-lg text-brand-dark flex items-center">
                    <span className="w-6 h-6 rounded-full bg-brand-pink text-white flex items-center justify-center text-xs mr-2 font-bold font-fredoka">2</span>
                    ¿Qué tipo de servicio necesitas?
                  </h3>

                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => handleClientTypeChange('mayorista')}
                      className={`p-4 rounded-2xl transition-all duration-300 cursor-pointer flex flex-col items-center justify-center gap-1.5 ${
                        formData.clientType === 'mayorista'
                          ? 'border border-brand-pink bg-brand-pink-light/70 text-brand-pink-dark font-semibold shadow-xs'
                          : 'glass-button border-white/30 text-brand-dark/75 hover:bg-white/80'
                      }`}
                    >
                      <ShoppingCart size={18} className="text-brand-pink" />
                      <span className="text-xs sm:text-sm font-fredoka">Pedidos Mayoristas</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleClientTypeChange('distribuidor')}
                      className={`p-4 rounded-2xl transition-all duration-300 cursor-pointer flex flex-col items-center justify-center gap-1.5 ${
                        formData.clientType === 'distribuidor'
                          ? 'border border-brand-pink bg-brand-pink-light/70 text-brand-pink-dark font-semibold shadow-xs'
                          : 'glass-button border-white/30 text-brand-dark/75 hover:bg-white/80'
                      }`}
                    >
                      <Send size={18} className="text-brand-celeste" />
                      <span className="text-xs sm:text-sm font-fredoka">Distribución</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleClientTypeChange('evento')}
                      className={`p-4 rounded-2xl transition-all duration-300 cursor-pointer flex flex-col items-center justify-center gap-1.5 ${
                        formData.clientType === 'evento'
                          ? 'border border-brand-pink bg-brand-pink-light/70 text-brand-pink-dark font-semibold shadow-xs'
                          : 'glass-button border-white/30 text-brand-dark/75 hover:bg-white/80'
                      }`}
                    >
                      <Calendar size={18} className="text-brand-pink" />
                      <span className="text-xs sm:text-sm font-fredoka">Evento Privado</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleClientTypeChange('festival')}
                      className={`p-4 rounded-2xl transition-all duration-300 cursor-pointer flex flex-col items-center justify-center gap-1.5 ${
                        formData.clientType === 'festival'
                          ? 'border border-brand-pink bg-brand-pink-light/70 text-brand-pink-dark font-semibold shadow-xs'
                          : 'glass-button border-white/30 text-brand-dark/75 hover:bg-white/80'
                      }`}
                    >
                      <HelpCircle size={18} className="text-brand-celeste" />
                      <span className="text-xs sm:text-sm font-fredoka">Feria / Festival</span>
                    </button>
                  </div>
                </div>

                {/* Section 3: Quantity estimated */}
                <div className="space-y-4">
                  <h3 className="font-fredoka font-bold text-lg text-brand-dark flex items-center">
                    <span className="w-6 h-6 rounded-full bg-brand-pink text-white flex items-center justify-center text-xs mr-2 font-bold font-fredoka">3</span>
                    ¿Cuántos polos tienes estimados pedir?
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['Menos de 100', '100 - 300', '300 - 500', 'Más de 500'].map((qty) => (
                      <button
                        type="button"
                        key={qty}
                        onClick={() => setFormData({ ...formData, quantity: qty })}
                        className={`py-3 px-1 rounded-xl text-center text-xs sm:text-sm font-fredoka cursor-pointer transition-all ${
                          formData.quantity === qty
                            ? 'border border-brand-celeste bg-brand-celeste-light/70 text-brand-celeste-dark font-semibold shadow-xs'
                            : 'glass-button border-white/30 text-brand-dark/75 hover:bg-white/80'
                        }`}
                      >
                        {qty}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Section 4: Flavors Checklist */}
                <div className="space-y-4">
                  <h3 className="font-fredoka font-bold text-lg text-brand-dark flex items-center">
                    <span className="w-6 h-6 rounded-full bg-brand-pink text-white flex items-center justify-center text-xs mr-2 font-bold font-fredoka">4</span>
                    Sabores seleccionados:
                  </h3>
                  <p className="text-xs text-brand-dark/60 font-sans -mt-2">
                    Selecciona los sabores preferenciales para tu cotización. Puedes cambiarlos aquí o en el catálogo de arriba:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    {ALL_FLAVORS_INFO.map((flavor) => {
                      const isChecked = formData.flavorInterests.includes(flavor.id);
                      return (
                        <button
                          type="button"
                          key={flavor.id}
                          onClick={() => handleFlavorToggle(flavor.id)}
                          className={`flex items-center space-x-2.5 p-3 rounded-xl text-left cursor-pointer transition-all ${
                            isChecked
                              ? 'bg-brand-pink-light/70 border border-brand-pink text-brand-pink-dark font-medium'
                              : 'glass-button border-white/30 text-brand-dark hover:bg-white/80'
                          }`}
                        >
                          <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all ${
                            isChecked ? 'bg-brand-pink border-brand-pink text-white' : 'border-white/50 bg-white/40'
                          }`}>
                            {isChecked && <span className="text-[10px]">✓</span>}
                          </div>
                          <span className="font-fredoka text-xs sm:text-sm">{flavor.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Section 5: Location & Notes */}
                <div className="space-y-4">
                  <h3 className="font-fredoka font-bold text-lg text-brand-dark flex items-center">
                    <span className="w-6 h-6 rounded-full bg-brand-pink text-white flex items-center justify-center text-xs mr-2 font-bold font-fredoka">5</span>
                    Detalles y localización del pedido
                  </h3>

                  <div className="space-y-4">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-brand-dark/50">
                        <MapPin size={18} />
                      </div>
                      <input
                        type="text"
                        name="location"
                        id="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="Municipio de entrega en Madrid (ej. Chueca, Las Rozas, Aranjuez...)"
                        className="w-full glass-input focus:bg-white rounded-2xl py-3.5 pl-11 pr-4 text-sm sm:text-base outline-none font-sans"
                      />
                    </div>

                    <div>
                      <label htmlFor="additionalNotes" className="sr-only">Comentarios adicionales</label>
                      <textarea
                        name="additionalNotes"
                        id="additionalNotes"
                        rows={3}
                        value={formData.additionalNotes}
                        onChange={handleInputChange}
                        placeholder="Escribe otros detalles (ej. bodas, fechas específicas, intolerancias o dudas adicionales que tengas...)"
                        className="w-full glass-input focus:bg-white rounded-2xl py-3.5 px-4 text-sm sm:text-base outline-none font-sans resize-none"
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* Submit trigger button */}
                <button
                  type="submit"
                  id="submit-whatsapp-btn"
                  className={`w-full bg-brand-pink hover:bg-brand-pink-dark text-white font-fredoka font-bold py-4 px-6 rounded-2xl bubble-shadow transition-all duration-300 flex items-center justify-center space-x-2.5 text-base sm:text-lg cursor-pointer ${
                    isSuccess ? 'bg-brand-celeste hover:bg-brand-celeste-dark' : ''
                  }`}
                >
                  <MessageSquare size={20} fill="white" />
                  <span>{isSuccess ? 'Redirigiendo a WhatsApp...' : 'Enviar Consulta por WhatsApp'}</span>
                </button>
                
                <p className="text-center text-[11px] text-brand-dark/50 font-sans">
                  Al hacer clic se generará una plantilla predefinida y se abrirá WhatsApp con el teléfono <strong>+34 634 885 047</strong>. ¡Rápido y 100% gratuito!
                </p>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
