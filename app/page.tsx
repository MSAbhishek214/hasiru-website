'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sparkles, Heart, Award, Leaf, Wrench, Zap, Shield } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';

export default function Home() {
  const valueProps = [
    {
      icon: Sparkles,
      title: 'Aesthetic Spaces',
      description: 'We make your home beautiful',
    },
    {
      icon: Heart,
      title: 'Zero Effort',
      description: "You don't need to lift a finger",
    },
    {
      icon: Award,
      title: 'Expert Care',
      description: 'Certified consultants, not just laborers',
    },
  ];

  const services = [
    {
      icon: Leaf,
      title: 'Consultation',
      description: 'Expert design and plant selection tailored to your space and lifestyle.',
    },
    {
      icon: Sparkles,
      title: 'Setup',
      description: 'Complete sourcing, styling, and installation of your plant collection.',
    },
    {
      icon: Wrench,
      title: 'Maintenance',
      description: 'Regular watering, pruning, fertilizing, and care for thriving plants.',
    },
    {
      icon: Zap,
      title: 'Emergency Care',
      description: 'Reviving dying plants with immediate professional intervention.',
    },
    {
      icon: Shield,
      title: 'Smart Gardening',
      description: 'Automation systems for effortless plant care management.',
    },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Homeowner, Whitefield',
      content:
        'Hasiru transformed my balcony into a green paradise. I love coming home to beautiful plants without any stress!',
      rating: 5,
    },
    {
      name: 'Rajesh Kumar',
      role: 'Cafe Owner',
      content:
        'Professional service and stunning results. Our cafe now has the perfect plant aesthetic that customers love.',
      rating: 5,
    },
    {
      name: 'Meera Patel',
      role: 'Working Professional',
      content:
        'As someone with zero time, Hasiru has been a lifesaver. My plants are thriving, and I do nothing!',
      rating: 5,
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-forest-900/50"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Your Personal Plant Care Partner
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-cream-100"
          >
            Consultation, setup, and on-demand maintenance at home.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="inline-block bg-forest-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-forest-700 transition-colors shadow-lg"
            >
              Get Instant Quote
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-forest-700 mb-4">
              We grow the greens. You enjoy the peace.
            </h2>
            <p className="text-xl text-sage-600">Beautiful plants. Zero effort.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <ServiceCard key={index} {...prop} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-forest-700 mb-4">Our Services</h2>
            <p className="text-xl text-sage-600">
              Everything you need for thriving plants at home
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} delay={index * 0.1} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block text-forest-600 hover:text-forest-700 font-semibold text-lg"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-forest-700 mb-4">Trusted By</h2>
            <p className="text-xl text-sage-600">
              Apartment Societies • Cafes • Co-working Spaces • Homeowners
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-forest-700 mb-4">What Our Clients Say</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

