import React, { createContext, useContext, useState } from 'react';

type Language = 'it' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  it: {
    // Navigation
    home: 'Home',
    services: 'Servizi',
    portfolio: 'Portfolio',
    about: 'Chi Siamo',
    testimonials: 'Testimonianze',
    contact: 'Contatti',
    
    // Hero Section - General
    heroRating: 'Votato #1 a Roma',
    heroButton: 'Preventivo Gratuito',
    heroSecondaryButton: 'Vedi i Nostri Lavori',
    heroFloatingTitle: 'Anni di Esperienza',

    // Hero Slide 1 - General Renovations
    hero1Title: 'Ristrutturazioni Premium a',
    hero1Location: 'Roma e Lazio',
    hero1Subtitle: 'Trasforma il tuo spazio con i nostri servizi di ristrutturazione esperti. Dalle cucine alle ristrutturazioni complete, garantiamo qualità eccezionale e maestria artigianale.',
    hero1Feature1: '15+ Anni di Esperienza',
    hero1Feature2: 'Autorizzati e Assicurati',
    hero1Feature3: 'Garanzia di Qualità',
    hero1Feature4: 'Consulenze Gratuite',
    hero1Cta: 'Preventivo Gratuito',

    // Hero Slide 2 - Bathroom Renovations
    hero2Title: 'Ristrutturazioni Bagno',
    hero2Location: 'di Lusso',
    hero2Subtitle: 'Crea il bagno dei tuoi sogni con sanitari moderni, finiture eleganti e maestria artigianale. Ristrutturazioni complete dalla progettazione all\'installazione.',
    hero2Feature1: 'Design Moderni',
    hero2Feature2: 'Sanitari Efficienti',
    hero2Feature3: 'Materiali Premium',
    hero2Feature4: 'Installazione Rapida',
    hero2Cta: 'Trasforma il Tuo Bagno',

    // Hero Slide 3 - Kitchen Renovations
    hero3Title: 'Cucine Moderne',
    hero3Location: 'su Misura',
    hero3Subtitle: 'Progetta il cuore della tua casa con cucine personalizzate che uniscono funzionalità ed estetica. Dai mobili ai piani di lavoro.',
    hero3Feature1: 'Mobili su Misura',
    hero3Feature2: 'Piani di Lavoro Premium',
    hero3Feature3: 'Elettrodomestici Moderni',
    hero3Feature4: 'Ottimizzazione Spazi',
    hero3Cta: 'Ridisegna la Tua Cucina',

    // Hero Slide 4 - Painting Services
    hero4Title: 'Servizi di',
    hero4Location: 'Tinteggiatura',
    hero4Subtitle: 'Rinnova i tuoi spazi con servizi di tinteggiatura professionale. Soluzioni interne ed esterne con vernici premium e tecniche esperte.',
    hero4Feature1: 'Interni ed Esterni',
    hero4Feature2: 'Vernici Premium',
    hero4Feature3: 'Consulenza Colori',
    hero4Feature4: 'Completamento Rapido',
    hero4Cta: 'Preventivo Tinteggiatura',
    
    // About Section
    aboutTitle: 'Esperienza e Qualità',
    aboutDescription: 'Con oltre 15 anni di esperienza, Edil Miccolis offre lavori di ristrutturazione e finitura di interni ed esterni su misura. Professionalità, puntualità e materiali di alta qualità: il nostro impegno è dare nuova vita alla tua casa.',
    
    // Services
    servicesTitle: 'I Nostri Servizi',
    servicesDescription: 'Offriamo una gamma completa di servizi per trasformare i tuoi spazi',
    paintingTitle: 'Pitturazioni Interne ed Esterne',
    paintingDescription: 'Trasformiamo pareti e facciate con pitture resistenti, curate nei dettagli e disponibili in una vasta gamma di colori e finiture.',
    paintingFeature1: 'Pitture di alta qualità',
    paintingFeature2: 'Vasta scelta di colori',
    paintingFeature3: 'Finiture personalizzate',
    wallpaperTitle: 'Carta da Parati',
    wallpaperDescription: 'Personalizziamo i tuoi spazi con carta da parati moderna e decorazioni di design, creando ambienti unici e accoglienti.',
    wallpaperFeature1: 'Design moderni',
    wallpaperFeature2: 'Installazione precisa',
    wallpaperFeature3: 'Ampia selezione',
    drywallTitle: 'Cartongesso e Controsoffitti',
    drywallDescription: 'Soluzioni funzionali ed estetiche con cartongesso e controsoffitti moderni, anche con illuminazione LED integrata.',
    drywallFeature1: 'Illuminazione LED',
    drywallFeature2: 'Design funzionale',
    drywallFeature3: 'Isolamento acustico',
    renovationTitle: 'Ristrutturazioni Complete',
    renovationDescription: 'Offriamo ristrutturazioni chiavi in mano per bagni, cucine, soggiorni e interni completi. Qualità e puntualità garantite.',
    renovationFeature1: 'Chiavi in mano',
    renovationFeature2: 'Progettazione completa',
    renovationFeature3: 'Garanzia qualità',
    requestQuoteButton: 'Richiedi Preventivo',
    servicesCta: 'Hai bisogno di una consulenza?',
    servicesCtaDescription: 'Contattaci per una consulenza gratuita e un preventivo personalizzato',
    servicesCtaButton: 'Consulenza Gratuita',
    
    // Portfolio
    portfolioTitle: 'I Nostri Progetti',
    portfolioDescription: 'Scopri alcuni dei nostri lavori: bagni moderni, cucine funzionali, soggiorni eleganti e dettagli decorativi unici.',
    portfolioAll: 'Tutti',
    portfolioBathroom: 'Bagni',
    portfolioKitchen: 'Cucine',
    portfolioLiving: 'Soggiorni',
    portfolioExterior: 'Esterni',
    portfolioViewDetails: 'Visualizza dettagli',
    portfolioBeforeAfter: 'Prima/Dopo',
    portfolioClient: 'Cliente',
    portfolioDuration: 'Durata',
    portfolioCtaTitle: 'Pronti a iniziare il vostro progetto?',
    portfolioCtaDescription: 'Trasformiamo le vostre idee in realtà con la nostra esperienza e professionalità',
    portfolioCtaButton: 'Inizia il Tuo Progetto',
    
    // Testimonials
    testimonialsTitle: 'Clienti Soddisfatti',
    testimonialsDescription: 'Cosa dicono i nostri clienti dei nostri servizi',
    testimonial1: 'Lavoro impeccabile, consegnato nei tempi previsti. La mia cucina sembra nuova!',
    testimonial1Role: 'Proprietaria di casa',
    testimonial1Project: 'Ristrutturazione cucina',
    testimonial1Location: 'Milano',
    testimonial2: 'Pittura perfetta e grande professionalità. Consigliatissimo!',
    testimonial2Role: 'Imprenditore',
    testimonial2Project: 'Pittura ufficio',
    testimonial2Location: 'Roma',
    testimonial3: 'Hanno trasformato completamente il mio bagno. Risultato oltre le aspettative!',
    testimonial3Role: 'Architetto',
    testimonial3Project: 'Ristrutturazione bagno',
    testimonial3Location: 'Torino',
    statsProjects: 'Progetti Completati',
    statsExperience: 'Anni di Esperienza',
    statsSatisfaction: 'Clienti Soddisfatti',
    statsResponse: 'Tempo di Risposta',
    statsResponseUnit: 'ore',
    
    // Contact
    contactTitle: 'Contattaci',
    contactDescription: 'Hai un progetto in mente? Contattaci oggi stesso e ricevi il tuo preventivo gratuito.',
    contactButton: 'Richiedi Preventivo',
    phone: 'Telefono',
    whatsapp: 'WhatsApp',
    email: 'Email',
    address: 'Indirizzo',
    contactPhone: '+39 123 456 7890',
    contactWhatsapp: 'Scrivici su WhatsApp',
    contactEmail: 'info@edilmiccolis.it',
    contactAddress: 'Via Roma 123, Milano, MI',
    contactQuoteTitle: 'Preventivo Gratuito',
    contactQuoteDescription: 'Ricevi una valutazione gratuita per il tuo progetto',
    formName: 'Nome completo',
    formPhone: 'Telefono',
    formEmail: 'Email',
    formService: 'Tipo di servizio',
    formBudget: 'Budget indicativo',
    formDescription: 'Descrizione del progetto',
    formNamePlaceholder: 'Il tuo nome e cognome',
    formPhonePlaceholder: 'Il tuo numero di telefono',
    formEmailPlaceholder: 'La tua email',
    formDescriptionPlaceholder: 'Descrivi il tuo progetto...',
    formServicePainting: 'Pitturazioni',
    formServiceWallpaper: 'Carta da parati',
    formServiceDrywall: 'Cartongesso',
    formServiceRenovation: 'Ristrutturazione completa',
    formBudget1: 'Fino a €5.000',
    formBudget2: '€5.000 - €15.000',
    formBudget3: '€15.000 - €30.000',
    formBudget4: 'Oltre €30.000',
    formSubmit: 'Invia Richiesta',
    formSubmitting: 'Invio in corso...',
    formSuccess: 'Richiesta inviata con successo! Ti contatteremo presto.',
    
    // Footer
    companyDescription: 'Oltre 15 anni di esperienza in ristrutturazioni e finiture di qualità. Trasformiamo i tuoi spazi con professionalità e materiali premium.',
    quickLinks: 'Link Rapidi',
    ourServices: 'I Nostri Servizi',
    followUs: 'Seguici',
    freeQuote: 'Preventivo Gratuito',
    consultationText: 'Richiedi una consulenza senza impegno',
    contactUs: 'Contattaci',
    copyright: '© 2024 Edil Miccolis. Tutti i diritti riservati.',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Termini di Servizio',
    cookiePolicy: 'Cookie Policy',
    
    // Footer Services
    interiorExteriorPainting: 'Pitturazioni interne ed esterne',
    wallpaperService: 'Carta da parati',
    drywallCeilings: 'Cartongesso e controsoffitti',
    completeRenovations: 'Ristrutturazioni complete',
    
    // CTA
    ctaTitle: 'Hai un progetto in mente?',
    ctaButton: 'Contattaci ora',
    
    // Contact details and form
    contactHours: "Lun–Ven 8:00–18:00, Sab 8:00–13:00",
    contactResponseFast: "Risposta entro 2 ore",
    contactServiceArea: "Servizio in tutta la Lombardia",
    contactFreeInspection: "Sopralluogo gratuito",
    contactFormIntro: "Compila il form con i dettagli del tuo progetto e ti ricontatteremo al più presto.",
    selectServicePlaceholder: "Seleziona un servizio",
    optionOther: "Altro",
    selectBudgetPlaceholder: "Seleziona budget",
    optionDiscuss: "Da discutere",
    privacyConsent: "Accetto il trattamento dei dati personali secondo la privacy policy",
    formSuccessFollowup: "Ti ricontatteremo entro 24 ore per discutere il tuo progetto.",
    
    // Project Detail Modal
    projectDetailBefore: "Prima",
    projectDetailAfter: "Dopo",
    projectDetailView: "Vista",
    projectDetailSwipeInstruction: "Scorri per vedere le foto prima/dopo",
    projectDetailDescription: "Descrizione del Progetto",
    projectDetailDuration: "Durata",
    projectDetailClient: "Cliente",
    projectDetailCompleted: "Completato",
    projectDetailSize: "Dimensioni",
    projectDetailChallenges: "Sfide del Progetto",
    projectDetailSolutions: "Soluzioni Adottate",
    projectDetailContactCta: "Inizia un progetto simile",
    
    // Project Titles
    project1Title: "Ristrutturazione Bagno Moderno",
    project2Title: "Cucina Open Space",
    project3Title: "Soggiorno Elegante", 
    project4Title: "Facciata Esterna",
    project5Title: "Bagno di Lusso",
    project6Title: "Cucina Classica",
    
    // Project Descriptions
    project1Description: "Trasformazione completa con rivestimenti in ceramica, sanitari sospesi e illuminazione LED.",
    project2Description: "Creazione di uno spazio aperto cucina-soggiorno con isola centrale e finiture moderne.",
    project3Description: "Ristrutturazione completa con controsoffitto illuminato e carta da parati di design.",
    project4Description: "Ripristino e pittura facciata esterna con materiali resistenti alle intemperie.",
    project5Description: "Bagno principale con vasca freestanding, doccia walk-in e finiture premium.",
    project6Description: "Ristrutturazione cucina in stile classico con legno massello e marmo.",
    
    // Project Full Descriptions
    project1FullDescription: "Completa ristrutturazione di un bagno padronale con sostituzione di tutti gli impianti, nuovi rivestimenti in ceramica effetto marmo, sanitari sospesi di design e sistema di illuminazione LED con controllo dimmerabile. Aggiunta di nicchie funzionali e mobile su misura.",
    project2FullDescription: "Demolizione di una parete divisoria per creare un grande open space cucina-soggiorno. Installazione di cucina moderna con isola centrale, piano in quarzo e elettrodomestici ad incasso. Nuova illuminazione con faretti LED e lampade a sospensione.",
    project3FullDescription: "Rinnovamento completo di un soggiorno professionale con controsoffitto in cartongesso, illuminazione LED perimetrale, carta da parati di design sulla parete principale e pavimentazione in gres effetto legno.",
    project4FullDescription: "Completo rifacimento della facciata esterna di un palazzo condominiale con pulizia, stucco, primer anticorrosivo e due mani di pittura silossanica resistente alle intemperie.",
    project5FullDescription: "Bagno padronale di lusso con vasca freestanding, doccia walk-in con soffione a cascata, rivestimenti in marmo naturale, riscaldamento a pavimento e sistema domotico per controllo luci e temperatura.",
    project6FullDescription: "Cucina in stile classico toscano con mobili in legno massello di castagno, top in marmo Carrara, cappa in muratura rivestita a mano e pavimento in cotto antico recuperato.",
    
    // Duration Terms
    duration2Weeks: "2 settimane",
    duration3Weeks: "3 settimane", 
    duration10Days: "10 giorni",
    duration1Week: "1 settimana",
    duration4Weeks: "4 settimane",
    
    // Client Types
    clientPrivateFamily: "Famiglia Rossi",
    clientPrivateFamily2: "Famiglia Bianchi",
    clientLawFirm: "Studio Legale",
    clientCondominium: "Condominio Centro",
    clientPrivateVilla: "Villa Privata",
    clientCountryHouse: "Casa di Campagna",
    
    // Common Tags
    tagBathroom: "Bagno",
    tagCeramic: "Ceramica", 
    tagLED: "LED",
    tagKitchen: "Cucina",
    tagOpenSpace: "Open Space",
    tagIsland: "Isola",
    tagLivingRoom: "Soggiorno",
    tagFalseCeiling: "Controsoffitto", 
    tagDesign: "Design",
    tagExterior: "Esterno",
    tagPainting: "Pittura",
    tagFacade: "Facciata",
    tagLuxury: "Lusso",
    tagBathtub: "Vasca",
    tagPremium: "Premium",
    tagClassic: "Classico",
    tagWood: "Legno",
    tagMarble: "Marmo",
    
    // Completion Dates
    completionMarch2024: "Marzo 2024",
    completionFebruary2024: "Febbraio 2024",
    completionJanuary2024: "Gennaio 2024",
    completionApril2024: "Aprile 2024",
    completionMay2024: "Maggio 2024",
    completionJune2024: "Giugno 2024",
    
    // Project Sizes
    projectSize8sqm: "8 mq",
    projectSize25sqm: "25 mq", 
    projectSize30sqm: "30 mq",
    projectSize200sqm: "200 mq",
    projectSize15sqm: "15 mq",
    projectSize20sqm: "20 mq",
    
    // Project Challenges
    challenge1_1: "Spazio limitato da ottimizzare",
    challenge1_2: "Rifacimento completo degli impianti idraulici ed elettrici",
    challenge1_3: "Coordinamento con altri lavori in casa",
    challenge2_1: "Demolizione parete portante",
    challenge2_2: "Integrazione impianti nella nuova configurazione",
    challenge2_3: "Coordinamento estetico cucina-soggiorno",
    challenge3_1: "Mantenere l'operatività dello studio durante i lavori",
    challenge3_2: "Integrazione tecnologica avanzata",
    challenge3_3: "Rispetto dei tempi serrati",
    challenge4_1: "Lavori in altezza su palazzo storico",
    challenge4_2: "Condizioni meteorologiche variabili",
    challenge4_3: "Coordinamento con i condomini",
    challenge5_1: "Installazione impianti complessi",
    challenge5_2: "Lavorazione marmo naturale",
    challenge5_3: "Integrazione sistema domotico",
    challenge6_1: "Reperimento materiali antichi originali",
    challenge6_2: "Lavorazioni artigianali tradizionali",
    challenge6_3: "Rispetto dello stile della casa",
    
    // Project Solutions
    solution1_1: "Progettazione 3D per massimizzare lo spazio",
    solution1_2: "Utilizzo di sanitari sospesi per guadagnare spazio",
    solution1_3: "Illuminazione LED strategica per amplificare la percezione dello spazio",
    solution2_1: "Rinforzo strutturale con trave in acciaio",
    solution2_2: "Progettazione integrata degli impianti",
    solution2_3: "Scelta di materiali e colori coordinati",
    solution3_1: "Lavori programmati nei weekend",
    solution3_2: "Predisposizione canalizzazioni per tecnologia",
    solution3_3: "Team dedicato per rispettare le scadenze",
    solution4_1: "Utilizzo di ponteggi certificati e personale specializzato",
    solution4_2: "Programmazione lavori in base alle previsioni meteo",
    solution4_3: "Comunicazione costante con l'amministratore",
    solution5_1: "Collaborazione con specialisti di settore",
    solution5_2: "Taglio e posa in opera del marmo su misura",
    solution5_3: "Programmazione sistema domotico personalizzato",
    solution6_1: "Ricerca presso fornitori specializzati",
    solution6_2: "Coinvolgimento di maestranze esperte",
    solution6_3: "Studio approfondito dello stile architettonico esistente",
  },
  en: {
    // Navigation
    home: 'Home',
    services: 'Services',
    portfolio: 'Portfolio',
    about: 'About Us',
    testimonials: 'Testimonials',
    contact: 'Contact',
    
    // Hero Section - General
    heroRating: 'Voted #1 in Rome',
    heroButton: 'Get Free Quote',
    heroSecondaryButton: 'View Our Work',
    heroFloatingTitle: 'Years Experience',

    // Hero Slide 1 - General Renovations
    hero1Title: 'Premium Renovations in',
    hero1Location: 'Rome & Lazio',
    hero1Subtitle: 'Transform your space with our expert renovation services. From kitchens to complete home makeovers, we deliver exceptional quality and craftsmanship.',
    hero1Feature1: '15+ Years Experience',
    hero1Feature2: 'Licensed & Insured',
    hero1Feature3: 'Quality Guarantee',
    hero1Feature4: 'Free Consultations',
    hero1Cta: 'Get Free Quote',

    // Hero Slide 2 - Bathroom Renovations
    hero2Title: 'Luxury Bathroom',
    hero2Location: 'Renovations',
    hero2Subtitle: 'Create your dream bathroom with modern fixtures, elegant finishes, and expert craftsmanship. Complete renovations from design to installation.',
    hero2Feature1: 'Modern Designs',
    hero2Feature2: 'Water-Efficient Fixtures',
    hero2Feature3: 'Premium Materials',
    hero2Feature4: 'Quick Installation',
    hero2Cta: 'Transform Your Bathroom',

    // Hero Slide 3 - Kitchen Renovations
    hero3Title: 'Modern Kitchen',
    hero3Location: 'Transformations',
    hero3Subtitle: 'Design the heart of your home with custom kitchens that blend functionality with stunning aesthetics. From cabinets to countertops.',
    hero3Feature1: 'Custom Cabinetry',
    hero3Feature2: 'Premium Countertops',
    hero3Feature3: 'Modern Appliances',
    hero3Feature4: 'Space Optimization',
    hero3Cta: 'Redesign Your Kitchen',

    // Hero Slide 4 - Painting Services
    hero4Title: 'Professional Painting',
    hero4Location: 'Services',
    hero4Subtitle: 'Refresh your space with professional painting services. Interior and exterior solutions with premium paints and expert techniques.',
    hero4Feature1: 'Interior & Exterior',
    hero4Feature2: 'Premium Paints',
    hero4Feature3: 'Color Consultation',
    hero4Feature4: 'Quick Completion',
    hero4Cta: 'Get Painting Quote',
    
    // About Section
    aboutTitle: 'Experience and Quality',
    aboutDescription: 'With over 15 years of experience, Edil Miccolis delivers tailor-made renovation and finishing services for interiors and exteriors. Professionalism, reliability, and premium materials: our mission is to give your home a new life.',
    
    // Services
    servicesTitle: 'Our Services',
    servicesDescription: 'We offer a complete range of services to transform your spaces',
    paintingTitle: 'Interior & Exterior Painting',
    paintingDescription: 'We transform walls and facades with durable, detailed painting available in a wide range of colors and finishes.',
    paintingFeature1: 'High-quality paints',
    paintingFeature2: 'Wide color selection',
    paintingFeature3: 'Custom finishes',
    wallpaperTitle: 'Wallpaper & Decorations',
    wallpaperDescription: 'We personalize your spaces with modern wallpaper and decorative finishes, creating unique and welcoming interiors.',
    wallpaperFeature1: 'Modern designs',
    wallpaperFeature2: 'Precise installation',
    wallpaperFeature3: 'Wide selection',
    drywallTitle: 'Drywall & False Ceilings',
    drywallDescription: 'Functional and aesthetic solutions with drywall and modern false ceilings, including integrated LED lighting.',
    drywallFeature1: 'LED lighting',
    drywallFeature2: 'Functional design',
    drywallFeature3: 'Sound insulation',
    renovationTitle: 'Complete Renovations',
    renovationDescription: 'We provide turnkey renovations for bathrooms, kitchens, living rooms, and full interiors. Quality and timeliness guaranteed.',
    renovationFeature1: 'Turnkey service',
    renovationFeature2: 'Complete design',
    renovationFeature3: 'Quality guarantee',
    requestQuoteButton: 'Request Quote',
    servicesCta: 'Need a consultation?',
    servicesCtaDescription: 'Contact us for a free consultation and personalized quote',
    servicesCtaButton: 'Free Consultation',
    
    // Portfolio
    portfolioTitle: 'Our Projects',
    portfolioDescription: 'Discover some of our projects: modern bathrooms, functional kitchens, elegant living rooms, and unique decorative details.',
    portfolioAll: 'All',
    portfolioBathroom: 'Bathrooms',
    portfolioKitchen: 'Kitchens',
    portfolioLiving: 'Living Rooms',
    portfolioExterior: 'Exteriors',
    portfolioViewDetails: 'View details',
    portfolioBeforeAfter: 'Before/After',
    portfolioClient: 'Client',
    portfolioDuration: 'Duration',
    portfolioCtaTitle: 'Ready to start your project?',
    portfolioCtaDescription: 'We turn your ideas into reality with our experience and professionalism',
    portfolioCtaButton: 'Start Your Project',
    
    // Testimonials
    testimonialsTitle: 'Satisfied Clients',
    testimonialsDescription: 'What our clients say about our services',
    testimonial1: 'Impeccable work, delivered on time. My kitchen looks brand new!',
    testimonial1Role: 'Homeowner',
    testimonial1Project: 'Kitchen renovation',
    testimonial1Location: 'Milan',
    testimonial2: 'Perfect painting and great professionalism. Highly recommended!',
    testimonial2Role: 'Business Owner',
    testimonial2Project: 'Office painting',
    testimonial2Location: 'Rome',
    testimonial3: 'They completely transformed my bathroom. Results exceeded expectations!',
    testimonial3Role: 'Architect',
    testimonial3Project: 'Bathroom renovation',
    testimonial3Location: 'Turin',
    statsProjects: 'Completed Projects',
    statsExperience: 'Years of Experience',
    statsSatisfaction: 'Satisfied Clients',
    statsResponse: 'Response Time',
    statsResponseUnit: 'hours',
    
    // Contact
    contactTitle: 'Contact Us',
    contactDescription: 'Got a project in mind? Contact us today and get your free quote.',
    contactButton: 'Request Quote',
    phone: 'Phone',
    whatsapp: 'WhatsApp',
    email: 'Email',
    address: 'Address',
    contactPhone: '+39 123 456 7890',
    contactWhatsapp: 'Write us on WhatsApp',
    contactEmail: 'info@edilmiccolis.it',
    contactAddress: 'Via Roma 123, Milan, MI',
    contactQuoteTitle: 'Free Quote',
    contactQuoteDescription: 'Get a free evaluation for your project',
    formName: 'Full name',
    formPhone: 'Phone',
    formEmail: 'Email',
    formService: 'Service type',
    formBudget: 'Indicative budget',
    formDescription: 'Project description',
    formNamePlaceholder: 'Your name and surname',
    formPhonePlaceholder: 'Your phone number',
    formEmailPlaceholder: 'Your email',
    formDescriptionPlaceholder: 'Describe your project...',
    formServicePainting: 'Painting',
    formServiceWallpaper: 'Wallpaper',
    formServiceDrywall: 'Drywall',
    formServiceRenovation: 'Complete renovation',
    formBudget1: 'Up to €5,000',
    formBudget2: '€5,000 - €15,000',
    formBudget3: '€15,000 - €30,000',
    formBudget4: 'Over €30,000',
    formSubmit: 'Send Request',
    formSubmitting: 'Sending...',
    formSuccess: 'Request sent successfully! We will contact you soon.',
    
    // Footer
    companyDescription: 'Over 15 years of experience in renovations and quality finishes. We transform your spaces with professionalism and premium materials.',
    quickLinks: 'Quick Links',
    ourServices: 'Our Services',
    followUs: 'Follow Us',
    freeQuote: 'Free Quote',
    consultationText: 'Request a consultation without obligation',
    contactUs: 'Contact Us',
    copyright: '© 2024 Edil Miccolis. All rights reserved.',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    cookiePolicy: 'Cookie Policy',
    
    // Footer Services
    interiorExteriorPainting: 'Interior and exterior painting',
    wallpaperService: 'Wallpaper',
    drywallCeilings: 'Drywall and suspended ceilings',
    completeRenovations: 'Complete renovations',
    
    // CTA
    ctaTitle: 'Got a project in mind?',
    ctaButton: 'Contact us now',
    
    // Contact details and form
    contactHours: "Mon–Fri 8:00–18:00, Sat 8:00–13:00",
    contactResponseFast: "Response within 2 hours",
    contactServiceArea: "Service across Lombardy",
    contactFreeInspection: "Free inspection",
    contactFormIntro: "Fill out the form with your project details and we will get back to you shortly.",
    selectServicePlaceholder: "Select a service",
    optionOther: "Other",
    selectBudgetPlaceholder: "Select budget",
    optionDiscuss: "To discuss",
    privacyConsent: "I consent to the processing of personal data according to the privacy policy",
    formSuccessFollowup: "We will contact you within 24 hours to discuss your project.",
    
    // Project Detail Modal
    projectDetailBefore: "Before",
    projectDetailAfter: "After",
    projectDetailView: "View",
    projectDetailSwipeInstruction: "Swipe to see before/after photos",
    projectDetailDescription: "Project Description",
    projectDetailDuration: "Duration",
    projectDetailClient: "Client",
    projectDetailCompleted: "Completed",
    projectDetailSize: "Size",
    projectDetailChallenges: "Project Challenges",
    projectDetailSolutions: "Solutions Implemented",
    projectDetailContactCta: "Start a similar project",
    
    // Project Titles
    project1Title: "Modern Bathroom Renovation",
    project2Title: "Open Space Kitchen",
    project3Title: "Elegant Living Room",
    project4Title: "External Facade",
    project5Title: "Luxury Bathroom",
    project6Title: "Classic Kitchen",
    
    // Project Descriptions  
    project1Description: "Complete transformation with ceramic tiles, wall-hung fixtures, and LED lighting.",
    project2Description: "Creation of an open kitchen-living space with central island and modern finishes.",
    project3Description: "Complete renovation with illuminated false ceiling and designer wallpaper.",
    project4Description: "Restoration and painting of external facade with weather-resistant materials.",
    project5Description: "Master bathroom with freestanding bathtub, walk-in shower, and premium finishes.",
    project6Description: "Classic style kitchen renovation with solid wood and marble.",
    
    // Project Full Descriptions
    project1FullDescription: "Complete renovation of a master bathroom with replacement of all systems, new marble-effect ceramic tiles, designer wall-hung fixtures, and LED lighting system with dimmable control. Addition of functional niches and custom-made furniture.",
    project2FullDescription: "Demolition of a dividing wall to create a large open-plan kitchen-living area. Installation of modern kitchen with central island, quartz countertop, and built-in appliances. New lighting with LED spotlights and pendant lamps.",
    project3FullDescription: "Complete renovation of a professional living room with drywall false ceiling, perimeter LED lighting, designer wallpaper on the main wall, and wood-effect porcelain flooring.",
    project4FullDescription: "Complete restoration of the external facade of a condominium building with cleaning, plastering, anti-corrosive primer, and two coats of weather-resistant siloxane paint.",
    project5FullDescription: "Luxury master bathroom with freestanding bathtub, walk-in shower with waterfall showerhead, natural marble finishes, underfloor heating, and home automation system for light and temperature control.",
    project6FullDescription: "Tuscan classic style kitchen with solid chestnut wood furniture, Carrara marble countertop, hand-finished masonry hood, and reclaimed antique terracotta flooring.",
    
    // Duration Terms
    duration2Weeks: "2 weeks",
    duration3Weeks: "3 weeks",
    duration10Days: "10 days", 
    duration1Week: "1 week",
    duration4Weeks: "4 weeks",
    
    // Client Types
    clientPrivateFamily: "Rossi Family",
    clientPrivateFamily2: "Bianchi Family",
    clientLawFirm: "Law Firm",
    clientCondominium: "Downtown Condominium",
    clientPrivateVilla: "Private Villa",
    clientCountryHouse: "Country House",
    
    // Common Tags
    tagBathroom: "Bathroom",
    tagCeramic: "Ceramic",
    tagLED: "LED",
    tagKitchen: "Kitchen",
    tagOpenSpace: "Open Space",
    tagIsland: "Island",
    tagLivingRoom: "Living Room",
    tagFalseCeiling: "False Ceiling",
    tagDesign: "Design",
    tagExterior: "Exterior",
    tagPainting: "Painting",
    tagFacade: "Facade",
    tagLuxury: "Luxury",
    tagBathtub: "Bathtub",
    tagPremium: "Premium",
    tagClassic: "Classic",
    tagWood: "Wood",
    tagMarble: "Marble",
    
    // Completion Dates
    completionMarch2024: "March 2024",
    completionFebruary2024: "February 2024", 
    completionJanuary2024: "January 2024",
    completionApril2024: "April 2024",
    completionMay2024: "May 2024",
    completionJune2024: "June 2024",
    
    // Project Sizes
    projectSize8sqm: "8 sqm",
    projectSize25sqm: "25 sqm",
    projectSize30sqm: "30 sqm", 
    projectSize200sqm: "200 sqm",
    projectSize15sqm: "15 sqm",
    projectSize20sqm: "20 sqm",
    
    // Project Challenges
    challenge1_1: "Limited space to optimize",
    challenge1_2: "Complete renovation of plumbing and electrical systems",
    challenge1_3: "Coordination with other house works",
    challenge2_1: "Load-bearing wall demolition",
    challenge2_2: "System integration in new configuration", 
    challenge2_3: "Kitchen-living room aesthetic coordination",
    challenge3_1: "Maintaining studio operations during work",
    challenge3_2: "Advanced technology integration",
    challenge3_3: "Tight deadline compliance",
    challenge4_1: "High-altitude work on historic building",
    challenge4_2: "Variable weather conditions",
    challenge4_3: "Coordination with condominium residents",
    challenge5_1: "Complex system installation",
    challenge5_2: "Natural marble processing",
    challenge5_3: "Home automation system integration",
    challenge6_1: "Sourcing original antique materials",
    challenge6_2: "Traditional artisan workmanship",
    challenge6_3: "Respecting the house's existing style",
    
    // Project Solutions
    solution1_1: "3D design to maximize space",
    solution1_2: "Use of wall-hung fixtures to gain space",
    solution1_3: "Strategic LED lighting to amplify space perception",
    solution2_1: "Structural reinforcement with steel beam",
    solution2_2: "Integrated system design",
    solution2_3: "Choice of coordinated materials and colors",
    solution3_1: "Weekend scheduled work",
    solution3_2: "Technology conduit preparation",
    solution3_3: "Dedicated team to meet deadlines",
    solution4_1: "Use of certified scaffolding and specialized personnel",
    solution4_2: "Work scheduling based on weather forecasts",
    solution4_3: "Constant communication with administrator",
    solution5_1: "Collaboration with industry specialists", 
    solution5_2: "Custom marble cutting and installation",
    solution5_3: "Personalized home automation programming",
    solution6_1: "Research with specialized suppliers",
    solution6_2: "Involvement of expert craftsmen",
    solution6_3: "In-depth study of existing architectural style",
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('it');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['it']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};