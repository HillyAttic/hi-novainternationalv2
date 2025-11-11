import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface CTABandSectionProps {
  className?: string;
}

const CTABandSection = ({ className = '' }: CTABandSectionProps) => {
  return (
    <section className={`py-16 lg:py-20 bg-primary ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h2 className="font-brand-headline text-3xl lg:text-4xl text-white">
              Looking for a reliable partner for your next
              <span className="block text-[#FF6B35]">process engineering project?</span>
            </h2>
            <p className="font-value-proposition text-xl text-white/90 max-w-3xl mx-auto">
              Let's discuss your requirements and design custom solutions that deliver exceptional results for your industrial operations.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-quote-request"
              className="bg-[#FF6B35] text-white font-cta px-8 py-4 rounded-lg hover:bg-[#FF6B35]/90 engineering-transition precision-shadow-lg flex items-center justify-center space-x-2"
            >
              <Icon name="DocumentTextIcon" size={20} />
              <span>Request a Quote</span>
            </Link>
            <Link
              href="/contact-quote-request"
              className="border-2 border-white/30 text-white font-cta px-8 py-4 rounded-lg hover:bg-white/10 engineering-transition flex items-center justify-center space-x-2"
            >
              <Icon name="CalendarIcon" size={20} />
              <span>Schedule a Consultation</span>
            </Link>
            <Link
              href="/contact-quote-request"
              className="border-2 border-white/30 text-white font-cta px-8 py-4 rounded-lg hover:bg-white/10 engineering-transition flex items-center justify-center space-x-2"
            >
              <Icon name="ArrowDownTrayIcon" size={20} />
              <span>Download Company Brochure</span>
            </Link>
          </div>

          {/* Additional Trust Indicators */}
          <div className="pt-8 border-t border-white/20">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80">
              <div className="flex items-center space-x-2">
                <Icon name="PhoneIcon" size={16} />
                <span className="font-body text-sm">+91 22 1234 5678</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/20"></div>
              <div className="flex items-center space-x-2">
                <Icon name="EnvelopeIcon" size={16} />
                <span className="font-body text-sm">info@hi-nova.com</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/20"></div>
              <div className="flex items-center space-x-2">
                <Icon name="ChatBubbleLeftRightIcon" size={16} />
                <span className="font-body text-sm">24/7 Technical Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABandSection;