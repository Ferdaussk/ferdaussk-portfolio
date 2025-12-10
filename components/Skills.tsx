import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
                 <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-3">Proficiency</h2>
                <h3 className="text-3xl lg:text-4xl font-bold font-heading text-white mb-6">
                    Technologies I speak fluently.
                </h3>
                <p className="text-secondary mb-8 leading-relaxed">
                    I believe in choosing the right tool for the job. While I have deep expertise in the WordPress ecosystem, I am equally proficient in modern JavaScript frameworks for building complex, interactive applications.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                    {['Git', 'Docker', 'Figma', 'Linux', 'AWS', 'VS Code'].map((tool) => (
                         <div key={tool} className="flex items-center space-x-2 text-secondary">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                            <span>{tool}</span>
                         </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {SKILLS.map((skill, index) => (
                    <div key={skill.name}>
                        <div className="flex justify-between items-end mb-2">
                            <span className="font-medium text-white">{skill.name}</span>
                            <span className="text-sm font-bold text-secondary">{skill.percentage}%</span>
                        </div>
                        <div className="w-full bg-surfaceHighlight rounded-full h-2 overflow-hidden border border-white/5">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.percentage}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, delay: 0.1 * index, ease: "easeOut" }}
                                className="bg-gradient-to-r from-indigo-500 to-accent h-full rounded-full"
                            ></motion.div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;