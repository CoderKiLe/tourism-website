'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Clock, Star } from 'lucide-react';
import { cn, generateSlug, truncateText } from '@/lib/utils';
import { retryLoadImage } from '@/lib/imageUtils';
import { DestinationCardProps } from '@/types';
import LoadingSpinner from './LoadingSpinner';

const DestinationCard = ({ 
  destination, 
  className, 
  priority = false 
}: DestinationCardProps) => {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  const destinationSlug = generateSlug(destination.name);
  const truncatedDescription = truncateText(destination.shortDescription, 120);
  
  // Retry loading image if it fails
  useEffect(() => {
    if (imageError && retryCount < 3) {
      retryLoadImage(
        destination.images.thumbnail,
        3,
        1000,
        () => {
          setImageError(false);
          setImageLoading(false);
        },
        () => {
          setImageError(true);
          setImageLoading(false);
        }
      );
      setRetryCount(retryCount + 1);
    }
  }, [imageError, retryCount, destination.images.thumbnail]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    },
    hover: { 
      y: -8,
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  };

  const imageVariants = {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  };

  const overlayVariants = {
    hover: { 
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className={cn(
        'group bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer',
        'hover:shadow-2xl transition-shadow duration-300',
        className
      )}
    >
      <Link 
        href={`/destinations/${destinationSlug}`}
        aria-label={`View details of ${destination.name}, ${destination.country}`}
      >
        {/* Image Container */}
        <div className="relative h-48 md:h-56 overflow-hidden">
          {imageLoading && !imageError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <LoadingSpinner size="md" />
            </div>
          )}
          
          {!imageError ? (
            <motion.div variants={imageVariants} className="w-full h-full">
              <Image
                src={destination.images.thumbnail}
                alt={destination.name}
                fill
                className={cn(
                  "object-cover",
                  imageLoading ? "scale-110 blur-2xl" : "scale-100 blur-0"
                )}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={priority ? 85 : 75}
                priority={priority}
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNkYmVhZmUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNiZmRiZmUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBmaWxsPSJ1cmwoI2EpIiBkPSJNMCAwaDQwMHYzMDBIMHoiLz48L3N2Zz4="
                onLoad={() => setImageLoading(false)}
                onError={() => {
                  setImageError(true);
                  setImageLoading(false);
                }}
                style={{ transition: "all 0.7s ease-in-out" }}
              />
            </motion.div>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
              <MapPin className="w-12 h-12 text-blue-400" />
            </div>
          )}

          {/* Overlay with category */}
          <motion.div
            variants={overlayVariants}
            initial={{ opacity: 0 }}
            className="absolute inset-0 bg-black/20 flex items-end p-4"
          >
            <div className="flex flex-wrap gap-2">
              {destination.categories.slice(0, 2).map((category) => (
                <span
                  key={category}
                  className="px-2 py-1 bg-white/90 text-gray-800 text-xs font-medium rounded-full"
                >
                  {category}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Best time indicator */}
          <div className="absolute top-4 right-4">
            <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
              <Clock className="w-3 h-3 text-gray-600" />
              <span className="text-xs font-medium text-gray-700">
                {destination.bestTimeToVisit}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Location */}
          <div className="flex items-center space-x-2 text-gray-500 mb-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">
              {destination.country}, {destination.continent}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
            {destination.name}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {truncatedDescription}
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2 mb-4">
            {destination.highlights.slice(0, 3).map((highlight, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-md"
              >
                <Star className="w-3 h-3 mr-1" />
                {highlight}
              </span>
            ))}
          </div>

          {/* Call to action */}
          <div className="flex items-center justify-between">
            <span className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
              Explore Destination
            </span>
            <motion.div
              className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default DestinationCard;