import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink } from 'lucide-react';
import ProjectDetailModal from '@/components/ProjectDetailModal';
import bathroomBeforeAfter from '@/assets/bathroom-before-after.jpg';

const PortfolioSection = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      titleKey: 'project1Title',
      category: 'bathroom',
      descriptionKey: 'project1Description',
      image: bathroomBeforeAfter,
      beforeAfter: true,
      beforeImage: '/api/placeholder/600/400?text=Bagno+Prima',
      afterImage: bathroomBeforeAfter,
      additionalImages: ['/api/placeholder/600/400?text=Dettaglio+1', '/api/placeholder/600/400?text=Dettaglio+2'],
      durationKey: 'duration2Weeks',
      clientKey: 'clientPrivateFamily',
      tagKeys: ['tagBathroom', 'tagCeramic', 'tagLED'],
      completionDateKey: 'completionMarch2024',
      projectSizeKey: 'projectSize8sqm',
      fullDescriptionKey: 'project1FullDescription',
      challengeKeys: [
        'challenge1_1',
        'challenge1_2',
        'challenge1_3'
      ],
      solutionKeys: [
        'solution1_1',
        'solution1_2',
        'solution1_3'
      ]
    },
    {
      id: 2,
      titleKey: 'project2Title',
      category: 'kitchen',
      descriptionKey: 'project2Description',
      image: '/api/placeholder/600/400',
      beforeAfter: true,
      beforeImage: '/api/placeholder/600/400?text=Cucina+Prima',
      afterImage: '/api/placeholder/600/400?text=Cucina+Dopo',
      additionalImages: ['/api/placeholder/600/400?text=Isola', '/api/placeholder/600/400?text=Dettagli'],
      durationKey: 'duration3Weeks',
      clientKey: 'clientPrivateFamily2',
      tagKeys: ['tagKitchen', 'tagOpenSpace', 'tagIsland'],
      completionDateKey: 'completionFebruary2024',
      projectSizeKey: 'projectSize25sqm',
      fullDescriptionKey: 'project2FullDescription',
      challengeKeys: [
        'challenge2_1',
        'challenge2_2',
        'challenge2_3'
      ],
      solutionKeys: [
        'solution2_1',
        'solution2_2',
        'solution2_3'
      ]
    },
    {
      id: 3,
      titleKey: 'project3Title',
      category: 'living',
      descriptionKey: 'project3Description',
      image: '/api/placeholder/600/400',
      beforeAfter: false,
      additionalImages: ['/api/placeholder/600/400?text=Vista+1', '/api/placeholder/600/400?text=Vista+2'],
      durationKey: 'duration10Days',
      clientKey: 'clientLawFirm',
      tagKeys: ['tagLivingRoom', 'tagFalseCeiling', 'tagDesign'],
      completionDateKey: 'completionJanuary2024',
      projectSizeKey: 'projectSize30sqm',
      fullDescriptionKey: 'project3FullDescription',
      challengeKeys: [
        'challenge3_1',
        'challenge3_2',
        'challenge3_3'
      ],
      solutionKeys: [
        'solution3_1',
        'solution3_2',
        'solution3_3'
      ]
    },
    {
      id: 4,
      titleKey: 'project4Title',
      category: 'exterior',
      descriptionKey: 'project4Description',
      image: '/api/placeholder/600/400',
      beforeAfter: true,
      beforeImage: '/api/placeholder/600/400?text=Facciata+Prima',
      afterImage: '/api/placeholder/600/400?text=Facciata+Dopo',
      durationKey: 'duration1Week',
      clientKey: 'clientCondominium',
      tagKeys: ['tagExterior', 'tagPainting', 'tagFacade'],
      completionDateKey: 'completionApril2024',
      projectSizeKey: 'projectSize200sqm',
      fullDescriptionKey: 'project4FullDescription',
      challengeKeys: [
        'challenge4_1',
        'challenge4_2',
        'challenge4_3'
      ],
      solutionKeys: [
        'solution4_1',
        'solution4_2',
        'solution4_3'
      ]
    },
    {
      id: 5,
      titleKey: 'project5Title',
      category: 'bathroom',
      descriptionKey: 'project5Description',
      image: '/api/placeholder/600/400',
      beforeAfter: true,
      beforeImage: '/api/placeholder/600/400?text=Bagno+Lusso+Prima',
      afterImage: '/api/placeholder/600/400?text=Bagno+Lusso+Dopo',
      additionalImages: ['/api/placeholder/600/400?text=Vasca', '/api/placeholder/600/400?text=Doccia'],
      durationKey: 'duration4Weeks',
      clientKey: 'clientPrivateVilla',
      tagKeys: ['tagLuxury', 'tagBathtub', 'tagPremium'],
      completionDateKey: 'completionMay2024',
      projectSizeKey: 'projectSize15sqm',
      fullDescriptionKey: 'project5FullDescription',
      challengeKeys: [
        'challenge5_1',
        'challenge5_2',
        'challenge5_3'
      ],
      solutionKeys: [
        'solution5_1',
        'solution5_2',
        'solution5_3'
      ]
    },
    {
      id: 6,
      titleKey: 'project6Title',
      category: 'kitchen',
      descriptionKey: 'project6Description',
      image: '/api/placeholder/600/400',
      beforeAfter: true,
      beforeImage: '/api/placeholder/600/400?text=Cucina+Classica+Prima',
      afterImage: '/api/placeholder/600/400?text=Cucina+Classica+Dopo',
      durationKey: 'duration3Weeks',
      clientKey: 'clientCountryHouse',
      tagKeys: ['tagClassic', 'tagWood', 'tagMarble'],
      completionDateKey: 'completionJune2024',
      projectSizeKey: 'projectSize20sqm',
      fullDescriptionKey: 'project6FullDescription',
      challengeKeys: [
        'challenge6_1',
        'challenge6_2',
        'challenge6_3'
      ],
      solutionKeys: [
        'solution6_1',
        'solution6_2',
        'solution6_3'
      ]
    },
  ];

  // Transform projects with translated content
  const getTranslatedProjects = () => {
    return projects.map(project => ({
      ...project,
      title: t(project.titleKey),
      description: t(project.descriptionKey),
      duration: t(project.durationKey),
      client: t(project.clientKey),
      tags: project.tagKeys.map(tagKey => t(tagKey)),
      completionDate: t(project.completionDateKey),
      projectSize: t(project.projectSizeKey),
      fullDescription: t(project.fullDescriptionKey),
      challenges: project.challengeKeys?.map(challengeKey => t(challengeKey)) || [],
      solutions: project.solutionKeys?.map(solutionKey => t(solutionKey)) || []
    }));
  };

  const translatedProjects = getTranslatedProjects();

  const filteredProjects = activeCategory === 'all' 
    ? translatedProjects 
    : translatedProjects.filter(project => project.category === activeCategory);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

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
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="bg-background/90 backdrop-blur-sm"
                    onClick={() => handleViewDetails(project)}
                  >
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

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProject(null);
        }}
      />
    </section>
  );
};

export default PortfolioSection;