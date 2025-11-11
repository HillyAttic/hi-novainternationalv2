'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import type { ClientData } from '../data/projectsData';

interface ProjectsGridProps {
  data: ClientData[];
  selectedClient: string | null;
  onClientSelect: (client: string | null) => void;
}

const ProjectsGrid = ({ data, selectedClient, onClientSelect }: ProjectsGridProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedClients, setExpandedClients] = useState<Set<string>>(new Set());

  const toggleClient = (clientName: string) => {
    const newExpanded = new Set(expandedClients);
    if (newExpanded.has(clientName)) {
      newExpanded.delete(clientName);
    } else {
      newExpanded.add(clientName);
    }
    setExpandedClients(newExpanded);
  };

  const filteredData = data.filter(client => {
    const searchLower = searchTerm.toLowerCase();
    const clientMatch = client.Client.toLowerCase().includes(searchLower);
    const projectMatch = client.Projects.some(project => 
      project['Project / Location'].toLowerCase().includes(searchLower) ||
      project['Work Description'].toLowerCase().includes(searchLower) ||
      project.TPI.toLowerCase().includes(searchLower)
    );
    return clientMatch || projectMatch;
  });

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search by client, location, or project description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 pl-12 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 engineering-transition"
            />
            <Icon 
              name="MagnifyingGlassIcon" 
              size={20} 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
          </div>

          <div className="text-center">
            <p className="font-technical text-sm text-muted-foreground">
              Showing {filteredData.length} of {data.length} clients
            </p>
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-6">
          {filteredData.map((client, index) => {
            const isExpanded = expandedClients.has(client.Client);
            const projectCount = client.Projects.length;

            return (
              <div
                key={index}
                className="bg-card rounded-xl border border-border precision-shadow hover:precision-shadow-lg engineering-transition overflow-hidden"
              >
                {/* Client Header */}
                <button
                  onClick={() => toggleClient(client.Client)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-muted/30 engineering-transition"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon name="BuildingOfficeIcon" size={24} className="text-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-cta text-lg text-foreground">
                        {client.Client}
                      </h3>
                      <p className="font-technical text-sm text-muted-foreground">
                        {projectCount} {projectCount === 1 ? 'Project' : 'Projects'}
                      </p>
                    </div>
                  </div>
                  
                  <Icon 
                    name={isExpanded ? "ChevronUpIcon" : "ChevronDownIcon"}
                    size={24}
                    className="text-muted-foreground engineering-transition"
                  />
                </button>

                {/* Projects List */}
                {isExpanded && (
                  <div className="border-t border-border">
                    {client.Projects.map((project, projectIndex) => (
                      <div
                        key={projectIndex}
                        className="px-6 py-5 border-b border-border last:border-b-0 hover:bg-muted/20 engineering-transition"
                      >
                        <div className="grid lg:grid-cols-3 gap-4">
                          {/* Location */}
                          <div className="space-y-1">
                            <div className="flex items-start space-x-2">
                              <Icon name="MapPinIcon" size={16} className="text-primary mt-1 flex-shrink-0" />
                              <div>
                                <p className="font-technical text-xs text-muted-foreground uppercase tracking-wide">
                                  Location
                                </p>
                                <p className="font-body text-sm text-foreground mt-1">
                                  {project['Project / Location']}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Work Description */}
                          <div className="space-y-1">
                            <div className="flex items-start space-x-2">
                              <Icon name="WrenchScrewdriverIcon" size={16} className="text-primary mt-1 flex-shrink-0" />
                              <div>
                                <p className="font-technical text-xs text-muted-foreground uppercase tracking-wide">
                                  Work Description
                                </p>
                                <p className="font-body text-sm text-foreground mt-1">
                                  {project['Work Description']}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* TPI */}
                          <div className="space-y-1">
                            <div className="flex items-start space-x-2">
                              <Icon name="ShieldCheckIcon" size={16} className="text-primary mt-1 flex-shrink-0" />
                              <div>
                                <p className="font-technical text-xs text-muted-foreground uppercase tracking-wide">
                                  Third Party Inspector
                                </p>
                                <p className="font-body text-sm text-foreground mt-1">
                                  {project.TPI}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredData.length === 0 && (
          <div className="text-center py-16">
            <Icon name="MagnifyingGlassIcon" size={48} className="text-muted-foreground mx-auto mb-4" />
            <h3 className="font-cta text-xl text-foreground mb-2">No projects found</h3>
            <p className="font-body text-muted-foreground">
              Try adjusting your search terms
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsGrid;
