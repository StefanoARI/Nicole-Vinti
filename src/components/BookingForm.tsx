/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, Mail, Sparkles, MessageSquare, Check, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_DATA, SALON_INFO } from '../data';

interface BookingRequest {
  id: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  notes: string;
  status: 'pending' | 'confirmed';
  timestamp: string;
}

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: SERVICES_DATA[0].id,
    date: '',
    time: '',
    notes: '',
  });

  const [submittedRequests, setSubmittedRequests] = useState<BookingRequest[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('nicole_vinti_bookings');
    if (saved) {
      setSubmittedRequests(JSON.parse(saved));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate server side transmission
    setTimeout(() => {
      const newBooking: BookingRequest = {
        id: 'b_' + Date.now(),
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        service: SERVICES_DATA.find((s) => s.id === formData.service)?.title || formData.service,
        date: formData.date,
        time: formData.time,
        notes: formData.notes,
        status: 'pending',
        timestamp: new Date().toLocaleDateString('it-IT', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
      };

      const updated = [newBooking, ...submittedRequests];
      setSubmittedRequests(updated);
      localStorage.setItem('nicole_vinti_bookings', JSON.stringify(updated));

      setIsSuccess(true);
      setLoading(false);

      // Reset form but keep service
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: formData.service,
        date: '',
        time: '',
        notes: '',
      });
    }, 1200);
  };

  const handleWhatsAppRedirect = (booking?: BookingRequest) => {
    const detail = booking
      ? `Ciao Nicole, sono ${booking.name}. Ho appena inoltrato una richiesta di prenotazione per il servizio "${booking.service}" il giorno ${booking.date} alle ore ${booking.time} tramite il tuo sito. Vorrei confermare i dettagli!`
      : `Ciao Nicole, vorrei richiedere maggiori informazioni per prenotare una consulenza d'immagine o servizio sposa.`;

    const encoded = encodeURIComponent(detail);
    window.open(`https://wa.me/${SALON_INFO.whatsapp.replace(/\+/g, '').replace(/\s+/g, '')}?text=${encoded}`, '_blank');
  };

  return (
    <div className="bg-neutral-950 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-amber-400 font-mono text-xs tracking-[0.25em] uppercase block mb-3">
            Atelier Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-[0.05em] uppercase mb-4">
            Richiedi la tua Consulenza Esclusiva
          </h2>
          <p className="text-sm text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
            Scegli il servizio, seleziona la tua data e ora preferita. Il nostro team ti contatterà entro poche ore per confermare l'appuntamento o personalizzarlo in base alle tue esigenze.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Form */}
          <div className="lg:col-span-2 bg-neutral-900/40 border border-neutral-800/60 p-6 sm:p-8 rounded-3xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome e Cognome */}
              <div className="space-y-1.5">
                <label className="block text-xs uppercase tracking-[0.1em] text-neutral-400 font-medium">
                  Nome & Cognome
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-600" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Esempio: Giulia Bianchi"
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-amber-400 text-sm text-neutral-200 px-10 py-3 rounded-xl outline-none transition-colors font-light placeholder:text-neutral-700"
                  />
                </div>
              </div>

              {/* Telefono e Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-[0.1em] text-neutral-400 font-medium">
                    Telefono Cellulare
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-600" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+39 345 1234567"
                      className="w-full bg-neutral-950 border border-neutral-800 focus:border-amber-400 text-sm text-neutral-200 px-10 py-3 rounded-xl outline-none transition-colors font-light placeholder:text-neutral-700"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-[0.1em] text-neutral-400 font-medium">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-600" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="giulia.bianchi@esempio.com"
                      className="w-full bg-neutral-950 border border-neutral-800 focus:border-amber-400 text-sm text-neutral-200 px-10 py-3 rounded-xl outline-none transition-colors font-light placeholder:text-neutral-700"
                    />
                  </div>
                </div>
              </div>

              {/* Servizio */}
              <div className="space-y-1.5">
                <label className="block text-xs uppercase tracking-[0.1em] text-neutral-400 font-medium">
                  Servizio Richiesto
                </label>
                <div className="relative">
                  <Sparkles className="absolute left-3.5 top-3.5 w-4 h-4 text-amber-500/80" />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-amber-400 text-sm text-neutral-200 px-10 py-3 rounded-xl outline-none transition-colors font-light appearance-none"
                  >
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title} — {s.subtitle}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-4 pointer-events-none w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-neutral-400" />
                </div>
              </div>

              {/* Data e Ora */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-[0.1em] text-neutral-400 font-medium">
                    Data Desiderata
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-600" />
                    <input
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-neutral-950 border border-neutral-800 focus:border-amber-400 text-sm text-neutral-200 px-10 py-3 rounded-xl outline-none transition-colors font-light"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-[0.1em] text-neutral-400 font-medium">
                    Fascia Oraria Preferita
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-600" />
                    <select
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full bg-neutral-950 border border-neutral-800 focus:border-amber-400 text-sm text-neutral-200 px-10 py-3 rounded-xl outline-none transition-colors font-light appearance-none"
                    >
                      <option value="">Seleziona orario...</option>
                      <option value="Mattina (09:00 - 12:30)">Mattina (09:00 - 12:30)</option>
                      <option value="Pomeriggio (14:00 - 18:30)">Pomeriggio (14:00 - 18:30)</option>
                      <option value="Sera (18:30 - 20:00 - Solo Venerdì)">Sera (18:30 - 20:00 - Solo Venerdì)</option>
                    </select>
                    <div className="absolute right-4 top-4 pointer-events-none w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-neutral-400" />
                  </div>
                </div>
              </div>

              {/* Note / Dettagli Extra */}
              <div className="space-y-1.5">
                <label className="block text-xs uppercase tracking-[0.1em] text-neutral-400 font-medium">
                  Note Extra o Dettagli (Facoltativo)
                </label>
                <textarea
                  name="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Se hai richieste specifiche o dettagli sull'abito da sposa, descrivili qui..."
                  className="w-full bg-neutral-950 border border-neutral-800 focus:border-amber-400 text-sm text-neutral-200 p-3.5 rounded-xl outline-none transition-colors font-light placeholder:text-neutral-700 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-neutral-950 font-bold text-xs tracking-[0.2em] uppercase py-4 transition-all duration-300 rounded-full shadow-xl flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <span className="animate-pulse">Inoltro in corso...</span>
                ) : (
                  <>
                    <span>Invia Richiesta di Prenotazione</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Sidebar Info e Prenotazioni Locali */}
          <div className="space-y-8">
            {/* Quick WhatsApp Block */}
            <div className="bg-neutral-900/30 border border-neutral-800/60 p-6 rounded-3xl space-y-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-[0.1em] font-serif">
                Hai Bisogno di Risposte Rapide?
              </h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Puoi scriverci direttamente su WhatsApp per concordare un appuntamento istantaneo con Nicole o chiarire qualsiasi dubbio sui pacchetti sposa.
              </p>
              <button
                onClick={() => handleWhatsAppRedirect()}
                className="w-full bg-neutral-900 border border-amber-500 hover:bg-amber-500/10 text-amber-300 font-bold text-xs tracking-[0.1em] uppercase py-3 transition-colors rounded-full flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-amber-400" />
                Contatta via WhatsApp
              </button>
            </div>

            {/* Le tue prenotazioni locali */}
            {submittedRequests.length > 0 && (
              <div className="bg-neutral-900/40 border border-neutral-800/60 p-6 rounded-3xl space-y-4">
                <h3 className="text-sm font-semibold text-white uppercase tracking-[0.1em] font-serif border-b border-neutral-800/60 pb-2 flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-400" />
                  Le tue Richieste ({submittedRequests.length})
                </h3>
                <div className="space-y-3.5 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                  {submittedRequests.map((req) => (
                    <div key={req.id} className="bg-neutral-950 p-4 border border-neutral-800/60 rounded-2xl space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] bg-amber-500/10 text-amber-400 px-2.5 py-0.5 rounded-full uppercase font-mono tracking-wider">
                          {req.status === 'pending' ? 'In Attesa' : 'Confermato'}
                        </span>
                        <span className="text-[9px] text-neutral-600 font-mono">{req.timestamp}</span>
                      </div>
                      <h4 className="text-xs font-semibold text-white uppercase tracking-wider">{req.service}</h4>
                      <div className="text-[11px] text-neutral-500 space-y-0.5">
                        <p>
                          <strong>Data:</strong> {req.date}
                        </p>
                        <p>
                          <strong>Ora:</strong> {req.time}
                        </p>
                      </div>
                      <button
                        onClick={() => handleWhatsAppRedirect(req)}
                        className="text-[10px] text-amber-300 hover:text-amber-100 flex items-center gap-1 underline transition-colors pt-1"
                      >
                        Sollecita su WhatsApp
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {isSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-neutral-950 border border-neutral-800 max-w-md w-full p-8 text-center space-y-6 shadow-2xl rounded-3xl"
            >
              <div className="w-16 h-16 bg-amber-500/10 border border-amber-500 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-8 h-8 text-amber-400" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-serif font-bold text-white tracking-wider uppercase">
                  Richiesta Inoltrata con Successo!
                </h3>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  Grazie per aver scelto l'Atelier di Nicole Vinti. La tua richiesta è stata registrata nel sistema ed è visibile nel riquadro laterale. Ti ricontatteremo prontamente.
                </p>
              </div>

              <div className="bg-neutral-900/60 p-4 border border-neutral-800/60 text-left space-y-2 text-xs rounded-2xl">
                {submittedRequests[0] && (
                  <>
                    <p>
                      <strong className="text-neutral-500">Servizio:</strong>{' '}
                      <span className="text-white font-medium">{submittedRequests[0].service}</span>
                    </p>
                    <p>
                      <strong className="text-neutral-500">Giorno preferito:</strong>{' '}
                      <span className="text-white font-medium">{submittedRequests[0].date}</span>
                    </p>
                    <p>
                      <strong className="text-neutral-500">Fascia oraria:</strong>{' '}
                      <span className="text-white font-medium">{submittedRequests[0].time}</span>
                    </p>
                  </>
                )}
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => handleWhatsAppRedirect(submittedRequests[0])}
                  className="w-full bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs tracking-wider uppercase py-3 transition-colors flex items-center justify-center gap-2 rounded-full"
                >
                  <MessageSquare className="w-4 h-4" />
                  Invia Conferma Istantanea su WhatsApp
                </button>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="w-full bg-neutral-900 hover:bg-neutral-850 text-neutral-400 hover:text-white font-medium text-xs tracking-wider uppercase py-3 transition-colors border border-neutral-800 rounded-full"
                >
                  Chiudi Schermata
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
