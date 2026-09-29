import {
  Braces,
  Boxes,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Workflow,
} from 'lucide-react'

export const navItems = ['About', 'Experience', 'Skills', 'Projects', 'Education', 'Contact']

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

export const projects = [
  {
    index: '01',
    icon: Boxes,
    title: 'Enterprise ERP for RMG Manufacturing',
    description: 'A comprehensive ERP solution for garment manufacturing with inventory management, quality assurance, production workflows, and real-time analytics.',
    technologies: ['Frappe', 'ERPNext', 'Python', 'JavaScript', 'MariaDB'],
    accent: 'cyan',
  },
  {
    index: '02',
    icon: Workflow,
    title: 'E-commerce Website',
    description: 'A responsive e-commerce platform with product management, authentication, and seamless order processing.',
    technologies: ['Django', 'Python', 'HTML', 'CSS', 'Bootstrap'],
    accent: 'violet',
  },
  {
    index: '03',
    icon: Braces,
    title: 'Recipe Sharing Website',
    description: 'A recipe management platform with user interaction, categorized recipes, and community rating features.',
    technologies: ['Django', 'JavaScript', 'HTML', 'CSS'],
    accent: 'amber',
  },
  {
    index: '04',
    icon: Layers3,
    title: 'Social Networking Website',
    description: 'A social platform with secure authentication, posts, comments, profiles, and password management.',
    technologies: ['Django', 'JavaScript', 'HTML', 'CSS'],
    accent: 'rose',
  },
]
