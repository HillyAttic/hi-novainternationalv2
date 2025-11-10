'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ConfigurationOption {
  id: string;
  name: string;
  options: Array<{
    value: string;
    label: string;
    price?: number;
  }>;
}

interface ProductConfiguratorProps {
  configurations: ConfigurationOption[];
}

const ProductConfigurator = ({ configurations }: ProductConfiguratorProps) => {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [isConfiguring, setIsConfiguring] = useState(false);

  const handleOptionChange = (configId: string, value: string) => {
    setSelectedOptions(prev => ({
      ...prev,
      [configId]: value
    }));
  };

  const calculatePrice = () => {
    let basePrice = 250000; // Base price in INR
    let additionalCost = 0;

    configurations.forEach(config => {
      const selectedValue = selectedOptions[config.id];
      if (selectedValue) {
        const option = config.options.find(opt => opt.value === selectedValue);
        if (option?.price) {
          additionalCost += option.price;
        }
      }
    });

    return basePrice + additionalCost;
  };

  const generateQuote = () => {
    setIsConfiguring(true);
    // Simulate quote generation
    setTimeout(() => {
      setIsConfiguring(false);
      alert('Quote generated successfully! Our team will contact you within 24 hours.');
    }, 2000);
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-brand-headline text-3xl lg:text-4xl text-foreground mb-4">
            Product Configurator
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Customize your equipment specifications to match your exact requirements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Configuration Options */}
          <div className="lg:col-span-2 space-y-6">
            {configurations.map((config) => (
              <div key={config.id} className="bg-muted rounded-lg p-6">
                <h3 className="font-brand-headline text-xl text-foreground mb-4">
                  {config.name}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {config.options.map((option) => (
                    <label
                      key={option.value}
                      className={`flex items-center space-x-3 p-3 rounded-md border-2 cursor-pointer engineering-transition ${
                        selectedOptions[config.id] === option.value
                          ? 'border-primary bg-primary/5' :'border-border bg-white hover:border-primary/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name={config.id}
                        value={option.value}
                        checked={selectedOptions[config.id] === option.value}
                        onChange={(e) => handleOptionChange(config.id, e.target.value)}
                        className="sr-only"
                      />
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        selectedOptions[config.id] === option.value
                          ? 'border-primary bg-primary' :'border-border'
                      }`}>
                        {selectedOptions[config.id] === option.value && (
                          <div className="w-2 h-2 rounded-full bg-white" />
                        )}
                      </div>
                      <div className="flex-1">
                        <span className="font-body text-foreground">{option.label}</span>
                        {option.price && (
                          <span className="font-technical text-sm text-primary ml-2">
                            +₹{option.price.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Price Summary */}
          <div className="lg:col-span-1">
            <div className="bg-primary/5 rounded-lg p-6 sticky top-24">
              <h3 className="font-brand-headline text-xl text-foreground mb-6">
                Configuration Summary
              </h3>

              <div className="space-y-4 mb-6">
                {configurations.map((config) => {
                  const selectedValue = selectedOptions[config.id];
                  const selectedOption = selectedValue 
                    ? config.options.find(opt => opt.value === selectedValue)
                    : null;

                  return (
                    <div key={config.id} className="flex justify-between items-start">
                      <div className="flex-1">
                        <span className="font-body text-sm text-muted-foreground">{config.name}</span>
                        <div className="font-body text-foreground">
                          {selectedOption ? selectedOption.label : 'Not selected'}
                        </div>
                      </div>
                      {selectedOption?.price && (
                        <span className="font-technical text-primary">
                          +₹{selectedOption.price.toLocaleString()}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="border-t border-border pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-brand-headline text-lg text-foreground">Estimated Price</span>
                  <span className="font-brand-headline text-2xl text-primary">
                    ₹{calculatePrice().toLocaleString()}
                  </span>
                </div>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  *Prices are indicative and subject to final specifications
                </p>
              </div>

              <button
                onClick={generateQuote}
                disabled={isConfiguring || Object.keys(selectedOptions).length === 0}
                className="w-full bg-accent text-accent-foreground font-cta px-6 py-3 rounded-md hover:bg-accent/90 engineering-transition precision-shadow hover:precision-shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isConfiguring ? (
                  <>
                    <Icon name="ArrowPathIcon" size={20} className="animate-spin" />
                    <span>Generating Quote...</span>
                  </>
                ) : (
                  <>
                    <Icon name="DocumentTextIcon" size={20} />
                    <span>Generate Quote</span>
                  </>
                )}
              </button>

              <div className="mt-4 text-center">
                <button className="font-body text-primary hover:text-primary/80 engineering-transition text-sm flex items-center justify-center space-x-1 mx-auto">
                  <Icon name="PhoneIcon" size={16} />
                  <span>Need help? Call our experts</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductConfigurator;