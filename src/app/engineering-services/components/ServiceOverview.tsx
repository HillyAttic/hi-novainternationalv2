import Icon from '@/components/ui/AppIcon';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

interface ServiceOverviewProps {
  className?: string;
}

const ServiceOverview = ({ className = '' }: ServiceOverviewProps) => {
  const services: Service[] = [
    {
      id: 1,
      title: "EPC/Turnkey Projects",
      description: "Complete project delivery from engineering design to final commissioning with single-point responsibility.",
      icon: "BuildingOffice2Icon",
      features: [
        "Engineering & Design",
        "Procurement Management",
        "Construction & Installation",
        "Commissioning & Startup"
      ]
    },
    {
      id: 2,
      title: "Process Engineering",
      description: "Advanced process design and optimization services for maximum efficiency and operational excellence.",
      icon: "BeakerIcon",
      features: [
        "Process Flow Design",
        "Heat & Mass Balance",
        "Equipment Sizing",
        "Process Optimization"
      ]
    },
    {
      id: 3,
      title: "Cleanroom Solutions",
      description: "Specialized cleanroom design and construction for pharmaceutical and food processing industries.",
      icon: "ShieldCheckIcon",
      features: [
        "GMP Compliance",
        "HVAC Design",
        "Contamination Control",
        "Validation Services"
      ]
    },
    {
      id: 4,
      title: "Installation & Commissioning",
      description: "Expert installation and commissioning services ensuring optimal equipment performance and safety.",
      icon: "WrenchScrewdriverIcon",
      features: [
        "Site Preparation",
        "Equipment Installation",
        "System Integration",
        "Performance Testing"
      ]
    }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-brand-headline text-3xl lg:text-4xl text-foreground mb-4">
            Comprehensive Engineering Services
          </h2>
          <p className="font-value-proposition text-xl text-muted-foreground max-w-3xl mx-auto">
            Hi-Nova's engineering expertise spans the complete project lifecycle, delivering integrated solutions that exceed industry standards and client expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-card rounded-lg p-6 precision-shadow hover:precision-shadow-lg engineering-transition">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <Icon name={service.icon as any} size={24} className="text-primary" />
              </div>
              
              <h3 className="font-brand-headline text-xl text-card-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="font-body text-muted-foreground mb-4">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Icon name="CheckIcon" size={16} className="text-success flex-shrink-0" />
                    <span className="font-body text-sm text-card-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;