// Core data interfaces for the tourism website

export interface Destination {
  id: string;
  name: string;
  country: string;
  continent: string;
  description: string;
  shortDescription: string;
  images: {
    hero: string;
    gallery: string[];
    thumbnail: string;
  };
  highlights: string[];
  bestTimeToVisit: string;
  categories: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface FilterOptions {
  continents: string[];
  categories: string[];
  priceRange: string[];
  duration: string[];
}

// Component prop interfaces
export interface DestinationCardProps {
  destination: Destination;
  className?: string;
  priority?: boolean;
}

export interface SearchBoxProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
}

export interface FilterBarProps {
  filters: FilterOptions;
  activeFilters: Partial<FilterOptions>;
  onFilterChange: (filters: Partial<FilterOptions>) => void;
  className?: string;
}

// Animation and UI interfaces
export interface AnimationProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

// API response types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Re-export component types
export * from './components';