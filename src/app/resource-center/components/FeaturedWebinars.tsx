import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Webinar {
  id: string;
  title: string;
  description: string;
  presenter: string;
  duration: string;
  date: string;
  thumbnail: string;
  alt: string;
  registrations: number;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

interface FeaturedWebinarsProps {
  webinars: Webinar[];
  className?: string;
}

const FeaturedWebinars = ({ webinars, className = '' }: FeaturedWebinarsProps) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className={`bg-secondary/30 py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-brand-headline text-3xl lg:text-4xl text-foreground mb-4">
            Featured Webinar Series
          </h2>
          <p className="font-value-proposition text-xl text-muted-foreground max-w-3xl mx-auto">
            Join industry experts for in-depth technical sessions covering the latest in manufacturing technology and best practices
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {webinars.map((webinar, index) => (
            <div
              key={webinar.id}
              className={`bg-white rounded-lg precision-shadow hover:precision-shadow-lg engineering-transition overflow-hidden ${
                index === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              <div className={`grid ${index === 0 ? 'lg:grid-cols-2' : 'grid-cols-1'} gap-0`}>
                <div className="relative">
                  <div className={`${index === 0 ? 'aspect-video lg:aspect-square' : 'aspect-video'} overflow-hidden`}>
                    <AppImage
                      src={webinar.thumbnail}
                      alt={webinar.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button className="w-16 h-16 bg-accent rounded-full flex items-center justify-center hover:bg-accent/90 engineering-transition">
                      <Icon name="PlayIcon" size={24} className="text-accent-foreground ml-1" />
                    </button>
                  </div>
                  
                  <div className="absolute top-4 left-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getLevelColor(webinar.level)}`}>
                      {webinar.level}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                    <Icon name="CalendarIcon" size={16} />
                    <span className="font-body">{webinar.date}</span>
                    <span>•</span>
                    <Icon name="ClockIcon" size={16} />
                    <span className="font-body">{webinar.duration}</span>
                  </div>
                  
                  <h3 className={`font-brand-headline text-foreground mb-3 ${
                    index === 0 ? 'text-2xl' : 'text-xl'
                  }`}>
                    {webinar.title}
                  </h3>
                  
                  <p className="font-body text-muted-foreground mb-4 line-clamp-3">
                    {webinar.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <Icon name="UserIcon" size={16} className="text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-cta text-sm text-foreground">{webinar.presenter}</p>
                        <p className="font-body text-xs text-muted-foreground">{webinar.category}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <Icon name="UsersIcon" size={16} />
                      <span className="font-technical text-sm">{webinar.registrations}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-accent text-accent-foreground font-cta py-2 px-4 rounded-md hover:bg-accent/90 engineering-transition">
                      Watch Now
                    </button>
                    <button className="px-4 py-2 border border-border rounded-md hover:bg-secondary/50 engineering-transition">
                      <Icon name="BookmarkIcon" size={20} className="text-muted-foreground" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-primary text-primary-foreground font-cta px-8 py-3 rounded-md hover:bg-primary/90 engineering-transition precision-shadow">
            View All Webinars
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWebinars;