import {
  Briefcase,
  BriefcaseBusiness,
  Camera,
  Code2,
  Folder,
  Globe,
  House,
  Mail,
  MapPin,
  Paintbrush,
  User,
} from 'lucide-react'

export const navItems = [
  { label: 'Home', icon: House, href: '#home' },
  { label: 'About', icon: User, href: '#about' },
  { label: 'Projects', icon: Folder, href: '#projects' },
  { label: 'Skills', icon: Code2, href: '#skills' },
  { label: 'Experience', icon: Briefcase, href: '#experience' },
  { label: 'Contact', icon: Mail, href: '#contact' },
]

export const stats = [
  { value: '3+', label: 'Years coding' },
  { value: '6+', label: 'Projects completed' },
  { value: '10', label: 'Core technologies' },
  { value: 'BSIT', label: 'Information Technology' },
]

export const projects = [
  {
    title: 'EasyBaryo',
    category: 'Barangay Records Management',
    description: 'A centralized system for resident records, document requests, clearances, blotters, and daily barangay operations.',
    technologies: ['React', 'Django REST Framework', 'Tailwind CSS', 'MySQL'],
    accent: 'bg-[#A3F635]',
  },
  {
    title: 'Crop Forecasting',
    category: 'Forecasting & Mapping System',
    description: 'A crop monitoring and forecasting system for the Department of Agriculture, with analytics and interactive map visualizations.',
    technologies: ['React', 'Django', 'Chart.js', 'Leaflet', 'PostgreSQL'],
    accent: 'bg-[#E7E9E5]',
  },
  {
    title: 'QR-Based Attendance Management',
    category: 'Attendance Tracking System',
    description: 'An attendance system that scans QR codes to log participation in real time and generate reports for events and classes.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'QRCode.js'],
    accent: 'bg-[#D9F99D]',
  },
]

export const skills = [
  'HTML5',
  'CSS3',
  'React',
  'JavaScript',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'PHP',
  'Figma',
  'Adobe Photoshop',
]

export const experience = [
  {
    role: 'Freelance Graphic Designer',
    company: 'Self-employed',
    period: '2021 — 2026',
    text: 'Designed digital layouts and visual materials for clients, managing multiple projects and deadlines independently.',
  },
]

export const education = [
  {
    degree: 'Bachelor of Science in Information Technology',
    school: 'Saint Louis College - Carlatan, San Fernando, La Union',
    period: '2022 — 2026',
  },
]

export const contactLinks = [
  { label: 'GitHub', href: 'https://github.com/cabreranikolai', icon: Globe },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/cabreranikolai/', icon: BriefcaseBusiness },
  { label: 'Instagram', href: 'https://www.instagram.com/diakosinikolai/', icon: Camera },
  { label: 'Graphic Design Portfolio', href: 'https://cabreranikolai-graphicportfolio.vercel.app/', icon: Paintbrush },
  { label: 'nikolai.cabrera0569@gmail.com', href: 'mailto:nikolai.cabrera0569@gmail.com', icon: Mail },
]

export const location = { label: 'Aringay, La Union', icon: MapPin }
