'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  const primaryNavItems = [
    { label: 'Industry Solutions', href: '/industry-solutions' },
    { label: 'Engineering Services', href: '/engineering-services' },
    { label: 'Products', href: '/product-detail' },
    { label: 'Resources', href: '/resource-center' },
  ];

  const secondaryNavItems = [
    { label: 'Contact & Quote', href: '/contact-quote-request' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMoreMenu = () => {
    setIsMoreMenuOpen(!isMoreMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const closeMoreMenu = () => {
    setIsMoreMenuOpen(false);
  };

  return (
    <header className={`bg-white border-b border-border precision-shadow sticky top-0 z-50 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/homepage" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center engineering-transition group-hover:scale-105">
                <svg
                  className="w-6 h-6 text-primary-foreground"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
                  <path d="M8 11l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <div className="hidden sm:block">
                <div className="font-brand-headline text-xl text-primary">Hi-Nova</div>
                <div className="font-technical text-xs text-muted-foreground -mt-1">Manufacturing Hub</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {primaryNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-body text-foreground hover:text-primary engineering-transition px-3 py-2 rounded-md hover:bg-secondary/50"
              >
                {item.label}
              </Link>
            ))}
            
            {/* More Menu */}
            <div className="relative">
              <button
                onClick={toggleMoreMenu}
                className="font-body text-foreground hover:text-primary engineering-transition px-3 py-2 rounded-md hover:bg-secondary/50 flex items-center space-x-1"
              >
                <span>More</span>
                <Icon 
                  name="ChevronDownIcon" 
                  size={16} 
                  className={`engineering-transition ${isMoreMenuOpen ? 'rotate-180' : ''}`} 
                />
              </button>
              
              {isMoreMenuOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={closeMoreMenu}
                  />
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md precision-shadow-lg border border-border z-20">
                    <div className="py-1">
                      {secondaryNavItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={closeMoreMenu}
                          className="block px-4 py-2 font-body text-foreground hover:text-primary hover:bg-secondary/50 engineering-transition"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact-quote-request"
              className="bg-accent text-accent-foreground font-cta px-6 py-2 rounded-md hover:bg-accent/90 engineering-transition precision-shadow hover:precision-shadow-lg"
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-foreground hover:text-primary p-2 rounded-md engineering-transition"
              aria-label="Toggle mobile menu"
            >
              <Icon 
                name={isMobileMenuOpen ? "XMarkIcon" : "Bars3Icon"} 
                size={24} 
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-white">
            <div className="px-4 py-4 space-y-2">
              {primaryNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="block font-body text-foreground hover:text-primary px-3 py-2 rounded-md hover:bg-secondary/50 engineering-transition"
                >
                  {item.label}
                </Link>
              ))}
              {secondaryNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="block font-body text-foreground hover:text-primary px-3 py-2 rounded-md hover:bg-secondary/50 engineering-transition"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                <Link
                  href="/contact-quote-request"
                  onClick={closeMobileMenu}
                  className="block bg-accent text-accent-foreground font-cta px-6 py-3 rounded-md text-center hover:bg-accent/90 engineering-transition precision-shadow"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;