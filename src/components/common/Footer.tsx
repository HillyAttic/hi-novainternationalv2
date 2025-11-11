import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-primary/10 to-secondary/10 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-brand-headline text-xl font-bold text-foreground mb-4">
              Hi-Nova International
            </h3>
            <p className="font-body text-sm text-muted-foreground mb-4">
              Engineering Excellence in Process Equipment & Industrial Drying Systems. 
              ISO 9001:2015 & IBR Certified with 26+ years of experience.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
              <Icon name="PhoneIcon" size={16} className="text-accent" />
              <span>+91 98339 65129</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Icon name="EnvelopeIcon" size={16} className="text-accent" />
              <span>rohidas@hi-novainternational.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-brand-headline text-lg font-bold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about/" className="font-body text-sm text-muted-foreground hover:text-accent engineering-transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products/" className="font-body text-sm text-muted-foreground hover:text-accent engineering-transition">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/industries/" className="font-body text-sm text-muted-foreground hover:text-accent engineering-transition">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/projects/" className="font-body text-sm text-muted-foreground hover:text-accent engineering-transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="font-body text-sm text-muted-foreground hover:text-accent engineering-transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-brand-headline text-lg font-bold text-foreground mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about/infrastructure-capabilities/" className="font-body text-sm text-muted-foreground hover:text-accent engineering-transition">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link href="/about/certifications-qa/" className="font-body text-sm text-muted-foreground hover:text-accent engineering-transition">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/engineering-services/" className="font-body text-sm text-muted-foreground hover:text-accent engineering-transition">
                  Engineering Services
                </Link>
              </li>
              <li>
                <Link href="/resource-center/" className="font-body text-sm text-muted-foreground hover:text-accent engineering-transition">
                  Resource Center
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-body text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Hi-Nova International. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy/" className="font-body text-sm text-muted-foreground hover:text-accent engineering-transition">
              Privacy Policy
            </Link>
            <Link href="/terms/" className="font-body text-sm text-muted-foreground hover:text-accent engineering-transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
