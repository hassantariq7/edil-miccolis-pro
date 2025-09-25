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
    
    // Hero Section
    heroTitle: 'Ristrutturazioni e Finiture di Qualità',
    heroSubtitle: 'Trasformiamo i tuoi spazi con pitture, carta da parati, cartongesso e ristrutturazioni complete',
    heroButton: 'Richiedi un preventivo gratuito',
    heroRating: 'Oltre 100 clienti soddisfatti',
    heroLocation: 'in Italia',
    heroFeature1: 'Preventivi gratuiti',
    heroFeature2: 'Materiali di qualità',
    heroFeature3: 'Consegna puntuale',
    heroFeature4: '15+ anni esperienza',
    heroSecondaryButton: 'Guarda i nostri lavori',
    heroFloatingTitle: 'Anni di esperienza',
    
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
  },
  en: {
    // Navigation
    home: 'Home',
    services: 'Services',
    portfolio: 'Portfolio',
    about: 'About Us',
    testimonials: 'Testimonials',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Quality Renovations & Finishes',
    heroSubtitle: 'We transform your spaces with painting, wallpaper, drywall, and complete renovations',
    heroButton: 'Request a free quote',
    heroRating: 'Over 100 satisfied clients',
    heroLocation: 'in Italy',
    heroFeature1: 'Free quotes',
    heroFeature2: 'Quality materials',
    heroFeature3: 'On-time delivery',
    heroFeature4: '15+ years experience',
    heroSecondaryButton: 'View our work',
    heroFloatingTitle: 'Years of experience',
    
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