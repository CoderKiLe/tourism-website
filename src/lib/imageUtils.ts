// Image utility functions for the tourism website

/**
 * Retry loading an image with exponential backoff
 * @param src Image source URL
 * @param maxRetries Maximum number of retries
 * @param initialDelay Initial delay in milliseconds
 * @param onSuccess Callback when image loads successfully
 * @param onError Callback when all retries fail
 */
export function retryLoadImage(
  src: string,
  maxRetries: number = 3,
  initialDelay: number = 1000,
  onSuccess?: () => void,
  onError?: () => void
): void {
  let retries = 0;
  
  const loadImage = () => {
    const img = new Image();
    
    img.onload = () => {
      if (onSuccess) onSuccess();
    };
    
    img.onerror = () => {
      retries++;
      
      if (retries <= maxRetries) {
        // Exponential backoff
        const delay = initialDelay * Math.pow(2, retries - 1);
        setTimeout(loadImage, delay);
      } else {
        if (onError) onError();
      }
    };
    
    img.src = src;
  };
  
  loadImage();
}

/**
 * Generate a simple SVG blur placeholder for images
 * @param width Width of the image
 * @param height Height of the image
 * @param color1 First gradient color (hex or named color)
 * @param color2 Second gradient color (hex or named color)
 * @returns Base64 encoded SVG for use as a blur placeholder
 */
export function generateBlurPlaceholder(
  width: number = 400, 
  height: number = 300, 
  color1: string = '#dbeafe', 
  color2: string = '#bfdbfe'
): string {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="${color1}"/>
          <stop offset="1" stop-color="${color2}"/>
        </linearGradient>
      </defs>
      <path fill="url(#a)" d="M0 0h${width}v${height}H0z"/>
    </svg>
  `.trim();
  
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
}

/**
 * Generate a shimmer effect SVG for image placeholders
 * @param width Width of the image
 * @param height Height of the image
 * @returns Base64 encoded SVG with shimmer effect
 */
export function generateShimmer(width: number = 400, height: number = 300): string {
  const shimmer = `
    <svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#f3f4f6" offset="20%" />
          <stop stop-color="#e5e7eb" offset="50%" />
          <stop stop-color="#f3f4f6" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="#f3f4f6" />
      <rect id="r" width="${width}" height="${height}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${width}" to="${width}" dur="1s" repeatCount="indefinite"  />
    </svg>
  `.trim();
  
  return `data:image/svg+xml;base64,${Buffer.from(shimmer).toString('base64')}`;
}

/**
 * Get appropriate image sizes attribute based on layout
 * @param layout Layout type (card, hero, thumbnail, etc.)
 * @returns Sizes attribute string for the Image component
 */
export function getImageSizes(layout: 'card' | 'hero' | 'thumbnail' | 'gallery' | 'related'): string {
  switch (layout) {
    case 'hero':
      return '100vw';
    case 'card':
      return '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';
    case 'thumbnail':
      return '(max-width: 768px) 80px, 96px';
    case 'gallery':
      return '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px';
    case 'related':
      return '(max-width: 768px) 100vw, 288px';
    default:
      return '100vw';
  }
}

/**
 * Get appropriate image quality based on importance
 * @param importance Image importance (high, medium, low)
 * @returns Quality value (1-100)
 */
export function getImageQuality(importance: 'high' | 'medium' | 'low'): number {
  switch (importance) {
    case 'high':
      return 90;
    case 'medium':
      return 80;
    case 'low':
      return 70;
    default:
      return 80;
  }
}