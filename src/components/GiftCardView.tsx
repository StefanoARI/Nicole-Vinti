/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Gift, Mail, Calendar, User, ChevronRight, CheckCircle2, Image as ImageIcon, AlertCircle } from 'lucide-react';
import { PageId } from '../types';
import { SALON_INFO, IMAGE_PATHS } from '../data';

interface GiftCardViewProps {
  setCurrentPage: (page: PageId) => void;
}

const DEFAULT_DESIGN = IMAGE_PATHS.salonInterior;

export default function GiftCardView({ setCurrentPage }: GiftCardViewProps) {
  const [customAmount, setCustomAmount] = useState<string>('100');
  const [amountError, setAmountError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    recipientName: '',
    recipientEmail: '',
    senderName: '',
    message: '',
    deliveryDate: ''
  });

  const finalAmount = Number(customAmount) || 0;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (finalAmount < 20) {
      setAmountError("L'importo minimo per la gift card è 20€");
      return;
    }
    setAmountError(null);

    const text = `Ciao Nicole Vinti Atelier! Vorrei acquistare una Gift Card Digitale.
    
*Dettagli Gift Card*
Importo: €${finalAmount}

*Destinatario*
Nome: ${formData.recipientName}
Email: ${formData.recipientEmail}
Data di consegna: ${formData.deliveryDate || 'Subito'}

*Da parte di*
Nome: ${formData.senderName}

*Messaggio personalizzato*
${formData.message || 'Nessun messaggio'}

Come posso procedere per il pagamento?`;

    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/${SALON_INFO.whatsapp.replace(/\D/g, '')}?text=${encodedText}`;
    
    window.open(waUrl, '_blank');
  };

  return (
    <div className="pt-24 min-h-screen bg-neutral-950 pb-24">
      {/* Hero Section */}
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden border-b border-neutral-900 mb-16">
        <div className="absolute inset-0">
          <img
            src={IMAGE_PATHS.salonInterior}
            alt="Gift Card"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent" />
        </div>
        <div className="relative z-10 text-center space-y-3 px-4">
          <span className="text-amber-400 font-mono text-xs tracking-[0.3em] uppercase block">
            Il Dono Perfetto
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-[0.05em] uppercase">
            E-Gift Card
          </h1>
          <p className="text-neutral-400 text-sm max-w-lg mx-auto font-light">
            Regala un'esperienza indimenticabile di bellezza e relax nell'Atelier Nicole Vinti. La Gift Card verrà inviata via email con il tuo messaggio personale.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <form onSubmit={handlePurchase} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Column: Configuration */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Step 1: Amount */}
            <section>
              <h2 className="text-xl font-serif text-white uppercase tracking-wider mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center text-sm font-mono border border-amber-500/20">1</span>
                Seleziona l'Importo
              </h2>
              <div className="space-y-4">
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 text-lg">€</span>
                  <input
                    type="number"
                    min="20"
                    step="5"
                    placeholder="Inserisci l'importo (min. €20)"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      if (amountError) setAmountError(null);
                    }}
                    className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl py-4 pl-10 pr-4 text-white focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all font-serif text-lg"
                    required
                  />
                </div>
                {amountError && (
                  <p className="text-red-400 text-xs flex items-center gap-1.5 mt-1.5">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {amountError}
                  </p>
                )}
              </div>
            </section>

            {/* Step 2: Details */}
            <section>
              <h2 className="text-xl font-serif text-white uppercase tracking-wider mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center text-sm font-mono border border-amber-500/20">2</span>
                Dettagli & Messaggio
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-400 uppercase tracking-wider mb-2">Da (Tuo Nome) *</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                      <input
                        type="text"
                        name="senderName"
                        value={formData.senderName}
                        onChange={handleInputChange}
                        className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl py-3.5 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-amber-500/50 transition-all"
                        required
                        placeholder="Il tuo nome"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-400 uppercase tracking-wider mb-2">A (Nome Destinatario) *</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                      <input
                        type="text"
                        name="recipientName"
                        value={formData.recipientName}
                        onChange={handleInputChange}
                        className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl py-3.5 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-amber-500/50 transition-all"
                        required
                        placeholder="Nome del destinatario"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-400 uppercase tracking-wider mb-2">Email Destinatario *</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                      <input
                        type="email"
                        name="recipientEmail"
                        value={formData.recipientEmail}
                        onChange={handleInputChange}
                        className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl py-3.5 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-amber-500/50 transition-all"
                        required
                        placeholder="Dove inviare la Gift Card"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-400 uppercase tracking-wider mb-2">Data di Consegna (Opzionale)</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                      <input
                        type="date"
                        name="deliveryDate"
                        value={formData.deliveryDate}
                        onChange={handleInputChange}
                        className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl py-3.5 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-amber-500/50 transition-all"
                      />
                    </div>
                    <p className="text-[10px] text-neutral-500 mt-1">Lascia vuoto per inviare immediatamente dopo il pagamento.</p>
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-medium text-neutral-400 uppercase tracking-wider mb-2">Messaggio Personalizzato</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={12}
                    className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-amber-500/50 transition-all resize-none"
                    placeholder="Scrivi un augurio o un messaggio speciale..."
                  />
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Preview & Checkout */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32 space-y-8">
              
              <h2 className="text-xl font-serif text-white uppercase tracking-wider flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center text-sm font-mono border border-amber-500/20">3</span>
                Anteprima
              </h2>

              {/* Gift Card Preview */}
              <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl overflow-hidden shadow-2xl border border-neutral-800/80">
                <div className="relative aspect-[16/9] w-full">
                  <img src={DEFAULT_DESIGN} alt="Design Preview" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-between p-6">
                    <div className="flex justify-between items-start">
                      <span className="font-serif text-lg tracking-[0.2em] text-white/90 uppercase">Nicole Vinti</span>
                      <span className="text-white/80 font-mono text-sm border border-white/30 px-3 py-1 rounded-full backdrop-blur-sm">
                        € {finalAmount}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-white font-serif text-xl">{formData.recipientName || 'Nome Destinatario'}</p>
                      <p className="text-white/70 text-xs font-light uppercase tracking-wider">Un dono speciale da {formData.senderName || 'Tuo Nome'}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-sm text-neutral-400 italic line-clamp-3">
                    "{formData.message || 'Il tuo messaggio personalizzato apparirà qui.'}"
                  </p>
                  <div className="flex justify-between items-center text-[10px] text-neutral-500 uppercase tracking-widest font-mono border-t border-neutral-800 pt-4">
                    <span>Valida 12 Mesi</span>
                    <span>Utilizzabile in Atelier</span>
                  </div>
                </div>
              </div>

              {/* Checkout Summary */}
              <div className="bg-neutral-900/40 border border-neutral-800/60 rounded-2xl p-6 space-y-6">
                <div className="flex justify-between items-center text-white">
                  <span className="text-sm font-medium">Totale Gift Card</span>
                  <span className="text-2xl font-serif">€ {finalAmount.toFixed(2)}</span>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-neutral-950 text-sm font-bold uppercase tracking-[0.15em] py-4 rounded-xl shadow-lg hover:shadow-amber-500/10 transition-all flex items-center justify-center space-x-2"
                >
                  <Gift className="w-5 h-5" />
                  <span>Acquista Gift Card</span>
                </button>
                <p className="text-[10px] text-neutral-500 text-center uppercase tracking-wider">
                  Cliccando verrai reindirizzato su WhatsApp per finalizzare il pagamento in modo sicuro col nostro staff.
                </p>
              </div>

            </div>
          </div>
          
        </form>
      </div>
    </div>
  );
}
