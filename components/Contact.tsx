import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CONTACT_INFO, PERSONAL_INFO } from '../constants';
import { Send, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-surfaceHighlight border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-3">Get in Touch</h2>
              <h2 className="text-4xl font-bold font-heading text-white mb-6">Let's build something extraordinary.</h2>
              <p className="text-secondary mb-10 leading-relaxed text-lg">
                I am currently available for freelance projects and full-time opportunities.
                If you have a project that needs some creative injection, hit me up!
              </p>

              <div className="space-y-8">
                 <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-background border border-white/5 flex items-center justify-center mr-6 flex-shrink-0 text-accent">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white mb-1">Location</h4>
                    <p className="text-secondary">{PERSONAL_INFO.location}</p>
                  </div>
                </div>

                {CONTACT_INFO.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.platform} className="flex items-start group">
                      <div className="w-12 h-12 rounded-xl bg-background border border-white/5 flex items-center justify-center mr-6 flex-shrink-0 text-accent group-hover:border-accent/50 transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-white mb-1">{item.platform}</h4>
                        <a href={item.url} className="text-secondary hover:text-accent transition-colors flex items-center">
                            {item.platform === 'Email' ? PERSONAL_INFO.email : 'View Profile'}
                            <ExternalLink size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="bg-background rounded-3xl p-8 border border-white/5 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-secondary">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-4 rounded-xl bg-surfaceHighlight border border-white/10 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-slate-600"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-secondary">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-4 rounded-xl bg-surfaceHighlight border border-white/10 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-slate-600"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-secondary">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-4 rounded-xl bg-surfaceHighlight border border-white/10 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-slate-600"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-secondary">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-4 rounded-xl bg-surfaceHighlight border border-white/10 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none placeholder:text-slate-600"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                className={`w-full py-4 rounded-xl font-bold text-background flex items-center justify-center transition-all ${
                  status === 'success' ? 'bg-emerald-400' : 'bg-accent hover:bg-white'
                }`}
              >
                {status === 'submitting' ? (
                  'Sending...'
                ) : status === 'success' ? (
                  'Message Sent!'
                ) : (
                  <>
                    Send Message <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;