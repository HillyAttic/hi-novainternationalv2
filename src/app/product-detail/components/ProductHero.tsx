import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface ProductHeroProps {
  product: {
    id: string;
    name: string;
    category: string;
    description: string;
    mainImage: string;
    mainImageAlt: string;
    gallery: Array<{
      id: string;
      image: string;
      alt: string;
    }>;
    keyFeatures: string[];
    applications: string[];
  };
}

const ProductHero = ({ product }: ProductHeroProps) => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-secondary/20 rounded-lg overflow-hidden">
              <AppImage
                src={product.mainImage}
                alt={product.mainImageAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.gallery.map((image) => (
                <div key={image.id} className="aspect-square bg-secondary/20 rounded-lg overflow-hidden">
                  <AppImage
                    src={image.image}
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-105 engineering-transition cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-technical text-sm">
                  {product.category}
                </span>
              </div>
              <h1 className="font-brand-headline text-3xl lg:text-4xl text-foreground mb-4">
                {product.name}
              </h1>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="font-brand-headline text-xl text-foreground mb-4">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon name="CheckCircleIcon" size={20} className="text-success flex-shrink-0" />
                    <span className="font-body text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div>
              <h3 className="font-brand-headline text-xl text-foreground mb-4">Applications</h3>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((application, index) => (
                  <span
                    key={index}
                    className="bg-secondary text-secondary-foreground px-3 py-1 rounded-md font-body text-sm"
                  >
                    {application}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="bg-accent text-accent-foreground font-cta px-8 py-3 rounded-md hover:bg-accent/90 engineering-transition precision-shadow hover:precision-shadow-lg flex items-center justify-center space-x-2">
                <Icon name="DocumentArrowDownIcon" size={20} />
                <span>Download Specifications</span>
              </button>
              <button className="bg-primary text-primary-foreground font-cta px-8 py-3 rounded-md hover:bg-primary/90 engineering-transition precision-shadow hover:precision-shadow-lg flex items-center justify-center space-x-2">
                <Icon name="ChatBubbleLeftRightIcon" size={20} />
                <span>Request Quote</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;