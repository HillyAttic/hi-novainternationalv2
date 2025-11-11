import Icon from '@/components/ui/AppIcon';

interface ResourceHeroProps {
  className?: string;
}

const ResourceHero = ({ className = '' }: ResourceHeroProps) => {
  return (
    <section className={`bg-primary text-primary-foreground py-16 lg:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
              <Icon name="AcademicCapIcon" size={32} className="text-accent-foreground" />
            </div>
          </div>
          
          <h1 className="font-brand-headline text-4xl lg:text-5xl xl:text-6xl mb-6">
            Resource Center
          </h1>
          
          <p className="font-value-proposition text-xl lg:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Your comprehensive knowledge hub for engineering insights, technical guides, and industry intelligence to drive manufacturing excellence
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2 text-primary-foreground/80">
              <Icon name="BookOpenIcon" size={20} />
              <span className="font-body">500+ Technical Resources</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-primary-foreground/30"></div>
            <div className="flex items-center space-x-2 text-primary-foreground/80">
              <Icon name="PlayIcon" size={20} />
              <span className="font-body">50+ Expert Webinars</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-primary-foreground/30"></div>
            <div className="flex items-center space-x-2 text-primary-foreground/80">
              <Icon name="DocumentTextIcon" size={20} />
              <span className="font-body">Industry Compliance Guides</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceHero;