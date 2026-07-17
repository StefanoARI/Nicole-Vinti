/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, X, Eye } from 'lucide-react';

interface PrivacyProps {
  showFullModal: boolean;
  setShowFullModal: (show: boolean) => void;
}

export default function PrivacyBanner({ showFullModal, setShowFullModal }: PrivacyProps) {
  const [accepted, setAccepted] = useState(true); // default to true to not annoy user, but read from localStorage

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setAccepted(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setAccepted(true);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setAccepted(true);
  };

  return (
    <>
      {/* Cookie Banner */}
      <AnimatePresence>
        {!accepted && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-md bg-neutral-950 border border-neutral-800 text-neutral-300 p-5 rounded-none shadow-2xl z-50 flex flex-col gap-4"
          >
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-white tracking-[0.05em] uppercase">Informativa sui Cookie</h4>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  Utilizziamo cookie tecnici per garantirti la migliore esperienza di navigazione e, con il tuo consenso, cookie di profilazione per inviarti messaggi in linea con le tue preferenze.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-end text-xs">
              <button
                onClick={() => setShowFullModal(true)}
                className="text-neutral-400 hover:text-white transition-colors underline flex items-center gap-1"
              >
                <Eye className="w-3.5 h-3.5" />
                Leggi Info
              </button>
              <button
                onClick={handleDecline}
                className="px-3 py-1.5 border border-neutral-800 text-neutral-400 hover:text-white transition-all hover:bg-neutral-900"
              >
                Rifiuta
              </button>
              <button
                onClick={handleAccept}
                className="px-4 py-1.5 bg-amber-500 text-neutral-950 font-semibold hover:bg-amber-400 transition-all"
              >
                Accetta Tutti
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Privacy Policy Modal */}
      <AnimatePresence>
        {showFullModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative bg-neutral-950 border border-neutral-900 max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 md:p-8 text-neutral-300 font-sans shadow-2xl"
            >
              <button
                onClick={() => setShowFullModal(false)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-white p-2"
                aria-label="Chiudi"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-6 border-b border-neutral-900 pb-4">
                <Shield className="w-6 h-6 text-amber-400" />
                <h2 className="text-xl font-serif font-bold text-white tracking-[0.05em] uppercase">
                  Privacy & Cookie Policy "A Norma" GDPR
                </h2>
              </div>

              <div className="space-y-6 text-sm font-light leading-relaxed">
                <div>
                  <h3 className="text-sm font-semibold text-amber-200 uppercase mb-2">1. Titolare del Trattamento</h3>
                  <p>
                    Il titolare del trattamento è <strong>Nicole Vinti Beauty & Hair Designer</strong>, con sede legale in Milano, Via della Moda 22, P.IVA 12345670159. Email di contatto: <span className="text-amber-100">info@nicolevinti.it</span>.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-amber-200 uppercase mb-2">2. Tipologia di Dati Raccolti</h3>
                  <p>
                    I dati raccolti tramite questo sito si limitano a quelli forniti volontariamente dall'utente tramite il modulo di prenotazione/contatto (Nome, Cognome, Telefono, Email, Servizio d'interesse, Data e Orario preferiti) ed ai dati di navigazione standard (IP, browser) gestiti tramite cookie tecnici.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-amber-200 uppercase mb-2">3. Finalità e Base Giuridica</h3>
                  <p>
                    Il trattamento dei dati è finalizzato esclusivamente alla gestione delle richieste di prenotazione e consulenza commerciale. La base giuridica è il consenso dell'interessato o l'esecuzione di misure precontrattuali.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-amber-200 uppercase mb-2">4. Periodo di Conservazione</h3>
                  <p>
                    I dati personali forniti spontaneamente tramite il form saranno conservati per il tempo strettamente necessario a evadere la richiesta di appuntamento o consulenza, e comunque non oltre i 12 mesi, a meno che non si instauri un rapporto contrattuale duraturo.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-amber-200 uppercase mb-2">5. Diritti dell'Interessato</h3>
                  <p>
                    Ai sensi del Regolamento UE 2016/679 (GDPR), hai il diritto di accedere ai tuoi dati, chiederne la rettifica, la cancellazione (oblio), la limitazione, la portabilità, nonché opporrti al trattamento in qualsiasi momento inviando una email a <span className="text-amber-100">info@nicolevinti.it</span>.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-amber-200 uppercase mb-2">6. Consenso all'utilizzo dei Cookie</h3>
                  <p>
                    Questo sito utilizza cookie tecnici strettamente necessari al funzionamento del portale e all'abilitazione del modulo di prenotazione interattivo. Non effettuiamo cessione di dati a terze parti a scopo di profilazione aggressiva senza il tuo esplicito consenso.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-900 flex justify-end">
                <button
                  onClick={() => setShowFullModal(false)}
                  className="px-6 py-2 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-[0.1em] transition-colors"
                >
                  Ho Capito
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
