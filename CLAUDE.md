# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Hi-Nova Manufacturing Hub** - A Next.js 14 application with TypeScript and Tailwind CSS for a precision manufacturing company website. The application showcases engineering services, industry solutions, products, and resources.

## Development Commands

### Essential Commands
```bash
# Start development server (port 4028)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Type check
npm run type-check
```

### Development Workflow
1. Run `npm install` to install dependencies
2. Run `npm run dev` to start development server
3. Visit http://localhost:4028
4. Code changes auto-update (Next.js hot reload)

## Code Architecture

### Directory Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── homepage/          # Home page route
│   ├── industry-solutions/ # Industry solutions page
│   ├── engineering-services/ # Engineering services page
│   ├── product-detail/    # Product details page
│   ├── resource-center/   # Resources page
│   ├── contact-quote-request/ # Contact/quote page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page (redirects from /)
├── components/            # Reusable components
│   ├── common/           # Shared components (Header, Footer, etc.)
│   └── ui/               # UI primitives (Icon, Image, etc.)
└── styles/               # Global styles
    ├── index.css         # Main CSS entry point
    └── tailwind.css      # Tailwind with custom design system
```

### Architecture Patterns

**Page Structure**:
- Each route in `src/app/` contains:
  - `page.tsx` - Main page component
  - `components/` - Route-specific components
- Page components are client-side interactive containers that import and render individual section components

**Component Organization**:
- **Page-specific components**: Located in `src/app/{route}/components/`
- **Global components**: Located in `src/components/`
- **UI primitives**: Located in `src/components/ui/`

**Client Components**:
- Most interactive components use `'use client'` directive
- Pages use hydration pattern with `useState` and `useEffect` for client-side rendering
- Example pattern in `HomepageInteractive.tsx`

### Key Technical Details

**Path Aliases**:
- `@/*` maps to `./src/*` (configured in tsconfig.json)
- Use `@/components/...` for imports

**TypeScript Configuration**:
- Strict mode enabled
- Next.js plugin configured
- Module resolution: bundler

**Styling System**:
- **Tailwind CSS** with custom design tokens
- Custom color palette in `tailwind.css`:
  - Primary: Deep engineering blue (#1B365D)
  - Secondary: Precision light blue (#E8F4FD)
  - Accent: Engineering orange (#FF6B35)
- Custom font families:
  - `font-brand-headline`: Inter (brand headlines)
  - `font-value-proposition`: Source Sans Pro (value propositions)
  - `font-body`: Source Sans Pro (body text)
  - `font-cta`: Inter (call-to-action)
  - `font-technical`: JetBrains Mono (technical content)
- Custom utility classes:
  - `.precision-shadow` - Subtle box shadow
  - `.engineering-transition` - Smooth cubic-bezier transitions
  - `.technical-grid` - Grid utility
  - `.brand-spacing` / `.brand-spacing-lg` - Padding utilities

**Next.js Configuration** (`next.config.mjs`):
- Root redirect: `/` → `/homepage`
- Image optimization for Unsplash, Pexels, Pixabay
- TypeScript/ESLint errors ignored during build
- @dhiwise/component-tagger webpack loader configured
- Production browser source maps enabled

**Linting & Formatting**:
- ESLint with TypeScript rules
- Prettier for code formatting
- TypeScript ESLint rules configured for no-unused-vars, no-explicit-any
- Console warnings allowed (warn, error, info)

## Important Code Patterns

### Hydration Pattern
```tsx
'use client';
import { useState, useEffect } from 'react';

const Component = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return <Fallback />;
  }

  return <ClientComponent />;
};
```

### Header Navigation
- Global header in `src/components/common/Header.tsx`
- Responsive navigation with mobile menu
- Primary nav: Industry Solutions, Engineering Services, Products, Resources
- Secondary nav: Contact & Quote
- Sticky positioning with z-50

### Route Structure
- `/` → `/homepage` (redirect)
- `/homepage` - Main landing page
- `/industry-solutions` - Industry-specific solutions
- `/engineering-services` - Engineering services offered
- `/product-detail` - Product catalog/details
- `/resource-center` - Resources, webinars, documentation
- `/contact-quote-request` - Contact form and quote requests

## Development Notes

- **No test files** in the main codebase (no Jest/Vitest configuration found)
- All pages use server-side rendering by default with client-side hydration
- Component tagging enabled via @dhiwise/component-tagger
- Custom shadow utilities use brand colors (precision-shadow, precision-shadow-lg, precision-shadow-xl)
- All transitions use cubic-bezier easing: `cubic-bezier(0.25, 0.46, 0.45, 0.94)`

## External Services

- **Rocket.new** scripts embedded in root layout for development tools
- Google Fonts: Inter, JetBrains Mono, Source Sans Pro
- Image sources: Unsplash, Pexels, Pixabay configured in Next.js image settings
