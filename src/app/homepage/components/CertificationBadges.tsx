import Icon from '@/components/ui/AppIcon';

interface Certification {
  id: string;
  name: string;
  description: string;
  icon: string;
  year: string;
}

interface CertificationBadgesProps {
  className?: string;
}

const CertificationBadges = ({ className = '' }: CertificationBadgesProps) => {
  const certifications: Certification[] = [
    {
      id: 'iso-9001',
      name: 'ISO 9001:2015',
      description: 'Quality Management System',
      icon: 'ShieldCheckIcon',
      year: '2018'
    },
    {
      id: 'iso-14001',
      name: 'ISO 14001:2015',
      description: 'Environmental Management',
      icon: 'GlobeAltIcon',
      year: '2019'
    },
    {
      id: 'ohsas-18001',
      name: 'OHSAS 18001',
      description: 'Occupational Health & Safety',
      icon: 'HeartIcon',
      year: '2020'
    },
    {
      id: 'asme-u-stamp',
      name: 'ASME U-Stamp',
      description: 'Pressure Vessel Certification',
      icon: 'CheckBadgeIcon',
      year: '2017'
    },
    {
      id: 'ce-marking',
      name: 'CE Marking',
      description: 'European Conformity',
      icon: 'StarIcon',
      year: '2021'
    },
    {
      id: 'bis-certification',
      name: 'BIS Certification',
      description: 'Bureau of Indian Standards',
      icon: 'AcademicCapIcon',
      year: '2016'
    }
  ];

  return (
    <section className={`py-12 bg-muted/20 border-y border-border ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-8">
          <h2 className="font-brand-headline text-2xl lg:text-3xl text-foreground">
            Certified Excellence & Compliance
          </h2>
          <p className="font-body text-muted-foreground">
            Internationally recognized certifications ensuring quality, safety, and environmental standards
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-card rounded-lg p-4 precision-shadow hover:precision-shadow-lg engineering-transition border border-border group text-center"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto group-hover:bg-primary/20 engineering-transition">
                  <Icon name={cert.icon as any} size={24} className="text-primary" />
                </div>
                
                <div>
                  <h3 className="font-cta text-sm text-foreground">
                    {cert.name}
                  </h3>
                  <p className="font-technical text-xs text-muted-foreground mt-1">
                    {cert.description}
                  </p>
                  <span className="inline-block mt-2 bg-secondary text-secondary-foreground font-technical text-xs px-2 py-1 rounded">
                    Since {cert.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="text-center mt-8 pt-8 border-t border-border">
          <div className="flex items-center justify-center space-x-2 text-muted-foreground">
            <Icon name="ShieldCheckIcon" size={20} className="text-success" />
            <span className="font-body">
              Trusted by 500+ clients worldwide with 99.8% project success rate
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationBadges;