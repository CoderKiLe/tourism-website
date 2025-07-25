'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container } from '@/components/ui';
import { FadeInSection, SlideInSection } from '@/components/animations';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Tiger's Nest Monastery in Bhutan"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white px-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">About TripToBhutan</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Your gateway to the magical Kingdom of Bhutan
            </p>
          </motion.div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                TripToBhutan was founded by a team of passionate Bhutanese guides and travel enthusiasts who wanted to share the unique beauty and culture of our homeland with the world. Our journey began in 2015 when we recognized the need for authentic, locally-operated travel experiences in Bhutan.
              </p>
              <p className="text-gray-700 mb-4">
                As natives of Bhutan, we bring unparalleled local knowledge and connections, allowing us to offer experiences that go beyond typical tourist routes. We're committed to sustainable tourism that benefits local communities while preserving Bhutan's pristine environment and rich cultural heritage.
              </p>
              <p className="text-gray-700">
                Today, TripToBhutan is proud to be one of the leading tour operators in the country, helping travelers from around the world experience the magic of the last Shangri-La on Earth while adhering to Bhutan's unique philosophy of Gross National Happiness.
              </p>
            </FadeInSection>
            
            <SlideInSection direction="left">
              <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Punakha Dzong in Bhutan"
                  fill
                  className="object-cover"
                />
              </div>
            </SlideInSection>
          </div>
        </Container>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <Container>
          <FadeInSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              At TripToBhutan, we operate according to Bhutan's philosophy of Gross National Happiness, ensuring that our tourism activities contribute positively to the country and its people.
            </p>
          </FadeInSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SlideInSection direction="up" delay={0.1} className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Sustainable Tourism</h3>
              <p className="text-gray-700 text-center">
                We practice high-value, low-impact tourism that preserves Bhutan's pristine environment and supports the country's commitment to remain carbon negative.
              </p>
            </SlideInSection>
            
            <SlideInSection direction="up" delay={0.2} className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Cultural Preservation</h3>
              <p className="text-gray-700 text-center">
                We promote and protect Bhutan's unique cultural heritage, ensuring that tourism strengthens rather than dilutes the country's rich traditions and way of life.
              </p>
            </SlideInSection>
            
            <SlideInSection direction="up" delay={0.3} className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Authentic Experiences</h3>
              <p className="text-gray-700 text-center">
                We create genuine connections between visitors and local communities, offering immersive experiences that reveal the true essence of Bhutanese culture and spirituality.
              </p>
            </SlideInSection>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <FadeInSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our team consists of experienced Bhutanese guides, travel experts, and cultural ambassadors who are passionate about sharing the wonders of Bhutan with the world.
            </p>
          </FadeInSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Sonam Cheden",
                role: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                bio: "Born and raised in Thimphu, Kinley has over 15 years of experience guiding travelers through Bhutan's sacred sites."
              },
              {
                name: "Lekey Dema",
                role: "Cultural Guide",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                bio: "A former Buddhist nun, Tshering specializes in explaining Bhutan's rich spiritual traditions and monastery etiquette."
              },
              {
                name: "Kinley Penjor",
                role: "Trekking Expert",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                bio: "With intimate knowledge of Bhutan's mountain trails, Dorji leads our trekking expeditions to remote valleys and passes."
              },
              {
                name: "Kunzang Choden",
                role: "Sustainability Director",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                bio: "Pema ensures our tours follow Bhutan's strict environmental guidelines and benefit local communities."
              }
            ].map((member, index) => (
              <SlideInSection key={member.name} direction="up" delay={index * 0.1} className="text-center">
                <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 mb-2">{member.role}</p>
                <p className="text-gray-700">{member.bio}</p>
              </SlideInSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Bhutan Tourism Info */}
      <section className="py-16 md:py-24 bg-gray-50">
        <Container>
          <FadeInSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Visiting Bhutan</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Bhutan's unique approach to tourism focuses on "High Value, Low Impact" experiences. Here's what you need to know about planning your visit to the Kingdom of Bhutan.
            </p>
          </FadeInSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SlideInSection direction="right" className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sustainable Development Fee</h3>
              <p className="text-gray-700 mb-4">
                Bhutan requires all international visitors (except those from India, Bangladesh, and Maldives) to pay a Sustainable Development Fee of $200 USD per person per night. This fee:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Supports free healthcare and education for all Bhutanese citizens</li>
                <li>Funds environmental conservation efforts</li>
                <li>Maintains cultural heritage sites</li>
                <li>Develops infrastructure for local communities</li>
              </ul>
            </SlideInSection>
            
            <SlideInSection direction="left" className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Travel Requirements</h3>
              <p className="text-gray-700 mb-4">
                To visit Bhutan, you'll need:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>A valid passport with at least 6 months validity</li>
                <li>A visa arranged through a licensed Bhutanese tour operator like TripToBhutan</li>
                <li>Proof of travel insurance</li>
                <li>Flights booked to Paro International Airport (typically via Bangkok, Delhi, Kathmandu, or Singapore)</li>
              </ul>
            </SlideInSection>
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Bhutan?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let us guide you through the Land of the Thunder Dragon and create memories that will last a lifetime.
            </p>
            <motion.a
              href="/destinations"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Bhutan
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>
        </Container>
      </section>
    </div>
  );
}