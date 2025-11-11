'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface HeaderProps {
  className?: string;
}

interface MegaMenuItem {
  label: string;
  href: string;
  description?: string;
}

interface NavItem {
  label: string;
  href?: string;
  megaMenu?: {
    columns: {
      title: string;
      items: MegaMenuItem[];
    }[];
  };
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  // 7 Primary Navigation Menus - Hub-and-Spoke Architecture
  const navigationMenus: NavItem[] = [
    {
      label: 'Industries',
      megaMenu: {
        columns: [
          {
            title: 'Core Industries',
            items: [
              { label: 'Food, Dairy & Brewery', href: '/industries/food-dairy-brewery', description: 'Process tanks, fermenters, spray dryers' },
              { label: 'Pharmaceutical & Biotech', href: '/industries/pharma-biotech', description: 'Reactors, WFI plants, vacuum dryers' },
              { label: 'Petrochemical & Refinery', href: '/industries/petrochemical-refinery', description: 'Distillation columns, heat exchangers' },
              { label: 'Chemical & Fertilizer', href: '/industries/chemical-fertilizer', description: 'Reactors, crystallizers, paddle dryers' },
              { label: 'Oil & Gas, Marine & Defence', href: '/industries/oil-gas-marine-defence', description: 'Skid units, pressure vessels, calciners' },
            ],
          },
          {
            title: 'Additional Sectors',
            items: [
              { label: 'Power & Steel', href: '/industries/power-steel', description: 'Boiler systems, rotary dryers, kilns' },
              { label: 'Textile, Dyes & Paper', href: '/industries/textile-dyes-paper', description: 'Dyeing reactors, band dryers' },
              { label: 'Edible Oil, Carbon Black & Soda Ash', href: '/industries/edible-oil-carbon-black-soda-ash', description: 'Refining systems, calciners' },
              { label: 'Water / ETP / STP / RO', href: '/industries/water-etp-stp-ro', description: 'ETP/STP/RO, thermal sludge dryers' },
              { label: 'Agriculture & Infrastructure', href: '/industries/agriculture-infrastructure', description: 'Irrigation systems, storage silos' },
            ],
          },
        ],
      },
    },
    {
      label: 'Products',
      megaMenu: {
        columns: [
          {
            title: 'Drying Systems',
            items: [
              { label: 'Industrial Dryers Hub', href: '/products/industrial-dryers', description: 'Complete drying solutions' },
              { label: 'Rotary Dryers', href: '/products/rotary-dryers' },
              { label: 'Paddle Dryers', href: '/products/paddle-dryers' },
              { label: 'Flash Dryers', href: '/products/flash-dryers' },
              { label: 'Spray Dryers', href: '/products/spray-dryers' },
              { label: 'Fluidized Bed Dryers', href: '/products/fluidized-bed-dryers' },
              { label: 'Band Dryers', href: '/products/band-dryers' },
            ],
          },
          {
            title: 'Heat Transfer',
            items: [
              { label: 'Heat Exchangers', href: '/products/heat-exchangers' },
              { label: 'Pressure Vessels', href: '/products/pressure-vessels' },
              { label: 'Condensers', href: '/products/condensers' },
              { label: 'Evaporators', href: '/products/evaporators' },
            ],
          },
          {
            title: 'Process Equipment',
            items: [
              { label: 'Reactors', href: '/products/reactors' },
              { label: 'Mixers & Blenders', href: '/products/mixers' },
              { label: 'Filtration Units', href: '/products/filtration-units' },
              { label: 'Agitators', href: '/products/agitators' },
              { label: 'Skid-Mounted Systems', href: '/products/skid-systems' },
              { label: 'Calciners', href: '/products/calciners' },
            ],
          },
        ],
      },
    },
    {
      label: 'Services',
      megaMenu: {
        columns: [
          {
            title: 'Engineering Services',
            items: [
              { label: 'EPC Engineering', href: '/services/epc-engineering', description: 'End-to-end turnkey solutions' },
              { label: 'Process Engineering', href: '/services/process-engineering', description: 'Design & optimization' },
              { label: 'Cleanroom Solutions', href: '/services/cleanroom', description: 'Controlled environments' },
              { label: 'Structural Fabrication', href: '/services/structural-fabrication', description: 'Heavy fabrication work' },
            ],
          },
          {
            title: 'Support Services',
            items: [
              { label: 'Installation & Commissioning', href: '/services/installation', description: 'Expert deployment' },
              { label: 'Maintenance & Support', href: '/services/maintenance', description: 'Ongoing care' },
              { label: 'Technical Consulting', href: '/services/consulting', description: 'Expert guidance' },
              { label: 'Civil Projects', href: '/services/civil-projects', description: 'Infrastructure development' },
            ],
          },
        ],
      },
    },
    {
      label: 'Projects',
      megaMenu: {
        columns: [
          {
            title: 'Portfolio',
            items: [
              { label: 'Major Projects', href: '/major-projects', description: 'Our completed projects portfolio' },
              { label: 'Featured Projects', href: '/projects', description: 'Highlighted case studies' },
            ],
          },
        ],
      },
    },
    {
      label: 'Resources',
      megaMenu: {
        columns: [
          {
            title: 'Documentation',
            items: [
              { label: 'Product Brochures', href: '/resources/brochures' },
              { label: 'Technical Spec Sheets', href: '/resources/spec-sheets' },
              { label: 'Certificates & Compliance', href: '/resources/certificates' },
              { label: 'User Manuals', href: '/resources/manuals' },
            ],
          },
          {
            title: 'Knowledge Center',
            items: [
              { label: 'Case Studies', href: '/resources/case-studies' },
              { label: 'White Papers', href: '/resources/white-papers' },
              { label: 'FAQs', href: '/resources/faqs' },
            ],
          },
        ],
      },
    },
    {
      label: 'About',
      megaMenu: {
        columns: [
          {
            title: 'Company',
            items: [
              { label: 'About Us', href: '/about', description: 'Company overview' },
              { label: 'Vision, Mission & Values', href: '/about/vision-mission-values', description: 'Our guiding principles' },
              { label: 'Infrastructure & Capabilities', href: '/about/infrastructure', description: 'World-class facilities' },
              { label: 'Certifications & Quality', href: '/about/certifications', description: 'Quality assurance' },
            ],
          },
          {
            title: 'More',
            items: [
              { label: 'Sustainability', href: '/sustainability', description: 'Environmental commitment' },
              { label: 'Careers', href: '/careers', description: 'Join our team' },
              { label: 'Case Studies', href: '/clients-case-studies', description: 'Client success stories' },
            ],
          },
        ],
      },
    },
    {
      label: 'Blog',
      href: '/blog',
    },
  ];

  const handleMouseEnter = (label: string) => {
    setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`bg-white border-b border-border precision-shadow sticky top-0 z-50 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/homepage" className="group">
              <div className="w-auto h-10 engineering-transition group-hover:scale-105">
                <img
                  src="/assets/images/move.svg"
                  alt="Hi-Nova Logo"
                  className="h-full w-auto"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navigationMenus.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.megaMenu && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="font-body text-sm text-foreground hover:text-primary engineering-transition px-3 py-2 rounded-md hover:bg-secondary/50 block"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    className="font-body text-sm text-foreground hover:text-primary engineering-transition px-3 py-2 rounded-md hover:bg-secondary/50 flex items-center space-x-1"
                  >
                    <span>{item.label}</span>
                    <Icon 
                      name="ChevronDownIcon" 
                      size={14} 
                      className={`engineering-transition ${activeMenu === item.label ? 'rotate-180' : ''}`} 
                    />
                  </button>
                )}

                {/* Mega Menu Dropdown */}
                {item.megaMenu && activeMenu === item.label && (
                  <div className="absolute left-0 top-full mt-1 w-screen max-w-4xl bg-white border border-border rounded-lg precision-shadow-xl z-50">
                    <div className="p-6">
                      <div className={`grid gap-8 ${item.megaMenu.columns.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
                        {item.megaMenu.columns.map((column) => (
                          <div key={column.title}>
                            <h3 className="font-brand-headline text-sm font-semibold text-primary mb-3 uppercase tracking-wide">
                              {column.title}
                            </h3>
                            <ul className="space-y-2">
                              {column.items.map((menuItem) => (
                                <li key={menuItem.href}>
                                  <Link
                                    href={menuItem.href}
                                    className="group block p-2 rounded-md hover:bg-secondary/50 engineering-transition"
                                  >
                                    <div className="font-body text-sm text-foreground group-hover:text-primary font-medium">
                                      {menuItem.label}
                                    </div>
                                    {menuItem.description && (
                                      <div className="font-body text-xs text-muted-foreground mt-0.5">
                                        {menuItem.description}
                                      </div>
                                    )}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Utility Actions */}
          <div className="hidden xl:flex items-center space-x-3">
            <Link
              href="/careers"
              className="font-body text-sm text-foreground hover:text-primary engineering-transition px-3 py-2"
            >
              Careers
            </Link>
            <Link
              href="/contact-quote-request"
              className="bg-accent text-accent-foreground font-cta text-sm px-5 py-2 rounded-md hover:bg-accent/90 engineering-transition precision-shadow hover:precision-shadow-lg flex items-center space-x-2"
            >
              <Icon name="DocumentTextIcon" size={16} />
              <span>Get Quote</span>
            </Link>
            <a
              href="https://wa.me/919371101366"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 engineering-transition precision-shadow hover:precision-shadow-lg"
              aria-label="WhatsApp"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={18} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden flex items-center space-x-2">
            <a
              href="https://wa.me/919371101366"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 engineering-transition"
              aria-label="WhatsApp"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={18} />
            </a>
            <button
              onClick={toggleMobileMenu}
              className="text-foreground hover:text-primary p-2 rounded-md engineering-transition"
              aria-label="Toggle mobile menu"
            >
              <Icon
                name={isMobileMenuOpen ? "XMarkIcon" : "Bars3Icon"}
                size={24}
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="xl:hidden border-t border-border bg-white max-h-[80vh] overflow-y-auto">
            <div className="px-4 py-4 space-y-1">
              {navigationMenus.map((item) => (
                <div key={item.label}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="block font-body text-foreground hover:text-primary px-3 py-2 rounded-md hover:bg-secondary/50 engineering-transition"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div>
                      <div className="font-body font-semibold text-primary px-3 py-2 text-sm uppercase tracking-wide">
                        {item.label}
                      </div>
                      {item.megaMenu?.columns.map((column) => (
                        <div key={column.title} className="ml-4 mb-3">
                          <div className="font-body text-xs text-muted-foreground px-3 py-1 uppercase tracking-wide">
                            {column.title}
                          </div>
                          {column.items.map((menuItem) => (
                            <Link
                              key={menuItem.href}
                              href={menuItem.href}
                              onClick={closeMobileMenu}
                              className="block font-body text-sm text-foreground hover:text-primary px-3 py-1.5 rounded-md hover:bg-secondary/50 engineering-transition"
                            >
                              {menuItem.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-border space-y-2">
                <Link
                  href="/careers"
                  onClick={closeMobileMenu}
                  className="block font-body text-foreground hover:text-primary px-3 py-2 rounded-md hover:bg-secondary/50 engineering-transition"
                >
                  Careers
                </Link>
                <Link
                  href="/contact-quote-request"
                  onClick={closeMobileMenu}
                  className="block bg-accent text-accent-foreground font-cta px-6 py-3 rounded-md text-center hover:bg-accent/90 engineering-transition precision-shadow"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;