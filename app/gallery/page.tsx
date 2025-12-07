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

  // Gallery items with categories and image URLs
  // For rescue items, we'll show before/after side by side
  const galleryItems = [
    { id: 1, category: 'balcony', title: 'Modern Balcony Garden', image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 2, category: 'indoor', title: 'Living Room Corner', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 3, category: 'rescue', title: 'Before & After Rescue', image: 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', beforeImage: 'https://images.unsplash.com/photo-1508610048659-a06c669853d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', afterImage: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 4, category: 'balcony', title: 'Tropical Balcony Setup', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 5, category: 'indoor', title: 'Kitchen Herb Garden', image: 'https://images.unsplash.com/photo-1464822759844-d150ad3bfb1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 6, category: 'rescue', title: 'Revived Monstera', image: 'https://images.unsplash.com/photo-1508610048659-a06c669853d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', beforeImage: 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', afterImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 7, category: 'balcony', title: 'Vertical Garden Wall', image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 8, category: 'indoor', title: 'Bedroom Plant Corner', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 9, category: 'rescue', title: 'Saved Fiddle Leaf Fig', image: 'https://images.unsplash.com/photo-1519336056116-9e4d75123443?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', beforeImage: 'https://images.unsplash.com/photo-1508610048659-a06c669853d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', afterImage: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 10, category: 'balcony', title: 'Cozy Balcony Oasis', image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 11, category: 'indoor', title: 'Office Plant Setup', image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 12, category: 'rescue', title: 'Before & After Transformation', image: 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', beforeImage: 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', afterImage: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 13, category: 'indoor', title: 'Bathroom Plant Nook', image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 14, category: 'balcony', title: 'Urban Balcony Garden', image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 15, category: 'indoor', title: 'Dining Area Plants', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
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
                {item.category === 'rescue' && item.beforeImage && item.afterImage ? (
                  <div className="aspect-[4/3] overflow-hidden relative grid grid-cols-2 gap-0">
                    <div className="relative">
                      <Image
                        src={item.beforeImage}
                        alt={`${item.title} - Before`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-red-500/80 text-white px-2 py-1 rounded text-xs font-semibold">
                        Before
                      </div>
                    </div>
                    <div className="relative">
                      <Image
                        src={item.afterImage}
                        alt={`${item.title} - After`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-green-500/80 text-white px-2 py-1 rounded text-xs font-semibold">
                        After
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                )}
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

