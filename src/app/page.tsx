import { HeroSection, FeaturedDestinations, FadeInSection, SlideInSection, ParallaxSection } from "@/components";
import { getFeaturedDestinations, getAllContinents } from "@/lib/data";
import { Container } from "@/components/ui";

export default function Home() {
  const featuredDestinations = getFeaturedDestinations(6);

  return (
    <div>
      <HeroSection
        title="Discover the World's Most Amazing Destinations"
        subtitle="Explore breathtaking landscapes, vibrant cultures, and unforgettable experiences across all seven continents."
        ctaText="Start Exploring"
        ctaHref="/destinations"
      />

      <FeaturedDestinations 
        destinations={featuredDestinations}
        title="Featured Global Destinations"
      />
      
      {/* Why Travel With Us Section */}
      <section className="py-20 bg-white">
        <Container>
          <FadeInSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Travel With Wanderlust?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We curate extraordinary travel experiences that connect you with diverse cultures, 
              breathtaking landscapes, and unforgettable adventures around the globe.
            </p>
          </FadeInSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <SlideInSection direction="up" delay={0.1} className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Global Diversity</h3>
              <p className="text-gray-600 text-center">
                Explore destinations across all seven continents, from tropical paradises to polar wilderness, ancient cities to modern marvels.
              </p>
            </SlideInSection>
            
            <SlideInSection direction="up" delay={0.2} className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Cultural Immersion</h3>
              <p className="text-gray-600 text-center">
                Connect with local communities, traditions, and authentic experiences that go beyond typical tourist attractions.
              </p>
            </SlideInSection>
            
            <SlideInSection direction="up" delay={0.3} className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Sustainable Travel</h3>
              <p className="text-gray-600 text-center">
                Travel with purpose through our commitment to environmental conservation, cultural preservation, and supporting local economies.
              </p>
            </SlideInSection>
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
              "The world is a book and those who do not travel read only one page."
            </p>
            <p className="text-lg font-medium">— Saint Augustine</p>
          </FadeInSection>
        </Container>
      </ParallaxSection>
      
      {/* Explore By Continent Section */}
      <section className="py-20 bg-white">
        <Container>
          <FadeInSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Explore By Continent
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover unique experiences and breathtaking destinations across all seven continents.
            </p>
          </FadeInSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SlideInSection direction="up" delay={0.1} className="relative rounded-xl overflow-hidden group h-64">
              <img 
                src="https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Asia" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Asia</h3>
                <a href="/destinations?continent=Asia" className="text-blue-300 flex items-center">
                  Explore Destinations
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </SlideInSection>
            
            <SlideInSection direction="up" delay={0.2} className="relative rounded-xl overflow-hidden group h-64">
              <img 
                src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Africa" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Africa</h3>
                <a href="/destinations?continent=Africa" className="text-blue-300 flex items-center">
                  Explore Destinations
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </SlideInSection>
            
            <SlideInSection direction="up" delay={0.3} className="relative rounded-xl overflow-hidden group h-64">
              <img 
                src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Europe" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Europe</h3>
                <a href="/destinations?continent=Europe" className="text-blue-300 flex items-center">
                  Explore Destinations
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </SlideInSection>
            
            <SlideInSection direction="up" delay={0.4} className="relative rounded-xl overflow-hidden group h-64">
              <img 
                src="https://images.unsplash.com/photo-1504730655501-e8638e63a831?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="North America" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">North America</h3>
                <a href="/destinations?continent=North America" className="text-blue-300 flex items-center">
                  Explore Destinations
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </SlideInSection>
            
            <SlideInSection direction="up" delay={0.5} className="relative rounded-xl overflow-hidden group h-64">
              <img 
                src="https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="South America" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">South America</h3>
                <a href="/destinations?continent=South America" className="text-blue-300 flex items-center">
                  Explore Destinations
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </SlideInSection>
            
            <SlideInSection direction="up" delay={0.6} className="relative rounded-xl overflow-hidden group h-64">
              <img 
                src="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Oceania" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Oceania</h3>
                <a href="/destinations?continent=Oceania" className="text-blue-300 flex items-center">
                  Explore Destinations
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </SlideInSection>
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
                  Ready for Your Next Adventure?
                </h2>
                <p className="text-gray-600 mb-8">
                  Start planning your journey to extraordinary destinations around the world. 
                  Discover breathtaking landscapes, vibrant cultures, and unforgettable experiences.
                </p>
                <a 
                  href="/destinations" 
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Explore All Destinations
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
              <div className="relative h-64 md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1551466629-dd0d9e243ee3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Antarctic Peninsula" 
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
