/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scissors, Sparkles, Heart, ChevronDown, Check, ArrowRight, ShieldCheck, HelpCircle, MessageSquare, Star, Layers } from 'lucide-react';
import { PageId } from '../types';
import { SERVICES_DATA, SALON_INFO, IMAGE_PATHS } from '../data';

interface AtelierCapelliViewProps {
  setCurrentPage: (page: PageId) => void;
}

export default function AtelierCapelliView({ setCurrentPage }: AtelierCapelliViewProps) {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const taglioService = SERVICES_DATA.find(s => s.id === 'hair-design');
  const coloreService = SERVICES_DATA.find(s => s.id === 'color');
  const integrationService = SERVICES_DATA.find(s => s.id === 'hair-integration');

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
    const text = encodeURIComponent(`Ciao Nicole Vinti! Vorrei richiedere informazioni e disponibilità per il servizio "${serviceTitle}" in Atelier Capelli.`);
    window.open(`https://wa.me/${SALON_INFO.whatsapp.replace(/\D/g, '')}?text=${text}`, '_blank');
  };

  return (
    <div id="atelier-capelli-page" className="bg-neutral-950 text-neutral-200 min-h-screen pt-24 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden border-b border-neutral-900">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGE_PATHS.salonInterior}
            alt="Atelier Capelli Nicole Vinti"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/40" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 py-16">
          <span className="text-amber-400 font-mono text-xs sm:text-sm tracking-[0.3em] uppercase block">
            L'Arte del Capello su Misura
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-[0.05em] uppercase leading-tight">
            Atelier Capelli
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Dalla tecnica esclusiva del <span className="text-amber-300 font-normal">Dry Cut</span> alle sfumature luminose del <span className="text-amber-300 font-normal">French Balayage</span>, fino alle soluzioni di <span className="text-amber-300 font-normal">Hair Integration</span> invisibile. Un’esperienza di bellezza trasformativa e sartoriale.
          </p>

          {/* Quick Anchor Jump Links */}
          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => scrollToAnchor('taglio-styling')}
              className="px-5 py-2.5 rounded-full bg-neutral-900/90 hover:bg-amber-500/10 border border-neutral-800 hover:border-amber-500/50 text-xs uppercase tracking-widest text-neutral-300 hover:text-amber-300 transition-all"
            >
              Taglio & Styling ↓
            </button>
            <button
              onClick={() => scrollToAnchor('colore')}
              className="px-5 py-2.5 rounded-full bg-neutral-900/90 hover:bg-amber-500/10 border border-neutral-800 hover:border-amber-500/50 text-xs uppercase tracking-widest text-neutral-300 hover:text-amber-300 transition-all"
            >
              Colore d'Autore ↓
            </button>
            <button
              onClick={() => scrollToAnchor('hair-integration')}
              className="px-5 py-2.5 rounded-full bg-neutral-900/90 hover:bg-amber-500/10 border border-neutral-800 hover:border-amber-500/50 text-xs uppercase tracking-widest text-neutral-300 hover:text-amber-300 transition-all"
            >
              Hair Integration ↓
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 1: TAGLIO E STYLING */}
      <section id="taglio-styling" className="scroll-mt-28 py-20 border-b border-neutral-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-mono tracking-widest uppercase">
                <Scissors className="w-3.5 h-3.5" />
                Sezione 01 • Metodo Esclusivo
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white uppercase tracking-wide">
                Taglio e Styling Couture
              </h2>
              <p className="text-neutral-300 text-base leading-relaxed font-light">
                {taglioService?.shortDesc || 'Scolpiamo la geometria perfetta per il tuo volto con il taglio sartoriale a secco (Dry Cut), progettato per donare volume naturale e massima facilità di gestione a casa.'}
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
                  <h4 className="text-amber-300 font-serif text-sm uppercase tracking-wider mb-1">
                    Bespoke Dry Cut (Taglio a Secco)
                  </h4>
                  <p className="text-neutral-400 text-xs leading-relaxed">
                    A capello asciutto vediamo l’effettiva caduta, il volume reale e le ritrosie, creando linee personalizzate che crescono in modo armonioso fino a 8-10 settimane.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
                  <h4 className="text-amber-300 font-serif text-sm uppercase tracking-wider mb-1">
                    Piega Sculpting & Tridimensionale
                  </h4>
                  <p className="text-neutral-400 text-xs leading-relaxed">
                    Brushing a temperatura calibrata che sigilla le cuticole, solleva le radici e regala lucentezza a specchio senza appesantire né danneggiare la fibra.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={handleBooking}
                  className="px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-neutral-950 text-xs font-bold uppercase tracking-[0.15em] rounded-full shadow-lg transition-all"
                >
                  Prenota Taglio & Styling
                </button>
                <button
                  onClick={() => handleWhatsApp('Taglio e Styling Couture')}
                  className="px-6 py-3.5 border border-neutral-700 hover:border-amber-400 text-neutral-300 hover:text-white text-xs uppercase tracking-[0.15em] rounded-full transition-all"
                >
                  Info su WhatsApp
                </button>
                <span className="text-xs font-mono text-neutral-500 tracking-wider">
                  {taglioService?.durationPrice || 'Da €65'}
                </span>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
                <img
                  src={IMAGE_PATHS.bridalUpdo}
                  alt="Taglio e Styling Nicole Vinti"
                  referrerPolicy="no-referrer"
                  className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-amber-400 text-xs uppercase tracking-widest font-mono">Bespoke Styling</span>
                  <h3 className="text-white font-serif text-xl">Eleganza fluida e contemporanea</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: COLORE D'AUTORE */}
      <section id="colore" className="scroll-mt-28 py-20 border-b border-neutral-900/80 bg-neutral-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-mono tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                Sezione 02 • Luce & Sfumature
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white uppercase tracking-wide">
                Colore d'Autore & Balayage
              </h2>
              <p className="text-neutral-300 text-base leading-relaxed font-light">
                {coloreService?.shortDesc || 'Sfumature multidimensionali dipinte a mano libera. Il French Balayage Nicole Vinti ricrea l’effetto naturale del sole con tonalizzazioni luminose e trattamenti di rigenerazione molecolare Plex.'}
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
                  <h4 className="text-amber-300 font-serif text-sm uppercase tracking-wider mb-1">
                    French Balayage Couture
                  </h4>
                  <p className="text-neutral-400 text-xs leading-relaxed">
                    Schiariture progressive e prive di stacco netto alla radice, studiate sulla base della tua stagione di Armocromia per far brillare la carnagione.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
                  <h4 className="text-amber-300 font-serif text-sm uppercase tracking-wider mb-1">
                    Gloss Rigenerante & Trattamento Plex
                  </h4>
                  <p className="text-neutral-400 text-xs leading-relaxed">
                    Bagno di luce che sigilla il colore e ricostruisce i ponti disolfuro interni, restituendo corpo e morbidezza anche a capelli stressati.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={handleBooking}
                  className="px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-neutral-950 text-xs font-bold uppercase tracking-[0.15em] rounded-full shadow-lg transition-all"
                >
                  Prenota Servizio Colore
                </button>
                <button
                  onClick={() => handleWhatsApp('Colore d\'Autore')}
                  className="px-6 py-3.5 border border-neutral-700 hover:border-amber-400 text-neutral-300 hover:text-white text-xs uppercase tracking-[0.15em] rounded-full transition-all"
                >
                  Info su WhatsApp
                </button>
                <span className="text-xs font-mono text-neutral-500 tracking-wider">
                  {coloreService?.durationPrice || 'Da €95'}
                </span>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
                <img
                  src={IMAGE_PATHS.blondeBalayage}
                  alt="Colore e Balayage Nicole Vinti"
                  referrerPolicy="no-referrer"
                  className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-amber-400 text-xs uppercase tracking-widest font-mono">Luminosità Multidimensionale</span>
                  <h3 className="text-white font-serif text-xl">Sfumature calde, fredde o neutre perfette</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: HAIR INTEGRATION */}
      <section id="hair-integration" className="scroll-mt-28 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-mono tracking-widest uppercase">
                <Layers className="w-3.5 h-3.5" />
                Sezione 03 • Densità & Lunghezza
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white uppercase tracking-wide">
                Hair Integration & Infoltimento
              </h2>
              <p className="text-neutral-300 text-base leading-relaxed font-light">
                {integrationService?.shortDesc || 'Tecniche d’avanguardia per allungamento e infoltimento invisibile. Capelli 100% naturali vergini applicati con punti di giunzione micrometrici totalmente impercettibili.'}
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
                  <h4 className="text-amber-300 font-serif text-sm uppercase tracking-wider mb-1">
                    Punti di Ancoraggio Invisibili
                  </h4>
                  <p className="text-neutral-400 text-xs leading-relaxed">
                    Nessuna trazione invasiva o colla dannosa: il metodo preserva la naturale ricrescita dei tuoi capelli senza arrecare danni ai follicoli.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
                  <h4 className="text-amber-300 font-serif text-sm uppercase tracking-wider mb-1">
                    Integrazione Densità e Lunghezza
                  </h4>
                  <p className="text-neutral-400 text-xs leading-relaxed">
                    Perfetto sia per chi ha capelli fini e desidera una chioma corposa e piena, sia per chi vuole lunghezze da sogno immediate e naturali al tatto.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={handleBooking}
                  className="px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-neutral-950 text-xs font-bold uppercase tracking-[0.15em] rounded-full shadow-lg transition-all"
                >
                  Richiedi Consulenza Integration
                </button>
                <button
                  onClick={() => handleWhatsApp('Hair Integration')}
                  className="px-6 py-3.5 border border-neutral-700 hover:border-amber-400 text-neutral-300 hover:text-white text-xs uppercase tracking-[0.15em] rounded-full transition-all"
                >
                  Info su WhatsApp
                </button>
                <span className="text-xs font-mono text-neutral-500 tracking-wider">
                  {integrationService?.durationPrice || 'Su Consulenza Personalizzata'}
                </span>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800"
                  alt="Hair Integration Nicole Vinti"
                  referrerPolicy="no-referrer"
                  className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-amber-400 text-xs uppercase tracking-widest font-mono">Naturalezza Assoluta</span>
                  <h3 className="text-white font-serif text-xl">Volume e pienezza che non si vedono, si sentono</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="mt-16 py-16 bg-neutral-900/40 border-t border-neutral-900 text-center px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <h3 className="text-2xl sm:text-3xl font-serif text-white uppercase tracking-wider">
            Vivi l'Esperienza in Atelier
          </h3>
          <p className="text-neutral-400 text-sm max-w-xl mx-auto font-light">
            Ogni appuntamento è un momento dedicato esclusivamente alla cura e valorizzazione della tua persona, in un ambiente riservato ed elegante.
          </p>
          <button
            onClick={handleBooking}
            className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-neutral-950 text-xs font-bold uppercase tracking-[0.2em] rounded-full shadow-xl transition-all"
          >
            Riserva il tuo Appuntamento
          </button>
        </div>
      </section>
    </div>
  );
}
