'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export default function ServiceCard({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="bg-sage-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
        <Icon className="text-forest-600" size={28} />
      </div>
      <h3 className="text-xl font-semibold text-forest-700 mb-2">{title}</h3>
      <p className="text-sage-600">{description}</p>
    </motion.div>
  );
}

