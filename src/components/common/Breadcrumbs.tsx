'use client';

import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Breadcrumbs Component
 * Provides hierarchical navigation following the pattern:
 * Home > Industries > {Sector} > {Detail or Product}
 * 
 * Example: Home > Industries > Food Industry > Spray Dryer
 */
export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  if (!items || items.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center space-x-2 text-sm font-body ${className}`}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={index} className="flex items-center space-x-2">
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="text-muted-foreground hover:text-primary engineering-transition"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={isLast ? 'text-foreground font-medium' : 'text-muted-foreground'}
                aria-current={isLast ? 'page' : undefined}
              >
                {item.label}
              </span>
            )}
            {!isLast && (
              <Icon
                name="ChevronRightIcon"
                size={14}
                className="text-muted-foreground flex-shrink-0"
              />
            )}
          </div>
        );
      })}
    </nav>
  );
}

/**
 * Helper function to generate breadcrumbs from pathname
 */
export function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [{ label: 'Home', href: '/' }];

  let currentPath = '';
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    
    // Format the label (convert kebab-case to Title Case)
    const label = segment
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    // Don't add href to the last item (current page)
    const isLast = index === segments.length - 1;
    breadcrumbs.push({
      label,
      href: isLast ? undefined : currentPath,
    });
  });

  return breadcrumbs;
}
