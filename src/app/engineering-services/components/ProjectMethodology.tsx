import Icon from '@/components/ui/AppIcon';

interface MethodologyStep {
  id: number;
  phase: string;
  title: string;
  description: string;
  deliverables: string[];
  duration: string;
}

interface ProjectMethodologyProps {
  className?: string;
}

const ProjectMethodology = ({ className = '' }: ProjectMethodologyProps) => {
  const methodologySteps: MethodologyStep[] = [
    {
      id: 1,
      phase: "Phase 1",
      title: "Project Initiation & Analysis",
      description: "Comprehensive requirement analysis and feasibility assessment to establish project foundation.",
      deliverables: [
        "Requirement Specification",
        "Feasibility Study Report",
        "Project Charter",
        "Risk Assessment Matrix"
      ],
      duration: "2-4 weeks"
    },
    {
      id: 2,
      phase: "Phase 2",
      title: "Engineering Design & Development",
      description: "Detailed engineering design with advanced modeling and simulation for optimal performance.",
      deliverables: [
        "P&ID Drawings",
        "3D Process Models",
        "Equipment Specifications",
        "Material Take-off Lists"
      ],
      duration: "6-12 weeks"
    },
    {
      id: 3,
      phase: "Phase 3",
      title: "Procurement & Manufacturing",
      description: "Strategic procurement and quality-controlled manufacturing ensuring timeline adherence.",
      deliverables: [
        "Vendor Qualification",
        "Quality Control Plans",
        "Manufacturing Schedules",
        "Inspection Reports"
      ],
      duration: "8-16 weeks"
    },
    {
      id: 4,
      phase: "Phase 4",
      title: "Installation & Commissioning",
      description: "Expert installation and systematic commissioning for optimal operational performance.",
      deliverables: [
        "Installation Procedures",
        "Commissioning Protocols",
        "Performance Test Reports",
        "Training Documentation"
      ],
      duration: "4-8 weeks"
    }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-muted/30 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-brand-headline text-3xl lg:text-4xl text-foreground mb-4">
            Proven Project Methodology
          </h2>
          <p className="font-value-proposition text-xl text-muted-foreground max-w-3xl mx-auto">
            Our systematic approach ensures successful project delivery through structured phases, clear deliverables, and continuous quality assurance.
          </p>
        </div>

        <div className="space-y-8">
          {methodologySteps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Connection Line */}
              {index < methodologySteps.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-24 bg-primary/20 hidden lg:block"></div>
              )}
              
              <div className="bg-card rounded-lg p-6 lg:p-8 precision-shadow hover:precision-shadow-lg engineering-transition">
                <div className="grid lg:grid-cols-12 gap-6 items-start">
                  {/* Phase Indicator */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center space-x-4 lg:flex-col lg:space-x-0 lg:space-y-2 lg:text-center">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full text-primary-foreground font-brand-headline text-lg">
                        {step.id}
                      </div>
                      <div>
                        <div className="font-technical text-sm text-primary uppercase tracking-wide">
                          {step.phase}
                        </div>
                        <div className="font-body text-sm text-muted-foreground">
                          {step.duration}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-6">
                    <h3 className="font-brand-headline text-xl lg:text-2xl text-card-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="font-body text-muted-foreground mb-4">
                      {step.description}
                    </p>
                  </div>

                  {/* Deliverables */}
                  <div className="lg:col-span-4">
                    <h4 className="font-cta text-sm text-foreground mb-3 uppercase tracking-wide">
                      Key Deliverables
                    </h4>
                    <ul className="space-y-2">
                      {step.deliverables.map((deliverable, deliverableIndex) => (
                        <li key={deliverableIndex} className="flex items-center space-x-2">
                          <Icon name="DocumentTextIcon" size={16} className="text-primary flex-shrink-0" />
                          <span className="font-body text-sm text-card-foreground">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-primary/5 rounded-lg p-8">
            <h3 className="font-brand-headline text-2xl text-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="font-body text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our engineering team is ready to discuss your project requirements and develop a customized methodology that ensures successful delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground font-cta px-8 py-3 rounded-md hover:bg-primary/90 engineering-transition precision-shadow">
                Schedule Consultation
              </button>
              <button className="border border-primary text-primary font-cta px-8 py-3 rounded-md hover:bg-primary/5 engineering-transition">
                Download Methodology Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectMethodology;