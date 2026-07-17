/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Mail, MapPin, Instagram, Clock, ShieldCheck, Heart } from 'lucide-react';
import { SALON_INFO } from '../data';
import { PageId } from '../types';

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
  openPrivacyModal: () => void;
}

export default function Footer({ setCurrentPage, openPrivacyModal }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNav = (pageId: PageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="app-footer" className="bg-neutral-950 border-t border-neutral-900 text-neutral-400 font-sans pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Colonna Brand / Logo */}
          <div className="space-y-4">
            <div className="flex flex-col cursor-pointer" onClick={() => handleNav('home')}>
              <span className="text-xl font-serif font-bold tracking-[0.15em] text-amber-100 uppercase">
                NICOLE VINTI
              </span>
              <span className="text-[9px] font-mono tracking-[0.25em] text-neutral-500 uppercase">
                HAIR DESIGNER & BRIDAL SPECIALIST
              </span>
            </div>
            <p className="text-sm leading-relaxed text-neutral-400 font-light">
              Eccellenza sartoriale nell'Hair Design. Valorizziamo la tua bellezza naturale attraverso tecniche d'avanguardia ed un approccio artistico esclusivo.
            </p>
            <div className="flex space-x-3 pt-2">
              <a
                href={SALON_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:border-amber-400 hover:text-amber-200 transition-all text-neutral-400"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Colonna Servizi */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-[0.15em] uppercase mb-5 font-serif">
              Servizi Esclusivi
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => handleNav('bridal')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Bridal Experience (Sposa)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('hair-design')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Cut & Styling Couture
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('color')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Balayage & Color Brightness
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('consulting')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Consulenza d'Immagine
                </button>
              </li>
            </ul>
          </div>

          {/* Colonna Orari */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-[0.15em] uppercase mb-5 font-serif flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              Orari Atelier
            </h3>
            <ul className="space-y-3 text-sm">
              {SALON_INFO.hours.map((item, idx) => (
                <li key={idx} className="flex justify-between border-b border-neutral-900/60 pb-1.5">
                  <span className="text-neutral-500 font-light">{item.days}</span>
                  <span className="text-neutral-300 font-medium">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonna Contatti */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white tracking-[0.15em] uppercase mb-5 font-serif">
              Contatti & Sede
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="font-light leading-relaxed text-neutral-300">{SALON_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`tel:${SALON_INFO.phone.replace(/\s+/g, '')}`}
                  className="hover:text-amber-200 transition-colors font-medium text-neutral-300"
                >
                  {SALON_INFO.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`mailto:${SALON_INFO.email}`}
                  className="hover:text-amber-200 transition-colors font-medium text-neutral-300"
                >
                  {SALON_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-[1px] bg-neutral-900 my-8" />

        {/* Bottom bar & GDPR Info */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="space-y-1 text-center sm:text-left">
            <div>
              &copy; {currentYear} {SALON_INFO.name}. Tutti i diritti riservati.
            </div>
            <div className="flex justify-center sm:justify-start items-center gap-2 text-[11px] text-neutral-600">
              <span>{SALON_INFO.vatNumber}</span>
              <span>•</span>
              <span>Sito ottimizzato "A Norma" GDPR</span>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={openPrivacyModal}
              className="hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Privacy & Cookie Policy
            </button>
            <div className="flex items-center gap-1 text-[10px] text-neutral-600">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-red-500 fill-red-500" />
              <span>for Nicole Vinti</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
