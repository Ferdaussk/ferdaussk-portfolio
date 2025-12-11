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
            I'm <strong className="text-white">{PERSONAL_INFO.name}</strong>, a {PERSONAL_INFO.role}<strong className="text-white underline"><a href="https://lotussk.com" target="_blank">LOTUSSK</a></strong>. 
            {PERSONAL_INFO.intro}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-background rounded-full font-bold hover:bg-white transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]"
            >
              Start a Project <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a 
              href="img/ferdaussk.pdf"
              download
              className="inline-flex items-center justify-center px-8 py-4 border border-white/10 bg-white/5 text-white rounded-full font-medium hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              Download CV <Download className="ml-2 w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-sm text-secondary font-medium uppercase tracking-wider">Connect</span>
            <div className="h-px w-12 bg-white/10"></div>
            <div className="flex gap-4">
              <a href={PERSONAL_INFO.github} className="text-secondary hover:text-white transition-colors" target="_blank"><Github size={20} /></a>
              <a href={PERSONAL_INFO.linkedin} className="text-secondary hover:text-white transition-colors" target="_blank"><Linkedin size={20} /></a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-secondary hover:text-white transition-colors" target="_blank"><Mail size={20} /></a>
              <a href="https://profiles.wordpress.org/ferdaussk" className="text-secondary hover:text-white transition-colors" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm5.751 5.769a9.47 9.47 0 012.081 5.936c0 3.318-1.814 6.204-4.488 7.75l2.743-7.527c.515-1.293.688-2.376.688-3.3 0-.287-.018-.556-.053-.816zm-5.75-.915c.97 0 1.66.106 1.66.106l-3.547 10.28-3.595-10.28s.688-.106 1.735-.106c.85 0 1.82.13 2.318.323l.27.136c.498-.193 1.467-.323 2.159-.323zm-8.238.915a9.428 9.428 0 00-.053.816c0 .924.173 2.007.688 3.3l2.598 7.13C3.942 15.073 2.25 12.25 2.25 9.188c0-2.212.833-4.245 2.212-5.863zm6.078 16.058l3.024-8.381 3.105 8.346c-1.062.314-2.189.487-3.27.487-1.155 0-2.31-.19-2.859-.452z"/>
                </svg>
              </a>
              <a href="https://codecanyon.net/user/ferdausskdev" className="text-secondary hover:text-white transition-colors" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 256 256" fill="currentColor">
                  <path d="M207.6 24c-19.2 0-39.7 13.2-54.6 35.1-14.6 21.3-24 50.1-24 78.3 0 5.7.3 11.3.9 16.8-.1-.2-33.6-70.7-33.6-70.7-3.7-7.8-11.3-12.6-19.7-12.6h-22.7C18 70.9 0 88.8 0 111.9c0 23 18 41 40.8 41h23c8.3 0 16-4.8 19.7-12.6l2.4-5c-.7 5.8-1.1 11.7-1.1 17.6 0 57.4 33.2 102.1 76.7 102.1 42.4 0 94.5-41.4 94.5-117.1C256 62.6 230 24 207.6 24z"/>
                </svg>
              </a>
              <a href="tel:+8801516572668" className="text-secondary hover:text-white transition-colors" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.82.74 5.57 2.15 7.99L.5 31.5l7.7-2.05A15.34 15.34 0 0016 31.5c8.56 0 15.5-6.94 15.5-15.5S24.56.5 16 .5zm0 28c-2.48 0-4.9-.66-7.01-1.92l-.5-.29-4.57 1.21 1.22-4.45-.3-.52A13.5 13.5 0 1116 28.5zm7.29-10.37c-.4-.2-2.36-1.17-2.73-1.3-.37-.14-.64-.2-.9.2-.27.4-1.04 1.3-1.27 1.56-.23.26-.47.3-.87.1-.4-.2-1.68-.62-3.2-1.98-1.18-1.05-1.97-2.35-2.2-2.75-.23-.4-.02-.62.17-.82.18-.18.4-.47.6-.7.2-.23.26-.4.4-.67.13-.27.07-.5-.03-.7-.1-.2-.9-2.16-1.23-2.97-.32-.77-.65-.67-.9-.68l-.77-.01c-.27 0-.7.1-1.06.47-.37.4-1.4 1.36-1.4 3.33 0 1.97 1.43 3.87 1.63 4.14.2.27 2.8 4.27 6.8 5.99 4 1.7 4 1.14 4.7 1.07.7-.07 2.36-.96 2.7-1.9.33-.93.33-1.73.23-1.9-.1-.17-.36-.27-.77-.47z"/>
                </svg>
              </a>
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