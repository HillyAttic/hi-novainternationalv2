'use client';

import { useState, useEffect } from 'react';
import ServiceHero from './ServiceHero';
import ServiceOverview from './ServiceOverview';
import ProjectMethodology from './ProjectMethodology';
import ProjectGallery from './ProjectGallery';
import CleanroomSolutions from './CleanroomSolutions';
import MaintenanceSupport from './MaintenanceSupport';

interface EngineeringServicesInteractiveProps {
  className?: string;
}

const EngineeringServicesInteractive = ({ className = '' }: EngineeringServicesInteractiveProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className={`min-h-screen bg-background ${className}`}>
        <ServiceHero />
        <ServiceOverview />
        <ProjectMethodology />
        <ProjectGallery />
        <CleanroomSolutions />
        <MaintenanceSupport />
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-background ${className}`}>
      <ServiceHero />
      <ServiceOverview />
      <ProjectMethodology />
      <ProjectGallery />
      <CleanroomSolutions />
      <MaintenanceSupport />
    </div>
  );
};

export default EngineeringServicesInteractive;