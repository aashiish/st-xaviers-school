import React from 'react';
import { Section } from '../components/Section';
import { motion } from 'framer-motion';
import { Monitor, FlaskConical, Library, Bus, Dumbbell, Home } from 'lucide-react';

const facilitiesData = [
  { icon: <Home size={40} />, title: "Infrastructure", desc: "Private building with pucca boundary wall containing 21 well-maintained classrooms and 2 non-teaching activity rooms.", img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2064&auto=format&fit=crop" },
  { icon: <Library size={40} />, title: "Library", desc: "A rich collection of 3244 books catering to students of all grades to encourage reading habits.", img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2128&auto=format&fit=crop" },
  { icon: <Monitor size={40} />, title: "Computer Lab", desc: "Computer Aided Learning Lab with 16 functional computers for digital literacy and practicals.", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" },
  { icon: <Dumbbell size={40} />, title: "Playground", desc: "Spacious playground for sports and physical activities essential for holistic growth.", img: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=2070&auto=format&fit=crop" },
  { icon: <FlaskConical size={40} />, title: "Sanitation", desc: "Clean and functional separate toilets for boys (11 units) and girls (5 units) with tap water supply.", img: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=2070&auto=format&fit=crop" },
  { icon: <Bus size={40} />, title: "Accessibility", desc: "Located in Bibhutipur North, accessible by all-weather roads. Electric connection available.", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop" },
];

export const Facilities: React.FC = () => {
  return (
    <>
      <div className="bg-brand-brown text-brand-cream pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Our Facilities
          </motion.h1>
          <p className="text-brand-cream/70">
            Creating an infrastructure that supports learning and growth.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {facilitiesData.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-brown/30 group-hover:bg-brand-brown/10 transition-colors"></div>
              </div>
              <div className="p-8 relative">
                <div className="absolute -top-10 right-8 bg-brand-gold text-brand-brown p-4 rounded-xl shadow-lg">
                  {item.icon}
                </div>
                <h3 className="font-serif text-2xl font-bold text-brand-brown mb-3">{item.title}</h3>
                <p className="text-brand-lightBrown leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
};