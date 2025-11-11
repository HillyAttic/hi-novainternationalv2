import Icon from '@/components/ui/AppIcon';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  position: string;
  company: string;
  logo?: string;
}

interface TestimonialsSectionProps {
  className?: string;
}

const TestimonialsSection = ({ className = '' }: TestimonialsSectionProps) => {
  const testimonials: Testimonial[] = [
    {
      id: 'testimonial-1',
      quote: "Hi-Nova's industrial dryer solutions have transformed our production efficiency. The energy recovery systems have reduced our operating costs by 35% while maintaining product quality standards.",
      author: "Rajesh Kumar",
      position: "Plant Manager",
      company: "Tata Industries"
    },
    {
      id: 'testimonial-2',
      quote: "Outstanding technical expertise and project execution. The pharmaceutical processing equipment meets all GMP requirements and has been running flawlessly for over 3 years.",
      author: "Dr. Priya Sharma",
      position: "Head of Operations",
      company: "Lupin Pharmaceuticals"
    },
    {
      id: 'testimonial-3',
      quote: "Their custom heat exchanger design solved our most challenging thermal efficiency requirements. Professional service from concept to commissioning.",
      author: "Amit Patel",
      position: "Process Engineer",
      company: "Reliance Industries"
    },
    {
      id: 'testimonial-4',
      quote: "Exceptional engineering support and after-sales service. The skid-mounted units were delivered on time and commissioned without any issues.",
      author: "Suresh Reddy",
      position: "Project Director",
      company: "Bharat Petroleum"
    }
  ];

  return (
    <section className={`py-16 lg:py-20 bg-muted/30 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-brand-headline text-3xl lg:text-4xl text-foreground">
            Trusted by Industry Leaders
          </h2>
          <p className="font-value-proposition text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover what our clients say about our engineering solutions and project execution excellence
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-xl p-8 precision-shadow hover:precision-shadow-lg engineering-transition border border-border"
            >
              <div className="space-y-6">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="ChatBubbleLeftRightIcon" size={24} className="text-primary" />
                </div>

                {/* Quote */}
                <blockquote className="font-body text-foreground leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author Info */}
                <div>
                  <div className="font-cta text-foreground">{testimonial.author}</div>
                  <div className="font-body text-sm text-muted-foreground">
                    {testimonial.position}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;