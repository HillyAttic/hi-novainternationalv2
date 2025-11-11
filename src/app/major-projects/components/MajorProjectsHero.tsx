import AppImage from '@/components/ui/AppImage';

const MajorProjectsHero = () => {
  return (
    <section className="relative bg-background py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-primary text-primary-foreground font-technical text-sm px-4 py-2 rounded-full">
                Portfolio Excellence
              </span>
            </div>
            
            <h1 className="font-brand-headline text-4xl lg:text-5xl xl:text-6xl text-foreground leading-tight">
              Hi-Nova International
              <span className="block text-primary mt-2">Major Projects</span>
            </h1>
            
            <p className="font-value-proposition text-xl text-muted-foreground leading-relaxed max-w-2xl">
              A comprehensive showcase of our successfully delivered projects across diverse industries, 
              demonstrating our commitment to engineering excellence and client satisfaction.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="font-brand-headline text-3xl text-primary">24+</div>
                <div className="font-technical text-sm text-muted-foreground mt-1">Clients</div>
              </div>
              <div className="text-center">
                <div className="font-brand-headline text-3xl text-primary">40+</div>
                <div className="font-technical text-sm text-muted-foreground mt-1">Projects</div>
              </div>
              <div className="text-center">
                <div className="font-brand-headline text-3xl text-primary">100%</div>
                <div className="font-technical text-sm text-muted-foreground mt-1">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden precision-shadow-lg">
              <AppImage
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12"
                alt="Industrial manufacturing facility showcasing Hi-Nova's major project capabilities with large-scale equipment and precision engineering"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-background/80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MajorProjectsHero;
