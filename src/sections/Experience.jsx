import { motion } from 'framer-motion';

const experienceData = [
    {
        role: 'Freelance Graphic Designer',
        company: 'Self-Employed',
        period: '2021 - Present',
        description: 'Designed digital layouts and visual materials for various clients. Managed multiple projects while meeting deadlines independently.'
    }
];

const educationData = [
    {
        degree: 'Bachelor of Science in Information Technology',
        school: 'Saint Louis College - Carlatan, San Fernando, La Union',
        period: '2022 - Present'
    },
    {
        degree: 'Senior High School',
        school: 'Aringay National High School - Poblacion, Aringay, La Union',
        period: '2020 - 2022'
    },
    {
        degree: 'Junior High School',
        school: 'Aringay National High School - Poblacion, Aringay, La Union',
        period: '2016 - 2020'
    },
    {
        degree: 'Elementary',
        school: 'Aringay Central Elementary School - Poblacion, Aringay, La Union',
        period: '2010 - 2016'
    }
];

const Experience = () => {
    return (
        <section id="experience" className="section bg-[var(--bg-color)]">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-16 text-[var(--primary-color)]"
                >
                    Experience & Education
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Experience Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-bold mb-8 text-[var(--accent-color)]">Work Experience</h3>
                        <div className="space-y-8 border-l-2 border-[var(--accent-color)] pl-8 relative">
                            {experienceData.map((item, index) => (
                                <div key={index} className="relative">
                                    {/* Timeline Dot */}
                                    <div className="absolute -left-[39px] top-0 w-5 h-5 rounded-full bg-[var(--accent-color)] border-4 border-[var(--bg-color)]"></div>

                                    <h4 className="text-xl font-bold text-[var(--primary-color)]">{item.role}</h4>
                                    <p className="text-[var(--text-secondary)] font-medium mb-2">{item.company} | {item.period}</p>
                                    <p className="text-[var(--text-secondary)]">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Education Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-bold mb-8 text-[var(--accent-color)]">Education</h3>
                        <div className="space-y-8 border-l-2 border-[var(--accent-color)] pl-8 relative">
                            {educationData.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ amount: 0.2 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative"
                                >
                                    <div className="absolute -left-[39px] top-0 w-5 h-5 rounded-full bg-[var(--accent-color)] border-4 border-[var(--bg-color)]"></div>

                                    <h4 className="text-xl font-bold text-[var(--primary-color)]">{item.degree}</h4>
                                    <p className="text-[var(--text-secondary)] font-medium">{item.school}</p>
                                    <p className="text-[var(--text-secondary)] opacity-75">{item.period}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
