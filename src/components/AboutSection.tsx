import { useLanguage } from '@/contexts/LanguageContext';
import { Separator } from '@/components/ui/separator';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              {/* Title */}
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
                  {t('aboutTitle')}
                </h2>
                <Separator className="w-24 h-1 bg-accent" />
              </div>

              {/* Tagline */}
              <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                {t('aboutTagline')}
              </p>

              {/* Body Paragraphs */}
              <div className="space-y-6 text-foreground/90 leading-relaxed">
                <p className="text-lg">
                  {t('aboutParagraph1')}
                </p>
                <p className="text-lg">
                  {t('aboutParagraph2')}
                </p>
                <p className="text-lg">
                  {t('aboutParagraph3')}
                </p>
                <p className="text-lg">
                  {t('aboutParagraph4')}
                </p>
              </div>

              {/* Closing Statement */}
              <div className="relative pl-6 border-l-4 border-accent">
                <p className="text-xl italic text-foreground/80 leading-relaxed">
                  {t('aboutClosing')}
                </p>
              </div>
            </div>

            {/* Right Column - Decorative Element */}
            <div className="relative">
              <div className="aspect-square relative">
                {/* Decorative frame */}
                <div className="absolute inset-0 border-2 border-accent/20 rounded-lg transform rotate-3" />
                <div className="absolute inset-0 border-2 border-primary/20 rounded-lg transform -rotate-3" />
                
                {/* Center content */}
                <div className="absolute inset-8 bg-gradient-subtle rounded-lg flex flex-col items-center justify-center p-8 text-center space-y-6">
                  <div className="space-y-2">
                    <div className="text-6xl font-bold text-primary font-heading">15+</div>
                    <div className="text-lg text-muted-foreground uppercase tracking-wider">
                      {t('heroFloatingTitle')}
                    </div>
                  </div>
                  
                  <Separator className="w-16 h-0.5 bg-accent" />
                  
                  <div className="space-y-4 w-full">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Progetti</span>
                      <span className="text-2xl font-bold text-foreground">500+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Clienti</span>
                      <span className="text-2xl font-bold text-foreground">450+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Soddisfazione</span>
                      <span className="text-2xl font-bold text-foreground">98%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
