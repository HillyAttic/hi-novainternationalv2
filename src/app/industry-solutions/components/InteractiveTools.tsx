'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Tool {
  id: string;
  name: string;
  description: string;
  type: 'calculator' | 'selector' | 'configurator' | 'assessment';
  industry: string[];
  features: string[];
  icon: string;
}

interface InteractiveToolsProps {
  className?: string;
}

const InteractiveTools = ({ className = '' }: InteractiveToolsProps) => {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  const tools: Tool[] = [
    {
      id: 'equipment-selector',
      name: 'Equipment Selection Tool',
      description: 'Interactive tool to help you select the right equipment based on your specific process requirements and operating conditions.',
      type: 'selector',
      industry: ['All Industries'],
      features: [
        'Process parameter input',
        'Equipment recommendations',
        'Specification comparison',
        'Cost estimation'
      ],
      icon: 'CogIcon'
    },
    {
      id: 'roi-calculator',
      name: 'ROI Calculator',
      description: 'Calculate return on investment for equipment upgrades and new installations with detailed financial analysis.',
      type: 'calculator',
      industry: ['All Industries'],
      features: [
        'Energy savings calculation',
        'Maintenance cost analysis',
        'Payback period estimation',
        'NPV and IRR analysis'
      ],
      icon: 'CalculatorIcon'
    },
    {
      id: 'compliance-checker',
      name: 'Compliance Assessment',
      description: 'Evaluate your current equipment against industry standards and regulatory requirements for various sectors.',
      type: 'assessment',
      industry: ['Food & Dairy', 'Pharma & Biotech', 'Petrochemical'],
      features: [
        'Regulatory gap analysis',
        'Compliance scoring',
        'Upgrade recommendations',
        'Documentation checklist'
      ],
      icon: 'ClipboardDocumentCheckIcon'
    },
    {
      id: 'system-configurator',
      name: 'System Configurator',
      description: 'Design and configure complete process systems with real-time validation and optimization suggestions.',
      type: 'configurator',
      industry: ['Chemical Processing', 'Water Treatment', 'Power & Energy'],
      features: [
        'Drag-and-drop interface',
        'Real-time validation',
        'Performance optimization',
        '3D visualization'
      ],
      icon: 'PuzzlePieceIcon'
    },
    {
      id: 'energy-analyzer',
      name: 'Energy Efficiency Analyzer',
      description: 'Analyze energy consumption patterns and identify opportunities for efficiency improvements in your facility.',
      type: 'calculator',
      industry: ['Manufacturing', 'Power & Energy', 'Petrochemical'],
      features: [
        'Energy audit simulation',
        'Efficiency benchmarking',
        'Improvement recommendations',
        'Cost-benefit analysis'
      ],
      icon: 'BoltIcon'
    },
    {
      id: 'maintenance-planner',
      name: 'Maintenance Planning Tool',
      description: 'Plan preventive maintenance schedules and predict equipment lifecycle to minimize downtime and costs.',
      type: 'assessment',
      industry: ['All Industries'],
      features: [
        'Maintenance scheduling',
        'Lifecycle prediction',
        'Spare parts planning',
        'Downtime optimization'
      ],
      icon: 'WrenchScrewdriverIcon'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'calculator': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'selector': return 'bg-green-100 text-green-700 border-green-200';
      case 'configurator': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'assessment': return 'bg-orange-100 text-orange-700 border-orange-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'calculator': return 'Calculator';
      case 'selector': return 'Selection Tool';
      case 'configurator': return 'Configurator';
      case 'assessment': return 'Assessment';
      default: return 'Tool';
    }
  };

  return (
    <section className={`py-20 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-brand-headline text-3xl lg:text-4xl text-foreground mb-6">
            Interactive Engineering Tools
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Powerful online tools to help you make informed decisions about equipment selection, system design, and process optimization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="bg-card rounded-2xl p-6 precision-shadow hover:precision-shadow-lg engineering-transition cursor-pointer"
              onClick={() => setSelectedTool(selectedTool === tool.id ? null : tool.id)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Icon 
                    name={tool.icon as any} 
                    size={24} 
                    className="text-primary-foreground" 
                  />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-body border ${getTypeColor(tool.type)}`}>
                  {getTypeLabel(tool.type)}
                </span>
              </div>
              
              <h3 className="font-brand-headline text-xl text-foreground mb-3">
                {tool.name}
              </h3>
              
              <p className="font-body text-muted-foreground mb-4 leading-relaxed text-sm">
                {tool.description}
              </p>
              
              <div className="space-y-3">
                <div>
                  <div className="font-body text-sm font-medium text-foreground mb-2">
                    Applicable Industries:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {tool.industry.map((industry, index) => (
                      <span
                        key={index}
                        className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs font-body"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
                
                {selectedTool === tool.id && (
                  <div className="border-t border-border pt-4 mt-4">
                    <div className="font-body text-sm font-medium text-foreground mb-2">
                      Key Features:
                    </div>
                    <div className="space-y-1">
                      {tool.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <Icon name="CheckIcon" size={14} className="text-success mr-2 flex-shrink-0" />
                          <span className="font-body text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="mt-6 pt-4 border-t border-border">
                <button className="w-full bg-accent text-accent-foreground font-cta px-4 py-3 rounded-lg hover:bg-accent/90 engineering-transition precision-shadow flex items-center justify-center space-x-2">
                  <Icon name="PlayIcon" size={16} />
                  <span>Launch Tool</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Tools */}
        <div className="mt-16">
          <div className="bg-muted rounded-2xl p-8 lg:p-12 text-center">
            <h3 className="font-brand-headline text-2xl lg:text-3xl text-foreground mb-4">
              More Tools Coming Soon
            </h3>
            <p className="font-body text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're continuously developing new interactive tools to support your engineering decisions. Request a custom tool for your specific industry needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-quote-request"
                className="inline-flex items-center space-x-2 bg-primary text-primary-foreground font-cta px-6 py-3 rounded-lg hover:bg-primary/90 engineering-transition precision-shadow"
              >
                <Icon name="LightBulbIcon" size={18} />
                <span>Request Custom Tool</span>
              </Link>
              <Link
                href="/resource-center"
                className="inline-flex items-center space-x-2 border-2 border-primary text-primary font-cta px-6 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground engineering-transition"
              >
                <Icon name="BellIcon" size={18} />
                <span>Get Notified</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTools;