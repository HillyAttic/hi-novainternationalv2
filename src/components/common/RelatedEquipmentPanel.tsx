'use client';

import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface RelatedEquipment {
  name: string;
  href: string;
  description: string;
  category?: string;
}

interface RelatedEquipmentPanelProps {
  items: RelatedEquipment[];
  title?: string;
  className?: string;
}

/**
 * RelatedEquipmentPanel Component
 * Displays 3-6 related equipment items at the end of product pages
 * Strengthens lateral product interlinking
 */
export default function RelatedEquipmentPanel({
  items,
  title = 'Related Equipment',
  className = '',
}: RelatedEquipmentPanelProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className={`bg-secondary/20 rounded-xl p-8 border border-border ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-brand-headline text-2xl md:text-3xl font-bold text-foreground mb-2">
            {title}
          </h2>
          <p className="font-body text-muted-foreground">
            Complete your process line with complementary equipment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group bg-white rounded-lg p-6 border border-border hover:border-primary hover:bg-secondary/30 engineering-transition precision-shadow-sm hover:precision-shadow-md"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  {item.category && (
                    <div className="text-xs font-body text-accent uppercase tracking-wide mb-1">
                      {item.category}
                    </div>
                  )}
                  <h3 className="font-brand-headline text-lg font-semibold text-foreground group-hover:text-primary engineering-transition">
                    {item.name}
                  </h3>
                </div>
                <Icon
                  name="ArrowRightIcon"
                  size={20}
                  className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 engineering-transition flex-shrink-0 mt-1"
                />
              </div>
              <p className="font-body text-sm text-muted-foreground">
                {item.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/products"
            className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 font-body font-medium engineering-transition"
          >
            <span>View All Products</span>
            <Icon name="ArrowRightIcon" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/**
 * Predefined related equipment sets for common product categories
 */
export const RELATED_EQUIPMENT_SETS = {
  dryingSystems: [
    {
      name: 'Rotary Dryers',
      href: '/products/rotary-dryers',
      description: 'Continuous rotary drying for bulk materials',
      category: 'Drying',
    },
    {
      name: 'Paddle Dryers',
      href: '/products/paddle-dryers',
      description: 'Indirect heat transfer for sensitive materials',
      category: 'Drying',
    },
    {
      name: 'Spray Dryers',
      href: '/products/spray-dryers',
      description: 'Atomization drying for liquid feeds',
      category: 'Drying',
    },
    {
      name: 'Flash Dryers',
      href: '/products/flash-dryers',
      description: 'Rapid drying in pneumatic conveying',
      category: 'Drying',
    },
    {
      name: 'Fluidized Bed Dryers',
      href: '/products/fluidized-bed-dryers',
      description: 'Uniform particle drying with excellent heat transfer',
      category: 'Drying',
    },
    {
      name: 'Band Dryers',
      href: '/products/band-dryers',
      description: 'Conveyor belt drying for continuous processing',
      category: 'Drying',
    },
  ],
  heatTransfer: [
    {
      name: 'Heat Exchangers',
      href: '/products/heat-exchangers',
      description: 'Shell & tube, plate type for efficient thermal transfer',
      category: 'Heat Transfer',
    },
    {
      name: 'Condensers',
      href: '/products/condensers',
      description: 'Vapor recovery and cooling systems',
      category: 'Heat Transfer',
    },
    {
      name: 'Evaporators',
      href: '/products/evaporators',
      description: 'Concentration and solvent recovery',
      category: 'Heat Transfer',
    },
  ],
  processEquipment: [
    {
      name: 'Reactors',
      href: '/products/reactors',
      description: 'Chemical, pharmaceutical, and food processing reactors',
      category: 'Process',
    },
    {
      name: 'Pressure Vessels',
      href: '/products/pressure-vessels',
      description: 'ASME-certified vessels for high-pressure applications',
      category: 'Process',
    },
    {
      name: 'Mixers & Blenders',
      href: '/products/mixers',
      description: 'Agitators, homogenizers, and blending systems',
      category: 'Process',
    },
    {
      name: 'Filtration Units',
      href: '/products/filtration-units',
      description: 'Separation and purification systems',
      category: 'Process',
    },
    {
      name: 'Skid-Mounted Systems',
      href: '/products/skid-systems',
      description: 'Modular, pre-assembled process units',
      category: 'Process',
    },
  ],
};
