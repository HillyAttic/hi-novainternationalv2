/**
 * Internal Linking Strategy Configuration
 * Hub-and-Spoke Architecture with contextual cross-linking
 * 
 * @owner Rohidas R Sharma
 * @architecture hub-and-spoke
 */

export interface InternalLink {
  href: string;
  label: string;
  anchorText?: string;
  priority?: 'highest' | 'high' | 'medium' | 'low';
}

export interface PageLinkingStrategy {
  slug: string;
  title: string;
  linksTo: string[];
  purpose: string;
  priority?: 'highest' | 'high' | 'medium' | 'low';
  relatedPages?: {
    href: string;
    label: string;
    description?: string;
  }[];
}

/**
 * Core navigation structure aligned with hub-and-spoke
 */
export const HUB_PAGE = '/';
export const SPOKE_PAGES = [
  '/about',
  '/industries',
  '/products',
  '/services',
  '/projects',
  '/blog',
  '/contact',
];

/**
 * Page-specific internal linking strategies
 */
export const PAGE_LINKING_STRATEGY: Record<string, PageLinkingStrategy> = {
  // HUB - Home Page
  '/': {
    slug: '/',
    title: 'Home',
    linksTo: [
      '/about',
      '/industries',
      '/products/industrial-dryers',
      '/services/epc-engineering',
      '/projects',
      '/blog',
      '/contact',
    ],
    purpose: 'Guide users to major sections; create top-level authority links',
    priority: 'highest',
  },

  // ABOUT SECTION
  '/about': {
    slug: '/about',
    title: 'About Us',
    linksTo: [
      '/about/vision-mission-values',
      '/about/infrastructure',
      '/about/certifications',
      '/contact',
    ],
    purpose: 'Strengthen credibility connections; funnel users toward trust-building pages',
    relatedPages: [
      { href: '/about/vision-mission-values', label: 'Vision, Mission & Values', description: 'Our guiding principles' },
      { href: '/about/infrastructure', label: 'Infrastructure & Capabilities', description: 'World-class facilities' },
      { href: '/about/certifications', label: 'Certifications & QA', description: 'Quality assurance' },
    ],
  },

  '/about/vision-mission-values': {
    slug: '/about/vision-mission-values',
    title: 'Vision, Mission & Values',
    linksTo: ['/sustainability', '/about'],
    purpose: 'Build ethical and mission-based internal authority',
  },

  '/about/infrastructure': {
    slug: '/about/infrastructure',
    title: 'Infrastructure & Capabilities',
    linksTo: [
      '/products/industrial-dryers',
      '/products/reactors',
      '/services/epc-engineering',
      '/projects',
    ],
    purpose: 'Show technical capacity driving manufacturing excellence',
  },

  '/about/certifications': {
    slug: '/about/certifications',
    title: 'Certifications & QA',
    linksTo: ['/about/infrastructure', '/services/epc-engineering', '/contact'],
    purpose: 'Reinforce quality and encourage direct inquiries',
  },

  // INDUSTRY PAGES
  '/industries/food-dairy-brewery': {
    slug: '/industries/food-dairy-brewery',
    title: 'Food, Dairy & Brewery',
    linksTo: [
      '/products/industrial-dryers',
      '/products/heat-exchangers',
      '/products/mixers',
      '/products/reactors',
    ],
    purpose: 'Direct visitors to relevant equipment and technical solutions',
    relatedPages: [
      { href: '/products/industrial-dryers', label: 'Industrial Dryers', description: 'Spray, rotary & flash dryers' },
      { href: '/products/heat-exchangers', label: 'Heat Exchangers', description: 'Efficient thermal solutions' },
      { href: '/products/mixers', label: 'Mixers & Blenders', description: 'Process mixing equipment' },
      { href: '/products/reactors', label: 'Reactors', description: 'Fermentation & processing' },
    ],
  },

  '/industries/pharma-biotech': {
    slug: '/industries/pharma-biotech',
    title: 'Pharma & Biotech',
    linksTo: [
      '/products/reactors',
      '/products/filtration-units',
      '/services/cleanroom',
      '/services/epc-engineering',
    ],
    purpose: 'Drive clients to sanitary process solutions and EPC offerings',
    relatedPages: [
      { href: '/products/reactors', label: 'Reactors', description: 'GMP-compliant reactors' },
      { href: '/products/filtration-units', label: 'Filtration Units', description: 'Sterile filtration systems' },
      { href: '/services/cleanroom', label: 'Cleanroom Solutions', description: 'Controlled environments' },
      { href: '/services/epc-engineering', label: 'EPC Engineering', description: 'Turnkey pharma projects' },
    ],
  },

  '/industries/petrochemical-refinery': {
    slug: '/industries/petrochemical-refinery',
    title: 'Petrochemical & Refinery',
    linksTo: [
      '/products/pressure-vessels',
      '/products/heat-exchangers',
      '/products/skid-systems',
    ],
    purpose: 'Interconnect major heavy-duty equipment categories',
    relatedPages: [
      { href: '/products/pressure-vessels', label: 'Pressure Vessels', description: 'ASME-certified vessels' },
      { href: '/products/heat-exchangers', label: 'Heat Exchangers', description: 'Shell & tube exchangers' },
      { href: '/products/skid-systems', label: 'Skid-Mounted Systems', description: 'Modular process units' },
    ],
  },

  '/industries/chemical-fertilizer': {
    slug: '/industries/chemical-fertilizer',
    title: 'Chemical & Fertilizer',
    linksTo: [
      '/products/paddle-dryers',
      '/products/reactors',
      '/products/condensers',
      '/products/calciners',
    ],
    purpose: 'Reinforce process equipment expertise',
    relatedPages: [
      { href: '/products/paddle-dryers', label: 'Paddle Dryers', description: 'Continuous drying systems' },
      { href: '/products/reactors', label: 'Reactors', description: 'Chemical processing reactors' },
      { href: '/products/condensers', label: 'Condensers', description: 'Vapor recovery systems' },
      { href: '/products/calciners', label: 'Calciners', description: 'Thermal processing equipment' },
    ],
  },

  '/industries/oil-gas-marine-defence': {
    slug: '/industries/oil-gas-marine-defence',
    title: 'Oil & Gas / Marine / Defence',
    linksTo: [
      '/products/skid-systems',
      '/products/reactors',
      '/services/epc-engineering',
      '/projects',
    ],
    purpose: 'Strengthen cross-link between sectors and turnkey capabilities',
    relatedPages: [
      { href: '/products/skid-systems', label: 'Skid Systems', description: 'Offshore-ready modules' },
      { href: '/services/epc-engineering', label: 'EPC Engineering', description: 'Complete project delivery' },
      { href: '/projects', label: 'Project Gallery', description: 'Completed installations' },
    ],
  },

  '/industries/power-steel': {
    slug: '/industries/power-steel',
    title: 'Power & Steel',
    linksTo: [
      '/products/heat-exchangers',
      '/services/structural-fabrication',
      '/services/epc-engineering',
    ],
    purpose: 'Contextual links to energy solutions',
  },

  '/industries/textile-dyes-paper': {
    slug: '/industries/textile-dyes-paper',
    title: 'Textile / Dyes / Paper',
    linksTo: [
      '/products/band-dryers',
      '/products/fluidized-bed-dryers',
      '/products/agitators',
    ],
    purpose: 'Tie processing lines with drying technologies',
  },

  '/industries/edible-oil-carbon-black-soda-ash': {
    slug: '/industries/edible-oil-carbon-black-soda-ash',
    title: 'Edible Oil / Carbon Black / Soda Ash',
    linksTo: ['/products/calciners', '/products/filters', '/products/reactors'],
    purpose: 'Maintain strong equipment synergy',
  },

  '/industries/water-etp-stp-ro': {
    slug: '/industries/water-etp-stp-ro',
    title: 'Water / ETP / STP / RO',
    linksTo: [
      '/services/epc-engineering',
      '/products/filtration-units',
      '/products/reactors',
      '/sustainability',
    ],
    purpose: 'Connect to environmental engineering and project execution',
  },

  '/industries/agriculture-infrastructure': {
    slug: '/industries/agriculture-infrastructure',
    title: 'Agriculture & Infrastructure',
    linksTo: [
      '/services/civil-projects',
      '/products/skid-systems',
      '/services/epc-engineering',
    ],
    purpose: 'Emphasize industrial-civil integration',
  },

  // PRODUCT PAGES
  '/products/industrial-dryers': {
    slug: '/products/industrial-dryers',
    title: 'Industrial Dryers (Core Product Hub)',
    linksTo: ['/industries', '/products/reactors', '/services/epc-engineering'],
    purpose: 'Primary internal authority page for drying technology',
    priority: 'highest',
    relatedPages: [
      { href: '/products/rotary-dryers', label: 'Rotary Dryers', description: 'Continuous rotary drying' },
      { href: '/products/paddle-dryers', label: 'Paddle Dryers', description: 'Indirect heat drying' },
      { href: '/products/spray-dryers', label: 'Spray Dryers', description: 'Atomization drying' },
      { href: '/products/flash-dryers', label: 'Flash Dryers', description: 'Rapid drying systems' },
      { href: '/products/fluidized-bed-dryers', label: 'Fluidized Bed Dryers', description: 'Uniform particle drying' },
      { href: '/products/band-dryers', label: 'Band Dryers', description: 'Conveyor belt drying' },
    ],
  },

  '/products/heat-exchangers-pressure-vessels': {
    slug: '/products/heat-exchangers-pressure-vessels',
    title: 'Heat Exchangers & Pressure Vessels',
    linksTo: [
      '/industries/chemical-fertilizer',
      '/industries/power-steel',
      '/industries/food-dairy-brewery',
    ],
    purpose: 'Reinforce thermal expertise across sectors',
  },

  '/products/reactors-mixers-filters': {
    slug: '/products/reactors-mixers-filters',
    title: 'Reactors, Mixers & Filters',
    linksTo: [
      '/industries/food-dairy-brewery',
      '/industries/chemical-fertilizer',
      '/industries/pharma-biotech',
    ],
    purpose: 'Strengthen processing system cluster linking',
  },

  '/products/skid-systems': {
    slug: '/products/skid-systems',
    title: 'Skid-Mounted Systems',
    linksTo: [
      '/industries/oil-gas-marine-defence',
      '/services/epc-engineering',
      '/projects',
    ],
    purpose: 'Showcase modular integration and projects',
    relatedPages: [
      { href: '/services/epc-engineering', label: 'EPC Engineering', description: 'Complete system integration' },
      { href: '/projects', label: 'Project Gallery', description: 'Installed skid systems' },
    ],
  },

  // SERVICES PAGES
  '/services/epc-engineering': {
    slug: '/services/epc-engineering',
    title: 'Engineering & EPC Services',
    linksTo: ['/industries', '/projects', '/contact'],
    purpose: 'Convert service interest into inquiries',
    priority: 'high',
    relatedPages: [
      { href: '/projects', label: 'Project Gallery', description: 'Completed EPC projects' },
      { href: '/contact', label: 'Request Quote', description: 'Get project consultation' },
    ],
  },

  '/projects': {
    slug: '/projects',
    title: 'Project Gallery',
    linksTo: ['/industries', '/services/epc-engineering'],
    purpose: 'Promote case studies relevant to each segment',
    relatedPages: [
      { href: '/industries', label: 'Industry Solutions', description: 'Sector-specific expertise' },
      { href: '/services/epc-engineering', label: 'EPC Services', description: 'Project execution capabilities' },
    ],
  },

  '/clients-case-studies': {
    slug: '/clients-case-studies',
    title: 'Clientele & Case Studies',
    linksTo: ['/projects', '/products'],
    purpose: 'Build credibility and sector proof',
  },

  '/blog': {
    slug: '/blog',
    title: 'Blog / Knowledge Hub',
    linksTo: ['/products', '/industries', '/services/epc-engineering'],
    purpose: 'Use contextual anchors to reinforce core offerings',
  },

  '/careers': {
    slug: '/careers',
    title: 'Careers',
    linksTo: ['/about', '/about/infrastructure'],
    purpose: 'Cross-link to company culture and facility visuals',
  },

  '/contact': {
    slug: '/contact',
    title: 'Contact / Enquiry',
    linksTo: ['/', '/industries', '/services/epc-engineering', '/about/certifications'],
    purpose: 'Final conversion destination from each user path',
    priority: 'high',
  },
};

/**
 * Get related pages for a given slug
 */
export function getRelatedPages(slug: string): PageLinkingStrategy['relatedPages'] {
  return PAGE_LINKING_STRATEGY[slug]?.relatedPages || [];
}

/**
 * Get contextual links for a page
 */
export function getContextualLinks(slug: string): string[] {
  return PAGE_LINKING_STRATEGY[slug]?.linksTo || [];
}

/**
 * Generate anchor text suggestions based on target page
 */
export function generateAnchorText(targetSlug: string): string {
  const suggestions: Record<string, string[]> = {
    '/products/industrial-dryers': [
      'Explore our rotary dryer solutions',
      'View industrial drying systems',
      'Discover advanced drying technology',
    ],
    '/services/epc-engineering': [
      'See our EPC project capabilities',
      'Learn about turnkey solutions',
      'Explore engineering services',
    ],
    '/products/heat-exchangers': [
      'View heat exchanger specifications',
      'Explore thermal solutions',
      'See heat transfer equipment',
    ],
    '/industries': [
      'View industry solutions',
      'Explore sector-specific expertise',
      'See applications by industry',
    ],
    '/projects': [
      'View completed projects',
      'See project portfolio',
      'Explore case studies',
    ],
  };

  const options = suggestions[targetSlug] || ['Learn more'];
  return options[Math.floor(Math.random() * options.length)];
}

/**
 * Linking guidelines
 */
export const LINKING_GUIDELINES = {
  contextualLinksPerPage: { min: 3, max: 5 },
  anchorTextExamples: [
    'Explore our rotary dryer solutions',
    'See our EPC project capabilities',
    'View heat exchanger specifications',
    'Read case studies in your sector',
  ],
  authorityFlow: [
    'Link from high-traffic pages (Home, Sectors) to new Blog posts and Case Studies',
    'Ensure mutual linking between related pages',
  ],
};
