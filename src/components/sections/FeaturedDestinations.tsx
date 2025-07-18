'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { FeaturedDestinationsProps } from '@/types';
import { Container, DestinationCard } from '@/components/ui';

const FeaturedDestinations = ({
  destinations,
  title = "Featured Destinations",
  className
}: FeaturedDestinationsProps) => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.0, 0.0, 0.2, 1],
      },
    },
  };

  return (
    <section className={cn('py-16 md:py-24 bg-gray-50', className)}>
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover breathtaking destinations handpicked by our travel experts.
            Each location offers unique experiences and unforgettable memories.
          </p>
        </motion.div>

        {/* Destinations Horizontal Scroll */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Scroll Container */}
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex space-x-6 pb-4 px-4">
              {destinations.map((destination, index) => (
                <motion.div
                  key={destination.id}
                  variants={itemVariants}
                  custom={index}
                  className="flex-shrink-0 w-80 md:w-96"
                >
                  <DestinationCard
                    destination={destination}
                    priority={index < 3} // Prioritize loading for first 3 images
                    className="h-full"
                  />
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Scroll Hint */}
          <div className="flex justify-center mt-4">
            <div className="flex items-center space-x-2 text-gray-500 text-sm">
              <span>Scroll to explore more</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="/destinations"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Destinations
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>
        </motion.div>
      </Container>
    </section>
  );
};

export default FeaturedDestinations;