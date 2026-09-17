/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, Crown, Eye, Check, ArrowRight, Star, ShieldCheck } from 'lucide-react';
import { PageId } from '../types';
import { SERVICES_DATA, SALON_INFO, IMAGE_PATHS } from '../data';

interface SposaImmagineViewProps {
  setCurrentPage: (page: PageId) => void;
}

export default function SposaImmagineView({ setCurrentPage }: SposaImmagineViewProps) {
  const sposaService = SERVICES_DATA.find(s => s.id === 'bridal');
  const consulenzaService = SERVICES_DATA.find(s => s.id === 'consulting');

  const scrollToAnchor = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBooking = () => {
    setCurrentPage('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = (serviceTitle: string) => {
    const text = encodeURIComponent(`Ciao Nicole Vinti! Vorrei ricevere informazioni sul percorso "${serviceTitle}" (Sposa & Immagine).`);
    window.open(`https://wa.me/${SALON_INFO.whatsapp.replace(/\D/g, '')}?text=${text}`, '_blank');
  };

  return (
    <div id="sposa-immagine-page" className="bg-neutral-950 text-neutral-200 min-h-screen pt-24 pb-20">
      {/* HERO SECTION */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden border-b border-neutral-900">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGE_PATHS.bridalWaves}
            alt="Sposa e Immagine Nicole Vinti"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/40" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 py-16">
          <span className="text-amber-400 font-mono text-xs sm:text-sm tracking-[0.3em] uppercase block">
            Couture Bridal & Consulenza di Bellezza
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-[0.05em] uppercase leading-tight">
            Sposa & Immagine
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Dall'acconciatura da sposa couture on-site alla consulenza d'immagine completa con analisi morfologica e armocromia. Celebriamo la tua unicità per il giorno più importante e per la vita di tutti i giorni.
          </p>

          {/* Quick Anchor Jump Links */}
          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => scrollToAnchor('sposa')}
              className="px-5 py-2.5 rounded-full bg-neutral-900/90 hover:bg-amber-500/10 border border-neutral-800 hover:border-amber-500/50 text-xs uppercase tracking-widest text-neutral-300 hover:text-amber-300 transition-all"
            >
              Sposa & Bridal ↓
            </button>
            <button
              onClick={() => scrollToAnchor('consulenza')}
              className="px-5 py-2.5 rounded-full bg-neutral-900/90 hover:bg-amber-500/10 border border-neutral-800 hover:border-amber-500/50 text-xs uppercase tracking-widest text-neutral-300 hover:text-amber-300 transition-all"
            >
              Consulenza d'Immagine ↓
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 1: SPOSA */}
      <section id="sposa" className="scroll-mt-28 py-20 border-b border-neutral-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-mono tracking-widest uppercase">
                <Crown className="w-3.5 h-3.5" />
                Sezione 01 • Bridal Experience
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white uppercase tracking-wide">
                Sposa & Acconciatura Couture
              </h2>
              <p className="text-neutral-300 text-base leading-relaxed font-light">
                {sposaService?.shortDesc || 'Il tuo sogno di bellezza prende forma. Creiamo un’acconciatura sartoriale pensata per armonizzarsi con la scollatura dell’abito, i volumi del viso e la luce della location.'}
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
                  <h4 className="text-amber-300 font-serif text-sm uppercase tracking-wider mb-1">
                    Studio Morfologico & Armocromatico
                  </h4>
                  <p className="text-neutral-400 text-xs leading-relaxed">
                    Analizziamo i lineamenti del viso, l'incarnato e il design del vestito per progettare una silhouette su misura.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
                  <h4 className="text-amber-300 font-serif text-sm uppercase tracking-wider mb-1">
                    Doppia Prova in Atelier & Supporto On-Site
                  </h4>
                  <p className="text-neutral-400 text-xs leading-relaxed">
                    Due prove dedicate per perfezionare ogni dettaglio, e assistenza diretta on-site la mattina delle nozze con Kit SOS Sposa incluso.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={handleBooking}
                  className="px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-neutral-950 text-xs font-bold uppercase tracking-[0.15em] rounded-full shadow-lg transition-all"
                >
                  Richiedi Esperienza Bridal
                </button>
                <button
                  onClick={() => handleWhatsApp('Esperienza Sposa & Bridal')}
                  className="px-6 py-3.5 border border-neutral-700 hover:border-amber-400 text-neutral-300 hover:text-white text-xs uppercase tracking-[0.15em] rounded-full transition-all"
                >
                  Preventivo su WhatsApp
                </button>
                <span className="text-xs font-mono text-neutral-500 tracking-wider">
                  {sposaService?.durationPrice || 'Su Preventivo Esclusivo'}
                </span>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
                <img
                  src={IMAGE_PATHS.bridalWaves}
                  alt="Sposa Couture Nicole Vinti"
                  referrerPolicy="no-referrer"
                  className="w-full h-[440px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-amber-400 text-xs uppercase tracking-widest font-mono">Bridal Specialist</span>
                  <h3 className="text-white font-serif text-xl">L'emozione di sentirti autentica e radiosa</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CONSULENZA */}
      <section id="consulenza" className="scroll-mt-28 py-20 bg-neutral-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-mono tracking-widest uppercase">
                <Eye className="w-3.5 h-3.5" />
                Sezione 02 • Armocromia & Facial Design
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white uppercase tracking-wide">
                Consulenza d'Immagine
              </h2>
              <p className="text-neutral-300 text-base leading-relaxed font-light">
                {consulenzaService?.shortDesc || 'Scopri i colori amici della tua pelle e le geometrie perfette per la tua figura. Con drappi professionali e studio morfologico, ridefiniamo la tua identità visiva.'}
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
                  <h4 className="text-amber-300 font-serif text-sm uppercase tracking-wider mb-1">
                    Analisi del Sottotono e Stagione Cromatica
                  </h4>
                  <p className="text-neutral-400 text-xs leading-relaxed">
                    Identifichiamo la tua palette cromatica (Inverno, Primavera, Estate, Autunno) per orientare con certezza abbigliamento, make-up e tonalità di capelli.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
                  <h4 className="text-amber-300 font-serif text-sm uppercase tracking-wider mb-1">
                    Facial Shape & Body Harmony
                  </h4>
                  <p className="text-neutral-400 text-xs leading-relaxed">
                    Mappiamo le proporzioni del viso per guidare il taglio di capelli, gli accessori e le scollature più valorizzanti per la tua morfologia.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={handleBooking}
                  className="px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-neutral-950 text-xs font-bold uppercase tracking-[0.15em] rounded-full shadow-lg transition-all"
                >
                  Prenota Consulenza d'Immagine
                </button>
                <button
                  onClick={() => handleWhatsApp('Consulenza d\'Immagine')}
                  className="px-6 py-3.5 border border-neutral-700 hover:border-amber-400 text-neutral-300 hover:text-white text-xs uppercase tracking-[0.15em] rounded-full transition-all"
                >
                  Info su WhatsApp
                </button>
                <span className="text-xs font-mono text-neutral-500 tracking-wider">
                  {consulenzaService?.durationPrice || 'Sessione da €120 con Palette Personale'}
                </span>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
                <img
                  src={IMAGE_PATHS.nicoleVinti}
                  alt="Consulenza Immagine Nicole Vinti"
                  referrerPolicy="no-referrer"
                  className="w-full h-[440px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-amber-400 text-xs uppercase tracking-widest font-mono">Consulenza Avanzata</span>
                  <h3 className="text-white font-serif text-xl">L'armonia che valorizza la tua naturalezza</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mt-16 py-16 bg-neutral-900/40 border-t border-neutral-900 text-center px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <h3 className="text-2xl sm:text-3xl font-serif text-white uppercase tracking-wider">
            Inizia il tuo Viaggio di Bellezza
          </h3>
          <p className="text-neutral-400 text-sm max-w-xl mx-auto font-light">
            Prenota la tua sessione dedicata o una prima consulenza conoscitiva direttamente con Nicole Vinti.
          </p>
          <button
            onClick={handleBooking}
            className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-neutral-950 text-xs font-bold uppercase tracking-[0.2em] rounded-full shadow-xl transition-all"
          >
            Prenota Ora
          </button>
        </div>
      </section>
    </div>
  );
}
