
import { Service, SocialLink } from './types';
import { Linkedin, Twitter, Instagram, Rss } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'GEO', href: '#geo' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    title: 'SEO Optimization',
    description: 'Comprehensive on-page, off-page, and technical SEO audits to elevate your search rankings. We build a robust foundation for organic growth by aligning your site with search engine best practices, ensuring maximum visibility and attracting qualified traffic that converts.',
  },
  {
    title: 'GEO Strategy',
    description: 'Optimize your digital presence for the new era of generative and AI-driven search. We structure your content to be understood and favored by AI models, ensuring your brand is not just indexed, but interpreted correctly and featured in AI-generated answers.',
  },
  {
    title: 'Content Writing & Editing',
    description: 'Crafting compelling blogs, press releases, and digital narratives that resonate with both humans and algorithms. Our content is engineered for engagement and authority, telling your brand\'s story in a way that builds trust and drives organic search performance.',
  },
  {
    title: 'Reputation & Visibility',
    description: 'Proactively manage and enhance your online reputation. We build a strong, positive digital footprint through strategic content, review management, and online PR, ensuring that when audiences find you, they find a brand they can trust and believe in.',
  },
  {
    title: 'PPC & Google Ads',
    description: 'Drive immediate, targeted traffic with precision-managed Google Ads campaigns. We handle everything from keyword research and ad copywriting to bid management and performance analysis, maximizing your return on ad spend and delivering measurable results.',
  },
  {
    title: 'Local SEO & GMB',
    description: 'Dominate local search results and connect with customers in your area. We optimize your Google My Business profile, build local citations, and manage reviews to make your business the top choice for nearby searches, driving foot traffic and local leads.',
  },
];

export const EXPERTISE_LIST: string[] = [
  'Keyword Research & Analysis',
  'On-Page SEO',
  'Meta Tags Optimization',
  'Header Tag Optimization',
  'Content Optimization',
  'Image SEO & Alt Tags',
  'Internal Linking Strategy',
  'URL Structure Optimization',
  'Schema Markup (Structured Data)',
  'Technical SEO Audits',
  'Site Speed Optimization',
  'Mobile-First Indexing',
  'Crawlability & Indexability',
  'XML Sitemaps',
  'Robots.txt Management',
  'Canonicals & Redirects',
  'Off-Page SEO',
  'High-Quality Link Building',
  'Guest Blogging Outreach',
  'Digital PR',
  'Brand Mentions',
  'Local SEO',
  'Google My Business (GMB) Optimization',
  'Local Citation Building',
  'Online Review Management',
  'Generative Engine Optimization (GEO)',
  'AI-Answer Engine Readiness',
  'Content Structuring for AI',
  'Entity-Based SEO',
  'Knowledge Graph Optimization',
  'Google Ads (PPC)',
  'Campaign Strategy & Setup',
  'Ad Group & Keyword Management',
  'Ad Copywriting & A/B Testing',
  'Landing Page Optimization',
  'Conversion Tracking',
  'Budget Management',
  'Reputation Management',
  'Brand Monitoring',
  'Sentiment Analysis',
  'Content Strategy',
  'Analytics and Reporting',
];


export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/crawled/', icon: Linkedin },
  { name: 'X', url: 'https://x.com/crawled_blog', icon: Twitter },
  { name: 'Instagram', url: 'https://www.instagram.com/crawled.blog/', icon: Instagram },
  { name: 'Substack', url: 'https://crawled.substack.com', icon: Rss },
];
