import Icon from '@/components/ui/AppIcon';

interface Specification {
  parameter: string;
  value: string;
  unit?: string;
}

interface TechnicalSpecificationsProps {
  specifications: {
    general: Specification[];
    performance: Specification[];
    dimensions: Specification[];
    materials: Specification[];
  };
}

const TechnicalSpecifications = ({ specifications }: TechnicalSpecificationsProps) => {
  const specSections = [
    { title: 'General Specifications', data: specifications.general, icon: 'CogIcon' },
    { title: 'Performance Data', data: specifications.performance, icon: 'ChartBarIcon' },
    { title: 'Dimensions & Weight', data: specifications.dimensions, icon: 'CubeIcon' },
    { title: 'Materials & Construction', data: specifications.materials, icon: 'WrenchScrewdriverIcon' },
  ];

  return (
    <section className="bg-muted py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-brand-headline text-3xl lg:text-4xl text-foreground mb-4">
            Technical Specifications
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technical data and specifications for informed engineering decisions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {specSections.map((section, index) => (
            <div key={index} className="bg-white rounded-lg precision-shadow p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name={section.icon as any} size={20} className="text-primary" />
                </div>
                <h3 className="font-brand-headline text-xl text-foreground">{section.title}</h3>
              </div>

              <div className="space-y-4">
                {section.data.map((spec, specIndex) => (
                  <div key={specIndex} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                    <span className="font-body text-foreground">{spec.parameter}</span>
                    <span className="font-technical text-primary">
                      {spec.value} {spec.unit && <span className="text-muted-foreground">{spec.unit}</span>}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Download Section */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg precision-shadow p-8">
            <h3 className="font-brand-headline text-2xl text-foreground mb-4">
              Need Detailed Technical Documentation?
            </h3>
            <p className="font-body text-muted-foreground mb-6">
              Download complete specification sheets, CAD drawings, and installation guides
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground font-cta px-6 py-3 rounded-md hover:bg-primary/90 engineering-transition precision-shadow hover:precision-shadow-lg flex items-center justify-center space-x-2">
                <Icon name="DocumentTextIcon" size={20} />
                <span>Specification Sheet</span>
              </button>
              <button className="bg-secondary text-secondary-foreground font-cta px-6 py-3 rounded-md hover:bg-secondary/80 engineering-transition precision-shadow hover:precision-shadow-lg flex items-center justify-center space-x-2">
                <Icon name="CubeTransparentIcon" size={20} />
                <span>CAD Drawings</span>
              </button>
              <button className="bg-accent text-accent-foreground font-cta px-6 py-3 rounded-md hover:bg-accent/90 engineering-transition precision-shadow hover:precision-shadow-lg flex items-center justify-center space-x-2">
                <Icon name="BookOpenIcon" size={20} />
                <span>Installation Guide</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecifications;