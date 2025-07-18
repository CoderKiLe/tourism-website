'use client';

import { motion } from 'framer-motion';
import { Filter, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FilterBarProps } from '@/types';
import { Button } from '@/components/ui';

const FilterBar = ({
  filters = {
    categories: [],
    continents: [],
    priceRange: [],
    duration: []
  },
  activeFilters = {},
  onFilterChange,
  className
}: FilterBarProps) => {

  const handleCategoryToggle = (category: string) => {
    const currentCategories = activeFilters.categories || [];
    const newCategories = currentCategories.includes(category)
      ? currentCategories.filter(c => c !== category)
      : [...currentCategories, category];

    onFilterChange({
      ...activeFilters,
      categories: newCategories
    });
  };

  const handleContinentToggle = (continent: string) => {
    const currentContinents = activeFilters.continents || [];
    const newContinents = currentContinents.includes(continent)
      ? currentContinents.filter(c => c !== continent)
      : [...currentContinents, continent];

    onFilterChange({
      ...activeFilters,
      continents: newContinents
    });
  };

  const clearAllFilters = () => {
    onFilterChange({});
  };

  const hasActiveFilters =
    (activeFilters.categories && activeFilters.categories.length > 0) ||
    (activeFilters.continents && activeFilters.continents.length > 0);

  return (
    <motion.div
      className={cn('bg-white rounded-lg shadow-md p-6', className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-gray-600" />
          <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        </div>

        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className="text-blue-600 hover:text-blue-700"
          >
            <X className="w-4 h-4 mr-1" />
            Clear All
          </Button>
        )}
      </div>

      {/* Continents Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Continents</h4>
        <div className="flex flex-wrap gap-2">
          {filters.continents && filters.continents.map((continent) => {
            const isActive = activeFilters.continents?.includes(continent);
            return (
              <motion.button
                key={continent}
                onClick={() => handleContinentToggle(continent)}
                className={cn(
                  'px-3 py-2 rounded-full text-sm font-medium transition-all duration-200',
                  isActive
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {continent}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Categories Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Categories</h4>
        <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto pr-2">
          {filters.categories && filters.categories.map((category) => {
            const isActive = activeFilters.categories?.includes(category);
            return (
              <motion.button
                key={category}
                onClick={() => handleCategoryToggle(category)}
                className={cn(
                  'px-3 py-2 rounded-full text-sm font-medium transition-all duration-200',
                  isActive
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Best Time to Visit Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Best Time to Visit</h4>
        <div className="grid grid-cols-2 gap-2">
          {filters.duration && filters.duration.map((season) => {
            const isActive = activeFilters.duration?.includes(season);
            return (
              <motion.button
                key={season}
                onClick={() => {
                  const currentDurations = activeFilters.duration || [];
                  const newDurations = currentDurations.includes(season)
                    ? currentDurations.filter(d => d !== season)
                    : [...currentDurations, season];

                  onFilterChange({
                    ...activeFilters,
                    duration: newDurations
                  });
                }}
                className={cn(
                  'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {season}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Active Filters Summary */}
      {hasActiveFilters && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="pt-4 border-t border-gray-200"
        >
          <p className="text-sm text-gray-600 mb-2">Active filters:</p>
          <div className="flex flex-wrap gap-2">
            {activeFilters.continents?.map((continent) => (
              <span
                key={continent}
                className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
              >
                {continent}
                <button
                  onClick={() => handleContinentToggle(continent)}
                  className="ml-1 hover:text-green-600"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            
            {activeFilters.categories?.map((category) => (
              <span
                key={category}
                className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
              >
                {category}
                <button
                  onClick={() => handleCategoryToggle(category)}
                  className="ml-1 hover:text-blue-600"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default FilterBar;