import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import heroImage from '@/assets/hero-renovation.jpg';
import bathroomImage from '@/assets/bathroom-before-after.jpg';
import kitchenImage from '@/assets/kitchen1-after.png';
import paintingImage from '@/assets/painting-service.jpg';

const HeroSection = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const heroSlides = [
    {
      image: heroImage,
      titleKey: 'hero1Title',
      locationKey: 'hero1Location',
      subtitleKey: 'hero1Subtitle',
      features: ['hero1Feature1', 'hero1Feature2', 'hero1Feature3', 'hero1Feature4'],
      ctaKey: 'hero1Cta',
      action: 'contact'
    },
    {
      image: bathroomImage,
      titleKey: 'hero2Title',
      locationKey: 'hero2Location',
      subtitleKey: 'hero2Subtitle',
      features: ['hero2Feature1', 'hero2Feature2', 'hero2Feature3', 'hero2Feature4'],
      ctaKey: 'hero2Cta',
      action: 'contact'
    },
    {
      image: kitchenImage,
      titleKey: 'hero3Title',
      locationKey: 'hero3Location',
      subtitleKey: 'hero3Subtitle',
      features: ['hero3Feature1', 'hero3Feature2', 'hero3Feature3', 'hero3Feature4'],
      ctaKey: 'hero3Cta',
      action: 'contact'
    },
    {
      image: paintingImage,
      titleKey: 'hero4Title',
      locationKey: 'hero4Location',
      subtitleKey: 'hero4Subtitle',
      features: ['hero4Feature1', 'hero4Feature2', 'hero4Feature3', 'hero4Feature4'],
      ctaKey: 'hero4Cta',
      action: 'contact'
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-rotation effect
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const currentHero = heroSlides[currentSlide];

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images with Transition */}
      <div className="absolute inset-0 overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={`Edil Miccolis ${t(slide.titleKey)}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40 transition-colors duration-200 text-white hover:text-primary"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40 transition-colors duration-200 text-white hover:text-primary"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

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
            <span className="text-muted-foreground font-medium">{t('heroRating')}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-6 leading-tight transition-all duration-700">
            {t(currentHero.titleKey)}
            <span className="block bg-hero-gradient bg-clip-text text-transparent">
              {t(currentHero.locationKey)}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed transition-all duration-700">
            {t(currentHero.subtitleKey)}
          </p>

          {/* Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 transition-all duration-700">
            {currentHero.features.map((featureKey, index) => (
              <div key={featureKey} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-foreground font-medium">{t(featureKey)}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 transition-all duration-700">
            <Button
              variant="hero"
              size="lg"
              onClick={currentHero.action === 'contact' ? scrollToContact : scrollToPortfolio}
              className="text-lg px-8 py-6 h-auto"
            >
              {t(currentHero.ctaKey)}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToPortfolio}
              className="text-lg px-8 py-6 h-auto border-2"
            >
              {t('heroSecondaryButton')}
            </Button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex items-center gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-primary scale-125' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 shadow-hover">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">15+</div>
            <div className="text-sm text-muted-foreground">{t('heroFloatingTitle')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;