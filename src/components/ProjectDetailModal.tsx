import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, Clock, User } from 'lucide-react';
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";

interface ProjectDetailModalProps {
  project: {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    beforeAfter?: boolean;
    beforeImage?: string;
    afterImage?: string;
    additionalImages?: string[];
    duration: string;
    client: string;
    tags: string[];
    fullDescription?: string;
    completionDate?: string;
    projectSize?: string;
    challenges?: string[];
    solutions?: string[];
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailModal = ({ project, isOpen, onClose }: ProjectDetailModalProps) => {
  const { t } = useLanguage();

  if (!project) return null;

  // Build images for carousel (excluding before/after — handled separately now)
  const getProjectImages = () => {
    const images: { src: string; label: string; type: string }[] = [];

    if (!project.beforeAfter) {
      images.push({ src: project.image, label: project.title, type: 'main' });
    }

    if (project.additionalImages) {
      project.additionalImages.forEach((img, index) => {
        images.push({ src: img, label: `${t('projectDetailView')} ${index + 1}`, type: 'additional' });
      });
    }

    return images;
  };

  const images = getProjectImages();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground pr-8">
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="space-y-4">
            {project.beforeAfter && project.beforeImage && project.afterImage ? (
              <div className="w-full h-80">
                <BeforeAfterSlider
                  beforeImage={project.beforeImage}
                  afterImage={project.afterImage}
                  className="h-full"
                />
                <p className="text-sm text-muted-foreground text-center mt-2">
                  {t('projectDetailSwipeInstruction')}
                </p>
              </div>
            ) : (
              <Carousel className="w-full">
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative">
                        <img
                          src={image.src}
                          alt={image.label}
                          className="w-full h-80 object-cover rounded-lg"
                        />
                        <div className="absolute bottom-4 left-4 right-4">
                          <Badge
                            variant={image.type === 'main' ? 'default' : 'secondary'}
                            className="bg-background/90 backdrop-blur-sm text-foreground"
                          >
                            {image.label}
                          </Badge>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {images.length > 1 && (
                  <>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </>
                )}
              </Carousel>
            )}
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <Badge key={index} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Description */}
            <div>
              <h3 className="font-semibold text-foreground mb-2">{t('projectDetailDescription')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.fullDescription || project.description}
              </p>
            </div>

            {/* Project Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">{t('projectDetailDuration')}</p>
                  <p className="text-sm text-muted-foreground">{project.duration}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <User className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">{t('projectDetailClient')}</p>
                  <p className="text-sm text-muted-foreground">{project.client}</p>
                </div>
              </div>

              {project.completionDate && (
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{t('projectDetailCompleted')}</p>
                    <p className="text-sm text-muted-foreground">{project.completionDate}</p>
                  </div>
                </div>
              )}

              {project.projectSize && (
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 bg-primary rounded-full flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{t('projectDetailSize')}</p>
                    <p className="text-sm text-muted-foreground">{project.projectSize}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Challenges & Solutions */}
            {project.challenges && project.challenges.length > 0 && (
              <div>
                <h3 className="font-semibold text-foreground mb-2">{t('projectDetailChallenges')}</h3>
                <ul className="space-y-1">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1.5 block w-1 h-1 bg-current rounded-full flex-shrink-0" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.solutions && project.solutions.length > 0 && (
              <div>
                <h3 className="font-semibold text-foreground mb-2">{t('projectDetailSolutions')}</h3>
                <ul className="space-y-1">
                  {project.solutions.map((solution, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1.5 block w-1 h-1 bg-current rounded-full flex-shrink-0" />
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA Button */}
            <div className="pt-4 border-t border-border">
              <Button
                className="w-full"
                onClick={() => {
                  onClose();
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {t('projectDetailContactCta')}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailModal;
