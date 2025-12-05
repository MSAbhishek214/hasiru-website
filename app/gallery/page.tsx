'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

type Category = 'all' | 'balcony' | 'indoor' | 'rescue';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const categories: { id: Category; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'balcony', label: 'Balcony Makeovers' },
    { id: 'indoor', label: 'Indoor Corners' },
    { id: 'rescue', label: 'Plant Rescue' },
  ];

  // Gallery items with categories
  const galleryItems = [
    { id: 1, category: 'balcony', title: 'Modern Balcony Garden' },
    { id: 2, category: 'indoor', title: 'Living Room Corner' },
    { id: 3, category: 'rescue', title: 'Before & After Rescue' },
    { id: 4, category: 'balcony', title: 'Tropical Balcony Setup' },
    { id: 5, category: 'indoor', title: 'Kitchen Herb Garden' },
    { id: 6, category: 'rescue', title: 'Revived Monstera' },
    { id: 7, category: 'balcony', title: 'Vertical Garden Wall' },
    { id: 8, category: 'indoor', title: 'Bedroom Plant Corner' },
    { id: 9, category: 'rescue', title: 'Saved Fiddle Leaf Fig' },
    { id: 10, category: 'balcony', title: 'Cozy Balcony Oasis' },
    { id: 11, category: 'indoor', title: 'Office Plant Setup' },
    { id: 12, category: 'rescue', title: 'Before & After Transformation' },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

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
            Our Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-cream-100 max-w-3xl mx-auto"
          >
            See the beautiful transformations we&apos;ve created for our clients
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-forest-600 text-white shadow-md'
                    : 'bg-sage-100 text-sage-700 hover:bg-sage-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <Image
                    src={`https://source.unsplash.com/800x600/?plants,${
                      item.category === 'rescue' ? 'before-after' : item.category
                    }`}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                  </div>
                </div>
                {item.category === 'rescue' && (
                  <div className="absolute top-4 right-4 bg-forest-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Before/After
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-forest-700 mb-6"
          >
            Ready to Transform Your Space?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-sage-600 mb-8"
          >
            Let us create a beautiful green space for you
          </motion.p>
          <motion.a
            href="/contact"
            className="inline-block bg-forest-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-forest-700 transition-colors shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.a>
        </div>
      </section>
    </div>
  );
}

