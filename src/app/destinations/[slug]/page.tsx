'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, ChevronLeft, ChevronRight, Star, ArrowLeft } from 'lucide-react';
import { Container, Button } from '@/components/ui';
import { sampleDestinations, getRelatedDestinations } from '@/lib/data';
import { generateSlug, formatCoordinates, cn } from '@/lib/utils';

export default function DestinationDetailPage() {
  const { slug } = useParams();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  
  // Find the destination by slug
  const destination = sampleDestinations.find(
    dest => generateSlug(dest.name) === slug
  );
  
  // If destination not found, show error
  if (!destination) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <Container className="py-12 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Destination Not Found</h1>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find the destination you're looking for.
          </p>
          <Link href="/destinations">
            <Button variant="primary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Destinations
            </Button>
          </Link>
        </Container>
      </div>
    );
  }
  
  // Gallery images including the hero image
  const galleryImages = [
    destination.images.hero,
    ...destination.images.gallery
  ];
  
  // Handle image navigation
  const nextImage = () => {
    setActiveImageIndex((prev) => 
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };
  
  const prevImage = () => {
    setActiveImageIndex((prev) => 
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };
  
  // Handle keyboard navigation for gallery
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Breadcrumb Navigation */}
      <Container className="py-4">
        <nav aria-label="Breadcrumb" className="flex items-center text-sm">
          <Link href="/" className="text-gray-500 hover:text-blue-600 transition-colors">
            Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/destinations" className="text-gray-500 hover:text-blue-600 transition-colors">
            Destinations
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900 font-medium">{destination.name}</span>
        </nav>
      </Container>
      
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={galleryImages[activeImageIndex]}
              alt={destination.name}
              fill
              className="object-cover"
              sizes="100vw"
              quality={90}
              priority
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMjU2M2ViIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMWQ0ZWQ4Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZmlsbD0idXJsKCNhKSIgZD0iTTAgMGgxMjAwdjYwMEgweiIvPjwvc3ZnPg=="
            />
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>
        </AnimatePresence>
        
        {/* Gallery Navigation */}
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevImage}
            className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full"
            aria-label="Previous image"
            aria-controls="gallery-image"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextImage}
            className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full"
            aria-label="Next image"
            aria-controls="gallery-image"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>
        
        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-black/80 to-transparent">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center text-white/90 mb-2">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm md:text-base">
                  {destination.country}, {destination.continent}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                {destination.name}
              </h1>
              
              <div className="flex items-center text-white/90 mb-4">
                <Calendar className="w-4 h-4 mr-1" />
                <span className="text-sm md:text-base">
                  Best time to visit: {destination.bestTimeToVisit}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {destination.categories.map((category) => (
                  <span
                    key={category}
                    className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </motion.div>
          </Container>
        </div>
      </div>
      
      {/* Thumbnail Gallery */}
      <Container className="py-4 md:py-6">
        <div className="flex overflow-x-auto space-x-2 pb-2 scrollbar-hide">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveImageIndex(index)}
              className={cn(
                'relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-md overflow-hidden cursor-pointer',
                activeImageIndex === index ? 'ring-2 ring-blue-500' : ''
              )}
            >
              <Image
                src={image}
                alt={`${destination.name} - Image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 80px, 96px"
                quality={75}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNkYmVhZmUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNiZmRiZmUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBmaWxsPSJ1cmwoI2EpIiBkPSJNMCAwaDEwMHYxMDBIMHoiLz48L3N2Zz4="
              />
            </motion.div>
          ))}
        </div>
      </Container>
      
      {/* Content Tabs */}
      <Container className="py-8">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200" role="tablist" aria-label="Destination information">
            <button
              onClick={() => setActiveTab('overview')}
              className={cn(
                'px-6 py-4 text-sm md:text-base font-medium transition-colors',
                activeTab === 'overview'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              )}
              role="tab"
              aria-selected={activeTab === 'overview'}
              aria-controls="overview-tab"
              id="overview-tab-button"
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('highlights')}
              className={cn(
                'px-6 py-4 text-sm md:text-base font-medium transition-colors',
                activeTab === 'highlights'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              )}
              role="tab"
              aria-selected={activeTab === 'highlights'}
              aria-controls="highlights-tab"
              id="highlights-tab-button"
            >
              Highlights
            </button>
            <button
              onClick={() => setActiveTab('location')}
              className={cn(
                'px-6 py-4 text-sm md:text-base font-medium transition-colors',
                activeTab === 'location'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              )}
              role="tab"
              aria-selected={activeTab === 'location'}
              aria-controls="location-tab"
              id="location-tab-button"
            >
              Location
            </button>
          </div>
          
          {/* Tab Content */}
          <div className="p-6 md:p-8">
            <AnimatePresence mode="wait">
              {activeTab === 'overview' && (
                <motion.div
                  key="overview"
                  id="overview-tab"
                  role="tabpanel"
                  aria-labelledby="overview-tab-button"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About {destination.name}</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {destination.description}
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Best Time to Visit
                    </h3>
                    <p className="text-gray-700">
                      The best time to visit {destination.name} is during {destination.bestTimeToVisit} 
                      when the weather is most favorable and you can fully enjoy all the attractions.
                    </p>
                  </div>
                </motion.div>
              )}
              
              {activeTab === 'highlights' && (
                <motion.div
                  key="highlights"
                  id="highlights-tab"
                  role="tabpanel"
                  aria-labelledby="highlights-tab-button"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Highlights</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {destination.highlights.map((highlight, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
                      >
                        <div className="flex items-start">
                          <div className="bg-blue-100 p-2 rounded-full mr-3">
                            <Star className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{highlight}</h3>
                            <p className="text-gray-600 text-sm mt-1">
                              Experience the wonder of {highlight} at {destination.name}.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
              
              {activeTab === 'location' && (
                <motion.div
                  key="location"
                  id="location-tab"
                  role="tabpanel"
                  aria-labelledby="location-tab-button"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Location</h2>
                  <div className="bg-gray-100 rounded-lg p-4 mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Coordinates
                    </h3>
                    <p className="text-gray-700">
                      {formatCoordinates(destination.coordinates.lat, destination.coordinates.lng)}
                    </p>
                  </div>
                  <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden relative">
                    {/* Placeholder for map - in a real app, you would integrate Google Maps or similar */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-gray-500">
                        Map of {destination.name}, {destination.country}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
      
      {/* Related Destinations */}
      <Container className="py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Destinations</h2>
        
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex space-x-6 pb-4">
            {getRelatedDestinations(destination, 4).map((relatedDest, index) => (
                <motion.div
                  key={relatedDest.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex-shrink-0 w-72"
                >
                  <Link 
                    href={`/destinations/${generateSlug(relatedDest.name)}`}
                    className="block group"
                  >
                    <div className="relative h-40 rounded-lg overflow-hidden mb-3">
                      <Image
                        src={relatedDest.images.thumbnail}
                        alt={relatedDest.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 288px"
                        quality={75}
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNkYmVhZmUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNiZmRiZmUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBmaWxsPSJ1cmwoI2EpIiBkPSJNMCAwaDQwMHYyMDBIMHoiLz48L3N2Zz4="
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {relatedDest.name}
                    </h3>
                    <div className="flex items-center text-gray-500 text-sm mt-1">
                      <MapPin className="w-3 h-3 mr-1" />
                      <span>{relatedDest.country}, {relatedDest.continent}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </Container>
      
      {/* Back to Destinations */}
      <Container className="py-8">
        <Link href="/destinations">
          <Button variant="outline" className="flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Destinations
          </Button>
        </Link>
      </Container>
    </div>
  );
}