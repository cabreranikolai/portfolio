import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const projectsData = [
    {
        title: 'EasyBaryo',
        subtitle: 'Barangay Records Management System',
        description: 'Digitizes barangay operations, replacing paper records. Manages resident data, clearances, blotters, and daily activities via a centralized dashboard. Built with React and Django REST Framework for accuracy and efficiency.',
        keyFeatures: [
            'Resident information management',
            'Document request and clearance processing',
            'Blotter and incident record tracking',
            'Role-based user access (Admin / Secretary)'
        ],
        tags: ['React', 'Django REST Framework', 'Tailwind', 'MySQL'],
        images: [
            '/src/assets/projects/easybaryo_1.png',
            '/src/assets/projects/easybaryo_2.png',
            '/src/assets/projects/easybaryo_3.png'
        ]
    },
    {
        title: 'Crop Forecasting',
        subtitle: 'Crop Forecasting and Mapping Management System',
        description: 'Assists the Dept. of Agriculture in monitoring crops and forecasting trends. Features visual analytics and interactive mapping for decision-makers. Uses React and Django to transform data into actionable insights.',
        keyFeatures: [
            'Crop data input and management',
            'Forecasting and trend analysis',
            'Interactive map-based visualization',
            'Dashboard with analytical reports'
        ],
        tags: ['React', 'Django', 'Chart.js', 'Leaflet', 'PostgreSQL'],
        images: [
            '/src/assets/projects/crop_forecast_1.png',
            '/src/assets/projects/crop_forecast_2.png',
            '/src/assets/projects/crop_forecast_3.png'
        ]
    },
    {
        title: 'QR-Based Attendance Management',
        subtitle: 'QR Code Attendance Tracking System',
        description: 'Simplifies attendance tracking using QR codes for events and classes. Scans unique codes to log attendance in real-time, reducing errors. Generates detailed reports for easy tracking and verification.',
        keyFeatures: [
            'QR code-based attendance scanning',
            'Real-time attendance logging',
            'Secure and accurate record management',
            'Attendance reports and summaries'
        ],
        tags: ['React', 'Node.js', 'Express', 'MongoDB', 'QRCode.js'],
        images: [
            '/src/assets/projects/qr_attendance_1.png',
            '/src/assets/projects/qr_attendance_2.png',
            '/src/assets/projects/qr_attendance_3.png'
        ]
    },
];

const ProjectCard = ({ project, openLightbox }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
        <div className="bg-[var(--bg-color)] rounded-xl overflow-hidden shadow-lg flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
            {/* Image Carousel */}
            <div className="relative h-64 bg-[var(--bg-secondary)] group border-b border-[var(--bg-secondary)]/50">
                {/* Image or Placeholder */}
                <div className="w-full h-full flex items-center justify-center text-[var(--text-secondary)] font-medium">
                    <img
                        src={project.images[currentImageIndex]}
                        alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                        className="w-full h-full object-contain p-2 cursor-pointer transition-transform duration-300 group-hover:scale-105"
                        onClick={() => openLightbox(project.images[currentImageIndex])}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                        }}
                    />
                    <div className="hidden w-full h-full flex-col items-center justify-center bg-[var(--bg-secondary)] text-[var(--text-secondary)] p-4 text-center">
                        <span className="text-4xl mb-2">🖼️</span>
                        <span>Image not found</span>
                        <span className="text-xs mt-1">{project.images[currentImageIndex]}</span>
                    </div>
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Previous image"
                >
                    <FaChevronLeft size={16} />
                </button>
                <button
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Next image"
                >
                    <FaChevronRight size={16} />
                </button>

                {/* Dots Indicators */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {project.images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                            className={`w-2 h-2 rounded-full transition-all shadow-sm ${idx === currentImageIndex ? 'bg-[var(--primary-color)] w-4' : 'bg-gray-400 hover:bg-gray-600'}`}
                            aria-label={`Go to image ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                    <h3 className="text-2xl font-bold text-[var(--primary-color)] mb-1">{project.title}</h3>
                    <p className="text-sm font-medium text-[var(--accent-color)]">{project.subtitle}</p>
                </div>

                <p className="text-[var(--text-secondary)] mb-4 text-justify text-sm leading-relaxed">
                    {project.description}
                </p>

                <div className="mb-6">
                    <h4 className="text-sm font-bold text-[var(--text-primary)] mb-2 uppercase tracking-wider">Key Features</h4>
                    <ul className="list-disc list-inside space-y-1">
                        {project.keyFeatures.map((feature, idx) => (
                            <li key={idx} className="text-sm text-[var(--text-secondary)]">
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                            <span key={tag} className="text-xs font-semibold bg-[var(--bg-secondary)] px-3 py-1 rounded-full text-[var(--text-primary)] border border-gray-100 dark:border-gray-700">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openLightbox = (image) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'unset'; // Restore scrolling
    };

    return (
        <section id="projects" className="section bg-[var(--bg-color)] relative">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--primary-color)]">
                        Featured Projects
                    </h2>
                    <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
                        Here are some of the key projects I've worked on, showcasing my experience in full-stack development, data visualization, and system automation.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} project={project} openLightbox={openLightbox} />
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 transition-opacity duration-300"
                    onClick={closeLightbox}
                >
                    <button
                        className="absolute top-6 right-6 text-white hover:text-[var(--accent-color)] transition-colors p-2"
                        onClick={closeLightbox}
                        aria-label="Close lightbox"
                    >
                        <FaTimes size={32} />
                    </button>
                    <img
                        src={selectedImage}
                        alt="Project Full View"
                        className="max-w-full max-h-[90vh] object-contain rounded-md shadow-2xl"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
                    />
                </div>
            )}
        </section>
    );
};

export default Projects;
