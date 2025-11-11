/**
 * About Us Page Data
 * Hi-Nova International Company Profile
 */

export interface AboutPageData {
  page: {
    type: string;
    name: string;
    slug: string;
    url: string;
    locale: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
    canonical: string;
  };
  hero: {
    heading: string;
    subheading: string;
    stats: Array<{ label: string; value: string }>;
    ctas: Array<{ label: string; href: string }>;
  };
  overview: {
    summary_paragraphs: string[];
  };
  vision_mission: {
    vision_blocks: string[];
    mission_blocks: string[];
  };
  core_values: string[];
  capabilities_preview: {
    highlights: string[];
    featured_equipment_examples: string[];
    materials_expertise: string[];
    cta: { label: string; href: string };
  };
  certifications_quality: {
    certifications: string[];
    quality_statement: string;
    cta: { label: string; href: string };
  };
  leadership: Array<{
    name: string;
    role: string;
    bio: string;
  }>;
  sectors_served: string[];
  she_policy: {
    intro: string;
    occupational_health_safety: string[];
    environmental_sustainability: string[];
    regulatory_compliance: string[];
    training_continuous_improvement: string[];
  };
  quality_testing_capabilities: string[];
  contact: {
    phones: string[];
    emails: string[];
    website: string;
    addresses: Array<{
      label: string;
      line1: string;
      line2: string;
    }>;
    contact_persons: Array<{
      name: string;
      phone: string;
    }>;
    cta: { label: string; href: string };
  };
}

export const aboutData: AboutPageData = {
  page: {
    type: 'about',
    name: 'About Hi-Nova International',
    slug: 'about',
    url: '/about/',
    locale: 'en-IN',
  },
  seo: {
    title:
      'About Hi-Nova International | ISO 9001:2015 & IBR-Certified Process Equipment Manufacturer',
    description:
      "Hi-Nova International manufactures high-performance process equipment and turnkey systems: pressure vessels, heat exchangers, reactors, dryers, storage tanks. 26+ years' experience. ISO 9001:2015 & IBR certified.",
    keywords: [
      'Hi-Nova International',
      'process equipment manufacturer',
      'industrial dryers',
      'pressure vessels',
      'heat exchangers',
      'IBR certified',
      'ISO 9001:2015',
    ],
    canonical: 'https://www.hi-novainternational.com/about/',
  },
  hero: {
    heading:
      'Engineering Excellence in Process Equipment & Industrial Drying Systems',
    subheading:
      'Designing and delivering precision-engineered systems for Food, Pharma, Petrochemical, Power, Water and more.',
    stats: [
      { label: 'Years of Experience', value: '26+' },
      { label: 'Certification', value: 'ISO 9001:2015 & IBR' },
    ],
    ctas: [
      {
        label: 'Explore Capabilities',
        href: '/about/infrastructure-capabilities/',
      },
      { label: 'View Certifications', href: '/about/certifications-qa/' },
      { label: 'Request a Quote', href: '/contact/' },
    ],
  },
  overview: {
    summary_paragraphs: [
      'Hi-Nova International is a global manufacturer and exporter of high-performance process and customized equipment for industries including Food Processing, Pharmaceuticals, Petrochemicals, Dairy, Breweries, Edible Oils, Refineries, Fertilizers, Oil & Gas, Desalination, Chemicals, Power Plants, Steel, Sewage Treatment, and Paper Processing.',
      'With 26 years of experience, we specialize in turnkey projects, precision-engineered equipment, and modular skid packages. Our expertise spans Manufacturing, Supply, Erection, and Commissioning, supported by Mechanical and Process Design services.',
      'We uphold global quality benchmarks as an ISO 9001:2015 and IBR-certified company, delivering cost-effective, reliable, and technologically advanced solutions with a customer-centric approach.',
    ],
  },
  vision_mission: {
    vision_blocks: [
      'To be a global leader in precision manufacturing, delivering cutting-edge solutions that enhance industrial efficiency across sectors.',
      'To be one of the most successful and important manufacturing companies—helping customers apply the latest technology to solve their problems and making our customers happy.',
    ],
    mission_blocks: [
      'To provide world-class industrial process equipment and turnkey engineering solutions with a commitment to quality, innovation, and reliability.',
      "To fulfill customers' needs with excellent quality engineering products and services at competitive prices while building trust, nurturing client relationships, and employee growth.",
    ],
  },
  core_values: [
    'Integrity',
    'Curiosity',
    'Ownership mentality',
    'Durability',
    'Appreciation of the journey',
  ],
  capabilities_preview: {
    highlights: [
      'Process & Mechanical Designing',
      'Manufacturing & Supply, Erection & Commissioning',
      'Project Management & Quality Assurance',
      'Industrial Maintenance & Revamping',
      'Turnkey Project Execution',
    ],
    featured_equipment_examples: [
      'Pressure Vessels, Heat Exchangers, Reactors, Columns, Storage Tanks',
      'Rotary Dryers, Paddle Dryers, Sludge Dryers, Static Dryers & Ovens',
      'Vibrating Fluid Bed Dryer, Single & Double Drum Dryer',
      'Air Pre-Heaters, Cyclones, Drying Chambers, Flakers',
      'Skid Packages, Process/Pressure Piping, Cladded Vessels',
    ],
    materials_expertise: [
      'Carbon Steel (all grades)',
      'Stainless Steel (all grades)',
      'Duplex & Super Duplex',
      'Inconel, Monel, Cupronickel',
      'Hardox',
      'Aluminium & Titanium',
      'Other high-performance alloys',
    ],
    cta: {
      label: 'See Infrastructure & Capabilities',
      href: '/about/infrastructure-capabilities/',
    },
  },
  certifications_quality: {
    certifications: ['ISO 9001:2015', 'IBR Certified'],
    quality_statement:
      'Every product and project meets high standards of performance, safety, and durability through structured QA and compliant processes.',
    cta: { label: 'View Certifications & QA', href: '/about/certifications-qa/' },
  },
  leadership: [
    {
      name: 'Rohidas R Sharma',
      role: 'Managing Director',
      bio: 'Visionary MD with a mechanical engineering background and 26+ years leading complex projects and organizations; blends technical expertise with a customer-first mindset.',
    },
    {
      name: 'Manoj A. P',
      role: 'Director',
      bio: 'Leads engineering strategies and innovation roadmap; deep chemical engineering knowledge across design and execution of scalable, compliant process systems.',
    },
    {
      name: 'Vishal Sakat',
      role: 'Production Head',
      bio: "9+ years' fabrication experience across pressure vessels, reactors, and process equipment; ASNT Level II (RT, LPT); ensures quality and productivity on the shop floor.",
    },
    {
      name: 'Hardik Panchal',
      role: 'Marketing Head',
      bio: "Mechanical engineer with ~10 years' experience; drives technical marketing, customer outreach, and global brand positioning for tailored industrial solutions.",
    },
  ],
  sectors_served: [
    'Food Processing',
    'Pharmaceuticals',
    'Petrochemicals',
    'Dairy & Breweries',
    'Edible Oils & Refineries',
    'Fertilizers',
    'Oil & Gas',
    'Desalination / Water',
    'Chemicals',
    'Power Plants & Steel',
    'Sewage Treatment',
    'Paper Processing',
  ],
  she_policy: {
    intro:
      'Safety, health, and environmental sustainability are core to our operations. Our SHE system aligns to high global standards and continuous improvement.',
    occupational_health_safety: [
      'Maintain safe, hazard-free workplaces via risk assessment and mitigation.',
      'Implement protocols to prevent incidents, injuries, and illnesses.',
      'Improve ergonomics, emergency response, and well-being programs.',
    ],
    environmental_sustainability: [
      'Reduce carbon footprint, energy use, and waste through eco-efficient technologies.',
      'Evaluate supply-chain environmental and social impacts for responsible sourcing.',
      'Adopt circular economy principles for resource conservation.',
    ],
    regulatory_compliance: [
      'Adhere to applicable international and local regulations and standards.',
      'Conduct audits and performance evaluations for compliance.',
      'Report SHE metrics transparently where applicable.',
    ],
    training_continuous_improvement: [
      'Provide comprehensive training to uphold SHE standards.',
      'Foster accountability and leadership in safety at all levels.',
      'Use data-driven analytics and real-time monitoring for risk management.',
    ],
  },
  quality_testing_capabilities: [
    'Dye Penetrant Testing (DPT)',
    'Ultrasonic Testing (UT)',
    'Radiography Testing (RT)',
    'Magnetic Particle Testing (MPI)',
    'Ultrasonic Thickness Gauge (D-Meter)',
    'PMI Testing',
    'Hardness Testing',
    'Hydraulic & Pneumatic Testing',
    'Vacuum & Leak Testing',
    'Surface Profile Measurement',
    'DFT & WFT Measurement',
    'Salt & Dust Contamination Tests',
    'Dolly (Adhesion) Testing',
    'Digital Tachometer (RPM)',
    'Digital Surface Temperature',
    'In-Situ Metallography Testing',
  ],
  contact: {
    phones: ['+91 98339 65129'],
    emails: [
      'rohidas@hi-novainternational.com',
      'hinovainternational@rediffmail.com',
      'hinovainternational23@gmail.com',
    ],
    website: 'https://www.hi-novainternational.com',
    addresses: [
      {
        label: 'Manufacturing Facility',
        line1: 'Plot No. B-29, Anand Nagar Additional MIDC',
        line2: 'Ambernath East, Dist. Thane, Maharashtra 421 301, India',
      },
      {
        label: 'Corporate Office',
        line1: 'Plot No. B-64, Anand Nagar Additional MIDC',
        line2: 'Ambernath East, Dist. Thane, Maharashtra 421 301, India',
      },
    ],
    contact_persons: [
      { name: 'Mr. Rohidas R. Sharma', phone: '+91 98203 39871' },
      { name: 'Mr. Manoj A. P', phone: '+91 98203 39871' },
      { name: 'Mr. Vishal C. S.', phone: '' },
    ],
    cta: { label: 'Request a Quote', href: '/contact/' },
  },
};
