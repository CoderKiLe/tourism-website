'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AlertOctagon, Home, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui';

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global error:', error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertOctagon className="w-10 h-10 text-red-600" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Something went seriously wrong
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              We apologize for the inconvenience. A critical error has occurred and we're working to fix it.
            </p>
            
            {error.digest && (
              <p className="text-sm text-gray-500 mb-6">
                Error ID: {error.digest}
              </p>
            )}
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button
                onClick={reset}
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try again
              </button>
              
              <Link href="/">
                <button
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Return to homepage
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </body>
    </html>
  );
}