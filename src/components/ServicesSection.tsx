import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Paintbrush, Wallpaper, Hammer, Home, ArrowRight } from 'lucide-react';
import paintingService from '@/assets/painting-service.jpg';
import drywallCeiling from '@/assets/drywall-ceiling.jpg';

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Paintbrush,
      title: t('paintingTitle'),
      description: t('paintingDescription'),
      image: paintingService,
      features: [t('paintingFeature1'), t('paintingFeature2'), t('paintingFeature3')],
    },
    {
      icon: Wallpaper,
      title: t('wallpaperTitle'),
      description: t('wallpaperDescription'),
      image: '/api/placeholder/400/300',
      features: [t('wallpaperFeature1'), t('wallpaperFeature2'), t('wallpaperFeature3')],
    },
    {
      icon: Hammer,
      title: t('drywallTitle'),
      description: t('drywallDescription'),
      image: drywallCeiling,
      features: [t('drywallFeature1'), t('drywallFeature2'), t('drywallFeature3')],
    },
    {
      icon: Home,
      title: t('renovationTitle'),
      description: t('renovationDescription'),
      image: '/api/placeholder/400/300',
      features: [t('renovationFeature1'), t('renovationFeature2'), t('renovationFeature3')],
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground mb-4">
            {t('servicesTitle')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('servicesDescription')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="overflow-hidden shadow-elegant hover:shadow-hover transition-all duration-300 group">
                <div className="relative h-64">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary rounded-lg shadow-elegant">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full group/btn"
                    onClick={scrollToContact}
                  >
                    {t('requestQuoteButton')}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-card-gradient rounded-2xl p-8 shadow-elegant">
            <h3 className="text-2xl font-bold font-heading text-foreground mb-4">
              {t('servicesCta')}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {t('servicesCtaDescription')}
            </p>
            <Button variant="cta" size="lg" onClick={scrollToContact}>
              {t('servicesCtaButton')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;