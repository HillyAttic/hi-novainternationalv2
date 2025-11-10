import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface RelatedProduct {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  keyFeatures: string[];
  priceRange: string;
}

interface RelatedProductsProps {
  products: RelatedProduct[];
}

const RelatedProducts = ({ products }: RelatedProductsProps) => {
  return (
    <section className="bg-muted py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-brand-headline text-3xl lg:text-4xl text-foreground mb-4">
            Related Products
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore complementary equipment solutions that work seamlessly with your selected product
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg precision-shadow hover:precision-shadow-lg engineering-transition group">
              {/* Product Image */}
              <div className="aspect-video bg-secondary/20 rounded-t-lg overflow-hidden">
                <AppImage
                  src={product.image}
                  alt={product.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 engineering-transition"
                />
              </div>

              {/* Product Content */}
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded-full font-technical text-xs">
                    {product.category}
                  </span>
                </div>

                <h3 className="font-brand-headline text-xl text-foreground mb-3 group-hover:text-primary engineering-transition">
                  {product.name}
                </h3>

                <p className="font-body text-muted-foreground text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="font-body text-sm text-foreground mb-2">Key Features:</h4>
                  <div className="space-y-1">
                    {product.keyFeatures.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="CheckCircleIcon" size={14} className="text-success flex-shrink-0" />
                        <span className="font-body text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-body text-sm text-muted-foreground">Starting from:</span>
                  <span className="font-technical text-lg text-primary">{product.priceRange}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2">
                  <Link
                    href="/product-detail"
                    className="flex-1 bg-primary text-primary-foreground font-cta px-4 py-2 rounded-md hover:bg-primary/90 engineering-transition text-center text-sm"
                  >
                    View Details
                  </Link>
                  <button className="flex-1 bg-secondary text-secondary-foreground font-cta px-4 py-2 rounded-md hover:bg-secondary/80 engineering-transition text-sm flex items-center justify-center space-x-1">
                    <Icon name="PlusIcon" size={16} />
                    <span>Compare</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products */}
        <div className="mt-12 text-center">
          <Link
            href="/product-detail"
            className="inline-flex items-center space-x-2 bg-accent text-accent-foreground font-cta px-8 py-3 rounded-md hover:bg-accent/90 engineering-transition precision-shadow hover:precision-shadow-lg"
          >
            <span>View All Products</span>
            <Icon name="ArrowRightIcon" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;