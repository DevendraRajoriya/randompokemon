'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 animate-fade-in">
      <ol className="flex flex-wrap items-center gap-2 font-mono text-xs md:text-sm">
        {/* Home */}
        <li className="flex items-center gap-2">
          <Link 
            href="/" 
            className="flex items-center gap-1 text-charcoal hover:text-black transition-smooth"
          >
            <Home size={14} />
            <span>Home</span>
          </Link>
          {items.length > 0 && <ChevronRight size={14} className="text-charcoal/40" />}
        </li>

        {/* Dynamic Items */}
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={index} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <>
                  <Link 
                    href={item.href}
                    className="text-charcoal hover:text-black transition-smooth"
                  >
                    {item.label}
                  </Link>
                  <ChevronRight size={14} className="text-charcoal/40" />
                </>
              ) : (
                <span className="text-black font-bold">{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
