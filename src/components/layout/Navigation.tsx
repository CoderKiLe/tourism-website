'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAV_LINKS } from '@/lib/constants';
import { Button, Container } from '@/components/ui';

interface NavigationProps {
  isScrolled?: boolean;
  className?: string;
}

const Navigation = ({ isScrolled = false, className }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const textColor = isScrolled ? 'text-gray-900' : 'text-white';
  const hoverColor = isScrolled ? 'hover:text-blue-600' : 'hover:text-blue-200';

  return (
    <Container className={cn('py-4', className)}>
      <nav className="flex items-center justify-between" aria-label="Main navigation">
        {/* Logo */}
        <Link
          href="/"
          className={cn(
            'flex items-center space-x-2 text-xl font-bold transition-colors',
            textColor,
            hoverColor
          )}
        >
          <MapPin className="w-6 h-6" />
          <span>Bhutan</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'font-medium transition-colors duration-200 relative group',
                textColor,
                hoverColor
              )}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
          <Button variant="primary" size="sm">
            Book Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className={cn(
            'md:hidden p-2 rounded-lg transition-colors',
            textColor,
            hoverColor
          )}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            role="navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md rounded-lg mt-4 shadow-lg"
          >
            <div className="py-4 space-y-2">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="block px-4 py-3 text-gray-900 font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-lg mx-2"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.1 }}
                className="px-2 pt-2"
              >
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={closeMobileMenu}
                >
                  Book Now
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Navigation;