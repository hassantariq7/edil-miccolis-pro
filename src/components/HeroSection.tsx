import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Star } from 'lucide-react';
import heroImage from '@/assets/hero-renovation.jpg';

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Edil Miccolis renovation project"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          {/* Rating */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-muted-foreground font-medium">Oltre 100 clienti soddisfatti</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-6 leading-tight">
            {t('heroTitle')}
            <span className="block bg-hero-gradient bg-clip-text text-transparent">
              in Italia
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
            {t('heroSubtitle')}
          </p>

          {/* Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span className="text-foreground font-medium">Preventivi gratuiti</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span className="text-foreground font-medium">Materiali di qualità</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span className="text-foreground font-medium">Consegna puntuale</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span className="text-foreground font-medium">15+ anni esperienza</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="hero"
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-8 py-6 h-auto"
            >
              {t('heroButton')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const element = document.querySelector('#portfolio');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-lg px-8 py-6 h-auto border-2"
            >
              Guarda i nostri lavori
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 shadow-hover">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">15+</div>
            <div className="text-sm text-muted-foreground">Anni di esperienza</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;