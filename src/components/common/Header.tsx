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

  // 7 Primary Navigation Menus
  const navigationMenus: NavItem[] = [
    {
      label: 'Industries',
      megaMenu: {
        columns: [
          {
            title: 'Core Industries',
            items: [
              { label: 'Food & Dairy', href: '/industries/food-dairy', description: 'Processing & packaging solutions' },
              { label: 'Pharma & Biotech', href: '/industries/pharma-biotech', description: 'GMP-compliant systems' },
              { label: 'Petrochemical & Refinery', href: '/industries/petrochemical', description: 'High-pressure systems' },
              { label: 'Chemical & Fertilizer', href: '/industries/chemical-fertilizer', description: 'Corrosion-resistant equipment' },
              { label: 'Oil & Gas / Marine / Defence', href: '/industries/oil-gas-marine', description: 'Specialized engineering' },
            ],
          },
          {
            title: 'Additional Sectors',
            items: [
              { label: 'Power & Steel', href: '/industries/power-steel', description: 'Heavy-duty applications' },
              { label: 'Textile & Paper', href: '/industries/textile-paper', description: 'Process optimization' },
              { label: 'Edible Oil & Carbon Black', href: '/industries/edible-oil', description: 'Specialized processing' },
              { label: 'Water & ETP/STP/RO', href: '/industries/water-treatment', description: 'Environmental solutions' },
              { label: 'Agriculture & Infrastructure', href: '/industries/agriculture', description: 'Industrial support systems' },
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
              { label: 'Rotary Dryers', href: '/products/rotary-dryers' },
              { label: 'Paddle Dryers', href: '/products/paddle-dryers' },
              { label: 'Flash Dryers', href: '/products/flash-dryers' },
              { label: 'Spray Dryers', href: '/products/spray-dryers' },
            ],
          },
          {
            title: 'Heat Transfer',
            items: [
              { label: 'Heat Exchangers', href: '/products/heat-exchangers' },
              { label: 'Condensers', href: '/products/condensers' },
              { label: 'Evaporators', href: '/products/evaporators' },
            ],
          },
          {
            title: 'Process Equipment',
            items: [
              { label: 'Reactors', href: '/products/reactors' },
              { label: 'Pressure Vessels', href: '/products/pressure-vessels' },
              { label: 'Mixers & Blenders', href: '/products/mixers' },
              { label: 'Filters & Separators', href: '/products/filters' },
              { label: 'Skid-Mounted Systems', href: '/products/skid-systems' },
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
              { label: 'Process Engineering', href: '/services/process-engineering', description: 'Design & optimization' },
              { label: 'EPC / Turnkey Projects', href: '/services/epc-turnkey', description: 'End-to-end solutions' },
              { label: 'Cleanroom Solutions', href: '/services/cleanroom', description: 'Controlled environments' },
            ],
          },
          {
            title: 'Support Services',
            items: [
              { label: 'Installation & Commissioning', href: '/services/installation', description: 'Expert deployment' },
              { label: 'Maintenance & Support', href: '/services/maintenance', description: 'Ongoing care' },
              { label: 'Technical Consulting', href: '/services/consulting', description: 'Expert guidance' },
            ],
          },
        ],
      },
    },
    {
      label: 'Projects',
      href: '/projects',
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
              { label: 'Vision, Mission & Values', href: '/about/vision-mission' },
              { label: 'Infrastructure & Capabilities', href: '/about/infrastructure' },
              { label: 'Certifications & Quality', href: '/about/certifications' },
              { label: 'Leadership Team', href: '/about/leadership' },
            ],
          },
          {
            title: 'Careers',
            items: [
              { label: 'Current Openings', href: '/careers/jobs' },
              { label: 'Company Culture', href: '/careers/culture' },
              { label: 'Internships', href: '/careers/internships' },
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
            <Link href="/homepage" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center engineering-transition group-hover:scale-105">
                <svg
                  className="w-6 h-6 text-primary-foreground"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
                  <path d="M8 11l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <div className="hidden sm:block">
                <div className="font-brand-headline text-xl text-primary">Hi-Nova</div>
                <div className="font-technical text-xs text-muted-foreground -mt-1">Manufacturing Hub</div>
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
              href="https://wa.me/919876543210"
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
              href="https://wa.me/919876543210"
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