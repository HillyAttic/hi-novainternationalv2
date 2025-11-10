import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  client: string;
  location: string;
  projectValue: string;
  duration: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  alt: string;
  equipment: string[];
}

interface CaseStudyShowcaseProps {
  className?: string;
}

const CaseStudyShowcase = ({ className = '' }: CaseStudyShowcaseProps) => {
  const caseStudies: CaseStudy[] = [
  {
    id: 'dairy-processing-plant',
    title: 'Large-Scale Dairy Processing Plant Modernization',
    industry: 'Food & Dairy',
    client: 'Heritage Dairy Co.',
    location: 'Maharashtra, India',
    projectValue: '₹45 Crores',
    duration: '18 months',
    challenge: 'Outdated processing equipment causing quality inconsistencies and high energy consumption in a 500,000 L/day dairy facility.',
    solution: 'Complete modernization with energy-efficient pasteurizers, automated CIP systems, and advanced quality monitoring equipment.',
    results: [
    '35% reduction in energy consumption',
    '99.8% product quality consistency',
    '40% increase in processing capacity',
    'Zero quality incidents in 12 months'],

    image: "https://images.unsplash.com/photo-1568641762254-8d3d88b4b1d7",
    alt: 'Modern dairy processing facility with stainless steel pasteurization equipment and automated control systems',
    equipment: ['Pasteurizers', 'Homogenizers', 'CIP Systems', 'Quality Monitoring']
  },
  {
    id: 'pharma-sterile-facility',
    title: 'Sterile Injectable Manufacturing Facility',
    industry: 'Pharma & Biotech',
    client: 'BioMed Pharmaceuticals',
    location: 'Hyderabad, India',
    projectValue: '₹65 Crores',
    duration: '24 months',
    challenge: 'Need for FDA-compliant sterile manufacturing facility for injectable pharmaceuticals with stringent contamination control.',
    solution: 'Turnkey cleanroom facility with sterile processing equipment, HVAC systems, and comprehensive validation documentation.',
    results: [
    'FDA approval on first inspection',
    'Class A/B cleanroom certification',
    '100% batch success rate',
    'ISO 13485 compliance achieved'],

    image: "https://images.unsplash.com/photo-1669707040737-a6237bc0ae50",
    alt: 'Pharmaceutical cleanroom facility with sterile processing equipment and personnel in protective suits',
    equipment: ['Sterile Reactors', 'Filling Lines', 'HVAC Systems', 'Validation Equipment']
  },
  {
    id: 'petrochemical-heat-recovery',
    title: 'Petrochemical Heat Recovery System Implementation',
    industry: 'Petrochemical',
    client: 'Coastal Refinery Ltd.',
    location: 'Gujarat, India',
    projectValue: '₹85 Crores',
    duration: '30 months',
    challenge: 'Excessive energy waste in refinery operations with outdated heat exchange systems affecting profitability and emissions.',
    solution: 'Advanced heat recovery network with high-efficiency heat exchangers, waste heat recovery units, and process optimization.',
    results: [
    '28% reduction in fuel consumption',
    '₹12 Crores annual energy savings',
    '25% reduction in CO2 emissions',
    'ROI achieved in 3.2 years'],

    image: "https://images.unsplash.com/photo-1630522521616-b5b4cf458621",
    alt: 'Large petrochemical refinery with heat exchanger systems and process piping infrastructure',
    equipment: ['Heat Exchangers', 'Waste Heat Recovery', 'Process Optimization', 'Control Systems']
  }];


  return (
    <section className={`py-20 bg-muted/30 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-brand-headline text-3xl lg:text-4xl text-foreground mb-6">
            Success Stories Across Industries
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Real-world case studies demonstrating our engineering excellence and project delivery capabilities across diverse industrial sectors.
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) =>
          <div
            key={study.id}
            className={`grid lg:grid-cols-2 gap-12 items-center ${
            index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`
            }>

              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden precision-shadow-lg">
                  <AppImage
                  src={study.image}
                  alt={study.alt}
                  className="w-full h-full object-cover" />

                </div>
              </div>
              
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-body">
                      {study.industry}
                    </span>
                    <span className="text-muted-foreground text-sm font-body">
                      {study.location}
                    </span>
                  </div>
                  
                  <h3 className="font-brand-headline text-2xl lg:text-3xl text-foreground">
                    {study.title}
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-body font-medium text-foreground">Client:</div>
                      <div className="font-body text-muted-foreground">{study.client}</div>
                    </div>
                    <div>
                      <div className="font-body font-medium text-foreground">Project Value:</div>
                      <div className="font-technical text-primary font-bold">{study.projectValue}</div>
                    </div>
                    <div>
                      <div className="font-body font-medium text-foreground">Duration:</div>
                      <div className="font-body text-muted-foreground">{study.duration}</div>
                    </div>
                    <div>
                      <div className="font-body font-medium text-foreground">Equipment:</div>
                      <div className="font-body text-muted-foreground">{study.equipment.length} systems</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-body font-medium text-foreground mb-2">Challenge:</h4>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-body font-medium text-foreground mb-2">Solution:</h4>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-body font-medium text-foreground mb-3">Key Results:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {study.results.map((result, resultIndex) =>
                    <div key={resultIndex} className="flex items-center text-sm">
                          <Icon name="CheckCircleIcon" size={16} className="text-success mr-2 flex-shrink-0" />
                          <span className="font-body text-muted-foreground">{result}</span>
                        </div>
                    )}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {study.equipment.map((equipment, equipIndex) =>
                <span
                  key={equipIndex}
                  className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-body">

                      {equipment}
                    </span>
                )}
                </div>
                
                <Link
                href="/contact-quote-request"
                className="inline-flex items-center space-x-2 bg-accent text-accent-foreground font-cta px-6 py-3 rounded-lg hover:bg-accent/90 engineering-transition precision-shadow">

                  <Icon name="ChatBubbleLeftRightIcon" size={18} />
                  <span>Discuss Similar Project</span>
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* View All Case Studies CTA */}
        <div className="text-center mt-16">
          <Link
            href="/resource-center"
            className="inline-flex items-center space-x-2 border-2 border-primary text-primary font-cta px-8 py-4 rounded-lg hover:bg-primary hover:text-primary-foreground engineering-transition">

            <Icon name="FolderOpenIcon" size={20} />
            <span>View All Case Studies</span>
            <Icon name="ArrowRightIcon" size={16} />
          </Link>
        </div>
      </div>
    </section>);

};

export default CaseStudyShowcase;