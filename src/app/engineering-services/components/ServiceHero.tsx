import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface ServiceHeroProps {
  className?: string;
}

const ServiceHero = ({ className = '' }: ServiceHeroProps) => {
  return (
    <section className={`relative bg-primary text-primary-foreground overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Icon name="CogIcon" size={24} className="text-accent" />
                <span className="font-technical text-accent uppercase tracking-wide">Engineering Excellence</span>
              </div>
              <h1 className="font-brand-headline text-4xl lg:text-5xl xl:text-6xl leading-tight">
                Complete Engineering
                <span className="block text-accent">Solutions</span>
              </h1>
              <p className="font-value-proposition text-xl text-primary-foreground/90 max-w-lg">
                From concept to commissioning, Hi-Nova delivers comprehensive engineering services that transform industrial challenges into operational excellence.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="font-brand-headline text-3xl text-accent">500+</div>
                <div className="font-body text-sm text-primary-foreground/80">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="font-brand-headline text-3xl text-accent">25+</div>
                <div className="font-body text-sm text-primary-foreground/80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="font-brand-headline text-3xl text-accent">15+</div>
                <div className="font-body text-sm text-primary-foreground/80">Industries Served</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden precision-shadow-lg">
              <AppImage
                src="https://images.unsplash.com/photo-1734096548976-438b28e36c88"
                alt="Industrial engineers in hard hats reviewing technical blueprints at modern manufacturing facility with steel structures in background"
                className="w-full h-full object-cover" />

            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-4 rounded-lg precision-shadow-lg">
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircleIcon" size={20} />
                <span className="font-cta text-sm">ISO 9001:2015 Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default ServiceHero;