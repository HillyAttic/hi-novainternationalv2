# Internal Linking - Quick Reference Card

## 🚀 Import Statement
```tsx
import { 
  PageLayout, 
  Breadcrumbs, 
  ContextualLinks, 
  IndustrySectorMatrix,
  RelatedEquipmentPanel,
  RELATED_EQUIPMENT_SETS 
} from '@/components/common';
```

## 📝 Basic Page Template
```tsx
export default function YourPage() {
  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Your content */}
      </div>
    </PageLayout>
  );
}
```

## 🔗 Component Cheat Sheet

### PageLayout
```tsx
<PageLayout 
  showBreadcrumbs={true}
  showContextualLinks={true}
  contextualLinksVariant="grid" // or "list" or "inline"
>
  {children}
</PageLayout>
```

### Breadcrumbs (Manual)
```tsx
<Breadcrumbs items={[
  { label: 'Home', href: '/' },
  { label: 'Industries', href: '/industries' },
  { label: 'Food Industry' }
]} />
```

### Contextual Links
```tsx
<ContextualLinks 
  currentPage="/industries/food-dairy-brewery"
  variant="grid" // or "list" or "inline"
  maxLinks={6}
/>
```

### Industry-Sector Matrix
```tsx
<IndustrySectorMatrix />
```

### Related Equipment Panel
```tsx
// Using predefined sets
<RelatedEquipmentPanel items={RELATED_EQUIPMENT_SETS.dryingSystems} />
<RelatedEquipmentPanel items={RELATED_EQUIPMENT_SETS.heatTransfer} />
<RelatedEquipmentPanel items={RELATED_EQUIPMENT_SETS.processEquipment} />

// Custom items
<RelatedEquipmentPanel 
  items={[
    {
      name: 'Product Name',
      href: '/products/slug',
      description: 'Brief description',
      category: 'Category'
    }
  ]}
  title="Custom Title"
/>
```

### Inline Contextual Links
```tsx
<p>
  We specialize in{' '}
  <Link href="/products/industrial-dryers" className="text-primary hover:underline">
    industrial drying solutions
  </Link>
  {' '}for various industries.
</p>
```

## 🎯 Hub-and-Spoke URLs

### Hub
- `/` - Home

### Spokes
- `/about` - About Us
- `/industries` - Industries
- `/products` - Products
- `/services` - Services
- `/projects` - Projects
- `/blog` - Blog
- `/contact` - Contact

## 📍 Updated Industry URLs
```
/industries/food-dairy-brewery
/industries/pharma-biotech
/industries/petrochemical-refinery
/industries/chemical-fertilizer
/industries/oil-gas-marine-defence
/industries/power-steel
/industries/textile-dyes-paper
/industries/edible-oil-carbon-black-soda-ash
/industries/water-etp-stp-ro
/industries/agriculture-infrastructure
```

## 🛠️ Key Product URLs
```
/products/industrial-dryers (Core Hub)
/products/rotary-dryers
/products/paddle-dryers
/products/spray-dryers
/products/flash-dryers
/products/fluidized-bed-dryers
/products/band-dryers
/products/heat-exchangers
/products/pressure-vessels
/products/reactors
/products/mixers
/products/filtration-units
/products/skid-systems
/products/calciners
```

## 🔧 Service URLs
```
/services/epc-engineering (Primary)
/services/process-engineering
/services/cleanroom
/services/structural-fabrication
/services/civil-projects
```

## 📋 Linking Rules

✅ **DO:**
- Use 3-5 contextual links per page
- Use descriptive anchor text
- Link to related content
- Include conversion links (contact, quote)
- Link from high-traffic to new pages

❌ **DON'T:**
- Use "click here" or "read more"
- Over-link (more than 5 contextual links)
- Link to unrelated pages
- Use generic anchor text

## 🎨 Anchor Text Examples

✅ Good:
- "Explore our rotary dryer solutions"
- "See our EPC project capabilities"
- "View heat exchanger specifications"
- "Read case studies in your sector"

❌ Bad:
- "Click here"
- "Learn more"
- "Read more"
- "This page"

## 📊 Page Types & Components

| Page Type | Breadcrumbs | Contextual Links | Matrix | Equipment Panel |
|-----------|-------------|------------------|--------|-----------------|
| Home | ❌ | ❌ | ✅ | ❌ |
| Industry | ✅ | ✅ | ❌ | ✅ |
| Product Hub | ✅ | ✅ | ✅ | ✅ |
| Product Detail | ✅ | ✅ | ❌ | ✅ |
| Service | ✅ | ✅ | ❌ | ❌ |
| Blog Post | ✅ | ✅ | ❌ | ❌ |

## 🔍 useInternalLinks Hook
```tsx
import { useInternalLinks } from '@/hooks/useInternalLinks';

const {
  pathname,
  getCurrentPageStrategy,
  getRelatedPagesForCurrentPage,
  getContextualLinksForCurrentPage,
  isHubPage,
  isSpokePage,
  getBreadcrumbs,
} = useInternalLinks();
```

## 📚 Documentation Files
- `INTERNAL_LINKING_GUIDE.md` - Complete guide
- `IMPLEMENTATION_EXAMPLE.md` - Code examples
- `INTERNAL_LINKING_SUMMARY.md` - Overview
- `QUICK_REFERENCE.md` - This file

## ⚡ Quick Start Checklist
- [ ] Import components from `@/components/common`
- [ ] Wrap page with `<PageLayout>`
- [ ] Add 3-5 inline contextual links
- [ ] Add `RelatedEquipmentPanel` on product pages
- [ ] Add `IndustrySectorMatrix` on overview pages
- [ ] Test all navigation links
- [ ] Verify mobile responsiveness
- [ ] Check for 404 errors

---

**Owner:** Rohidas R Sharma  
**Last Updated:** November 11, 2025
