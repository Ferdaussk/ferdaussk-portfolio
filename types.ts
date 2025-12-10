import { LucideIcon } from "lucide-react";

export interface Skill {
  name: string;
  percentage: number;
  category: 'core' | 'language' | 'tool';
}

export interface Job {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; // HTML or Markdown string for the full post
  date: string;
  image: string;
  category: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}