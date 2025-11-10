import Icon from '@/components/ui/AppIcon';


interface Office {
  id: string;
  country: string;
  city: string;
  type: string;
  address: string;
  phone: string;
  email: string;
  timezone: string;
  languages: string[];
  services: string[];
  coordinates: { lat: number; lng: number };
}

interface GlobalOfficesProps {
  className?: string;
}

const GlobalOffices = ({ className = '' }: GlobalOfficesProps) => {
  const offices: Office[] = [
    {
      id: 'india-hq',
      country: 'India',
      city: 'Gurgaon (Headquarters)',
      type: 'Manufacturing & Engineering Hub',
      address: 'Hi-Nova Manufacturing Hub, Sector 15, Industrial Area, Gurgaon, Haryana 122001',
      phone: '+91-124-4567890',
      email: 'india@hinova-manufacturing.com',
      timezone: 'IST (UTC+5:30)',
      languages: ['English', 'Hindi'],
      services: ['Manufacturing', 'Engineering', 'R&D', 'Technical Support'],
      coordinates: { lat: 28.4595, lng: 77.0266 }
    },
    {
      id: 'uae-office',
      country: 'UAE',
      city: 'Dubai',
      type: 'Middle East Operations',
      address: 'Dubai Industrial City, Al Qusais Industrial Area, Dubai, UAE',
      phone: '+971-4-1234567',
      email: 'dubai@hinova-manufacturing.com',
      timezone: 'GST (UTC+4)',
      languages: ['English', 'Arabic'],
      services: ['Sales', 'Project Management', 'After-sales Support'],
      coordinates: { lat: 25.2048, lng: 55.2708 }
    },
    {
      id: 'singapore-office',
      country: 'Singapore',
      city: 'Singapore',
      type: 'Asia-Pacific Hub',
      address: 'Jurong Industrial Estate, 21 Tuas Avenue 8, Singapore 639192',
      phone: '+65-6789-0123',
      email: 'singapore@hinova-manufacturing.com',
      timezone: 'SGT (UTC+8)',
      languages: ['English', 'Mandarin', 'Malay'],
      services: ['Regional Sales', 'Technical Consulting', 'Logistics'],
      coordinates: { lat: 1.3521, lng: 103.8198 }
    },
    {
      id: 'germany-office',
      country: 'Germany',
      city: 'Munich',
      type: 'European Operations',
      address: 'Industriestraße 15, 80339 München, Germany',
      phone: '+49-89-1234567',
      email: 'munich@hinova-manufacturing.com',
      timezone: 'CET (UTC+1)',
      languages: ['English', 'German'],
      services: ['European Sales', 'Compliance', 'Technical Support'],
      coordinates: { lat: 48.1351, lng: 11.5820 }
    }
  ];

  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="GlobeAltIcon" size={24} className="text-primary" />
            <span className="font-technical text-primary text-sm uppercase tracking-wider">
              Global Presence
            </span>
          </div>
          <h2 className="font-brand-headline text-3xl lg:text-4xl text-foreground mb-4">
            Worldwide Support Network
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Our global offices ensure local support with international expertise. Connect with the office nearest to you for personalized service and technical assistance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {offices.map((office) => (
            <div key={office.id} className="bg-secondary/10 rounded-xl p-6 precision-shadow hover:precision-shadow-lg engineering-transition">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-cta text-xl text-foreground mb-1">
                    {office.city}
                  </h3>
                  <p className="font-body text-sm text-primary">{office.type}</p>
                </div>
                <div className="w-12 h-8 bg-primary/10 rounded flex items-center justify-center">
                  <span className="font-technical text-xs text-primary">{office.country}</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <Icon name="MapPinIcon" size={16} className="text-muted-foreground mt-1 flex-shrink-0" />
                  <p className="font-body text-sm text-muted-foreground">{office.address}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="PhoneIcon" size={16} className="text-muted-foreground" />
                    <span className="font-technical text-sm text-foreground">{office.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="EnvelopeIcon" size={16} className="text-muted-foreground" />
                    <span className="font-technical text-sm text-foreground">{office.email}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Icon name="ClockIcon" size={16} className="text-muted-foreground" />
                  <span className="font-body text-sm text-muted-foreground">{office.timezone}</span>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="LanguageIcon" size={16} className="text-muted-foreground" />
                    <span className="font-body text-sm text-muted-foreground">Languages:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {office.languages.map((language) => (
                      <span key={language} className="bg-primary/10 text-primary font-technical text-xs px-2 py-1 rounded">
                        {language}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="WrenchScrewdriverIcon" size={16} className="text-muted-foreground" />
                    <span className="font-body text-sm text-muted-foreground">Services:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {office.services.map((service) => (
                      <span key={service} className="bg-accent/10 text-accent font-technical text-xs px-2 py-1 rounded">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <div className="w-full h-48 bg-secondary/20 rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    loading="lazy"
                    title={`${office.city} Office Location`}
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps?q=${office.coordinates.lat},${office.coordinates.lng}&z=14&output=embed`}
                    className="border-0"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information Summary */}
        <div className="bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-8 text-primary-foreground">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="ClockIcon" size={32} className="text-white" />
              </div>
              <h3 className="font-cta text-lg mb-2">24/7 Support</h3>
              <p className="font-body text-sm text-primary-foreground/80">
                Round-the-clock technical assistance across all time zones
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="LanguageIcon" size={32} className="text-white" />
              </div>
              <h3 className="font-cta text-lg mb-2">Multilingual</h3>
              <p className="font-body text-sm text-primary-foreground/80">
                Support in 6+ languages for global communication
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="TruckIcon" size={32} className="text-white" />
              </div>
              <h3 className="font-cta text-lg mb-2">Local Service</h3>
              <p className="font-body text-sm text-primary-foreground/80">
                On-site installation and maintenance services worldwide
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="ShieldCheckIcon" size={32} className="text-white" />
              </div>
              <h3 className="font-cta text-lg mb-2">Compliance</h3>
              <p className="font-body text-sm text-primary-foreground/80">
                Local regulatory compliance and certification support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalOffices;