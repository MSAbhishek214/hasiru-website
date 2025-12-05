'use client';

import Link from 'next/link';
import { Instagram, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { href: '/', label: 'Home' },
      { href: '/services', label: 'Services' },
      { href: '/gallery', label: 'Gallery' },
      { href: '/pricing', label: 'Pricing' },
    ],
    support: [
      { href: '/contact', label: 'Contact' },
      { href: '/contact', label: 'Book Consultation' },
    ],
  };

  return (
    <footer className="bg-forest-800 text-cream-50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Hasiru</h3>
            <p className="text-cream-200 mb-4 max-w-md">
              Beautiful plants. Zero effort. We help homeowners enjoy thriving indoor & outdoor
              plants without the stress of maintaining them.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-forest-700 p-3 rounded-lg hover:bg-forest-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="https://wa.me"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-forest-700 p-3 rounded-lg hover:bg-forest-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </motion.a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-forest-700 mt-8 pt-8 text-center text-cream-300">
          <p>&copy; {currentYear} Hasiru. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

