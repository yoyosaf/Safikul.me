import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X, ExternalLink } from 'lucide-react';
import { Project } from '../constants';
import { cn } from '../lib/utils';

interface PortfolioGridProps {
  projects: Project[];
  limit?: number;
}

export default function PortfolioGrid({ projects, limit }: PortfolioGridProps) {
  const [filter, setFilter] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const categories = ['All', 'YouTube', 'Commercial', 'Documentary', 'Social Media'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const displayProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <div className="w-full">
      {/* Filter Bar */}
      {!limit && (
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-bold transition-all",
                filter === cat 
                  ? "bg-primary text-white shadow-lg shadow-primary/20" 
                  : "bg-white/5 text-white/70 hover:bg-white/10"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {displayProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative glass-card overflow-hidden"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button 
                    onClick={() => setSelectedVideo(project.videoUrl)}
                    className="w-16 h-16 bg-primary rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform"
                  >
                    <Play className="text-white fill-current w-6 h-6" />
                  </button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-[10px] font-bold uppercase tracking-widest rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-text-muted text-sm mb-4 line-clamp-2">{project.description}</p>
                {project.client && (
                  <div className="flex items-center gap-2 text-xs text-white/50">
                    <span className="font-bold uppercase tracking-tighter">Client:</span>
                    <span>{project.client}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Video Lightbox */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedVideo(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white hover:text-primary transition-colors"
              onClick={() => setSelectedVideo(null)}
            >
              <X size={32} />
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={selectedVideo}
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
