import { LucideIcon, Video, Palette, Layers, Volume2, Film, Youtube, Instagram, Twitter, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  category: 'YouTube' | 'Commercial' | 'Documentary' | 'Social Media';
  client?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export interface Skill {
  name: string;
  level: number;
}

export const SITE_DATA = {
  name: "Alex Rivera",
  role: "Professional Video Editor",
  bio: "I create cinematic edits, storytelling videos, and high-quality content for brands and creators. With over 6 years of experience, I specialize in bringing stories to life through rhythm, color, and sound.",
  yearsOfExperience: 6,
  profilePhoto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
  showreelUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
  email: "hello@alexrivera.com",
  whatsapp: "+1234567890",
  socials: {
    youtube: "https://youtube.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    fiverr: "https://fiverr.com",
    upwork: "https://upwork.com"
  },
  tools: [
    { name: "Adobe Premiere Pro", icon: "https://cdn.worldvectorlogo.com/logos/adobe-premiere-pro-cc.svg" },
    { name: "After Effects", icon: "https://cdn.worldvectorlogo.com/logos/adobe-after-effects-cc.svg" },
    { name: "DaVinci Resolve", icon: "https://cdn.worldvectorlogo.com/logos/davinci-resolve-1.svg" },
    { name: "Photoshop", icon: "https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg" }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Urban Exploration",
    description: "A cinematic journey through the hidden corners of Tokyo.",
    thumbnail: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "Documentary",
    client: "Travel Channel"
  },
  {
    id: "2",
    title: "Nike Speed",
    description: "Fast-paced commercial edit for the new running collection.",
    thumbnail: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "Commercial",
    client: "Nike"
  },
  {
    id: "3",
    title: "Tech Review 2024",
    description: "High-energy YouTube edit with custom motion graphics.",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "YouTube",
    client: "TechGuru"
  },
  {
    id: "4",
    title: "Summer Vibes",
    description: "Vibrant social media reels for a lifestyle brand.",
    thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "Social Media",
    client: "SunSet Co."
  }
];

export const SERVICES: Service[] = [
  {
    id: "1",
    title: "YouTube Video Editing",
    description: "Retention-focused editing with engaging cuts, B-roll, and pacing.",
    icon: "Youtube"
  },
  {
    id: "2",
    title: "Short Form Content",
    description: "Viral-style editing for TikTok, Reels, and Shorts with dynamic captions.",
    icon: "Instagram"
  },
  {
    id: "3",
    title: "Commercial Ads",
    description: "High-end cinematic commercials that drive sales and brand awareness.",
    icon: "Film"
  },
  {
    id: "4",
    title: "Documentary Editing",
    description: "Story-driven editing that captures the essence of your subject.",
    icon: "Video"
  },
  {
    id: "5",
    title: "Podcast Editing",
    description: "Clean audio and multi-cam video switching for professional podcasts.",
    icon: "Volume2"
  }
];

export const SKILLS: Skill[] = [
  { name: "Video Editing", level: 95 },
  { name: "Color Grading", level: 90 },
  { name: "Motion Graphics", level: 75 },
  { name: "Sound Design", level: 80 }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Marketing Director",
    text: "Alex transformed our raw footage into a masterpiece. The pacing and color grading were exactly what we needed.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "2",
    name: "Mark Tuan",
    role: "YouTube Creator",
    text: "The best editor I've worked with. My retention rates went up by 40% after Alex started editing my videos.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  }
];
