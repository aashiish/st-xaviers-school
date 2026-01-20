import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-[85vh] w-full overflow-hidden">
      {/* Background Image */}
      {/* 
        INSTRUCTION: 
        Please save the image of the school building provided in the design 
        as 'school_building.jpg' in your public/assets folder or root folder.
      */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          // Using a placeholder URL that matches the colorful school building aesthetic 
          // until the user replaces it with the local file
          backgroundImage: 'url("./school_building.jpg")',
          // Fallback image in case the local one isn't added yet
          backgroundColor: '#4A3728' 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-brown/90 via-brand-brown/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-brand-cream"
        >
          <span className="inline-block py-1 px-3 border border-brand-gold/50 rounded-full text-brand-gold text-xs font-bold tracking-widest uppercase mb-6 bg-brand-brown/50 backdrop-blur-sm">
            Estd. 2009 | Affiliated to CBSE
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
            Igniting Minds, <br/>
            <span className="text-brand-gold">Inspiring Future.</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-cream/90 mb-10 font-light leading-relaxed">
            Providing world-class English medium education from Pre-Primary to Class 12th in Bibhutipur.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/admissions" 
              className="bg-brand-gold text-brand-brown px-8 py-4 rounded-full font-bold text-center hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              Admissions Open <ArrowRight size={18} />
            </Link>
            <Link 
              to="/about" 
              className="px-8 py-4 rounded-full font-bold text-center border border-brand-cream/30 hover:bg-brand-cream/10 transition-all duration-300 text-brand-cream"
            >
              Discover More
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-16 md:h-24 text-brand-cream" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-current"></path>
        </svg>
      </div>
    </div>
  );
};