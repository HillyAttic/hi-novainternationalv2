'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface ConsultationService {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  duration: string;
  availability: string;
}

interface TechnicalConsultationProps {
  className?: string;
}

const TechnicalConsultation = ({ className = '' }: TechnicalConsultationProps) => {
  const [selectedService, setSelectedService] = useState<string>('technical-review');

  const consultationServices: ConsultationService[] = [
  {
    id: 'technical-review',
    title: 'Technical Review & Assessment',
    description: 'Comprehensive evaluation of your existing systems and requirements analysis for optimal equipment selection.',
    icon: 'DocumentMagnifyingGlassIcon',
    features: [
    'Process flow analysis',
    'Equipment compatibility assessment',
    'Performance optimization recommendations',
    'Compliance & safety evaluation'],

    duration: '60-90 minutes',
    availability: 'Available daily'
  },
  {
    id: 'virtual-tour',
    title: 'Virtual Facility Tour',
    description: 'Interactive virtual tour of our manufacturing facility and equipment demonstrations via video conference.',
    icon: 'VideoCameraIcon',
    features: [
    'Live equipment demonstrations',
    'Manufacturing process walkthrough',
    'Quality control showcase',
    'Q&A with technical experts'],

    duration: '45-60 minutes',
    availability: 'Mon-Fri, 10 AM - 5 PM IST'
  },
  {
    id: 'application-engineering',
    title: 'Application Engineering Support',
    description: 'Detailed technical consultation for custom applications and specialized engineering requirements.',
    icon: 'CogIcon',
    features: [
    'Custom design consultation',
    'Material selection guidance',
    'Process optimization strategies',
    'Integration planning'],

    duration: '90-120 minutes',
    availability: 'By appointment'
  },
  {
    id: 'project-planning',
    title: 'Project Planning Session',
    description: 'Comprehensive project planning including timeline, milestones, and implementation strategy discussion.',
    icon: 'CalendarDaysIcon',
    features: [
    'Project timeline development',
    'Resource requirement planning',
    'Risk assessment & mitigation',
    'Implementation roadmap'],

    duration: '120 minutes',
    availability: 'Flexible scheduling'
  }];


  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
  };

  const handleBookConsultation = () => {
    const selectedServiceData = consultationServices.find((service) => service.id === selectedService);
    alert(`Booking consultation for: ${selectedServiceData?.title}\n\nOur team will contact you within 24 hours to schedule your session.`);
  };

  return (
    <section className={`py-16 bg-gradient-to-br from-secondary/20 to-secondary/5 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="AcademicCapIcon" size={24} className="text-primary" />
            <span className="font-technical text-primary text-sm uppercase tracking-wider">
              Expert Consultation
            </span>
          </div>
          <h2 className="font-brand-headline text-3xl lg:text-4xl text-foreground mb-4">
            Technical Consultation Services
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Connect with our engineering experts for personalized guidance, technical assessments, and project planning sessions tailored to your specific requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Service Selection */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {consultationServices.map((service) =>
              <div
                key={service.id}
                className={`bg-white rounded-xl p-6 precision-shadow hover:precision-shadow-lg engineering-transition cursor-pointer border-2 ${
                selectedService === service.id ? 'border-primary' : 'border-transparent'}`
                }
                onClick={() => handleServiceSelect(service.id)}>

                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  selectedService === service.id ? 'bg-primary' : 'bg-primary/10'}`
                  }>
                      <Icon
                      name={service.icon as any}
                      size={24}
                      className={selectedService === service.id ? 'text-white' : 'text-primary'} />

                    </div>
                    <div className="flex-1">
                      <h3 className="font-cta text-lg text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Icon name="ClockIcon" size={16} className="text-primary" />
                          <span className="font-technical text-xs text-foreground">{service.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="CalendarIcon" size={16} className="text-primary" />
                          <span className="font-technical text-xs text-muted-foreground">{service.availability}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Selected Service Details */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 precision-shadow sticky top-8">
              {(() => {
                const service = consultationServices.find((s) => s.id === selectedService);
                if (!service) return null;

                return (
                  <>
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Icon name={service.icon as any} size={32} className="text-white" />
                      </div>
                      <h3 className="font-cta text-xl text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground">
                        {service.description}
                      </p>
                    </div>

                    <div className="space-y-4 mb-6">
                      <h4 className="font-cta text-foreground">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) =>
                        <li key={index} className="flex items-start space-x-2">
                            <Icon name="CheckIcon" size={16} className="text-success mt-0.5 flex-shrink-0" />
                            <span className="font-body text-sm text-muted-foreground">{feature}</span>
                          </li>
                        )}
                      </ul>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="font-body text-sm text-muted-foreground">Duration:</span>
                        <span className="font-technical text-sm text-foreground">{service.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-body text-sm text-muted-foreground">Availability:</span>
                        <span className="font-technical text-sm text-foreground">{service.availability}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-body text-sm text-muted-foreground">Cost:</span>
                        <span className="font-cta text-sm text-success">Complimentary</span>
                      </div>
                    </div>

                    <button
                      onClick={handleBookConsultation}
                      className="w-full bg-primary text-primary-foreground font-cta py-3 px-4 rounded-lg hover:bg-primary/90 engineering-transition precision-shadow">

                      Book This Consultation
                    </button>

                    <div className="mt-6 pt-6 border-t border-border">
                      <div className="flex items-center space-x-3">
                        <AppImage
                          src="https://img.rocket.new/generatedImages/rocket_gen_img_18dcf5075-1762249154734.png"
                          alt="Professional headshot of senior engineering consultant in navy suit with confident smile"
                          className="w-12 h-12 rounded-full object-cover" />

                        <div>
                          <div className="font-cta text-sm text-foreground">Rajesh Kumar</div>
                          <div className="font-body text-xs text-muted-foreground">Senior Technical Consultant</div>
                        </div>
                      </div>
                    </div>
                  </>);

              })()}
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-white rounded-xl p-8 precision-shadow">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="ShieldCheckIcon" size={32} className="text-accent" />
              </div>
              <h3 className="font-cta text-lg text-foreground mb-2">Confidentiality Assured</h3>
              <p className="font-body text-sm text-muted-foreground">
                All technical discussions are covered under strict confidentiality agreements to protect your proprietary information.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="UserGroupIcon" size={32} className="text-success" />
              </div>
              <h3 className="font-cta text-lg text-foreground mb-2">Expert Team Access</h3>
              <p className="font-body text-sm text-muted-foreground">
                Connect with our team of 25+ experienced engineers specializing in various industrial applications.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="DocumentTextIcon" size={32} className="text-primary" />
              </div>
              <h3 className="font-cta text-lg text-foreground mb-2">Detailed Documentation</h3>
              <p className="font-body text-sm text-muted-foreground">
                Receive comprehensive consultation reports with recommendations and technical specifications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default TechnicalConsultation;