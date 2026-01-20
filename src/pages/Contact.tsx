import React from 'react';
import { Section } from '../components/Section';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <>
      <div className="bg-brand-brown text-brand-cream pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
           <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Contact Us
          </motion.h1>
          <p className="text-brand-cream/70">
            Get in touch with our campuses.
          </p>
        </div>
      </div>

      <Section>
        <div className="space-y-20">
          
          {/* Main Campus - Bibhutipur */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="inline-block bg-brand-brown text-brand-cream px-4 py-1 rounded-full text-sm font-bold tracking-wide mb-2">MAIN CAMPUS</div>
              <h2 className="font-serif text-3xl font-bold text-brand-brown">St. Xavier's Public School, Bibhutipur</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-brand-gold mt-1 shrink-0" />
                  <div>
                    <h3 className="font-bold text-brand-brown">Address</h3>
                    <p className="text-brand-lightBrown">R.D. Complex, B, Bibhutipur North,<br/>Samastipur District, Bihar 848111</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-brand-gold mt-1 shrink-0" />
                  <div>
                    <h3 className="font-bold text-brand-brown">Phone</h3>
                    <p className="text-brand-lightBrown">+91 99346 62208</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-brand-gold mt-1 shrink-0" />
                  <div>
                    <h3 className="font-bold text-brand-brown">Email</h3>
                    <p className="text-brand-lightBrown">info@stxaviersbibhutipur.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-80 bg-gray-200 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
               {/* Bibhutipur Map Placeholder - Pointing to general Bibhutipur area */}
              <iframe 
                src="https://maps.google.com/maps?q=Bibhutipur+North+Samastipur+Bihar&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Bibhutipur Location"
              ></iframe>
            </div>
          </div>

          <div className="h-px bg-brand-brown/10 w-full"></div>

          {/* Dalsinghsarai Branch */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:flex-row-reverse">
            <div className="order-1 md:order-2 space-y-6">
              <div className="inline-block bg-brand-gold text-brand-brown px-4 py-1 rounded-full text-sm font-bold tracking-wide mb-2">BRANCH</div>
              <h2 className="font-serif text-3xl font-bold text-brand-brown">St. Xavier's Public School, Dalsinghsarai</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-brand-gold mt-1 shrink-0" />
                  <div>
                    <h3 className="font-bold text-brand-brown">Address</h3>
                    <p className="text-brand-lightBrown">Vyapar Mandal Rd, Dalsinghsarai,<br/>Bihar 848114</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-brand-gold mt-1 shrink-0" />
                  <div>
                    <h3 className="font-bold text-brand-brown">Hours</h3>
                    <p className="text-brand-lightBrown">Wed: 06:00 AM - 04:00 PM</p>
                  </div>
                </div>
                <div className="mt-4">
                  <a href="https://yappe.in/bihar/dalsinghsarai/st-xavier-s-public-school/695162" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brand-brown hover:text-brand-gold font-medium border-b border-brand-brown/20 pb-1">
                    View More Details <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="order-2 md:order-1 h-80 bg-gray-200 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <iframe 
                src="https://maps.google.com/maps?q=St.+Xavier's+Public+School+Vyapar+Mandal+Rd+Dalsinghsarai&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Dalsinghsarai Location"
              ></iframe>
            </div>
          </div>

          <div className="h-px bg-brand-brown/10 w-full"></div>

          {/* Pataili Branch */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="inline-block bg-brand-gold text-brand-brown px-4 py-1 rounded-full text-sm font-bold tracking-wide mb-2">BRANCH</div>
              <h2 className="font-serif text-3xl font-bold text-brand-brown">St. Xavier Academy, Pataili</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-brand-gold mt-1 shrink-0" />
                  <div>
                    <h3 className="font-bold text-brand-brown">Address</h3>
                    <p className="text-brand-lightBrown">Pataili, Samastipur,<br/>Bihar</p>
                  </div>
                </div>
                <div className="mt-4">
                   <a href="https://schools.org.in/samastipur/10190505008/st-xavier-academy.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brand-brown hover:text-brand-gold font-medium border-b border-brand-brown/20 pb-1">
                    View School Profile <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="h-80 bg-gray-200 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <iframe 
                src="https://maps.google.com/maps?q=St.+Xavier+Academy+Pataili+Samastipur&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Pataili Location"
              ></iframe>
            </div>
          </div>

        </div>
      </Section>
    </>
  );
};