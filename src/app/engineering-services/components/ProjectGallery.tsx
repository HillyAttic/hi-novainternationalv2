import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Project {
  id: number;
  title: string;
  industry: string;
  location: string;
  duration: string;
  value: string;
  description: string;
  image: string;
  alt: string;
  highlights: string[];
  status: 'completed' | 'ongoing';
}

interface ProjectGalleryProps {
  className?: string;
}

const ProjectGallery = ({ className = '' }: ProjectGalleryProps) => {
  const projects: Project[] = [
  {
    id: 1,
    title: "Pharmaceutical Manufacturing Plant",
    industry: "Pharmaceutical",
    location: "Mumbai, Maharashtra",
    duration: "18 months",
    value: "₹45 Crores",
    description: "Complete EPC project for sterile manufacturing facility with advanced cleanroom technology and automated process control systems.",
    image: "https://images.unsplash.com/photo-1621954938124-02e637ba3584",
    alt: "Modern pharmaceutical manufacturing facility with stainless steel equipment and clean white walls under bright lighting",
    highlights: [
    "Grade A/B Cleanrooms",
    "Automated CIP/SIP Systems",
    "HVAC with HEPA Filtration",
    "DCS Integration"],

    status: 'completed'
  },
  {
    id: 2,
    title: "Food Processing Complex",
    industry: "Food & Dairy",
    location: "Pune, Maharashtra",
    duration: "12 months",
    value: "₹32 Crores",
    description: "Turnkey dairy processing plant with advanced pasteurization, homogenization, and packaging systems meeting international food safety standards.",
    image: "https://images.unsplash.com/photo-1513828646384-e4d8ec30d2bb",
    alt: "Industrial food processing facility with large stainless steel tanks and conveyor systems in clean production environment",
    highlights: [
    "HTST Pasteurization",
    "Aseptic Processing",
    "CIP/SIP Systems",
    "HACCP Compliance"],

    status: 'completed'
  },
  {
    id: 3,
    title: "Petrochemical Refinery Expansion",
    industry: "Petrochemical",
    location: "Gujarat",
    duration: "24 months",
    value: "₹125 Crores",
    description: "Major refinery expansion project including distillation columns, heat exchangers, and advanced process control systems.",
    image: "https://images.unsplash.com/photo-1660448059127-c332105d7a29",
    alt: "Large petrochemical refinery with tall distillation towers and complex piping systems against blue sky",
    highlights: [
    "Distillation Columns",
    "Heat Recovery Systems",
    "Advanced Process Control",
    "Safety Instrumented Systems"],

    status: 'ongoing'
  },
  {
    id: 4,
    title: "Chemical Processing Unit",
    industry: "Chemical",
    location: "Vadodara, Gujarat",
    duration: "15 months",
    value: "₹28 Crores",
    description: "Specialty chemical manufacturing facility with reactor systems, separation units, and waste treatment plant.",
    image: "https://images.unsplash.com/photo-1683914816774-fbc7ec0e6e0c",
    alt: "Chemical processing plant with large reactor vessels and extensive piping network in industrial setting",
    highlights: [
    "Reactor Design & Fabrication",
    "Distillation Systems",
    "Waste Treatment Plant",
    "Explosion-Proof Equipment"],

    status: 'completed'
  }];


  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-brand-headline text-3xl lg:text-4xl text-foreground mb-4">
            EPC/Turnkey Project Gallery
          </h2>
          <p className="font-value-proposition text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive project portfolio showcasing successful EPC deliveries across diverse industries with proven track record of excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) =>
          <div key={project.id} className="bg-card rounded-lg overflow-hidden precision-shadow hover:precision-shadow-lg engineering-transition">
              {/* Project Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <AppImage
                src={project.image}
                alt={project.alt}
                className="w-full h-full object-cover" />

                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-cta uppercase tracking-wide ${
                project.status === 'completed' ?
                'bg-success text-success-foreground' : 'bg-warning text-warning-foreground'}`
                }>
                    {project.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full">
                  <span className="font-cta text-sm">{project.value}</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-technical text-sm text-primary uppercase tracking-wide">
                    {project.industry}
                  </span>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Icon name="MapPinIcon" size={14} />
                      <span className="font-body">{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="ClockIcon" size={14} />
                      <span className="font-body">{project.duration}</span>
                    </div>
                  </div>
                </div>

                <h3 className="font-brand-headline text-xl text-card-foreground mb-3">
                  {project.title}
                </h3>

                <p className="font-body text-muted-foreground mb-4">
                  {project.description}
                </p>

                {/* Project Highlights */}
                <div className="mb-6">
                  <h4 className="font-cta text-sm text-foreground mb-3 uppercase tracking-wide">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.highlights.map((highlight, index) =>
                  <div key={index} className="flex items-center space-x-2">
                        <Icon name="CheckCircleIcon" size={14} className="text-success flex-shrink-0" />
                        <span className="font-body text-sm text-card-foreground">{highlight}</span>
                      </div>
                  )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-primary text-primary-foreground font-cta py-2 px-4 rounded-md hover:bg-primary/90 engineering-transition text-sm">
                    View Case Study
                  </button>
                  <button className="border border-border text-foreground font-cta py-2 px-4 rounded-md hover:bg-muted/50 engineering-transition text-sm">
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-12">
          <button className="bg-accent text-accent-foreground font-cta px-8 py-3 rounded-md hover:bg-accent/90 engineering-transition precision-shadow">
            View All Projects
          </button>
        </div>
      </div>
    </section>);

};

export default ProjectGallery;