import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: t('home'), href: '#home' },
    { name: t('services'), href: '#services' },
    { name: t('portfolio'), href: '#portfolio' },
    { name: t('about'), href: '#about' },
    { name: t('contact'), href: '#contact' },
  ];

  const services = [
    t('interiorExteriorPainting'),
    t('wallpaperService'),
    t('drywallCeilings'),
    t('completeRenovations'),
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background relative">
      {/* Back to top button */}
      <Button
        onClick={scrollToTop}
        className="absolute -top-6 right-8 bg-primary text-primary-foreground shadow-hover hover:shadow-elegant transition-all duration-300"
        size="icon"
      >
        <ArrowUp className="h-4 w-4" />
      </Button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold font-heading mb-4 bg-hero-gradient bg-clip-text text-transparent">
              Edil Miccolis
            </h3>
            <p className="text-background/80 mb-6 leading-relaxed">
              {t('companyDescription')}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-secondary" />
                <a href="tel:+39123456789" className="text-background/80 hover:text-background transition-colors">
                  +39 123 456 7890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-secondary" />
                <a href="mailto:info@edilmiccolis.it" className="text-background/80 hover:text-background transition-colors">
                  info@edilmiccolis.it
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-secondary" />
                <span className="text-background/80">Via Roma 123, Milano</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-background mb-4">{t('ourServices')}</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-background/80">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Social & CTA */}
          <div>
            <h4 className="font-semibold text-background mb-4">{t('followUs')}</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-colors">
                <Facebook className="h-5 w-5 text-background" />
              </a>
              <a href="#" className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-colors">
                <Instagram className="h-5 w-5 text-background" />
              </a>
              <a href="#" className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-colors">
                <Linkedin className="h-5 w-5 text-background" />
              </a>
            </div>
            
            <div className="bg-background/10 rounded-lg p-4">
              <h5 className="font-medium text-background mb-2">{t('freeQuote')}</h5>
              <p className="text-background/80 text-sm mb-3">
                {t('consultationText')}
              </p>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => scrollToSection('#contact')}
                className="w-full"
              >
                {t('contactUs')}
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-background/60 text-sm">
              {t('copyright')}
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                {t('privacyPolicy')}
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                {t('termsOfService')}
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                {t('cookiePolicy')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;