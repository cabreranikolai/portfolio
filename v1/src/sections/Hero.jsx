import { FaGithub, FaLinkedin, FaFileDownload, FaPalette } from 'react-icons/fa';
import profileImg from '../assets/profileimage2.jpg';
import resume from '../assets/CABRERA_Resume.pdf';
import { motion } from 'framer-motion';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const imageVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 1, ease: "easeOut" }
        }
    };

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            <div className="container grid md:grid-cols-2 gap-10 items-center">
                <motion.div
                    className="order-2 md:order-1"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.p variants={itemVariants} className="text-[var(--accent-color)] font-bold mb-2">Hello, I'm</motion.p>
                    <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-4 text-[var(--primary-color)]">
                        Nikolai Cabrera
                    </motion.h1>
                    <motion.h2 variants={itemVariants} className="text-2xl md:text-4xl text-[var(--text-secondary)] font-semibold mb-6">
                        Building Digital Experiences
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-[var(--text-secondary)] text-lg mb-8 max-w-lg">
                        I'm a Full-Stack Developer specializing in building exceptional digital experiences.
                        Currently, I'm focused on creating accessible, human-centered products.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                        <a href="#projects" className="bg-[var(--accent-color)] text-white px-8 py-3 rounded-lg font-medium hover:bg-[var(--accent-hover)] transition-colors">
                            View Projects
                        </a>
                        <a href={resume} download="CABRERA_Resume.pdf" className="border-2 border-[var(--accent-color)] text-[var(--accent-color)] px-8 py-3 rounded-lg font-medium hover:bg-[var(--accent-color)] hover:text-white transition-colors gap-2 flex items-center">
                            <FaFileDownload /> Resume
                        </a>
                    </motion.div>

                    <div className="flex gap-6 mt-12 text-2xl text-[var(--text-secondary)]">
                        <motion.a
                            variants={itemVariants}
                            href="https://github.com/cabreranikolai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[var(--accent-color)] transition-colors"
                            title="GitHub Profile"
                        >
                            <FaGithub />
                        </motion.a>
                        <motion.a
                            variants={itemVariants}
                            href="https://www.linkedin.com/in/cabreranikolai/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[var(--accent-color)] transition-colors"
                            title="LinkedIn Profile"
                        >
                            <FaLinkedin />
                        </motion.a>
                        <motion.a
                            variants={itemVariants}
                            href="https://cabreranikolai-graphicportfolio.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[var(--accent-color)] transition-colors"
                            title="Graphic Design Portfolio"
                        >
                            <FaPalette />
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div
                    className="order-1 md:order-2 flex justify-center"
                    initial="hidden"
                    animate="visible"
                    variants={imageVariants}
                >
                    <div className="relative w-64 h-64 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent-color)] to-[var(--primary-color)] rounded-full opacity-20 blur-2xl animate-pulse"></div>
                        <div className="w-full h-full bg-[var(--bg-secondary)] rounded-full border-4 border-[var(--bg-color)] shadow-2xl overflow-hidden relative z-10 flex items-center justify-center text-gray-400">
                            <img src={profileImg} alt="Nikolai Cabrera" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
