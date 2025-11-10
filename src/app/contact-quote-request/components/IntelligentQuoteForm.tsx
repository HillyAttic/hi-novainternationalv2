'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  inquiryType: string;
  industry: string;
  productCategory: string;
  projectDetails: string;
  specifications: string;
  timeline: string;
  budget: string;
  currency: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  country: string;
  additionalRequirements: string;
}

interface IntelligentQuoteFormProps {
  className?: string;
}

const IntelligentQuoteForm = ({ className = '' }: IntelligentQuoteFormProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    inquiryType: '',
    industry: '',
    productCategory: '',
    projectDetails: '',
    specifications: '',
    timeline: '',
    budget: '',
    currency: 'INR',
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    country: 'India',
    additionalRequirements: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const inquiryTypes = [
    { value: 'new-equipment', label: 'New Equipment Purchase', icon: 'CogIcon' },
    { value: 'custom-solution', label: 'Custom Engineering Solution', icon: 'WrenchScrewdriverIcon' },
    { value: 'maintenance', label: 'Maintenance & Service', icon: 'ShieldCheckIcon' },
    { value: 'upgrade', label: 'Equipment Upgrade', icon: 'ArrowUpIcon' }
  ];

  const industries = [
    'Food & Dairy Processing',
    'Pharmaceutical & Biotech',
    'Petrochemical & Refining',
    'Chemical Processing',
    'Oil & Gas',
    'Power Generation',
    'Water Treatment',
    'Mining & Minerals',
    'Textile & Garments',
    'Other Industries'
  ];

  const productCategories = [
    'Industrial Dryers',
    'Heat Exchangers',
    'Pressure Vessels',
    'Distillation Columns',
    'Reactors & Mixers',
    'Storage Tanks',
    'Filtration Systems'
  ];

  const timelines = [
    'Immediate (Within 1 month)',
    'Short-term (1-3 months)',
    'Medium-term (3-6 months)',
    'Long-term (6+ months)',
    'Planning Phase'
  ];

  const budgetRanges = [
    'Under ₹10 Lakhs',
    '₹10 Lakhs - ₹50 Lakhs',
    '₹50 Lakhs - ₹1 Crore',
    '₹1 Crore - ₹5 Crores',
    'Above ₹5 Crores',
    'To be discussed'
  ];

  const currencies = [
    { value: 'INR', label: '₹ Indian Rupee' },
    { value: 'USD', label: '$ US Dollar' },
    { value: 'EUR', label: '€ Euro' }
  ];

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    alert('Quote request submitted successfully! Our team will contact you within 24 hours.');
  };

  const getStepProgress = () => {
    return (currentStep / 4) * 100;
  };

  if (!isHydrated) {
    return (
      <section className={`py-16 bg-white ${className}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary/20 rounded-xl p-8 animate-pulse">
            <div className="h-8 bg-secondary rounded mb-6"></div>
            <div className="space-y-4">
              <div className="h-4 bg-secondary rounded w-3/4"></div>
              <div className="h-4 bg-secondary rounded w-1/2"></div>
              <div className="h-32 bg-secondary rounded"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-brand-headline text-3xl lg:text-4xl text-foreground mb-4">
            Request Detailed Quote
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Our intelligent form adapts to your needs, ensuring we capture all relevant project requirements
          </p>
        </div>

        <div className="bg-white rounded-2xl precision-shadow-lg border border-border overflow-hidden">
          {/* Progress Bar */}
          <div className="bg-secondary/30 p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="font-cta text-sm text-foreground">Step {currentStep} of 4</span>
              <span className="font-technical text-sm text-muted-foreground">{Math.round(getStepProgress())}% Complete</span>
            </div>
            <div className="w-full bg-border rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full engineering-transition"
                style={{ width: `${getStepProgress()}%` }}
              ></div>
            </div>
          </div>

          <div className="p-8">
            {/* Step 1: Inquiry Type & Industry */}
            {currentStep === 1 && (
              <div className="space-y-8">
                <div>
                  <h3 className="font-cta text-xl text-foreground mb-6">What type of inquiry is this?</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {inquiryTypes.map((type) => (
                      <button
                        key={type.value}
                        onClick={() => handleInputChange('inquiryType', type.value)}
                        className={`p-4 rounded-lg border-2 text-left engineering-transition ${
                          formData.inquiryType === type.value
                            ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <Icon name={type.icon as any} size={20} className="text-primary" />
                          <span className="font-cta text-foreground">{type.label}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block font-cta text-foreground mb-3">Industry Sector</label>
                  <select
                    value={formData.industry}
                    onChange={(e) => handleInputChange('industry', e.target.value)}
                    className="w-full p-3 border border-border rounded-lg font-body focus:ring-2 focus:ring-primary focus:border-primary"
                  >
                    <option value="">Select your industry</option>
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* Step 2: Product & Project Details */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block font-cta text-foreground mb-3">Product Category</label>
                  <select
                    value={formData.productCategory}
                    onChange={(e) => handleInputChange('productCategory', e.target.value)}
                    className="w-full p-3 border border-border rounded-lg font-body focus:ring-2 focus:ring-primary focus:border-primary"
                  >
                    <option value="">Select product category</option>
                    {productCategories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-cta text-foreground mb-3">Project Details</label>
                  <textarea
                    value={formData.projectDetails}
                    onChange={(e) => handleInputChange('projectDetails', e.target.value)}
                    placeholder="Describe your project requirements, application, and any specific challenges..."
                    rows={4}
                    className="w-full p-3 border border-border rounded-lg font-body focus:ring-2 focus:ring-primary focus:border-primary resize-none"
                  />
                </div>

                <div>
                  <label className="block font-cta text-foreground mb-3">Technical Specifications</label>
                  <textarea
                    value={formData.specifications}
                    onChange={(e) => handleInputChange('specifications', e.target.value)}
                    placeholder="Capacity, pressure, temperature, materials, dimensions, or any specific technical requirements..."
                    rows={3}
                    className="w-full p-3 border border-border rounded-lg font-body focus:ring-2 focus:ring-primary focus:border-primary resize-none"
                  />
                </div>
              </div>
            )}

            {/* Step 3: Timeline & Budget */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <label className="block font-cta text-foreground mb-3">Project Timeline</label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => handleInputChange('timeline', e.target.value)}
                    className="w-full p-3 border border-border rounded-lg font-body focus:ring-2 focus:ring-primary focus:border-primary"
                  >
                    <option value="">Select timeline</option>
                    {timelines.map((timeline) => (
                      <option key={timeline} value={timeline}>{timeline}</option>
                    ))}
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-cta text-foreground mb-3">Budget Range</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => handleInputChange('budget', e.target.value)}
                      className="w-full p-3 border border-border rounded-lg font-body focus:ring-2 focus:ring-primary focus:border-primary"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-cta text-foreground mb-3">Currency</label>
                    <select
                      value={formData.currency}
                      onChange={(e) => handleInputChange('currency', e.target.value)}
                      className="w-full p-3 border border-border rounded-lg font-body focus:ring-2 focus:ring-primary focus:border-primary"
                    >
                      {currencies.map((currency) => (
                        <option key={currency.value} value={currency.value}>{currency.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Contact Information */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-cta text-foreground mb-3">Company Name *</label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      className="w-full p-3 border border-border rounded-lg font-body focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block font-cta text-foreground mb-3">Contact Person *</label>
                    <input
                      type="text"
                      value={formData.contactPerson}
                      onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                      className="w-full p-3 border border-border rounded-lg font-body focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-cta text-foreground mb-3">Email Address *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full p-3 border border-border rounded-lg font-body focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="your.email@company.com"
                    />
                  </div>

                  <div>
                    <label className="block font-cta text-foreground mb-3">Phone Number *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full p-3 border border-border rounded-lg font-body focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="+91-9876543210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-cta text-foreground mb-3">Country</label>
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) => handleInputChange('country', e.target.value)}
                    className="w-full p-3 border border-border rounded-lg font-body focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="India"
                  />
                </div>

                <div>
                  <label className="block font-cta text-foreground mb-3">Additional Requirements</label>
                  <textarea
                    value={formData.additionalRequirements}
                    onChange={(e) => handleInputChange('additionalRequirements', e.target.value)}
                    placeholder="Any additional information, special requirements, or questions..."
                    rows={3}
                    className="w-full p-3 border border-border rounded-lg font-body focus:ring-2 focus:ring-primary focus:border-primary resize-none"
                  />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-cta engineering-transition ${
                  currentStep === 1
                    ? 'text-muted-foreground cursor-not-allowed'
                    : 'text-primary hover:bg-primary/5'
                }`}
              >
                <Icon name="ChevronLeftIcon" size={20} />
                <span>Previous</span>
              </button>

              {currentStep < 4 ? (
                <button
                  onClick={handleNext}
                  disabled={
                    (currentStep === 1 && (!formData.inquiryType || !formData.industry)) ||
                    (currentStep === 2 && (!formData.productCategory || !formData.projectDetails)) ||
                    (currentStep === 3 && (!formData.timeline || !formData.budget))
                  }
                  className="flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-cta hover:bg-primary/90 engineering-transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>Next Step</span>
                  <Icon name="ChevronRightIcon" size={20} />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting || !formData.companyName || !formData.contactPerson || !formData.email || !formData.phone}
                  className="flex items-center space-x-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-cta hover:bg-accent/90 engineering-transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Icon name="PaperAirplaneIcon" size={20} />
                      <span>Submit Quote Request</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligentQuoteForm;