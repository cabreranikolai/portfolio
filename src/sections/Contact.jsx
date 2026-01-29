import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
    return (
        <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10">
            <div className="container">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
                    Get In Touch
                </h2>

                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-[var(--accent-color)]">Let's Talk</h3>
                        <p className="mb-8 text-gray-300 text-lg">
                            I'm open to freelance opportunities and full-time roles.
                            If you have a project in mind or just want to say hi, feel free to reach out!
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-lg">
                                <FaEnvelope className="text-[var(--accent-color)]" />
                                <a href="mailto:nikolai.cabrera0569@gmail.com" className="hover:text-[var(--accent-color)] transition-colors">nikolai.cabrera0569@gmail.com</a>
                            </div>
                            <div className="flex items-center gap-4 text-lg">
                                <FaPhone className="text-[var(--accent-color)]" />
                                <span>09616038653</span>
                            </div>
                            <div className="flex items-center gap-4 text-lg">
                                <FaMapMarkerAlt className="text-[var(--accent-color)]" />
                                <span>Aringay, La Union</span>
                            </div>
                        </div>

                        <div className="flex gap-6 mt-10 text-2xl">
                            <a href="https://github.com/cabreranikolai" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-color)] transition-colors"><FaGithub /></a>
                            <a href="https://www.linkedin.com/in/cabreranikolai/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-color)] transition-colors"><FaLinkedin /></a>
                            <a href="https://www.instagram.com/diakosinikolai/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-color)] transition-colors"><FaInstagram /></a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="bg-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10">
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                            <input type="text" id="name" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--accent-color)] focus:bg-white/20 transition-all" placeholder="Your Name" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                            <input type="email" id="email" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--accent-color)] focus:bg-white/20 transition-all" placeholder="your@email.com" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                            <textarea id="message" rows="4" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--accent-color)] focus:bg-white/20 transition-all" placeholder="How can I help you?"></textarea>
                        </div>
                        <button type="button" className="w-full bg-[var(--accent-color)] hover:bg-[var(--accent-hover)] text-white font-bold py-3 rounded-lg transition-colors">
                            Send Message
                        </button>
                    </form>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Nikolai Cabrera. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
