import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      title: t('phone'),
      value: t('contactPhone'),
      description: 'Lun-Ven 8:00-18:00, Sab 8:00-13:00',
      link: 'tel:+39123456789',
    },
    {
      icon: MessageCircle,
      title: t('whatsapp'),
      value: t('contactPhone'),
      description: t('contactWhatsapp'),
      link: 'https://wa.me/39123456789',
    },
    {
      icon: Mail,
      title: t('email'),
      value: t('contactEmail'),
      description: 'Risposta entro 2 ore',
      link: 'mailto:info@edilmiccolis.it',
    },
    {
      icon: MapPin,
      title: t('address'),
      value: t('contactAddress'),
      description: 'Servizio in tutta la Lombardia',
      link: 'https://maps.google.com',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: t('formSuccess'),
      description: "Ti ricontatteremo entro 24 ore per discutere il tuo progetto.",
    });
    
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground mb-4">
            {t('contactTitle')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('contactDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <div className="bg-hero-gradient rounded-2xl p-8 text-white mb-8">
                <h3 className="text-2xl font-bold mb-4">{t('contactQuoteTitle')}</h3>
                <p className="text-white/90 mb-4">
                  {t('contactQuoteDescription')}
                </p>
                <div className="flex items-center gap-2 text-white/80">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">Sopralluogo gratuito</span>
                </div>
              </div>

              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="shadow-elegant hover:shadow-hover transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                          <a 
                            href={info.link}
                            className="text-primary hover:text-primary-hover font-medium transition-colors"
                          >
                            {info.value}
                          </a>
                          <p className="text-sm text-muted-foreground mt-1">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl font-heading">{t('contactButton')}</CardTitle>
                <CardDescription>
                  Compila il form con i dettagli del tuo progetto e ti ricontatteremo al più presto.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t('formName')} *</Label>
                      <Input 
                        id="name" 
                        required 
                        placeholder={t('formNamePlaceholder')}
                        className="transition-all duration-300 focus:shadow-elegant"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t('formPhone')} *</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        required 
                        placeholder={t('formPhonePlaceholder')}
                        className="transition-all duration-300 focus:shadow-elegant"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">{t('formEmail')} *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      required 
                      placeholder={t('formEmailPlaceholder')}
                      className="transition-all duration-300 focus:shadow-elegant"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="service">{t('formService')}</Label>
                      <select 
                        id="service" 
                        className="w-full px-3 py-2 border border-input rounded-md bg-background transition-all duration-300 focus:shadow-elegant focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      >
                        <option value="">Seleziona un servizio</option>
                        <option value="painting">{t('formServicePainting')}</option>
                        <option value="wallpaper">{t('formServiceWallpaper')}</option>
                        <option value="drywall">{t('formServiceDrywall')}</option>
                        <option value="renovation">{t('formServiceRenovation')}</option>
                        <option value="other">Altro</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">{t('formBudget')}</Label>
                      <select 
                        id="budget" 
                        className="w-full px-3 py-2 border border-input rounded-md bg-background transition-all duration-300 focus:shadow-elegant focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      >
                        <option value="">Seleziona budget</option>
                        <option value="under-5k">{t('formBudget1')}</option>
                        <option value="5k-15k">{t('formBudget2')}</option>
                        <option value="15k-30k">{t('formBudget3')}</option>
                        <option value="over-30k">{t('formBudget4')}</option>
                        <option value="discuss">Da discutere</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t('formDescription')} *</Label>
                    <Textarea 
                      id="message" 
                      required 
                      placeholder={t('formDescriptionPlaceholder')}
                      rows={4}
                      className="transition-all duration-300 focus:shadow-elegant"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="privacy" required className="rounded" />
                    <Label htmlFor="privacy" className="text-sm text-muted-foreground">
                      Accetto il trattamento dei dati personali secondo la privacy policy *
                    </Label>
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full md:w-auto"
                  >
                    {isSubmitting ? (
                      t('formSubmitting')
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        {t('formSubmit')}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;