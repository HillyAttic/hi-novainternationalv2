import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { PageLayout } from '@/components/common';
import Icon from '@/components/ui/AppIcon';
import { aboutData } from '@/data/aboutData';

export const metadata: Metadata = {
  title: aboutData.seo.title,
  description: aboutData.seo.description,
  keywords: aboutData.seo.keywords,
  openGraph: {
    title: aboutData.seo.title,
    description: aboutData.seo.description,
    url: aboutData.seo.canonical,
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <PageLayout showContextualLinks={false}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-white to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-brand-headline text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {aboutData.hero.heading}
            </h1>
            <p className="font-body text-xl text-muted-foreground mb-8">
              {aboutData.hero.subheading}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-10">
              {aboutData.hero.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 precision-shadow-md border border-border min-w-[200px]"
                >
                  <div className="font-brand-headline text-4xl font-bold text-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="font-body text-sm text-muted-foreground uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-4">
              {aboutData.hero.ctas.map((cta, index) => (
                <Link
                  key={index}
                  href={cta.href}
                  className={`${
                    index === 0
                      ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                      : index === 1
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'bg-secondary text-foreground hover:bg-secondary/80 border border-border'
                  } font-cta px-6 py-3 rounded-md engineering-transition precision-shadow hover:precision-shadow-lg inline-flex items-center space-x-2`}
                >
                  <span>{cta.label}</span>
                  <Icon name="ArrowRightIcon" size={16} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-brand-headline text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Who We Are
            </h2>
            <div className="space-y-6">
              {aboutData.overview.summary_paragraphs.map((paragraph, index) => (
                <p key={index} className="font-body text-lg text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white rounded-lg p-8 precision-shadow-md border border-border">
              <div className="flex items-center mb-6">
                <Icon name="EyeIcon" size={32} className="text-accent mr-3" />
                <h3 className="font-brand-headline text-2xl font-bold text-foreground">Our Vision</h3>
              </div>
              <div className="space-y-4">
                {aboutData.vision_mission.vision_blocks.map((block, index) => (
                  <p key={index} className="font-body text-muted-foreground leading-relaxed">
                    {block}
                  </p>
                ))}
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-lg p-8 precision-shadow-md border border-border">
              <div className="flex items-center mb-6">
                <Icon name="RocketLaunchIcon" size={32} className="text-primary mr-3" />
                <h3 className="font-brand-headline text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <div className="space-y-4">
                {aboutData.vision_mission.mission_blocks.map((block, index) => (
                  <p key={index} className="font-body text-muted-foreground leading-relaxed">
                    {block}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-brand-headline text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {aboutData.core_values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg p-6 text-center precision-shadow hover:precision-shadow-lg engineering-transition"
              >
                <p className="font-brand-headline text-lg font-semibold text-foreground">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Preview Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-brand-headline text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Our Capabilities
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Highlights */}
            <div className="bg-white rounded-lg p-6 precision-shadow-md border border-border">
              <h3 className="font-brand-headline text-xl font-bold text-foreground mb-4">Core Services</h3>
              <ul className="space-y-3">
                {aboutData.capabilities_preview.highlights.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Icon name="CheckCircleIcon" size={20} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span className="font-body text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Equipment */}
            <div className="bg-white rounded-lg p-6 precision-shadow-md border border-border">
              <h3 className="font-brand-headline text-xl font-bold text-foreground mb-4">Featured Equipment</h3>
              <ul className="space-y-3">
                {aboutData.capabilities_preview.featured_equipment_examples.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Icon name="WrenchScrewdriverIcon" size={20} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="font-body text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Materials */}
            <div className="bg-white rounded-lg p-6 precision-shadow-md border border-border">
              <h3 className="font-brand-headline text-xl font-bold text-foreground mb-4">Materials Expertise</h3>
              <ul className="space-y-3">
                {aboutData.capabilities_preview.materials_expertise.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Icon name="CubeIcon" size={20} className="text-secondary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="font-body text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link
              href={aboutData.capabilities_preview.cta.href}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-cta px-8 py-3 rounded-md engineering-transition precision-shadow hover:precision-shadow-lg inline-flex items-center space-x-2"
            >
              <span>{aboutData.capabilities_preview.cta.label}</span>
              <Icon name="ArrowRightIcon" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications & Quality Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-brand-headline text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Certifications & Quality Assurance
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {aboutData.certifications_quality.certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg p-6 precision-shadow-md border border-border min-w-[200px] text-center"
                >
                  <Icon name="ShieldCheckIcon" size={48} className="text-accent mx-auto mb-3" />
                  <p className="font-brand-headline text-lg font-bold text-foreground">{cert}</p>
                </div>
              ))}
            </div>
            
            <p className="font-body text-lg text-muted-foreground text-center mb-8">
              {aboutData.certifications_quality.quality_statement}
            </p>

            <div className="text-center">
              <Link
                href={aboutData.certifications_quality.cta.href}
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-cta px-8 py-3 rounded-md engineering-transition precision-shadow hover:precision-shadow-lg inline-flex items-center space-x-2"
              >
                <span>{aboutData.certifications_quality.cta.label}</span>
                <Icon name="ArrowRightIcon" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-brand-headline text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Our Leadership Team
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutData.leadership.map((leader, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 precision-shadow-md border border-border hover:precision-shadow-lg engineering-transition"
              >
                <div className="mb-4">
                  <h3 className="font-brand-headline text-xl font-bold text-foreground mb-1">
                    {leader.name}
                  </h3>
                  <p className="font-body text-sm text-accent font-semibold uppercase tracking-wide">
                    {leader.role}
                  </p>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Served Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-brand-headline text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Industries We Serve
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {aboutData.sectors_served.map((sector, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-4 text-center precision-shadow hover:precision-shadow-md engineering-transition"
              >
                <p className="font-body text-foreground font-medium">{sector}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHE Policy Section */}
      <section className="py-16 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-brand-headline text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Safety, Health & Environment Policy
          </h2>
          
          <p className="font-body text-lg text-muted-foreground text-center max-w-4xl mx-auto mb-12">
            {aboutData.she_policy.intro}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Occupational Health & Safety */}
            <div className="bg-white rounded-lg p-6 precision-shadow-md border border-border">
              <h3 className="font-brand-headline text-xl font-bold text-foreground mb-4 flex items-center">
                <Icon name="ShieldCheckIcon" size={24} className="text-accent mr-2" />
                Occupational Health & Safety
              </h3>
              <ul className="space-y-3">
                {aboutData.she_policy.occupational_health_safety.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Icon name="CheckCircleIcon" size={20} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span className="font-body text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Environmental Sustainability */}
            <div className="bg-white rounded-lg p-6 precision-shadow-md border border-border">
              <h3 className="font-brand-headline text-xl font-bold text-foreground mb-4 flex items-center">
                <Icon name="GlobeAltIcon" size={24} className="text-primary mr-2" />
                Environmental Sustainability
              </h3>
              <ul className="space-y-3">
                {aboutData.she_policy.environmental_sustainability.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Icon name="CheckCircleIcon" size={20} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="font-body text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Regulatory Compliance */}
            <div className="bg-white rounded-lg p-6 precision-shadow-md border border-border">
              <h3 className="font-brand-headline text-xl font-bold text-foreground mb-4 flex items-center">
                <Icon name="DocumentTextIcon" size={24} className="text-secondary mr-2" />
                Regulatory Compliance
              </h3>
              <ul className="space-y-3">
                {aboutData.she_policy.regulatory_compliance.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Icon name="CheckCircleIcon" size={20} className="text-secondary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="font-body text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Training & Continuous Improvement */}
            <div className="bg-white rounded-lg p-6 precision-shadow-md border border-border">
              <h3 className="font-brand-headline text-xl font-bold text-foreground mb-4 flex items-center">
                <Icon name="AcademicCapIcon" size={24} className="text-accent mr-2" />
                Training & Continuous Improvement
              </h3>
              <ul className="space-y-3">
                {aboutData.she_policy.training_continuous_improvement.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Icon name="CheckCircleIcon" size={20} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span className="font-body text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Testing Capabilities Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-brand-headline text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Quality Testing Capabilities
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {aboutData.quality_testing_capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-4 precision-shadow hover:precision-shadow-md engineering-transition"
              >
                <div className="flex items-start">
                  <Icon name="BeakerIcon" size={20} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <p className="font-body text-sm text-foreground font-medium">{capability}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-gradient-to-br from-accent/10 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-brand-headline text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Work With Us?
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-8">
            Let&apos;s discuss how we can help you with your next project.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link
              href={aboutData.contact.cta.href}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-cta px-8 py-3 rounded-md engineering-transition precision-shadow hover:precision-shadow-lg inline-flex items-center space-x-2"
            >
              <span>{aboutData.contact.cta.label}</span>
              <Icon name="ArrowRightIcon" size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-white rounded-lg p-6 precision-shadow-md border border-border">
              <h3 className="font-brand-headline text-lg font-bold text-foreground mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Icon name="PhoneIcon" size={20} className="text-accent mr-2 mt-0.5" />
                  <div>
                    {aboutData.contact.phones.map((phone, index) => (
                      <p key={index} className="font-body text-sm text-muted-foreground">{phone}</p>
                    ))}
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="EnvelopeIcon" size={20} className="text-accent mr-2 mt-0.5" />
                  <div>
                    {aboutData.contact.emails.map((email, index) => (
                      <p key={index} className="font-body text-sm text-muted-foreground break-all">{email}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 precision-shadow-md border border-border">
              <h3 className="font-brand-headline text-lg font-bold text-foreground mb-4">Our Locations</h3>
              <div className="space-y-4">
                {aboutData.contact.addresses.map((address, index) => (
                  <div key={index}>
                    <p className="font-body text-sm font-semibold text-foreground mb-1">{address.label}</p>
                    <p className="font-body text-sm text-muted-foreground">{address.line1}</p>
                    <p className="font-body text-sm text-muted-foreground">{address.line2}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
    <Footer />
    </>
  );
}
