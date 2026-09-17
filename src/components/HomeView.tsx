/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ArrowRight, Sparkles, Phone, MessageSquare, Instagram, Heart, Calendar, Play, Layers } from 'lucide-react';
import { motion } from 'motion/react';
import { PageId } from '../types';
import { SERVICES_DATA, TESTIMONIALS, IMAGE_PATHS, SALON_INFO } from '../data';
import InstagramGallery from './InstagramGallery';

interface HomeViewProps {
  setCurrentPage: (page: PageId) => void;
}

export default function HomeView({ setCurrentPage }: HomeViewProps) {
  const [activeBeforeAfterTab, setActiveBeforeAfterTab] = useState<'balayage' | 'updo'>('balayage');

  const handleNav = (pageId: PageId) => {
    if (pageId === 'hair-design' || pageId === 'color' || pageId === 'hair-integration') {
      setCurrentPage('atelier-capelli');
      setTimeout(() => {
        const anchor = pageId === 'hair-design' ? 'taglio-styling' : pageId === 'color' ? 'colore' : 'hair-integration';
        const el = document.getElementById(anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
      return;
    }
    if (pageId === 'bridal' || pageId === 'consulting') {
      setCurrentPage('sposa-immagine');
      setTimeout(() => {
        const anchor = pageId === 'bridal' ? 'sposa' : 'consulenza';
        const el = document.getElementById(anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
      return;
    }
    if (pageId === 'academy') {
      setCurrentPage('corsi');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppDirect = () => {
    const detail = `Ciao Nicole! Sto visitando il tuo nuovo sito web. Vorrei richiedere informazioni per prenotare un appuntamento in atelier.`;
    const encoded = encodeURIComponent(detail);
    window.open(`https://wa.me/${SALON_INFO.whatsapp.replace(/\+/g, '').replace(/\s+/g, '')}?text=${encoded}`, '_blank');
  };

  return (
    <div id="home-view-container" className="bg-neutral-950 text-neutral-200 font-sans overflow-x-hidden pt-24">
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center border-b border-neutral-900 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center lg:justify-start gap-2"
              >
                <span className="text-amber-500 uppercase tracking-[0.3em] text-xs font-light">
                  L'Eccellenza dell'Hair Styling & Bridal
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl sm:text-6xl md:text-7xl font-serif font-light text-white tracking-wide leading-[1.1] italic"
              >
                Scrivi la tua <br className="hidden sm:inline" />
                <span className="not-italic font-normal text-amber-500">
                  Storia di Bellezza
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-neutral-400 text-sm sm:text-base md:text-lg font-sans font-light leading-relaxed max-w-xl mx-auto lg:mx-0 opacity-80"
              >
                Atelier Nicole Vinti: tagli sartoriali moderni, balayage multidimensionali ed acconciature da sposa d'autore. Valorizziamo la tua morfologia con consulenze d'immagine su misura.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
              >
                <button
                  onClick={() => handleNav('booking')}
                  className="w-full sm:w-auto px-8 py-4 border border-amber-500 text-amber-500 text-xs uppercase tracking-[0.2em] hover:bg-amber-500 hover:text-black transition-all font-semibold rounded-none flex items-center justify-center gap-2"
                >
                  <span>PRENOTA CONSULENZA</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto bg-neutral-900 border border-neutral-800 hover:bg-neutral-850 hover:border-neutral-700 text-neutral-300 px-8 py-4 text-xs font-semibold uppercase tracking-[0.15em] transition-all flex items-center justify-center gap-2 rounded-none"
                >
                  <MessageSquare className="w-4.5 h-4.5 text-amber-500" />
                  <span>CONSULTA WHATSAPP</span>
                </button>
              </motion.div>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-full max-w-sm aspect-[3/4] rounded-[2.2rem] bg-neutral-900 p-2 border border-neutral-800 shadow-2xl"
              >
                {/* Visual decoration ring */}
                <div className="absolute -inset-3 border border-amber-500/10 rounded-[2.5rem] pointer-events-none" />

                <div className="w-full h-full overflow-hidden relative rounded-[1.8rem]">
                  <img
                    src={IMAGE_PATHS.nicoleVinti}
                    alt="Nicole Vinti Portrait"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale-[10%] contrast-[102%]"
                  />
                  {/* Floating badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-neutral-950/90 backdrop-blur-md border border-neutral-800/80 p-3.5 rounded-2xl flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-serif font-bold text-amber-200 uppercase tracking-wider">Nicole Vinti</h4>
                      <p className="text-[9px] text-neutral-400 uppercase tracking-widest font-mono">Creative Director</p>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE PHILOSOPHY SECTION */}
      <section className="py-24 bg-neutral-950 border-b border-neutral-900/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text description */}
            <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              <span className="text-amber-400 font-mono text-xs tracking-[0.25em] uppercase block">
                Il Nostro Manifesto
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-[0.05em] uppercase leading-tight">
                La Bellezza è un Dialogo Perfetto
              </h2>
              <p className="text-neutral-400 text-sm font-light leading-relaxed">
                Non crediamo nelle soluzioni generiche o nei trend passeggeri che snaturano la persona. Ogni taglio, ogni riflesso di colore, ogni acconciatura da sposa deve nascere da un attento studio morfologico e psicologico.
              </p>
              <div className="space-y-4 pt-2">
                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[10px] text-amber-400 font-mono font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Metodo Sartoriale</h4>
                    <p className="text-xs text-neutral-400 font-light mt-0.5">I capelli vengono studiati sia asciutti che bagnati per assecondare la loro caduta organica naturale.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[10px] text-amber-400 font-mono font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Consulenza Visagistica</h4>
                    <p className="text-xs text-neutral-400 font-light mt-0.5">Utilizziamo la teoria delle stagioni cromatiche (Armocromia) per esaltare i tuoi colori naturali.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Immagine Atelier */}
            <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center">
              <div className="w-full max-w-lg aspect-video bg-neutral-900 border border-neutral-800/60 rounded-3xl overflow-hidden relative shadow-xl">
                <img
                  src={IMAGE_PATHS.salonInterior}
                  alt="Interior of Nicole Vinti Salon"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-neutral-950/80 backdrop-blur-md px-4 py-2.5 border border-neutral-800 rounded-full text-xs">
                  <span className="text-amber-400 font-bold">L'Atelier:</span>
                  <span className="text-neutral-300 font-light font-mono">Un'oasi di privacy e lusso</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES GRID (LANDING CHANNELS) */}
      <section className="py-24 bg-neutral-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-amber-400 font-mono text-xs tracking-[0.25em] uppercase block mb-3">
              I Nostri Canali di Eccellenza
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-[0.05em] uppercase">
              Servizi Couture
            </h2>
            <p className="text-sm text-neutral-400 mt-3 font-light leading-relaxed">
              Ogni servizio è presentato come un mini-portale dedicato: esplora la problematica comune, la nostra soluzione strutturata ed i dettagli del trattamento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                className="group bg-neutral-900/35 border border-neutral-800/40 hover:border-amber-500/30 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/5"
              >
                <div>
                  {/* Photo with hover effect */}
                  <div className="aspect-[16/10] overflow-hidden relative border-b border-neutral-800/40">
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/10 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="text-[10px] bg-amber-500 text-neutral-950 px-3 py-1 rounded-full uppercase font-bold tracking-wider">
                        {service.id === 'bridal'
                          ? 'Bridal Specialist'
                          : service.id === 'barber-shop'
                          ? 'Barber & Grooming'
                          : service.id === 'beauty-hairspa'
                          ? 'Wellness & Spa'
                          : service.id === 'concept-store'
                          ? 'Boutique & Lifestyle'
                          : service.id === 'academy'
                          ? 'Elite Academy'
                          : 'Couture Design'}
                      </span>
                    </div>
                  </div>

                  {/* Text Details */}
                  <div className="p-6 sm:p-8 space-y-3">
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wide uppercase">
                      {service.title}
                    </h3>
                    <p className="text-xs text-amber-300 uppercase tracking-widest font-mono font-medium">
                      {service.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed pt-1">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="px-6 sm:px-8 pb-8 pt-2">
                  <button
                    onClick={() => handleNav(service.id)}
                    className="w-full bg-neutral-950 border border-neutral-850 hover:border-amber-500 text-neutral-300 hover:text-white font-semibold text-xs tracking-widest uppercase py-3.5 transition-all rounded-full flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                  >
                    <span>Analisi & Soluzioni</span>
                    <ArrowRight className="w-4 h-4 text-amber-500 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VISUAL BEFORE/AFTER TRANSFORMATIONS TAB */}
      <section className="py-24 bg-neutral-950 border-t border-neutral-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-amber-400 font-mono text-xs tracking-[0.25em] uppercase block">
              Risultati Straordinari
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-[0.05em] uppercase">
              La Metamorfosi del Capello
            </h2>
            <p className="text-sm text-neutral-400 font-light">
              Scopri la differenza visibile tra le problematiche più diffuse ed i nostri trattamenti d'eccellenza.
            </p>

            {/* Tabs switcher */}
            <div className="flex justify-center pt-4">
              <div className="inline-flex bg-neutral-900 p-1.5 rounded-full border border-neutral-800/80">
                <button
                  onClick={() => setActiveBeforeAfterTab('balayage')}
                  className={`px-6 py-2.5 text-xs uppercase tracking-wider font-semibold transition-all rounded-full ${
                    activeBeforeAfterTab === 'balayage'
                      ? 'bg-amber-500 text-neutral-950 shadow-md'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Balayage & Luminosità
                </button>
                <button
                  onClick={() => setActiveBeforeAfterTab('updo')}
                  className={`px-6 py-2.5 text-xs uppercase tracking-wider font-semibold transition-all rounded-full ${
                    activeBeforeAfterTab === 'updo'
                      ? 'bg-amber-500 text-neutral-950 shadow-md'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Raccolto Sposa (Updo)
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-neutral-900/20 border border-neutral-800/60 p-6 sm:p-8 rounded-3xl">
            {activeBeforeAfterTab === 'balayage' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left: Problem */}
                <div className="space-y-4">
                  <div className="text-xs bg-red-500/15 border border-red-500/25 text-red-400 px-3 py-1 font-mono uppercase inline-block rounded-full">
                    Capello Precedente (Problema)
                  </div>
                  <h3 className="text-lg font-bold text-white uppercase font-serif tracking-wide">
                    Colore Spento e Piatto, Riflessi Aranciati
                  </h3>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    Schiariture geometriche o striate non calibrate, punte secche ed opache e assenza totale di profondità cromatica che spegne la luminosità del volto.
                  </p>
                  <ul className="text-xs text-neutral-500 space-y-1.5 font-light">
                    <li>• Stacchi netti sulla ricrescita</li>
                    <li>• Capelli rovinati da prodotti chimici industriali</li>
                    <li>• Mancanza di vibrazione tridimensionale</li>
                  </ul>
                </div>

                {/* Right: Solution (Blonde Balayage Image) */}
                <div className="relative aspect-[3/4] max-w-sm mx-auto w-full bg-neutral-900 border border-neutral-800/60 p-1.5 rounded-2xl overflow-hidden shadow-lg">
                  <div className="absolute top-4 left-4 z-10 bg-amber-500 text-neutral-950 text-[10px] font-mono font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Soluzione Nicole
                  </div>
                  <img
                    src={IMAGE_PATHS.blondeBalayage}
                    alt="Blonde Balayage Transformation"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-neutral-950/80 backdrop-blur-md p-3 text-center text-[11px] border border-neutral-800/60 rounded-xl">
                    <span className="text-amber-200 font-semibold uppercase">Balayage Deluxe Honey Blonde</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left: Problem */}
                <div className="space-y-4">
                  <div className="text-xs bg-red-500/15 border border-red-500/25 text-red-400 px-3 py-1 font-mono uppercase inline-block rounded-full">
                    Acconciatura Standard (Problema)
                  </div>
                  <h3 className="text-lg font-bold text-white uppercase font-serif tracking-wide">
                    Chignon Rigidi o "Incollati"
                  </h3>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    Pettinature vecchio stile ultra-laccate che induriscono i lineamenti, provocano mal di testa dopo poche ore di indossamento, e risultano artificiali ed innaturali in foto.
                  </p>
                  <ul className="text-xs text-neutral-500 space-y-1.5 font-light">
                    <li>• Mancanza di comfort e troppe forcine</li>
                    <li>• Volume piatto o innaturale</li>
                    <li>• Nessun dialogo con lo stile dell'abito</li>
                  </ul>
                </div>

                {/* Right: Solution (Bridal Updo Image) */}
                <div className="relative aspect-[3/4] max-w-sm mx-auto w-full bg-neutral-900 border border-neutral-800/60 p-1.5 rounded-2xl overflow-hidden shadow-lg">
                  <div className="absolute top-4 left-4 z-10 bg-amber-500 text-neutral-950 text-[10px] font-mono font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Soluzione Nicole
                  </div>
                  <img
                    src={IMAGE_PATHS.bridalUpdo}
                    alt="Bridal Updo Transformation"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-neutral-950/80 backdrop-blur-md p-3 text-center text-[11px] border border-neutral-800/60 rounded-xl">
                    <span className="text-amber-200 font-semibold uppercase">Sleek Low Bun con Perle Couture</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS SECTION */}
      <section className="py-24 bg-neutral-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-amber-400 font-mono text-xs tracking-[0.25em] uppercase block mb-3">
              Le Opinioni di Chi ci ha Scelto
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-[0.05em] uppercase">
              Recensioni d'Atelier
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-neutral-900/30 border border-neutral-800/60 p-6 sm:p-8 rounded-3xl flex flex-col justify-between space-y-6 hover:border-amber-500/10 transition-colors"
              >
                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex gap-1 text-amber-400">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} className="text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-400 font-light italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-4 border-t border-neutral-900">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-neutral-800">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">{testimonial.name}</h4>
                    <p className="text-[10px] text-amber-400/80 uppercase tracking-widest font-mono font-medium">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INSTAGRAM LIVE FEED SIMULATION */}
      <InstagramGallery />

      {/* 7. QUICK CONTACT & BOTTOM CTA SECTION */}
      <section className="py-24 bg-neutral-900/10 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <span className="text-amber-400 font-mono text-xs tracking-[0.25em] uppercase block">
            Vieni a Trovarci
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-[0.05em] uppercase">
            Inizia il tuo Viaggio di Bellezza
          </h2>
          <p className="text-sm text-neutral-400 font-light max-w-xl mx-auto leading-relaxed">
            Siamo pronti ad accoglierti nel nostro spazio privato per offrirti l'attenzione e l'esperienza che hai sempre desiderato.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto pt-4">
            <button
              onClick={() => handleNav('booking')}
              className="w-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-neutral-950 font-bold text-xs tracking-[0.15em] uppercase py-4 rounded-full shadow-xl hover:shadow-amber-500/10 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Prenota Online
            </button>
            <button
              onClick={handleWhatsAppDirect}
              className="w-full bg-neutral-900 border border-neutral-800 hover:bg-neutral-850 hover:border-neutral-700 text-neutral-300 font-semibold text-xs tracking-[0.15em] uppercase py-4 rounded-full transition-colors"
            >
              Scrivici su WhatsApp
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
