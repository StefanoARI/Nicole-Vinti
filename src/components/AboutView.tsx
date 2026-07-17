/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Award, Heart, Sparkles, Star, Quote, ShieldCheck, ArrowRight, Camera, BookOpen, Scissors } from 'lucide-react';
import { IMAGE_PATHS, SALON_INFO } from '../data';
import { PageId } from '../types';

interface AboutViewProps {
  setCurrentPage: (page: PageId) => void;
}

export default function AboutView({ setCurrentPage }: AboutViewProps) {
  const values = [
    {
      icon: <Scissors className="w-6 h-6 text-amber-500" />,
      title: 'Taglio Sartoriale Dry Cut',
      desc: 'Scolpiamo i capelli rigorosamente da asciutti, seguendo i volumi e la caduta naturale della tua chioma per un risultato unico e facile da gestire.',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-amber-500" />,
      title: 'Consulenza Morfologica',
      desc: 'Ogni look nasce dallo studio delle proporzioni del viso (Facial Shape) e del sottotono della pelle (Armocromia), per valorizzare la tua bellezza naturale.',
    },
    {
      icon: <Heart className="w-6 h-6 text-amber-500" />,
      title: 'Salute della Fibra Capillare',
      desc: 'Utilizziamo formule d\'eccellenza e protettivi molecolari attivi per garantire capelli splendenti, setosi e visibilmente sani a lungo.',
    },
    {
      icon: <Star className="w-6 h-6 text-amber-500" />,
      title: ' Bridal Designer d\'Autore',
      desc: 'Progettiamo acconciature sposa uniche, interpretando lo stile personale di ogni donna per trasformare le emozioni in design indimenticabili.',
    },
  ];

  const timeline = [
    {
      year: 'Inizi',
      title: 'Il richiamo della bellezza',
      desc: 'Inizia il percorso professionale di Nicole, guidata da un innato senso estetico e dal desiderio di plasmare la materia capelli come vera e propria arte visiva.',
    },
    {
      year: 'Specializzazione',
      title: 'Accademie Internazionali',
      desc: 'Nicole si forma presso le più prestigiose accademie di Londra, Parigi e Milano, perfezionando le geometrie del taglio e i segreti della colorazione d\'avanguardia.',
    },
    {
      year: 'La Svolta',
      title: 'Armocromia & Facial Design',
      desc: 'Fonde l\'hair styling con la consulenza d\'immagine avanzata, introducendo lo studio morfologico e cromatico personalizzato in salone.',
    },
    {
      year: 'Oggi',
      title: 'Atelier Nicole Vinti Milano',
      desc: 'Un punto di riferimento per l\'hair styling d\'eccellenza e il Bridal design, dove ogni donna riceve un\'esperienza sartoriale indimenticabile.',
    },
  ];

  return (
    <div id="about-page" className="bg-neutral-950 text-neutral-200 min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Decorative ambient blobs */}
      <div className="absolute top-40 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Portrait Image with modern rounded styling & fluid overlays */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Elegant organic gold ring behind */}
            <div className="absolute -inset-4 border border-amber-500/20 rounded-[2.5rem] rotate-3 pointer-events-none" />
            <div className="absolute -inset-1 bg-gradient-to-tr from-amber-500/20 to-transparent rounded-[2.5rem] -rotate-3 pointer-events-none blur-sm" />
            
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-[2.2rem] overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900 group">
              <img 
                src={IMAGE_PATHS.nicoleVinti} 
                alt="Nicole Vinti Portrait" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700 ease-out transform group-hover:scale-105"
              />
              
              {/* Overlay styling and text badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-full inline-flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span className="text-xs uppercase tracking-widest font-medium text-amber-200">Nicole Vinti</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Biography Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            <span className="text-amber-500 font-medium text-xs tracking-[0.3em] uppercase block">
              La Firma dell'Eccellenza
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-white leading-tight">
              Incontra <br className="hidden sm:inline" />
              <span className="italic font-normal text-amber-500">Nicole Vinti</span>
            </h1>
            
            <p className="text-neutral-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
              "Il capello non è un accessorio statico, ma un materiale vivente che risponde alle emozioni, esalta i lineamenti e racconta chi sei veramente."
            </p>

            <div className="h-px w-24 bg-gradient-to-r from-amber-500 to-transparent mx-auto lg:mx-0 my-8" />

            <div className="space-y-4 text-neutral-400 text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              <p>
                Con oltre quindici anni di esperienza formata nelle più prestigiose accademie di Londra, Parigi e Milano, 
                Nicole Vinti ha ridefinito il concetto di Hair Styling. Il suo approccio rivoluzionario unisce la precisione 
                geometrica del taglio anglosassone con il calore, lo stile e la sartorialità del design italiano.
              </p>
              <p>
                Pioniera della consulenza d'immagine olistica applicata all'acconciatura, Nicole ha ideato un protocollo di lavoro 
                esclusivo: ogni appuntamento comincia con un'analisi dettagliata del sottotono della pelle (Armocromia) e della 
                forma del viso (Facial Shape). Questo consente di dare vita a tagli, sfumature e acconciature da sposa d'autore 
                che non solo rispettano le tendenze, ma valorizzano in modo assoluto l'unicità di chi le indossa.
              </p>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button
                onClick={() => {
                  setCurrentPage('booking');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-neutral-950 text-xs font-bold uppercase tracking-[0.2em] rounded-full shadow-lg hover:shadow-amber-500/20 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Prenota un incontro</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => {
                  const el = document.getElementById('about-method');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-neutral-900 border border-neutral-800 hover:bg-neutral-850 hover:border-neutral-700 text-neutral-300 text-xs font-bold uppercase tracking-[0.15em] rounded-full transition-all duration-300"
              >
                <span>Il Mio Metodo</span>
              </button>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Quote Banner */}
      <div className="bg-neutral-900/60 backdrop-blur-md py-16 border-y border-neutral-900">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative">
          <Quote className="w-12 h-12 text-amber-500/20 absolute -top-4 left-4 lg:-left-8" />
          <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-amber-100/90 leading-relaxed font-light">
            "La bellezza autentica non nasce dalla standardizzazione, ma dal coraggio di valorizzare le proprie asimmetrie e risplendere nella propria unicità."
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-amber-500/40" />
            <span className="text-xs uppercase tracking-[0.25em] font-mono text-amber-500">Nicole Vinti</span>
            <div className="h-px w-8 bg-amber-500/40" />
          </div>
        </div>
      </div>

      {/* Nicole's Method & Values Section */}
      <div id="about-method" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-amber-500 text-xs tracking-[0.3em] uppercase font-mono">
            Filosofia Sartoriale
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-wide">
            I Capisaldi del <span className="italic font-light text-amber-500">Mio Metodo</span>
          </h2>
          <p className="text-neutral-400 text-sm font-light max-w-lg mx-auto">
            Ogni rituale nel nostro atelier è ispirato a valori di precisione, studio continuo e amore profondo per l'armonia estetica.
          </p>
        </div>

        {/* Values Grid with fluid rounded cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((v, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-neutral-900/40 border border-neutral-800/60 hover:border-amber-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/5 group"
            >
              <div className="flex flex-col sm:flex-row items-start gap-5">
                <div className="p-3.5 rounded-2xl bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors shrink-0">
                  {v.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-serif font-medium text-white tracking-wide group-hover:text-amber-300 transition-colors">
                    {v.title}
                  </h3>
                  <p className="text-sm text-neutral-400 font-light leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-neutral-900/60">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-amber-500 text-xs tracking-[0.3em] uppercase font-mono">
            La Storia
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-wide">
            Il Cammino Verso l'<span className="italic font-light text-amber-500">Eccellenza</span>
          </h2>
        </div>

        {/* Timeline Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-neutral-900/30 border border-neutral-800/40 p-6 rounded-2xl relative space-y-4 flex flex-col h-full hover:border-amber-500/10 transition-colors"
            >
              {/* Year badge */}
              <span className="text-xs uppercase font-mono tracking-widest text-amber-500 font-semibold bg-amber-500/10 px-3 py-1 rounded-full w-max">
                {item.year}
              </span>
              
              <div className="space-y-1">
                <h4 className="font-serif text-base text-white font-medium">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Final Call to Action */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-amber-950/40 via-neutral-900 to-amber-950/40 border border-amber-500/20 p-10 md:p-12 rounded-[2rem] text-center space-y-6"
        >
          <span className="text-amber-500 text-xs tracking-[0.3em] uppercase font-mono block">
            Esperienza Esclusiva
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif text-white font-light">
            Vuoi vivere la trasformazione firmata <br />
            <span className="italic font-normal text-amber-500">Nicole Vinti</span>?
          </h3>
          <p className="text-neutral-400 text-sm max-w-lg mx-auto font-light leading-relaxed">
            Ogni seduta è una sessione privata interamente dedicata alla salute e al design dei tuoi capelli. Riserva ora il tuo spazio.
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                setCurrentPage('booking');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold text-xs uppercase tracking-[0.2em] rounded-full transition-all duration-300 shadow-xl shadow-amber-500/10"
            >
              PRENOTA ORA
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
