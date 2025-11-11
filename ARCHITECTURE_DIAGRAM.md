# Internal Linking Architecture - Visual Diagram

## Hub-and-Spoke Structure

```
                                    ┌─────────────┐
                                    │    HOME     │
                                    │   (HUB)     │
                                    │      /      │
                                    └──────┬──────┘
                                           │
                    ┌──────────────────────┼──────────────────────┐
                    │                      │                      │
            ┌───────▼───────┐      ┌──────▼──────┐      ┌───────▼───────┐
            │    ABOUT      │      │ INDUSTRIES  │      │   PRODUCTS    │
            │   /about      │      │/industries  │      │  /products    │
            └───────┬───────┘      └──────┬──────┘      └───────┬───────┘
                    │                     │                      │
        ┌───────────┼───────────┐         │              ┌───────┼───────┐
        │           │           │         │              │       │       │
    ┌───▼───┐   ┌──▼──┐   ┌───▼───┐     │          ┌───▼───┐ ┌─▼──┐ ┌──▼──┐
    │Vision │   │Infra│   │Certs  │     │          │Dryers │ │Heat│ │React│
    │Mission│   │     │   │       │     │          │       │ │Exch│ │ors  │
    └───────┘   └─────┘   └───────┘     │          └───┬───┘ └─┬──┘ └──┬──┘
                                         │              │       │       │
                    ┌────────────────────┼──────────────┘       │       │
                    │                    │                      │       │
            ┌───────▼───────┐    ┌──────▼──────┐              │       │
            │   SERVICES    │    │   PROJECTS  │              │       │
            │  /services    │    │  /projects  │              │       │
            └───────┬───────┘    └──────┬──────┘              │       │
                    │                   │                      │       │
        ┌───────────┼───────────┐       │                      │       │
        │           │           │       │                      │       │
    ┌───▼───┐   ┌──▼──┐   ┌───▼───┐   │                      │       │
    │  EPC  │   │Clean│   │Struct │   │                      │       │
    │       │   │room │   │Fabric │   │                      │       │
    └───┬───┘   └─────┘   └───────┘   │                      │       │
        │                              │                      │       │
        └──────────────────────────────┼──────────────────────┘       │
                                       │                              │
                            ┌──────────▼──────────┐                   │
                            │       BLOG          │                   │
                            │      /blog          │                   │
                            └──────────┬──────────┘                   │
                                       │                              │
                            ┌──────────▼──────────┐                   │
                            │     CONTACT         │◄──────────────────┘
                            │    /contact         │
                            │  (CONVERSION)       │
                            └─────────────────────┘
```

## Cross-Linking Patterns

### Industry → Product Links
```
┌─────────────────────────┐
│  Food, Dairy & Brewery  │
│  /industries/food-...   │
└────────┬────────────────┘
         │
         ├──────► Industrial Dryers (/products/industrial-dryers)
         ├──────► Heat Exchangers (/products/heat-exchangers)
         ├──────► Mixers (/products/mixers)
         └──────► Reactors (/products/reactors)
```

### Product → Industry Links
```
┌─────────────────────────┐
│   Industrial Dryers     │
│  /products/industrial-  │
│        dryers           │
└────────┬────────────────┘
         │
         ├──────► Food, Dairy & Brewery (/industries/food-dairy-brewery)
         ├──────► Chemical & Fertilizer (/industries/chemical-fertilizer)
         ├──────► Pharma & Biotech (/industries/pharma-biotech)
         └──────► Textile, Dyes & Paper (/industries/textile-dyes-paper)
```

### Service → Industry/Product Links
```
┌─────────────────────────┐
│   EPC Engineering       │
│  /services/epc-...      │
└────────┬────────────────┘
         │
         ├──────► Industries (/industries)
         ├──────► Projects (/projects)
         └──────► Contact (/contact) [CONVERSION]
```

## Component Placement Strategy

### Page Structure
```
┌─────────────────────────────────────────────────────────┐
│                      HEADER                             │
│  [Logo] [Industries▼] [Products▼] [Services▼] [Quote]  │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│                    BREADCRUMBS                          │
│  Home > Industries > Food Dairy Brewery                 │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│                                                         │
│                   MAIN CONTENT                          │
│                                                         │
│  • Hero Section                                         │
│  • Content with inline contextual links (3-5)          │
│  • CTA buttons to conversion pages                     │
│                                                         │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│            INDUSTRY-SECTOR MATRIX                       │
│  (On /industries and /products pages)                   │
│                                                         │
│  [Food] → Dryers, Heat Exchangers, Mixers              │
│  [Pharma] → Reactors, Filtration, Cleanroom            │
│  [Petro] → Pressure Vessels, Heat Exchangers           │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│          RELATED EQUIPMENT PANEL                        │
│  (On product pages)                                     │
│                                                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐            │
│  │ Rotary   │  │ Paddle   │  │ Spray    │            │
│  │ Dryers   │  │ Dryers   │  │ Dryers   │            │
│  └──────────┘  └──────────┘  └──────────┘            │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│              CONTEXTUAL LINKS                           │
│  (Automatically generated based on page)                │
│                                                         │
│  Related Solutions:                                     │
│  • Link to related page 1                              │
│  • Link to related page 2                              │
│  • Link to related page 3                              │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│                      FOOTER                             │
└─────────────────────────────────────────────────────────┘
```

## Link Flow for User Journeys

### Journey 1: Industry Research → Product → Conversion
```
Home
  ↓
Industries (spoke)
  ↓
Food, Dairy & Brewery (industry page)
  ↓ [contextual link]
Industrial Dryers (product hub)
  ↓ [related equipment]
Spray Dryers (specific product)
  ↓ [CTA]
Contact / Quote Request (CONVERSION) ✓
```

### Journey 2: Product Search → Industry Application → Service
```
Home
  ↓
Products (spoke)
  ↓
Industrial Dryers (product hub)
  ↓ [industry matrix]
Pharma & Biotech (industry page)
  ↓ [contextual link]
EPC Engineering (service page)
  ↓ [CTA]
Contact / Quote Request (CONVERSION) ✓
```

### Journey 3: Blog → Product → Industry → Conversion
```
Home
  ↓
Blog (spoke)
  ↓
"Choosing the Right Dryer" (blog post)
  ↓ [inline link]
Paddle Dryers (product page)
  ↓ [related equipment]
Food, Dairy & Brewery (industry page)
  ↓ [CTA]
Contact / Quote Request (CONVERSION) ✓
```

## Link Equity Distribution

### Priority Levels
```
HIGHEST PRIORITY (Most Link Equity)
├── Home (/)
├── Products/Industrial Dryers (/products/industrial-dryers)
└── Services/EPC Engineering (/services/epc-engineering)

HIGH PRIORITY
├── Industries (/industries)
├── Products (/products)
├── Services (/services)
├── Projects (/projects)
└── Contact (/contact)

MEDIUM PRIORITY
├── Individual Industry Pages
├── Individual Product Pages
└── Individual Service Pages

LOWER PRIORITY
├── About Pages
├── Blog Posts
└── Case Studies
```

## Contextual Link Density

### Recommended Links Per Page Type
```
┌─────────────────┬──────────────┬─────────────┬──────────────┐
│   Page Type     │ Breadcrumbs  │  Inline     │  Bottom      │
│                 │              │  Links      │  Links       │
├─────────────────┼──────────────┼─────────────┼──────────────┤
│ Home            │      0       │    5-7      │      0       │
│ Industry        │      1       │    3-5      │    3-6       │
│ Product Hub     │      1       │    4-6      │    6         │
│ Product Detail  │      1       │    3-5      │    3-6       │
│ Service         │      1       │    4-6      │    3-4       │
│ Blog Post       │      1       │    5-8      │    2-4       │
│ About           │      1       │    2-3      │    3-4       │
└─────────────────┴──────────────┴─────────────┴──────────────┘
```

## Conversion Path Optimization

### Every Page Should Have Path to Conversion
```
ANY PAGE
    │
    ├─► Direct CTA → Contact/Quote
    │
    ├─► Related Content → Industry/Product → Contact/Quote
    │
    └─► Projects/Case Studies → Contact/Quote
```

### Maximum Clicks to Conversion: 3
```
Home → Industry → Product → Contact ✓ (3 clicks)
Home → Product → Contact ✓ (2 clicks)
Home → Contact ✓ (1 click)
```

---

**Architecture Owner:** Rohidas R Sharma  
**Design Pattern:** Hub-and-Spoke with Cross-Linking  
**Goal:** SEO Authority + User Discovery + Conversion Optimization
