import Icon from '@/components/ui/AppIcon';

interface ResourceCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  count: number;
  color: string;
}

interface ResourceCategoriesProps {
  categories: ResourceCategory[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
  className?: string;
}

const ResourceCategories = ({ 
  categories, 
  activeCategory, 
  onCategoryChange, 
  className = '' 
}: ResourceCategoriesProps) => {
  return (
    <div className={`bg-white border-b border-border ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`text-left p-6 rounded-lg border-2 engineering-transition precision-shadow hover:precision-shadow-lg ${
                activeCategory === category.id
                  ? 'border-accent bg-accent/5' :'border-border hover:border-accent/50'
              }`}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${category.color}`}>
                <Icon name={category.icon as any} size={24} className="text-white" />
              </div>
              
              <h3 className="font-brand-headline text-lg text-foreground mb-2">
                {category.title}
              </h3>
              
              <p className="font-body text-sm text-muted-foreground mb-3 line-clamp-2">
                {category.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="font-technical text-xs text-accent font-medium">
                  {category.count} Resources
                </span>
                <Icon 
                  name="ArrowRightIcon" 
                  size={16} 
                  className={`engineering-transition ${
                    activeCategory === category.id ? 'text-accent' : 'text-muted-foreground'
                  }`} 
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourceCategories;