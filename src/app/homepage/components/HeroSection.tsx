'use client';

import { useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Beams from '@/components/ui/Beams';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroStats = [
  { value: '30+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Delivered' },
  { value: 'ISO 9001:2015', label: 'Certified' },
  { value: '10+', label: 'Industries Served' }];


  return (
    <section ref={heroRef} className={`relative text-primary-foreground overflow-hidden ${className}`}>
      {/* Animated Beams Background */}
      <div className="absolute inset-0">
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={0}
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full">
                <Icon name="ShieldCheckIcon" size={16} className="text-accent" />
                <span className="font-technical text-sm">ISO 9001:2015 Certified</span>
              </div>
              
              <div className="font-brand-headline text-4xl lg:text-6xl leading-tight">
                <h1 className="block">Custom Process Equipment &</h1>
                <h1 className="block text-accent">Industrial Drying Solutions</h1>
              </div>

              <p className="font-value-proposition text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed">
                Engineering reliable, energy-efficient systems for Food, Pharma, Chemical & Petrochemical industries worldwide.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact-quote-request"
                className="bg-accent text-accent-foreground font-cta px-8 py-4 rounded-lg hover:bg-accent/90 engineering-transition precision-shadow-lg text-center">
                Request a Quote
              </Link>
              <Link
                href="/industry-solutions"
                className="border-2 border-primary-foreground/30 text-primary-foreground font-cta px-8 py-4 rounded-lg hover:bg-primary-foreground/10 engineering-transition text-center">
                View Industries
              </Link>
            </div>

            {/* Trust Indicators Strip */}
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg px-6 py-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <div className="flex items-center gap-2">
                <Icon name="CalendarIcon" size={20} className="text-accent" />
                <span className="font-body text-primary-foreground">30+ Years Experience</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-primary-foreground/20"></div>
              <div className="flex items-center gap-2">
                <Icon name="CubeIcon" size={20} className="text-accent" />
                <span className="font-body text-primary-foreground">500+ Projects Delivered</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-primary-foreground/20"></div>
              <div className="flex items-center gap-2">
                <Icon name="ShieldCheckIcon" size={20} className="text-accent" />
                <span className="font-body text-primary-foreground">ISO 9001:2015 Certified</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden precision-shadow-lg">
              <AppImage
                src="https://images.unsplash.com/photo-1472633000120-16b5381f2c04"
                alt="Modern industrial manufacturing facility with stainless steel equipment and precision machinery in clean environment"
                className="w-full h-96 lg:h-[500px] object-cover" />

              <div className="absolute inset-0 bg-primary/60"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 precision-shadow">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center">
                    <Icon name="CheckBadgeIcon" size={24} className="text-success-foreground" />
                  </div>
                  <div>
                    <div className="font-cta text-foreground">Safety First</div>
                    <div className="font-body text-sm text-muted-foreground">Zero Incident Record</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;