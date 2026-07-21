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
  },
  {
    id: 'concept-store',
    title: 'Concept Store',
    subtitle: 'Selezione Esclusiva & Lifestyle',
    shortDesc: 'Un\'esperienza sensoriale oltre il capello. Scopri oggettistica di design, profumeria artistica e accessori rari scelti personalmente da Nicole Vinti.',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800',
    problem: {
      title: 'La massificazione degli acquisti e il bisogno di unicità',
      description: 'Nel mondo del fast fashion e del design seriale, è sempre più difficile trovare pezzi unici, fragranze d\'autore o accessori capaci di esprimere la propria vera unicità e ricercatezza.',
      points: [
        'Profumi commerciali indossati da chiunque, privi di evoluzione sulla pelle.',
        'Accessori e oggettistica privi di una vera anima artigianale e di una storia.',
        'Regali banali e privi della cura del dettaglio che rende un oggetto prezioso.',
        'L\'assenza di un luogo intimo dove fare acquisti lontani dalla frenesia dei centri commerciali.'
      ]
    },
    solution: {
      title: 'L\'Atelier delle Meraviglie di Nicole Vinti',
      description: 'Una selezione raffinata di piccoli capolavori artigianali scelti in tutto il mondo da Nicole per esaltare il tuo stile di vita e circondarti di pura bellezza.',
      points: [
        {
          title: 'Profumeria Artistica e di Nicchia',
          description: 'Fragranze uniche composte da nasi internazionali con materie prime rare ed oli essenziali purissimi.'
        },
        {
          title: 'Oggettistica e Candele Couture',
          description: 'Pezzi di design d\'interni, candele di cera vegetale colate a mano e tessili preziosi per la tua casa.'
        },
        {
          title: 'Accessori Bespoke e Gioielleria',
          description: 'Fermagli gioiello, sciarpe di seta, occhiali ed elementi unici per completare il tuo stile d\'immagine.'
        }
      ]
    },
    approach: 'La bellezza non si ferma ai capelli, ma pervade l\'ambiente in cui vivi e gli oggetti di cui ti circondi. Il Concept Store è il mio diario di viaggio visivo e olfattivo, condiviso con te.',
    durationPrice: 'Ingresso libero o su appuntamento per Private Shopping',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800', alt: 'Profumi di nicchia d\'autore', title: 'Fragranze d\'Autore' },
      { url: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800', alt: 'Accessori e gioielli ricercati', title: 'Accessori di Design' },
      { url: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=800', alt: 'Candele naturali versate a mano', title: 'Candele Artigianali Aromaterapia' },
      { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800', alt: 'Oggetti luxury per arredamento interni', title: 'Home Decor Curated' }
    ],
    faqs: [
      { question: 'Posso visitare il Concept Store senza prenotare un servizio capelli?', answer: 'Assolutamente sì. Il Concept Store è aperto a tutti gli amanti della bellezza e del design. Puoi venire a trovarci durante gli orari di apertura dell\'Atelier per esplorare la collezione o per un regalo speciale.' },
      { question: 'Offrite un servizio di confezionamento regalo personalizzato?', answer: 'Sì, creiamo confezioni regalo esclusive con carte artigianali profumate, nastri di seta e sigillo in ceralacca personalizzato Nicole Vinti.' },
      { question: 'I marchi presenti nel Concept Store sono biologici ed eco-sostenibili?', answer: 'Selezioniamo rigorosamente brand indipendenti che condividono la nostra filosofia di rispetto per l\'ambiente, con ingredienti naturali e processi produttivi etici certificati.' }
    ]
  },
  {
    id: 'beauty-hairspa',
    title: 'Beauty & Hairspa',
    subtitle: 'Rituali Rigeneranti Viso & Cute',
    shortDesc: 'Sperimenta l\'unione tra la cura estetica profonda e il relax sensoriale. Trattamenti per cuoio capelluto, massaggi ayurvedici ed estetica viso d\'avanguardia.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800',
    problem: {
      title: 'Stress, smog e tensioni che danneggiano pelle e capelli',
      description: 'Il cuoio capelluto è il terreno in cui nascono i tuoi capelli. Stress quotidiano, tossine ambientali e trattamenti aggressivi possono infiammarlo, causando capelli spenti, fragili o tendenti alla caduta.',
      points: [
        'Cuoio capelluto arrossato, teso o affetto da anomalie cutanee (forfora, sebo).',
        'Invecchiamento precoce dei tessuti cutanei del viso dovuto ad inquinamento e stanchezza.',
        'Capelli che non crescono sani e vigorosi a causa di bulbi piliferi soffocati dalle tossine.',
        'Stanchezza mentale accumulata che si riflette negativamente sui lineamenti.'
      ]
    },
    solution: {
      title: 'La Rinascita Sensoriale ed Estetica in Spa',
      description: 'Un tempio del silenzio dove uniamo trattamenti tricologici curativi a massaggi linfodrenanti e rituali olistici per rigenerare corpo e mente.',
      points: [
        {
          title: 'Detox & Scalp Therapy',
          description: 'Trattamenti a base di fanghi termali, oli essenziali biologici purissimi e vapore profondo per ossigenare la cute.'
        },
        {
          title: 'Massaggio Cranio-Sacrale & Ayurvedico',
          description: 'Manovre avvolgenti che sciolgono le tensioni di spalle, collo e testa, stimolando la microcircolazione sanguigna.'
        },
        {
          title: 'Rituali Viso Glow d\'Avanguardia',
          description: 'Pulizia viso profonda unita a sieri all\'acido ialuronico, massaggi rassodanti Kobido e maschere lenitive.'
        }
      ]
    },
    approach: 'Trattiamo i capelli e la pelle non solo in superficie, ma andando alla radice del benessere. Un cuoio capelluto rigenerato è il segreto per capelli eternamente lucidi e forti.',
    durationPrice: 'Trattamenti a partire da €50',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800', alt: 'Trattamento viso rigenerante', title: 'Facial Treatment Kobido' },
      { url: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800', alt: 'Oli essenziali naturali estratti a freddo', title: 'Aromaterapia Olistica' },
      { url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800', alt: 'Lavaggio sensoriale con massaggio', title: 'Bespoke Scalp Massage' },
      { url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800', alt: 'Massaggio rilassante testa', title: 'Rituale Rigenerante Cute' }
    ],
    faqs: [
      { question: 'Come viene eseguita l\'analisi preliminare della cute?', answer: 'Utilizziamo una microcamera tricologica ad altissima risoluzione per valutare lo stato di salute del cuoio capelluto, rilevando idratazione, presenza di sebo, tossine o desquamazione prima di personalizzare il rituale.' },
      { question: 'I trattamenti Hairspa sono consigliati anche per chi soffre di caduta dei capelli?', answer: 'Sì, assolutamente. I nostri trattamenti detossinanti e riattivanti liberano i follicoli ostruiti e stimolano l\'afflusso sanguigno, creando l\'ambiente ideale per frenare la caduta e favorire una ricrescita vigorosa.' },
      { question: 'Quanto dura una sessione tipica in Hairspa?', answer: 'I nostri rituali variano da un minimo di 45 minuti (per trattamenti detox mirati) fino a 90 minuti per i percorsi sensoriali completi viso, cute e capelli.' }
    ]
  },
  {
    id: 'hair-integration',
    title: 'Hair Integration',
    subtitle: 'Infoltimento & Allungamento Naturale',
    shortDesc: 'Soluzioni invisibili e non invasive per ritrovare volume, lunghezza e sicurezza. Nicole Vinti utilizza esclusivamente capelli veri certificati e tecniche di fissaggio ultra-delicate.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800',
    problem: {
      title: 'Diradamento, alopecia o difficoltà a far crescere i capelli',
      description: 'Sia per fattori genetici, ormonali o stress, molte donne si trovano ad affrontare capelli estremamente fini, diradati sulla sommità o che si spezzano prima di raggiungere la lunghezza desiderata, compromettendo l\'autostima.',
      points: [
        'Disagio sociale causato da trasparenze evidenti sul cuoio capelluto.',
        'Frustrazione per extension tradizionali visibili o che rovinano i capelli naturali col peso.',
        'Mancanza di volume che rende impossibile qualsiasi piega duratura.',
        'Sensazione di invecchiamento o stanchezza legata alla perdita di densità della chioma.'
      ]
    },
    solution: {
      title: 'Sistemi di Integrazione e Allungamento Invisibili',
      description: 'L\'eccellenza tecnologica ed artigianale al servizio della tua chioma. Applichiamo membrane traspiranti, micro-connessioni ultraflat ed extension invisibili di capelli veri di altissima qualità.',
      points: [
        {
          title: 'Micro-Integrazione localized',
          description: 'Sistemi di capelli veri intrecciati o collegati su membrane in micro-rete invisibili e traspiranti, ideali per la zona del vertice.'
        },
        {
          title: 'Premium Flat Tape Extension',
          description: 'Fasce ultrasottili di capelli veri russi o indiani certificati che si integrano senza alcuno stacco visivo o tattile.'
        },
        {
          title: 'Metodo Micro-Ring Cold System',
          description: 'Fissaggio a freddo ipoallergenico che rispetta la fibra capillare senza l\'uso di colle sintetiche o fonti di calore elevate.'
        }
      ]
    },
    approach: 'L\'integrazione dei capelli non deve essere vissuta come una correzione di un difetto, ma come una celebrazione del tuo splendore. Nessuno noterà la differenza, tutti noteranno la tua nuova incredibile luce.',
    durationPrice: 'Consulenza e preventivo personalizzato gratuito in cabina privata',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1595853035070-59a39fe84de3?auto=format&fit=crop&q=80&w=800', alt: 'Capelli lunghi e folti biondi', title: 'Infoltimento Multidimensionale' },
      { url: 'https://images.unsplash.com/photo-1605497746444-ac9dbd39f69c?auto=format&fit=crop&q=80&w=800', alt: 'Dettaglio applicazione extension', title: 'Micro-Integrazione Invisibile' },
      { url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800', alt: 'Lavaggio capelli sani e folti', title: 'Integrazione Volume Naturale' },
      { url: 'https://images.unsplash.com/photo-1620331702289-5484cd1748f6?auto=format&fit=crop&q=80&w=800', alt: 'Sfumature bionde su capelli lunghi', title: 'Extension Luxury Silk' }
    ],
    faqs: [
      { question: 'I capelli utilizzati sono veri al 100%?', answer: 'Sì, utilizziamo esclusivamente capelli veri vergini di prima scelta (Remy), con cuticole integre e orientate nella stessa direzione, per garantire morbidezza assoluta ed evitare nodi.' },
      { question: 'Le tecniche di integrazione rovinano i miei capelli naturali?', answer: 'Assolutamente no. Nicole ha selezionato esclusivamente tecniche di fissaggio a freddo o micro-adesivi medicali biocompatibili che assecondano la crescita naturale del capello senza soffocarlo o appesantirlo.' },
      { question: 'Come si gestiscono i capelli integrati a casa?', answer: 'Si lavano e si asciugano come i propri capelli. Al termine della sessione in Atelier ti forniremo una guida dettagliata e una spazzola speciale a setole differenziate per proteggere i punti di giunzione.' }
    ]
  },
  {
    id: 'abbigliamento',
    title: 'Abbigliamento',
    subtitle: 'Capsule Collection & Tailoring',
    shortDesc: 'Capi sartoriali e accessori moda selezionati per esprimere la tua personalità. Un\'estensione naturale della consulenza d\'immagine per creare un total look coordinato.',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800',
    problem: {
      title: 'Difficoltà ad abbinare abiti che rispecchino i propri colori e silhouette',
      description: 'Molti armadi sono pieni di vestiti acquistati d\'impulso, ma che poi non vengono mai indossati perché la forma non valorizza le curve naturali o il colore spegne la luminosità del volto.',
      points: [
        'Acquisto di abiti di tendenza che non si adattano alle proprie proporzioni fisiche.',
        'Incertezza nell\'abbinare i tessuti, i colori dei capi con il makeup e i capelli.',
        'Guardaroba disordinato e privo di una coerenza stilistica di base.',
        'Frustrazione nel vestirsi la mattina, con la sensazione di "non aver mai nulla da mettersi".'
      ]
    },
    solution: {
      title: 'Il Total Look Sartoriale Nicole Vinti',
      description: 'Una capsule collection di capi esclusivi scelti per caduta dei tessuti, eleganza delle linee e palette cromatiche, coordinati al tuo Facial Styling per creare un\'armonia visiva assoluta.',
      points: [
        {
          title: 'Tessuti Nobili e Naturali',
          description: 'Selezioniamo solo capi in seta pura, lino fresco, cashmere ultra-morbido e cotone organico che accarezzano la pelle.'
        },
        {
          title: 'Tagli che valorizzano le Forme',
          description: 'Abiti, blazer e pantaloni studiati per esaltare i punti di forza di ogni body shape, slanciando la figura.'
        },
        {
          title: 'Coordinamento Cromatico',
          description: 'Tutti i capi sono catalogati in base alle stagioni dell\'Armocromia per rendere i tuoi abbinamenti semplici e immediati.'
        }
      ]
    },
    approach: 'Un abito non deve travestirti, ma deve rivelarti. Con la nostra selezione di abbigliamento, applichiamo le regole dell\'armocromia e dello styling alla tua figura per farti sentire sicura ed elegante in ogni istante.',
    durationPrice: 'Consulenza di stile inclusa con l\'acquisto dei capi',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=800', alt: 'Abiti eleganti appesi', title: 'La Capsule Collection' },
      { url: 'https://images.unsplash.com/photo-1583209814613-5116e6147d82?auto=format&fit=crop&q=80&w=800', alt: 'Tessuti di seta e lino dettagli', title: 'Tessuti Pregiati Artigianali' },
      { url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800', alt: 'Modella vestito di classe giallo', title: 'Total Look Armocromatico' },
      { url: 'https://images.unsplash.com/photo-1524250502761-136f2527df03?auto=format&fit=crop&q=80&w=800', alt: 'Dettagli di stile donna', title: 'Accessori in Pelle' }
    ],
    faqs: [
      { question: 'Posso richiedere una sessione di Personal Shopping dedicata?', answer: 'Sì. Puoi prenotare una sessione esclusiva in cui un\'esperta del nostro team ti guiderà nella scelta dei capi perfetti per la tua stagione cromatica e la tua body shape, in totale privacy.' },
      { question: 'Quali taglie sono disponibili nella Capsule Collection?', answer: 'La nostra collezione si concentra su tagli morbidi, asimmetrici o destrutturati studiati per adattarsi splendidamente a diverse fisicità. Copriamo taglie dalla 38 alla 50 italiana.' },
      { question: 'I capi sono produzioni italiane?', answer: 'Sì, la quasi totalità della nostra capsule collection proviene da piccoli laboratori artigianali italiani che garantiscono rifiniture sartoriali di pregio e tessuti certificati Made in Italy.' }
    ]
  },
  {
    id: 'barber-shop',
    title: 'Barber Shop',
    subtitle: 'Grooming Maschile d\'Eccellenza',
    shortDesc: 'L\'arte della rasatura tradizionale e dello styling maschile. Un angolo di puro benessere dedicato all\'uomo moderno che esige precisione sartoriale per capelli e barba.',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800',
    problem: {
      title: 'Barba ispida, irritazioni da rasatura e tagli senza carattere',
      description: 'Molti uomini sottovalutano la cura di barba e capelli, affidandosi a tagli rapidi o rasature frettolose che irritano la pelle, lasciano i peli della barba ispidi e non valorizzano la morfologia maschile.',
      points: [
        'Pelle del viso irritata, arrossata o secca dopo la rasatura quotidiana.',
        'Barba disordinata, dura e difficile da pettinare o direzionare.',
        'Tagli di capelli tutti uguali, eseguiti senza studiare la forma del cranio e della mascella.',
        'Mancanza di un momento di stacco e relax interamente dedicato alle esigenze dell\'uomo.'
      ]
    },
    solution: {
      title: 'L\'Angolo Barber d\'Atelier',
      description: 'Un rituale antico che combina la precisione geometrica dei tagli moderni con il calore distensivo del panno caldo e massaggi con oli emollienti d\'altri tempi.',
      points: [
        {
          title: 'Taglio Sartoriale Maschile',
          description: 'Taglio a forbice e sfumature millimetriche progettate in base alla forma del viso e alla direzione naturale di crescita dei capelli.'
        },
        {
          title: 'Rasatura Tradizionale a Panno Caldo',
          description: 'Sette passaggi rituali: oli pre-barba, doppia applicazione di panno caldo, insaponatura a pennello, rasatura a mano libera e panno freddo finale rigenerante.'
        },
        {
          title: 'Beard Design & Care',
          description: 'Modellatura geometrica della barba a rasoio e forbice, seguita da trattamenti di lavaggio e idratazione profonda con oli di nicchia.'
        }
      ]
    },
    approach: 'La cura dell\'uomo non è una routine veloce, ma un rituale di stile e rispetto per se stessi. Nel nostro Barber Shop, riscoprirai il piacere del tempo dedicato a te stesso.',
    durationPrice: 'Servizi a partire da €35',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800', alt: 'Barbiere taglia capelli uomo', title: 'Taglio Geometrico Maschile' },
      { url: 'https://images.unsplash.com/photo-1512864084360-7c0c4d0a0845?auto=format&fit=crop&q=80&w=800', alt: 'Rituale rasatura con lama a mano libera', title: 'Rasatura Tradizionale Rasoio' },
      { url: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=800', alt: 'Prodotti e oli per barba luxury', title: 'Trattamento Barba & Olio Idratante' },
      { url: 'https://images.unsplash.com/photo-1605497746444-ac9dbd39f69c?auto=format&fit=crop&q=80&w=800', alt: 'Taglio sfumato moderno', title: 'Hair Grooming Precisione' }
    ],
    faqs: [
      { question: 'In cosa consiste il servizio a "Panno Caldo"?', answer: 'È un rituale di benessere profondo: il panno caldo-umido dilata i pori, ammorbidisce il pelo della barba e distende i muscoli del viso. Questo rende la rasatura incredibilmente scorrevole, riducendo a zero le irritazioni e lasciando la pelle morbida.' },
      { question: 'Ogni quanto dovrei regolare la barba in Atelier?', answer: 'Consigliamo una regolazione e definizione professionale ogni 2 o 3 settimane per mantenere la linea geometrica perfetta, l\'igiene e la morbidezza ottimale del pelo.' },
      { question: 'Utilizzate prodotti specifici per pelli sensibili?', answer: 'Sì, utilizziamo creme da rasatura biologiche a base di eucalipto, sandalo o aloe vera, prive di parabeni e siliconi, specifiche per evitare qualsiasi reazione sulle pelli più delicate.' }
    ]
  },
  {
    id: 'academy',
    title: 'Academy & Corsi',
    subtitle: 'Formazione Professionale d\'Élite',
    shortDesc: 'Svela i segreti delle tecniche esclusive di Nicole Vinti. Percorsi formativi avanzati in Dry Cut, Bridal Styling e Consulenza d\'Immagine per acconciatori che vogliono fare la differenza.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800',
    problem: {
      title: 'La standardizzazione del settore e la necessità di differenziarsi',
      description: 'Molti acconciatori faticano ad emergere e ad attrarre clientela alto-spendente perché ripetono tecniche superate, senza saper comunicare o personalizzare il servizio basandosi sui lineamenti e l\'armocromia.',
      points: [
        'Difficoltà a giustificare listini premium per mancanza di competenze differenzianti.',
        'Tagli standard che non valorizzano le diverse tipologie di viso e capelli.',
        'Insicurezza nel gestire acconciature da sposa complesse in tempi rapidi.',
        'Mancanza di metodo nell\'offrire una consulenza d\'immagine completa ed emotiva.'
      ]
    },
    solution: {
      title: 'I Master d\'Eccellenza Firmati Nicole Vinti',
      description: 'Trasforma la tua professione con percorsi formativi intensivi a numero chiuso, con tanta pratica su modelle reali e l\'apprendimento del metodo di posizionamento marketing d\'élite.',
      points: [
        {
          title: 'Master in Bridal Couture & Styling',
          description: 'L\'arte delle acconciature sposa tridimensionali: chignon geometrici, semiraccolti e intrecci couture capaci di durare 24 ore.'
        },
        {
          title: 'Master in Armocromia & Facial Styling',
          description: 'Impara ad analizzare la stagione cromatica, i lineamenti e la forma del viso per progettare tagli e colori perfettamente sartoriali.'
        },
        {
          title: 'Master in Dry Cut & Hair Sculpting',
          description: 'Padroneggia il taglio a secco brevettato da Nicole Vinti: ridisegna la chioma rispettando le proporzioni fisiche e il volume naturale.'
        }
      ]
    },
    approach: 'La formazione non deve essere solo un elenco di nozioni teoriche. Ti svelerò passo dopo passo come ho costruito la mia firma stilistica e il mio modello di business, guidandoti verso un posizionamento di lusso.',
    durationPrice: 'Masterclass a partire da 1 giorno intensivo con rilascio di Certificato Ufficiale',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800', alt: 'Lezione teorica e pratica in aula', title: 'Aule Didattiche Esclusive' },
      { url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800', alt: 'Pratica e modellatura su modella', title: 'Pratica Diretta su Modelle' },
      { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800', alt: 'Consegna dei diplomi certificati Nicole Vinti', title: 'Rilascio Diplomi Accreditati' },
      { url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800', alt: 'Presentazione sul palco delle tendenze moda', title: 'Trend-Setting & Show live' }
    ],
    faqs: [
      { question: 'A chi sono rivolti i corsi dell\'Academy?', answer: 'I corsi sono pensati per acconciatori professionisti, truccatori, bridal specialist o aspiranti image consultant che desiderano innalzare il proprio livello tecnico e strategico.' },
      { question: 'Vengono fornite le modelle per la sessione pratica?', answer: 'Sì, l\'Academy si occupa di selezionare modelle reali per consentire a ogni partecipante di sperimentare le tecniche di taglio, colore o acconciatura sotto la supervisione diretta di Nicole.' },
      { question: 'Rilasciate un attestato di partecipazione alla fine del corso?', answer: 'Sì, al completamento di ogni Masterclass viene rilasciato l\'esclusivo Diploma di Specializzazione Nicole Vinti Academy, spendibile a livello professionale.' }
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
