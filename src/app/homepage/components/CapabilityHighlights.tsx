import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Capability {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  href: string;
}

interface CapabilityHighlightsProps {
  className?: string;
}

const CapabilityHighlights = ({ className = '' }: CapabilityHighlightsProps) => {
  const capabilities: Capability[] = [
    {
      id: 'cnc-fabrication',
      title: 'CNC-Equipped Fabrication Bays',
      description: 'State-of-the-art CNC machining centers and fabrication equipment for precision manufacturing.',
      icon: 'CubeIcon',
      features: [
        '5-Axis CNC Machining',
        'Advanced Welding Systems',
        'Precision Sheet Metal Work',
        'Quality Control Testing'
      ],
      href: '/about/infrastructure-capabilities'
    },
    {
      id: 'design-testing',
      title: 'In-House Design & Testing',
      description: 'Integrated engineering design capabilities with comprehensive testing and validation facilities.',
      icon: 'BeakerIcon',
      features: [
        'Advanced CAD/CAM Systems',
        'Material Testing Lab',
        'Performance Validation',
        'Prototype Development'
      ],
      href: '/about/infrastructure-capabilities'
    },
    {
      id: 'certified-facilities',
      title: 'ASME & ISO Certified Facilities',
      description: 'Internationally certified manufacturing facilities meeting global quality and safety standards.',
      icon: 'ShieldCheckIcon',
      features: [
        'ISO 9001:2015 Certified',
        'ASME U-Stamp Facility',
        'GMP Compliant Manufacturing',
        'CE Marking Capability'
      ],
      href: '/about/certifications-qa'
    },
    {
      id: 'global-delivery',
      title: 'Global Project Delivery Network',
      description: 'Worldwide project execution and delivery capabilities with comprehensive after-sales support.',
      icon: 'GlobeAltIcon',
      features: [
        'International Shipping',
        'On-Site Installation',
        'Commissioning Support',
        'Global Service Network'
      ],
      href: '/about/global-presence'
    }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-brand-headline text-3xl lg:text-4xl text-foreground">
            State-of-the-Art Infrastructure & Manufacturing Capabilities
          </h2>
          <p className="font-value-proposition text-xl text-muted-foreground max-w-3xl mx-auto">
            World-class manufacturing facilities and engineering expertise delivering precision equipment for global industries
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={capability.id}
              className="bg-card rounded-xl p-8 precision-shadow hover:precision-shadow-lg engineering-transition border border-border group"
            >
              <div className="space-y-6">
                {/* Icon & Title */}
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 engineering-transition">
                    <Icon name={capability.icon as any} size={32} className="text-primary" />
                  </div>
                  
                  <h3 className="font-cta text-2xl text-foreground">
                    {capability.title}
                  </h3>
                  
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {capability.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  {capability.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-success/20 rounded-full flex items-center justify-center">
                        <Icon name="CheckIcon" size={12} className="text-success" />
                      </div>
                      <span className="font-body text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Link */}
                <div className="pt-4 border-t border-border">
                  <Link
                    href={capability.href}
                    className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 font-cta engineering-transition"
                  >
                    <span>Learn More</span>
                    <Icon name="ArrowRightIcon" size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-8 lg:p-12 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="font-brand-headline text-2xl lg:text-3xl text-primary-foreground">
              Ready to Transform Your Manufacturing Process?
            </h3>
            <p className="font-value-proposition text-lg text-primary-foreground/90">
              Partner with Hi-Nova International for engineering solutions that deliver measurable results and long-term reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-quote-request"
                className="bg-accent text-accent-foreground font-cta px-8 py-3 rounded-lg hover:bg-accent/90 engineering-transition precision-shadow"
              >
                Get Custom Quote
              </Link>
              <Link
                href="/engineering-services"
                className="border-2 border-primary-foreground/30 text-primary-foreground font-cta px-8 py-3 rounded-lg hover:bg-primary-foreground/10 engineering-transition"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilityHighlights;