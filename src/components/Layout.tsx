import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, GraduationCap, Facebook, Instagram, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Academics', path: '/academics' },
  { name: 'Admissions', path: '/admissions' },
  { name: 'Facilities', path: '/facilities' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-sans text-brand-brown selection:bg-brand-brown selection:text-brand-cream">
      {/* Top Bar - Contact Info */}
      <div className="bg-brand-brown text-brand-cream py-2 px-4 text-xs md:text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center gap-2"><Phone size={14} /> +91 99346 62208</span>
            <span className="flex items-center gap-2"><Mail size={14} /> info@stxaviersbibhutipur.com</span>
          </div>
          <div className="flex items-center gap-2 opacity-80">
            <MapPin size={14} /> Bibhutipur North, Bihar 848111
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-brand-cream/95 backdrop-blur-md shadow-md py-2 border-b border-brand-brown/10' 
            : 'bg-brand-cream py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-brown text-brand-cream rounded-full flex items-center justify-center group-hover:bg-brand-gold transition-colors duration-300">
                <GraduationCap size={24} />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg md:text-xl leading-tight text-brand-brown">St. Xavier's</span>
                <span className="text-xs tracking-widest uppercase text-brand-lightBrown">Public School</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-brand-gold relative group ${
                    location.pathname === link.path ? 'text-brand-brown font-bold' : 'text-brand-lightBrown'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-brand-brown transform origin-left transition-transform duration-300 ${
                    location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </Link>
              ))}
              <Link 
                to="/admissions" 
                className="bg-brand-brown text-brand-cream px-5 py-2 rounded-full text-sm font-medium hover:bg-brand-lightBrown transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-brand-brown focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-brand-cream border-t border-brand-brown/10 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4 flex flex-col items-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-lg font-medium ${
                      location.pathname === link.path ? 'text-brand-brown' : 'text-brand-lightBrown'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link 
                  to="/admissions" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-4 w-full text-center bg-brand-brown text-brand-cream px-6 py-3 rounded-full hover:bg-brand-lightBrown"
                >
                  Apply Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-brown text-brand-cream pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            {/* Brand */}
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-brand-cream text-brand-brown rounded-full flex items-center justify-center">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg leading-none">St. Xavier's</h3>
                  <p className="text-[10px] uppercase tracking-wider text-brand-cream/70">Public School</p>
                </div>
              </div>
              <p className="text-sm text-brand-cream/70 leading-relaxed mb-6">
                Nurturing minds, building character, and shaping the future leaders of tomorrow through holistic education.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-brand-cream/70 hover:text-white transition-colors"><Facebook size={20} /></a>
                <a href="#" className="text-brand-cream/70 hover:text-white transition-colors"><Instagram size={20} /></a>
                <a href="#" className="text-brand-cream/70 hover:text-white transition-colors"><Twitter size={20} /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif font-bold text-lg mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3 text-sm text-brand-cream/70">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/academics" className="hover:text-white transition-colors">Academics</Link></li>
                <li><Link to="/admissions" className="hover:text-white transition-colors">Admissions</Link></li>
                <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-serif font-bold text-lg mb-6 text-white">Contact Us</h4>
              <ul className="space-y-4 text-sm text-brand-cream/70">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0" />
                  <span>R.D. Complex, B, Bibhutipur North, Bihar 848111</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} />
                  <span>+91 99346 62208</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} />
                  <span>contact@stxaviers.edu.in</span>
                </li>
              </ul>
            </div>

            {/* Newsletter (Mock) */}
            <div>
              <h4 className="font-serif font-bold text-lg mb-6 text-white">Stay Updated</h4>
              <p className="text-sm text-brand-cream/70 mb-4">Subscribe to receive school updates.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-brand-cream/10 border border-brand-cream/20 rounded-l px-4 py-2 text-sm text-white focus:outline-none focus:border-brand-cream w-full placeholder:text-brand-cream/30"
                />
                <button className="bg-brand-gold text-brand-brown px-4 py-2 rounded-r text-sm font-bold hover:bg-white transition-colors">
                  OK
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-brand-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-cream/50">
            <p>&copy; {new Date().getFullYear()} St. Xavier's Public School. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};