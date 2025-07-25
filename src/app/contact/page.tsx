'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Container, Button } from '@/components/ui';
import { FadeInSection, SlideInSection } from '@/components/animations';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16 md:py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Have questions about planning your trip to Bhutan? Our team of local experts is here to help you create the perfect journey through the Land of the Thunder Dragon.
            </p>
          </motion.div>
        </Container>
      </div>

      {/* Contact Information and Form */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <FadeInSection>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Our Location</h3>
                    <p className="text-gray-700">
                      Norzin Lam<br />
                      Thimphu 11001<br />
                      Kingdom of Bhutan
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                    <p className="text-gray-700">
                      info@triptobhutan.com<br />
                      bookings@triptobhutan.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
                    <p className="text-gray-700">
                      +975 17807306<br />
                      +975 2 333 555
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-700">
                      Monday - Friday: 9:00 AM - 5:00 PM (BST)<br />
                      Saturday: 10:00 AM - 2:00 PM (BST)<br />
                      Sunday: Closed
                    </p>
                    <p className="text-sm text-gray-500 mt-1">BST: Bhutan Standard Time (UTC+6)</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  {['Facebook', 'Twitter', 'Instagram', 'WeChat'].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="bg-gray-200 hover:bg-blue-100 p-3 rounded-full transition-colors"
                      aria-label={platform}
                    >
                      <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </FadeInSection>
            
            {/* Contact Form */}
            <SlideInSection direction="left">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Plan Your Bhutan Journey</h2>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-green-100 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6"
                  >
                    <p className="font-medium">Thank you for your message!</p>
                    <p>Our Bhutan travel specialists will get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Inquiry Type
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      >
                        <option value="">Select an inquiry type</option>
                        <option value="Cultural Tour">Cultural Tour</option>
                        <option value="Trekking & Hiking">Trekking & Hiking</option>
                        <option value="Festival Tour">Festival Tour</option>
                        <option value="Spiritual Retreat">Spiritual Retreat</option>
                        <option value="Custom Itinerary">Custom Itinerary</option>
                        <option value="Visa & Permits">Visa & Permits</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Tell us about your travel plans, interests, and any questions you have about visiting Bhutan."
                      ></textarea>
                    </div>
                    
                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full flex items-center justify-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </SlideInSection>
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section className="py-8 md:py-12">
        <Container>
          <FadeInSection>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-[16/9] w-full bg-gray-200 relative">
                {/* This would be replaced with an actual map component in a real application */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-500">Map of Thimphu, Bhutan</p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <Container>
          <FadeInSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Find answers to common questions about traveling to Bhutan, visa requirements, and our services.
            </p>
          </FadeInSection>
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "How do I get a visa to visit Bhutan?",
                answer: "All tourists must obtain a visa through a licensed Bhutanese tour operator like TripToBhutan. We handle the entire visa process for you once your tour is booked and the Sustainable Development Fee is paid."
              },
              {
                question: "What is the Sustainable Development Fee?",
                answer: "The Sustainable Development Fee is a daily fee of $200 USD per person per night that all international visitors (except those from India, Bangladesh, and Maldives) must pay. This fee supports Bhutan's free healthcare, education, and environmental conservation efforts."
              },
              {
                question: "When is the best time to visit Bhutan?",
                answer: "The best times to visit Bhutan are during spring (March to May) when the valleys are blooming with flowers, and autumn (September to November) when skies are clear and temperatures are mild. These seasons are ideal for trekking and attending festivals."
              },
              {
                question: "Can I travel independently in Bhutan?",
                answer: "International tourists must book through a licensed tour operator and be accompanied by a guide. This policy helps maintain Bhutan's sustainable tourism approach and ensures visitors have a meaningful cultural experience."
              },
              {
                question: "What are the major festivals in Bhutan?",
                answer: "Bhutan's colorful religious festivals (Tshechus) are held throughout the year at different dzongs and monasteries. The most famous include Paro Tshechu (spring), Thimphu Tshechu (fall), and Punakha Drubchen and Tshechu (spring). We can help you plan your trip around these spectacular cultural events."
              }
            ].map((faq, index) => (
              <SlideInSection key={index} direction="up" delay={index * 0.1} className="mb-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </SlideInSection>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}