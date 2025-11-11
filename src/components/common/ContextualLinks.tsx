'use client';

import Link from 'next/link';
import { getRelatedPages, getContextualLinks, PAGE_LINKING_STRATEGY } from '@/config/internalLinks';
import Icon from '@/components/ui/AppIcon';

interface ContextualLinksProps {
  currentPage: string;
  variant?: 'grid' | 'list' | 'inline';
  className?: string;
  maxLinks?: number;
}

/**
 * ContextualLinks Component
 * Displays related internal links based on the hub-and-spoke strategy
 * 
 * @param currentPage - Current page slug (e.g., '/industries/food-dairy-brewery')
 * @param variant - Display style: 'grid', 'list', or 'inline'
 * @param maxLinks - Maximum number of links to display
 */
export default function ContextualLinks({
  currentPage,
  variant = 'grid',
  className = '',
  maxLinks = 6,
}: ContextualLinksProps) {
  const relatedPages = getRelatedPages(currentPage);
  const contextualLinks = getContextualLinks(currentPage);

  // If we have related pages with descriptions, use those
  if (relatedPages && relatedPages.length > 0) {
    const displayPages = relatedPages.slice(0, maxLinks);

    if (variant === 'grid') {
      return (
        <div className={`${className}`}>
          <h3 className="font-brand-headline text-xl font-semibold text-foreground mb-6">
            Related Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="group p-5 border border-border rounded-lg hover:border-primary hover:bg-secondary/30 engineering-transition precision-shadow-sm hover:precision-shadow-md"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-body font-semibold text-foreground group-hover:text-primary engineering-transition">
                    {page.label}
                  </h4>
                  <Icon
                    name="ArrowRightIcon"
                    size={16}
                    className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 engineering-transition flex-shrink-0 mt-1"
                  />
                </div>
                {page.description && (
                  <p className="font-body text-sm text-muted-foreground">
                    {page.description}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </div>
      );
    }

    if (variant === 'list') {
      return (
        <div className={`${className}`}>
          <h3 className="font-brand-headline text-lg font-semibold text-foreground mb-4">
            Related Solutions
          </h3>
          <ul className="space-y-3">
            {displayPages.map((page) => (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-secondary/50 engineering-transition"
                >
                  <Icon
                    name="ArrowRightIcon"
                    size={16}
                    className="text-primary flex-shrink-0 mt-1 group-hover:translate-x-1 engineering-transition"
                  />
                  <div>
                    <div className="font-body font-medium text-foreground group-hover:text-primary engineering-transition">
                      {page.label}
                    </div>
                    {page.description && (
                      <div className="font-body text-sm text-muted-foreground mt-0.5">
                        {page.description}
                      </div>
                    )}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }

  // Fallback: use contextual links without descriptions
  if (contextualLinks && contextualLinks.length > 0) {
    const displayLinks = contextualLinks.slice(0, maxLinks);

    if (variant === 'inline') {
      return (
        <div className={`flex flex-wrap gap-3 ${className}`}>
          {displayLinks.map((linkSlug) => {
            const pageInfo = PAGE_LINKING_STRATEGY[linkSlug];
            if (!pageInfo) return null;

            return (
              <Link
                key={linkSlug}
                href={linkSlug}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-secondary/50 hover:bg-secondary border border-border rounded-md text-sm font-body text-foreground hover:text-primary engineering-transition"
              >
                <span>{pageInfo.title}</span>
                <Icon name="ArrowRightIcon" size={14} />
              </Link>
            );
          })}
        </div>
      );
    }

    return (
      <div className={`${className}`}>
        <h3 className="font-brand-headline text-lg font-semibold text-foreground mb-4">
          Explore More
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {displayLinks.map((linkSlug) => {
            const pageInfo = PAGE_LINKING_STRATEGY[linkSlug];
            if (!pageInfo) return null;

            return (
              <Link
                key={linkSlug}
                href={linkSlug}
                className="group flex items-center justify-between p-4 border border-border rounded-lg hover:border-primary hover:bg-secondary/30 engineering-transition"
              >
                <span className="font-body font-medium text-foreground group-hover:text-primary">
                  {pageInfo.title}
                </span>
                <Icon
                  name="ArrowRightIcon"
                  size={16}
                  className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 engineering-transition"
                />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  return null;
}
