import React from 'react';
import { Section } from '../components/Section';
import { motion } from 'framer-motion';

// Using consistent seeds for mock images to ensure they look like a school
const images = [
  "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2064&auto=format&fit=crop", // Building
  "https://images.unsplash.com/photo-1577896334614-201b31d50dc5?q=80&w=2070&auto=format&fit=crop", // Classroom
  "https://images.unsplash.com/photo-1606092195730-5d7b9af1ef4d?q=80&w=2070&auto=format&fit=crop", // Kids group
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop", // Library
  "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1887&auto=format&fit=crop", // Teacher
  "https://images.unsplash.com/photo-1427504743055-b72976e3d71d?q=80&w=2069&auto=format&fit=crop", // Bus
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop", // Kids Learning
  "https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=1974&auto=format&fit=crop", // Sports
];

export const Gallery: React.FC = () => {
  return (
    <>
      <div className="bg-brand-brown text-brand-cream pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Gallery
          </motion.h1>
          <p className="text-brand-cream/70">
            Glimpses of life at St. Xavier's.
          </p>
        </div>
      </div>

      <Section>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="break-inside-avoid rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img 
                src={src} 
                alt={`Gallery ${idx + 1}`} 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
};