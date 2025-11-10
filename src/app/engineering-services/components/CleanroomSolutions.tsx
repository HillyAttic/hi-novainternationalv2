import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface CleanroomStandard {
  id: number;
  grade: string;
  particleCount: string;
  applications: string[];
  compliance: string[];
}

interface CleanroomFeature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface CleanroomSolutionsProps {
  className?: string;
}

const CleanroomSolutions = ({ className = '' }: CleanroomSolutionsProps) => {
  const cleanroomStandards: CleanroomStandard[] = [
  {
    id: 1,
    grade: "Grade A",
    particleCount: "≤3,520 particles/m³",
    applications: ["Aseptic Processing", "Filling Operations", "Critical Sterile Work"],
    compliance: ["EU GMP", "FDA cGMP", "ISO 14644"]
  },
  {
    id: 2,
    grade: "Grade B",
    particleCount: "≤352,000 particles/m³",
    applications: ["Background Environment", "Preparation Areas", "Material Transfer"],
    compliance: ["EU GMP", "FDA cGMP", "WHO Guidelines"]
  },
  {
    id: 3,
    grade: "Grade C",
    particleCount: "≤3,520,000 particles/m³",
    applications: ["Manufacturing Areas", "Packaging Operations", "Component Preparation"],
    compliance: ["ICH Guidelines", "PIC/S Standards", "ISO 14644"]
  },
  {
    id: 4,
    grade: "Grade D",
    particleCount: "≤35,200,000 particles/m³",
    applications: ["General Manufacturing", "Material Storage", "Personnel Areas"],
    compliance: ["GMP Guidelines", "Local Regulations", "Industry Standards"]
  }];


  const cleanroomFeatures: CleanroomFeature[] = [
  {
    id: 1,
    title: "HVAC Design & Installation",
    description: "Advanced air handling systems with HEPA/ULPA filtration, precise temperature and humidity control.",
    icon: "CloudIcon"
  },
  {
    id: 2,
    title: "Contamination Control",
    description: "Comprehensive contamination control strategies including airlocks, pressure cascades, and material flow design.",
    icon: "ShieldCheckIcon"
  },
  {
    id: 3,
    title: "Validation & Qualification",
    description: "Complete IQ/OQ/PQ protocols with detailed documentation and regulatory compliance verification.",
    icon: "DocumentCheckIcon"
  },
  {
    id: 4,
    title: "Monitoring Systems",
    description: "Real-time environmental monitoring with automated data logging and alarm systems.",
    icon: "ChartBarIcon"
  }];


  return (
    <section className={`py-16 lg:py-24 bg-muted/30 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="font-brand-headline text-3xl lg:text-4xl text-foreground mb-6">
              Cleanroom Solutions & Compliance
            </h2>
            <p className="font-value-proposition text-xl text-muted-foreground mb-6">
              Hi-Nova delivers state-of-the-art cleanroom facilities that meet the most stringent pharmaceutical and food processing industry requirements.
            </p>
            <div className="space-y-4">
              {cleanroomFeatures.map((feature) =>
              <div key={feature.id} className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg flex-shrink-0">
                    <Icon name={feature.icon as any} size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-cta text-foreground mb-1">{feature.title}</h3>
                    <p className="font-body text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden precision-shadow-lg">
              <AppImage
                src="https://images.unsplash.com/photo-1716643863908-379bfbbfc4f1"
                alt="Modern pharmaceutical cleanroom with white walls, HEPA filter ceiling, and technicians in full protective suits working at sterile workstations"
                className="w-full h-full object-cover" />

            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-lg precision-shadow-lg">
              <div className="flex items-center space-x-2">
                <Icon name="CheckBadgeIcon" size={20} className="text-success" />
                <span className="font-cta text-sm text-card-foreground">GMP Validated</span>
              </div>
            </div>
          </div>
        </div>

        {/* Cleanroom Standards Grid */}
        <div className="mb-16">
          <h3 className="font-brand-headline text-2xl text-foreground text-center mb-8">
            Cleanroom Classification Standards
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cleanroomStandards.map((standard) =>
            <div key={standard.id} className="bg-card rounded-lg p-6 precision-shadow hover:precision-shadow-lg engineering-transition">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-3">
                    <span className="font-brand-headline text-xl text-primary">{standard.grade.split(' ')[1]}</span>
                  </div>
                  <h4 className="font-brand-headline text-lg text-card-foreground">{standard.grade}</h4>
                  <p className="font-technical text-sm text-muted-foreground">{standard.particleCount}</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-cta text-sm text-foreground mb-2 uppercase tracking-wide">Applications</h5>
                    <ul className="space-y-1">
                      {standard.applications.map((app, index) =>
                    <li key={index} className="font-body text-sm text-muted-foreground flex items-center space-x-2">
                          <Icon name="ArrowRightIcon" size={12} className="text-primary flex-shrink-0" />
                          <span>{app}</span>
                        </li>
                    )}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-cta text-sm text-foreground mb-2 uppercase tracking-wide">Compliance</h5>
                    <div className="flex flex-wrap gap-1">
                      {standard.compliance.map((comp, index) =>
                    <span key={index} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-technical">
                          {comp}
                        </span>
                    )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Compliance Documentation */}
        <div className="bg-card rounded-lg p-8 precision-shadow">
          <div className="text-center mb-8">
            <h3 className="font-brand-headline text-2xl text-card-foreground mb-4">
              Comprehensive Compliance Documentation
            </h3>
            <p className="font-body text-muted-foreground max-w-3xl mx-auto">
              Our cleanroom solutions include complete documentation packages ensuring regulatory compliance and successful audits.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-success/10 rounded-lg mx-auto mb-3">
                <Icon name="DocumentTextIcon" size={24} className="text-success" />
              </div>
              <h4 className="font-cta text-card-foreground mb-2">Design Documentation</h4>
              <p className="font-body text-sm text-muted-foreground">Complete design drawings, specifications, and compliance matrices</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-warning/10 rounded-lg mx-auto mb-3">
                <Icon name="ClipboardDocumentCheckIcon" size={24} className="text-warning" />
              </div>
              <h4 className="font-cta text-card-foreground mb-2">Validation Protocols</h4>
              <p className="font-body text-sm text-muted-foreground">IQ/OQ/PQ protocols with detailed test procedures and acceptance criteria</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-3">
                <Icon name="AcademicCapIcon" size={24} className="text-primary" />
              </div>
              <h4 className="font-cta text-card-foreground mb-2">Training Materials</h4>
              <p className="font-body text-sm text-muted-foreground">Comprehensive training programs for operations and maintenance staff</p>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default CleanroomSolutions;