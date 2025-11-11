'use client';

import { useState } from 'react';
import MajorProjectsHero from './MajorProjectsHero';
import ProjectsGrid from './ProjectsGrid';
import { majorProjectsData } from '../data/projectsData';

const MajorProjectsInteractive = () => {
  const [selectedClient, setSelectedClient] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <MajorProjectsHero />
      <ProjectsGrid 
        data={majorProjectsData}
        selectedClient={selectedClient}
        onClientSelect={setSelectedClient}
      />
    </div>
  );
};

export default MajorProjectsInteractive;
