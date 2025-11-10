'use client';

import { useEffect, useState } from 'react';
import IndustryHero from './IndustryHero';
import IndustryGrid from './IndustryGrid';
import CapabilityMapping from './CapabilityMapping';
import TechnicalResources from './TechnicalResources';
import CaseStudyShowcase from './CaseStudyShowcase';
import InteractiveTools from './InteractiveTools';

interface IndustrySolutionsInteractiveProps {
  className?: string;
}

const IndustrySolutionsInteractive = ({ className = '' }: IndustrySolutionsInteractiveProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className={`min-h-screen bg-background ${className}`}>
        <IndustryHero />
        <IndustryGrid />
        <CapabilityMapping />
        <TechnicalResources />
        <CaseStudyShowcase />
        <InteractiveTools />
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-background ${className}`}>
      <IndustryHero />
      <IndustryGrid />
      <CapabilityMapping />
      <TechnicalResources />
      <CaseStudyShowcase />
      <InteractiveTools />
    </div>
  );
};

export default IndustrySolutionsInteractive;