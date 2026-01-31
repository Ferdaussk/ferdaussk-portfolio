import { 
  Code, 
  ShoppingCart, 
  Smartphone, 
  Globe, 
  Server,
  Layout,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Zap,
  Database
} from "lucide-react";
import { Skill, Job, Service, BlogPost, SocialLink } from "./types";

export const PERSONAL_INFO = {
  name: "FERDAUS",
  role: "Software Developer and CEO at ",
  email: "ferdaussk.dev@gmail.com",
  location: 'F G-B, H 59, Kuri-Para Rd, Dhaka - 1230',
  intro: " I craft high-performance digital experiences. Specializing in the WordPress, Shopify, Flutter ecosystem and modern JavaScript stacks, I bridge the gap between robust backend architecture and interactive frontend design.",
  github: "https://github.com/Ferdaussk",
  linkedin: "https://www.linkedin.com/in/md-jannat-ferdaus-473479216/"
};

export const SKILLS: Skill[] = [
  { name: "WordPress Core", percentage: 98, category: "core" },
  { name: "PHP & Laravel", percentage: 92, category: "language" },
  { name: "JavaScript (ES6+)", percentage: 87, category: "language" },
  { name: "React & Next.js", percentage: 85, category: "language" },
  { name: "Shopify Liquid", percentage: 80, category: "core" },
  { name: "Flutter", percentage: 75, category: "tool" },
  { name: "REST/GraphQL", percentage: 90, category: "tool" },
  { name: "Cloud/DevOps", percentage: 65, category: "tool" },
];

export const SERVICES: Service[] = [
  {
    title: "Advanced WordPress / Shopify Development",
    description: "Custom plugin architecture, headless WP setups, and Gutenberg block development for enterprise needs.",
    icon: Globe,
  },
  {
    title: "E-Commerce Engineering",
    description: "High-conversion WooCommerce and Shopify stores with custom payment gateways and inventory sync.",
    icon: ShoppingCart,
  },
  {
    title: "Full-Stack Web Apps",
    description: "Scalable SaaS applications using Laravel, React or Node.js backends with reactive frontends.",
    icon: Database,
  },
  {
    title: "Mobile Solutions / Flutter",
    description: "Cross-platform mobile applications built with Flutter, ensuring native performance on iOS and Android.",
    icon: Smartphone,
  },
];

export const EXPERIENCE: Job[] = [
  {
    company: "DevsZon",
    role: "Software Developer",
    period: "2025 - Present",
    description: "Leading the technical strategy for scalable web solutions.",
    achievements: [
      "Architecting high-performance WordPress plugins used by 10k+ users.",
      "Developing custom Shopify Apps with complex liquid customizations.",
      "Implementing CI/CD pipelines for automated deployment."
    ]
  },
  {
    company: "Best WP Developer",
    role: "Software Developer",
    period: "2020 - 2025",
    description: "Specialized in product development for the Envato marketplace.",
    achievements: [
      "Created top-selling WordPress themes on ThemeForest.",
      "Optimized database queries reducing load times by 40%.",
      "Mentored junior developers in React and PHP best practices."
    ]
  },
  {
    company: "Best WP Developer",
    role: "Intern Developer",
    period: "2020 - 2021",
    description: "Specialized in product development for the Envato marketplace.",
    achievements: [
      "Created top-selling WordPress themes on ThemeForest.",
      "Optimized database queries reducing load times by 40%.",
      "Mentored junior developers in React and PHP best practices."
    ]
  },
  {
    company: "3 Cube Tech Care",
    role: "WordPress Developer",
    period: "2019 - 2020",
    description: "Focused on client-side customization and delivery.",
    achievements: [
      "Delivered 50+ successful client projects with 95% satisfaction rate.",
      "Managed server migrations and security hardening for client sites."
    ]
  },
  {
    company: "3 Cube Tech Care",
    role: "WordPress Developer (Intern)",
    period: "2019Feb - 2019Aug",
    description: "Focused on client-side customization and delivery.",
    achievements: [
      "Delivered 10+ successful client projects with 70% satisfaction rate.",
      "Managed server migrations and security hardening for client sites."
    ]
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Headless WordPress with Next.js",
    excerpt: "Decoupling the frontend from the backend to create blazing fast digital experiences.",
    content: `
      <p>The traditional WordPress architecture is powerful, but sometimes you need more. <strong>Headless WordPress</strong> is a modern approach where we use WordPress strictly as a Content Management System (CMS) and build the frontend using modern JavaScript frameworks like React or Next.js.</p>
      
      <h3>Why Go Headless?</h3>
      <ul>
        <li><strong>Performance:</strong> Static site generation (SSG) allows for near-instant page loads.</li>
        <li><strong>Security:</strong> The frontend is decoupled from the database, reducing attack vectors.</li>
        <li><strong>Flexibility:</strong> Build the frontend exactly how you want without fighting themes.</li>
      </ul>

      <p>In this post, I explore how to set up WPGraphQL to expose your data and consume it in a Next.js 14 application using the App Router.</p>
    `,
    date: "Oct 15, 2023",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "2",
    title: "Optimizing Shopify Liquid",
    excerpt: "Advanced techniques to reduce render times and improve Core Web Vitals.",
    content: `
      <p>Shopify's Liquid templating language is robust, but inefficient code can kill your conversion rates. Speed is money in e-commerce.</p>
      
      <h3>Key Optimization Strategies</h3>
      <p>1. <strong>Lazy Loading Images:</strong> Use the native loading attribute and Shopify's image_url filter effectively.</p>
      <p>2. <strong>Limit Loops:</strong> Avoid nested loops where possible. Pre-calculate collections if needed.</p>
      <p>3. <strong>Render API:</strong> Use the section rendering API to update cart drawers without page reloads.</p>

      <p>By implementing these changes, I recently helped a client improve their PageSpeed score from 45 to 92.</p>
    `,
    date: "Sep 22, 2023",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "3",
    title: "State Management in 2024",
    excerpt: "Comparing Redux Toolkit, Zustand, and React Context for modern web apps.",
    content: `
      <p>State management is one of the most debated topics in the React ecosystem. With the introduction of React Server Components, the landscape has shifted again.</p>
      
      <h3>My Recommendation</h3>
      <p>For most mid-sized applications, <strong>Zustand</strong> offers the best balance of simplicity and power. It avoids the boilerplate of Redux while providing better performance than raw Context API.</p>
      
      <p>However, if you are building complex enterprise dashboards with frequent server-state updates, TanStack Query is indispensable.</p>
    `,
    date: "Aug 10, 2023",
    category: "React",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000"
  }
];

export const CONTACT_INFO: SocialLink[] = [
  { platform: "Email", url: `mailto:${PERSONAL_INFO.email}`, icon: Mail },
  { platform: "LinkedIn", url: PERSONAL_INFO.linkedin, icon: Linkedin },
  { platform: "GitHub", url: PERSONAL_INFO.github, icon: Github },
];