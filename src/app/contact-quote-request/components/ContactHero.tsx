import Icon from '@/components/ui/AppIcon';

interface ContactHeroProps {
  className?: string;
}

const ContactHero = ({ className = '' }: ContactHeroProps) => {
  return (
    <section className={`bg-primary text-primary-foreground py-16 lg:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Icon name="ChatBubbleLeftRightIcon" size={24} className="text-accent" />
              <span className="font-technical text-accent text-sm uppercase tracking-wider">
                Get In Touch
              </span>
            </div>
            
            <h1 className="font-brand-headline text-4xl lg:text-5xl xl:text-6xl mb-6">
              Let's Discuss Your
              <span className="text-accent block">Manufacturing Needs</span>
            </h1>
            
            <p className="font-body text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Connect with our engineering experts for personalized solutions, detailed quotes, and technical consultations. We're here to transform your industrial challenges into engineered excellence.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Icon name="ClockIcon" size={20} className="text-accent" />
                </div>
                <div>
                  <div className="font-cta text-sm text-primary-foreground">Response Time</div>
                  <div className="font-body text-primary-foreground/80">Within 24 Hours</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Icon name="UserGroupIcon" size={20} className="text-accent" />
                </div>
                <div>
                  <div className="font-cta text-sm text-primary-foreground">Expert Team</div>
                  <div className="font-body text-primary-foreground/80">25+ Years Experience</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 precision-shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="font-brand-headline text-3xl text-accent mb-2">500+</div>
                  <div className="font-body text-sm text-primary-foreground/80">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="font-brand-headline text-3xl text-accent mb-2">50+</div>
                  <div className="font-body text-sm text-primary-foreground/80">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="font-brand-headline text-3xl text-accent mb-2">98%</div>
                  <div className="font-body text-sm text-primary-foreground/80">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="font-brand-headline text-3xl text-accent mb-2">24/7</div>
                  <div className="font-body text-sm text-primary-foreground/80">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;