'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  delay?: number;
}

export default function TestimonialCard({
  name,
  role,
  content,
  rating,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-6 rounded-xl shadow-md"
    >
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="text-yellow-400 fill-yellow-400" size={18} />
        ))}
      </div>
      <p className="text-sage-700 mb-4 italic">&quot;{content}&quot;</p>
      <div>
        <p className="font-semibold text-forest-700">{name}</p>
        <p className="text-sm text-sage-600">{role}</p>
      </div>
    </motion.div>
  );
}

