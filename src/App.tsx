/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';
import AtelierCapelliView from './components/AtelierCapelliView';
import SposaImmagineView from './components/SposaImmagineView';
import GiftCardView from './components/GiftCardView';
import CorsiView from './components/CorsiView';
import ServiceLandingPage from './components/ServiceLandingPage';
import BookingForm from './components/BookingForm';
import PrivacyBanner from './components/PrivacyBanner';
import { SERVICES_DATA, IMAGE_PATHS } from './data';
import { PageId } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const activeService = SERVICES_DATA.find((s) => s.id === currentPage);

  const renderContent = () => {
    // 1. Home
    if (currentPage === 'home') {
      return (
        <motion.div
          key="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <HomeView setCurrentPage={setCurrentPage} />
        </motion.div>
      );
    }

    // 2. Chi siamo
    if (currentPage === 'about') {
      return (
        <motion.div
          key="about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <AboutView setCurrentPage={setCurrentPage} />
        </motion.div>
      );
    }

    // 3. Contatti
    if (currentPage === 'contact') {
      return (
        <motion.div
          key="contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <ContactView setCurrentPage={setCurrentPage} />
        </motion.div>
      );
    }

    // 4. Atelier Capelli (One-page: Taglio & Styling, Colore, Hair Integration)
    if (currentPage === 'atelier-capelli') {
      return (
        <motion.div
          key="atelier-capelli"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <AtelierCapelliView setCurrentPage={setCurrentPage} />
        </motion.div>
      );
    }

    // 5. Sposa & Immagine (One-page: Sposa, Consulenza)
    if (currentPage === 'sposa-immagine') {
      return (
        <motion.div
          key="sposa-immagine"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <SposaImmagineView setCurrentPage={setCurrentPage} />
        </motion.div>
      );
    }

    // 6. Gift Card
    if (currentPage === 'gift-card') {
      return (
        <motion.div
          key="gift-card"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <GiftCardView setCurrentPage={setCurrentPage} />
        </motion.div>
      );
    }

    // 7. Corsi
    if (currentPage === 'corsi' || currentPage === 'academy') {
      return (
        <motion.div
          key="corsi"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <CorsiView setCurrentPage={setCurrentPage} />
        </motion.div>
      );
    }

    // 8. Prenota ora
    if (currentPage === 'booking') {
      return (
        <motion.div
          key="booking"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="pt-24 min-h-screen bg-neutral-950"
        >
          <div className="relative h-[40vh] flex items-center justify-center overflow-hidden border-b border-neutral-900">
            <div className="absolute inset-0">
              <img
                src={IMAGE_PATHS.salonInterior}
                alt="Salon Interior"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent" />
            </div>
            <div className="relative z-10 text-center space-y-3 px-4">
              <span className="text-amber-400 font-mono text-xs tracking-[0.3em] uppercase block">
                Exclusive Booking
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-[0.05em] uppercase">
                Riserva il tuo Appuntamento
              </h1>
              <p className="text-neutral-400 text-xs sm:text-sm max-w-lg mx-auto font-light">
                Entra nel mondo di Nicole Vinti. Compila il modulo sottostante per richiedere la tua sessione personalizzata in atelier.
              </p>
            </div>
          </div>

          <BookingForm />
        </motion.div>
      );
    }

    // Fallback for any legacy service direct navigation
    if (activeService) {
      return (
        <motion.div
          key={activeService.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <ServiceLandingPage service={activeService} setCurrentPage={setCurrentPage} />
        </motion.div>
      );
    }

    return null;
  };

  return (
    <div id="root-layout" className="bg-neutral-950 text-neutral-200 min-h-screen font-sans selection:bg-amber-500 selection:text-neutral-950">
      {/* Luxury Navigation Header */}
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Multi-Page Body Content with Router Animation Switching */}
      <main id="main-content">
        <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
      </main>

      {/* Luxury Brand Footer */}
      <Footer setCurrentPage={setCurrentPage} openPrivacyModal={() => setShowPrivacyModal(true)} />

      {/* Interactive Cookie Consent Banner & GDPR Privacy Modal */}
      <PrivacyBanner showFullModal={showPrivacyModal} setShowFullModal={setShowPrivacyModal} />
    </div>
  );
}
