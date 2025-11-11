'use client';

import { useState } from 'react';
import MajorProjectsHero from './MajorProjectsHero';
import ProjectsGrid from './ProjectsGrid';
import { majorProjectsData } from '../data/projectsData';

type ViewMode = 'grid' | 'list';

const MajorProjectsInteractive = () => {
  const [selectedClient, setSelectedClient] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  return (
    <div className="min-h-screen bg-background">
      <MajorProjectsHero />
      <ProjectsGrid
        data={majorProjectsData}
        selectedClient={selectedClient}
        onClientSelect={setSelectedClient}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />
    </div>
  );
};

export default MajorProjectsInteractive;
