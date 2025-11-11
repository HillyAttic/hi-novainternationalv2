import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface SpecializedExpertiseBannerProps {
  className?: string;
}

const SpecializedExpertiseBanner = ({ className = '' }: SpecializedExpertiseBannerProps) => {
  const dryerTypes = [
    'Paddle Dryers',
    'Rotary Dryers',
    'Band Dryers',
    'Fluidized Bed Dryers',
    'Spin Flash Dryers',
    'Spray Dryers',
    'Vacuum Dryers',
    'Roto Cone Vacuum Dryers',
    'Calciners & Kilns',
    'Calandrias',
    'Static Ovens',
    'Decanters & Centrifuges',
    'Hot Air Fluidized Dryers',
    'Thermal Sludge Dryers'
  ];

  return (
    <section className={`py-16 lg:py-20 bg-secondary ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full">
                <Icon name="LightBulbIcon" size={16} className="text-accent" />
                <span className="font-technical text-sm">Specialized Expertise</span>
              </div>

              <h2 className="font-brand-headline text-3xl lg:text-4xl text-foreground leading-tight">
                Leading Manufacturer of
                <span className="block text-primary">Industrial Dryers & Thermal Systems</span>
              </h2>

              <p className="font-value-proposition text-lg text-muted-foreground leading-relaxed">
                Hi-Nova International is a trusted manufacturer of advanced drying and thermal processing systems — from Rotary and Paddle Dryers to Spray and Fluidized Bed Dryers.
              </p>
            </div>

            {/* Dryer Types */}
            <div className="space-y-4">
              <h3 className="font-cta text-xl text-foreground">Core Dryer Technologies:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {dryerTypes.map((dryer, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="CheckIcon" size={16} className="text-primary flex-shrink-0" />
                    <span className="font-body text-muted-foreground">{dryer}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact-quote-request"
                className="bg-primary text-primary-foreground font-cta px-6 py-3 rounded-lg hover:bg-primary/90 engineering-transition precision-shadow text-center">
                Request Quote for Drying Systems
              </Link>
              <Link
                href="/product-detail"
                className="border-2 border-primary text-primary font-cta px-6 py-3 rounded-lg hover:bg-primary/10 engineering-transition text-center">
                Download Brochure
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden precision-shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122"
                alt="Industrial rotary dryer system in manufacturing facility with stainless steel construction and control panels"
                className="w-full h-96 lg:h-[400px] object-cover" />

              <div className="absolute inset-0 bg-primary/60"></div>

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 precision-shadow">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Icon name="BoltIcon" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-cta text-foreground">Thermal Excellence</div>
                    <div className="font-body text-sm text-muted-foreground">Energy Efficient Systems</div>
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

export default SpecializedExpertiseBanner;