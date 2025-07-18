'use client';

import { motion } from 'framer-motion';
import { Container, LoadingSpinner } from '@/components/ui';

export default function DestinationsLoading() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <Container className="py-12">
        {/* Skeleton Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="h-12 w-3/4 mx-auto bg-gray-200 rounded-lg mb-4 animate-pulse" />
          <div className="h-6 w-2/4 mx-auto bg-gray-200 rounded-lg animate-pulse" />
        </motion.div>
        
        {/* Skeleton Search and Filter */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Skeleton Filter */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 h-96 animate-pulse">
              <div className="h-6 w-1/3 bg-gray-200 rounded-lg mb-6" />
              <div className="space-y-4">
                <div className="h-4 w-full bg-gray-200 rounded-lg" />
                <div className="h-4 w-5/6 bg-gray-200 rounded-lg" />
                <div className="h-4 w-4/6 bg-gray-200 rounded-lg" />
              </div>
            </div>
          </div>
          
          {/* Skeleton Content */}
          <div className="lg:col-span-3">
            {/* Skeleton Search */}
            <div className="mb-8">
              <div className="h-12 w-full max-w-lg bg-gray-200 rounded-lg animate-pulse" />
            </div>
            
            {/* Skeleton Results */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-48 bg-gray-200" />
                  <div className="p-6">
                    <div className="h-4 w-1/4 bg-gray-200 rounded-lg mb-3" />
                    <div className="h-6 w-3/4 bg-gray-200 rounded-lg mb-4" />
                    <div className="h-4 w-full bg-gray-200 rounded-lg mb-2" />
                    <div className="h-4 w-5/6 bg-gray-200 rounded-lg" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Loading Indicator */}
        <div className="flex justify-center mt-12">
          <LoadingSpinner size="lg" />
        </div>
      </Container>
    </div>
  );
}