import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useLanguage } from '@/contexts/LanguageContext';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      id: 1,
      name: 'Maria Rossi',
      role: t('testimonial1Role'),
      content: t('testimonial1'),
      rating: 5,
      image: '/api/placeholder/80/80',
      project: t('testimonial1Project'),
      location: t('testimonial1Location'),
    },
    {
      id: 2,
      name: 'Luca Derosa',
      role: t('testimonial2Role'),
      content: t('testimonial2'),
      rating: 5,
      image: '/api/placeholder/80/80',
      project: t('testimonial2Project'),
      location: t('testimonial2Location'),
    },
    {
      id: 3,
      name: 'Anna Bianchi',
      role: t('testimonial3Role'),
      content: t('testimonial3'),
      rating: 5,
      image: '/api/placeholder/80/80',
      project: t('testimonial3Project'),
      location: t('testimonial3Location'),
    },
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground mb-4">
            {t('testimonialsTitle')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('testimonialsDescription')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative overflow-hidden shadow-elegant hover:shadow-hover transition-all duration-300 group">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="h-12 w-12 text-primary" />
              </div>

              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-foreground leading-relaxed mb-6 relative">
                  "{testimonial.content}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 shadow-elegant">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-1 h-1 bg-secondary rounded-full" />
                      <span className="text-xs text-muted-foreground">{testimonial.project}</span>
                      <div className="w-1 h-1 bg-secondary rounded-full" />
                      <span className="text-xs text-muted-foreground">{testimonial.location}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-card-gradient rounded-2xl p-8 shadow-elegant">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">{t('statsProjects')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">{t('statsExperience')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">{t('statsSatisfaction')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24{t('statsResponseUnit')}</div>
              <div className="text-sm text-muted-foreground">{t('statsResponse')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;