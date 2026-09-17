/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2, Instagram, Calendar } from 'lucide-react';
import { PageId } from '../types';
import { SALON_INFO, IMAGE_PATHS } from '../data';

interface ContactViewProps {
  setCurrentPage: (page: PageId) => void;
}

export default function ContactView({ setCurrentPage }: ContactViewProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Informazioni Generali',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Ciao Nicole Vinti Atelier! Richiesta dal sito web:\n\n*Nome*: ${formData.name}\n*Email*: ${formData.email}\n*Telefono*: ${formData.phone}\n*Oggetto*: ${formData.subject}\n*Messaggio*:\n${formData.message}`
    );
    window.open(`https://wa.me/${SALON_INFO.whatsapp.replace(/\D/g, '')}?text=${text}`, '_blank');
    setIsSubmitted(true);
  };

  return (
    <div id="contact-page" className="bg-neutral-950 text-neutral-200 min-h-screen pt-24 pb-20">
      {/* HERO SECTION */}
      <div className="relative min-h-[45vh] flex items-center justify-center overflow-hidden border-b border-neutral-900 mb-16">
        <div className="absolute inset-0">
          <img
            src={IMAGE_PATHS.salonInterior}
            alt="Atelier Nicole Vinti"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent" />
        </div>
        <div className="relative z-10 text-center space-y-3 px-4 py-12">
          <span className="text-amber-400 font-mono text-xs tracking-[0.3em] uppercase block">
            Entra in Contatto
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-[0.05em] uppercase">
            Contatti & Atelier
          </h1>
          <p className="text-neutral-400 text-sm max-w-lg mx-auto font-light leading-relaxed">
            Siamo a tua disposizione per informazioni sui servizi, appuntamenti bespoke e preventivi personalizzati per spose e corsi.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Info Cards */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-amber-400 font-mono text-xs uppercase tracking-widest block mb-2">I Nostri Recapiti</span>
              <h2 className="text-2xl font-serif text-white uppercase tracking-wider">Vieni a Trovarci</h2>
              <p className="text-neutral-400 text-sm mt-2 font-light">
                Un'oasi di tranquillità e riservatezza dove riscoprire il valore del tuo tempo e della tua bellezza.
              </p>
            </div>

            <div className="space-y-4">
              {/* Address */}
              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block">Indirizzo</span>
                  <p className="text-sm text-white font-medium mt-0.5">{SALON_INFO.address}</p>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block">Telefono & WhatsApp</span>
                  <a href={`tel:${SALON_INFO.phone.replace(/\s+/g, '')}`} className="text-sm text-white hover:text-amber-400 transition-colors font-medium block">
                    {SALON_INFO.phone}
                  </a>
                  <a
                    href={`https://wa.me/${SALON_INFO.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-amber-400 hover:text-amber-300 font-mono mt-1 inline-block"
                  >
                    WhatsApp: {SALON_INFO.whatsapp} ↗
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block">Email</span>
                  <a href={`mailto:${SALON_INFO.email}`} className="text-sm text-white hover:text-amber-400 transition-colors font-medium">
                    {SALON_INFO.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-amber-400" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block mb-2">Orari Atelier</span>
                  <div className="space-y-1.5 text-xs">
                    {SALON_INFO.hours.map((item, idx) => (
                      <div key={idx} className="flex justify-between border-b border-neutral-800/50 pb-1">
                        <span className="text-neutral-400">{item.days}</span>
                        <span className="text-neutral-200 font-mono">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Prenota ora CTA card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-amber-500/30 text-center space-y-3">
              <h3 className="text-lg font-serif text-white uppercase tracking-wider">Desideri un appuntamento?</h3>
              <p className="text-xs text-neutral-400">Accedi al nostro modulo guidato per scegliere il servizio e la data preferita.</p>
              <button
                onClick={() => {
                  setCurrentPage('booking');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-neutral-950 font-bold text-xs uppercase tracking-[0.15em] rounded-xl shadow-lg transition-all"
              >
                Prenota Online
              </button>
            </div>
          </div>

          {/* Right: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900/50 border border-neutral-800/80 shadow-2xl space-y-8">
              <div>
                <span className="text-amber-400 font-mono text-xs uppercase tracking-widest block mb-2">Modulo Rapido</span>
                <h2 className="text-2xl sm:text-3xl font-serif text-white uppercase tracking-wider">
                  Inviaci un Messaggio
                </h2>
                <p className="text-neutral-400 text-sm mt-2 font-light">
                  Compila i campi qui sotto per ricevere risposta rapida dallo staff di Nicole Vinti.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-amber-400 mx-auto" />
                  <h3 className="text-lg font-serif text-white">Messaggio Inviato con Successo!</h3>
                  <p className="text-xs text-neutral-400">
                    Verrai ricontattato al più presto dal nostro staff. Grazie per aver scelto Nicole Vinti Atelier.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs text-amber-400 underline uppercase tracking-wider mt-2"
                  >
                    Invia un altro messaggio
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                        Nome & Cognome *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Es. Maria Rossi"
                        className="w-full px-4 py-3.5 rounded-xl bg-neutral-950/80 border border-neutral-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                        Recapito Telefonico *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="Es. +39 333 1234567"
                        className="w-full px-4 py-3.5 rounded-xl bg-neutral-950/80 border border-neutral-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                        Indirizzo Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="maria.rossi@email.it"
                        className="w-full px-4 py-3.5 rounded-xl bg-neutral-950/80 border border-neutral-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                        Motivo del Contatto
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                        className="w-full px-4 py-3.5 rounded-xl bg-neutral-950/80 border border-neutral-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                      >
                        <option value="Informazioni Generali">Informazioni Generali</option>
                        <option value="Servizio Sposa & Bridal">Servizio Sposa & Bridal</option>
                        <option value="Atelier Capelli (Taglio, Colore, Integration)">Atelier Capelli</option>
                        <option value="Academy & Corsi di Formazione">Academy & Corsi</option>
                        <option value="Gift Card">Gift Card</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                      Il Tuo Messaggio *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Descrivi la tua richiesta o le date in cui vorresti fissare una consulenza..."
                      className="w-full p-4 rounded-xl bg-neutral-950/80 border border-neutral-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-neutral-950 font-bold text-xs uppercase tracking-[0.2em] rounded-xl shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Invia Richiesta Diretta</span>
                  </button>
                  <p className="text-[11px] text-neutral-500 text-center font-light">
                    Cliccando sul pulsante si aprirà automaticamente WhatsApp con la tua richiesta pre-compilata.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
