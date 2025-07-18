'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, Home, Map } from 'lucide-react';
import { Container, Button } from '@/components/ui';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 flex items-center">
      <Container className="py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Map className="w-10 h-10 text-blue-600" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              The page you're looking for doesn't exist or has been moved.
              Let's help you find your way back.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/destinations">
                <Button
                  variant="primary"
                  className="flex items-center justify-center"
                >
                  <Search className="w-4 h-4 mr-2" />
                  Explore destinations
                </Button>
              </Link>
              
              <Link href="/">
                <Button
                  variant="outline"
                  className="flex items-center justify-center"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Return to homepage
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}