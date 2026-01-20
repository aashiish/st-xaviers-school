import React from 'react';
import { Section } from '../components/Section';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <>
      {/* Header */}
      <div className="bg-brand-brown text-brand-cream pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            About Us
          </motion.h1>
          <p className="text-brand-cream/70 max-w-2xl mx-auto">
            A tradition of excellence in Bibhutipur North since 2009.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h2 className="font-serif text-3xl font-bold mb-6 text-brand-brown">Our Legacy</h2>
            <p className="text-brand-lightBrown mb-4 leading-relaxed">
              Established in 2009, St. Xavier's Public School is a private unaided co-educational institution managed by dedicated educationists. Located in the rural landscape of Bibhutipur North, Samastipur district, we have been serving the community for over 15 years.
            </p>
            <p className="text-brand-lightBrown mb-6 leading-relaxed">
              With a robust infrastructure including 21 classrooms and a student-centric approach, we ensure that quality English-medium education is accessible to all.
            </p>
            
            <div className="space-y-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-brand-gold">
                <h3 className="font-bold text-lg mb-2">Vision</h3>
                <p className="text-brand-lightBrown text-sm leading-relaxed">
                  To create an enlightened society through holistic education that nurtures intellect, creativity, and character.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-brand-brown">
                <h3 className="font-bold text-lg mb-2">Mission</h3>
                <p className="text-brand-lightBrown text-sm leading-relaxed">
                  To provide a safe, inclusive, and stimulating learning environment where students are empowered to achieve academic excellence and become responsible global citizens.
                </p>
              </div>
            </div>
          </motion.div>
          <div className="order-1 md:order-2 h-full">
            <img 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop" 
              alt="School Building" 
              className="rounded-lg shadow-xl w-full h-full object-cover min-h-[300px]"
            />
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-24">
          <h2 className="font-serif text-3xl font-bold mb-10 text-brand-brown text-center">Leadership</h2>
          <div className="flex justify-center">
            {/* Principal */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-t-8 border-brand-brown text-center max-w-lg w-full">
              <div className="w-24 h-24 bg-brand-brown/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                 <span className="font-serif text-4xl text-brand-brown">P</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-brand-brown mb-2">Vijay Kumar Chaudhary</h3>
              <p className="text-brand-gold font-bold uppercase tracking-wider text-xs mb-4">Principal</p>
              <p className="text-brand-lightBrown leading-relaxed text-sm">
                "Leading our institution with a vision to bring educational excellence to rural Bihar, ensuring every child has access to modern facilities, quality pedagogy, and a path to a bright future."
              </p>
            </div>
          </div>
        </div>

        {/* Branches */}
        <div className="bg-brand-brown/5 rounded-3xl p-8 md:p-12">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8 text-brand-brown text-center">Our Group of Institutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg text-brand-brown mb-2">St. Xavier's Public School</h3>
              <p className="text-sm text-brand-lightBrown">Vyapar Mandal Rd, Dalsinghsarai, Bihar 848114</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg text-brand-brown mb-2">St. Xavier Academy</h3>
              <p className="text-sm text-brand-lightBrown">Pataili, Samastipur, Bihar</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};