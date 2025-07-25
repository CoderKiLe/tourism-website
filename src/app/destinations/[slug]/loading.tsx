'use client';

import { motion } from 'framer-motion';
import { Container, LoadingSpinner } from '@/components/ui';

export default function DestinationDetailLoading() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Skeleton Hero */}
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] bg-gray-200 animate-pulse">
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-black/50 to-transparent">
          <Container>
            <div className="h-6 w-1/4 bg-gray-300 rounded-lg mb-4" />
            <div className="h-10 w-2/3 bg-gray-300 rounded-lg mb-4" />
            <div className="h-6 w-1/3 bg-gray-300 rounded-lg mb-6" />
            <div className="flex space-x-2">
              <div className="h-8 w-24 bg-gray-300 rounded-full" />
              <div className="h-8 w-24 bg-gray-300 rounded-full" />
            </div>
          </Container>
        </div>
      </div>

      {/* Skeleton Thumbnails */}
      <Container className="py-4 md:py-6">
        <div className="flex overflow-x-auto space-x-2 pb-2">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-md bg-gray-200 animate-pulse"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </Container>

      {/* Skeleton Content */}
      <Container className="py-8">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Skeleton Tabs */}
          <div className="flex border-b border-gray-200">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="h-12 w-24 bg-gray-100 animate-pulse mx-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>

          {/* Skeleton Tab Content */}
          <div className="p-6 md:p-8">
            <div className="h-8 w-1/3 bg-gray-200 rounded-lg mb-6 animate-pulse" />
            <div className="space-y-4 animate-pulse">
              <div className="h-4 w-full bg-gray-200 rounded-lg" />
              <div className="h-4 w-full bg-gray-200 rounded-lg" />
              <div className="h-4 w-5/6 bg-gray-200 rounded-lg" />
              <div className="h-4 w-4/5 bg-gray-200 rounded-lg" />
              <div className="h-4 w-full bg-gray-200 rounded-lg" />
            </div>
          </div>
        </div>
      </Container>

      {/* Loading Indicator */}
      <div className="fixed bottom-8 right-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-white p-4 rounded-full shadow-lg"
        >
          <LoadingSpinner size="md" />
        </motion.div>
      </div>
    </div>
  );
}