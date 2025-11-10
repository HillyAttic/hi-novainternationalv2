import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Application {
  id: string;
  industry: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  benefits: string[];
  caseStudy?: {
    client: string;
    result: string;
    improvement: string;
  };
}

interface ApplicationGuideProps {
  applications: Application[];
}

const ApplicationGuide = ({ applications }: ApplicationGuideProps) => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-brand-headline text-3xl lg:text-4xl text-foreground mb-4">
            Application Guide
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover how our equipment delivers exceptional results across diverse industrial applications
          </p>
        </div>

        <div className="space-y-12">
          {applications.map((application, index) => (
            <div
              key={application.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="aspect-video bg-secondary/20 rounded-lg overflow-hidden precision-shadow">
                  <AppImage
                    src={application.image}
                    alt={application.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-technical text-sm">
                      {application.industry}
                    </span>
                  </div>
                  <h3 className="font-brand-headline text-2xl text-foreground mb-4">
                    {application.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {application.description}
                  </p>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="font-brand-headline text-lg text-foreground mb-3">Key Benefits</h4>
                  <div className="space-y-2">
                    {application.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start space-x-3">
                        <Icon name="CheckCircleIcon" size={20} className="text-success flex-shrink-0 mt-0.5" />
                        <span className="font-body text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Case Study */}
                {application.caseStudy && (
                  <div className="bg-muted rounded-lg p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <Icon name="DocumentTextIcon" size={20} className="text-primary" />
                      <h4 className="font-brand-headline text-lg text-foreground">Success Story</h4>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="font-body text-sm text-muted-foreground">Client:</span>
                        <span className="font-body text-foreground">{application.caseStudy.client}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-body text-sm text-muted-foreground">Result:</span>
                        <span className="font-body text-foreground">{application.caseStudy.result}</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="font-body text-sm text-muted-foreground flex-shrink-0">Improvement:</span>
                        <span className="font-technical text-success">{application.caseStudy.improvement}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-primary/5 rounded-lg p-8">
            <h3 className="font-brand-headline text-2xl text-foreground mb-4">
              Need Application-Specific Guidance?
            </h3>
            <p className="font-body text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our engineering experts can help you determine the optimal configuration for your specific application requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground font-cta px-8 py-3 rounded-md hover:bg-primary/90 engineering-transition precision-shadow hover:precision-shadow-lg flex items-center justify-center space-x-2">
                <Icon name="UserGroupIcon" size={20} />
                <span>Consult Our Experts</span>
              </button>
              <button className="bg-accent text-accent-foreground font-cta px-8 py-3 rounded-md hover:bg-accent/90 engineering-transition precision-shadow hover:precision-shadow-lg flex items-center justify-center space-x-2">
                <Icon name="DocumentTextIcon" size={20} />
                <span>Download Application Guide</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationGuide;