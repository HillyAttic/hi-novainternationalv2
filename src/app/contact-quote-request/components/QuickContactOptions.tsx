'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactOption {
  id: string;
  title: string;
  description: string;
  icon: string;
  action: string;
  availability: string;
  color: string;
}

interface QuickContactOptionsProps {
  className?: string;
}

const QuickContactOptions = ({ className = '' }: QuickContactOptionsProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const contactOptions: ContactOption[] = [
    {
      id: 'phone',
      title: 'Call Our Experts',
      description: 'Speak directly with our engineering team for immediate technical assistance',
      icon: 'PhoneIcon',
      action: '+91 98339 65129',
      availability: 'Mon-Sat, 9 AM - 6 PM IST',
      color: 'bg-success'
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp Support',
      description: 'Quick technical queries and instant responses from our support team',
      icon: 'ChatBubbleLeftEllipsisIcon',
      action: '+91 98203 39871',
      availability: '24/7 Available',
      color: 'bg-accent'
    },
    {
      id: 'email',
      title: 'Email Inquiry',
      description: 'Detailed technical discussions and comprehensive project documentation',
      icon: 'EnvelopeIcon',
      action: 'rohidas@hi-novainternational.com',
      availability: 'Response within 24 hours',
      color: 'bg-primary'
    },
    {
      id: 'callback',
      title: 'Schedule Callback',
      description: 'Book a convenient time for detailed technical consultation',
      icon: 'CalendarDaysIcon',
      action: 'Schedule Now',
      availability: 'Flexible timing available',
      color: 'bg-warning'
    }
  ];

  const handleOptionClick = (optionId: string) => {
    setSelectedOption(optionId === selectedOption ? null : optionId);
  };

  return (
    <section className={`py-16 bg-secondary/30 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-brand-headline text-3xl lg:text-4xl text-foreground mb-4">
            Multiple Ways to Connect
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your preferred communication method. Our team is ready to assist with technical guidance, project planning, and detailed quotations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactOptions.map((option) => (
            <div
              key={option.id}
              className={`bg-white rounded-xl p-6 precision-shadow hover:precision-shadow-lg engineering-transition cursor-pointer border-2 ${
                selectedOption === option.id ? 'border-primary' : 'border-transparent'
              }`}
              onClick={() => handleOptionClick(option.id)}
            >
              <div className={`w-12 h-12 ${option.color} rounded-lg flex items-center justify-center mb-4`}>
                <Icon name={option.icon as any} size={24} className="text-white" />
              </div>
              
              <h3 className="font-cta text-lg text-foreground mb-2">
                {option.title}
              </h3>
              
              <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
                {option.description}
              </p>
              
              <div className="space-y-2">
                <div className="font-technical text-sm text-primary">
                  {option.action}
                </div>
                <div className="font-body text-xs text-muted-foreground">
                  {option.availability}
                </div>
              </div>
              
              {selectedOption === option.id && (
                <div className="mt-4 pt-4 border-t border-border">
                  <button className="w-full bg-primary text-primary-foreground font-cta py-2 px-4 rounded-md hover:bg-primary/90 engineering-transition">
                    {option.id === 'callback' ? 'Book Consultation' : 'Contact Now'}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl p-6 precision-shadow max-w-2xl mx-auto">
            <Icon name="MapPinIcon" size={24} className="text-primary mx-auto mb-3" />
            <h3 className="font-cta text-lg text-foreground mb-2">Visit Our Facilities</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <p className="font-body text-sm font-semibold text-foreground mb-2">Manufacturing Facility</p>
                <p className="font-body text-sm text-muted-foreground">
                  Plot No. B-29, Anand Nagar Additional MIDC<br />
                  Ambernath East, Dist. Thane<br />
                  Maharashtra 421 301, India
                </p>
              </div>
              <div>
                <p className="font-body text-sm font-semibold text-foreground mb-2">Corporate Office</p>
                <p className="font-body text-sm text-muted-foreground">
                  Plot No. B-64, Anand Nagar Additional MIDC<br />
                  Ambernath East, Dist. Thane<br />
                  Maharashtra 421 301, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickContactOptions;