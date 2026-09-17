/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen, Calendar, CheckCircle2, ArrowRight, Star, Users, Clock, Sparkles } from 'lucide-react';
import { PageId } from '../types';
import { SERVICES_DATA, SALON_INFO } from '../data';

interface CorsiViewProps {
  setCurrentPage: (page: PageId) => void;
}

export default function CorsiView({ setCurrentPage }: CorsiViewProps) {
  const academyService = SERVICES_DATA.find(s => s.id === 'academy');
  const [selectedMaster, setSelectedMaster] = useState<string>('Master in Bridal Couture & Styling');

  const courses = [
    {
      title: 'Master in Bridal Couture & Styling',
      duration: '2 Giorni Intensivi',
      level: 'Avanzato / Professionisti',
      badge: 'Bestseller',
      desc: 'Dalla gestione emotiva e logistica della sposa alla realizzazione di chignon geometrici, semiraccolti couture e onde hollywoodiane a lunga tenuta (24h). Include pratica con modelle reali.',
      modules: ['Studio Morfologico e Architettura dei Volumi', 'Tecniche di Ancoraggio Invisibile e Veli', 'Onde Hollywoodiane con Ferri a Caldo', 'Shooting fotografico finale dei lavori']
    },
    {
      title: 'Master in Bespoke Dry Cut & Sculpting',
      duration: '1 Giorno Full-Immersion',
      level: 'Intermedio / Avanzato',
      badge: 'Metodo Brevettato',
      desc: 'Padroneggia l\'innovativo taglio a secco di Nicole Vinti. Impara a leggere la caduta naturale, eliminare le imperfezioni e creare forme che le clienti possono gestire a casa in 5 minuti.',
      modules: ['Lettura delle ritrosie e caduta a secco', 'Scalature invisibili e volumi tridimensionali', 'Taglio della frangia e curtain bangs su misura', 'Styling e asciugatura con phon a mano libera']
    },
    {
      title: 'Master in Armocromia & Facial Design',
      duration: '1 Giorno Teorico & Pratico',
      level: 'Tutti i Livelli',
      badge: 'Novità Formativa',
      desc: 'Fondi l\'hair styling con la consulenza d\'immagine d\'eccellenza. Impara a riconoscere sottotono, valore e contrasto per proporre colori e tagli che valorizzano istantaneamente il volto.',
      modules: ['Uso professionale del set di drappi', 'Analisi delle 4 stagioni e 16 sottogruppi', 'Abbinamento colore capelli e nuance carnagione', 'Comunicazione e consulenza ad alto valore aggiunto']
    }
  ];

  const handleEnrollWhatsApp = (courseTitle: string) => {
    const text = encodeURIComponent(`Ciao Nicole Vinti Academy! Sono un professionista interessato a partecipare al "${courseTitle}". Vorrei ricevere il programma dettagliato, il calendario delle prossime date e i costi.`);
    window.open(`https://wa.me/${SALON_INFO.whatsapp.replace(/\D/g, '')}?text=${text}`, '_blank');
  };

  return (
    <div id="corsi-page" className="bg-neutral-950 text-neutral-200 min-h-screen pt-24 pb-20">
      {/* HERO SECTION */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden border-b border-neutral-900 mb-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1600"
            alt="Academy Corsi Nicole Vinti"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/40" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 py-16">
          <span className="text-amber-400 font-mono text-xs sm:text-sm tracking-[0.3em] uppercase block">
            Alta Formazione Professionale
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-[0.05em] uppercase leading-tight">
            Academy & Corsi
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            I Master d'Élite firmati Nicole Vinti: percorsi formativi esclusivi a numero chiuso dedicati ad acconciatori e professionisti della bellezza che desiderano posizionarsi nella fascia luxury.
          </p>
        </div>
      </section>

      {/* VALUE HIGHLIGHTS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-white font-serif text-lg uppercase tracking-wide">Classi a Numero Chiuso</h3>
            <p className="text-neutral-400 text-xs leading-relaxed font-light">
              Massimo 6-8 allievi per sessione per garantire un affiancamento costante e correzioni individuali da parte di Nicole Vinti.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-white font-serif text-lg uppercase tracking-wide">Pratica su Modelle Reali</h3>
            <p className="text-neutral-400 text-xs leading-relaxed font-light">
              Niente testine inanimate: lavorerai su modelle selezionate con morfologie e tipologie di capello autentiche.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-white font-serif text-lg uppercase tracking-wide">Certificato Ufficiale</h3>
            <p className="text-neutral-400 text-xs leading-relaxed font-light">
              Al termine del corso riceverai il Diploma di Specializzazione Ufficiale Nicole Vinti Academy e materiale didattico esclusivo.
            </p>
          </div>
        </div>
      </div>

      {/* MASTER LIST */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-amber-400 font-mono text-xs uppercase tracking-widest">Offerta Formativa</span>
          <h2 className="text-3xl font-serif text-white uppercase tracking-wider">I Percorsi di Specializzazione</h2>
        </div>

        <div className="space-y-8">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl bg-neutral-900/40 border border-neutral-800/80 hover:border-amber-500/40 transition-all shadow-xl"
            >
              <div className="flex flex-col lg:flex-row justify-between gap-6 items-start lg:items-center border-b border-neutral-800/80 pb-6 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-mono uppercase tracking-widest">
                      {course.badge}
                    </span>
                    <span className="text-xs text-neutral-400 font-mono flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      {course.duration}
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif text-white font-bold">{course.title}</h3>
                </div>

                <button
                  onClick={() => handleEnrollWhatsApp(course.title)}
                  className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-neutral-950 font-bold text-xs uppercase tracking-[0.15em] rounded-full shadow-lg transition-all shrink-0"
                >
                  Richiedi Info & Date
                </button>
              </div>

              <p className="text-neutral-300 text-sm leading-relaxed mb-6 font-light max-w-4xl">
                {course.desc}
              </p>

              <div>
                <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest block mb-3">
                  Moduli Didattici Principali:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {course.modules.map((mod, mIdx) => (
                    <div key={mIdx} className="flex items-center gap-2.5 text-xs text-neutral-300 bg-neutral-950/60 p-3 rounded-xl border border-neutral-800/60">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{mod}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FINAL REGISTRATION SECTION */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 pt-10">
        <h3 className="text-2xl sm:text-3xl font-serif text-white uppercase tracking-wider">
          Vuoi organizzare una Masterclass nel tuo Salone?
        </h3>
        <p className="text-neutral-400 text-sm leading-relaxed font-light">
          Nicole Vinti offre anche percorsi formativi personalizzati "In-Salon Training" direttamente presso il tuo salone per formare tutto il tuo team.
        </p>
        <button
          onClick={() => handleEnrollWhatsApp('In-Salon Training Personalizzato')}
          className="px-8 py-4 border border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-neutral-950 font-bold text-xs uppercase tracking-[0.2em] rounded-full transition-all"
        >
          Contatta la Segreteria Academy
        </button>
      </div>
    </div>
  );
}
