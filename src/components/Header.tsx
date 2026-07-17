/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Instagram, Award } from 'lucide-react';
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

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Chi Sono' },
    { id: 'bridal', label: 'Sposa' },
    { id: 'hair-design', label: 'Taglio & Styling' },
    { id: 'color', label: 'Colore' },
    { id: 'consulting', label: 'Consulenza' },
  ] as const;

  const handleNavClick = (pageId: PageId) => {
    setCurrentPage(pageId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'px-4 sm:px-6 lg:px-8 pt-4'
            : 'px-0 pt-0'
        }`}
      >
        <div 
          className={`mx-auto transition-all duration-500 ${
            isScrolled
              ? 'max-w-6xl bg-neutral-950/85 backdrop-blur-xl py-3.5 px-6 sm:px-8 border border-neutral-800/80 rounded-full shadow-2xl shadow-black/80'
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
              <span className="text-lg sm:text-xl font-serif font-bold tracking-[0.18em] text-amber-100 transition-colors group-hover:text-amber-300 uppercase">
                NICOLE VINTI
              </span>
              <span className="text-[8px] font-mono tracking-[0.3em] text-neutral-400 group-hover:text-amber-100 uppercase transition-all duration-300">
                HAIR DESIGNER & BRIDAL SPECIALIST
              </span>
            </div>

            {/* Desktop Nav */}
            <nav id="desktop-nav" className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-xs tracking-[0.12em] transition-all duration-200 uppercase relative py-1 px-2 ${
                    currentPage === item.id
                      ? 'text-amber-300 font-semibold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {currentPage === item.id && (
                    <motion.div
                      layoutId="activeNavDot"
                      className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-amber-500 shadow-md shadow-amber-500/50"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div id="desktop-cta" className="hidden lg:flex items-center space-x-4">
              <a
                href={`tel:${SALON_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center space-x-2 text-neutral-300 hover:text-amber-200 text-xs tracking-[0.05em] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-500" />
                <span>Chiama Ora</span>
              </a>
              <button
                onClick={() => handleNavClick('booking')}
                className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-neutral-950 text-xs font-bold uppercase tracking-[0.15em] rounded-full shadow-lg hover:shadow-amber-500/10 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center space-x-2"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Prenota Ora</span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex lg:hidden items-center space-x-3">
              <button
                onClick={() => handleNavClick('booking')}
                className="bg-amber-500 hover:bg-amber-600 text-neutral-950 p-2.5 rounded-full transition-colors shadow-md"
                title="Prenota"
              >
                <Calendar className="w-4 h-4" />
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

        {/* Mobile Floating Dropdown Nav Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-nav-menu"
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-neutral-950/95 backdrop-blur-xl border border-neutral-800/80 rounded-3xl shadow-2xl py-6 px-6 space-y-6 flex flex-col"
            >
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left text-base tracking-[0.15em] uppercase py-2.5 px-4 rounded-xl transition-all ${
                      currentPage === item.id
                        ? 'text-amber-300 font-semibold bg-amber-500/10'
                        : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="h-[1px] bg-neutral-900" />

              <div className="flex flex-col space-y-4">
                <a
                  href={`tel:${SALON_INFO.phone.replace(/\s+/g, '')}`}
                  className="flex items-center space-x-3 text-neutral-300 hover:text-amber-200 py-1"
                >
                  <div className="w-9 h-9 rounded-full bg-neutral-900 flex items-center justify-center border border-neutral-800">
                    <Phone className="w-4 h-4 text-amber-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-[0.05em] text-neutral-500">Telefono</span>
                    <span className="text-sm font-medium">{SALON_INFO.phone}</span>
                  </div>
                </a>

                <a
                  href={SALON_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-neutral-300 hover:text-amber-200 py-1"
                >
                  <div className="w-9 h-9 rounded-full bg-neutral-900 flex items-center justify-center border border-neutral-800">
                    <Instagram className="w-4 h-4 text-amber-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-[0.05em] text-neutral-500">Instagram</span>
                    <span className="text-sm font-medium">@nicole.vinti_official</span>
                  </div>
                </a>
              </div>

              <button
                onClick={() => handleNavClick('booking')}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-neutral-950 font-bold text-sm tracking-[0.15em] uppercase py-4 text-center transition-all duration-300 rounded-full shadow-lg"
              >
                PRENOTA CONSULENZA
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
