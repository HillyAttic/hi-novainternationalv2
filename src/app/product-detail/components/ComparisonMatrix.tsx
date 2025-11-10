'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ProductModel {
  id: string;
  name: string;
  capacity: string;
  power: string;
  efficiency: string;
  price: string;
  features: string[];
  recommended: boolean;
}

interface ComparisonMatrixProps {
  models: ProductModel[];
}

const ComparisonMatrix = ({ models }: ComparisonMatrixProps) => {
  const [selectedModels, setSelectedModels] = useState<string[]>([models[0]?.id || '']);

  const toggleModelSelection = (modelId: string) => {
    setSelectedModels(prev => {
      if (prev.includes(modelId)) {
        return prev.filter(id => id !== modelId);
      } else if (prev.length < 3) {
        return [...prev, modelId];
      }
      return prev;
    });
  };

  const selectedModelData = models.filter(model => selectedModels.includes(model.id));

  const comparisonParameters = [
    { key: 'capacity', label: 'Capacity', icon: 'ScaleIcon' },
    { key: 'power', label: 'Power Consumption', icon: 'BoltIcon' },
    { key: 'efficiency', label: 'Efficiency Rating', icon: 'ChartBarIcon' },
    { key: 'price', label: 'Starting Price', icon: 'CurrencyRupeeIcon' },
  ];

  return (
    <section className="bg-muted py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-brand-headline text-3xl lg:text-4xl text-foreground mb-4">
            Model Comparison Matrix
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Compare different models side-by-side to find the perfect fit for your requirements
          </p>
        </div>

        {/* Model Selection */}
        <div className="mb-8">
          <h3 className="font-brand-headline text-xl text-foreground mb-4">
            Select Models to Compare (up to 3)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {models.map((model) => (
              <label
                key={model.id}
                className={`relative p-4 rounded-lg border-2 cursor-pointer engineering-transition ${
                  selectedModels.includes(model.id)
                    ? 'border-primary bg-primary/5' :'border-border bg-white hover:border-primary/50'
                } ${selectedModels.length >= 3 && !selectedModels.includes(model.id) ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <input
                  type="checkbox"
                  checked={selectedModels.includes(model.id)}
                  onChange={() => toggleModelSelection(model.id)}
                  disabled={selectedModels.length >= 3 && !selectedModels.includes(model.id)}
                  className="sr-only"
                />
                {model.recommended && (
                  <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-cta">
                    Recommended
                  </div>
                )}
                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center mb-3 ${
                  selectedModels.includes(model.id)
                    ? 'border-primary bg-primary' :'border-border'
                }`}>
                  {selectedModels.includes(model.id) && (
                    <Icon name="CheckIcon" size={12} className="text-white" />
                  )}
                </div>
                <h4 className="font-brand-headline text-lg text-foreground mb-2">{model.name}</h4>
                <p className="font-body text-sm text-muted-foreground">{model.capacity}</p>
              </label>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        {selectedModelData.length > 0 && (
          <div className="bg-white rounded-lg precision-shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary text-primary-foreground">
                  <tr>
                    <th className="px-6 py-4 text-left font-brand-headline">Specifications</th>
                    {selectedModelData.map((model) => (
                      <th key={model.id} className="px-6 py-4 text-center font-brand-headline min-w-48">
                        {model.name}
                        {model.recommended && (
                          <div className="mt-1">
                            <span className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-cta">
                              Recommended
                            </span>
                          </div>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonParameters.map((param, index) => (
                    <tr key={param.key} className={index % 2 === 0 ? 'bg-muted/30' : 'bg-white'}>
                      <td className="px-6 py-4 font-body text-foreground flex items-center space-x-2">
                        <Icon name={param.icon as any} size={20} className="text-primary" />
                        <span>{param.label}</span>
                      </td>
                      {selectedModelData.map((model) => (
                        <td key={model.id} className="px-6 py-4 text-center font-technical text-foreground">
                          {model[param.key as keyof ProductModel] as string}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr className="bg-white">
                    <td className="px-6 py-4 font-body text-foreground flex items-center space-x-2">
                      <Icon name="StarIcon" size={20} className="text-primary" />
                      <span>Key Features</span>
                    </td>
                    {selectedModelData.map((model) => (
                      <td key={model.id} className="px-6 py-4 text-center">
                        <div className="space-y-1">
                          {model.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="font-body text-sm text-foreground flex items-center justify-center space-x-1">
                              <Icon name="CheckCircleIcon" size={16} className="text-success" />
                              <span>{feature}</span>
                            </div>
                          ))}
                          {model.features.length > 3 && (
                            <div className="font-body text-xs text-muted-foreground">
                              +{model.features.length - 3} more features
                            </div>
                          )}
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Action Buttons */}
            <div className="bg-muted/30 px-6 py-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary text-primary-foreground font-cta px-6 py-3 rounded-md hover:bg-primary/90 engineering-transition precision-shadow hover:precision-shadow-lg flex items-center justify-center space-x-2">
                  <Icon name="DocumentArrowDownIcon" size={20} />
                  <span>Download Comparison</span>
                </button>
                <button className="bg-accent text-accent-foreground font-cta px-6 py-3 rounded-md hover:bg-accent/90 engineering-transition precision-shadow hover:precision-shadow-lg flex items-center justify-center space-x-2">
                  <Icon name="ChatBubbleLeftRightIcon" size={20} />
                  <span>Request Detailed Quote</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ComparisonMatrix;