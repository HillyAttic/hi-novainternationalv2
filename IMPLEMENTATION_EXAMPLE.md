# Internal Linking Implementation Example

## Quick Start: Implementing on an Existing Page

Here's how to add the internal linking strategy to your existing pages:

### Before (Without Internal Linking)

```tsx
// app/industries/food-dairy-brewery/page.tsx
export default function FoodDairyBreweryPage() {
  return (
    <div>
      <h1>Food, Dairy & Brewery Solutions</h1>
      <p>Content here...</p>
    </div>
  );
}
```

### After (With Internal Linking Strategy)

```tsx
// app/industries/food-dairy-brewery/page.tsx
import { PageLayout, RelatedEquipmentPanel } from '@/components/common';

export default function FoodDairyBreweryPage() {
  return (
    <PageLayout>
      {/* Breadcrumbs automatically added: Home > Industries > Food Dairy Brewery */}
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1>Food, Dairy & Brewery Solutions</h1>
        <p>Content here...</p>
      </div>

      {/* Related Equipment Panel */}
      <RelatedEquipmentPanel 
        items={[
          {
            name: 'Industrial Dryers',
            href: '/products/industrial-dryers',
            description: 'Spray, rotary & flash dryers for food processing',
            category: 'Drying'
          },
          {
            name: 'Heat Exchangers',
            href: '/products/heat-exchangers',
            description: 'Efficient thermal solutions for dairy',
            category: 'Heat Transfer'
          },
          {
            name: 'Mixers & Blenders',
            href: '/products/mixers',
            description: 'Process mixing equipment',
            category: 'Process'
          },
          {
            name: 'Reactors',
            href: '/products/reactors',
            description: 'Fermentation & processing reactors',
            category: 'Process'
          },
        ]}
      />

      {/* Contextual links automatically added at bottom */}
    </PageLayout>
  );
}
```

---

## Component Import Patterns

### Option 1: Named Imports (Recommended)
```tsx
import { 
  PageLayout, 
  Breadcrumbs, 
  ContextualLinks, 
  RelatedEquipmentPanel,
  IndustrySectorMatrix,
  RELATED_EQUIPMENT_SETS 
} from '@/components/common';
```

### Option 2: Individual Imports
```tsx
import PageLayout from '@/components/common/PageLayout';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import ContextualLinks from '@/components/common/ContextualLinks';
```

---

## Real-World Page Examples

### 1. Home Page (Hub)

```tsx
// app/page.tsx or app/homepage/page.tsx
import { IndustrySectorMatrix } from '@/components/common';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20">
        <h1>Hi-Nova International - Engineering Excellence</h1>
        <div className="flex gap-4 mt-8">
          <Link href="/products/industrial-dryers" className="btn-primary">
            Explore Our Products
          </Link>
          <Link href="/services/epc-engineering" className="btn-secondary">
            EPC Services
          </Link>
        </div>
      </section>

      {/* Quick Links to Spokes */}
      <section className="py-16">
        <div className="grid grid-cols-3 gap-6">
          <Link href="/industries" className="card">Industries</Link>
          <Link href="/products" className="card">Products</Link>
          <Link href="/services" className="card">Services</Link>
          <Link href="/projects" className="card">Projects</Link>
          <Link href="/blog" className="card">Blog</Link>
          <Link href="/contact" className="card">Contact</Link>
        </div>
      </section>

      {/* Industry-Sector Matrix */}
      <section className="py-16">
        <IndustrySectorMatrix />
      </section>
    </div>
  );
}
```

### 2. Industry Page (Spoke)

```tsx
// app/industries/pharma-biotech/page.tsx
import { PageLayout, RelatedEquipmentPanel } from '@/components/common';
import Link from 'next/link';

export default function PharmaBiotechPage() {
  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Hero */}
        <h1 className="text-4xl font-bold mb-6">
          Pharmaceutical & Biotech Solutions
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          GMP-compliant equipment and cleanroom solutions for pharma manufacturing
        </p>

        {/* Content with inline contextual links */}
        <div className="prose max-w-none">
          <p>
            Our pharmaceutical solutions include{' '}
            <Link href="/products/reactors" className="text-primary hover:underline">
              GMP-compliant reactors
            </Link>
            ,{' '}
            <Link href="/products/filtration-units" className="text-primary hover:underline">
              sterile filtration systems
            </Link>
            , and{' '}
            <Link href="/services/cleanroom" className="text-primary hover:underline">
              cleanroom installations
            </Link>
            . We provide complete{' '}
            <Link href="/services/epc-engineering" className="text-primary hover:underline">
              turnkey EPC solutions
            </Link>
            {' '}for pharmaceutical facilities.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 flex gap-4">
          <Link href="/contact" className="btn-primary">
            Request Consultation
          </Link>
          <Link href="/projects" className="btn-secondary">
            View Pharma Projects
          </Link>
        </div>
      </div>

      {/* Related Equipment */}
      <RelatedEquipmentPanel 
        items={[
          {
            name: 'Reactors',
            href: '/products/reactors',
            description: 'GMP-compliant reactors for pharmaceutical processing',
            category: 'Process'
          },
          {
            name: 'Filtration Units',
            href: '/products/filtration-units',
            description: 'Sterile filtration systems for biotech applications',
            category: 'Separation'
          },
          {
            name: 'Cleanroom Solutions',
            href: '/services/cleanroom',
            description: 'ISO-certified cleanroom design and installation',
            category: 'Services'
          },
          {
            name: 'EPC Engineering',
            href: '/services/epc-engineering',
            description: 'Complete turnkey pharmaceutical facility projects',
            category: 'Services'
          },
        ]}
        title="Pharmaceutical Equipment & Services"
      />
    </PageLayout>
  );
}
```

### 3. Product Hub Page

```tsx
// app/products/industrial-dryers/page.tsx
import { 
  PageLayout, 
  RelatedEquipmentPanel, 
  IndustrySectorMatrix,
  RELATED_EQUIPMENT_SETS 
} from '@/components/common';
import Link from 'next/link';

export default function IndustrialDryersPage() {
  return (
    <PageLayout contextualLinksVariant="list">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Industrial Dryers - Complete Drying Solutions
          </h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive range of drying systems for every industry
          </p>
        </div>

        {/* Dryer Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <Link href="/products/rotary-dryers" className="card">
            <h3>Rotary Dryers</h3>
            <p>Continuous rotary drying for bulk materials</p>
          </Link>
          <Link href="/products/paddle-dryers" className="card">
            <h3>Paddle Dryers</h3>
            <p>Indirect heat transfer for sensitive materials</p>
          </Link>
          <Link href="/products/spray-dryers" className="card">
            <h3>Spray Dryers</h3>
            <p>Atomization drying for liquid feeds</p>
          </Link>
          <Link href="/products/flash-dryers" className="card">
            <h3>Flash Dryers</h3>
            <p>Rapid drying in pneumatic conveying</p>
          </Link>
          <Link href="/products/fluidized-bed-dryers" className="card">
            <h3>Fluidized Bed Dryers</h3>
            <p>Uniform particle drying</p>
          </Link>
          <Link href="/products/band-dryers" className="card">
            <h3>Band Dryers</h3>
            <p>Conveyor belt drying systems</p>
          </Link>
        </div>

        {/* Industry Applications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Industry Applications
          </h2>
          <IndustrySectorMatrix />
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/contact" className="btn-primary">
            Request Technical Consultation
          </Link>
        </div>
      </div>

      {/* Related Drying Equipment */}
      <RelatedEquipmentPanel 
        items={RELATED_EQUIPMENT_SETS.dryingSystems}
        title="Explore Our Complete Drying Systems Range"
      />
    </PageLayout>
  );
}
```

### 4. Service Page with Conversion Focus

```tsx
// app/services/epc-engineering/page.tsx
import { PageLayout, ContextualLinks } from '@/components/common';
import Link from 'next/link';

export default function EPCEngineeringPage() {
  return (
    <PageLayout showContextualLinks={false}>
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Hero */}
        <h1 className="text-4xl font-bold mb-6">
          EPC Engineering & Turnkey Solutions
        </h1>
        <p className="text-xl text-muted-foreground mb-12">
          Complete project execution from concept to commissioning
        </p>

        {/* Service Details with inline links */}
        <div className="prose max-w-none mb-12">
          <h2>Our EPC Capabilities</h2>
          <p>
            We deliver complete turnkey solutions across multiple industries including{' '}
            <Link href="/industries/pharma-biotech" className="text-primary hover:underline">
              pharmaceutical facilities
            </Link>
            ,{' '}
            <Link href="/industries/food-dairy-brewery" className="text-primary hover:underline">
              food processing plants
            </Link>
            ,{' '}
            <Link href="/industries/chemical-fertilizer" className="text-primary hover:underline">
              chemical manufacturing units
            </Link>
            , and{' '}
            <Link href="/industries/water-etp-stp-ro" className="text-primary hover:underline">
              water treatment facilities
            </Link>
            .
          </p>
        </div>

        {/* Industry Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Link href="/industries/pharma-biotech" className="card-sm">
            Pharma & Biotech
          </Link>
          <Link href="/industries/food-dairy-brewery" className="card-sm">
            Food & Dairy
          </Link>
          <Link href="/industries/chemical-fertilizer" className="card-sm">
            Chemical
          </Link>
          <Link href="/industries/petrochemical-refinery" className="card-sm">
            Petrochemical
          </Link>
        </div>

        {/* CTA Section */}
        <div className="bg-accent/10 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-muted-foreground mb-6">
            View our{' '}
            <Link href="/projects" className="text-primary hover:underline">
              completed projects
            </Link>
            {' '}or{' '}
            <Link href="/about/certifications" className="text-primary hover:underline">
              quality certifications
            </Link>
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Request Quote
            </Link>
            <Link href="/projects" className="btn-secondary">
              View Projects
            </Link>
          </div>
        </div>
      </div>

      {/* Custom Contextual Links */}
      <div className="bg-secondary/20 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <ContextualLinks 
            currentPage="/services/epc-engineering" 
            variant="grid"
            maxLinks={4}
          />
        </div>
      </div>
    </PageLayout>
  );
}
```

### 5. Blog Post with Contextual Links

```tsx
// app/blog/[slug]/page.tsx
import { PageLayout } from '@/components/common';
import Link from 'next/link';

export default function BlogPostPage() {
  return (
    <PageLayout contextualLinksVariant="inline">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">
          Choosing the Right Industrial Dryer for Your Process
        </h1>
        
        <div className="prose max-w-none">
          <p>
            When selecting an industrial dryer, understanding your material 
            characteristics is crucial. For heat-sensitive materials, our{' '}
            <Link href="/products/paddle-dryers" className="text-primary hover:underline">
              paddle dryers
            </Link>
            {' '}offer gentle indirect heating. For bulk materials, consider our{' '}
            <Link href="/products/rotary-dryers" className="text-primary hover:underline">
              rotary dryer solutions
            </Link>
            .
          </p>

          <h2>Industry-Specific Applications</h2>
          <p>
            Different industries have unique drying requirements. In the{' '}
            <Link href="/industries/food-dairy-brewery" className="text-primary hover:underline">
              food and dairy sector
            </Link>
            , hygiene and product quality are paramount. For{' '}
            <Link href="/industries/chemical-fertilizer" className="text-primary hover:underline">
              chemical processing
            </Link>
            , explosion-proof designs may be necessary.
          </p>

          <h2>Complete Solutions</h2>
          <p>
            Beyond equipment supply, we offer{' '}
            <Link href="/services/epc-engineering" className="text-primary hover:underline">
              complete EPC services
            </Link>
            {' '}to ensure seamless integration. View our{' '}
            <Link href="/projects" className="text-primary hover:underline">
              completed projects
            </Link>
            {' '}for real-world examples.
          </p>
        </div>

        {/* Related Articles */}
        <div className="mt-12 pt-8 border-t">
          <h3 className="text-xl font-bold mb-4">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/blog/spray-dryer-guide" className="card-sm">
              Complete Guide to Spray Dryers
            </Link>
            <Link href="/blog/heat-exchanger-selection" className="card-sm">
              Heat Exchanger Selection Criteria
            </Link>
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
```

---

## Key Takeaways

1. **Use PageLayout** for automatic breadcrumbs and contextual links
2. **Add inline contextual links** within your content (3-5 per page)
3. **Use RelatedEquipmentPanel** at the end of product pages
4. **Use IndustrySectorMatrix** on industry and product overview pages
5. **Always use descriptive anchor text** (not "click here")
6. **Link to conversion pages** (contact, projects) from service pages
7. **Create mutual links** between related pages

---

## Performance Tips

- Components are client-side rendered for interactivity
- Use Next.js Link component for optimal performance
- Breadcrumbs and contextual links are automatically generated
- All components are responsive and mobile-friendly
