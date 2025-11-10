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
      industries: ['Food & Dairy', 'Pharma & Biotech', 'Chemical Processing', 'Textiles'],
      icon: 'FireIcon',
      applications: ['Industrial Dryers', 'Heat Exchangers', 'Evaporators', 'Cooling Systems']
    },
    {
      id: 'pressure-systems',
      name: 'Pressure Systems',
      description: 'High-pressure vessels and systems designed for safe operation under extreme conditions with full compliance.',
      industries: ['Petrochemical', 'Power & Energy', 'Chemical Processing', 'Mining & Minerals'],
      icon: 'CogIcon',
      applications: ['Pressure Vessels', 'Reactors', 'Storage Tanks', 'Separators']
    },
    {
      id: 'fluid-handling',
      name: 'Fluid Handling',
      description: 'Complete fluid processing solutions including pumping, mixing, separation, and filtration systems.',
      industries: ['Water Treatment', 'Food & Dairy', 'Pharma & Biotech', 'Chemical Processing'],
      icon: 'BeakerIcon',
      applications: ['Pumps & Agitators', 'Filtration Systems', 'Mixing Equipment', 'Separation Units']
    },
    {
      id: 'automation-control',
      name: 'Automation & Control',
      description: 'Intelligent control systems and automation solutions for enhanced efficiency and safety monitoring.',
      industries: ['Automotive', 'Aerospace', 'Power & Energy', 'Mining & Minerals'],
      icon: 'CpuChipIcon',
      applications: ['PLC Systems', 'SCADA Integration', 'Safety Controls', 'Process Monitoring']
    },
    {
      id: 'material-handling',
      name: 'Material Handling',
      description: 'Efficient material transport and processing systems designed for various bulk and discrete materials.',
      industries: ['Mining & Minerals', 'Automotive', 'Food & Dairy', 'Textiles'],
      icon: 'TruckIcon',
      applications: ['Conveyors', 'Elevators', 'Feeders', 'Storage Systems']
    },
    {
      id: 'environmental-systems',
      name: 'Environmental Systems',
      description: 'Emission control and environmental protection systems ensuring regulatory compliance and sustainability.',
      industries: ['Power & Energy', 'Petrochemical', 'Water Treatment', 'Chemical Processing'],
      icon: 'GlobeAltIcon',
      applications: ['Scrubbers', 'Dust Collectors', 'Waste Treatment', 'Emission Monitoring']
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