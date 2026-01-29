import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiFigma, SiAdobephotoshop } from 'react-icons/si';

const skillsData = [
    { name: 'HTML5', icon: <FaHtml5 className="text-[#E34F26]" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" /> },
    { name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E]" /> },
    { name: 'React', icon: <FaReact className="text-[#61DAFB]" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
    { name: 'PHP', icon: <FaPhp className="text-[#777BB4]" /> },
    { name: 'Figma', icon: <SiFigma className="text-[#F24E1E]" /> },
    { name: 'Adobe Photoshop', icon: <SiAdobephotoshop className="text-[#31A8FF]" /> },
];

const Skills = () => {
    return (
        <section id="skills" className="section bg-[var(--bg-color)]">
            <div className="container">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[var(--primary-color)]">
                    My Skills
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {skillsData.map((skill) => (
                        <div
                            key={skill.name}
                            className="bg-[var(--bg-secondary)] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-4 group"
                        >
                            <div className="text-5xl transition-transform group-hover:scale-110 duration-300">
                                {skill.icon}
                            </div>
                            <p className="font-semibold text-[var(--text-secondary)]">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
