// Performance optimization utilities

/**
 * Debounce function to limit the rate at which a function can fire
 * @param func The function to debounce
 * @param wait Wait time in milliseconds
 * @returns Debounced function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  
  return function(...args: Parameters<T>): void {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Throttle function to limit the rate at which a function can fire
 * @param func The function to throttle
 * @param limit Limit in milliseconds
 * @returns Throttled function
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  let lastResult: ReturnType<T>;
  
  return function(...args: Parameters<T>): void {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Measure component render time
 * @param componentName Name of the component
 * @param callback Function to measure
 * @returns Result of the callback function
 */
export function measureRenderTime<T>(componentName: string, callback: () => T): T {
  if (process.env.NODE_ENV === 'development') {
    const start = performance.now();
    const result = callback();
    const end = performance.now();
    console.log(`[Performance] ${componentName} rendered in ${(end - start).toFixed(2)}ms`);
    return result;
  }
  
  return callback();
}

/**
 * Check if Intersection Observer is supported
 * @returns Boolean indicating if Intersection Observer is supported
 */
export function supportsIntersectionObserver(): boolean {
  return typeof window !== 'undefined' && 'IntersectionObserver' in window;
}

/**
 * Check if user prefers reduced motion
 * @returns Boolean indicating if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Lazy load images that are not in the viewport
 * @param imageSelector CSS selector for images to lazy load
 * @param rootMargin Root margin for Intersection Observer
 */
export function lazyLoadImages(imageSelector: string = 'img[data-src]', rootMargin: string = '200px 0px'): void {
  if (!supportsIntersectionObserver() || typeof window === 'undefined') return;
  
  const images = document.querySelectorAll(imageSelector);
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.getAttribute('data-src');
          
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
          }
          
          observer.unobserve(img);
        }
      });
    },
    { rootMargin }
  );
  
  images.forEach((image) => observer.observe(image));
}