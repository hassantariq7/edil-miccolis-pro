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
    
    // About Section
    aboutTitle: 'Esperienza e Qualità',
    aboutDescription: 'Con oltre 15 anni di esperienza, Edil Miccolis offre lavori di ristrutturazione e finitura di interni ed esterni su misura. Professionalità, puntualità e materiali di alta qualità: il nostro impegno è dare nuova vita alla tua casa.',
    
    // Services
    servicesTitle: 'I Nostri Servizi',
    paintingTitle: 'Pitturazioni Interne ed Esterne',
    paintingDescription: 'Trasformiamo pareti e facciate con pitture resistenti, curate nei dettagli e disponibili in una vasta gamma di colori e finiture.',
    wallpaperTitle: 'Carta da Parati',
    wallpaperDescription: 'Personalizziamo i tuoi spazi con carta da parati moderna e decorazioni di design, creando ambienti unici e accoglienti.',
    drywallTitle: 'Cartongesso e Controsoffitti',
    drywallDescription: 'Soluzioni funzionali ed estetiche con cartongesso e controsoffitti moderni, anche con illuminazione LED integrata.',
    renovationTitle: 'Ristrutturazioni Complete',
    renovationDescription: 'Offriamo ristrutturazioni chiavi in mano per bagni, cucine, soggiorni e interni completi. Qualità e puntualità garantite.',
    
    // Portfolio
    portfolioTitle: 'I Nostri Progetti',
    portfolioDescription: 'Scopri alcuni dei nostri lavori: bagni moderni, cucine funzionali, soggiorni eleganti e dettagli decorativi unici.',
    
    // Testimonials
    testimonialsTitle: 'Clienti Soddisfatti',
    testimonial1: 'Lavoro impeccabile, consegnato nei tempi previsti. La mia cucina sembra nuova!',
    testimonial2: 'Pittura perfetta e grande professionalità. Consigliatissimo!',
    testimonial3: 'Hanno trasformato completamente il mio bagno. Risultato oltre le aspettative!',
    
    // Contact
    contactTitle: 'Contattaci',
    contactDescription: 'Hai un progetto in mente? Contattaci oggi stesso e ricevi il tuo preventivo gratuito.',
    contactButton: 'Richiedi Preventivo',
    phone: 'Telefono',
    email: 'Email',
    address: 'Indirizzo',
    
    // CTA
    ctaTitle: 'Hai un progetto in mente?',
    ctaButton: 'Contattaci ora',
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
    
    // About Section
    aboutTitle: 'Experience and Quality',
    aboutDescription: 'With over 15 years of experience, Edil Miccolis delivers tailor-made renovation and finishing services for interiors and exteriors. Professionalism, reliability, and premium materials: our mission is to give your home a new life.',
    
    // Services
    servicesTitle: 'Our Services',
    paintingTitle: 'Interior & Exterior Painting',
    paintingDescription: 'We transform walls and facades with durable, detailed painting available in a wide range of colors and finishes.',
    wallpaperTitle: 'Wallpaper & Decorations',
    wallpaperDescription: 'We personalize your spaces with modern wallpaper and decorative finishes, creating unique and welcoming interiors.',
    drywallTitle: 'Drywall & False Ceilings',
    drywallDescription: 'Functional and aesthetic solutions with drywall and modern false ceilings, including integrated LED lighting.',
    renovationTitle: 'Complete Renovations',
    renovationDescription: 'We provide turnkey renovations for bathrooms, kitchens, living rooms, and full interiors. Quality and timeliness guaranteed.',
    
    // Portfolio
    portfolioTitle: 'Our Projects',
    portfolioDescription: 'Discover some of our projects: modern bathrooms, functional kitchens, elegant living rooms, and unique decorative details.',
    
    // Testimonials
    testimonialsTitle: 'Satisfied Clients',
    testimonial1: 'Impeccable work, delivered on time. My kitchen looks brand new!',
    testimonial2: 'Perfect painting and great professionalism. Highly recommended!',
    testimonial3: 'They completely transformed my bathroom. Results exceeded expectations!',
    
    // Contact
    contactTitle: 'Contact Us',
    contactDescription: 'Got a project in mind? Contact us today and get your free quote.',
    contactButton: 'Request Quote',
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
    
    // CTA
    ctaTitle: 'Got a project in mind?',
    ctaButton: 'Contact us now',
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