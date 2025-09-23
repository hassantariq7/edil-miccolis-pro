import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import bathroomBeforeAfter from '@/assets/bathroom-before-after.jpg';

const PortfolioSection = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: t('portfolioAll') },
    { id: 'bathroom', name: t('portfolioBathroom') },
    { id: 'kitchen', name: t('portfolioKitchen') },
    { id: 'living', name: t('portfolioLiving') },
    { id: 'exterior', name: t('portfolioExterior') },
  ];

  const projects = [
    {
      id: 1,
      title: 'Ristrutturazione Bagno Moderno',
      category: 'bathroom',
      description: 'Trasformazione completa con rivestimenti in ceramica, sanitari sospesi e illuminazione LED.',
      image: bathroomBeforeAfter,
      beforeAfter: true,
      duration: '2 settimane',
      client: 'Famiglia Rossi',
      tags: ['Bagno', 'Ceramica', 'LED'],
    },
    {
      id: 2,
      title: 'Cucina Open Space',
      category: 'kitchen',
      description: 'Creazione di uno spazio aperto cucina-soggiorno con isola centrale e finiture moderne.',
      image: '/api/placeholder/600/400',
      duration: '3 settimane',
      client: 'Famiglia Bianchi',
      tags: ['Cucina', 'Open Space', 'Isola'],
    },
    {
      id: 3,
      title: 'Soggiorno Elegante',
      category: 'living',
      description: 'Ristrutturazione completa con controsoffitto illuminato e carta da parati di design.',
      image: '/api/placeholder/600/400',
      duration: '10 giorni',
      client: 'Studio Legale',
      tags: ['Soggiorno', 'Controsoffitto', 'Design'],
    },
    {
      id: 4,
      title: 'Facciata Esterna',
      category: 'exterior',
      description: 'Ripristino e pittura facciata esterna con materiali resistenti alle intemperie.',
      image: '/api/placeholder/600/400',
      duration: '1 settimana',
      client: 'Condominio Centro',
      tags: ['Esterno', 'Pittura', 'Facciata'],
    },
    {
      id: 5,
      title: 'Bagno di Lusso',
      category: 'bathroom',
      description: 'Bagno principale con vasca freestanding, doccia walk-in e finiture premium.',
      image: '/api/placeholder/600/400',
      duration: '4 settimane',
      client: 'Villa Privata',
      tags: ['Lusso', 'Vasca', 'Premium'],
    },
    {
      id: 6,
      title: 'Cucina Classica',
      category: 'kitchen',
      description: 'Ristrutturazione cucina in stile classico con legno massello e marmo.',
      image: '/api/placeholder/600/400',
      duration: '3 settimane',
      client: 'Casa di Campagna',
      tags: ['Classico', 'Legno', 'Marmo'],
    },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground mb-4">
            {t('portfolioTitle')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('portfolioDescription')}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category.id)}
              className="transition-all duration-300"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden shadow-elegant hover:shadow-hover transition-all duration-300 group cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {project.beforeAfter && (
                  <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                    {t('portfolioBeforeAfter')}
                  </Badge>
                )}
                
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="outline" size="sm" className="bg-background/90 backdrop-blur-sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {t('portfolioViewDetails')}
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold font-heading text-foreground mb-2">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    {project.duration}
                  </span>
                  <span>{t('portfolioClient')}: {project.client}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-hero-gradient rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              {t('portfolioCtaTitle')}
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              {t('portfolioCtaDescription')}
            </p>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 border-white"
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {t('portfolioCtaButton')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;