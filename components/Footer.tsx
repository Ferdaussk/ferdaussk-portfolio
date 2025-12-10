import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background py-8 text-center border-t border-white/5">
      <div className="container mx-auto px-6">
        <p className="text-secondary text-sm">
          &copy; {new Date().getFullYear()} <span className="text-white font-medium">{PERSONAL_INFO.name}</span>. All rights reserved.
        </p>
        <p className="text-slate-600 text-xs mt-2">
            Designed & Built with <span className="text-accent">React</span> & <span className="text-accent">Tailwind</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;