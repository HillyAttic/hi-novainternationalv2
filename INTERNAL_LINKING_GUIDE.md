# Internal Linking Strategy Implementation Guide

## Overview

This implementation follows a **hub-and-spoke architecture** for internal linking, designed to:
- Improve SEO through strategic link distribution
- Enhance user navigation and discovery
- Create contextual relationships between pages
- Drive conversions through strategic link placement

**Owner:** Rohidas R Sharma  
**Architecture:** Hub-and-Spoke  
**Hub Page:** `/` (Home)  
**Spoke Pages:** `/about`, `/industries`, `/products`, `/services`, `/projects`, `/blog`, `/contact`

---

## Components Created

### 1. **Configuration File** (`src/config/internalLinks.ts`)
Central configuration for all internal linking strategies:
- Page-specific linking rules
- Related pages definitions
- Anchor text generation
- Linking guidelines (3-5 contextual links per page)

### 2. **ContextualLinks Component** (`src/components/common/ContextualLinks.tsx`)
Displays related internal links based on current page context.

**Usage:**
```tsx
import ContextualLinks from '@/components/common/ContextualLinks';

// Grid variant (default)
<ContextualLinks currentPage="/industries/food-dairy-brewery" variant="grid" />

// List variant
<ContextualLinks currentPage="/products/industrial-dryers" variant="list" />

// Inline variant
<ContextualLinks currentPage="/services/epc-engineering" variant="inline" maxLinks={4} />
```

### 3. **Breadcrumbs Component** (`src/components/common/Breadcrumbs.tsx`)
Hierarchical navigation following the pattern: Home > Industries > {Sector} > {Detail}

**Usage:**
```tsx
import Breadcrumbs, { generateBreadcrumbs } from '@/components/common/Breadcrumbs';

// Auto-generate from pathname
const breadcrumbs = generateBreadcrumbs('/industries/food-dairy-brewery');
<Breadcrumbs items={breadcrumbs} />

// Manual breadcrumbs
<Breadcrumbs 
  items={[
    { label: 'Home', href: '/' },
    { label: 'Industries', href: '/industries' },
    { label: 'Food Industry' }
  ]} 
/>
```

### 4. **IndustrySectorMatrix Component** (`src/components/common/IndustrySectorMatrix.tsx`)
Cross-section grid showing Sector ↔ Equipment relationships.

**Usage:**
```tsx
import IndustrySectorMatrix from '@/components/common/IndustrySectorMatrix';

// Display on /industries or /products pages
<IndustrySectorMatrix />
```

### 5. **RelatedEquipmentPanel Component** (`src/components/common/RelatedEquipmentPanel.tsx`)
Displays 3-6 related equipment items at the end of product pages.

**Usage:**
```tsx
import RelatedEquipmentPanel, { RELATED_EQUIPMENT_SETS } from '@/components/common/RelatedEquipmentPanel';

// Use predefined sets
<RelatedEquipmentPanel items={RELATED_EQUIPMENT_SETS.dryingSystems} />

// Custom items
<RelatedEquipmentPanel 
  items={[
    {
      name: 'Rotary Dryers',
      href: '/products/rotary-dryers',
      description: 'Continuous rotary drying for bulk materials',
      category: 'Drying'
    },
    // ... more items
  ]}
  title="Complete Your Process Line"
/>
```

### 6. **PageLayout Component** (`src/components/common/PageLayout.tsx`)
Wrapper component that automatically adds breadcrumbs and contextual links.

**Usage:**
```tsx
import PageLayout from '@/components/common/PageLayout';

export default function IndustryPage() {
  return (
    <PageLayout>
      {/* Your page content */}
    </PageLayout>
  );
}

// Customize behavior
<PageLayout 
  showBreadcrumbs={true}
  showContextualLinks={true}
  contextualLinksVariant="grid"
>
  {/* Content */}
</PageLayout>
```

### 7. **useInternalLinks Hook** (`src/hooks/useInternalLinks.ts`)
React hook for accessing internal linking data.

**Usage:**
```tsx
import { useInternalLinks } from '@/hooks/useInternalLinks';

function MyComponent() {
  const {
    pathname,
    getCurrentPageStrategy,
    getRelatedPagesForCurrentPage,
    getContextualLinksForCurrentPage,
    isHubPage,
    isSpokePage,
    getBreadcrumbs,
  } = useInternalLinks();

  const relatedPages = getRelatedPagesForCurrentPage();
  const contextualLinks = getContextualLinksForCurrentPage();
  
  return (
    <div>
      {relatedPages?.map(page => (
        <Link key={page.href} href={page.href}>{page.label}</Link>
      ))}
    </div>
  );
}
```

---

## Implementation Examples

### Example 1: Industry Page with Full Linking Strategy

```tsx
// app/industries/food-dairy-brewery/page.tsx
import PageLayout from '@/components/common/PageLayout';
import RelatedEquipmentPanel, { RELATED_EQUIPMENT_SETS } from '@/components/common/RelatedEquipmentPanel';

export default function FoodDairyBreweryPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-16">
        <h1>Food, Dairy & Brewery Solutions</h1>
        <p>Industry-specific equipment and services...</p>
      </section>

      {/* Main Content */}
      <section className="py-12">
        {/* Your content here */}
      </section>

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
    </PageLayout>
  );
}
```

### Example 2: Product Page with Contextual Links

```tsx
// app/products/industrial-dryers/page.tsx
import PageLayout from '@/components/common/PageLayout';
import RelatedEquipmentPanel, { RELATED_EQUIPMENT_SETS } from '@/components/common/RelatedEquipmentPanel';
import IndustrySectorMatrix from '@/components/common/IndustrySectorMatrix';

export default function IndustrialDryersPage() {
  return (
    <PageLayout contextualLinksVariant="list">
      {/* Hero */}
      <section className="py-16">
        <h1>Industrial Dryers - Complete Drying Solutions</h1>
      </section>

      {/* Product Details */}
      <section className="py-12">
        {/* Content */}
      </section>

      {/* Industry Applications Matrix */}
      <section className="py-12">
        <IndustrySectorMatrix />
      </section>

      {/* Related Drying Equipment */}
      <RelatedEquipmentPanel 
        items={RELATED_EQUIPMENT_SETS.dryingSystems}
        title="Explore Our Drying Systems"
      />
    </PageLayout>
  );
}
```

### Example 3: Service Page with Conversion Focus

```tsx
// app/services/epc-engineering/page.tsx
import PageLayout from '@/components/common/PageLayout';
import Link from 'next/link';

export default function EPCEngineeringPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-16">
        <h1>EPC Engineering & Turnkey Solutions</h1>
      </section>

      {/* Service Details */}
      <section className="py-12">
        {/* Content with inline contextual links */}
        <p>
          Our EPC services cover all aspects from design to commissioning.
          We specialize in{' '}
          <Link href="/industries/pharma-biotech" className="text-primary hover:underline">
            pharmaceutical facilities
          </Link>
          ,{' '}
          <Link href="/industries/food-dairy-brewery" className="text-primary hover:underline">
            food processing plants
          </Link>
          , and{' '}
          <Link href="/industries/chemical-fertilizer" className="text-primary hover:underline">
            chemical manufacturing units
          </Link>
          .
        </p>
      </section>

      {/* CTA Section with strategic links */}
      <section className="py-12 bg-secondary/20">
        <div className="text-center">
          <h2>Ready to Start Your Project?</h2>
          <div className="flex gap-4 justify-center mt-6">
            <Link href="/contact" className="btn-primary">
              Request Quote
            </Link>
            <Link href="/projects" className="btn-secondary">
              View Completed Projects
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
```

---

## Linking Guidelines

### Contextual Links Per Page
- **Minimum:** 3 contextual links
- **Maximum:** 5 contextual links
- **Placement:** Above the fold and near CTAs

### Anchor Text Best Practices
✅ **Good Examples:**
- "Explore our rotary dryer solutions"
- "See our EPC project capabilities"
- "View heat exchanger specifications"
- "Read case studies in your sector"

❌ **Avoid:**
- "Click here"
- "Learn more"
- "Read more"
- Generic text without context

### Authority Flow
1. Link from high-traffic pages (Home, Sectors) to new Blog posts and Case Studies
2. Ensure mutual linking between related pages:
   - `/products/industrial-dryers` ↔ `/industries/food-dairy-brewery`
   - `/products/industrial-dryers` ↔ `/industries/chemical-fertilizer`
3. Service pages should link to relevant industry pages and project gallery
4. All pages should have a clear path back to the hub (Home)

---

## Navigation Updates

The Header component has been updated to align with the hub-and-spoke architecture:

### Updated Industry Links
- `/industries/food-dairy-brewery` (was `/industries/food-dairy`)
- `/industries/pharma-biotech` (unchanged)
- `/industries/petrochemical-refinery` (was `/industries/petrochemical`)
- `/industries/chemical-fertilizer` (unchanged)
- `/industries/oil-gas-marine-defence` (was `/industries/oil-gas-marine`)
- `/industries/power-steel` (unchanged)
- `/industries/textile-dyes-paper` (was `/industries/textile-paper`)
- `/industries/edible-oil-carbon-black-soda-ash` (was `/industries/edible-oil`)
- `/industries/water-etp-stp-ro` (was `/industries/water-treatment`)
- `/industries/agriculture-infrastructure` (was `/industries/agriculture`)

### Updated Product Links
- Added `/products/industrial-dryers` as the core product hub
- Added `/products/fluidized-bed-dryers`
- Added `/products/band-dryers`
- Added `/products/filtration-units`
- Added `/products/agitators`
- Added `/products/calciners`

### Updated Service Links
- `/services/epc-engineering` (was `/services/epc-turnkey`)
- Added `/services/structural-fabrication`
- Added `/services/civil-projects`

### Updated About Links
- `/about/vision-mission-values` (was `/about/vision-mission`)
- Added `/sustainability`
- Added `/clients-case-studies`

---

## Testing Checklist

- [ ] All navigation links in Header work correctly
- [ ] Breadcrumbs display on all pages (except home)
- [ ] Contextual links appear at bottom of pages
- [ ] Related equipment panels show on product pages
- [ ] Industry-sector matrix displays on /industries and /products
- [ ] All internal links use descriptive anchor text
- [ ] Each page has 3-5 contextual links
- [ ] Mobile navigation works with updated links
- [ ] No broken links (404 errors)
- [ ] Links follow hub-and-spoke architecture

---

## Next Steps

1. **Create Missing Pages:** Ensure all linked pages exist in your app directory
2. **Add Content:** Populate pages with relevant content and inline contextual links
3. **Implement on Existing Pages:** Add PageLayout wrapper to existing pages
4. **Monitor Performance:** Track internal link click-through rates
5. **Iterate:** Adjust linking strategy based on user behavior and SEO performance

---

## Support

For questions or modifications to the internal linking strategy, contact:
**Rohidas R Sharma** - Project Owner
