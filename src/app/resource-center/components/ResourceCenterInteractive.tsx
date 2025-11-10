'use client';

import { useState, useEffect } from 'react';
import ResourceCategories from './ResourceCategories';
import ResourceGrid from './ResourceGrid';
import FeaturedWebinars from './FeaturedWebinars';
import NewsletterSubscription from './NewsletterSubscription';

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

interface ResourceCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  count: number;
  color: string;
}

const ResourceCenterInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const categories: ResourceCategory[] = [
  {
    id: 'all',
    title: 'All Resources',
    description: 'Complete library of technical content, guides, and industry insights',
    icon: 'SquaresPlusIcon',
    count: 247,
    color: 'bg-primary'
  },
  {
    id: 'technical-guides',
    title: 'Technical Guides',
    description: 'Equipment selection, maintenance, and troubleshooting resources',
    icon: 'WrenchScrewdriverIcon',
    count: 89,
    color: 'bg-accent'
  },
  {
    id: 'industry-insights',
    title: 'Industry Insights',
    description: 'Market trends, regulatory updates, and technology advances',
    icon: 'ChartBarIcon',
    count: 76,
    color: 'bg-success'
  },
  {
    id: 'compliance-safety',
    title: 'Compliance & Safety',
    description: 'Regulatory documentation and safety protocols for manufacturing',
    icon: 'ShieldCheckIcon',
    count: 82,
    color: 'bg-warning'
  }];


  const mockResources: Resource[] = [
  {
    id: '1',
    title: 'Advanced Heat Exchanger Design Principles for Pharmaceutical Applications',
    description: 'Comprehensive guide covering thermal efficiency optimization, material selection, and regulatory compliance for pharmaceutical heat exchangers. Includes case studies from recent FDA-approved facilities.',
    type: 'guide',
    category: 'technical-guides',
    image: "https://images.unsplash.com/photo-1698580868042-8a1bfab0c4c0",
    alt: 'Modern pharmaceutical manufacturing facility with stainless steel heat exchanger equipment and control panels',
    author: 'Dr. Rajesh Kumar',
    publishDate: 'Nov 8, 2024',
    readTime: '12 min read',
    downloadCount: 1247,
    tags: ['Heat Exchangers', 'Pharmaceutical', 'Design'],
    featured: true
  },
  {
    id: '2',
    title: 'Industry 4.0 Integration in Process Equipment Manufacturing',
    description: 'Exploring IoT sensors, predictive maintenance, and digital twin technology implementation in modern manufacturing environments. Real-world examples from leading facilities.',
    type: 'blog',
    category: 'industry-insights',
    image: "https://images.unsplash.com/photo-1557052951-41e27652ce0e",
    alt: 'Industrial IoT sensors and digital monitoring equipment in modern manufacturing plant with blue LED indicators',
    author: 'Priya Sharma',
    publishDate: 'Nov 6, 2024',
    readTime: '8 min read',
    tags: ['Industry 4.0', 'IoT', 'Manufacturing'],
    featured: false
  },
  {
    id: '3',
    title: 'FDA Compliance Guidelines for Food Processing Equipment',
    description: 'Updated regulatory requirements for food-grade equipment design, material specifications, and validation protocols. Essential reading for food industry professionals.',
    type: 'compliance',
    category: 'compliance-safety',
    image: "https://images.unsplash.com/photo-1579706065216-7c0a02af6ace",
    alt: 'Food safety inspector in white coat examining stainless steel processing equipment in clean manufacturing environment',
    author: 'Michael Chen',
    publishDate: 'Nov 4, 2024',
    readTime: '15 min read',
    downloadCount: 892,
    tags: ['FDA', 'Food Processing', 'Compliance'],
    featured: false
  },
  {
    id: '4',
    title: 'Pressure Vessel Design Optimization Using Advanced Materials',
    description: 'Latest developments in high-performance alloys and composite materials for pressure vessel construction. Cost-benefit analysis and performance comparisons included.',
    type: 'whitepaper',
    category: 'technical-guides',
    image: "https://images.unsplash.com/photo-1642721084262-db9a35314f4c",
    alt: 'Large stainless steel pressure vessel with inspection ports and safety valves in industrial manufacturing facility',
    author: 'Dr. Sarah Williams',
    publishDate: 'Nov 2, 2024',
    readTime: '20 min read',
    downloadCount: 634,
    tags: ['Pressure Vessels', 'Materials', 'Design'],
    featured: true
  },
  {
    id: '5',
    title: 'Energy Efficiency Trends in Industrial Drying Systems',
    description: 'Analysis of emerging technologies for reducing energy consumption in industrial drying applications. ROI calculations and implementation strategies provided.',
    type: 'blog',
    category: 'industry-insights',
    image: "https://images.unsplash.com/photo-1568641762254-8d3d88b4b1d7",
    alt: 'Modern industrial drying system with energy monitoring displays and efficient heat recovery equipment',
    author: 'Amit Patel',
    publishDate: 'Oct 30, 2024',
    readTime: '10 min read',
    tags: ['Energy Efficiency', 'Drying Systems', 'Sustainability'],
    featured: false
  },
  {
    id: '6',
    title: 'Cleanroom Equipment Validation Protocols',
    description: 'Step-by-step validation procedures for pharmaceutical and biotech cleanroom equipment. Includes templates and checklists for compliance documentation.',
    type: 'guide',
    category: 'compliance-safety',
    image: "https://images.unsplash.com/photo-1716643863908-379bfbbfc4f1",
    alt: 'Pharmaceutical cleanroom with technicians in full protective suits operating sterile processing equipment',
    author: 'Dr. Lisa Thompson',
    publishDate: 'Oct 28, 2024',
    readTime: '18 min read',
    downloadCount: 1156,
    tags: ['Cleanroom', 'Validation', 'Pharmaceutical'],
    featured: false
  }];


  const mockWebinars: Webinar[] = [
  {
    id: '1',
    title: 'Advanced Process Optimization in Pharmaceutical Manufacturing',
    description: 'Join our expert panel as they discuss cutting-edge techniques for optimizing pharmaceutical manufacturing processes, including real-time monitoring, predictive analytics, and quality control innovations that are transforming the industry.',
    presenter: 'Dr. Rajesh Kumar & Team',
    duration: '90 minutes',
    date: 'Nov 15, 2024',
    thumbnail: "https://images.unsplash.com/photo-1581093199592-d3c46ae94f40",
    alt: 'Pharmaceutical manufacturing expert presenting process optimization data on large screen to audience of engineers',
    registrations: 1247,
    category: 'Pharmaceutical Engineering',
    level: 'Advanced'
  },
  {
    id: '2',
    title: 'Heat Exchanger Maintenance Best Practices',
    description: 'Learn proven maintenance strategies to maximize heat exchanger performance and extend equipment lifespan. Covers preventive maintenance schedules, troubleshooting common issues, and cost-effective repair techniques.',
    presenter: 'Sarah Williams',
    duration: '60 minutes',
    date: 'Nov 22, 2024',
    thumbnail: "https://images.unsplash.com/photo-1669524587694-7f3b3b773ead",
    alt: 'Industrial maintenance engineer demonstrating heat exchanger inspection techniques with specialized tools',
    registrations: 892,
    category: 'Equipment Maintenance',
    level: 'Intermediate'
  },
  {
    id: '3',
    title: 'Regulatory Compliance in Food Processing Equipment',
    description: 'Navigate the complex landscape of food safety regulations and equipment compliance requirements. Essential guidance for ensuring your equipment meets FDA, USDA, and international food safety standards.',
    presenter: 'Michael Chen',
    duration: '75 minutes',
    date: 'Nov 29, 2024',
    thumbnail: "https://images.unsplash.com/photo-1650204767806-84512c9f9417",
    alt: 'Food safety compliance expert reviewing documentation with food processing equipment in background',
    registrations: 634,
    category: 'Regulatory Compliance',
    level: 'Beginner'
  }];


  const filteredResources = activeCategory === 'all' ?
  mockResources :
  mockResources.filter((resource) => resource.category === activeCategory);

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="animate-pulse">
          <div className="h-64 bg-gray-200"></div>
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[1, 2, 3, 4].map((i) =>
              <div key={i} className="h-32 bg-gray-200 rounded-lg"></div>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) =>
              <div key={i} className="h-96 bg-gray-200 rounded-lg"></div>
              )}
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      <ResourceCategories
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory} />

      
      <ResourceGrid resources={filteredResources} />
      
      <FeaturedWebinars webinars={mockWebinars} />
      
      <NewsletterSubscription />
    </div>);

};

export default ResourceCenterInteractive;