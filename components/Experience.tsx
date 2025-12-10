import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-surface relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-3">Career Path</h2>
          <h3 className="text-3xl lg:text-4xl font-bold font-heading text-white mb-4">Work Experience</h3>
        </div>

        <div className="max-w-4xl mx-auto">
          {EXPERIENCE.map((job, index) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0 group"
            >
                {/* Timeline Line */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-white/10 group-last:h-1/2 group-first:top-1/2 group-first:h-1/2"></div>

                <div className={`md:flex items-center justify-between mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    
                    {/* Empty half */}
                    <div className="hidden md:block w-5/12"></div>
                    
                    {/* Icon */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 bg-surfaceHighlight rounded-full flex items-center justify-center border border-white/10 shadow-lg z-10 group-hover:border-accent transition-colors">
                        <Briefcase size={16} className="text-accent" />
                    </div>

                    {/* Content Card */}
                    <div className="w-full md:w-5/12 bg-background p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors relative">
                        {/* Mobile connection line */}
                        <div className="absolute top-8 -left-8 md:hidden w-8 h-px bg-white/10"></div>
                        
                        <div className="flex justify-between items-start mb-2">
                             <h3 className="text-xl font-bold font-heading text-white">{job.role}</h3>
                             <span className="py-1 px-3 bg-white/5 text-accent text-xs font-bold rounded-full border border-white/5">
                                {job.period}
                            </span>
                        </div>
                        <h4 className="text-md font-medium text-secondary mb-4">{job.company}</h4>
                        <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                            {job.description}
                        </p>
                        <ul className="space-y-2">
                            {job.achievements.map((ach, i) => (
                                <li key={i} className="flex items-start text-slate-500 text-xs">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50 mr-2 mt-1.5 flex-shrink-0"></span>
                                    {ach}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;