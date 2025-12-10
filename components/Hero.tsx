import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-background">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center space-x-2 py-1 px-3 rounded-full bg-surfaceHighlight border border-white/5 text-accent text-xs font-bold tracking-wide uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span>Available for New Projects</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold font-heading text-white mb-6 leading-[1.1]">
            Building the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-indigo-500">
              Digital Future.
            </span>
          </h1>
          
          <p className="text-lg text-secondary mb-8 max-w-lg leading-relaxed">
            I'm <strong className="text-white">{PERSONAL_INFO.name}</strong>, a {PERSONAL_INFO.role}. 
            {PERSONAL_INFO.intro}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-background rounded-full font-bold hover:bg-white transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]"
            >
              Start a Project <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <button className="inline-flex items-center justify-center px-8 py-4 border border-white/10 bg-white/5 text-white rounded-full font-medium hover:bg-white/10 transition-colors backdrop-blur-sm">
              Download CV <Download className="ml-2 w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-sm text-secondary font-medium uppercase tracking-wider">Connect</span>
            <div className="h-px w-12 bg-white/10"></div>
            <div className="flex gap-4">
              <a href={PERSONAL_INFO.github} className="text-secondary hover:text-white transition-colors"><Github size={20} /></a>
              <a href={PERSONAL_INFO.linkedin} className="text-secondary hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-secondary hover:text-white transition-colors"><Mail size={20} /></a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
            {/* Image Frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent to-indigo-600 rounded-2xl rotate-3 opacity-20"></div>
            <div className="absolute inset-0 bg-surfaceHighlight rounded-2xl -rotate-3 border border-white/5 overflow-hidden">
               <img 
                src="img/ferdaussk.png" 
                alt="Ferdaus Profile" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-surface border border-white/10 p-6 rounded-xl shadow-2xl backdrop-blur-md"
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl font-bold font-heading text-accent">6+</div>
                <div className="text-xs text-secondary leading-tight uppercase tracking-wide">
                  Years of<br/>Experience
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;