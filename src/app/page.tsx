"use client";
import { HeroSection, FeaturedDestinations, FadeInSection, SlideInSection, ParallaxSection } from "@/components";
import { getFeaturedDestinations } from "@/lib/data";
import { Container } from "@/components/ui";
import { useEffect, useState } from "react";

interface Destination {
  title: string;
  description: string;
  icon: string;
}

interface BhutanExperience {
  imageSrc: string;
  altText: string;
  title: string;
  linkText: string;
  linkHref: string;
}

export default function Home() {
  const featuredDestinations = getFeaturedDestinations(6);
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [bhutanExperiences, setBhutanExperiences] = useState<BhutanExperience[]>([]);

  useEffect(() => {
    fetch('/data/destinations.json')
      .then(response => response.json())
      .then(data => setDestinations(data));

    fetch('/data/bhutanExperiences.json')
      .then(response => response.json())
      .then(data => setBhutanExperiences(data));
  }, []);

  return (
    <div>
      <HeroSection
        title="Discover the Land of the Thunder Dragon"
        subtitle="Explore Bhutan's sacred monasteries, pristine valleys, and ancient fortresses. Experience the last Shangri-La on Earth."
        ctaText="Explore Bhutan"
        ctaHref="/destinations"
        backgroundImage="https://images.unsplash.com/photo-1598868659801-5a9f68d57bdc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <FeaturedDestinations 
        destinations={featuredDestinations}
        title="Explore Bhutan's Sacred Places"
      />
      
      {/* Why Visit Bhutan Section with FadeInSection */}
      <section className="py-20 bg-white">
        <Container>
          <FadeInSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Visit Bhutan?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the magic of the last Himalayan kingdom, where ancient traditions 
              and pristine nature create an unforgettable journey.
            </p>
          </FadeInSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {destinations.map((destination, index) => (
              <SlideInSection key={index} direction="up" delay={0.1 * (index + 1)} className="bg-gray-50 p-8 rounded-xl shadow-sm">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={destination.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{destination.title}</h3>
                <p className="text-gray-600 text-center">
                  {destination.description}
                </p>
              </SlideInSection>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Parallax Quote Section */}
      <ParallaxSection className="py-24 bg-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid)" />
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
          </svg>
        </div>
        <Container>
          <FadeInSection className="relative z-10 max-w-4xl mx-auto text-center">
            <svg className="w-12 h-12 mx-auto mb-6 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-2xl md:text-3xl lg:text-4xl font-light italic mb-8">
              "Bhutan is the only country in the world that measures progress not by gross domestic product, but by gross national happiness."
            </p>
            <p className="text-lg font-medium">— His Majesty Jigme Khesar Namgyel Wangchuck</p>
          </FadeInSection>
        </Container>
      </ParallaxSection>
      
      {/* Bhutan Experiences Section */}
      <section className="py-20 bg-white">
        <Container>
          <FadeInSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Bhutan Experiences
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the unique cultural and natural wonders that make Bhutan a truly special destination.
            </p>
          </FadeInSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bhutanExperiences.map((experience, index) => (
              <SlideInSection key={index} direction="up" delay={0.1 * (index + 1)} className="relative rounded-xl overflow-hidden group h-64">
                <img 
                  src={experience.imageSrc}
                  alt={experience.altText}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{experience.title}</h3>
                  <a href={experience.linkHref} className="text-blue-300 flex items-center">
                    {experience.linkText}
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </SlideInSection>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <SlideInSection direction="right" className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Ready to Experience Bhutan?
                </h2>
                <p className="text-gray-600 mb-8">
                  Start planning your journey to the Land of the Thunder Dragon today. 
                  Discover sacred temples, breathtaking landscapes, and a culture unlike any other.
                </p>
                <a 
                  href="/destinations" 
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Explore Destinations
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
              <div className="relative h-64 md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Tiger's Nest Monastery" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </SlideInSection>
        </Container>
      </section>
    </div>
  );
}
