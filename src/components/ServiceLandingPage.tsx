/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Check, ArrowRight, ShieldCheck, HelpCircle, MessageSquare, Heart, ChevronDown, ChevronUp, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ServiceDetail, PageId } from '../types';
import { SALON_INFO } from '../data';

interface ServiceLandingPageProps {
  service: ServiceDetail;
  setCurrentPage: (page: PageId) => void;
}

export default function ServiceLandingPage({ service, setCurrentPage }: ServiceLandingPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (service.gallery && service.gallery.length > 0) {
      setLightboxIndex((prev) => (prev === null || prev === 0 ? service.gallery!.length - 1 : prev - 1));
    }
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (service.gallery && service.gallery.length > 0) {
      setLightboxIndex((prev) => (prev === null || prev === service.gallery!.length - 1 ? 0 : prev + 1));
    }
  };

  const handleWhatsAppRedirect = () => {
    const detail = `Ciao Nicole! Sto leggendo del servizio "${service.title} - ${service.subtitle}" sul tuo sito web. Vorrei ricevere maggiori informazioni o prenotare una prima consulenza.`;
    const encoded = encodeURIComponent(detail);
    window.open(`https://wa.me/${SALON_INFO.whatsapp.replace(/\+/g, '').replace(/\s+/g, '')}?text=${encoded}`, '_blank');
  };

  const handleBookingRedirect = () => {
    setCurrentPage('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-neutral-950 text-neutral-200 font-sans min-h-screen pt-24 pb-12">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden border-b border-neutral-900">
        {/* Background image with overlay mask */}
        <div className="absolute inset-0 z-0">
          <img
            src={service.image}
            alt={service.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/20" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 py-12">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-amber-400 font-mono text-xs sm:text-sm tracking-[0.3em] uppercase block"
          >
            {service.subtitle}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-[0.05em] uppercase leading-tight"
          >
            {service.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed"
          >
            {service.shortDesc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-6 flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <button
              onClick={handleBookingRedirect}
              className="w-full sm:w-auto bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-neutral-950 font-bold text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-none shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Richiedi Consulenza</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={handleWhatsAppRedirect}
              className="w-full sm:w-auto bg-neutral-900 border border-neutral-800 hover:bg-neutral-850 text-neutral-300 px-8 py-4 text-xs font-semibold uppercase tracking-[0.15em] transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-amber-400" />
              <span>Contatto Diretto</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. THE PROBLEM SECTION */}
      <section className="py-20 bg-neutral-950 border-b border-neutral-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-3.5 py-1.5 rounded-none text-red-400 text-xs uppercase tracking-wider font-semibold font-mono">
                <HelpCircle className="w-3.5 h-3.5 shrink-0" />
                <span>Il Problema</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-[0.05em] uppercase leading-tight">
                {service.problem.title}
              </h2>
              <p className="text-neutral-400 text-sm font-light leading-relaxed">
                {service.problem.description}
              </p>
            </div>

            <div className="lg:col-span-7 bg-neutral-900/30 border border-neutral-900 p-6 sm:p-10 rounded-none">
              <div className="space-y-6">
                {service.problem.points.map((pt, idx) => (
                  <div key={idx} className="flex gap-4">
                    <span className="font-mono text-red-500/60 font-semibold text-sm">0{idx + 1}.</span>
                    <p className="text-sm text-neutral-300 font-light leading-relaxed">{pt}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE SOLUTION SECTION */}
      <section className="py-24 bg-neutral-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-none text-amber-400 text-xs uppercase tracking-wider font-semibold font-mono">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>La Soluzione</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-[0.05em] uppercase">
              {service.solution.title}
            </h2>
            <p className="text-sm text-neutral-400 font-light leading-relaxed">
              {service.solution.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.solution.points.map((pt, idx) => (
              <div
                key={idx}
                className="bg-neutral-900/40 border border-neutral-900/60 p-6 sm:p-8 rounded-none flex items-start gap-4 transition-all hover:border-amber-400/40 duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 group-hover:border-amber-400 transition-colors">
                  <Check className="w-5 h-5 text-amber-400" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-white uppercase tracking-wider">{pt.title}</h3>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">{pt.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EXCLUSIVE METHOD BANNER */}
      <section className="py-20 bg-neutral-950 border-y border-neutral-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full filter blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full filter blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <Heart className="w-8 h-8 text-amber-400 mx-auto fill-amber-400/10" />
          <h3 className="text-sm font-semibold tracking-[0.2em] text-neutral-500 uppercase font-mono">
            La Firma d'Autore
          </h3>
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-serif font-light text-amber-100 italic leading-relaxed max-w-3xl mx-auto">
            "{service.approach}"
          </blockquote>
          <div className="flex items-center justify-center gap-2 pt-2">
            <div className="h-[1px] w-8 bg-neutral-800" />
            <span className="text-xs text-amber-400 uppercase tracking-widest font-semibold">Nicole Vinti</span>
            <div className="h-[1px] w-8 bg-neutral-800" />
          </div>
        </div>
      </section>

      {/* 4.5 DEDICATED IMAGE GALLERY */}
      {service.gallery && service.gallery.length > 0 && (
        <section className="py-24 bg-neutral-900/10 border-b border-neutral-900/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full text-amber-400 text-xs uppercase tracking-wider font-semibold font-mono">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Galleria d'Ispirazione</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-[0.05em] uppercase">
                Capolavori in Atelier
              </h2>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                Una selezione di creazioni bespoke realizzate da Nicole Vinti. Clicca su ciascun dettaglio per svelarne l'armonia tridimensionale.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {service.gallery.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6 }}
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative aspect-[3/4] bg-neutral-900 border border-neutral-800/80 rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-amber-500/5 transition-all duration-300"
                >
                  <img
                    src={item.url}
                    alt={item.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-neutral-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 backdrop-blur-[3px]">
                    <span className="text-[10px] text-amber-400 font-mono uppercase tracking-widest mb-1">
                      Nicole Vinti Style
                    </span>
                    <h4 className="text-sm font-serif font-bold text-white uppercase tracking-wider">
                      {item.title || item.alt}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4.6 FAQ SECTION WITH ACCORDION */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-24 bg-neutral-950 border-b border-neutral-900/60">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full text-amber-400 text-xs uppercase tracking-wider font-semibold font-mono">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Domande Frequenti</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-[0.05em] uppercase">
                Domande & Risposte
              </h2>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                Tutto ciò che desideri sapere sul percorso e sulla cura dei capelli in Atelier.
              </p>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-neutral-900/20 border border-neutral-800/60 rounded-3xl overflow-hidden transition-all duration-300 hover:border-amber-500/25"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                    >
                      <span className="text-sm sm:text-base font-serif font-semibold text-neutral-200 group-hover:text-white transition-colors">
                        {faq.question}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-neutral-950/80 border border-neutral-800/60 flex items-center justify-center shrink-0 text-amber-400 transition-all duration-300">
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          <div className="px-6 pb-6 pt-2 border-t border-neutral-800/20 text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxIndex !== null && service.gallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Left */}
            <button
              onClick={handlePrevImage}
              className="absolute left-6 w-12 h-12 rounded-full bg-neutral-900/60 border border-neutral-800/60 hover:bg-neutral-900 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main content container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[80vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={service.gallery[lightboxIndex].url}
                alt={service.gallery[lightboxIndex].alt}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[70vh] object-contain rounded-3xl border border-neutral-800/80 shadow-2xl"
              />
              <div className="mt-4 text-center">
                <span className="text-[10px] text-amber-400 font-mono uppercase tracking-[0.2em] block mb-1">
                  Nicole Vinti Atelier — {lightboxIndex + 1} di {service.gallery.length}
                </span>
                <h3 className="text-lg font-serif font-bold text-white uppercase tracking-wider">
                  {service.gallery[lightboxIndex].title || service.gallery[lightboxIndex].alt}
                </h3>
              </div>
            </motion.div>

            {/* Navigation Right */}
            <button
              onClick={handleNextImage}
              className="absolute right-6 w-12 h-12 rounded-full bg-neutral-900/60 border border-neutral-800/60 hover:bg-neutral-900 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. PRICING & LAST CTA */}
      <section className="py-20 bg-neutral-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="bg-neutral-900/20 border border-neutral-900 p-8 rounded-none space-y-4">
            <span className="text-[10px] text-neutral-500 uppercase tracking-widest block font-mono">Tariffario Indicativo</span>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-300">
              {service.durationPrice}
            </div>
            <p className="text-xs text-neutral-500 font-light max-w-md mx-auto leading-relaxed">
              *I prezzi o preventivi indicati possono variare a seconda delle lunghezze, foltezza, tempo impiegato e prove extra concordate.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-white uppercase tracking-wider">
              Pronta a Trasformare il tuo Look?
            </h3>
            <p className="text-sm text-neutral-400 font-light max-w-xl mx-auto leading-relaxed">
              Le prenotazioni per le prove sposa o per i servizi in atelier sono limitate per garantire l'assoluta attenzione ad ogni cliente. Assicurati il tuo posto ora.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <button
                onClick={handleBookingRedirect}
                className="w-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-neutral-950 font-bold text-xs tracking-[0.15em] uppercase py-4 transition-all duration-300 rounded-none shadow-xl"
              >
                Prenota Ora in Atelier
              </button>
              <button
                onClick={handleWhatsAppRedirect}
                className="w-full bg-neutral-900 border border-neutral-800 hover:bg-neutral-850 text-neutral-300 font-semibold text-xs tracking-[0.15em] uppercase py-4 transition-colors rounded-none"
              >
                Invia Messaggio Rapido
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
