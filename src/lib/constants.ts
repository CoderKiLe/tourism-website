// Application constants

// Animation durations and delays
export const ANIMATION = {
  DURATION: {
    FAST: 0.2,
    NORMAL: 0.3,
    SLOW: 0.5,
  },
  DELAY: {
    STAGGER: 0.1,
    SECTION: 0.2,
  },
  EASING: {
    EASE_OUT: [0.0, 0.0, 0.2, 1],
    EASE_IN: [0.4, 0.0, 1, 1],
    EASE_IN_OUT: [0.4, 0.0, 0.2, 1],
  },
} as const;

// Breakpoints for responsive design
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;

// Filter options
export const FILTER_OPTIONS = {
  CONTINENTS: [
    'Africa',
    'Asia',
    'Europe',
    'North America',
    'South America',
    'Oceania',
    'Antarctica',
  ],
  CATEGORIES: [
    'Adventure',
    'Architecture',
    'Beach',
    'Birdwatching',
    'City',
    'Cultural',
    'Culinary',
    'Expedition',
    'Historical',
    'Hiking',
    'Island',
    'Marine',
    'Mountain',
    'Nature',
    'Peaceful',
    'Photography',
    'Romantic',
    'Rural',
    'Scenic',
    'Shopping',
    'Spiritual',
    'Wildlife',
    'Winter',
    'Wonder',
  ],
  PRICE_RANGES: [
    'Budget ($)',
    'Mid-range ($$)',
    'Luxury ($$$)',
    'Ultra-luxury ($$$$)',
  ],
  DURATIONS: [
    '1-3 days',
    '4-7 days',
    '1-2 weeks',
    '2+ weeks',
  ],
} as const;

// Image sizes for optimization
export const IMAGE_SIZES = {
  THUMBNAIL: { width: 300, height: 200 },
  CARD: { width: 400, height: 300 },
  HERO: { width: 1200, height: 600 },
  GALLERY: { width: 800, height: 600 },
} as const;

// Navigation links
export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/destinations', label: 'Destinations' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

// Social media links
export const SOCIAL_LINKS = [
  { 
    name: 'Facebook', 
    href: 'https://facebook.com', 
    icon: 'Facebook' 
  },
  { 
    name: 'Instagram', 
    href: 'https://instagram.com', 
    icon: 'Instagram' 
  },
  { 
    name: 'Twitter', 
    href: 'https://twitter.com', 
    icon: 'Twitter' 
  },
] as const;

// SEO defaults
export const SEO = {
  TITLE: 'Wanderlust - Discover Amazing Destinations',
  DESCRIPTION: 'Explore breathtaking destinations around the world with our curated travel experiences. Find your next adventure with stunning visuals and detailed guides.',
  KEYWORDS: 'travel, tourism, destinations, adventure, vacation, explore, wanderlust',
  SITE_NAME: 'Wanderlust',
  LOCALE: 'en_US',
} as const;

// Performance thresholds
export const PERFORMANCE = {
  LIGHTHOUSE_SCORE_TARGET: 90,
  LCP_TARGET: 2500, // milliseconds
  FID_TARGET: 100,  // milliseconds
  CLS_TARGET: 0.1,  // score
  DEBOUNCE_DELAY: 300, // milliseconds
} as const;

// Grid configurations
export const GRID = {
  DESTINATIONS: {
    MOBILE: 1,
    TABLET: 2,
    DESKTOP: 3,
    LARGE: 4,
  },
} as const;