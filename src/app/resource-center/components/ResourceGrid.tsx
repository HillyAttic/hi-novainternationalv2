import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'whitepaper' | 'webinar' | 'guide' | 'compliance';
  category: string;
  image: string;
  alt: string;
  author: string;
  publishDate: string;
  readTime: string;
  downloadCount?: number;
  tags: string[];
  featured: boolean;
}

interface ResourceGridProps {
  resources: Resource[];
  className?: string;
}

const ResourceGrid = ({ resources, className = '' }: ResourceGridProps) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return 'DocumentTextIcon';
      case 'whitepaper': return 'DocumentArrowDownIcon';
      case 'webinar': return 'PlayIcon';
      case 'guide': return 'BookOpenIcon';
      case 'compliance': return 'ShieldCheckIcon';
      default: return 'DocumentTextIcon';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-500';
      case 'whitepaper': return 'bg-purple-500';
      case 'webinar': return 'bg-green-500';
      case 'guide': return 'bg-orange-500';
      case 'compliance': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blog': return 'Blog Post';
      case 'whitepaper': return 'White Paper';
      case 'webinar': return 'Webinar';
      case 'guide': return 'Technical Guide';
      case 'compliance': return 'Compliance Doc';
      default: return 'Resource';
    }
  };

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((resource) => (
          <article
            key={resource.id}
            className={`bg-white rounded-lg precision-shadow hover:precision-shadow-lg engineering-transition overflow-hidden ${
              resource.featured ? 'ring-2 ring-accent/20' : ''
            }`}
          >
            <div className="relative">
              <div className="aspect-video overflow-hidden">
                <AppImage
                  src={resource.image}
                  alt={resource.alt}
                  className="w-full h-full object-cover engineering-transition hover:scale-105"
                />
              </div>
              
              <div className="absolute top-4 left-4">
                <div className={`${getTypeColor(resource.type)} text-white px-3 py-1 rounded-full flex items-center space-x-2`}>
                  <Icon name={getTypeIcon(resource.type) as any} size={14} />
                  <span className="font-technical text-xs font-medium">
                    {getTypeLabel(resource.type)}
                  </span>
                </div>
              </div>
              
              {resource.featured && (
                <div className="absolute top-4 right-4">
                  <div className="bg-accent text-accent-foreground px-2 py-1 rounded-full">
                    <Icon name="StarIcon" size={14} variant="solid" />
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-6">
              <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                <span className="font-body">{resource.author}</span>
                <span>•</span>
                <span className="font-body">{resource.publishDate}</span>
                <span>•</span>
                <span className="font-body">{resource.readTime}</span>
              </div>
              
              <h3 className="font-brand-headline text-xl text-foreground mb-3 line-clamp-2">
                {resource.title}
              </h3>
              
              <p className="font-body text-muted-foreground mb-4 line-clamp-3">
                {resource.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {resource.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs font-body"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <Link
                  href={`/resource-center/${resource.id}`}
                  className="font-cta text-accent hover:text-accent/80 engineering-transition flex items-center space-x-2"
                >
                  <span>Read More</span>
                  <Icon name="ArrowRightIcon" size={16} />
                </Link>
                
                {resource.downloadCount && (
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <Icon name="ArrowDownTrayIcon" size={16} />
                    <span className="font-technical text-sm">{resource.downloadCount}</span>
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ResourceGrid;