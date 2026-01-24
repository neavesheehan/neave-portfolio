'use client';

import { useState } from 'react';
import Image from 'next/image';

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  impact: string[];
  image: string;
  video: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 'hvac',
    title: 'HVAC Compliance Report',
    description: 'Comprehensive dashboard tracking heating, ventilation, and air conditioning compliance across facilities. Real-time monitoring of maintenance schedules, regulatory requirements, and system performance metrics.',
    impact: [
      'Reduced compliance violations by 85%',
      'Automated monthly reporting, saving 20 hours per week',
      'Improved stakeholder visibility into facility operations',
      'Enabled proactive maintenance scheduling'
    ],
    image: '/images/hvac.png',
    video: '/videos/hvac.mp4'
  },
  {
    id: 'legionella',
    title: 'Legionella Tracker',
    description: 'Risk management system for water safety compliance. Tracks testing schedules, temperature monitoring, and risk assessments to prevent Legionella outbreaks in building water systems.',
    impact: [
      ' 100% on-time testing compliance achieved',
      'Early detection of 3 potential risk areas',
      'Streamlined communication with facilities teams',
      'Reduced administrative overhead by 60%'
    ],
    image: '/images/legionella.png',
    video: '/videos/legionella.mp4'
  },
  {
    id: 'smoke',
    title: 'Smoke System Compliance Dashboard',
    description: 'Centralized monitoring system for fire safety equipment testing and compliance. Tracks smoke detector testing, alarm system checks, and certification renewals across multiple locations.',
    impact: [
      'Zero missed compliance deadlines',
      'Consolidated data from 12 different systems',
      'Improved audit readiness scoring by 95%',
      'Clear accountability across departments'
    ],
    image: '/images/smoke.png',
    video: '/videos/smoke.mp4'
  }
];

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <section id="portfolio" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="text-brand-pink">Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-world solutions delivering measurable business impact
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-semibold">View Details →</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold mb-2 group-hover:text-brand-pink transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex justify-between items-center z-10">
              <h3 className="text-2xl font-display font-bold">{selectedItem.title}</h3>
              <button
                onClick={() => setSelectedItem(null)}
                className="text-gray-500 hover:text-brand-pink transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-8 space-y-6">
              {/* Video */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <video
                  controls
                  muted
                  className="w-full"
                  poster={selectedItem.image}
                >
                  <source src={selectedItem.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Description */}
              <div>
                <h4 className="font-display font-bold text-xl mb-3">Overview</h4>
                <p className="text-gray-700 leading-relaxed">{selectedItem.description}</p>
              </div>

              {/* Impact */}
              <div>
                <h4 className="font-display font-bold text-xl mb-3">Business Impact</h4>
                <ul className="space-y-2">
                  {selectedItem.impact.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-brand-pink text-xl flex-shrink-0">✓</span>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
