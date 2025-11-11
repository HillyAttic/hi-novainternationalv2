# Major Projects Portfolio

This directory contains the Major Projects portfolio page for Hi-Nova International.

## Overview

The Major Projects page showcases Hi-Nova's successfully delivered projects across diverse industries, demonstrating engineering excellence and client satisfaction.

## Key Statistics

- **24+ Clients** served across multiple industries
- **40+ Projects** successfully delivered
- **100% Success Rate** in project completion

## Features

### 1. Hero Section
- Compelling introduction to the major projects portfolio
- Key statistics display
- Professional industrial imagery

### 2. Projects Grid
- **Search Functionality**: Search by client name, location, or project description
- **Expandable Client Cards**: Click to expand and view all projects for each client
- **Detailed Project Information**:
  - Project Location
  - Work Description
  - Third Party Inspector (TPI)

### 3. Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Smooth animations and transitions

## Data Structure

The projects data is stored in `data/projectsData.ts` with the following structure:

```typescript
interface Project {
  'Project / Location': string;
  'Work Description': string;
  TPI: string;
}

interface ClientData {
  Client: string;
  Projects: Project[];
}
```

## Components

- `MajorProjectsInteractive.tsx` - Main interactive wrapper component
- `MajorProjectsHero.tsx` - Hero section with statistics
- `ProjectsGrid.tsx` - Searchable and expandable projects grid
- `data/projectsData.ts` - Complete projects data

## Navigation

The Major Projects page is accessible from:
- Header navigation: Projects > Major Projects
- Homepage: Featured Projects section > "View Major Projects Portfolio" button

## Future Enhancements

Potential improvements:
- Filter by industry/sector
- Sort by date, client name, or project size
- Export projects list to PDF
- Individual project detail pages
- Image gallery for each project
- Client testimonials integration
