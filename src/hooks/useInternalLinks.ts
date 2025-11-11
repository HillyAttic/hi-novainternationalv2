'use client';

import { usePathname } from 'next/navigation';
import {
  getRelatedPages,
  getContextualLinks,
  PAGE_LINKING_STRATEGY,
  generateAnchorText,
  type PageLinkingStrategy,
} from '@/config/internalLinks';

/**
 * Hook for managing internal linking strategy
 * Provides contextual links based on current page
 */
export function useInternalLinks() {
  const pathname = usePathname();

  /**
   * Get the current page's linking strategy
   */
  const getCurrentPageStrategy = (): PageLinkingStrategy | null => {
    return PAGE_LINKING_STRATEGY[pathname] || null;
  };

  /**
   * Get related pages for current page
   */
  const getRelatedPagesForCurrentPage = () => {
    return getRelatedPages(pathname);
  };

  /**
   * Get contextual links for current page
   */
  const getContextualLinksForCurrentPage = () => {
    return getContextualLinks(pathname);
  };

  /**
   * Generate anchor text for a target page
   */
  const getAnchorText = (targetSlug: string): string => {
    return generateAnchorText(targetSlug);
  };

  /**
   * Check if current page is a hub page
   */
  const isHubPage = (): boolean => {
    return pathname === '/';
  };

  /**
   * Check if current page is a spoke page
   */
  const isSpokePage = (): boolean => {
    const spokePages = [
      '/about',
      '/industries',
      '/products',
      '/services',
      '/projects',
      '/blog',
      '/contact',
    ];
    return spokePages.some((spoke) => pathname.startsWith(spoke));
  };

  /**
   * Get breadcrumb trail for current page
   */
  const getBreadcrumbs = () => {
    const segments = pathname.split('/').filter(Boolean);
    const breadcrumbs = [{ label: 'Home', href: '/' }];

    let currentPath = '';
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const label = segment
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      const isLast = index === segments.length - 1;
      breadcrumbs.push({
        label,
        href: isLast ? undefined : currentPath,
      });
    });

    return breadcrumbs;
  };

  return {
    pathname,
    getCurrentPageStrategy,
    getRelatedPagesForCurrentPage,
    getContextualLinksForCurrentPage,
    getAnchorText,
    isHubPage,
    isSpokePage,
    getBreadcrumbs,
  };
}
