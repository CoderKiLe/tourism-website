import { ReactNode } from 'react';
import { Destination, FilterOptions } from './index';

// Layout component types
export interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export interface HeaderProps {
  className?: string;
}

export interface FooterProps {
  className?: string;
}

export interface NavigationProps {
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
}

// Section component types
export interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

export interface FeaturedDestinationsProps {
  destinations: Destination[];
  title?: string;
  className?: string;
}

// Animation component types
export interface FadeInSectionProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

export interface SlideInSectionProps {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

export interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export interface SlideInCardsProps {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  stagger?: number;
  className?: string;
}

export interface ParallaxContainerProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

// UI component types
export interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export interface ContainerProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
}

export interface GridProps {
  children: ReactNode;
  cols?: {
    default?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: number;
  className?: string;
}

// Form component types
export interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'textarea';
  placeholder?: string;
  required?: boolean;
  error?: string;
  className?: string;
}

// Page component types
export interface PageProps {
  params?: { [key: string]: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export interface DestinationPageProps extends PageProps {
  params: { slug: string };
}

export interface DestinationsPageProps extends PageProps {
  searchParams: {
    search?: string;
    continent?: string;
    category?: string;
    page?: string;
  };
}