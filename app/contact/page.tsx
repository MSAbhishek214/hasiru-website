'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    society: '',
    service: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend or WhatsApp
    const message = `Hello! I'm interested in Hasiru services.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nArea: ${formData.society}\nService: ${formData.service}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-cream-100 max-w-3xl mx-auto"
          >
            Ready to transform your space? Let's chat about your plant care needs.
          </motion.p>
        </div>
      </section>

      {/* Primary WhatsApp CTA */}
      <section className="py-12 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 text-center"
          >
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="text-green-600" size={40} />
            </div>
            <h2 className="text-3xl font-bold text-forest-700 mb-4">
              Chat with Us on WhatsApp
            </h2>
            <p className="text-sage-600 mb-6 text-lg">
              Get instant responses and quick quotes. We're here to help!
            </p>
            <motion.a
              href="https://wa.me"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle size={24} />
              Chat on WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-forest-700 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sage-700 font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-forest-600 focus:border-transparent outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sage-700 font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-forest-600 focus:border-transparent outline-none"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label htmlFor="society" className="block text-sage-700 font-medium mb-2">
                    Society/Area *
                  </label>
                  <input
                    type="text"
                    id="society"
                    name="society"
                    required
                    value={formData.society}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-forest-600 focus:border-transparent outline-none"
                    placeholder="Your area or apartment society"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sage-700 font-medium mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-forest-600 focus:border-transparent outline-none"
                  >
                    <option value="">Select a service</option>
                    <option value="consultation">Consultation</option>
                    <option value="setup">Setup</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="emergency">Emergency Care</option>
                    <option value="smart-gardening">Smart Gardening</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-forest-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-forest-700 transition-colors shadow-md"
                >
                  Submit & Chat on WhatsApp
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-forest-700 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-sage-100 p-3 rounded-lg">
                    <MessageCircle className="text-forest-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest-700 mb-1">WhatsApp</h3>
                    <p className="text-sage-600">Fastest way to reach us</p>
                    <a
                      href="https://wa.me"
                      className="text-forest-600 hover:text-forest-700 font-medium"
                    >
                      Chat Now →
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-sage-100 p-3 rounded-lg">
                    <Phone className="text-forest-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest-700 mb-1">Phone</h3>
                    <p className="text-sage-600">Call us during business hours</p>
                    <a href="tel:+919876543210" className="text-forest-600 hover:text-forest-700 font-medium">
                      +91 98765 43210
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-sage-100 p-3 rounded-lg">
                    <Mail className="text-forest-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest-700 mb-1">Email</h3>
                    <p className="text-sage-600">Send us a detailed message</p>
                    <a
                      href="mailto:hello@hasiru.com"
                      className="text-forest-600 hover:text-forest-700 font-medium"
                    >
                      hello@hasiru.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-sage-100 p-3 rounded-lg">
                    <MapPin className="text-forest-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest-700 mb-1">Service Areas</h3>
                    <p className="text-sage-600">Bangalore & surrounding areas</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps Placeholder */}
      <section className="py-12 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="bg-sage-200 h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="text-forest-600 mx-auto mb-4" size={48} />
                <p className="text-sage-700 font-medium">Google Maps Integration</p>
                <p className="text-sage-600 text-sm mt-2">
                  Add your Google Maps embed code here
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

