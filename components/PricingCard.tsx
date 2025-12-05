'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Link from 'next/link';

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  delay?: number;
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  popular = false,
  delay = 0,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`relative bg-white rounded-2xl shadow-lg p-8 ${
        popular ? 'border-2 border-forest-600 scale-105' : 'border border-sage-200'
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-forest-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Popular
          </span>
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-forest-700 mb-2">{name}</h3>
        <p className="text-sage-600 mb-4">{description}</p>
        <div className="mb-4">
          <span className="text-4xl font-bold text-forest-600">{price}</span>
        </div>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="text-forest-600 mr-2 mt-1 flex-shrink-0" size={20} />
            <span className="text-sage-700">{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-forest-600 text-white hover:bg-forest-700'
            : 'bg-sage-100 text-forest-700 hover:bg-sage-200'
        }`}
      >
        Get Started
      </Link>
    </motion.div>
  );
}

