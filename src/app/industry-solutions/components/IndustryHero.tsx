import AppImage from '@/components/ui/AppImage';

interface IndustryHeroProps {
  className?: string;
}

const IndustryHero = ({ className = '' }: IndustryHeroProps) => {
  return (
    <section className={`relative bg-primary text-primary-foreground py-20 lg:py-32 ${className}`}>
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-brand-headline text-4xl lg:text-6xl leading-tight">
                Industry-Specific
                <span className="block text-accent">Engineering Solutions</span>
              </h1>
              <p className="font-value-proposition text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed">
                Tailored equipment and expertise for every industrial sector, backed by decades of specialized engineering experience.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="font-technical text-2xl font-bold">10+</div>
                <div className="font-body text-sm text-primary-foreground/80">Industries Served</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="font-technical text-2xl font-bold">500+</div>
                <div className="font-body text-sm text-primary-foreground/80">Projects Delivered</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="font-technical text-2xl font-bold">25+</div>
                <div className="font-body text-sm text-primary-foreground/80">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden precision-shadow-lg">
              <AppImage
                src="https://images.unsplash.com/photo-1698580868042-8a1bfab0c4c0"
                alt="Modern industrial manufacturing facility with advanced process equipment and control systems"
                className="w-full h-full object-cover" />

            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground rounded-xl px-6 py-4 precision-shadow-lg">
              <div className="font-technical text-lg font-bold">ISO 9001:2015</div>
              <div className="font-body text-sm">Certified Quality</div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default IndustryHero;