import React from 'react';
import { Section } from '../components/Section';
import { motion } from 'framer-motion';
import { FileText, UserCheck, CreditCard, Check } from 'lucide-react';

export const Admissions: React.FC = () => {
  return (
    <>
      <div className="bg-brand-brown text-brand-cream pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Admissions
          </motion.h1>
          <p className="text-brand-cream/70">
            Join our community of learners.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Process Steps */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-brand-brown mb-8">Admission Process</h2>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
              
              {[
                { icon: <FileText size={20} />, title: "Registration", desc: "Collect the admission form from the school office or download online." },
                { icon: <UserCheck size={20} />, title: "Assessment", desc: "Written test and interaction for students (Class I onwards)." },
                { icon: <Check size={20} />, title: "Document Verification", desc: "Submission of birth certificate, transfer certificate, and photos." },
                { icon: <CreditCard size={20} />, title: "Fee Submission", desc: "Payment of admission fees to confirm the seat." }
              ].map((step, idx) => (
                 <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-brand-gold text-brand-brown shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                        {step.icon}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                        <h3 className="font-bold text-brand-brown">{step.title}</h3>
                        <p className="text-sm text-brand-lightBrown mt-1">{step.desc}</p>
                    </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-8 border-brand-brown">
            <h2 className="font-serif text-2xl font-bold text-brand-brown mb-6">Admission Enquiry</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-brand-brown mb-1">Student Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-brown mb-1">Class Applying For</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all">
                    <option>Select Class</option>
                    <option>Nursery - KG</option>
                    <option>Class 1 - 5</option>
                    <option>Class 6 - 8</option>
                    <option>Class 9 - 10</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-brand-brown mb-1">Parent Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-brown mb-1">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-brown mb-1">Email Address</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all" />
              </div>

              <div>
                 <label className="block text-sm font-medium text-brand-brown mb-1">Message / Queries</label>
                 <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"></textarea>
              </div>

              <button className="w-full bg-brand-brown text-brand-cream font-bold py-3 rounded-lg hover:bg-brand-lightBrown transition-colors shadow-lg mt-4">
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
};