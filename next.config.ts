import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 3600, // Increase cache TTL to 1 hour
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Performance optimizations
  compress: true, // Enable gzip compression
  poweredByHeader: false, // Remove X-Powered-By header
  reactStrictMode: true, // Enable React strict mode
  swcMinify: true, // Use SWC for minification
  
  // Experimental features
  experimental: {
    optimizeCss: true, // Optimize CSS
    optimizePackageImports: ['framer-motion', 'lucide-react'],
    serverActions: {
      bodySizeLimit: '2mb', // Limit server action payload size
    },
    serverComponentsExternalPackages: [], // Optimize server components
    scrollRestoration: true, // Restore scroll position on navigation
  },
  
  // Caching and revalidation
  staticPageGenerationTimeout: 120, // Increase timeout for static page generation
};

export default nextConfig;
