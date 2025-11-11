import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Industry {
  id: string;
  name: string;
  description: string;
  icon: string;
  href: string;
  featured: boolean;
}

interface IndustryQuickAccessProps {
  className?: string;
}

const IndustryQuickAccess = ({ className = '' }: IndustryQuickAccessProps) => {
  const industries: Industry[] = [
    {
      id: 'food-dairy-brewery',
      name: 'Food, Dairy & Brewery',
      description: 'Hygienic processing equipment for food safety compliance',
      icon: 'BeakerIcon',
      href: '/industry-solutions',
      featured: true
    },
    {
      id: 'pharma-biotech',
      name: 'Pharma & Biotech',
      description: 'GMP-compliant systems for pharmaceutical manufacturing',
      icon: 'HeartIcon',
      href: '/industry-solutions',
      featured: true
    },
    {
      id: 'petrochemical-refinery',
      name: 'Petrochemical & Refinery',
      description: 'High-pressure vessels and heat exchange solutions',
      icon: 'FireIcon',
      href: '/industry-solutions',
      featured: true
    },
    {
      id: 'chemical-fertilizer',
      name: 'Chemical & Fertilizer',
      description: 'Corrosion-resistant equipment for chemical industries',
      icon: 'CubeIcon',
      href: '/industry-solutions',
      featured: false
    },
    {
      id: 'oil-gas-marine-defence',
      name: 'Oil & Gas / Marine / Defence',
      description: 'Heavy-duty systems for offshore and defense applications',
      icon: 'ShieldCheckIcon',
      href: '/industry-solutions',
      featured: false
    },
    {
      id: 'power-steel-cement',
      name: 'Power, Steel & Cement',
      description: 'Energy-efficient solutions for heavy industry',
      icon: 'BoltIcon',
      href: '/industry-solutions',
      featured: false
    },
    {
      id: 'textile-dyes-paper',
      name: 'Textile, Dyes & Paper',
      description: 'Efficient drying and heat recovery systems',
      icon: 'SwatchIcon',
      href: '/industry-solutions',
      featured: false
    },
    {
      id: 'edible-oil-carbon-black',
      name: 'Edible Oil & Carbon Black',
      description: 'Specialized processing for oil refining and carbon production',
      icon: 'BeakerIcon',
      href: '/industry-solutions',
      featured: false
    },
    {
      id: 'water-etp-stp-ro',
      name: 'Water / ETP / STP / RO',
      description: 'Advanced water treatment and purification systems',
      icon: 'DropletIcon',
      href: '/industry-solutions',
      featured: false
    },
    {
      id: 'agriculture-infrastructure',
      name: 'Agriculture & Infrastructure',
      description: 'Agricultural processing and infrastructure development',
      icon: 'LeafIcon',
      href: '/industry-solutions',
      featured: false
    }
  ];

  const featuredIndustries = industries.filter(industry => industry.featured);
  const otherIndustries = industries.filter(industry => !industry.featured);

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-brand-headline text-3xl lg:text-4xl text-foreground">
            Industry Solutions
          </h2>
          <p className="font-value-proposition text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized engineering solutions tailored to your industry's unique challenges and regulatory requirements
          </p>
        </div>

        {/* Featured Industries */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {featuredIndustries.map((industry) => (
            <Link
              key={industry.id}
              href={industry.href}
              className="group bg-card rounded-xl p-6 precision-shadow hover:precision-shadow-lg engineering-transition border border-border hover:border-primary/20"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 engineering-transition">
                    <Icon name={industry.icon as any} size={24} className="text-primary" />
                  </div>
                  <Icon name="ArrowRightIcon" size={20} className="text-muted-foreground group-hover:text-primary engineering-transition" />
                </div>
                
                <div>
                  <h3 className="font-cta text-lg text-foreground group-hover:text-primary engineering-transition">
                    {industry.name}
                  </h3>
                  <p className="font-body text-muted-foreground mt-2">
                    {industry.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Other Industries Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {otherIndustries.map((industry) => (
            <Link
              key={industry.id}
              href={industry.href}
              className="group bg-card rounded-xl p-6 precision-shadow hover:precision-shadow-lg engineering-transition border border-border hover:border-primary/20"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 engineering-transition">
                    <Icon name={industry.icon as any} size={24} className="text-primary" />
                  </div>
                  <Icon name="ArrowRightIcon" size={20} className="text-muted-foreground group-hover:text-primary engineering-transition" />
                </div>

                <div>
                  <h3 className="font-cta text-lg text-foreground group-hover:text-primary engineering-transition">
                    {industry.name}
                  </h3>
                  <p className="font-body text-muted-foreground mt-2">
                    {industry.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link
            href="/industry-solutions"
            className="inline-flex items-center space-x-2 bg-primary text-primary-foreground font-cta px-8 py-3 rounded-lg hover:bg-primary/90 engineering-transition precision-shadow"
          >
            <span>View All Industries</span>
            <Icon name="ArrowRightIcon" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustryQuickAccess;