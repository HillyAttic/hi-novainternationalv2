'use client';

import { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import IndustryQuickAccess from './IndustryQuickAccess';
import ProductShowcase from './ProductShowcase';
import SpecializedExpertiseBanner from './SpecializedExpertiseBanner';
import FeaturedProjects from './FeaturedProjects';
import CapabilityHighlights from './CapabilityHighlights';
import CertificationBadges from './CertificationBadges';
import TestimonialsSection from './TestimonialsSection';
import BlogHighlightsSection from './BlogHighlightsSection';
import CTABandSection from './CTABandSection';

interface HomepageInteractiveProps {
  className?: string;
}

const HomepageInteractive = ({ className = '' }: HomepageInteractiveProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className={`min-h-screen bg-background ${className}`}>
        <HeroSection />
        <IndustryQuickAccess />
        <ProductShowcase />
        <SpecializedExpertiseBanner />
        <FeaturedProjects />
        <CapabilityHighlights />
        <CertificationBadges />
        <TestimonialsSection />
        <BlogHighlightsSection />
        <CTABandSection />
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-background ${className}`}>
      <HeroSection />
      <IndustryQuickAccess />
      <ProductShowcase />
      <SpecializedExpertiseBanner />
      <FeaturedProjects />
      <CapabilityHighlights />
      <CertificationBadges />
      <TestimonialsSection />
      <BlogHighlightsSection />
      <CTABandSection />
    </div>
  );
};

export default HomepageInteractive;