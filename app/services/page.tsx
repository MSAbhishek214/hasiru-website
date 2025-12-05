'use client';

import { motion } from 'framer-motion';
import {
  Leaf,
  Sparkles,
  Wrench,
  Zap,
  Shield,
  Users,
  Home,
  Heart,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      icon: Leaf,
      title: 'Consultation',
      subtitle: 'Design & Selection',
      description:
        'Our certified plant consultants visit your space to understand your lifestyle, lighting conditions, and aesthetic preferences. We create a customized plant design plan that matches your home perfectly.',
      features: [
        'Space assessment and lighting analysis',
        'Custom plant selection based on your needs',
        'Design recommendations for optimal placement',
        'Care instructions and maintenance schedule',
      ],
    },
    {
      icon: Sparkles,
      title: 'Setup',
      subtitle: 'Sourcing & Styling',
      description:
        'We handle everything from sourcing the perfect plants to styling your space. Our team brings the plants, pots, soil, and all necessary materials to create your dream green space.',
      features: [
        'Complete plant sourcing and procurement',
        'Premium pots and planters selection',
        'Professional styling and arrangement',
        'Soil preparation and initial setup',
      ],
    },
    {
      icon: Wrench,
      title: 'Maintenance',
      subtitle: 'Watering, Pruning, Fertilizing',
      description:
        'Regular maintenance visits ensure your plants stay healthy and beautiful. Our experts handle watering, pruning, fertilizing, and all care needs so you can enjoy without worry.',
      features: [
        'Scheduled watering and care visits',
        'Pruning and trimming for healthy growth',
        'Fertilizing and soil health management',
        'Pest and disease prevention',
      ],
    },
    {
      icon: Zap,
      title: 'Emergency Care',
      subtitle: 'Reviving Dying Plants',
      description:
        'When your plants are struggling, we provide immediate intervention. Our emergency care service revives dying plants and restores them to health with expert treatment.',
      features: [
        '24/7 emergency plant care support',
        'Diagnosis and treatment of plant issues',
        'Revival of dying or damaged plants',
        'Preventive care recommendations',
      ],
    },
    {
      icon: Shield,
      title: 'Smart Gardening',
      subtitle: 'Automation Systems',
      description:
        'Upgrade to smart gardening solutions with automated watering systems, sensors, and monitoring. Perfect for busy professionals who want zero-effort plant care.',
      features: [
        'Automated irrigation systems',
        'Smart sensors for soil and light monitoring',
        'Mobile app for remote plant management',
        'Scheduled maintenance and alerts',
      ],
    },
  ];

  const targetAudience = [
    {
      icon: Users,
      title: 'Busy Professionals',
      description: 'Perfect for those who want beautiful plants but have no time for maintenance.',
    },
    {
      icon: Home,
      title: 'Families',
      description: 'Create a green, healthy environment for your family without the hassle.',
    },
    {
      icon: Heart,
      title: 'Elderly Homeowners',
      description: 'Expert care for your plants when physical maintenance becomes challenging.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-forest-600 to-forest-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-cream-100 max-w-3xl mx-auto"
          >
            Comprehensive plant care solutions tailored to your needs. From consultation to
            maintenance, we handle everything.
          </motion.p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className="bg-sage-100 w-20 h-20 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="text-forest-600" size={40} />
                  </div>
                  <h2 className="text-3xl font-bold text-forest-700 mb-2">{service.title}</h2>
                  <p className="text-xl text-forest-600 mb-4">{service.subtitle}</p>
                  <p className="text-sage-700 mb-6 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-forest-600 mr-2">✓</span>
                        <span className="text-sage-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={`https://source.unsplash.com/800x600/?plants,${service.title.toLowerCase()}`}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-forest-700 mb-4">Perfect For</h2>
            <p className="text-xl text-sage-600">
              Our services are designed for everyone who loves plants but needs expert help
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {targetAudience.map((audience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-sage-50 p-8 rounded-xl text-center"
              >
                <div className="bg-forest-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <audience.icon className="text-forest-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-forest-700 mb-2">{audience.title}</h3>
                <p className="text-sage-600">{audience.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forest-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            Ready to Transform Your Space?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 text-cream-100"
          >
            Get started with a free consultation today
          </motion.p>
          <Link
            href="/contact"
            className="inline-block bg-white text-forest-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cream-50 transition-colors shadow-lg"
          >
            Book Your Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

