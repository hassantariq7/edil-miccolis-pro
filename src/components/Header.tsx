import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, Phone, Globe } from 'lucide-react';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: t('home'), href: '#home' },
    { name: t('services'), href: '#services' },
    { name: t('portfolio'), href: '#portfolio' },
    { name: t('about'), href: '#about' },
    { name: t('testimonials'), href: '#testimonials' },
    { name: t('contact'), href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 shadow-elegant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold font-heading bg-hero-gradient bg-clip-text text-transparent">
              Edil Miccolis
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Language Toggle & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'it' ? 'en' : 'it')}
              className="flex items-center gap-2"
            >
              <Globe className="h-4 w-4" />
              {language.toUpperCase()}
            </Button>
            
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection('#contact')}
              className="flex items-center gap-2"
            >
              <Phone className="h-4 w-4" />
              {t('contactButton')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-accent transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background">
            <nav className="px-2 pt-2 pb-4 space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-foreground hover:bg-accent rounded-md transition-colors"
                >
                  {item.name}
                </button>
              ))}
              
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setLanguage(language === 'it' ? 'en' : 'it')}
                  className="flex items-center gap-2 justify-start"
                >
                  <Globe className="h-4 w-4" />
                  {language.toUpperCase()}
                </Button>
                
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() => scrollToSection('#contact')}
                  className="flex items-center gap-2 justify-center"
                >
                  <Phone className="h-4 w-4" />
                  {t('contactButton')}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;