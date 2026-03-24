'use client';

import { useEffect } from 'react';
import { useReportWebVitals } from 'next/web-vitals';

/**
 * Web Vitals Monitoring Component
 * 
 * Tracks Core Web Vitals and sends them to analytics or console
 * Metrics tracked:
 * - CLS (Cumulative Layout Shift)
 * - FID (First Input Delay)
 * - FCP (First Contentful Paint)
 * - LCP (Largest Contentful Paint)
 * - TTFB (Time to First Byte)
 * - INP (Interaction to Next Paint)
 */
export function WebVitals() {
  useReportWebVitals((metric) => {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('[Web Vitals]', {
        name: metric.name,
        value: metric.value,
        rating: metric.rating,
        delta: metric.delta,
        id: metric.id,
      });
    }

    // Send to analytics in production
    if (process.env.NODE_ENV === 'production') {
      // Example: send to your analytics service
      // analytics.track('web-vital', {
      //   metric: metric.name,
      //   value: metric.value,
      //   rating: metric.rating,
      // });
      
      // Or send to custom endpoint
      // fetch('/api/analytics', {
      //   method: 'POST',
      //   body: JSON.stringify(metric),
      // });
    }

    // Provide user feedback for poor metrics in development
    if (process.env.NODE_ENV === 'development') {
      const thresholds = {
        CLS: 0.1,
        FID: 100,
        LCP: 2500,
        FCP: 1800,
        TTFB: 600,
        INP: 200,
      };

      const threshold = thresholds[metric.name as keyof typeof thresholds];
      if (threshold && metric.value > threshold) {
        console.warn(
          `⚠️ ${metric.name} is above recommended threshold:`,
          `${metric.value.toFixed(2)} > ${threshold}`
        );
      }
    }
  });

  return null;
}

/**
 * Performance Observer for custom metrics
 */
export function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window === 'undefined' || process.env.NODE_ENV !== 'development') {
      return;
    }

    // Monitor long tasks (>50ms)
    if ('PerformanceObserver' in window) {
      try {
        const longTaskObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.duration > 50) {
              console.warn('⚠️ Long Task detected:', {
                duration: `${entry.duration.toFixed(2)}ms`,
                startTime: `${entry.startTime.toFixed(2)}ms`,
              });
            }
          }
        });
        longTaskObserver.observe({ entryTypes: ['longtask'] });

        // Monitor layout shifts
        const layoutShiftObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const layoutShift = entry as PerformanceEntry & { value: number; hadRecentInput: boolean };
            if (!layoutShift.hadRecentInput && layoutShift.value > 0.1) {
              console.warn('⚠️ Layout Shift detected:', {
                value: layoutShift.value.toFixed(4),
                startTime: `${layoutShift.startTime.toFixed(2)}ms`,
              });
            }
          }
        });
        layoutShiftObserver.observe({ entryTypes: ['layout-shift'] });

        // Cleanup
        return () => {
          longTaskObserver.disconnect();
          layoutShiftObserver.disconnect();
        };
      } catch (error) {
        console.error('Performance Observer error:', error);
      }
    }
  }, []);

  return null;
}

/**
 * Log page load performance metrics
 */
export function logPerformanceMetrics() {
  if (typeof window === 'undefined') return;

  // Wait for page to fully load
  window.addEventListener('load', () => {
    setTimeout(() => {
      const perfData = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (perfData) {
        const metrics = {
          'DNS Lookup': perfData.domainLookupEnd - perfData.domainLookupStart,
          'TCP Connection': perfData.connectEnd - perfData.connectStart,
          'Request Time': perfData.responseStart - perfData.requestStart,
          'Response Time': perfData.responseEnd - perfData.responseStart,
          'DOM Interactive': perfData.domInteractive - perfData.fetchStart,
          'DOM Content Loaded': perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
          'Page Load': perfData.loadEventEnd - perfData.loadEventStart,
          'Total Load Time': perfData.loadEventEnd - perfData.fetchStart,
        };

        console.table(metrics);

        // Calculate and log resource timing
        const resources = window.performance.getEntriesByType('resource') as PerformanceResourceTiming[];
        const resourcesByType = resources.reduce((acc, resource) => {
          const type = resource.initiatorType;
          if (!acc[type]) acc[type] = { count: 0, totalDuration: 0 };
          acc[type].count++;
          acc[type].totalDuration += resource.duration;
          return acc;
        }, {} as Record<string, { count: number; totalDuration: number }>);

        console.log('Resources loaded:', {
          total: resources.length,
          byType: Object.entries(resourcesByType).map(([type, data]) => ({
            type,
            count: data.count,
            avgDuration: `${(data.totalDuration / data.count).toFixed(2)}ms`,
          })),
        });
      }
    }, 0);
  });
}
