import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header, Footer, PageTransition } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bhutan - Discover the Land of the Thunder Dragon",
  description: "Explore Bhutan's sacred monasteries, pristine valleys, and ancient fortresses. Discover the last Shangri-La on Earth with breathtaking Himalayan landscapes and rich Buddhist culture.",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: '/globe.svg',
    shortcut: '/globe.svg',
    apple: '/globe.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/globe.svg" type="image/svg+xml" />
        {/* Preconnect to image domains */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://images.pexels.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Skip to content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md"
        >
          Skip to main content
        </a>
        
        <Header />
        <PageTransition>
          <main id="main-content">{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
