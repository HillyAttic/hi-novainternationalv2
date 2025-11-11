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
    id: 'food-dairy-brewery',
    name: 'Food, Dairy & Brewery',
    description: 'Process tanks, fermenters, pasteurizers, homogenizers, and specialized dryers for food, dairy, and brewery industry applications.',
    image: "https://images.unsplash.com/photo-1612758456015-3d41b5d04c8b",
    alt: 'Modern dairy processing facility with stainless steel tanks, fermenters, and automated bottling equipment',
    equipmentCount: 48,
    projectCount: 125,
    keyApplications: ['Process Tanks & Fermenters', 'Spray Dryers', 'CIP Systems', 'Heat Exchangers'],
    href: '/industry-solutions/food-dairy'
  },
  {
    id: 'pharmaceutical-biotech',
    name: 'Pharmaceutical & Biotech',
    description: 'Reactors, fermenters, WFI plants, and specialized vacuum dryers for GMP-compliant pharmaceutical and biotechnology manufacturing.',
    image: "https://images.unsplash.com/photo-1565594090530-d1ebc05b54b1",
    alt: 'Pharmaceutical manufacturing cleanroom with sterile reactors, WFI plants, and quality control systems',
    equipmentCount: 42,
    projectCount: 95,
    keyApplications: ['Reactors & Fermenters', 'Vacuum Dryers', 'WFI Plants', 'Crystallizers'],
    href: '/industry-solutions/pharma-biotech'
  },
  {
    id: 'petrochemical-refinery',
    name: 'Petrochemical & Refinery',
    description: 'Distillation columns, heat exchangers, reactors, and specialized thermal equipment for petrochemical and refinery operations.',
    image: "https://images.unsplash.com/photo-1630522521616-b5b4cf458621",
    alt: 'Large-scale petrochemical refinery with distillation towers, heat exchangers, and process piping systems',
    equipmentCount: 55,
    projectCount: 105,
    keyApplications: ['Distillation Columns', 'Heat Exchangers', 'Reactors', 'Calciners & Kilns'],
    href: '/industry-solutions/petrochemical'
  },
  {
    id: 'chemical-fertilizer',
    name: 'Chemical & Fertilizer',
    description: 'Reactors, crystallizers, paddle dryers, and corrosion-resistant equipment for chemical and fertilizer manufacturing.',
    image: "https://images.unsplash.com/photo-1698580868042-8a1bfab0c4c0",
    alt: 'Chemical processing plant with reactor vessels, crystallizers, and automated control systems',
    equipmentCount: 45,
    projectCount: 88,
    keyApplications: ['Reactors & Mixers', 'Paddle Dryers', 'Crystallizers', 'Evaporators'],
    href: '/industry-solutions/chemical-fertilizer'
  },
  {
    id: 'oil-gas-marine-defence',
    name: 'Oil & Gas, Marine & Defence',
    description: 'Skid-mounted units, pressure vessels, calciners, and specialized equipment for oil & gas, marine, and defence applications.',
    image: "https://images.unsplash.com/photo-1544551763-7ef4200d2ca6",
    alt: 'Offshore oil and gas platform with skid-mounted processing units and pressure vessels',
    equipmentCount: 38,
    projectCount: 72,
    keyApplications: ['Skid-Mounted Units', 'Pressure Vessels', 'Calciners', 'Degassing Systems'],
    href: '/industry-solutions/oil-gas-marine'
  },
  {
    id: 'power-steel-cement',
    name: 'Power, Steel & Cement',
    description: 'Boiler systems, rotary dryers, calciners, and thermal equipment for power generation, steel, and cement industries.',
    image: "https://images.unsplash.com/photo-1685731229508-2b1ecb8e1a8e",
    alt: 'Modern power plant with boiler systems, cooling towers, and industrial dryers',
    equipmentCount: 41,
    projectCount: 78,
    keyApplications: ['Boiler Feedwater Systems', 'Rotary Dryers', 'Calcining Kilns', 'Cooling Towers'],
    href: '/industry-solutions/power-steel'
  },
  {
    id: 'textile-dyes-pigments-paper',
    name: 'Textile, Dyes & Pigments',
    description: 'Dyeing reactors, band dryers, and specialized processing equipment for textile, dyes, pigments, and paper industries.',
    image: "https://images.unsplash.com/photo-1722149255986-a34ec3cd68a6",
    alt: 'Textile manufacturing facility with dyeing reactors, band dryers, and fabric processing equipment',
    equipmentCount: 32,
    projectCount: 58,
    keyApplications: ['Dyeing Reactors', 'Band Dryers', 'Fluidized Bed Dryers', 'Color Matching Systems'],
    href: '/industry-solutions/textile-paper'
  },
  {
    id: 'edible-oil-carbon-black-soda-ash',
    name: 'Edible Oil, Carbon Black & Soda Ash',
    description: 'Refining systems, calciners, and distillation equipment for edible oil processing, carbon black, and soda ash manufacturing.',
    image: "https://images.unsplash.com/photo-1590959651373-a3db0f38a961",
    alt: 'Edible oil refinery with distillation columns, heat exchangers, and processing tanks',
    equipmentCount: 36,
    projectCount: 65,
    keyApplications: ['Refining & Filtration', 'Calciners', 'Band Dryers', 'Neutralizers'],
    href: '/industry-solutions/edible-oil'
  },
  {
    id: 'water-sewage-desalination',
    name: 'Water, Sewage & Desalination',
    description: 'ETP/STP/RO systems, thermal sludge dryers, and water treatment equipment for municipal and industrial applications.',
    image: "https://images.unsplash.com/photo-1657778752125-e981b86920a3",
    alt: 'Water treatment facility with ETP/STP systems, filtration equipment, and thermal sludge dryers',
    equipmentCount: 34,
    projectCount: 115,
    keyApplications: ['ETP/STP/RO Systems', 'Thermal Sludge Dryers', 'Clarifiers', 'Multi-Effect Evaporators'],
    href: '/industry-solutions/water-treatment'
  },
  {
    id: 'agriculture-infrastructure',
    name: 'Agriculture & Infrastructure',
    description: 'Irrigation systems, storage silos, fertilizer blending units, and modular process equipment for agricultural and infrastructure development.',
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449",
    alt: 'Agricultural facility with irrigation systems, storage silos, and fertilizer processing equipment',
    equipmentCount: 28,
    projectCount: 45,
    keyApplications: ['Irrigation Systems', 'Storage Silos', 'Fertilizer Blending', 'Modular Process Units'],
    href: '/industry-solutions/agriculture'
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