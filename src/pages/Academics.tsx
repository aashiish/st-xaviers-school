import React from 'react';
import { Section } from '../components/Section';
import { motion } from 'framer-motion';
import { Book, CheckCircle, Clock } from 'lucide-react';

export const Academics: React.FC = () => {
  return (
    <>
      <div className="bg-brand-brown text-brand-cream pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Academics
          </motion.h1>
          <p className="text-brand-cream/70">
            Fostering intellectual curiosity from Primary to Senior Secondary.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { level: "Primary Wing", classes: "Class I to V", desc: "Focus on foundational literacy, numeracy, and creative expression through activity-based learning." },
            { level: "Middle Wing", classes: "Class VI to VIII", desc: "Introduction to specialized subjects, critical thinking exercises, and project-based learning." },
            { level: "Secondary Wing", classes: "Class IX to X", desc: "Rigorous preparation for board examinations with a focus on deep conceptual understanding." },
            { level: "Senior Secondary", classes: "Class XI to XII", desc: "Specialized streams in Science and Commerce preparing students for higher education and competitive exams." }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border-t-4 border-brand-brown p-8 shadow-md hover:shadow-xl transition-all h-full"
            >
              <h3 className="font-serif text-xl font-bold text-brand-brown mb-1">{item.level}</h3>
              <p className="text-brand-gold font-medium text-sm mb-4">{item.classes}</p>
              <p className="text-brand-lightBrown text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-serif text-2xl font-bold text-brand-brown mb-6">Curriculum Highlights</h3>
            <ul className="space-y-4">
              {[
                "Affiliated to CBSE (Class 10th & 12th)",
                "English Medium Instruction",
                "Pre-Primary Section Available",
                "30+ Experienced Contract Teachers",
                "Dedicated Pre-Primary Faculty (5 Teachers)",
                "Co-educational Environment"
              ].map((point, idx) => (
                <li key={idx} className="flex items-center gap-3 text-brand-lightBrown">
                  <CheckCircle size={18} className="text-brand-gold shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-brand-brown/5 p-8 rounded-xl">
            <h3 className="font-serif text-2xl font-bold text-brand-brown mb-6">School Timings</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Clock size={24} className="text-brand-brown mt-1" />
                <div>
                  <h4 className="font-bold text-brand-brown">Standard Hours</h4>
                  <p className="text-brand-lightBrown">06:00 AM - 04:00 PM</p>
                  <p className="text-xs text-brand-lightBrown/70 mt-1">(Shift timings may vary by class)</p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-brand-gold/10 rounded text-sm text-brand-brown">
                * Academic session starts in April.
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};