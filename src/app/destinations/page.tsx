'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, X } from 'lucide-react';
import { Container, SearchBox, FilterBar, DestinationCard, Grid, Button } from '@/components/ui';
import { sampleDestinations } from '@/lib/data';
import { filterDestinations, cn } from '@/lib/utils';
import { FILTER_OPTIONS } from '@/lib/constants';
import { FilterOptions } from '@/types';

export default function DestinationsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState<Partial<FilterOptions>>({});
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Handle window resize for responsive behavior
  useEffect(() => {
    const checkIfDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    // Initial check
    checkIfDesktop();

    // Add event listener
    window.addEventListener('resize', checkIfDesktop);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfDesktop);
  }, []);

  // Create properly formatted filters object
  const filters: FilterOptions = useMemo(() => ({
    categories: [...FILTER_OPTIONS.CATEGORIES],
    continents: [...FILTER_OPTIONS.CONTINENTS],
    priceRange: [...FILTER_OPTIONS.PRICE_RANGES],
    duration: [...FILTER_OPTIONS.DURATIONS]
  }), []);

  // Filter destinations based on search and filters
  const filteredDestinations = useMemo(() => {
    return filterDestinations(sampleDestinations, searchQuery, activeFilters);
  }, [searchQuery, activeFilters]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (filters: Partial<FilterOptions>) => {
    setActiveFilters(filters);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <Container className="py-12">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Bhutan's Sacred Places
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the mystical kingdom of Bhutan through its most sacred and beautiful destinations.
            Filter by your interests to find your perfect adventure.
          </p>
        </motion.div>

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-6">
          <Button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="w-full flex items-center justify-center"
            variant={showMobileFilters ? "primary" : "outline"}
          >
            {showMobileFilters ? (
              <>
                <X className="w-4 h-4 mr-2" />
                Hide Filters
              </>
            ) : (
              <>
                <Filter className="w-4 h-4 mr-2" />
                Show Filters
              </>
            )}
          </Button>
        </div>

        {/* Search and Filter Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Filters Sidebar */}
          <AnimatePresence>
            {(showMobileFilters || isDesktop) && (
              <motion.div
                className="lg:col-span-1"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <FilterBar
                  filters={filters}
                  activeFilters={activeFilters}
                  onFilterChange={(filters) => {
                    handleFilterChange(filters);
                    if (!isDesktop) {
                      setShowMobileFilters(false);
                    }
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search Box */}
            <div className="mb-8">
              <SearchBox
                onSearch={handleSearch}
                placeholder="Search Bhutan destinations..."
                className="w-full max-w-lg"
              />
            </div>

            {/* Results Header */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-between mb-6"
            >
              <h2 className="text-2xl font-semibold text-gray-900">
                {filteredDestinations.length} Destination{filteredDestinations.length !== 1 ? 's' : ''} Found
              </h2>

              {(searchQuery || Object.keys(activeFilters).length > 0) && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveFilters({});
                  }}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Clear all filters
                </button>
              )}
            </motion.div>

            {/* Destinations Grid */}
            {filteredDestinations.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Grid
                  cols={{
                    default: 1,
                    md: 2,
                    lg: 2,
                    xl: 3
                  }}
                  gap={8}
                >
                  {filteredDestinations.map((destination, index) => (
                    <motion.div
                      key={destination.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.5,
                        ease: [0.0, 0.0, 0.2, 1]
                      }}
                      viewport={{ once: true }}
                    >
                      <DestinationCard
                        destination={destination}
                        priority={index < 6}
                      />
                    </motion.div>
                  ))}
                </Grid>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-center py-12"
              >
                <div className="max-w-md mx-auto">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No destinations found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your search terms or filters to find what you're looking for.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setActiveFilters({});
                    }}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Show All Destinations
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}