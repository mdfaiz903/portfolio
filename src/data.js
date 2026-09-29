import {
  BarChart3,
  Braces,
  Boxes,
  CalendarDays,
  Code2,
  Database,
  FileCode2,
  FileText,
  GitBranch,
  Layers3,
  PlugZap,
  Settings2,
  Workflow,
} from 'lucide-react'

export const navItems = ['About', 'Experience', 'Skills', 'Services', 'Projects', 'Education', 'Contact']

export const strengths = [
  { number: '01', title: 'Problem solving', copy: 'Turning complex business needs into practical, dependable systems.' },
  { number: '02', title: 'Clean code', copy: 'Building readable, maintainable software that teams can confidently extend.' },
  { number: '03', title: 'Business automation', copy: 'Replacing repetitive work with streamlined digital workflows.' },
  { number: '04', title: 'Continuous learning', copy: 'Staying curious and sharpening the craft with every challenge.' },
]

export const achievements = [
  { value: '01', label: 'Reduced manual paperwork', copy: 'through thoughtful process automation' },
  { value: '02', label: 'Improved operations', copy: 'with customized ERP workflows' },
  { value: '03', label: 'Delivered vertical solutions', copy: 'tailored to industrial needs' },
]

export const skillGroups = [
  { icon: Code2, title: 'Programming', skills: ['Python', 'JavaScript'] },
  { icon: Layers3, title: 'Frameworks & Platforms', skills: ['Frappe Framework', 'ERPNext', 'Django', 'Django REST Framework'] },
  { icon: Database, title: 'Databases', skills: ['MariaDB', 'MySQL', 'SQLite'] },
  { icon: Braces, title: 'Tools', skills: ['Git', 'GitHub', 'Docker', 'Linux', 'VS Code'] },
  { icon: GitBranch, title: 'Development Practices', skills: ['Agile Development', 'Scrum', 'Code Review', 'Test Driven Development'] },
]

export const services = [
  {
    icon: Settings2,
    number: '01',
    title: 'Frappe & ERPNext Customization',
    description: 'Custom DocTypes, modules, workflows, permissions, client scripts, and business logic tailored to your operations.',
    tags: ['Frappe', 'ERPNext', 'Python'],
  },
  {
    icon: FileText,
    number: '02',
    title: 'Print Formats & Documents',
    description: 'Professional invoices, quotations, challans, payslips, labels, and other pixel-accurate PDF documents.',
    tags: ['Jinja', 'HTML/CSS', 'PDF'],
  },
  {
    icon: BarChart3,
    number: '03',
    title: 'Reports & Dashboards',
    description: 'Query reports, script reports, dashboards, KPIs, and data views that turn business records into clear decisions.',
    tags: ['SQL', 'Analytics', 'Charts'],
  },
  {
    icon: FileCode2,
    number: '04',
    title: 'Django Web Applications',
    description: 'Secure, scalable web applications and backends with authentication, admin tools, and clean, maintainable APIs.',
    tags: ['Django', 'DRF', 'JavaScript'],
  },
  {
    icon: PlugZap,
    number: '05',
    title: 'API & System Integration',
    description: 'REST API development, third-party integrations, payment services, and reliable data synchronization between systems.',
    tags: ['REST API', 'Integration', 'Automation'],
  },
  {
    icon: Workflow,
    number: '06',
    title: 'Automation, Fixes & Support',
    description: 'Workflow automation, bug fixing, performance improvements, data migration, deployment, and ongoing remote support.',
    tags: ['Docker', 'Linux', 'Support'],
  },
]

export const projects = [
  {
    index: '01',
    icon: CalendarDays,
    title: 'Class Routine Management',
    description: 'A full-stack smart class management system with role-based access, automatic routine generation, attendance tracking, change requests, and PDF or Excel exports.',
    technologies: ['Django REST Framework', 'React', 'JWT', 'SQLite'],
    accent: 'violet',
    featured: true,
    url: 'https://github.com/mdfaiz903/Class-Routine-Management',
  },
  {
    index: '02',
    icon: Boxes,
    title: 'Enterprise ERP for RMG Manufacturing',
    description: 'A comprehensive ERP solution for garment manufacturing with inventory management, quality assurance, production workflows, and real-time analytics.',
    technologies: ['Frappe', 'ERPNext', 'Python', 'JavaScript', 'MariaDB'],
    accent: 'cyan',
  },
  {
    index: '03',
    icon: Workflow,
    title: 'E-commerce Website',
    description: 'A responsive e-commerce platform with product management, authentication, and seamless order processing.',
    technologies: ['Django', 'Python', 'HTML', 'CSS', 'Bootstrap'],
    accent: 'violet',
  },
  {
    index: '04',
    icon: Braces,
    title: 'Recipe Sharing Website',
    description: 'A recipe management platform with user interaction, categorized recipes, and community rating features.',
    technologies: ['Django', 'JavaScript', 'HTML', 'CSS'],
    accent: 'amber',
  },
  {
    index: '05',
    icon: Layers3,
    title: 'Social Networking Website',
    description: 'A social platform with secure authentication, posts, comments, profiles, and password management.',
    technologies: ['Django', 'JavaScript', 'HTML', 'CSS'],
    accent: 'rose',
  },
]

export const projectScreenshots = [
  {
    src: '/projects/class-routine/dashboard.png',
    title: 'Admin dashboard',
    description: 'Live operational totals and teacher attendance reporting.',
  },
  {
    src: '/projects/class-routine/routine-generator.png',
    title: 'Automatic routine generator',
    description: 'Conflict-aware class placement with an editable preview.',
  },
  {
    src: '/projects/class-routine/routines.png',
    title: 'Routine management',
    description: 'A central view for schedules, rooms, teachers, and exports.',
  },
]
