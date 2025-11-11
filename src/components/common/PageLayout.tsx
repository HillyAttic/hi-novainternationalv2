'use client';

import { ReactNode } from 'react';
import Breadcrumbs, { generateBreadcrumbs } from './Breadcrumbs';
import ContextualLinks from './ContextualLinks';
import { usePathname } from 'next/navigation';

interface PageLayoutProps {
  children: ReactNode;
  showBreadcrumbs?: boolean;
  showContextualLinks?: boolean;
  contextualLinksVariant?: 'grid' | 'list' | 'inline';
  className?: string;
}

/**
 * PageLayout Component
 * Wrapper component that adds breadcrumbs and contextual links
 * following the hub-and-spoke internal linking strategy
 */
export default function PageLayout({
  children,
  showBreadcrumbs = true,
  showContextualLinks = true,
  contextualLinksVariant = 'grid',
  className = '',
}: PageLayoutProps) {
  const pathname = usePathname();
  const breadcrumbs = generateBreadcrumbs(pathname);

  return (
    <div className={`min-h-screen ${className}`}>
      {/* Breadcrumbs */}
      {showBreadcrumbs && breadcrumbs.length > 1 && (
        <div className="bg-secondary/20 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        </div>
      )}

      {/* Main Content */}
      <main>{children}</main>

      {/* Contextual Links */}
      {showContextualLinks && (
        <div className="bg-gradient-to-b from-white to-secondary/10 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <ContextualLinks
              currentPage={pathname}
              variant={contextualLinksVariant}
            />
          </div>
        </div>
      )}
    </div>
  );
}
