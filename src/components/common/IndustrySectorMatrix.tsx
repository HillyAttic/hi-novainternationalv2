'use client';

import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface MatrixItem {
  sector: string;
  sectorHref: string;
  equipment: {
    name: string;
    href: string;
  }[];
}

/**
 * Industry-Sector Matrix Component
 * Cross-section grid showing Sector ↔ Equipment relationships
 * Displays on /industries and /products pages
 */
export default function IndustrySectorMatrix() {
  const matrixData: MatrixItem[] = [
    {
      sector: 'Food, Dairy & Brewery',
      sectorHref: '/industries/food-dairy-brewery',
      equipment: [
        { name: 'Industrial Dryers', href: '/products/industrial-dryers' },
        { name: 'Heat Exchangers', href: '/products/heat-exchangers' },
        { name: 'Mixers', href: '/products/mixers' },
        { name: 'Reactors', href: '/products/reactors' },
      ],
    },
    {
      sector: 'Pharma & Biotech',
      sectorHref: '/industries/pharma-biotech',
      equipment: [
        { name: 'Reactors', href: '/products/reactors' },
        { name: 'Filtration Units', href: '/products/filtration-units' },
        { name: 'Cleanroom Systems', href: '/services/cleanroom' },
      ],
    },
    {
      sector: 'Petrochemical & Refinery',
      sectorHref: '/industries/petrochemical-refinery',
      equipment: [
        { name: 'Pressure Vessels', href: '/products/pressure-vessels' },
        { name: 'Heat Exchangers', href: '/products/heat-exchangers' },
        { name: 'Skid Systems', href: '/products/skid-systems' },
      ],
    },
    {
      sector: 'Chemical & Fertilizer',
      sectorHref: '/industries/chemical-fertilizer',
      equipment: [
        { name: 'Paddle Dryers', href: '/products/paddle-dryers' },
        { name: 'Reactors', href: '/products/reactors' },
        { name: 'Condensers', href: '/products/condensers' },
        { name: 'Calciners', href: '/products/calciners' },
      ],
    },
    {
      sector: 'Oil & Gas / Marine',
      sectorHref: '/industries/oil-gas-marine-defence',
      equipment: [
        { name: 'Skid Systems', href: '/products/skid-systems' },
        { name: 'Reactors', href: '/products/reactors' },
        { name: 'EPC Services', href: '/services/epc-engineering' },
      ],
    },
    {
      sector: 'Water Treatment',
      sectorHref: '/industries/water-etp-stp-ro',
      equipment: [
        { name: 'Filtration Units', href: '/products/filtration-units' },
        { name: 'EPC Engineering', href: '/services/epc-engineering' },
        { name: 'Reactors', href: '/products/reactors' },
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl p-8 border border-border">
      <div className="text-center mb-8">
        <h2 className="font-brand-headline text-2xl md:text-3xl font-bold text-foreground mb-3">
          Industry Solutions Matrix
        </h2>
        <p className="font-body text-muted-foreground max-w-2xl mx-auto">
          Explore our specialized equipment and services tailored for your industry
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {matrixData.map((item) => (
          <div
            key={item.sector}
            className="bg-white rounded-lg p-6 border border-border hover:border-primary engineering-transition precision-shadow-sm hover:precision-shadow-md"
          >
            <Link
              href={item.sectorHref}
              className="group flex items-center justify-between mb-4"
            >
              <h3 className="font-brand-headline text-lg font-semibold text-foreground group-hover:text-primary engineering-transition">
                {item.sector}
              </h3>
              <Icon
                name="ArrowRightIcon"
                size={18}
                className="text-primary group-hover:translate-x-1 engineering-transition"
              />
            </Link>

            <div className="space-y-2">
              {item.equipment.map((equip) => (
                <Link
                  key={equip.href}
                  href={equip.href}
                  className="group flex items-center space-x-2 text-sm font-body text-muted-foreground hover:text-primary engineering-transition"
                >
                  <Icon
                    name="CheckCircleIcon"
                    size={16}
                    className="text-accent flex-shrink-0"
                  />
                  <span className="group-hover:underline">{equip.name}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          href="/industries"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-accent text-accent-foreground font-cta rounded-md hover:bg-accent/90 engineering-transition precision-shadow hover:precision-shadow-lg"
        >
          <span>View All Industries</span>
          <Icon name="ArrowRightIcon" size={16} />
        </Link>
      </div>
    </div>
  );
}
