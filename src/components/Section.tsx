import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id, dark = false }) => {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 ${dark ? 'bg-brand-brown text-brand-cream' : 'bg-brand-cream text-brand-brown'} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};