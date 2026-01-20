import React from 'react';
import { Hero } from '../components/Hero';
import { Section } from '../components/Section';
import { motion } from 'framer-motion';
import { BookOpen, Users, Trophy, Monitor, Clock, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  { icon: <BookOpen size={32} />, title: "Academic Excellence", desc: "CBSE affiliated curriculum for Class 10th & 12th with English medium instruction." },
  { icon: <Users size={32} />, title: "Dedicated Faculty", desc: "Team of 30+ experienced teachers and 5 pre-primary specialists." },
  { icon: <Trophy size={32} />, title: "Holistic Growth", desc: "Co-educational environment focusing on character building and sports." },
  { icon: <Monitor size={32} />, title: "Modern Facilities", desc: "Computer Aided Learning Lab with 16 computers and 3000+ library books." },
];

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      
      {/* Features Section */}
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Why Choose St. Xavier's?</h2>
          <div className="h-1 w-20 bg-brand-gold mx-auto rounded-full mb-6"></div>
          <p className="text-brand-lightBrown leading-relaxed">
            Established in 2009, we empower students with knowledge and values. Our rural campus in Bibhutipur North provides the perfect environment for learning and discovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-brand-brown/5 group"
            >
              <div className="w-14 h-14 bg-brand-cream rounded-full flex items-center justify-center text-brand-brown mb-6 group-hover:bg-brand-brown group-hover:text-brand-gold transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="font-serif font-bold text-xl mb-3 text-brand-brown">{feature.title}</h3>
              <p className="text-sm text-brand-lightBrown leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* About Preview */}
      <Section className="bg-white relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-gold/20 rounded-full blur-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" 
              alt="Students learning" 
              className="rounded-lg shadow-2xl relative z-10 w-full h-auto object-cover aspect-video"
            />
            <div className="absolute -bottom-6 -right-6 bg-brand-brown text-brand-cream p-6 rounded-lg shadow-xl z-20 hidden md:block">
              <p className="font-serif font-bold text-3xl text-brand-gold mb-1">15+</p>
              <p className="text-xs tracking-wider uppercase">Years of Excellence</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-brand-gold font-bold tracking-widest text-sm uppercase mb-2">About Our School</h4>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-brand-brown">Nurturing Tomorrow's Leaders</h2>
            <p className="text-brand-lightBrown mb-6 leading-relaxed">
              St. Xavier's Public School, located at R.D. Complex, Bibhutipur North, is managed by dedicated private educationists. Since 2009, we have been providing quality English medium education to the rural community.
            </p>
            <p className="text-brand-lightBrown mb-8 leading-relaxed">
              With facilities like a well-stocked library, computer lab, and spacious playground, we ensure holistic development for students from Grade 1 to 12.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-brand-brown font-bold border-b-2 border-brand-gold hover:text-brand-gold transition-colors pb-1">
              Read More About Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section dark className="relative">
        <div className="absolute inset-0 bg-brand-brown/90 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 z-0 mix-blend-overlay"></div>
        
        <div className="relative z-10 text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-white">Join the St. Xavier's Family</h2>
          <p className="text-brand-cream/80 max-w-2xl mx-auto mb-10 text-lg">
            Admissions open for the current academic session. Give your child the advantage of holistic education in a modern rural campus.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link 
              to="/admissions" 
              className="bg-brand-gold text-brand-brown px-8 py-3 rounded-full font-bold hover:bg-white transition-all shadow-lg"
            >
              Apply Online
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent border border-brand-gold text-brand-gold px-8 py-3 rounded-full font-bold hover:bg-brand-gold hover:text-brand-brown transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};