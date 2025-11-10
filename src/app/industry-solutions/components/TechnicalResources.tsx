'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Resource {
  id: string;
  title: string;
  type: 'guide' | 'whitepaper' | 'checklist' | 'calculator';
  description: string;
  industry: string;
  downloadCount: number;
  fileSize: string;
  pages?: number;
}

interface TechnicalResourcesProps {
  className?: string;
}

const TechnicalResources = ({ className = '' }: TechnicalResourcesProps) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const resources: Resource[] = [
    {
      id: 'food-safety-guide',
      title: 'Food Safety Equipment Selection Guide',
      type: 'guide',
      description: 'Comprehensive guide for selecting HACCP-compliant processing equipment for food and dairy applications.',
      industry: 'Food & Dairy',
      downloadCount: 1247,
      fileSize: '2.8 MB',
      pages: 24
    },
    {
      id: 'pharma-gmp-checklist',
      title: 'GMP Compliance Checklist for Pharmaceutical Equipment',
      type: 'checklist',
      description: 'Essential checklist ensuring pharmaceutical equipment meets Good Manufacturing Practice standards.',
      industry: 'Pharma & Biotech',
      downloadCount: 892,
      fileSize: '1.2 MB',
      pages: 8
    },
    {
      id: 'petrochemical-safety',
      title: 'Petrochemical Safety Systems White Paper',
      type: 'whitepaper',
      description: 'In-depth analysis of safety systems and risk mitigation strategies for petrochemical processing.',
      industry: 'Petrochemical',
      downloadCount: 634,
      fileSize: '4.1 MB',
      pages: 32
    },
    {
      id: 'heat-exchanger-calculator',
      title: 'Heat Exchanger Sizing Calculator',
      type: 'calculator',
      description: 'Interactive tool for calculating optimal heat exchanger specifications based on process requirements.',
      industry: 'Power & Energy',
      downloadCount: 1156,
      fileSize: '0.8 MB'
    },
    {
      id: 'water-treatment-guide',
      title: 'Industrial Water Treatment System Design Guide',
      type: 'guide',
      description: 'Technical guide for designing efficient water treatment systems for industrial applications.',
      industry: 'Water Treatment',
      downloadCount: 743,
      fileSize: '3.2 MB',
      pages: 28
    },
    {
      id: 'mining-equipment-selection',
      title: 'Mining Equipment Selection Criteria',
      type: 'whitepaper',
      description: 'Detailed criteria and considerations for selecting robust equipment for mining operations.',
      industry: 'Mining & Minerals',
      downloadCount: 521,
      fileSize: '2.5 MB',
      pages: 20
    }
  ];

  const filterTypes = [
    { id: 'all', label: 'All Resources', count: resources.length },
    { id: 'guide', label: 'Technical Guides', count: resources.filter(r => r.type === 'guide').length },
    { id: 'whitepaper', label: 'White Papers', count: resources.filter(r => r.type === 'whitepaper').length },
    { id: 'checklist', label: 'Checklists', count: resources.filter(r => r.type === 'checklist').length },
    { id: 'calculator', label: 'Calculators', count: resources.filter(r => r.type === 'calculator').length }
  ];

  const filteredResources = activeFilter === 'all' 
    ? resources 
    : resources.filter(resource => resource.type === activeFilter);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'guide': return 'BookOpenIcon';
      case 'whitepaper': return 'DocumentTextIcon';
      case 'checklist': return 'ClipboardDocumentCheckIcon';
      case 'calculator': return 'CalculatorIcon';
      default: return 'DocumentIcon';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'guide': return 'bg-blue-100 text-blue-700';
      case 'whitepaper': return 'bg-purple-100 text-purple-700';
      case 'checklist': return 'bg-green-100 text-green-700';
      case 'calculator': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section className={`py-20 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-brand-headline text-3xl lg:text-4xl text-foreground mb-6">
            Technical Resources & Documentation
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Access comprehensive technical documentation, selection guides, and industry-specific resources to support your equipment decisions and project planning.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterTypes.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-body text-sm engineering-transition ${
                activeFilter === filter.id
                  ? 'bg-primary text-primary-foreground precision-shadow'
                  : 'bg-card text-foreground hover:bg-secondary/50 border border-border'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource) => (
            <div
              key={resource.id}
              className="bg-card rounded-2xl p-6 precision-shadow hover:precision-shadow-lg engineering-transition"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getTypeColor(resource.type)}`}>
                  <Icon 
                    name={getTypeIcon(resource.type) as any} 
                    size={24} 
                  />
                </div>
                <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-body">
                  {resource.industry}
                </span>
              </div>
              
              <h3 className="font-brand-headline text-lg text-foreground mb-3 leading-tight">
                {resource.title}
              </h3>
              
              <p className="font-body text-muted-foreground mb-4 leading-relaxed text-sm">
                {resource.description}
              </p>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-6">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    <Icon name="ArrowDownTrayIcon" size={14} className="mr-1" />
                    {resource.downloadCount.toLocaleString()}
                  </span>
                  <span className="flex items-center">
                    <Icon name="DocumentIcon" size={14} className="mr-1" />
                    {resource.fileSize}
                  </span>
                  {resource.pages && (
                    <span className="flex items-center">
                      <Icon name="BookOpenIcon" size={14} className="mr-1" />
                      {resource.pages} pages
                    </span>
                  )}
                </div>
              </div>
              
              <Link
                href="/resource-center"
                className="w-full bg-accent text-accent-foreground font-cta px-4 py-3 rounded-lg text-center hover:bg-accent/90 engineering-transition precision-shadow flex items-center justify-center space-x-2"
              >
                <Icon name="ArrowDownTrayIcon" size={16} />
                <span>Download Resource</span>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-8 lg:p-12">
            <h3 className="font-brand-headline text-2xl lg:text-3xl text-primary-foreground mb-4">
              Need Custom Technical Documentation?
            </h3>
            <p className="font-body text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Our engineering team can create project-specific documentation, compliance reports, and technical specifications tailored to your requirements.
            </p>
            <Link
              href="/contact-quote-request"
              className="inline-flex items-center space-x-2 bg-accent text-accent-foreground font-cta px-8 py-4 rounded-lg hover:bg-accent/90 engineering-transition precision-shadow-lg"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={20} />
              <span>Request Custom Documentation</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalResources;