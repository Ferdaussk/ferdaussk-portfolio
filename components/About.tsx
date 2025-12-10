import React from 'react';
import { motion } from 'framer-motion';
import { Award, Globe, Users, Code, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-3">About Me</h2>
            <h3 className="text-3xl lg:text-4xl font-bold font-heading text-white mb-6">
              Bridging creativity and engineering.
            </h3>
            <p className="text-secondary leading-relaxed mb-6 text-lg">
              I am a software engineer with a passion for building scalable, user-centric web applications. My journey started with WordPress customization, but my curiosity led me to master modern JavaScript ecosystems.
            </p>
            <p className="text-secondary leading-relaxed mb-8">
              Today, I help international businesses transform their ideas into robust digital products. Whether it's a high-traffic e-commerce store or a complex SaaS dashboard, I bring technical excellence and a problem-solving mindset to every project.
            </p>

            <div className="flex flex-wrap gap-3">
              {['Plugin Development', 'Headless CMS', 'React Architecture', 'System Design'].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-surfaceHighlight rounded-full text-sm text-white border border-white/5 hover:border-accent/50 transition-colors cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-surfaceHighlight p-6 rounded-2xl border border-white/5"
            >
              <Award className="w-8 h-8 text-accent mb-4" />
              <div className="text-3xl font-bold text-white mb-1 font-heading">Top 1%</div>
              <div className="text-sm text-secondary">Marketplace Sales</div>
            </motion.div>
            
            <motion.div
               whileHover={{ y: -5 }}
               className="bg-surfaceHighlight p-6 rounded-2xl border border-white/5"
            >
              <Globe className="w-8 h-8 text-indigo-400 mb-4" />
              <div className="text-3xl font-bold text-white mb-1 font-heading">Global</div>
              <div className="text-sm text-secondary">Client Base</div>
            </motion.div>

            <motion.div
               whileHover={{ y: -5 }}
               className="bg-surfaceHighlight p-6 rounded-2xl border border-white/5 col-span-2"
            >
              <div className="flex items-center justify-between mb-4">
                 <Users className="w-8 h-8 text-emerald-400" />
                 <span className="text-4xl font-bold text-white font-heading">200+</span>
              </div>
              <div className="text-sm text-secondary">Successful Projects Delivered</div>
              <div className="w-full bg-white/5 h-1.5 mt-4 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-400 w-[95%]"></div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;