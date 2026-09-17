/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Instagram, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId } from '../types';
import { SALON_INFO } from '../data';

interface HeaderProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
}

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'atelier' | 'sposa' | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<'atelier' | 'sposa' | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId: PageId, anchorId?: string) => {
    if (currentPage !== pageId) {
      setCurrentPage(pageId);
      if (anchorId) {
        setTimeout(() => {
          const el = document.getElementById(anchorId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 150);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      if (anchorId) {
        const el = document.getElementById(anchorId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
    setIsOpen(false);
    setActiveDropdown(null);
    setOpenMobileDropdown(null);
  };

  const isAtelierActive = currentPage === 'atelier-capelli' || currentPage === 'hair-design' || currentPage === 'color' || currentPage === 'hair-integration';
  const isSposaActive = currentPage === 'sposa-immagine' || currentPage === 'bridal' || currentPage === 'consulting';

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'px-4 sm:px-6 lg:px-8 pt-4' : 'px-0 pt-0'
        }`}
      >
        <div
          className={`mx-auto transition-all duration-500 ${
            isScrolled
              ? 'max-w-7xl bg-neutral-950/90 backdrop-blur-xl py-3 px-6 sm:px-8 border border-neutral-800/80 rounded-full shadow-2xl shadow-black/80'
              : 'max-w-7xl px-4 sm:px-6 lg:px-8 py-6 border-b border-neutral-900/40 bg-neutral-950/40'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              id="logo-container"
              onClick={() => handleNavClick('home')}
              className="cursor-pointer flex flex-col group"
            >
              <span className="text-base sm:text-lg font-serif font-bold tracking-[0.18em] text-amber-100 transition-colors group-hover:text-amber-300 uppercase">
                NICOLE VINTI
              </span>
              <span className="text-[7.5px] font-mono tracking-[0.25em] text-neutral-400 group-hover:text-amber-100 uppercase transition-all duration-300">
                ATELIER & BRIDAL COUTURE
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav id="desktop-nav" className="hidden xl:flex items-center space-x-2 2xl:space-x-4">
              {/* 1. Home */}
              <button
                onClick={() => handleNavClick('home')}
                className={`text-xs tracking-[0.12em] transition-all duration-200 uppercase relative py-1 px-2.5 ${
                  currentPage === 'home'
                    ? 'text-amber-300 font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Home
                {currentPage === 'home' && (
                  <motion.div
                    layoutId="activeNavDot"
                    className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-amber-500 shadow-md shadow-amber-500/50"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>

              {/* 2. Chi siamo */}
              <button
                onClick={() => handleNavClick('about')}
                className={`text-xs tracking-[0.12em] transition-all duration-200 uppercase relative py-1 px-2.5 ${
                  currentPage === 'about'
                    ? 'text-amber-300 font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Chi Siamo
                {currentPage === 'about' && (
                  <motion.div
                    layoutId="activeNavDot"
                    className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-amber-500 shadow-md shadow-amber-500/50"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>

              {/* 3. Atelier Capelli (Dropdown con sottolink) */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('atelier')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="flex items-center">
                  <button
                    onClick={() => handleNavClick('atelier-capelli')}
                    className={`text-xs tracking-[0.12em] transition-all duration-200 uppercase py-2 pl-2.5 pr-1 flex items-center gap-1 ${
                      isAtelierActive
                        ? 'text-amber-300 font-semibold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    <span>Atelier Capelli</span>
                  </button>
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'atelier' ? null : 'atelier')}
                    className="p-1 text-neutral-500 hover:text-amber-300 transition-colors"
                    aria-label="Apri sottomenu Atelier Capelli"
                  >
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        activeDropdown === 'atelier' ? 'rotate-180 text-amber-300' : ''
                      }`}
                    />
                  </button>
                </div>

                <AnimatePresence>
                  {activeDropdown === 'atelier' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.15, ease: 'easeOut' }}
                      className="absolute top-full left-0 mt-1 w-64 bg-neutral-950/95 backdrop-blur-2xl border border-neutral-800/80 rounded-2xl shadow-2xl p-2.5 space-y-1 z-50"
                    >
                      <button
                        onClick={() => handleNavClick('atelier-capelli', 'taglio-styling')}
                        className="w-full text-left p-2.5 rounded-xl transition-all flex flex-col hover:bg-neutral-900/70 border-l-2 border-transparent hover:border-amber-500"
                      >
                        <span className="text-xs uppercase tracking-wider font-medium text-neutral-200 hover:text-amber-300">
                          Taglio e Styling
                        </span>
                        <span className="text-[10px] text-neutral-500 font-light mt-0.5">
                          Bespoke Dry Cut & piega sculpt
                        </span>
                      </button>

                      <button
                        onClick={() => handleNavClick('atelier-capelli', 'colore')}
                        className="w-full text-left p-2.5 rounded-xl transition-all flex flex-col hover:bg-neutral-900/70 border-l-2 border-transparent hover:border-amber-500"
                      >
                        <span className="text-xs uppercase tracking-wider font-medium text-neutral-200 hover:text-amber-300">
                          Colore
                        </span>
                        <span className="text-[10px] text-neutral-500 font-light mt-0.5">
                          French Balayage deluxe & gloss
                        </span>
                      </button>

                      <button
                        onClick={() => handleNavClick('atelier-capelli', 'hair-integration')}
                        className="w-full text-left p-2.5 rounded-xl transition-all flex flex-col hover:bg-neutral-900/70 border-l-2 border-transparent hover:border-amber-500"
                      >
                        <span className="text-xs uppercase tracking-wider font-medium text-neutral-200 hover:text-amber-300">
                          Hair Integration
                        </span>
                        <span className="text-[10px] text-neutral-500 font-light mt-0.5">
                          Allungamento e infoltimento invisibile
                        </span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 4. Sposa & Immagine (Dropdown con sottolink) */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('sposa')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="flex items-center">
                  <button
                    onClick={() => handleNavClick('sposa-immagine')}
                    className={`text-xs tracking-[0.12em] transition-all duration-200 uppercase py-2 pl-2.5 pr-1 flex items-center gap-1 ${
                      isSposaActive
                        ? 'text-amber-300 font-semibold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    <span>Sposa & Immagine</span>
                  </button>
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'sposa' ? null : 'sposa')}
                    className="p-1 text-neutral-500 hover:text-amber-300 transition-colors"
                    aria-label="Apri sottomenu Sposa & Immagine"
                  >
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        activeDropdown === 'sposa' ? 'rotate-180 text-amber-300' : ''
                      }`}
                    />
                  </button>
                </div>

                <AnimatePresence>
                  {activeDropdown === 'sposa' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.15, ease: 'easeOut' }}
                      className="absolute top-full left-0 mt-1 w-64 bg-neutral-950/95 backdrop-blur-2xl border border-neutral-800/80 rounded-2xl shadow-2xl p-2.5 space-y-1 z-50"
                    >
                      <button
                        onClick={() => handleNavClick('sposa-immagine', 'sposa')}
                        className="w-full text-left p-2.5 rounded-xl transition-all flex flex-col hover:bg-neutral-900/70 border-l-2 border-transparent hover:border-amber-500"
                      >
                        <span className="text-xs uppercase tracking-wider font-medium text-neutral-200 hover:text-amber-300">
                          Sposa
                        </span>
                        <span className="text-[10px] text-neutral-500 font-light mt-0.5">
                          Acconciatura couture & supporto on-site
                        </span>
                      </button>

                      <button
                        onClick={() => handleNavClick('sposa-immagine', 'consulenza')}
                        className="w-full text-left p-2.5 rounded-xl transition-all flex flex-col hover:bg-neutral-900/70 border-l-2 border-transparent hover:border-amber-500"
                      >
                        <span className="text-xs uppercase tracking-wider font-medium text-neutral-200 hover:text-amber-300">
                          Consulenza
                        </span>
                        <span className="text-[10px] text-neutral-500 font-light mt-0.5">
                          Armocromia e facial shape
                        </span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 5. Gift Card */}
              <button
                onClick={() => handleNavClick('gift-card')}
                className={`text-xs tracking-[0.12em] transition-all duration-200 uppercase relative py-1 px-2.5 ${
                  currentPage === 'gift-card'
                    ? 'text-amber-300 font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Gift Card
                {currentPage === 'gift-card' && (
                  <motion.div
                    layoutId="activeNavDot"
                    className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-amber-500 shadow-md shadow-amber-500/50"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>

              {/* 6. Corsi */}
              <button
                onClick={() => handleNavClick('corsi')}
                className={`text-xs tracking-[0.12em] transition-all duration-200 uppercase relative py-1 px-2.5 ${
                  currentPage === 'corsi' || currentPage === 'academy'
                    ? 'text-amber-300 font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Corsi
                {(currentPage === 'corsi' || currentPage === 'academy') && (
                  <motion.div
                    layoutId="activeNavDot"
                    className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-amber-500 shadow-md shadow-amber-500/50"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>

              {/* 7. Contatti */}
              <button
                onClick={() => handleNavClick('contact')}
                className={`text-xs tracking-[0.12em] transition-all duration-200 uppercase relative py-1 px-2.5 ${
                  currentPage === 'contact'
                    ? 'text-amber-300 font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Contatti
                {currentPage === 'contact' && (
                  <motion.div
                    layoutId="activeNavDot"
                    className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-amber-500 shadow-md shadow-amber-500/50"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </nav>

            {/* Desktop CTA: Prenota Ora */}
            <div id="desktop-cta" className="hidden lg:flex items-center space-x-3">
              <a
                href={`tel:${SALON_INFO.phone.replace(/\s+/g, '')}`}
                className="hidden 2xl:flex items-center space-x-1.5 text-neutral-400 hover:text-amber-200 text-xs tracking-[0.05em] transition-colors pr-2"
              >
                <Phone className="w-3.5 h-3.5 text-amber-500" />
                <span>{SALON_INFO.phone}</span>
              </a>
              <button
                onClick={() => handleNavClick('booking')}
                className={`px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center space-x-2 ${
                  currentPage === 'booking'
                    ? 'bg-amber-400 text-neutral-950 ring-2 ring-amber-300'
                    : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-neutral-950 hover:shadow-amber-500/20'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Prenota Ora</span>
              </button>
            </div>

            {/* Mobile Menu Toggle & Direct Booking Icon */}
            <div className="flex xl:hidden items-center space-x-2.5">
              <button
                onClick={() => handleNavClick('booking')}
                className="bg-amber-500 hover:bg-amber-600 text-neutral-950 p-2 rounded-full transition-colors shadow-md flex items-center gap-1.5 px-3"
                title="Prenota"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span className="text-[11px] font-bold uppercase tracking-wider">Prenota</span>
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-neutral-300 hover:text-white focus:outline-none p-2 rounded-full hover:bg-neutral-900 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-nav-menu"
              initial={{ opacity: 0, scale: 0.96, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -8 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="xl:hidden absolute top-full left-4 right-4 mt-2 bg-neutral-950/95 backdrop-blur-2xl border border-neutral-800/80 rounded-3xl shadow-2xl py-6 px-5 space-y-3 flex flex-col max-h-[82vh] overflow-y-auto"
            >
              <div className="flex flex-col space-y-1">
                {/* 1. Home */}
                <button
                  onClick={() => handleNavClick('home')}
                  className={`text-left text-sm tracking-[0.15em] uppercase py-2.5 px-4 rounded-xl transition-all ${
                    currentPage === 'home'
                      ? 'text-amber-300 font-semibold bg-amber-500/10'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                  }`}
                >
                  Home
                </button>

                {/* 2. Chi siamo */}
                <button
                  onClick={() => handleNavClick('about')}
                  className={`text-left text-sm tracking-[0.15em] uppercase py-2.5 px-4 rounded-xl transition-all ${
                    currentPage === 'about'
                      ? 'text-amber-300 font-semibold bg-amber-500/10'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                  }`}
                >
                  Chi Siamo
                </button>

                {/* 3. Atelier Capelli (Accordion Mobile) */}
                <div className="flex flex-col">
                  <div className="flex items-center justify-between rounded-xl hover:bg-neutral-900">
                    <button
                      onClick={() => handleNavClick('atelier-capelli')}
                      className={`flex-1 text-left text-sm tracking-[0.15em] uppercase py-2.5 px-4 ${
                        isAtelierActive ? 'text-amber-300 font-semibold' : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      Atelier Capelli
                    </button>
                    <button
                      onClick={() => setOpenMobileDropdown(openMobileDropdown === 'atelier' ? null : 'atelier')}
                      className="p-2.5 text-neutral-500 hover:text-amber-300"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          openMobileDropdown === 'atelier' ? 'rotate-180 text-amber-300' : ''
                        }`}
                      />
                    </button>
                  </div>

                  <AnimatePresence initial={false}>
                    {openMobileDropdown === 'atelier' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pl-4 border-l border-neutral-800 space-y-1 mt-1 ml-4"
                      >
                        <button
                          onClick={() => handleNavClick('atelier-capelli', 'taglio-styling')}
                          className="w-full text-left py-2 px-3 text-xs uppercase tracking-wider text-neutral-300 hover:text-amber-300 rounded-lg"
                        >
                          ↳ Taglio e Styling
                        </button>
                        <button
                          onClick={() => handleNavClick('atelier-capelli', 'colore')}
                          className="w-full text-left py-2 px-3 text-xs uppercase tracking-wider text-neutral-300 hover:text-amber-300 rounded-lg"
                        >
                          ↳ Colore
                        </button>
                        <button
                          onClick={() => handleNavClick('atelier-capelli', 'hair-integration')}
                          className="w-full text-left py-2 px-3 text-xs uppercase tracking-wider text-neutral-300 hover:text-amber-300 rounded-lg"
                        >
                          ↳ Hair Integration
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* 4. Sposa & Immagine (Accordion Mobile) */}
                <div className="flex flex-col">
                  <div className="flex items-center justify-between rounded-xl hover:bg-neutral-900">
                    <button
                      onClick={() => handleNavClick('sposa-immagine')}
                      className={`flex-1 text-left text-sm tracking-[0.15em] uppercase py-2.5 px-4 ${
                        isSposaActive ? 'text-amber-300 font-semibold' : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      Sposa & Immagine
                    </button>
                    <button
                      onClick={() => setOpenMobileDropdown(openMobileDropdown === 'sposa' ? null : 'sposa')}
                      className="p-2.5 text-neutral-500 hover:text-amber-300"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          openMobileDropdown === 'sposa' ? 'rotate-180 text-amber-300' : ''
                        }`}
                      />
                    </button>
                  </div>

                  <AnimatePresence initial={false}>
                    {openMobileDropdown === 'sposa' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pl-4 border-l border-neutral-800 space-y-1 mt-1 ml-4"
                      >
                        <button
                          onClick={() => handleNavClick('sposa-immagine', 'sposa')}
                          className="w-full text-left py-2 px-3 text-xs uppercase tracking-wider text-neutral-300 hover:text-amber-300 rounded-lg"
                        >
                          ↳ Sposa
                        </button>
                        <button
                          onClick={() => handleNavClick('sposa-immagine', 'consulenza')}
                          className="w-full text-left py-2 px-3 text-xs uppercase tracking-wider text-neutral-300 hover:text-amber-300 rounded-lg"
                        >
                          ↳ Consulenza
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* 5. Gift Card */}
                <button
                  onClick={() => handleNavClick('gift-card')}
                  className={`text-left text-sm tracking-[0.15em] uppercase py-2.5 px-4 rounded-xl transition-all ${
                    currentPage === 'gift-card'
                      ? 'text-amber-300 font-semibold bg-amber-500/10'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                  }`}
                >
                  Gift Card
                </button>

                {/* 6. Corsi */}
                <button
                  onClick={() => handleNavClick('corsi')}
                  className={`text-left text-sm tracking-[0.15em] uppercase py-2.5 px-4 rounded-xl transition-all ${
                    currentPage === 'corsi' || currentPage === 'academy'
                      ? 'text-amber-300 font-semibold bg-amber-500/10'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                  }`}
                >
                  Corsi
                </button>

                {/* 7. Contatti */}
                <button
                  onClick={() => handleNavClick('contact')}
                  className={`text-left text-sm tracking-[0.15em] uppercase py-2.5 px-4 rounded-xl transition-all ${
                    currentPage === 'contact'
                      ? 'text-amber-300 font-semibold bg-amber-500/10'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                  }`}
                >
                  Contatti
                </button>
              </div>

              <div className="h-[1px] bg-neutral-900 my-2" />

              {/* Mobile Call to Action */}
              <button
                onClick={() => handleNavClick('booking')}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-neutral-950 font-bold text-xs tracking-[0.15em] uppercase py-4 text-center transition-all duration-300 rounded-full shadow-lg flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Prenota Ora</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
