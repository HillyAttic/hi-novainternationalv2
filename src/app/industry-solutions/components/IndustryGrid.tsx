import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Industry {
  id: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  equipmentCount: number;
  projectCount: number;
  keyApplications: string[];
  href: string;
}

interface IndustryGridProps {
  className?: string;
}

const IndustryGrid = ({ className = '' }: IndustryGridProps) => {
  const industries: Industry[] = [
  {
    id: 'food-dairy',
    name: 'Food & Dairy',
    description: 'Specialized processing equipment for food safety, quality control, and efficient production in dairy, beverage, and food manufacturing.',
    image: "https://images.unsplash.com/photo-1612758456015-3d41b5d04c8b",
    alt: 'Modern dairy processing facility with stainless steel tanks and automated bottling equipment',
    equipmentCount: 45,
    projectCount: 120,
    keyApplications: ['Pasteurization', 'Homogenization', 'Spray Drying', 'CIP Systems'],
    href: '/industry-solutions/food-dairy'
  },
  {
    id: 'pharma-biotech',
    name: 'Pharma & Biotech',
    description: 'GMP-compliant equipment for pharmaceutical manufacturing, biotechnology processes, and sterile production environments.',
    image: "https://images.unsplash.com/photo-1565594090530-d1ebc05b54b1",
    alt: 'Pharmaceutical manufacturing cleanroom with sterile processing equipment and quality control systems',
    equipmentCount: 38,
    projectCount: 85,
    keyApplications: ['Sterile Processing', 'Tablet Manufacturing', 'API Production', 'Cleanrooms'],
    href: '/industry-solutions/pharma-biotech'
  },
  {
    id: 'petrochemical',
    name: 'Petrochemical',
    description: 'Heavy-duty process equipment for oil refining, chemical processing, and petrochemical production with safety-first design.',
    image: "https://images.unsplash.com/photo-1630522521616-b5b4cf458621",
    alt: 'Large-scale petrochemical refinery with distillation towers and process piping systems',
    equipmentCount: 52,
    projectCount: 95,
    keyApplications: ['Distillation', 'Heat Exchange', 'Pressure Vessels', 'Safety Systems'],
    href: '/industry-solutions/petrochemical'
  },
  {
    id: 'chemical-processing',
    name: 'Chemical Processing',
    description: 'Corrosion-resistant equipment for chemical manufacturing, specialty chemicals, and industrial chemical processes.',
    image: "https://images.unsplash.com/photo-1698580868042-8a1bfab0c4c0",
    alt: 'Chemical processing plant with reactor vessels and automated control systems',
    equipmentCount: 41,
    projectCount: 78,
    keyApplications: ['Reactors', 'Mixers', 'Separators', 'Filtration'],
    href: '/industry-solutions/chemical-processing'
  },
  {
    id: 'power-energy',
    name: 'Power & Energy',
    description: 'High-efficiency equipment for power generation, renewable energy systems, and energy storage applications.',
    image: "https://images.unsplash.com/photo-1685731229508-2b1ecb8e1a8e",
    alt: 'Modern power generation facility with turbines and electrical control equipment',
    equipmentCount: 35,
    projectCount: 65,
    keyApplications: ['Steam Generation', 'Heat Recovery', 'Cooling Systems', 'Emissions Control'],
    href: '/industry-solutions/power-energy'
  },
  {
    id: 'water-treatment',
    name: 'Water Treatment',
    description: 'Advanced water purification and wastewater treatment systems for municipal and industrial applications.',
    image: "https://images.unsplash.com/photo-1657778752125-e981b86920a3",
    alt: 'Water treatment facility with filtration systems and purification equipment',
    equipmentCount: 29,
    projectCount: 110,
    keyApplications: ['Filtration', 'Reverse Osmosis', 'Disinfection', 'Sludge Treatment'],
    href: '/industry-solutions/water-treatment'
  },
  {
    id: 'mining-minerals',
    name: 'Mining & Minerals',
    description: 'Robust equipment for mineral processing, ore beneficiation, and mining operations in harsh environments.',
    image: "https://images.unsplash.com/photo-1664382735279-201629918cb6",
    alt: 'Mining facility with ore processing equipment and conveyor systems',
    equipmentCount: 33,
    projectCount: 55,
    keyApplications: ['Crushing', 'Grinding', 'Separation', 'Dewatering'],
    href: '/industry-solutions/mining-minerals'
  },
  {
    id: 'textiles',
    name: 'Textiles',
    description: 'Specialized drying and processing equipment for textile manufacturing, dyeing, and finishing operations.',
    image: "https://images.unsplash.com/photo-1722149255986-a34ec3cd68a6",
    alt: 'Textile manufacturing facility with industrial looms and fabric processing equipment',
    equipmentCount: 26,
    projectCount: 42,
    keyApplications: ['Fabric Drying', 'Heat Setting', 'Steam Processing', 'Finishing'],
    href: '/industry-solutions/textiles'
  },
  {
    id: 'automotive',
    name: 'Automotive',
    description: 'Precision equipment for automotive manufacturing, parts processing, and assembly line operations.',
    image: "https://images.unsplash.com/photo-1627308345262-0c66da5d071c",
    alt: 'Automotive manufacturing assembly line with robotic equipment and quality control systems',
    equipmentCount: 31,
    projectCount: 48,
    keyApplications: ['Paint Booths', 'Curing Ovens', 'Parts Washing', 'Assembly Systems'],
    href: '/industry-solutions/automotive'
  },
  {
    id: 'aerospace',
    name: 'Aerospace',
    description: 'High-precision equipment for aerospace manufacturing, component testing, and quality assurance systems.',
    image: "https://images.unsplash.com/photo-1679454690793-83340db232db",
    alt: 'Aerospace manufacturing facility with precision machining equipment and testing systems',
    equipmentCount: 24,
    projectCount: 32,
    keyApplications: ['Precision Machining', 'Heat Treatment', 'Testing Equipment', 'Clean Assembly'],
    href: '/industry-solutions/aerospace'
  }];


  return (
    <section className={`py-20 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-brand-headline text-3xl lg:text-4xl text-foreground mb-6">
            Industries We Serve
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Decades of specialized expertise across diverse industrial sectors, delivering tailored solutions that meet unique operational requirements and regulatory standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) =>
          <Link
            key={industry.id}
            href={industry.href}
            className="group bg-card rounded-2xl overflow-hidden precision-shadow hover:precision-shadow-lg engineering-transition">

              <div className="aspect-[16/10] overflow-hidden">
                <AppImage
                src={industry.image}
                alt={industry.alt}
                className="w-full h-full object-cover group-hover:scale-105 engineering-transition" />

              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-brand-headline text-xl text-foreground group-hover:text-primary engineering-transition">
                    {industry.name}
                  </h3>
                  <Icon
                  name="ArrowTopRightOnSquareIcon"
                  size={20}
                  className="text-muted-foreground group-hover:text-primary engineering-transition flex-shrink-0 ml-2" />

                </div>
                
                <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                  {industry.description}
                </p>
                
                <div className="flex gap-4 mb-4">
                  <div className="text-center">
                    <div className="font-technical text-lg font-bold text-primary">{industry.equipmentCount}</div>
                    <div className="font-body text-xs text-muted-foreground">Equipment Types</div>
                  </div>
                  <div className="text-center">
                    <div className="font-technical text-lg font-bold text-primary">{industry.projectCount}</div>
                    <div className="font-body text-xs text-muted-foreground">Projects Completed</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="font-body text-sm font-medium text-foreground">Key Applications:</div>
                  <div className="flex flex-wrap gap-2">
                    {industry.keyApplications.map((application, index) =>
                  <span
                    key={index}
                    className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-body">

                        {application}
                      </span>
                  )}
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>);

};

export default IndustryGrid;