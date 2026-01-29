import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import profileImg from '../assets/profileimage2.jpg';
import resume from '../assets/CABRERA_Resume.pdf';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
            <div className="container grid md:grid-cols-2 gap-10 items-center">
                <div className="order-2 md:order-1">
                    <p className="text-[var(--accent-color)] font-bold mb-2">Hello, I'm</p>
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 text-[var(--primary-color)]">
                        Nikolai Cabrera
                    </h1>
                    <h2 className="text-2xl md:text-4xl text-[var(--text-secondary)] font-semibold mb-6">
                        Building Digital Experiences
                    </h2>
                    <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-lg">
                        I'm a Full-Stack Developer specializing in building exceptional digital experiences.
                        Currently, I'm focused on creating accessible, human-centered products.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a href="#projects" className="bg-[var(--accent-color)] text-white px-8 py-3 rounded-lg font-medium hover:bg-[var(--accent-hover)] transition-colors">
                            View Projects
                        </a>
                        <a href={resume} download="CABRERA_Resume.pdf" className="border-2 border-[var(--accent-color)] text-[var(--accent-color)] px-8 py-3 rounded-lg font-medium hover:bg-[var(--accent-color)] hover:text-white transition-colors gap-2 flex items-center">
                            <FaFileDownload /> Resume
                        </a>
                    </div>

                    <div className="flex gap-6 mt-12 text-2xl text-[var(--text-secondary)]">
                        <a href="https://github.com/cabreranikolai" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-color)]"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/cabreranikolai/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-color)]"><FaLinkedin /></a>
                    </div>
                </div>

                <div className="order-1 md:order-2 flex justify-center">
                    <div className="relative w-64 h-64 md:w-96 md:h-96">
                        {/* Placeholder for Profile Image */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent-color)] to-[var(--primary-color)] rounded-full opacity-20 blur-2xl animate-pulse"></div>
                        <div className="w-full h-full bg-[var(--bg-secondary)] rounded-full border-4 border-[var(--bg-color)] shadow-2xl overflow-hidden relative z-10 flex items-center justify-center text-gray-400">
                            <img src={profileImg} alt="Nikolai Cabrera" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
