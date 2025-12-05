'use client';

import { motion } from 'framer-motion';
import PricingCard from '@/components/PricingCard';

export default function Pricing() {
  const plans = [
    {
      name: 'Basic Plan',
      price: '₹2,999',
      description: 'Perfect for getting started',
      features: [
        '1 Initial Consultation',
        '1 Maintenance visit per month',
        'Basic plant care guidance',
        'Email support',
      ],
      popular: false,
    },
    {
      name: 'Standard Plan',
      price: '₹4,999',
      description: 'Most popular choice',
      features: [
        'Initial Consultation',
        'Complete plant styling & setup',
        '2 Maintenance visits per month',
        'Priority support',
        'Seasonal care adjustments',
      ],
      popular: true,
    },
    {
      name: 'Premium Plan',
      price: '₹7,999',
      description: 'Complete peace of mind',
      features: [
        'Full balcony/home makeover',
        '4 Maintenance visits per month',
        'Emergency care visits included',
        'Seasonal plant replacements',
        'Smart gardening consultation',
        '24/7 priority support',
      ],
      popular: false,
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
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-cream-100 max-w-3xl mx-auto"
          >
            Choose the plan that works best for you. All plans include expert consultation and
            professional care.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start">
            {plans.map((plan, index) => (
              <PricingCard key={index} {...plan} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-forest-700 mb-4">Frequently Asked Questions</h2>
          </motion.div>
          <div className="space-y-6">
            {[
              {
                q: 'Can I change plans later?',
                a: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
              },
              {
                q: 'What if I need more visits?',
                a: 'Additional maintenance visits can be scheduled at ₹500 per visit. Emergency visits are included in Premium plans.',
              },
              {
                q: 'Do you provide the plants?',
                a: 'Yes! All plans include plant sourcing. Premium plans include seasonal replacements to keep your space fresh.',
              },
              {
                q: 'What areas do you serve?',
                a: 'We currently serve Bangalore and surrounding areas. Contact us to check if we service your location.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-sage-50 p-6 rounded-xl"
              >
                <h3 className="text-lg font-semibold text-forest-700 mb-2">{faq.q}</h3>
                <p className="text-sage-700">{faq.a}</p>
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
            Still Have Questions?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 text-cream-100"
          >
            Get in touch with us and we'll help you choose the perfect plan
          </motion.p>
          <motion.a
            href="/contact"
            className="inline-block bg-white text-forest-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cream-50 transition-colors shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.a>
        </div>
      </section>
    </div>
  );
}

