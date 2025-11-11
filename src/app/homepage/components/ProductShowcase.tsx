import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  applications: string[];
  href: string;
}

interface ProductShowcaseProps {
  className?: string;
}

const ProductShowcase = ({ className = '' }: ProductShowcaseProps) => {
  const featuredProducts: Product[] = [
  {
    id: 'industrial-dryers',
    name: 'Industrial Dryers',
    category: 'Drying Systems',
    description: 'Energy-efficient drying solutions with advanced heat recovery systems for optimal performance.',
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    alt: 'Large industrial drying equipment with stainless steel construction and control panels in manufacturing facility',
    applications: ['Food Processing', 'Chemical', 'Pharmaceutical'],
    href: '/product-detail'
  },
  {
    id: 'heat-exchangers',
    name: 'Heat Exchangers',
    category: 'Thermal Systems',
    description: 'Custom-designed heat exchangers for maximum thermal efficiency and corrosion resistance.',
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    alt: 'Industrial heat exchanger with multiple tube bundles and flanged connections in process plant',
    applications: ['Petrochemical', 'Power', 'HVAC'],
    href: '/product-detail'
  },
  {
    id: 'pressure-vessels',
    name: 'Pressure Vessels',
    category: 'Storage Systems',
    description: 'ASME-certified pressure vessels engineered for high-pressure applications and safety.',
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80",
    alt: 'Large cylindrical pressure vessel with inspection ports and safety valves in industrial setting',
    applications: ['Oil & Gas', 'Chemical', 'Power Generation'],
    href: '/product-detail'
  },
  {
    id: 'reactors-mixers',
    name: 'Reactors & Mixers',
    category: 'Process Equipment',
    description: 'Precision mixing solutions with variable speed control and hygienic design standards.',
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
    alt: 'Stainless steel industrial mixing tank with agitator and control system in clean processing environment',
    applications: ['Food & Dairy', 'Pharmaceutical', 'Chemicals'],
    href: '/product-detail'
  },
  {
    id: 'filtration-systems',
    name: 'Filtration Systems',
    category: 'Separation Equipment',
    description: 'Advanced filtration and separation systems for pure, contamination-free output.',
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    alt: 'Industrial filtration system with multiple filter cartridges and control panel in pharmaceutical facility',
    applications: ['Water Treatment', 'Chemical', 'Pharmaceutical'],
    href: '/product-detail'
  },
  {
    id: 'skid-mounted-units',
    name: 'Skid-Mounted Units',
    category: 'Complete Systems',
    description: 'Pre-engineered, modular process skids for fast installation and commissioning.',
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    alt: 'Complete skid-mounted process unit with pumps, heat exchangers, and control systems',
    applications: ['Oil & Gas', 'Chemical', 'Water Treatment'],
    href: '/product-detail'
  }];


  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-brand-headline text-3xl lg:text-4xl text-foreground">
            Comprehensive Range of Industrial Process Equipment
          </h2>
          <p className="font-value-proposition text-xl text-muted-foreground max-w-3xl mx-auto">
            Precision-engineered equipment designed for reliability, efficiency, and long-term performance across diverse industrial applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) =>
          <Link
            key={product.id}
            href={product.href}
            className="group bg-card rounded-xl overflow-hidden precision-shadow hover:precision-shadow-lg engineering-transition border border-border">

              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <AppImage
                src={product.image}
                alt={product.alt}
                className="w-full h-full object-cover group-hover:scale-105 engineering-transition" />

                <div className="absolute top-3 left-3">
                  <span className="bg-primary/90 text-primary-foreground font-technical text-xs px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-5 space-y-4">
                <div>
                  <h3 className="font-cta text-lg text-foreground group-hover:text-primary engineering-transition">
                    {product.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mt-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Applications */}
                <div>
                  <div className="font-technical text-xs text-muted-foreground mb-2">Applications:</div>
                  <div className="flex flex-wrap gap-1">
                    {product.applications.map((app, index) =>
                  <span
                    key={index}
                    className="bg-secondary text-secondary-foreground font-technical text-xs px-2 py-1 rounded">

                        {app}
                      </span>
                  )}
                  </div>
                </div>

                {/* View Details */}
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <span className="font-cta text-sm text-primary">View Details</span>
                  <Icon name="ArrowRightIcon" size={16} className="text-primary group-hover:translate-x-1 engineering-transition" />
                </div>
              </div>
            </Link>
          )}
        </div>

        {/* View All Products CTA */}
        <div className="text-center mt-12">
          <Link
            href="/product-detail"
            className="inline-flex items-center space-x-2 bg-primary text-primary-foreground font-cta px-8 py-3 rounded-lg hover:bg-primary/90 engineering-transition precision-shadow">

            <span>Explore All Products</span>
            <Icon name="ArrowRightIcon" size={20} />
          </Link>
        </div>
      </div>
    </section>);

};

export default ProductShowcase;