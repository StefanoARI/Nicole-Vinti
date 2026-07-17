/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceDetail, InstagramPost, Testimonial } from './types';

export const IMAGE_PATHS = {
  nicoleVinti: new URL('./assets/images/nicole_vinti_1783953179962.jpg', import.meta.url).href,
  bridalUpdo: new URL('./assets/images/bridal_updo_1783953200731.jpg', import.meta.url).href,
  bridalWaves: new URL('./assets/images/bridal_waves_1783953224039.jpg', import.meta.url).href,
  blondeBalayage: new URL('./assets/images/blonde_balayage_1783953245171.jpg', import.meta.url).href,
  salonInterior: new URL('./assets/images/salon_interior_1783953266036.jpg', import.meta.url).href,
};

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'bridal',
    title: 'Bridal Experience',
    subtitle: 'Acconciature Sposa Bespoke',
    shortDesc: 'Il tuo sogno di bellezza prende vita. Un servizio esclusivo e personalizzato per creare l\'acconciatura perfetta, cucita sul tuo viso e sul tuo abito.',
    image: IMAGE_PATHS.bridalWaves,
    problem: {
      title: 'L\'Ansia del "Giorno Più Bello"',
      description: 'Molte spose temono che la loro acconciatura non duri tutto il giorno, non valorizzi il loro viso, o peggio, che le faccia sentire a disagio o "prive di personalità" sotto i riflettori.',
      points: [
        'Paura di una piega o un raccolto che ceda dopo poche ore o durante il ricevimento.',
        'Timore di acconciature standardizzate che non riflettono chi sei veramente.',
        'Difficoltà a trovare un design che dialoghi armoniosamente con la scollatura dell\'abito e il velo.',
        'Stress per la gestione dei tempi e della preparazione la mattina del matrimonio.'
      ]
    },
    solution: {
      title: 'La Soluzione Nicole Vinti',
      description: 'Un percorso sartoriale esclusivo che elimina ogni preoccupazione, garantendo un\'acconciatura impeccabile, confortevole e straordinariamente fotogenica dall\'altare fino all\'ultimo ballo.',
      points: [
        {
          title: 'Studio Morfologico & Armocromatico',
          description: 'Analizziamo i lineamenti del tuo viso, la texture dei capelli e lo stile del tuo abito per progettare una silhouette su misura.'
        },
        {
          title: 'Doppia Prova in Atelier',
          description: 'Sperimentiamo e perfezioniamo ogni dettaglio del design fino a raggiungere l\'assoluta perfezione e comfort.'
        },
        {
          title: 'Supporto On-Site Full-Day',
          description: 'Saremo al tuo fianco la mattina del sì e, se lo desideri, anche durante il servizio fotografico per rinfrescare l\'acconciatura.'
        },
        {
          title: 'Kit SOS Sposa Incluso',
          description: 'Un pacchetto di ritocco con forcine invisibili, lacca protettiva e gloss labbra per un look sempre fresco.'
        }
      ]
    },
    approach: 'L\'acconciatura da sposa non è semplicemente "raccogliere i capelli", ma scolpire una cornice di luce. Ogni ciocca deve assecondare il movimento naturale e catturare l\'armonia delle tue emozioni.',
    durationPrice: 'Su Preventivo Esclusivo',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1591555200813-b553b1e44452?auto=format&fit=crop&q=80&w=800', alt: 'Acconciatura Raccolta Elegante', title: 'Chignon Basso Couture' },
      { url: 'https://images.unsplash.com/photo-1519225495810-7512c696505a?auto=format&fit=crop&q=80&w=800', alt: 'Preparazione Sposa Velo', title: 'Dettaglio con Velo' },
      { url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800', alt: 'Onde Morbide da Sogno', title: 'Onde Morbide Hollywoodiane' },
      { url: 'https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&q=80&w=800', alt: 'Chignon Dettaglio', title: 'Fermaglio Gioiello ed Updo' }
    ],
    faqs: [
      { question: 'Con quanto anticipo dovrei prenotare l\'esperienza Bridal?', answer: 'Consigliamo di prenotare dai 4 ai 6 mesi prima della data del matrimonio, specialmente per i mesi di alta stagione (maggio-settembre), per assicurarvi la disponibilità esclusiva di Nicole nel vostro giorno speciale.' },
      { question: 'Quante prove sono incluse nel percorso?', answer: 'Il nostro percorso standard prevede due prove complete in atelier, durante le quali studiamo i dettagli dell\'abito, i volumi del viso e la tenuta delle acconciature. Se necessario, è sempre possibile concordare prove aggiuntive.' },
      { question: 'Nicole si sposta direttamente nella location del matrimonio?', answer: 'Sì, assolutamente. Nicole e il suo team offrono un servizio on-site completo e possono viaggiare ovunque in Italia e all\'estero per seguirvi durante i preparativi direttamente nella location o a casa.' },
      { question: 'È possibile pettinare anche le damigelle o la mamma della sposa?', answer: 'Sì, offriamo pacchetti personalizzati per le invitate speciali, la mamma e le damigelle, coordinando i tempi per garantire che tutte le preparazioni avvengano con la massima serenità.' }
    ]
  },
  {
    id: 'hair-design',
    title: 'Cut & Styling Couture',
    subtitle: 'Tagli Sartoriali e Piega Sculpting',
    shortDesc: 'Molto più di un semplice taglio. Definiamo la geometria ideale per il tuo volto con tagli sartoriali moderni, facili da gestire anche a casa.',
    image: IMAGE_PATHS.bridalUpdo,
    problem: {
      title: 'Capelli Senza Forma e Difficili da Gestire',
      description: 'Molte donne si lamentano di tagli che perdono la loro forma dopo pochi giorni, che appiattiscono i capelli o che richiedono ore di styling estenuante a casa per sembrare decenti.',
      points: [
        'Tagli eseguiti "a macchinetta" o senza considerare la caduta naturale del capello.',
        'Sensazione di capelli spenti, piatti e senza volume o movimento dinamico.',
        'Stili difficili da replicare a casa senza l\'aiuto del parrucchiere.',
        'Scelte geometriche che non valorizzano i punti di forza del viso o non ne mascherano le asimmetrie.'
      ]
    },
    solution: {
      title: 'L\'Ingegneria del Taglio Nicole Vinti',
      description: 'Scolpiamo i capelli rispettandone la struttura organica. Creiamo forme che si muovono con te, offrendo un volume naturale che dura nel tempo e si autogestisce.',
      points: [
        {
          title: 'Bespoke Dry Cut (Taglio a Asciutto)',
          description: 'Scolpiamo i capelli da asciutti per vedere esattamente come si posizionano e come reagisce ogni singola ciocca.'
        },
        {
          title: 'Styling Tridimensionale',
          description: 'Utilizziamo tecniche di phon e spazzola avanzate per sollevare le radici e dare un movimento naturale senza irrigidire.'
        },
        {
          title: 'Haircare Personalizzata',
          description: 'Prima del taglio, applichiamo un trattamento idratante e districante mirato per restituire elasticità alla fibra.'
        }
      ]
    },
    approach: 'Un buon taglio deve saper "parlare" anche quando non è acconciato con piastre o ferri. La bellezza è libertà, e il tuo taglio deve darti la libertà di essere te stessa in cinque minuti.',
    durationPrice: 'A partire da €65',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800', alt: 'Tecnica Dry Cut d\'Atelier', title: 'Taglio a Secco (Dry Cut)' },
      { url: 'https://images.unsplash.com/photo-1605497746444-ac9dbd39f69c?auto=format&fit=crop&q=80&w=800', alt: 'Taglio Bob Moderno', title: 'Bob Lineare & Volume' },
      { url: 'https://images.unsplash.com/photo-1595853035070-59a39fe84de3?auto=format&fit=crop&q=80&w=800', alt: 'Piega Sculpting Onde', title: 'Onde Sinuose Seta' },
      { url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800', alt: 'Cura e Lavaggio Sensoriale', title: 'Rituale Lavaggio Rigenerante' }
    ],
    faqs: [
      { question: 'Cos\'è la tecnica Bespoke Dry Cut?', answer: 'È una tecnica di taglio eseguita a capelli completamente asciutti. Ci permette di assecondare la caduta naturale della tua chioma, rispettare i volumi effettivi e creare linee personalizzate impossibili da definire a capello bagnato.' },
      { question: 'Quanto dura l\'effetto di un taglio sartoriale?', answer: 'Grazie alla precisione strutturale con cui tagliamo le singole sezioni, la forma del capello ricresce in modo armonioso, mantenendo la sua silhouette e facilità di gestione per oltre 8-10 settimane.' },
      { question: 'La piega Sculpting è adatta a tutti i tipi di capelli?', answer: 'Sì. Utilizziamo tecniche di brushing e strumenti avanzati a temperatura controllata per proteggere la fibra capillare, donando volume straordinario ai capelli fini e disciplina setosa ai capelli crespi.' }
    ]
  },
  {
    id: 'color',
    title: 'Color & Brightness',
    subtitle: 'Balayage Deluxe e Trattamenti Rigeneranti',
    shortDesc: 'Sfumature multidimensionali che illuminano la tua pelle. Tecniche avanzate di schiaritura abbinate a trattamenti di ricostruzione molecolare.',
    image: IMAGE_PATHS.blondeBalayage,
    problem: {
      title: 'Colori Piatti, Artificiali o Capelli Rovinati',
      description: 'Il terrore di chi desidera schiarire i capelli è l\'effetto "zebrato" o artificiale, unito alla paura di bruciare e indebolire le lunghezze a causa di decolorazioni aggressive.',
      points: [
        'Schiariture nette con stacchi visibili ed antiestetici alla radice.',
        'Riflessi caldi indesiderati (arancio o giallo paglia) dovuti a cattive tonalizzazioni.',
        'Capelli secchi, porosi, che si spezzano facilmente dopo i servizi colore.',
        'Colore spento che perde brillantezza dopo solo due lavaggi.'
      ]
    },
    solution: {
      title: 'L\'Eclat dei Nostri Balayage & Trattamenti',
      description: 'Creiamo sfumature impercettibili e naturali che imitano l\'effetto del sole estivo, proteggendo la salute strutturale del capello con additivi Plex di ultima generazione.',
      points: [
        {
          title: 'French Balayage Couture',
          description: 'Schiariture dipinte a mano libera per un effetto sfumato naturale e senza alcuna riga di demarcazione.'
        },
        {
          title: 'Gloss & Tonalizzazione Acida',
          description: 'Tonalizziamo a pH acido per sigillare le cuticole e dare una lucentezza a specchio a lunga durata.'
        },
        {
          title: 'Trattamento Rigenerante Molecolare',
          description: 'Inseriamo trattamenti protettivi a base di amminoacidi in ogni fase di decolorazione per rinforzare i ponti interni dei capelli.'
        }
      ]
    },
    approach: 'Il colore non deve mai essere un blocco uniforme. Deve vibrare. Usiamo le ombre e le luci per scolpire la profondità, esaltando gli occhi e la carnagione come un vero quadro d\'autore.',
    durationPrice: 'A partire da €120',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1620331702289-5484cd1748f6?auto=format&fit=crop&q=80&w=800', alt: 'Balayage Honey Blonde', title: 'Honey Blonde Deluxe' },
      { url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800', alt: 'Sfumature Effetto Sole', title: 'Sun-Kissed Golden Highlights' },
      { url: 'https://images.unsplash.com/photo-1562322140-21b0eff3d2f6?auto=format&fit=crop&q=80&w=800', alt: 'Tonalizzazione Gloss', title: 'Trattamento Acid Gloss' },
      { url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800', alt: 'Luminosità Estrema', title: 'Seta Multidimensionale' }
    ],
    faqs: [
      { question: 'Qual è la differenza tra il Balayage Deluxe e le classiche meches?', answer: 'Il Balayage Deluxe viene dipinto interamente a mano libera, creando sfumature che si fondono senza stacchi netti. Questo evita l\'effetto ricrescita marcato e garantisce una transizione di colore estremamente morbida.' },
      { question: 'La decolorazione rovinerà i miei capelli?', answer: 'No. Inseriamo protettivi molecolari attivi (Plex) direttamente in ogni fase di schiaritura per salvaguardare i ponti interni del capello, mantenendolo elastico, lucido e idratato.' },
      { question: 'Come posso mantenere vivo il colore a casa?', answer: 'Consigliamo l\'uso di shampoo e maschere tonalizzanti a pH acido privi di solfati e di limitare l\'uso di piastre ad altissime temperature. Al momento del servizio, ti forniremo una ricetta di cura personalizzata.' }
    ]
  },
  {
    id: 'consulting',
    title: 'Armocromia & Facial Styling',
    subtitle: 'Consulenza d\'Immagine Globale',
    shortDesc: 'Scopri il segreto della tua unicità. Un\'analisi approfondita del colore della pelle e della forma del viso per individuare la tua palette cromatica e lo stile perfetto.',
    image: IMAGE_PATHS.nicoleVinti,
    problem: {
      title: 'Disorientamento di Stile e Acquisti Sbagliati',
      description: 'Molte persone passano anni a cambiare colore o taglio di capelli senza mai sentirsi davvero valorizzate, spendendo tempo e denaro in look che spengono il loro incarnato o induriscono i lineamenti.',
      points: [
        'Scegliere colori di capelli che evidenziano le occhiaie, la stanchezza o le imperfezioni cutanee.',
        'Non capire perché un determinato taglio stia benissimo a una modella ma non funzioni su di sé.',
        'Incertezza nella scelta del trucco, dei gioielli o degli accessori per le occasioni speciali.',
        'Frustrazione per una mancanza di armonia complessiva nello specchio.'
      ]
    },
    solution: {
      title: 'Il Tuo Identikit di Bellezza Unica',
      description: 'Una sessione scientifico-estetica dove scopriamo le varie caratteristiche cromatiche e morfologiche, regalandoti una mappa chiara ed eterna per valorizzarti.',
      points: [
        {
          title: 'Draping Professionale',
          description: 'Analizziamo il sottotono della tua pelle, il contrasto e il valore cromatco con drappi di tessuto professionali per definire la tua stagione d\'appartenenza.'
        },
        {
          title: 'Analisi Facial Shape',
          description: 'Misuriamo le proporzioni geometriche del tuo volto per consigliarti la riga di capelli, la frangia e i volumi ottimali per te.'
        },
        {
          title: 'Digital Palette Personalizzata',
          description: 'Ti invieremo un dossier digitale completo con la tua palette di colori per capelli, makeup, abiti, accessori e gioielli.'
        }
      ]
    },
    approach: 'L\'armocromia non è una gabbia di regole, ma una chiave di libertà. Conoscere i propri colori amici permette di risplendere con il minimo sforzo e di valorizzare al massimo ogni singolo dettaglio estetico.',
    durationPrice: 'Consulenza Completa €150',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?auto=format&fit=crop&q=80&w=800', alt: 'Drappi Seta Cromatica', title: 'Draping Analisi Cromatica' },
      { url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800', alt: 'Studio Proporzioni Viso', title: 'Facial Shape Analysis' },
      { url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800', alt: 'Palette Colore Personalizzato', title: 'Palette Cromatica Personale' },
      { url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800', alt: 'Outfit Harmonization', title: 'Total Look Consulting' }
    ],
    faqs: [
      { question: 'Cosa devo fare prima della seduta di Armocromia?', answer: 'Per ottenere un risultato preciso al 100%, è fondamentale presentarsi alla consulenza completamente struccati e non aver effettuato lampade o trattamenti abbronzanti intensi nei giorni precedenti.' },
      { question: 'La mia stagione cromatica può cambiare nel tempo?', answer: 'No. Il sottotono della pelle, il contrasto e il valore sono caratteristiche genetiche che rimangono invariate per tutta la vita, anche con l\'abbronzatura o con il passare dell\'età.' },
      { question: 'La consulenza include suggerimenti specifici per il colore dei capelli?', answer: 'Sì, è l\'obiettivo principale del nostro Facial Styling! Individueremo l\'altezza di tono ideale, i riflessi migliori (caldi o freddi) e come distribuire la luce intorno al viso per addolcire i lineamenti.' }
    ]
  }
];

export const INSTAGRAM_FEED: InstagramPost[] = [
  {
    id: 'post_1',
    imageUrl: IMAGE_PATHS.bridalWaves,
    likes: 1240,
    comments: 48,
    caption: 'La perfezione è nei dettagli. Un semiraccolto morbido con onde couture creato per la nostra bellissima sposa. ✨ Vuoi scoprire il tuo stile? Clicca sul link in bio. #nicolevinti #bridalhair #sposa #weddingday',
    type: 'carousel'
  },
  {
    id: 'post_2',
    imageUrl: IMAGE_PATHS.nicoleVinti,
    likes: 2182,
    comments: 92,
    caption: 'Prenditi cura della tua unicità. Dietro ogni acconciatura c\'è uno studio attento dei lineamenti, della personalità e del sogno di ogni donna. 🤍 Vi aspetto in atelier per disegnare insieme il vostro prossimo look. #hairdesigner #nicolevinti #imageconsultant',
    type: 'image'
  },
  {
    id: 'post_3',
    imageUrl: IMAGE_PATHS.bridalUpdo,
    likes: 1850,
    comments: 64,
    caption: 'Il classico incontra il moderno. Uno chignon basso strutturato ma morbido, impreziosito da dettagli in perle. Un design senza tempo per un giorno indimenticabile. 👑 #bridalupdo #chignon #weddinghairstyle #sposa',
    type: 'video'
  },
  {
    id: 'post_4',
    imageUrl: IMAGE_PATHS.blondeBalayage,
    likes: 1420,
    comments: 55,
    caption: 'Golden hour nei tuoi capelli. ✨ Balayage Deluxe nei toni del miele e dello champagne per un effetto multidimensionale che illumina l\'incarnato. Chi vuole rinnovare il proprio colore? 🙋‍♀️ #balayage #blondehair #couturecolor #nicolevinti',
    type: 'image'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't_1',
    name: 'Alessia Marini',
    role: 'Sposa Giugno 2026',
    text: 'Nicole ha saputo capire al volo quello che volevo. L\'acconciatura era pazzesca, ha resistito intatta fino alle 4 del mattino nonostante i balli sfrenati e l\'umidità del lago. Tutti mi hanno fatto i complimenti. Una vera artista!',
    rating: 5,
    image: IMAGE_PATHS.bridalWaves
  },
  {
    id: 't_2',
    name: 'Chiara Valenti',
    role: 'Cliente Storica - Cut & Color',
    text: 'Da quando vado da Nicole, i miei capelli hanno finalmente una forma anche a casa. Il suo Dry Cut è fantastico, e il Balayage che mi realizza attira l\'attenzione di tutti. Non la cambierei con nessun altro al mondo.',
    rating: 5,
    image: IMAGE_PATHS.nicoleVinti
  },
  {
    id: 't_3',
    name: 'Federica Rossetti',
    role: 'Consulenza d\'Immagine',
    text: 'La consulenza di armocromia e facial shape mi ha svoltato la vita. Ho finalmente capito perché alcuni colori di capelli mi spegnevano e ho fatto il cambio consigliato da Nicole. Risultato? Mi sento ringiovanita e sicura di me come non mai!',
    rating: 5,
    image: IMAGE_PATHS.blondeBalayage
  }
];

export const SALON_INFO = {
  name: 'Nicole Vinti Beauty & Hair Designer',
  owner: 'Nicole Vinti',
  address: 'Via della Moda 22, 20121 Milano (MI) - Italia',
  phone: '+39 02 1234567',
  whatsapp: '+39 345 6789101',
  email: 'info@nicolevinti.it',
  instagram: 'https://www.instagram.com/nicole.vinti_official/',
  vatNumber: 'P.IVA 12345670159',
  hours: [
    { days: 'Martedì - Giovedì', time: '09:00 - 18:30' },
    { days: 'Venerdì', time: '09:00 - 20:00' },
    { days: 'Sabato', time: '08:30 - 18:30' },
    { days: 'Domenica - Lunedì', time: 'Chiuso' }
  ]
};
