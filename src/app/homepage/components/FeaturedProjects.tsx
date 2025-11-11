import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Project {
  id: string;
  title: string;
  industry: string;
  description: string;
  image: string;
  alt: string;
  metrics: {
    label: string;
    value: string;
  }[];
  tags: string[];
}

interface FeaturedProjectsProps {
  className?: string;
}

const FeaturedProjects = ({ className = '' }: FeaturedProjectsProps) => {
  const featuredProjects: Project[] = [
  {
    id: 'dairy-processing-plant',
    title: 'Advanced Dairy Processing Plant',
    industry: 'Food & Dairy',
    description: 'Complete turnkey solution for 50,000 LPD milk processing facility with automated CIP systems and energy recovery heat exchangers.',
    image: "https://images.unsplash.com/photo-1513828418004-7aa1c7e5c824",
    alt: 'Modern stainless steel dairy processing equipment with large cylindrical tanks and piping systems in clean industrial facility',
    metrics: [
    { label: 'Capacity', value: '50,000 LPD' },
    { label: 'Energy Savings', value: '35%' },
    { label: 'Delivery', value: 'On Time' }],

    tags: ['Turnkey', 'Energy Efficient', 'Automated']
  },
  {
    id: 'pharma-cleanroom',
    title: 'Pharmaceutical Cleanroom Suite',
    industry: 'Pharma & Biotech',
    description: 'ISO Class 7 cleanroom with integrated HVAC, sterile processing equipment, and real-time monitoring systems for API manufacturing.',
    image: "https://images.unsplash.com/photo-1669216369094-1d7670ec950a",
    alt: 'Sterile pharmaceutical cleanroom with white walls, stainless steel equipment, and technicians in protective suits working with precision machinery',
    metrics: [
    { label: 'Classification', value: 'ISO Class 7' },
    { label: 'Compliance', value: 'FDA/EU GMP' },
    { label: 'Validation', value: '100%' }],

    tags: ['GMP Compliant', 'Sterile', 'Validated']
  },
  {
    id: 'petrochemical-heat-exchanger',
    title: 'High-Pressure Heat Exchanger',
    industry: 'Petrochemical',
    description: 'Custom-designed shell and tube heat exchanger for crude oil refining with advanced corrosion resistance and thermal efficiency.',
    image: "https://images.unsplash.com/photo-1710322419301-60150805bc32",
    alt: 'Large industrial heat exchanger with multiple steel tubes and flanged connections in petrochemical processing facility',
    metrics: [
    { label: 'Pressure Rating', value: '150 Bar' },
    { label: 'Efficiency', value: '98.5%' },
    { label: 'Material', value: 'SS 316L' }],

    tags: ['High Pressure', 'Corrosion Resistant', 'Custom Design']
  }];


  return (
    <section className={`py-16 lg:py-24 bg-muted/30 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-brand-headline text-3xl lg:text-4xl text-foreground">
            Featured Project Showcases
          </h2>
          <p className="font-value-proposition text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how our engineering excellence transforms complex industrial challenges into successful installations
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) =>
          <div
            key={project.id}
            className="bg-card rounded-xl overflow-hidden precision-shadow hover:precision-shadow-lg engineering-transition border border-border group">

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <AppImage
                src={project.image}
                alt={project.alt}
                className="w-full h-full object-cover group-hover:scale-105 engineering-transition" />

                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground font-technical text-xs px-3 py-1 rounded-full">
                    {project.industry}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-cta text-xl text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 py-4 border-t border-border">
                  {project.metrics.map((metric, metricIndex) =>
                <div key={metricIndex} className="text-center">
                      <div className="font-cta text-lg text-primary">{metric.value}</div>
                      <div className="font-technical text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) =>
                <span
                  key={tagIndex}
                  className="bg-secondary text-secondary-foreground font-technical text-xs px-2 py-1 rounded">

                      {tag}
                    </span>
                )}
                </div>

                {/* View Details Link */}
                <Link
                href="/resource-center"
                className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 font-cta engineering-transition">

                  <span>View Case Study</span>
                  <Icon name="ArrowRightIcon" size={16} />
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-12 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/major-projects"
              className="inline-flex items-center space-x-2 bg-primary text-primary-foreground font-cta px-8 py-3 rounded-lg hover:bg-primary/90 engineering-transition precision-shadow">
              <span>View Major Projects Portfolio</span>
              <Icon name="ArrowRightIcon" size={20} />
            </Link>
            <Link
              href="/resource-center"
              className="inline-flex items-center space-x-2 bg-accent text-accent-foreground font-cta px-8 py-3 rounded-lg hover:bg-accent/90 engineering-transition precision-shadow">
              <span>View Case Studies</span>
              <Icon name="ArrowRightIcon" size={20} />
            </Link>
          </div>
          <p className="font-technical text-sm text-muted-foreground">
            Explore our complete portfolio of 40+ successfully delivered projects across 24+ clients
          </p>
        </div>
      </div>
    </section>);

};

export default FeaturedProjects;