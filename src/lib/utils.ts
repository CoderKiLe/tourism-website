import { Destination, FilterOptions } from "@/types";

// Simple class name utility function (alternative to clsx)
export function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(' ');
}

// Debounce function for search input
export function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}

// Filter destinations based on search query and filters
export function filterDestinations(
    destinations: Destination[],
    searchQuery: string,
    filters: Partial<FilterOptions>
): Destination[] {
    return destinations.filter((destination) => {
        // Search query filter
        const matchesSearch = !searchQuery ||
            destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            destination.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
            destination.description.toLowerCase().includes(searchQuery.toLowerCase());

        // Continent filter
        const matchesContinent = !filters.continents?.length ||
            filters.continents.includes(destination.continent);

        // Category filter
        const matchesCategory = !filters.categories?.length ||
            filters.categories.some(category =>
                destination.categories.includes(category)
            );

        return matchesSearch && matchesContinent && matchesCategory;
    });
}

// Sort destinations by various criteria
export function sortDestinations(
    destinations: Destination[],
    sortBy: 'name' | 'country' | 'continent' = 'name'
): Destination[] {
    return [...destinations].sort((a, b) => {
        switch (sortBy) {
            case 'name':
                return a.name.localeCompare(b.name);
            case 'country':
                return a.country.localeCompare(b.country);
            case 'continent':
                return a.continent.localeCompare(b.continent);
            default:
                return 0;
        }
    });
}

// Generate slug from destination name
export function generateSlug(name: string): string {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
}

// Format coordinates for display
export function formatCoordinates(lat: number, lng: number): string {
    const latDir = lat >= 0 ? 'N' : 'S';
    const lngDir = lng >= 0 ? 'E' : 'W';
    return `${Math.abs(lat).toFixed(4)}°${latDir}, ${Math.abs(lng).toFixed(4)}°${lngDir}`;
}

// Truncate text with ellipsis
export function truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
}

// Check if user prefers reduced motion
export function prefersReducedMotion(): boolean {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Generate random delay for staggered animations
export function getStaggerDelay(index: number, baseDelay: number = 0.1): number {
    return baseDelay * index;
}

// Validate image URL
export function isValidImageUrl(url: string): boolean {
    try {
        new URL(url);
        return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/i.test(url);
    } catch {
        return false;
    }
}