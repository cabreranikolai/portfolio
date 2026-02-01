import aboutImg from '../assets/aboutimage.JPEG';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section bg-[var(--bg-color)] overflow-hidden">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-16 text-[var(--primary-color)]"
                >
                    About Me
                </motion.h2>

                <div className="md:grid md:grid-cols-2 gap-12 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.2 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-8 md:mb-0 relative"
                    >
                        <div className="aspect-square bg-[var(--bg-secondary)] rounded-2xl overflow-hidden shadow-xl">
                            <img src={aboutImg} alt="About Nikolai" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-[var(--accent-color)] rounded-2xl -z-10 opacity-20"></div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.2 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h3 className="text-2xl font-bold mb-4 text-[var(--primary-color)]">
                            A dedicated developer based in La Union
                        </h3>
                        <p className="text-[var(--text-secondary)] mb-6 text-lg text-justify">
                            I started my coding journey around three years ago and quickly developed a passion for solving real-world problems through code.
                            As an Information Technology student, I’ve built a strong foundation in web development by working on academic projects and
                            practical applications that focus on usability and efficiency.
                        </p>
                        <p className="text-[var(--text-secondary)] mb-6 text-lg text-justify">
                            I focus on writing clean, maintainable code and creating user-friendly interfaces that are accessible to everyone.
                            With a strong background in graphic design, I bring a unique perspective to front-end development, ensuring that every project is not only functional but also visually stunning.
                            You can check out my design work on my <a href="https://cabreranikolai-graphicportfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-color)] hover:underline font-medium">Graphic Designer Portfolio</a>.
                        </p>

                        <div className="grid grid-cols-2 gap-4 text-center mt-8">
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ amount: 0.2 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="p-4 bg-[var(--bg-secondary)] rounded-lg"
                            >
                                <h4 className="text-3xl font-bold text-[var(--accent-color)]">3+</h4>
                                <p className="text-sm font-semibold text-[var(--text-primary)]">Years Experience</p>
                            </motion.div>
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ amount: 0.2 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="p-4 bg-[var(--bg-secondary)] rounded-lg"
                            >
                                <h4 className="text-3xl font-bold text-[var(--accent-color)]">6+</h4>
                                <p className="text-sm font-semibold text-[var(--text-primary)]">Projects Completed</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
