import Icon from '@/components/ui/AppIcon';

interface Capability {
  id: string;
  name: string;
  description: string;
  industries: string[];
  icon: string;
  applications: string[];
}

interface CapabilityMappingProps {
  className?: string;
}

const CapabilityMapping = ({ className = '' }: CapabilityMappingProps) => {
  const capabilities: Capability[] = [
    {
      id: 'thermal-processing',
      name: 'Thermal Processing',
      description: 'Advanced heat transfer solutions for drying, heating, cooling, and temperature control across multiple industries.',
      industries: ['Food, Dairy & Brewery', 'Pharmaceutical & Biotech', 'Chemical & Fertilizer', 'Textile, Dyes & Pigments'],
      icon: 'FireIcon',
      applications: ['Spray Dryers', 'Paddle Dryers', 'Rotary Dryers', 'Heat Exchangers', 'Calciners', 'Static Ovens']
    },
    {
      id: 'pressure-systems',
      name: 'Pressure Systems',
      description: 'High-pressure vessels and systems designed for safe operation under extreme conditions with full compliance.',
      industries: ['Petrochemical & Refinery', 'Oil & Gas, Marine & Defence', 'Power, Steel & Cement', 'Chemical & Fertilizer'],
      icon: 'CogIcon',
      applications: ['Pressure Vessels', 'Reactors', 'Distillation Columns', 'Storage Tanks', 'Separators', 'Knockout Drums']
    },
    {
      id: 'fluid-handling',
      name: 'Fluid Handling',
      description: 'Complete fluid processing solutions including pumping, mixing, separation, and filtration systems.',
      industries: ['Water, Sewage & Desalination', 'Food, Dairy & Brewery', 'Pharmaceutical & Biotech', 'Chemical & Fertilizer'],
      icon: 'BeakerIcon',
      applications: ['CIP Systems', 'Filtration & Purification', 'Mixing & Agitation', 'Centrifuges & Decanters', 'Clarifiers']
    },
    {
      id: 'specialized-dryers',
      name: 'Specialized Dryers',
      description: 'Comprehensive range of industrial dryers for diverse material types and processing requirements.',
      industries: ['Edible Oil, Carbon Black & Soda Ash', 'Power, Steel & Cement', 'Textile, Dyes & Pigments', 'Water, Sewage & Desalination'],
      icon: 'CpuChipIcon',
      applications: ['Band Dryers', 'Fluidized Bed Dryers', 'Spin Flash Dryers', 'Vacuum Dryers', 'Thermal Sludge Dryers']
    },
    {
      id: 'fermentation-processing',
      name: 'Fermentation & Processing',
      description: 'Specialized equipment for fermentation, processing, and bio-reaction applications across industries.',
      industries: ['Food, Dairy & Brewery', 'Pharmaceutical & Biotech', 'Chemical & Fertilizer', 'Edible Oil, Carbon Black & Soda Ash'],
      icon: 'TruckIcon',
      applications: ['Fermenters', 'Process Tanks', 'Homogenizers', 'Crystallizers', 'Neutralizers', 'WFI Plants']
    },
    {
      id: 'modular-systems',
      name: 'Modular Systems',
      description: 'Pre-engineered skid-mounted systems and modular process units for rapid deployment and scalability.',
      industries: ['Oil & Gas, Marine & Defence', 'Water, Sewage & Desalination', 'Agriculture & Infrastructure', 'Pharmaceutical & Biotech'],
      icon: 'GlobeAltIcon',
      applications: ['Skid-Mounted Units', 'UF/RO Systems', 'Modular Reactors', 'Pre-Fabricated Units', 'Turnkey Solutions']
    }
  ];

  return (
    <section className={`py-20 bg-muted/30 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-brand-headline text-3xl lg:text-4xl text-foreground mb-6">
            Cross-Sector Capabilities
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Our core engineering capabilities span multiple industries, providing versatile solutions that adapt to diverse operational requirements and technical specifications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability) => (
            <div
              key={capability.id}
              className="bg-card rounded-2xl p-8 precision-shadow hover:precision-shadow-lg engineering-transition"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mr-4">
                  <Icon 
                    name={capability.icon as any} 
                    size={24} 
                    className="text-primary-foreground" 
                  />
                </div>
                <h3 className="font-brand-headline text-xl text-foreground">
                  {capability.name}
                </h3>
              </div>
              
              <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                {capability.description}
              </p>
              
              <div className="space-y-4">
                <div>
                  <div className="font-body text-sm font-medium text-foreground mb-2">
                    Applicable Industries:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {capability.industries.map((industry, index) => (
                      <span
                        key={index}
                        className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-body"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="font-body text-sm font-medium text-foreground mb-2">
                    Key Applications:
                  </div>
                  <div className="space-y-1">
                    {capability.applications.map((application, index) => (
                      <div key={index} className="flex items-center text-sm text-muted-foreground">
                        <Icon name="CheckIcon" size={16} className="text-success mr-2 flex-shrink-0" />
                        {application}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilityMapping;