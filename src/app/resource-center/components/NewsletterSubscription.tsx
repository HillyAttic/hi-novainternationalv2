'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface NewsletterSubscriptionProps {
  className?: string;
}

const NewsletterSubscription = ({ className = '' }: NewsletterSubscriptionProps) => {
  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState<string[]>([]);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const interestOptions = [
    { id: 'industry-trends', label: 'Industry Trends' },
    { id: 'technical-guides', label: 'Technical Guides' },
    { id: 'product-updates', label: 'Product Updates' },
    { id: 'webinar-alerts', label: 'Webinar Alerts' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'compliance-updates', label: 'Compliance Updates' }
  ];

  const handleInterestChange = (interestId: string) => {
    setInterests(prev => 
      prev.includes(interestId)
        ? prev.filter(id => id !== interestId)
        : [...prev, interestId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && interests.length > 0) {
      setIsSubscribed(true);
      // Mock subscription logic
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
        setInterests([]);
      }, 3000);
    }
  };

  if (isSubscribed) {
    return (
      <section className={`bg-success text-success-foreground py-16 ${className}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-success-foreground/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="CheckCircleIcon" size={32} className="text-success-foreground" />
          </div>
          <h2 className="font-brand-headline text-3xl mb-4">Successfully Subscribed!</h2>
          <p className="font-body text-xl">
            Thank you for subscribing to Hi-Nova's Resource Center. You'll receive the latest engineering insights and technical resources directly in your inbox.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className={`bg-primary text-primary-foreground py-16 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="EnvelopeIcon" size={32} className="text-accent-foreground" />
          </div>
          
          <h2 className="font-brand-headline text-3xl lg:text-4xl mb-4">
            Stay Ahead with Industry Intelligence
          </h2>
          
          <p className="font-value-proposition text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Get the latest engineering insights, technical guides, and industry trends delivered directly to your inbox
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 precision-shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <label htmlFor="email" className="block font-cta text-foreground mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@company.com"
                className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-accent focus:border-accent engineering-transition"
                required
              />
              
              <div className="mt-6">
                <h3 className="font-cta text-foreground mb-4">Content Preferences *</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {interestOptions.map((option) => (
                    <label
                      key={option.id}
                      className="flex items-center space-x-3 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={interests.includes(option.id)}
                        onChange={() => handleInterestChange(option.id)}
                        className="w-4 h-4 text-accent border-border rounded focus:ring-accent"
                      />
                      <span className="font-body text-foreground">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-secondary/50 rounded-lg p-6">
              <h3 className="font-brand-headline text-xl text-foreground mb-4">
                What You'll Receive
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="DocumentTextIcon" size={20} className="text-accent mt-0.5" />
                  <div>
                    <h4 className="font-cta text-foreground">Weekly Technical Insights</h4>
                    <p className="font-body text-sm text-muted-foreground">
                      Engineering best practices and industry analysis
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Icon name="BellIcon" size={20} className="text-accent mt-0.5" />
                  <div>
                    <h4 className="font-cta text-foreground">Exclusive Webinar Access</h4>
                    <p className="font-body text-sm text-muted-foreground">
                      Early registration for expert-led sessions
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Icon name="DocumentArrowDownIcon" size={20} className="text-accent mt-0.5" />
                  <div>
                    <h4 className="font-cta text-foreground">Premium Resources</h4>
                    <p className="font-body text-sm text-muted-foreground">
                      White papers and technical guides first
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-border">
                <button
                  type="submit"
                  disabled={!email || interests.length === 0}
                  className="w-full bg-accent text-accent-foreground font-cta py-3 px-6 rounded-md hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed engineering-transition precision-shadow"
                >
                  Subscribe to Resource Center
                </button>
                
                <p className="font-body text-xs text-muted-foreground mt-3 text-center">
                  Unsubscribe anytime. We respect your privacy and never share your data.
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSubscription;