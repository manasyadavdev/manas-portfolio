export const personalInfo = {
  name: 'Manas',
  title: 'Frontend & WordPress Developer',
  email: 'yadavmanas980@gmail.com',
  github: 'https://github.com/manasyadavdev',
  education: {
    degree: 'B.Tech in Computer Science & Engineering',
    college: 'Allenhouse Institute of Technology',
    graduation: '2030',
  },
};

export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export const heroTags = ['Frontend', 'WordPress', 'React', 'UI/UX'];

export const capabilities = [
  { label: 'Frontend Development', icon: 'Layout' },
  { label: 'WordPress', icon: 'Globe' },
  { label: 'React', icon: 'Atom' },
  { label: 'JavaScript', icon: 'Code2' },
  { label: 'Responsive UI', icon: 'Smartphone' },
  { label: 'Git / GitHub', icon: 'Github' },
];

export const skillCategories = [
  {
    name: 'Frontend',
    icon: 'Layout',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Responsive Web Development'],
  },
  {
    name: 'WordPress',
    icon: 'Globe',
    skills: ['WordPress', 'PHP', 'Custom Themes', 'REST API', 'AJAX'],
  },
  {
    name: 'Tools',
    icon: 'Wrench',
    skills: ['Git', 'GitHub', 'VS Code'],
  },
  {
    name: 'UI / UX',
    icon: 'Palette',
    skills: ['UI/UX Design', 'Responsive Design', 'Visual Hierarchy', 'Interaction Design'],
  },
  {
    name: 'Problem Solving',
    icon: 'Lightbulb',
    skills: ['Problem Solving', 'Debugging', 'Practical Project Development'],
  },
];

export const wpflowCaseStudy = [
  {
    heading: 'Challenge',
    body: 'Build a SaaS-style web experience that demonstrates modern frontend architecture and a WordPress-oriented design approach — without relying on heavy frameworks or backend complexity.',
  },
  {
    heading: 'Approach',
    body: 'Designed a responsive, component-driven interface with a clear visual system: dark/light theming, interactive pricing, scroll-driven reveals and accessible navigation — all built with HTML, CSS and JavaScript.',
  },
  {
    heading: 'Implementation',
    body: 'Developed a modular layout with reusable UI patterns, a monthly/yearly pricing toggle, scroll progress indicator, mobile navigation and form states. Every interaction was built to degrade gracefully on smaller screens.',
  },
  {
    heading: 'Technical Highlights',
    body: 'CSS-driven animations, IntersectionObserver for scroll reveals, a theme toggle persisted via localStorage, reduced-motion support and a responsive grid that adapts from 320px to 1920px.',
  },
  {
    heading: 'UX Decisions',
    body: 'Prioritized clarity over decoration. Pricing, features and navigation are immediately scannable. Hover and focus states give clear feedback without overwhelming the interface.',
  },
  {
    heading: 'Accessibility',
    body: 'Semantic HTML structure, keyboard-navigable controls, visible focus states, ARIA labels where necessary and a reduced-motion path that disables parallax and floating animations.',
  },
  {
    heading: 'Performance',
    body: 'No heavy 3D engines or large dependencies. CSS transforms and requestAnimationFrame keep animations smooth. The page loads fast and stays responsive on mid-range devices.',
  },
  {
    heading: 'WordPress Architecture',
    body: 'The conceptual backend direction envisions a WordPress-powered architecture using PHP, REST API, AJAX and MySQL — exposing content through REST endpoints consumed by the frontend. This is a design direction, not a deployed backend.',
  },
  {
    heading: 'Outcome',
    body: 'A responsive, interactive web experience demonstrating modern frontend implementation, reusable UI patterns and a SaaS-style visual system with a WordPress-oriented architecture.',
  },
  {
    heading: 'What I Learned',
    body: 'Deepened my understanding of responsive design systems, scroll-driven interactions, theme architecture and how to structure a frontend that could integrate with a WordPress REST API backend.',
  },
];

export const wpflowFeatures = [
  'Responsive SaaS-style interface',
  'Dark / light theme toggle',
  'Interactive UI components',
  'Pricing monthly / yearly toggle',
  'Scroll progress indicator',
  'Scroll reveal animations',
  'Mobile navigation',
  'Form states with validation',
  'Reduced-motion support',
  'Accessibility-minded structure',
  'WordPress-oriented architecture',
];

export const wpflowTech = ['HTML', 'CSS', 'JavaScript', 'WordPress', 'PHP', 'REST API', 'AJAX', 'MySQL'];

export const projects = [
  {
    name: 'WPFlow 5.0',
    type: 'Featured Case Study',
    description:
      'A responsive SaaS-style web experience with interactive pricing, theme toggle, scroll reveals and a WordPress-oriented architecture.',
    tech: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
    outcome:
      'Built a responsive interactive web experience demonstrating modern frontend implementation and reusable UI patterns.',
    github: 'https://github.com/manasyadavdev/wpflow/',
    demo: 'https://manasyadavdev.github.io/wpflow/',
    hasDemo: true,
    featured: true,
  },
  {
    name: 'Job Auto Apply Assistant',
    type: 'Full-Stack Application',
    description:
      'A job application assistant built with React, TypeScript, Vite and Supabase, integrating Google OAuth and the Gmail API.',
    tech: ['React', 'TypeScript', 'Vite', 'Supabase', 'Google OAuth', 'Gmail API'],
    outcome:
      'Developed a full-stack application demonstrating OAuth integration, database design and a React + TypeScript frontend.',
    github: 'https://github.com/manasyadavdev/job-application',
    demo: null,
    hasDemo: false,
    featured: false,
  },
];

export const processSteps = [
  {
    num: '01',
    title: 'Understand',
    body: 'Understand requirements, users and project goals before writing any code.',
  },
  {
    num: '02',
    title: 'Design',
    body: 'Create responsive layouts with clear hierarchy and usable interactions.',
  },
  {
    num: '03',
    title: 'Build',
    body: 'Develop clean frontend and WordPress solutions with reusable components.',
  },
  {
    num: '04',
    title: 'Refine',
    body: 'Test responsiveness, accessibility, performance and usability across devices.',
  },
];

export const learningTimeline = [
  {
    year: '2026 → Present',
    title: 'B.Tech in Computer Science & Engineering',
    place: 'Allenhouse Institute of Technology',
  },
];

export const currentFocus = [
  'Frontend Development',
  'JavaScript',
  'React',
  'WordPress',
  'UI/UX',
  'Modern Web Development',
];

export const futureDirection = [
  'Advanced frontend engineering',
  'WordPress engineering',
  'AI-assisted development',
  'Production-grade web applications',
];

export const services = [
  {
    title: 'Frontend Development',
    body: 'Modern, responsive interfaces built with React, JavaScript and clean component architecture.',
    icon: 'Layout',
  },
  {
    title: 'Responsive Web Design',
    body: 'Layouts that adapt seamlessly from mobile to desktop with strong visual hierarchy.',
    icon: 'Smartphone',
  },
  {
    title: 'WordPress Development',
    body: 'Custom themes, REST API integration and WordPress-oriented frontend architecture.',
    icon: 'Globe',
  },
  {
    title: 'UI Refinement',
    body: 'Interaction design, accessibility improvements and visual polish for existing interfaces.',
    icon: 'Palette',
  },
];

export const opportunities = [
  'Internships',
  'Junior Developer Opportunities',
  'Freelance / Project Work',
];
