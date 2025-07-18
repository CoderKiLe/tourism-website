'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';
import { Container, Button } from '@/components/ui';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

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
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-10 h-10 text-red-600" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Something went wrong
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              We apologize for the inconvenience. An unexpected error has occurred.
            </p>
            
            {error.digest && (
              <p className="text-sm text-gray-500 mb-6">
                Error ID: {error.digest}
              </p>
            )}
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button
                onClick={reset}
                variant="primary"
                className="flex items-center justify-center"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try again
              </Button>
              
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