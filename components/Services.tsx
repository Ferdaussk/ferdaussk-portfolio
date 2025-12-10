import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-surface relative overflow-hidden">
       {/* Decorative Lines */}
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
       <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-3">Expertise</h2>
          <h3 className="text-3xl lg:text-4xl font-bold font-heading text-white mb-4">
            Specialized Services
          </h3>
          <p className="text-secondary">
            I don't just write code; I provide solutions that drive business growth. 
            Here is how I can help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 bg-background border border-white/5 rounded-2xl hover:border-accent/30 hover:bg-surfaceHighlight transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Icon size={100} className="text-white transform translate-x-4 -translate-y-4" />
                </div>
                
                <div className="w-12 h-12 bg-surfaceHighlight rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-background transition-colors border border-white/5">
                  <Icon className="w-6 h-6 text-accent group-hover:text-background transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold font-heading text-white mb-3">{service.title}</h3>
                <p className="text-secondary text-sm leading-relaxed mb-4 group-hover:text-slate-300">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;