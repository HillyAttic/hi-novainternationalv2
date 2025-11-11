# Major Projects Page - Visual Guide

## Page Layout

```
┌─────────────────────────────────────────────────────────────┐
│                         HEADER                               │
│  [Logo]  Industries  Products  Services  Projects  ...      │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                      HERO SECTION                            │
│                                                              │
│  [Badge: Portfolio Excellence]                              │
│                                                              │
│  Hi-Nova International                                       │
│  Major Projects                                              │
│                                                              │
│  A comprehensive showcase of our successfully delivered      │
│  projects across diverse industries...                       │
│                                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                 │
│  │   24+    │  │   40+    │  │   100%   │                 │
│  │ Clients  │  │ Projects │  │ Success  │                 │
│  └──────────┘  └──────────┘  └──────────┘                 │
│                                                              │
│                                    [Industrial Image]        │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    SEARCH & FILTER                           │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ 🔍 Search by client, location, or project...          │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│              Showing 24 of 24 clients                        │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    PROJECTS GRID                             │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ 🏢  M/s Z-Tech (India) Ltd.          [▼]            │  │
│  │     1 Project                                         │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ 🏢  M/s Europem India Pvt. Ltd.      [▼]            │  │
│  │     1 Project                                         │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ 🏢  M/s Geo Tech Colour Chem         [▲]            │  │
│  │     2 Projects                                        │  │
│  ├──────────────────────────────────────────────────────┤  │
│  │ 📍 Location: Morbi, Gujarat                          │  │
│  │ 🔧 Work: Rotary Dryer                                │  │
│  │ 🛡️  TPI: Geo Tech                                    │  │
│  ├──────────────────────────────────────────────────────┤  │
│  │ 📍 Location: Morbi, Gujarat                          │  │
│  │ 🔧 Work: Cooler                                      │  │
│  │ 🛡️  TPI: Geo Tech                                    │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ 🏢  M/s Jagguar Sai Industries       [▼]            │  │
│  │     1 Project                                         │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
│  ... (more clients)                                          │
└─────────────────────────────────────────────────────────────┘
```

## Color Scheme

- **Primary**: Blue tones for headers and accents
- **Background**: Clean white/light gray
- **Cards**: White with subtle shadows
- **Hover States**: Smooth transitions with shadow elevation
- **Icons**: Primary color for visual hierarchy

## Interactive Elements

### 1. Search Bar
- Real-time filtering as you type
- Placeholder text guides users
- Magnifying glass icon for clarity

### 2. Client Cards
- **Collapsed State**: Shows client name, icon, and project count
- **Expanded State**: Reveals all projects with detailed information
- **Hover Effect**: Shadow elevation and subtle background change
- **Click Action**: Toggle expand/collapse with smooth animation

### 3. Project Details (When Expanded)
Each project shows three columns:
- **Location** (with map pin icon)
- **Work Description** (with tools icon)
- **TPI** (with shield icon)

## Responsive Behavior

### Desktop (1024px+)
- Full three-column layout for project details
- Wide search bar
- Spacious card layout

### Tablet (768px - 1023px)
- Two-column layout for project details
- Adjusted spacing
- Maintained readability

### Mobile (< 768px)
- Single column layout
- Stacked project information
- Touch-optimized buttons
- Compact but readable design

## Typography

- **Headlines**: Brand headline font (large, bold)
- **Body Text**: Clean, readable body font
- **Technical Details**: Monospace/technical font for specs
- **CTAs**: Bold, action-oriented font

## Icons Used

- 🏢 BuildingOfficeIcon - Client cards
- 📍 MapPinIcon - Location
- 🔧 WrenchScrewdriverIcon - Work description
- 🛡️ ShieldCheckIcon - TPI
- 🔍 MagnifyingGlassIcon - Search
- ▼ ChevronDownIcon - Collapsed state
- ▲ ChevronUpIcon - Expanded state

## User Flow

1. **Land on page** → See hero with statistics
2. **Scroll down** → Find search bar
3. **Search (optional)** → Filter clients/projects
4. **Click client card** → Expand to see projects
5. **Review details** → See location, work, and TPI
6. **Click again** → Collapse card
7. **Repeat** → Explore other clients

## Accessibility Features

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Screen reader friendly
- High contrast text
- Focus indicators on interactive elements

## Performance

- Client-side rendering for interactivity
- Efficient search algorithm
- Smooth animations (60fps)
- Optimized images
- Fast initial load
- No external API calls (static data)
