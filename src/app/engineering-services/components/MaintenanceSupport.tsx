'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ServicePlan {
  id: number;
  name: string;
  description: string;
  features: string[];
  responseTime: string;
  coverage: string;
  price: string;
  popular?: boolean;
}

interface SupportService {
  id: number;
  title: string;
  description: string;
  icon: string;
  availability: string;
}

interface MaintenanceSupportProps {
  className?: string;
}

const MaintenanceSupport = ({ className = '' }: MaintenanceSupportProps) => {
  const [activeTab, setActiveTab] = useState<'plans' | 'services' | 'portal'>('plans');

  const servicePlans: ServicePlan[] = [
    {
      id: 1,
      name: "Essential Support",
      description: "Basic maintenance support for standard equipment operations",
      features: [
        "Scheduled Maintenance",
        "Remote Diagnostics",
        "Spare Parts Supply",
        "Technical Documentation",
        "Email Support"
      ],
      responseTime: "48 hours",
      coverage: "Business Hours",
      price: "₹2,50,000/year"
    },
    {
      id: 2,
      name: "Professional Support",
      description: "Comprehensive support with priority response and on-site services",
      features: [
        "All Essential Features",
        "Priority Response",
        "On-site Maintenance",
        "Performance Optimization",
        "Phone & Email Support",
        "Quarterly Reviews"
      ],
      responseTime: "24 hours",
      coverage: "Extended Hours",
      price: "₹4,50,000/year",
      popular: true
    },
    {
      id: 3,
      name: "Enterprise Support",
      description: "Premium support with dedicated engineering team and 24/7 coverage",
      features: [
        "All Professional Features",
        "Dedicated Engineer",
        "24/7 Emergency Support",
        "Predictive Maintenance",
        "Custom Training Programs",
        "Monthly Health Reports"
      ],
      responseTime: "4 hours",
      coverage: "24/7 Coverage",
      price: "₹8,50,000/year"
    }
  ];

  const supportServices: SupportService[] = [
    {
      id: 1,
      title: "Emergency Response",
      description: "24/7 emergency support for critical equipment failures with rapid response team deployment",
      icon: "ExclamationTriangleIcon",
      availability: "24/7"
    },
    {
      id: 2,
      title: "Preventive Maintenance",
      description: "Scheduled maintenance programs to prevent equipment failures and optimize performance",
      icon: "WrenchScrewdriverIcon",
      availability: "Scheduled"
    },
    {
      id: 3,
      title: "Performance Optimization",
      description: "Advanced diagnostics and optimization services to enhance equipment efficiency and output",
      icon: "ChartBarSquareIcon",
      availability: "On-demand"
    },
    {
      id: 4,
      title: "Spare Parts Management",
      description: "Comprehensive spare parts inventory management with guaranteed availability and fast delivery",
      icon: "CubeIcon",
      availability: "Always"
    }
  ];

  const tabs = [
    { id: 'plans', label: 'Service Plans', icon: 'DocumentTextIcon' },
    { id: 'services', label: 'Support Services', icon: 'WrenchScrewdriverIcon' },
    { id: 'portal', label: 'Support Portal', icon: 'ComputerDesktopIcon' }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-brand-headline text-3xl lg:text-4xl text-foreground mb-4">
            Maintenance & Support Services
          </h2>
          <p className="font-value-proposition text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive maintenance and support services ensuring optimal equipment performance, minimal downtime, and long-term operational excellence.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-muted/50 p-1 rounded-lg">
            <div className="flex space-x-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-md font-cta text-sm engineering-transition ${
                    activeTab === tab.id
                      ? 'bg-primary text-primary-foreground precision-shadow'
                      : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
                  }`}
                >
                  <Icon name={tab.icon as any} size={16} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Service Plans Tab */}
        {activeTab === 'plans' && (
          <div className="grid lg:grid-cols-3 gap-8">
            {servicePlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-card rounded-lg p-8 precision-shadow hover:precision-shadow-lg engineering-transition ${
                  plan.popular ? 'ring-2 ring-primary' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-cta">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="font-brand-headline text-xl text-card-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="font-body text-muted-foreground mb-4">
                    {plan.description}
                  </p>
                  <div className="font-brand-headline text-3xl text-primary mb-2">
                    {plan.price}
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-muted/30 p-3 rounded-lg">
                      <div className="font-cta text-sm text-foreground">Response Time</div>
                      <div className="font-body text-xs text-muted-foreground">{plan.responseTime}</div>
                    </div>
                    <div className="bg-muted/30 p-3 rounded-lg">
                      <div className="font-cta text-sm text-foreground">Coverage</div>
                      <div className="font-body text-xs text-muted-foreground">{plan.coverage}</div>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Icon name="CheckCircleIcon" size={16} className="text-success flex-shrink-0" />
                        <span className="font-body text-sm text-card-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`w-full py-3 rounded-md font-cta engineering-transition ${
                    plan.popular
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'border border-primary text-primary hover:bg-primary/5'
                  }`}
                >
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Support Services Tab */}
        {activeTab === 'services' && (
          <div className="grid md:grid-cols-2 gap-8">
            {supportServices.map((service) => (
              <div key={service.id} className="bg-card rounded-lg p-6 precision-shadow hover:precision-shadow-lg engineering-transition">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg flex-shrink-0">
                    <Icon name={service.icon as any} size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-brand-headline text-lg text-card-foreground">
                        {service.title}
                      </h3>
                      <span className="bg-success/10 text-success px-2 py-1 rounded text-xs font-cta">
                        {service.availability}
                      </span>
                    </div>
                    <p className="font-body text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <button className="bg-primary text-primary-foreground font-cta px-4 py-2 rounded-md hover:bg-primary/90 engineering-transition text-sm">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Support Portal Tab */}
        {activeTab === 'portal' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-lg p-8 precision-shadow">
              <div className="text-center mb-8">
                <h3 className="font-brand-headline text-2xl text-card-foreground mb-4">
                  Customer Support Portal
                </h3>
                <p className="font-body text-muted-foreground">
                  Access comprehensive support resources, submit service requests, and track maintenance activities through our dedicated customer portal.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-3">
                    <Icon name="TicketIcon" size={24} className="text-primary" />
                  </div>
                  <h4 className="font-cta text-card-foreground mb-2">Service Requests</h4>
                  <p className="font-body text-sm text-muted-foreground">Submit and track service requests with real-time status updates</p>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-success/10 rounded-lg mx-auto mb-3">
                    <Icon name="DocumentArrowDownIcon" size={24} className="text-success" />
                  </div>
                  <h4 className="font-cta text-card-foreground mb-2">Documentation</h4>
                  <p className="font-body text-sm text-muted-foreground">Access manuals, drawings, and technical documentation</p>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-warning/10 rounded-lg mx-auto mb-3">
                    <Icon name="CalendarDaysIcon" size={24} className="text-warning" />
                  </div>
                  <h4 className="font-cta text-card-foreground mb-2">Maintenance Scheduling</h4>
                  <p className="font-body text-sm text-muted-foreground">Schedule preventive maintenance and service appointments</p>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-lg mx-auto mb-3">
                    <Icon name="ShoppingCartIcon" size={24} className="text-accent" />
                  </div>
                  <h4 className="font-cta text-card-foreground mb-2">Spare Parts</h4>
                  <p className="font-body text-sm text-muted-foreground">Order spare parts and track delivery status</p>
                </div>
              </div>

              <div className="text-center">
                <button className="bg-primary text-primary-foreground font-cta px-8 py-3 rounded-md hover:bg-primary/90 engineering-transition precision-shadow">
                  Access Support Portal
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MaintenanceSupport;