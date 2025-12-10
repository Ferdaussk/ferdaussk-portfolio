import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BLOG_POSTS } from '../constants';
import { ArrowRight, Calendar, X, Clock } from 'lucide-react';
import { BlogPost } from '../types';

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Prevent background scrolling when modal is open
  React.useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedPost]);

  return (
    <section id="blog" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
             <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-3">Latest Insights</h2>
            <h2 className="text-3xl lg:text-4xl font-bold font-heading text-white mb-4">Technical Writings</h2>
          </div>
          <button className="hidden md:flex items-center text-accent font-medium hover:text-white transition-colors">
            View all posts <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer flex flex-col h-full bg-surface border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-colors"
              onClick={() => setSelectedPost(post)}
            >
              <div className="relative overflow-hidden h-48">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs font-bold text-white z-20">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-secondary text-xs mb-3">
                    <Calendar className="w-3 h-3 mr-1" />
                    {post.date}
                </div>
                
                <h3 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                </h3>
                
                <p className="text-secondary text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {post.excerpt}
                </p>
                
                <span className="inline-flex items-center text-sm font-bold text-accent">
                    Read Article <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Full Screen Details Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          >
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-background/95 backdrop-blur-xl"
                onClick={() => setSelectedPost(null)}
            ></div>

            {/* Content Container */}
            <motion.div 
                layoutId={selectedPost.id}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                className="relative w-full max-w-4xl max-h-full bg-surface border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
            >
                {/* Header Image */}
                <div className="relative h-64 md:h-80 flex-shrink-0">
                     <img 
                        src={selectedPost.image} 
                        alt={selectedPost.title} 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
                    
                    <button 
                        onClick={() => setSelectedPost(null)}
                        className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors backdrop-blur-md"
                    >
                        <X size={24} />
                    </button>

                    <div className="absolute bottom-6 left-6 md:left-10 right-6">
                        <span className="inline-block px-3 py-1 bg-accent text-background text-xs font-bold rounded-full mb-3">
                            {selectedPost.category}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading text-white leading-tight">
                            {selectedPost.title}
                        </h2>
                    </div>
                </div>

                {/* Body Content */}
                <div className="flex-grow overflow-y-auto p-6 md:p-10 custom-scrollbar">
                    <div className="flex items-center gap-6 text-sm text-secondary mb-8 border-b border-white/5 pb-6">
                        <span className="flex items-center"><Calendar size={14} className="mr-2"/> {selectedPost.date}</span>
                        <span className="flex items-center"><Clock size={14} className="mr-2"/> 5 min read</span>
                        <span className="flex items-center">By Ferdaus</span>
                    </div>

                    <div 
                        className="prose prose-invert prose-lg max-w-none 
                        prose-headings:font-heading prose-headings:font-bold prose-headings:text-white 
                        prose-p:text-slate-400 prose-strong:text-white prose-li:text-slate-400"
                        dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                    />
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Blog;