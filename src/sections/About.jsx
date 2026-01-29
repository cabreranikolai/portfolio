import aboutImg from '../assets/aboutimage.JPEG';

const About = () => {
    return (
        <section id="about" className="section bg-[var(--bg-color)]">
            <div className="container">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[var(--primary-color)]">
                    About Me
                </h2>

                <div className="md:grid md:grid-cols-2 gap-12 items-center">
                    {/* Image Side */}
                    <div className="mb-8 md:mb-0 relative">
                        <div className="aspect-square bg-[var(--bg-secondary)] rounded-2xl overflow-hidden shadow-xl">
                            <img src={aboutImg} alt="About Nikolai" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-[var(--accent-color)] rounded-2xl -z-10 opacity-20"></div>
                    </div>

                    {/* Content Side */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-[var(--primary-color)]">
                            A dedicated developer based in La Union
                        </h3>
                        <p className="text-[var(--text-secondary)] mb-6 text-lg">
                            I started my coding journey around three years ago and quickly developed a passion for solving real-world problems through code.
                            As an Information Technology student, I’ve built a strong foundation in web development by working on academic projects and
                            practical applications that focus on usability and efficiency.
                        </p>
                        <p className="text-[var(--text-secondary)] mb-6 text-lg">
                            I focus on writing clean, maintainable code and creating user-friendly interfaces that are accessible to everyone.
                            When I’m not coding, you’ll usually find me exploring new web technologies, refining my design skills, or working on personal projects.
                        </p>

                        <div className="grid grid-cols-2 gap-4 text-center mt-8">
                            <div className="p-4 bg-[var(--bg-secondary)] rounded-lg">
                                <h4 className="text-3xl font-bold text-[var(--accent-color)]">3+</h4>
                                <p className="text-sm font-semibold">Years Experience</p>
                            </div>
                            <div className="p-4 bg-[var(--bg-color)] rounded-lg">
                                <h4 className="text-3xl font-bold text-[var(--accent-color)]">6+</h4>
                                <p className="text-sm font-semibold">Projects Completed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
