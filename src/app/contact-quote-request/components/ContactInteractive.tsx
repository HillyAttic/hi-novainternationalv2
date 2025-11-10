'use client';

import { useState, useEffect } from 'react';
import ContactHero from './ContactHero';
import QuickContactOptions from './QuickContactOptions';
import IntelligentQuoteForm from './IntelligentQuoteForm';
import TechnicalConsultation from './TechnicalConsultation';
import GlobalOffices from './GlobalOffices';

const ContactInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="animate-pulse">
          <div className="h-96 bg-secondary/20"></div>
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="space-y-8">
              <div className="h-8 bg-secondary/20 rounded w-1/3 mx-auto"></div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[...Array(4)]?.map((_, i) => (
                  <div key={i} className="h-48 bg-secondary/20 rounded-xl"></div>
                ))}
              </div>
              <div className="h-96 bg-secondary/20 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <ContactHero />
      <QuickContactOptions />
      <IntelligentQuoteForm />
      <TechnicalConsultation />
      <GlobalOffices />
    </div>
  );
};

export default ContactInteractive;