import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  alt: string;
  readTime: string;
  category: string;
  href: string;
}

interface BlogHighlightsSectionProps {
  className?: string;
}

const BlogHighlightsSection = ({ className = '' }: BlogHighlightsSectionProps) => {
  const featuredArticles: Article[] = [
    {
      id: 'article-1',
      title: 'How Spray Drying Optimizes Dairy Powder Production',
      excerpt: 'Explore the science behind spray drying technology and how it enhances product quality, reduces processing time, and increases yield in dairy manufacturing operations.',
      image: "https://images.unsplash.com/photo-1612758456015-3d41b5d04c8b",
      alt: 'Modern dairy processing facility with spray drying equipment and control systems',
      readTime: '8 min read',
      category: 'Food Processing',
      href: '/resource-center'
    },
    {
      id: 'article-2',
      title: 'Selecting the Right Heat Exchanger for Corrosive Environments',
      excerpt: 'A comprehensive guide to choosing heat exchanger materials and designs that withstand aggressive chemical processes while maintaining optimal thermal efficiency.',
      image: "https://images.unsplash.com/photo-1710322419301-60150805bc32",
      alt: 'Industrial heat exchanger with corrosion-resistant materials in chemical processing plant',
      readTime: '12 min read',
      category: 'Chemical Engineering',
      href: '/resource-center'
    },
    {
      id: 'article-3',
      title: 'Sustainable Energy Recovery in Chemical Plants',
      excerpt: 'Discover innovative energy recovery systems that reduce operational costs and environmental impact while improving overall plant efficiency in chemical processing.',
      image: "https://images.unsplash.com/photo-1630522521616-b5b4cf458621",
      alt: 'Chemical plant with energy recovery systems and sustainable processing equipment',
      readTime: '10 min read',
      category: 'Sustainability',
      href: '/resource-center'
    }
  ];

  return (
    <section className={`py-16 lg:py-20 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-brand-headline text-3xl lg:text-4xl text-foreground">
            Insights from Our Engineering Experts
          </h2>
          <p className="font-value-proposition text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest trends, technologies, and best practices in industrial process equipment and manufacturing
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {featuredArticles.map((article) => (
            <Link
              key={article.id}
              href={article.href}
              className="group bg-card rounded-xl overflow-hidden precision-shadow hover:precision-shadow-lg engineering-transition border border-border"
            >
              {/* Article Image */}
              <div className="relative h-48 overflow-hidden">
                <AppImage
                  src={article.image}
                  alt={article.alt}
                  className="w-full h-full object-cover group-hover:scale-105 engineering-transition" />

                <div className="absolute top-3 left-3">
                  <span className="bg-primary/90 text-primary-foreground font-technical text-xs px-2 py-1 rounded">
                    {article.category}
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  <span className="bg-white/90 text-muted-foreground font-technical text-xs px-2 py-1 rounded">
                    {article.readTime}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-cta text-lg text-foreground group-hover:text-primary engineering-transition leading-tight">
                    {article.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mt-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                {/* Read More */}
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <span className="font-cta text-sm text-primary">Read Article</span>
                  <Icon name="ArrowRightIcon" size={16} className="text-primary group-hover:translate-x-1 engineering-transition" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Articles CTA */}
        <div className="text-center">
          <Link
            href="/resource-center"
            className="inline-flex items-center space-x-2 bg-secondary text-secondary-foreground font-cta px-8 py-3 rounded-lg hover:bg-secondary/90 engineering-transition precision-shadow"
          >
            <span>Visit Knowledge Hub</span>
            <Icon name="ArrowRightIcon" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogHighlightsSection;