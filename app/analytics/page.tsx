'use client';

import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Users, MousePointerClick, MessageCircle, Eye } from 'lucide-react';

export default function Analytics() {
  // Mediocre metrics data
  const metrics = {
    websiteTraffic: {
      total: 1247,
      change: -2.3,
      monthly: 3421,
      weekly: 856,
      daily: 124,
    },
    clickthroughRate: {
      rate: 3.2,
      change: 0.5,
      clicks: 89,
      impressions: 2781,
    },
    reachOuts: {
      total: 34,
      change: -5.2,
      whatsapp: 22,
      contactForm: 12,
      conversionRate: 2.7,
    },
    engagement: {
      avgSessionDuration: '2m 34s',
      bounceRate: 68.5,
      pagesPerSession: 2.1,
    },
  };

  const recentActivity = [
    { time: '2 hours ago', action: 'Contact form submission', source: 'Homepage' },
    { time: '5 hours ago', action: 'WhatsApp click', source: 'Contact page' },
    { time: '1 day ago', action: 'Pricing page view', source: 'Services page' },
    { time: '2 days ago', action: 'Gallery view', source: 'Homepage' },
    { time: '3 days ago', action: 'Contact form submission', source: 'Pricing page' },
  ];

  return (
    <div className="pt-20 min-h-screen bg-cream-50">
      {/* Header */}
      <section className="bg-gradient-to-b from-forest-600 to-forest-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-2"
          >
            Website Analytics
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-cream-100"
          >
            Track your website performance and user engagement
          </motion.p>
        </div>
      </section>

      {/* Main Metrics */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Website Traffic */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-sage-100 p-3 rounded-lg">
                  <Eye className="text-forest-600" size={24} />
                </div>
                <div className={`flex items-center gap-1 ${metrics.websiteTraffic.change < 0 ? 'text-red-500' : 'text-green-500'}`}>
                  {metrics.websiteTraffic.change < 0 ? (
                    <TrendingDown size={16} />
                  ) : (
                    <TrendingUp size={16} />
                  )}
                  <span className="text-sm font-medium">{Math.abs(metrics.websiteTraffic.change)}%</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-forest-700 mb-1">{metrics.websiteTraffic.total.toLocaleString()}</h3>
              <p className="text-sage-600 text-sm">Total Visitors (Last 7 Days)</p>
              <div className="mt-4 pt-4 border-t border-sage-200">
                <div className="flex justify-between text-sm">
                  <span className="text-sage-600">Monthly:</span>
                  <span className="font-semibold text-forest-700">{metrics.websiteTraffic.monthly.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-sage-600">Daily:</span>
                  <span className="font-semibold text-forest-700">{metrics.websiteTraffic.daily}</span>
                </div>
              </div>
            </motion.div>

            {/* Clickthrough Rate */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-sage-100 p-3 rounded-lg">
                  <MousePointerClick className="text-forest-600" size={24} />
                </div>
                <div className={`flex items-center gap-1 ${metrics.clickthroughRate.change < 0 ? 'text-red-500' : 'text-green-500'}`}>
                  {metrics.clickthroughRate.change < 0 ? (
                    <TrendingDown size={16} />
                  ) : (
                    <TrendingUp size={16} />
                  )}
                  <span className="text-sm font-medium">+{metrics.clickthroughRate.change}%</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-forest-700 mb-1">{metrics.clickthroughRate.rate}%</h3>
              <p className="text-sage-600 text-sm">Clickthrough Rate</p>
              <div className="mt-4 pt-4 border-t border-sage-200">
                <div className="flex justify-between text-sm">
                  <span className="text-sage-600">Clicks:</span>
                  <span className="font-semibold text-forest-700">{metrics.clickthroughRate.clicks}</span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-sage-600">Impressions:</span>
                  <span className="font-semibold text-forest-700">{metrics.clickthroughRate.impressions.toLocaleString()}</span>
                </div>
              </div>
            </motion.div>

            {/* People Reaching Out */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-sage-100 p-3 rounded-lg">
                  <MessageCircle className="text-forest-600" size={24} />
                </div>
                <div className={`flex items-center gap-1 ${metrics.reachOuts.change < 0 ? 'text-red-500' : 'text-green-500'}`}>
                  {metrics.reachOuts.change < 0 ? (
                    <TrendingDown size={16} />
                  ) : (
                    <TrendingUp size={16} />
                  )}
                  <span className="text-sm font-medium">{Math.abs(metrics.reachOuts.change)}%</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-forest-700 mb-1">{metrics.reachOuts.total}</h3>
              <p className="text-sage-600 text-sm">Total Inquiries (Last 30 Days)</p>
              <div className="mt-4 pt-4 border-t border-sage-200">
                <div className="flex justify-between text-sm">
                  <span className="text-sage-600">WhatsApp:</span>
                  <span className="font-semibold text-forest-700">{metrics.reachOuts.whatsapp}</span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-sage-600">Contact Form:</span>
                  <span className="font-semibold text-forest-700">{metrics.reachOuts.contactForm}</span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-sage-600">Conversion:</span>
                  <span className="font-semibold text-forest-700">{metrics.reachOuts.conversionRate}%</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Engagement Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h4 className="text-sage-600 text-sm mb-2">Avg. Session Duration</h4>
              <p className="text-2xl font-bold text-forest-700">{metrics.engagement.avgSessionDuration}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h4 className="text-sage-600 text-sm mb-2">Bounce Rate</h4>
              <p className="text-2xl font-bold text-red-500">{metrics.engagement.bounceRate}%</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h4 className="text-sage-600 text-sm mb-2">Pages per Session</h4>
              <p className="text-2xl font-bold text-forest-700">{metrics.engagement.pagesPerSession}</p>
            </motion.div>
          </div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <h3 className="text-xl font-bold text-forest-700 mb-4">Recent Activity</h3>
            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-b border-sage-100 last:border-0"
                >
                  <div>
                    <p className="font-medium text-forest-700">{activity.action}</p>
                    <p className="text-sm text-sage-600">{activity.source}</p>
                  </div>
                  <span className="text-sm text-sage-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

